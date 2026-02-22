#!/bin/bash

# PostgreSQL Restore Script
# Backup faylidan ma'lumotlar bazasini tiklaydi

set -e

BACKUP_DIR="/backups"

# Parametrlarni tekshirish
if [ -z "$1" ]; then
  echo "❌ Xatolik: Backup fayl nomi ko'rsatilmagan!"
  echo ""
  echo "📖 Foydalanish:"
  echo "  ./restore.sh <backup_fayl_nomi>"
  echo ""
  echo "🗂️  Mavjud backuplar:"
  ls -lht "${BACKUP_DIR}"/kino_db_backup_*.sql.gz | head -10
  exit 1
fi

BACKUP_FILE="$1"
BACKUP_PATH="${BACKUP_DIR}/${BACKUP_FILE}"

# Fayl mavjudligini tekshirish
if [ ! -f "${BACKUP_PATH}" ]; then
  echo "❌ Xatolik: Backup fayl topilmadi: ${BACKUP_PATH}"
  echo ""
  echo "🗂️  Mavjud backuplar:"
  ls -lht "${BACKUP_DIR}"/kino_db_backup_*.sql.gz | head -10
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

# Bazani tozalash va qayta yaratish
echo "🗑️  Mavjud bazani o'chirish..."
PGPASSWORD="${POSTGRES_PASSWORD}" psql -h "${PGHOST}" -U "${POSTGRES_USER}" -d postgres <<-EOSQL
  SELECT pg_terminate_backend(pid) 
  FROM pg_stat_activity 
  WHERE datname = '${POSTGRES_DB}' AND pid <> pg_backend_pid();
  
  DROP DATABASE IF EXISTS ${POSTGRES_DB};
  CREATE DATABASE ${POSTGRES_DB};
EOSQL

# Backupdan ma'lumotlarni tiklash
echo "📥 Ma'lumotlarni tiklash..."
gunzip -c "${BACKUP_PATH}" | PGPASSWORD="${POSTGRES_PASSWORD}" psql \
  -h "${PGHOST}" \
  -U "${POSTGRES_USER}" \
  -d "${POSTGRES_DB}" \
  --quiet

echo "✅ Restore tugallandi: $(date)"

# Statistika
TABLE_COUNT=$(PGPASSWORD="${POSTGRES_PASSWORD}" psql -h "${PGHOST}" -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" -t -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='public';")
echo "📊 Tiklangan jadvallar soni: ${TABLE_COUNT}"

echo "🎉 Muvaffaqiyatli tiklandi!"
