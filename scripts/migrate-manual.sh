#!/bin/bash
# Manual migration script - run this on your DigitalOcean droplet

echo "🔧 Manual Database Migration"
echo "=============================="
echo ""

# Check database connection
echo "1️⃣ Testing database connection..."
if docker exec kino_database psql -U postgres -d kino_db -c "SELECT 1;" > /dev/null 2>&1; then
    echo "✅ Database connection OK"
else
    echo "❌ Database connection FAILED"
    echo "Make sure the database container is running: docker-compose ps"
    exit 1
fi

echo ""
echo "2️⃣ Checking current database tables..."
docker exec kino_database psql -U postgres -d kino_db -c "SELECT tablename FROM pg_tables WHERE schemaname = 'public';"

echo ""
echo "3️⃣ Running migrations inside app container..."
docker exec kino_bot sh -c "npx prisma migrate deploy"

echo ""
echo "4️⃣ Verifying tables were created..."
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

echo ""
echo "5️⃣ Checking if User table exists..."
if docker exec kino_database psql -U postgres -d kino_db -c "SELECT * FROM \"User\" LIMIT 1;" > /dev/null 2>&1; then
    echo "✅ User table exists!"
else
    echo "❌ User table still missing!"
    exit 1
fi

echo ""
echo "✅ Migration complete! Restart the app:"
echo "   docker-compose restart app"
