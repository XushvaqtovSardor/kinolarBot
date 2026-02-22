#!/bin/bash

# Manual Backup Script (Docker-dan tashqarida ishlatish uchun)
# Bu script Docker container ichida backup yaratadi

set -e

echo "🔄 Manual backup boshlandi..."
echo ""

# Docker container ishlayotganini tekshirish
if ! docker ps | grep -q kino_database; then
  echo "❌ Xatolik: kino_database container ishlamayapti!"
  echo ""
  echo "Container ishga tushirish:"
  echo "  docker-compose up -d db"
  exit 1
fi

# Docker container ichida backup scriptini ishga tushirish
docker exec kino_database /bin/bash -c '
  BACKUP_DIR=/backups
  RETENTION_DAYS=180
  TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
  BACKUP_FILE="kino_db_backup_${TIMESTAMP}.sql.gz"
  BACKUP_PATH="${BACKUP_DIR}/${BACKUP_FILE}"
  
  mkdir -p ${BACKUP_DIR}
  
  echo "📁 Fayl: ${BACKUP_FILE}"
  
  # Backup yaratish (verbose output stderr ga, uni ignore qilamiz)
  PGPASSWORD=12345 pg_dump \
    -h localhost \
    -U postgres \
    -d kino_db \
    --format=plain \
    --no-owner \
    --no-acl \
    --clean \
    --if-exists \
    --verbose \
    2>/dev/null | gzip -9 > ${BACKUP_PATH}
  
  # Integrity test
  if ! gzip -t ${BACKUP_PATH} 2>/dev/null; then
    echo "❌ Xatolik: Backup fayli buzilgan!"
    rm -f ${BACKUP_PATH}
    exit 1
  fi
  
  BACKUP_SIZE=$(du -h ${BACKUP_PATH} | cut -f1)
  echo "✅ Backup yaratildi: ${BACKUP_SIZE}"
  
  # Eski backuplarni o'chirish (180 kundan eski)
  DELETED=0
  if command -v find >/dev/null 2>&1; then
    DELETED_LIST=$(find ${BACKUP_DIR} -name "kino_db_backup_*.sql.gz" -type f -mtime +"${RETENTION_DAYS}" -print 2>/dev/null || true)
    if [ -n "$DELETED_LIST" ]; then
      echo "$DELETED_LIST" | while read -r file; do
        rm -f "$file" 2>/dev/null && DELETED=$((DELETED + 1))
      done
    fi
  fi
  if [ "$DELETED" -gt 0 ]; then
    echo "🗑️  Ochirildi: ${DELETED} ta eski backup"
  fi
"

if [ $? -eq 0 ]; then
  echo ""
  echo "🎉 Manual backup tugallandi!"
  echo ""
  echo "📋 Mavjud backuplar:"
  ls -lht backups/kino_db_backup_*.sql.gz 2>/dev/null | head -5 || echo "Backuplar topilmadi"
  echo ""
  echo "📊 Jami:"
  BACKUP_COUNT=$(ls backups/kino_db_backup_*.sql.gz 2>/dev/null | wc -l)
  TOTAL_SIZE=$(du -sh backups 2>/dev/null | cut -f1)
  echo "  • Backuplar soni: ${BACKUP_COUNT}"
  echo "  • Jami hajm: ${TOTAL_SIZE}"
else
  echo ""
  echo "❌ Backup yaratishda xatolik!"
  exit 1
fi
