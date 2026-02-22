#!/bin/bash
# Database diagnostic va fix script

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 Database Diagnostic & Fix Tool"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 1. Check containers
echo "📦 Step 1: Checking containers..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
docker-compose ps
echo ""

# 2. Check database connection
echo "🔌 Step 2: Testing database connection..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if docker exec kino_database psql -U postgres -d kino_db -c "SELECT current_database(), current_user;" 2>/dev/null; then
    echo "✅ Database connection OK"
else
    echo "❌ Database connection FAILED!"
    echo "Fixing: Starting database container..."
    docker-compose up -d db
    sleep 5
fi
echo ""

# 3. Check current tables
echo "📊 Step 3: Checking existing tables..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
TABLES=$(docker exec kino_database psql -U postgres -d kino_db -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';")
echo "Found $TABLES tables in database"

if [ "$TABLES" -gt 0 ]; then
    echo "Tables list:"
    docker exec kino_database psql -U postgres -d kino_db -c "\dt"
else
    echo "⚠️  No tables found - migration needed!"
fi
echo ""

# 4. Check if app container exists and is running
echo "🤖 Step 4: Checking app container..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if docker ps | grep -q kino_bot; then
    echo "✅ App container is running"
    APP_RUNNING=true
else
    echo "⚠️  App container is not running"
    APP_RUNNING=false
fi
echo ""

# 5. Check DATABASE_URL in app container
if [ "$APP_RUNNING" = true ]; then
    echo "🔗 Step 5: Checking DATABASE_URL..."
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    docker exec kino_bot printenv DATABASE_URL 2>/dev/null || echo "⚠️  DATABASE_URL not found in container"
    echo ""
fi

# 6. Run migration
echo "🚀 Step 6: Running migrations..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Stop app first
echo "Stopping app container..."
docker-compose stop app

echo "Running migration..."
if docker-compose run --rm app sh -c "npx prisma generate && npx prisma migrate deploy"; then
    echo "✅ Migration completed successfully!"
else
    echo "❌ Migration failed!"
    echo ""
    echo "Trying alternative method..."
    docker-compose up -d app
    sleep 3
    docker exec kino_bot sh -c "npx prisma generate && npx prisma migrate deploy"
fi
echo ""

# 7. Verify tables
echo "✅ Step 7: Verifying tables..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
TABLES_AFTER=$(docker exec kino_database psql -U postgres -d kino_db -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';")
echo "Tables count: $TABLES_AFTER"

if docker exec kino_database psql -U postgres -d kino_db -c "SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename = 'User';" | grep -q "User"; then
    echo "✅ User table exists!"
    
    # Show all tables
    echo ""
    echo "All tables:"
    docker exec kino_database psql -U postgres -d kino_db -c "SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;"
else
    echo "❌ User table still missing!"
    echo ""
    echo "FALLBACK: Trying prisma db push..."
    docker exec kino_bot npx prisma db push --accept-data-loss
fi
echo ""

# 8. Restart app
echo "♻️  Step 8: Restarting app..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
docker-compose up -d app
echo "Waiting for app to start..."
sleep 5
echo ""

# 9. Check logs
echo "📋 Step 9: Checking recent logs..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
docker-compose logs --tail=30 app | grep -E "(error|Error|ERROR|info.*running|migration)" || docker-compose logs --tail=30 app
echo ""

# 10. Final check
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎯 Final Status Check"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if docker exec kino_database psql -U postgres -d kino_db -c "SELECT COUNT(*) FROM \"User\";" 2>/dev/null; then
    echo "✅ SUCCESS! User table is working!"
    echo ""
    echo "Your bot should now work. Try sending /start"
else
    echo "❌ FAILED! User table still not accessible"
    echo ""
    echo "Next steps:"
    echo "1. Check .env file for correct DATABASE_URL"
    echo "2. Run: docker-compose logs app"
    echo "3. Run: docker exec kino_database psql -U postgres -d kino_db -c '\dt'"
fi
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Done! Check the output above for any errors."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
