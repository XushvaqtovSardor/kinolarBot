#!/bin/bash

# PostgreSQL Backup Script
# Ma'lumotlar bazasini zaxiralab, 40 kun davomida saqlab qoladi

set -e

# Konfiguratsiya
BACKUP_DIR="/backups"
RETENTION_DAYS="${BACKUP_RETENTION_DAYS:-180}"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="kino_db_backup_${TIMESTAMP}.sql.gz"
BACKUP_PATH="${BACKUP_DIR}/${BACKUP_FILE}"

# Backup papkasini yaratish
mkdir -p "${BACKUP_DIR}"

echo "🔄 Backup boshlandi: $(date)"
echo "📁 Fayl: ${BACKUP_FILE}"

# PostgreSQL dump (SQL formatda va siqilgan holda)
PGPASSWORD="${POSTGRES_PASSWORD}" pg_dump \
  -h "${PGHOST}" \
  -U "${POSTGRES_USER}" \
  -d "${POSTGRES_DB}" \
  --format=plain \
  --no-owner \
  --no-acl \
  --verbose \
  2>&1 | gzip > "${BACKUP_PATH}"

# Backup fayli hajmini tekshirish
BACKUP_SIZE=$(du -h "${BACKUP_PATH}" | cut -f1)
echo "✅ Backup yaratildi: ${BACKUP_SIZE}"

# Eski backuplarni o'chirish (6 oydan eski)
echo "🗑️  Eski backuplarni tozalash..."
find "${BACKUP_DIR}" -name "kino_db_backup_*.sql.gz" -type f -mtime +${RETENTION_DAYS} -delete

# Mavjud backuplar sonini ko'rsatish
BACKUP_COUNT=$(find "${BACKUP_DIR}" -name "kino_db_backup_*.sql.gz" -type f | wc -l)
echo "📊 Jami backuplar: ${BACKUP_COUNT}"

# Eng so'nggi 5 ta backupni ko'rsatish
echo "📋 So'nggi backuplar:"
ls -lht "${BACKUP_DIR}"/kino_db_backup_*.sql.gz | head -5

echo "🎉 Backup tugallandi: $(date)"
