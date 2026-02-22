#!/bin/bash
# Direct SQL migration script - bypasses Prisma migrate
# Use this if Prisma migrations are failing

echo "🔧 Direct SQL Migration Tool"
echo "=============================="
echo ""

# Check if database is accessible
echo "📡 Checking database connection..."
if ! docker exec kino_database psql -U postgres -d kino_db -c "SELECT 1;" > /dev/null 2>&1; then
    echo "❌ Cannot connect to database!"
    echo "Make sure database container is running: docker-compose ps"
    exit 1
fi

echo "✅ Database connected"
echo ""

# Check if tables already exist
echo "📊 Checking existing tables..."
TABLE_COUNT=$(docker exec kino_database psql -U postgres -d kino_db -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';")

if [ "$TABLE_COUNT" -gt 5 ]; then
    echo "⚠️  Tables already exist ($TABLE_COUNT tables found)"
    echo "Do you want to continue? This will recreate all tables. (y/N)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo "Cancelled."
        exit 0
    fi
fi

echo ""
echo "🗄️  Applying migrations directly to database..."

# Apply the init migration
echo "Applying init migration..."
docker exec -i kino_database psql -U postgres -d kino_db < prisma/migrations/20260128071711_init/migration.sql

if [ $? -eq 0 ]; then
    echo "✅ Init migration applied"
else
    echo "❌ Failed to apply init migration"
    exit 1
fi

# Apply the second migration
echo "Applying private admin approval migration..."
docker exec -i kino_database psql -U postgres -d kino_db < prisma/migrations/20260204222839_add_private_with_admin_approval/migration.sql

if [ $? -eq 0 ]; then
    echo "✅ Second migration applied"
else
    echo "❌ Failed to apply second migration"
    exit 1
fi

echo ""
echo "✅ All migrations applied successfully!"
echo ""

# Verify tables
echo "📋 Verifying tables..."
docker exec kino_database psql -U postgres -d kino_db -c "SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;"

echo ""
echo "🔍 Checking User table..."
USER_COUNT=$(docker exec kino_database psql -U postgres -d kino_db -t -c "SELECT COUNT(*) FROM \"User\";")
echo "User table has $USER_COUNT records"

echo ""
echo "✅ Migration complete! Now restart the app:"
echo "   docker-compose restart app"
