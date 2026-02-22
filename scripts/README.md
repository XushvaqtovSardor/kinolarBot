# 🗄️ PostgreSQL Backup & Restore

Ushbu tizim PostgreSQL ma'lumotlar bazasini avtomatik zaxiralab, 40 kun davomida saqlab qoladi.

## 📋 Xususiyatlar

- ✅ Avtomatik kunlik backup (har 24 soatda)
- ✅ Siqilgan format (gzip) - joy tejaydi
- ✅ 6 oy davomida saqlanadi
- ✅ Manual backup/restore imkoniyati
- ✅ CI/CD bilan ishlaydi - ma'lumotlar saqlanib qoladi

## 🚀 Ishga tushirish

Docker Compose orqali avtomatik ishga tushadi:

```bash
docker-compose up -d
```

Backup service har 24 soatda avtomatik ishga tushadi.

## 📁 Backup Joylashuvi

Barcha backuplar `backups/` papkasida saqlanadi:
- Format: `kino_db_backup_YYYYMMDD_HHMMSS.sql.gz`
- Misol: `kino_db_backup_20260222_143000.sql.gz`

## 🔧 Qo'lda Backup Yaratish

```bash
# Linux/Mac
chmod +x scripts/manual-backup.sh
./scripts/manual-backup.sh

# Windows (Git Bash)
bash scripts/manual-backup.sh

# Yoki Docker orqali
docker exec kino_backup /scripts/backup.sh
```

## ♻️ Backupni Tiklash

**🔄 BATAFSIL QO'LLANMA:** [RESTORE_GUIDE.md](RESTORE_GUIDE.md) ⭐

Restore qo'llanmasida:
- ✅ 4 xil tiklash usuli (avtomatik va manual)
- ✅ Barcha xatolar va ularning yechimlari
- ✅ Amaliy misollar va stsenariylar
- ✅ Production uchun xavfsizlik checklisti
- ✅ FAQ va troubleshooting

### Tezkor Tiklash (Qisqa versiya)

```bash
# 1. Mavjud backuplarni ko'rish
ls -lh backups/

# 2. Restore qilish
chmod +x scripts/manual-restore.sh
./scripts/manual-restore.sh kino_db_backup_20260222_143000.sql.gz

# Yoki Docker orqali
docker exec -i kino_backup /scripts/restore.sh kino_db_backup_20260222_143000.sql.gz
```

### Manual usul (Docker-siz)

```bash
# 1. Container nomini olish
docker ps

# 2. Restore qilish
gunzip -c backups/kino_db_backup_20260222_143000.sql.gz | \
  docker exec -i kino_database psql -U postgres -d kino_db
```

## 📊 Backup Statistikasi

Mavjud backuplarni ko'rish:

```bash
# Barcha backuplar
ls -lh backups/

# Eng so'nggi 10 ta
ls -lht backups/ | head -10

# Jami hajm
du -sh backups/
```

## ⚙️ Konfiguratsiya

`docker-compose.yml` faylida:

```yaml
environment:
  BACKUP_RETENTION_DAYS: 180  # Saqlanish muddati (kun) - 6 oy
```

## 🔒 Xavfsizlik

1. `.gitignore` ichida `backups/` qo'shilgan - backuplar git'ga yuklanmaydi
2. Faqat local serverda saqlanadi
3. Production uchun S3/Cloud storagega yuklash tavsiya etiladi

## 🔄 CI/CD bilan Ishlash

Docker volume ishlatilganligi suchun:
- ✅ Git push qilsangiz ham ma'lumotlar saqlanib qoladi
- ✅ Container qayta yaratilsa ham volume o'zgarmas
- ✅ Backup tizimi avtomatik ishlaydi
- ✅ Backuplar 6 oy saqlanadi

### Volume o'chirish (ehtiyot bo'ling!)

```bash
# Faqat container o'chirish (ma'lumotlar saqlanadi)
docker-compose down

# Container + volume o'chirish (ma'lumotlar yo'qoladi!)
docker-compose down -v

# Volume tiklash
docker-compose up -d
docker exec -i kino_backup /scripts/restore.sh <backup_file>
```

## 📝 Misollar

### 1. Kunlik backup tekshirish

```bash
# Bugungi backupni ko'rish
ls -lh backups/ | grep $(date +%Y%m%d)
```

### 2. Eng so'nggi backupni tiklash

```bash
# Eng so'nggi faylni topish va tiklash
LATEST=$(ls -t backups/kino_db_backup_*.sql.gz | head -1)
./scripts/manual-restore.sh $(basename $LATEST)
```

### 3. Ma'lum sana backupini tiklash

```bash
# Masalan, 2026-02-20 sanasidagi backup
ls backups/ | grep 20260220
./scripts/manual-restore.sh kino_db_backup_20260220_143000.sql.gz
```

## ⚠️ Muhim Eslatmalar

1. **Restore paytida**: Bazadagi barcha ma'lumotlar o'chiriladi va backup'dan tiklanadi
2. **Disk hajmi**: 6 oy uchun kifoya qiluvchi joy bo'lishi kerak (taxminan 180 ta backup)
3. **Performance**: Backup paytida baza sekinlashishi mumkin (kechasi amalga oshiriladi)
4. **Testing**: Production'da ishlatishdan oldin test muhitida sinab ko'ring

## 🆘 Muammolar va Yechimlar

### Backup ishlamayapti

```bash
# Container loglarini ko'rish
docker logs kino_backup

# Backup scriptini qo'lda ishga tushirish
docker exec kino_backup /scripts/backup.sh
```

### Restore xatolik beradi

```bash
# Database connection tekshirish
docker exec kino_database pg_isready -U postgres

# Bazani qo'lda yaratish
docker exec kino_database psql -U postgres -c "CREATE DATABASE kino_db;"
```

### Disk to'lib ketdi

```bash
# Eski backuplarni qo'lda o'chirish (6 oydan eski)
find backups/ -name "*.sql.gz" -mtime +180 -delete

# Yoki retention vaqtini qisqartirish
# docker-compose.yml da BACKUP_RETENTION_DAYS ni kamaytiring
```

## 📞 Yordam

Qo'shimcha savollar yoki muammolar bo'lsa, GitHub Issues'da savol yuboring.
