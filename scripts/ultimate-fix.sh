#!/bin/bash
# ULTIMATE FIX - Hammasi ishlamasa bu ishlatiladi

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔥 ULTIMATE DATABASE FIX"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "⚠️  Bu script quyidagilarni bajaradi:"
echo "   1. App container'ni to'xtatadi"
echo "   2. SQL migration'larni to'g'ridan-to'g'ri database'ga yuklaydi"
echo "   3. Container'larni qayta ishga tushiradi"
echo ""
echo "Davom etasizmi? (y/N)"
read -r response

if [[ ! "$response" =~ ^[Yy]$ ]]; then
    echo "Bekor qilindi."
    exit 0
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Step 1: Stopping app container"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
docker-compose stop app
echo "✅ App stopped"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Step 2: Checking database"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if docker exec kino_database psql -U postgres -d kino_db -c "SELECT version();" > /dev/null 2>&1; then
    echo "✅ Database is accessible"
else
    echo "❌ Database not accessible!"
    echo "Starting database..."
    docker-compose up -d db
    sleep 5
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Step 3: Applying SQL migrations"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if migration files exist
if [ ! -f "prisma/migrations/20260128071711_init/migration.sql" ]; then
    echo "❌ Migration file not found!"
    exit 1
fi

echo "Applying init migration..."
if docker exec -i kino_database psql -U postgres -d kino_db < prisma/migrations/20260128071711_init/migration.sql 2>&1 | grep -v "already exists"; then
    echo "✅ Init migration applied (or already exists)"
else
    echo "⚠️  Some errors occurred, continuing..."
fi

echo ""
echo "Applying second migration..."
if docker exec -i kino_database psql -U postgres -d kino_db < prisma/migrations/20260204222839_add_private_with_admin_approval/migration.sql 2>&1 | grep -v "already exists"; then
    echo "✅ Second migration applied (or already exists)"
else
    echo "⚠️  Some errors occurred, continuing..."
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Step 4: Verifying tables"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
TABLES=$(docker exec kino_database psql -U postgres -d kino_db -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';")
echo "Found $TABLES tables"

if [ "$TABLES" -lt 5 ]; then
    echo "❌ Not enough tables created! Something went wrong."
    exit 1
fi

echo ""
echo "Tables list:"
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Step 5: Testing User table"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if docker exec kino_database psql -U postgres -d kino_db -c "SELECT COUNT(*) FROM \"User\";" > /dev/null 2>&1; then
    echo "✅ User table is working!"
else
    echo "❌ User table is not accessible!"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Step 6: Rebuilding app container"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Building app..."
docker-compose build app

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Step 7: Starting app"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
docker-compose up -d app

echo ""
echo "Waiting for app to start..."
sleep 10

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📍 Step 8: Checking logs"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
docker-compose logs --tail=30 app

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 DONE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ Bot ishga tushgan bo'lishi kerak!"
echo ""
echo "Tekshirish:"
echo "  • Telegram'da /start yuboring"
echo "  • Log'ni ko'ring: docker-compose logs -f app"
echo ""
echo "Agar hali ham ishlamasa:"
echo "  docker-compose logs app | grep -i error"
