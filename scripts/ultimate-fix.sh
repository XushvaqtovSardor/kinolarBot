#!/bin/bash
# DATABASE FIX - Faqat bu scriptni ishlating

echo "🔧 Database Fix Script"
echo ""

# 1. Stop app
echo "1. App to'xtatilmoqda..."
docker-compose stop app

# 2. Apply SQL migrations directly
echo ""
echo "2. SQL migration'lar yuklanmoqda..."
docker exec -i kino_database psql -U postgres -d kino_db < prisma/migrations/20260128071711_init/migration.sql 2>&1 | grep -v "already exists" || true
docker exec -i kino_database psql -U postgres -d kino_db < prisma/migrations/20260204222839_add_private_with_admin_approval/migration.sql 2>&1 | grep -v "already exists" || true

# 3. Verify
echo ""
echo "3. Table'lar tekshirilmoqda..."
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

# 4. Rebuild & Start
echo ""
echo "4. Container rebuild va start..."
docker-compose build app
docker-compose up -d app

# 5. Show logs
echo ""
echo "5. Loglar:"
sleep 5
docker-compose logs --tail=20 app

echo ""
echo "✅ TAYYOR! Bot ishlashi kerak."
echo "Telegram'da /start yuboring."
