#!/bin/bash
# Server'da migration apply qilish uchun script

echo "🔧 Serverda migration apply qilish"
echo "===================================="
echo ""

# 1. Container ichiga kirish va migration qilish
echo "📦 Docker container ichida migration..."
docker exec -it kino_bot sh -c "npx prisma migrate deploy"

echo ""
echo "✅ Migration bajarildi!"
echo ""

# 2. Container restart (optional)
echo "🔄 Container restart..."
docker restart kino_bot

echo ""
echo "✅ Container qayta ishga tushirildi!"
echo ""
echo "📊 Loglarni ko'rish uchun:"
echo "   docker logs -f kino_bot"
