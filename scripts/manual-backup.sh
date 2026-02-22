#!/bin/bash

# Manual Backup Script (Docker-dan tashqarida ishlatish uchun)

set -e

echo "🔄 Manual backup boshlandi..."

# Docker container ichida backup scriptini ishga tushirish
docker exec kino_database /bin/bash -c "
  BACKUP_DIR=/backups
  RETENTION_DAYS=180
  TIMESTAMP=\$(date +\"%Y%m%d_%H%M%S\")
  BACKUP_FILE=\"kino_db_backup_\${TIMESTAMP}.sql.gz\"
  BACKUP_PATH=\"\${BACKUP_DIR}/\${BACKUP_FILE}\"
  
  mkdir -p \${BACKUP_DIR}
  
  echo '📁 Fayl: '\${BACKUP_FILE}
  
  PGPASSWORD=12345 pg_dump \
    -h localhost \
    -U postgres \
    -d kino_db \
    --format=plain \
    --no-owner \
    --no-acl \
    2>&1 | gzip > \${BACKUP_PATH}
  
  BACKUP_SIZE=\$(du -h \${BACKUP_PATH} | cut -f1)
  echo '✅ Backup yaratildi: '\${BACKUP_SIZE}
  
  find \${BACKUP_DIR} -name 'kino_db_backup_*.sql.gz' -type f -mtime +\${RETENTION_DAYS} -delete
"

echo "🎉 Manual backup tugallandi!"
echo ""
echo "📋 Mavjud backuplar:"
ls -lht backups/kino_db_backup_*.sql.gz 2>/dev/null | head -5 || echo "Backuplar topilmadi"
