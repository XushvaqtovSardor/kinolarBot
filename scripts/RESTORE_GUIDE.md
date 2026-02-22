# 🔄 PostgreSQL Backup Tiklash Qo'llanmasi

Ushbu qo'llanma PostgreSQL ma'lumotlar bazasini backupdan qanday tiklashni batafsil tushuntiradi.

## 📋 Mundarija

1. [Boshlash](#boshlash)
2. [Avtomatik Tiklash (Tavsiya etiladi)](#avtomatik-tiklash)
3. [Manual Tiklash](#manual-tiklash)
4. [Docker ichida Tiklash](#docker-ichida-tiklash)
5. [Muammolarni Hal Qilish](#muammolarni-hal-qilish)
6. [Xavfsizlik Choralari](#xavfsizlik-choralari)

---

## Boshlash

### ⚠️ MUHIM OGOHLANTIRISHLAR

1. **Ma'lumotlar yo'qoladi**: Restore paytida bazadagi **BARCHA** mavjud ma'lumotlar o'chiriladi
2. **Backup yarating**: Restore qilishdan oldin mavjud bazadan backup oling
3. **Testda sinab ko'ring**: Production serverda ishlatishdan oldin test muhitida sinab ko'ring
4. **Bot to'xtatilsin**: Restore paytida botni to'xtating

### 1️⃣ Boshlash Oldi Tekshiruv

```bash
# 1. Mavjud backuplarni ko'rish
ls -lh backups/

# 2. Backuplar soni
ls backups/ | wc -l

# 3. Eng so'nggi backup
ls -t backups/ | head -1

# 4. Ma'lum sanani topish (masalan, 2026-02-20)
ls backups/ | grep 20260220
```

---

## Avtomatik Tiklash (Tavsiya etiladi)

### 📦 Usul 1: Manual Restore Script (Eng oson)

Bu usul Windows, Mac va Linux'da ishlaydi.

```bash
# 1. Mavjud backuplarni ko'rish
ls -lh backups/

# Natija:
# -rw-r--r-- 1 user user 15M Feb 22 10:00 kino_db_backup_20260222_100000.sql.gz
# -rw-r--r-- 1 user user 14M Feb 21 10:00 kino_db_backup_20260221_100000.sql.gz
# -rw-r--r-- 1 user user 13M Feb 20 10:00 kino_db_backup_20260220_100000.sql.gz

# 2. Scriptga executable permission berish (Linux/Mac)
chmod +x scripts/manual-restore.sh

# 3. Restore qilish
./scripts/manual-restore.sh kino_db_backup_20260222_100000.sql.gz

# Windows (Git Bash)
bash scripts/manual-restore.sh kino_db_backup_20260222_100000.sql.gz
```

#### Script nima qiladi?

1. ✅ Backup fayl mavjudligini tekshiradi
2. ✅ Tasdiqlash so'raydi (yes/no)
3. ✅ Bazadagi barcha connectionlarni yopadi
4. ✅ Mavjud bazani o'chiradi
5. ✅ Yangi bo'sh baza yaratadi
6. ✅ Backup'dan ma'lumotlarni tiklaydi
7. ✅ Statistika ko'rsatadi

#### To'liq Jarayon:

```bash
$ ./scripts/manual-restore.sh kino_db_backup_20260222_100000.sql.gz

⚠️  DIQQAT: Bu amal bazadagi hamma ma'lumotlarni o'chiradi!
📁 Restore qilinadigan fayl: kino_db_backup_20260222_100000.sql.gz

Davom etishni xohlaysizmi? (yes/no): yes

🔄 Restore boshlandi: Sat Feb 22 14:30:00 UTC 2026
🗑️  Mavjud bazani o'chirish...
📥 Ma'lumotlarni tiklash...
✅ Restore tugallandi: Sat Feb 22 14:32:15 UTC 2026
📊 Tiklangan jadvallar soni: 15
🎉 Muvaffaqiyatli tiklandi!
```

---

## Manual Tiklash

### 📦 Usul 2: Docker Exec Orqali

```bash
# 1. Backup faylni tanlash
BACKUP_FILE="kino_db_backup_20260222_100000.sql.gz"

# 2. Docker container ichida restore qilish
docker exec -i kino_database bash << EOF
set -e

# Barcha connectionlarni yopish
PGPASSWORD=12345 psql -h localhost -U postgres -d postgres -c "
  SELECT pg_terminate_backend(pid) 
  FROM pg_stat_activity 
  WHERE datname = 'kino_db' AND pid <> pg_backend_pid();
"

# Bazani o'chirish va qayta yaratish
PGPASSWORD=12345 psql -h localhost -U postgres -d postgres -c "
  DROP DATABASE IF EXISTS kino_db;
  CREATE DATABASE kino_db;
"

# Backup'dan tiklash
gunzip -c /backups/${BACKUP_FILE} | PGPASSWORD=12345 psql -h localhost -U postgres -d kino_db

echo "✅ Restore tugallandi!"
EOF
```

### 📦 Usul 3: Psql Orqali To'g'ridan-to'g'ri

```bash
# 1. Backup faylni dekompressiya qilish va tiklash
gunzip -c backups/kino_db_backup_20260222_100000.sql.gz | \
  docker exec -i kino_database psql -U postgres -d kino_db

# 2. Yoki bitta buyruqda
docker exec -i kino_database bash -c \
  "gunzip -c /backups/kino_db_backup_20260222_100000.sql.gz | \
   PGPASSWORD=12345 psql -h localhost -U postgres -d kino_db"
```

---

## Docker ichida Tiklash

Agar siz containerning ichida ishlayotgan bo'lsangiz:

```bash
# 1. Container ichiga kirish
docker exec -it kino_backup bash

# 2. Restore scriptini ishga tushirish
/scripts/restore.sh kino_db_backup_20260222_100000.sql.gz

# 3. Yoki qo'lda restore
BACKUP_FILE="kino_db_backup_20260222_100000.sql.gz"

# Bazani tozalash
PGPASSWORD=$POSTGRES_PASSWORD psql -h $PGHOST -U $POSTGRES_USER -d postgres << EOF
SELECT pg_terminate_backend(pid) 
FROM pg_stat_activity 
WHERE datname = '$POSTGRES_DB' AND pid <> pg_backend_pid();

DROP DATABASE IF EXISTS $POSTGRES_DB;
CREATE DATABASE $POSTGRES_DB;
EOF

# Tiklash
gunzip -c /backups/$BACKUP_FILE | \
  PGPASSWORD=$POSTGRES_PASSWORD psql -h $PGHOST -U $POSTGRES_USER -d $POSTGRES_DB

echo "✅ Tiklandi!"
```

---

## Muammolarni Hal Qilish

### ❌ Xatolik: "Backup fayl topilmadi"

```bash
# Muammo: Fayl nomi noto'g'ri yoki fayl yo'q

# Yechim 1: Backuplarni tekshirish
ls -lh backups/

# Yechim 2: To'liq yo'l ko'rsatish
./scripts/manual-restore.sh backups/kino_db_backup_20260222_100000.sql.gz

# Yechim 3: Fayl nomi to'g'riligini tekshirish
BACKUP_FILE="kino_db_backup_20260222_100000.sql.gz"
if [ -f "backups/$BACKUP_FILE" ]; then
  echo "✅ Fayl topildi"
else
  echo "❌ Fayl yo'q"
fi
```

### ❌ Xatolik: "Permission denied"

```bash
# Muammo: Scriptda execute permission yo'q

# Yechim: Permission berish
chmod +x scripts/*.sh

# Yoki bash orqali ishga tushirish
bash scripts/manual-restore.sh kino_db_backup_20260222_100000.sql.gz
```

### ❌ Xatolik: "Database connection refused"

```bash
# Muammo: PostgreSQL ishlamayapti yoki port noto'g'ri

# Yechim 1: Container holatini tekshirish
docker ps | grep kino

# Yechim 2: PostgreSQL ishga tushirish
docker-compose up -d db

# Yechim 3: Loglarni ko'rish
docker logs kino_database

# Yechim 4: Connection test
docker exec kino_database pg_isready -U postgres
```

### ❌ Xatolik: "Role 'postgres' does not exist"

```bash
# Muammo: PostgreSQL user yaratilmagan

# Yechim: Userni yaratish
docker exec kino_database psql -U postgres -d postgres -c \
  "CREATE USER postgres WITH SUPERUSER PASSWORD '12345';"
```

### ❌ Xatolik: "Corrupted backup file"

```bash
# Muammo: Backup fayli buzilgan

# Yechim 1: Fayl hajmini tekshirish
ls -lh backups/kino_db_backup_20260222_100000.sql.gz

# Agar 0 byte bo'lsa, buzilgan
# Agar 100 byte dan kam bo'lsa, buzilgan

# Yechim 2: Gzip integrity test
gzip -t backups/kino_db_backup_20260222_100000.sql.gz

# Agar xatolik chiqsa, boshqa backupni tanlang
ls -t backups/ | head -5
```

### ❌ Xatolik: "Disk space full"

```bash
# Muammo: Disk to'lgan

# Yechim 1: Disk hajmini tekshirish
df -h

# Yechim 2: Eski backuplarni o'chirish
find backups/ -name "*.sql.gz" -mtime +180 -delete

# Yechim 3: Docker loglarini tozalash
docker system prune -a --volumes

# Yechim 4: PostgreSQL loglarini o'chirish
docker exec kino_database bash -c "find /var/log -name '*.log' -delete"
```

---

## Xavfsizlik Choralari

### 📋 Restore Qilishdan Oldin Checklist

```bash
# ✅ 1. Mavjud bazadan backup oling
./scripts/manual-backup.sh

# ✅ 2. Backup fayl hajmini tekshiring
ls -lh backups/ | tail -3

# ✅ 3. Botni to'xtating
docker stop kino_bot

# ✅ 4. Database connectionlarini tekshiring
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT count(*) FROM pg_stat_activity WHERE datname = 'kino_db';"

# ✅ 5. Backup integrity test
gzip -t backups/kino_db_backup_20260222_100000.sql.gz

# ✅ 6. Test restore (agar mumkin bo'lsa)
# Test database yaratib, u yerda sinab ko'ring
```

### 🔒 Production Restore (Ehtiyotkorlik bilan!)

```bash
# 1. Foydalanuvchilarni ogohlantirish
# Bot orqali xabar yuborish yoki status o'zgartirish

# 2. Botni to'xtatish
docker stop kino_bot

# 3. Hozirgi bazadan backup olish
./scripts/manual-backup.sh

# 4. Backup nusxasi yaratish (agar xatolik bo'lsa)
CURRENT_BACKUP=$(ls -t backups/ | head -1)
cp backups/$CURRENT_BACKUP backups/emergency_backup_$(date +%Y%m%d_%H%M%S).sql.gz

# 5. Restore qilish
./scripts/manual-restore.sh kino_db_backup_20260222_100000.sql.gz

# 6. Verificatsiya - jadvallarni tekshirish
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

# 7. Ma'lumotlar sonini tekshirish
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT 
    (SELECT COUNT(*) FROM \"User\") as users,
    (SELECT COUNT(*) FROM \"Movie\") as movies,
    (SELECT COUNT(*) FROM \"Serial\") as serials;"

# 8. Botni qayta ishga tushirish
docker start kino_bot

# 9. Bot loglarini kuzatish
docker logs -f kino_bot

# 10. Test qilish
# Botda bir nechta funksiyani sinab ko'ring
```

---

## Misollar va Stsenariylar

### 📝 Ssenariy 1: Bugungi Xatoni Tuzatish

```bash
# Muammo: Bugun kech baza buzildi, kechagi holatga qaytarish kerak

# 1. Kechagi backupni topish
ls backups/ | grep $(date -d "yesterday" +%Y%m%d)

# Natija: kino_db_backup_20260221_100000.sql.gz

# 2. Restore qilish
./scripts/manual-restore.sh kino_db_backup_20260221_100000.sql.gz

# 3. Tekshirish
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT NOW() as current_time, MAX(\"createdAt\") as last_record FROM \"User\";"
```

### 📝 Ssenariy 2: Ma'lum Sanaga Qaytish

```bash
# Muammo: 1 hafta oldingi holatga qaytarish kerak

# 1. Sana hisoblash (7 kun oldin)
TARGET_DATE=$(date -d "7 days ago" +%Y%m%d)
echo "Target date: $TARGET_DATE"

# 2. O'sha sanadagi backuplarni topish
ls backups/ | grep $TARGET_DATE

# 3. Eng yaxshi vaqtni tanlash (masalan, tong)
ls backups/ | grep ${TARGET_DATE}_10

# 4. Restore qilish
./scripts/manual-restore.sh kino_db_backup_20260215_100000.sql.gz
```

### 📝 Ssenariy 3: Eng So'nggi Backupga Qaytish

```bash
# Muammo: Eng so'nggi backupni tiklash kerak

# 1. Eng so'nggi backupni topish
LATEST_BACKUP=$(ls -t backups/kino_db_backup_*.sql.gz | head -1)
echo "Latest backup: $LATEST_BACKUP"

# 2. Restore qilish
./scripts/manual-restore.sh $(basename $LATEST_BACKUP)
```

### 📝 Ssenariy 4: Partial Restore (Faqat ma'lum jadvallar)

```bash
# Muammo: Faqat User jadvalini tiklash kerak, qolganlarini saqlab qolish

# 1. Backupdan faqat User jadvalini ajratib olish
gunzip -c backups/kino_db_backup_20260222_100000.sql.gz | \
  sed -n '/CREATE TABLE.*"User"/,/COPY.*"User"/p' > /tmp/user_table.sql

# 2. User jadvalini o'chirish
docker exec kino_database psql -U postgres -d kino_db -c \
  "TRUNCATE TABLE \"User\" CASCADE;"

# 3. Faqat User ma'lumotlarini tiklash
docker exec -i kino_database psql -U postgres -d kino_db < /tmp/user_table.sql

# 4. Tozalash
rm /tmp/user_table.sql
```

---

## Restore Keyingi Tekshiruvlar

```bash
# 1. Jadvallar soni
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='public';"

# 2. Har bir jadvaldagi yozuvlar soni
docker exec kino_database psql -U postgres -d kino_db -c "
  SELECT 
    schemaname,
    tablename,
    n_live_tup as row_count
  FROM pg_stat_user_tables
  ORDER BY n_live_tup DESC;
"

# 3. Database hajmi
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT pg_size_pretty(pg_database_size('kino_db')) as db_size;"

# 4. Eng so'nggi yozuvlar
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT MAX(\"createdAt\") as last_user FROM \"User\";
   SELECT MAX(\"createdAt\") as last_movie FROM \"Movie\";"

# 5. Indekslar tekshiruvi
docker exec kino_database psql -U postgres -d kino_db -c "\di"

# 6. Foreign key tekshiruvi
docker exec kino_database psql -U postgres -d kino_db -c "
  SELECT 
    tc.table_schema, 
    tc.table_name, 
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name 
  FROM information_schema.table_constraints AS tc 
  JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
  JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
  WHERE constraint_type = 'FOREIGN KEY';
"
```

---

## Tez-tez So'raladigan Savollar (FAQ)

### ❓ Restore qancha vaqt oladi?

**Javob**: 
- 10 MB backup → ~30 soniya
- 100 MB backup → ~2-3 daqiqa
- 1 GB backup → ~10-15 daqiqa

### ❓ Restore paytida bot ishlaydi-mi?

**Javob**: Yo'q, restore qilishdan oldin botni to'xtating. Aks holda connection xatoliklari bo'ladi.

### ❓ Necha marta restore qilish mumkin?

**Javob**: Cheksiz marta. Har safar eski ma'lumotlar o'chib, yangi ma'lumotlar tiklanadi.

### ❓ Restore qilishda xatolik bo'lsa?

**Javob**: 
1. Xatolik xabarini ko'ring
2. [Muammolarni Hal Qilish](#muammolarni-hal-qilish) bo'limini o'qing
3. Loglarni tekshiring: `docker logs kino_database`
4. Boshqa backupni sinab ko'ring

### ❓ Production'da qanday restore qilish kerak?

**Javob**: [Production Restore](#-production-restore-ehtiyotkorlik-bilan) bo'limini o'qing. Asosiy qoidalar:
1. Avval test qiling
2. Foydalanuvchilarni ogohlantiring
3. Botni to'xtating
4. Hozirgi bazadan backup oling
5. Restore qiling
6. Tekshiring
7. Botni ishga tushiring

---

## Yordam

Qo'shimcha yordam kerak bo'lsa:
- 📖 [Backup README](README.md)
- 🐛 [GitHub Issues](https://github.com/XushvaqtovSardor/aziz_botgrammy2/issues)
- 📧 Admin bilan bog'laning

---

## Xulosa

Restore jarayoni oddiy:

1. ✅ **Backup tanlash** - `ls backups/`
2. ✅ **Botni to'xtatish** - `docker stop kino_bot`
3. ✅ **Restore qilish** - `./scripts/manual-restore.sh backup_file.sql.gz`
4. ✅ **Tekshirish** - Ma'lumotlar to'g'ri tiklandimi?
5. ✅ **Botni ishga tushirish** - `docker start kino_bot`

**Omad!** 🎉
