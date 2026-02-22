#!/bin/bash

# Manual Restore Script (Docker-dan tashqarida ishlatish uchun)

set -e

if [ -z "$1" ]; then
  echo "❌ Xatolik: Backup fayl nomi ko'rsatilmagan!"
  echo ""
  echo "📖 Foydalanish:"
  echo "  ./manual-restore.sh <backup_fayl_nomi>"
  echo ""
  echo "🗂️  Mavjud backuplar:"
  ls -lht backups/kino_db_backup_*.sql.gz 2>/dev/null | head -10 || echo "Backuplar topilmadi"
  exit 1
fi

BACKUP_FILE="$1"

if [ ! -f "backups/${BACKUP_FILE}" ]; then
  echo "❌ Xatolik: Backup fayl topilmadi: backups/${BACKUP_FILE}"
  echo ""
  echo "🗂️  Mavjud backuplar:"
  ls -lht backups/kino_db_backup_*.sql.gz 2>/dev/null | head -10 || echo "Backuplar topilmadi"
  exit 1
fi

echo "⚠️  DIQQAT: Bu amal bazadagi hamma ma'lumotlarni o'chiradi!"
echo "📁 Restore qilinadigan fayl: ${BACKUP_FILE}"
echo ""
read -p "Davom etishni xohlaysizmi? (yes/no): " -r
echo

if [[ ! $REPLY =~ ^[Yy]es$ ]]; then
  echo "❌ Bekor qilindi"
  exit 1
fi

echo "🔄 Restore boshlandi: $(date)"

# Container ichida restore qilish
docker exec -i kino_database /bin/bash <<EOF
set -e

echo "🗑️  Mavjud bazani o'chirish..."
PGPASSWORD=12345 psql -h localhost -U postgres -d postgres <<-EOSQL
  SELECT pg_terminate_backend(pid) 
  FROM pg_stat_activity 
  WHERE datname = 'kino_db' AND pid <> pg_backend_pid();
  
  DROP DATABASE IF EXISTS kino_db;
  CREATE DATABASE kino_db;
EOSQL

echo "📥 Ma'lumotlarni tiklash..."
gunzip -c "/backups/${BACKUP_FILE}" | PGPASSWORD=12345 psql \
  -h localhost \
  -U postgres \
  -d kino_db \
  --quiet

echo "✅ Restore tugallandi"
EOF

echo "🎉 Manual restore muvaffaqiyatli tugallandi: $(date)"
