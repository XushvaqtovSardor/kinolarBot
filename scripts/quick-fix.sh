#!/bin/bash
# ODDIY FIX - faqat migration va restart

echo "🔧 Database migration fix..."
echo ""

# Container borligini tekshirish
if ! docker ps -a | grep -q kino_bot; then
    echo "❌ kino_bot container topilmadi!"
    echo "Ishga tushirish: docker-compose up -d"
    exit 1
fi

# Migration ishlatish
echo "🚀 Migration ishga tushirilmoqda..."
docker exec kino_bot sh -c "npx prisma generate && npx prisma migrate deploy"

if [ $? -eq 0 ]; then
    echo "✅ Migration muvaffaqiyatli!"
else
    echo "⚠️ Container ichida ishlamadi, docker-compose run orqali urinib ko'ramiz..."
    docker-compose stop app
    docker-compose run --rm app sh -c "npx prisma generate && npx prisma migrate deploy"
    docker-compose up -d app
fi

echo ""
echo "♻️ App restart qilinmoqda..."
docker-compose restart app

echo ""
echo "⏳ 5 soniya kutilmoqda..."
sleep 5

echo ""
echo "📋 Oxirgi loglar:"
docker-compose logs --tail=20 app

echo ""
echo "✅ Tayyor! Bot ishga tushgan bo'lishi kerak."
echo "Agar hali ham xato bo'lsa: docker-compose logs -f app"
