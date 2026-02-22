# 📦 Backup va Restore - To'liq Qo'llanma

## 🎯 Muhim Ma'lumot

**Backup nima?** - Bu sizning database ma'lumotlaringizning nusxasi. Agar biror narsa buzilsa, bu nusxadan qaytarib olishingiz mumkin.

**Muammo va yechim:**
- ❌ **NOTO'G'RI**: Backupdan restore qilgandan so'ng bot ishlamaydi  
- ✅ **TO'G'RI**: Restore qilgandan so'ng **botni qayta ishga tushirish** kerak

---

## 🚀 Tezkor Boshlash

### 1️⃣ Backup Yaratish (Oddiy usul)

```bash
# Projectingiz papkasida
cd /path/to/your/project

# Backup yaratish
chmod +x scripts/*.sh
./scripts/manual-backup.sh
```

**Natija:**
```
🔄 Manual backup boshlandi...
📁 Fayl: kino_db_backup_20260223_143000.sql.gz
✅ Backup yaratildi: 2.5M
🎉 Manual backup tugallandi!
```

### 2️⃣ Backup Restore Qilish

```bash
# Mavjud backuplarni ko'rish
ls -lht backups/

# Restore qilish
./scripts/manual-restore.sh kino_db_backup_20260223_143000.sql.gz

# Botni qayta ishga tushirish (MUHIM!)
docker-compose restart app
```

---

## 📖 Batafsil Qo'llanma

### Backup Yaratish

#### Usul 1: Manual Backup (Development)

```bash
# 1. Project papkasiga o'tish
cd /path/to/KInobot_uzimga

# 2. Backup yaratish
./scripts/manual-backup.sh
```

#### Usul 2: Docker Exec

```bash
docker exec kino_backup /scripts/backup.sh
```

#### Usul 3: Docker Compose

```bash
# Backup container ishga tushirish
docker-compose up -d backup

# Loglarni ko'rish
docker-compose logs -f backup
```

### Backup Restore Qilish

#### ⚠️ Restore qilishdan oldin ALBATTA o'qing!

**ESLATMA:**
1. Restore bazadagi **BARCHA** ma'lumotlarni o'chiradi
2. Restore qilishdan **OLDIN** yangi backup yarating
3. Restore qilgandan **KEYIN** botni qayta ishga tushiring

#### Usul 1: Manual Restore (Tavsiya etiladi)

```bash
# 1. Mavjud bazadan backup yaratish
./scripts/manual-backup.sh

# 2. Backuplarni ko'rish
ls -lht backups/

# 3. Restore qilish
./scripts/manual-restore.sh kino_db_backup_20260223_143000.sql.gz

# Tasdiqlashni so'raydi:
# Davom etishni xohlaysizmi? (yes/no): yes

# 4. MUHIM: Botni qayta ishga tushirish
docker-compose restart app

# Yoki to'liq qayta build
docker-compose down
docker-compose up -d
```

#### Usul 2: Docker Container Ichida

```bash
# Container ichiga kirish
docker exec -it kino_backup bash

# Restore qilish
/scripts/restore.sh kino_db_backup_20260223_143000.sql.gz

# Containerdan chiqish
exit

# Botni qayta ishga tushirish
docker-compose restart app
```

---

## 🔧 Muammolarni Hal Qilish

### ❌ Xatolik: Restore qilgandan keyin bot ishlamayapti

**Sabab:** Prisma client eski holatda qolgan.

**Yechim:**
```bash
# Bot containerini qayta ishga tushirish
docker-compose restart app

# Yoki to'liq qayta build
docker-compose down
docker-compose up -d

# Loglarni kuzatish
docker-compose logs -f app
```

### ❌ Xatolik: "Backup fayli buzilgan"

**Sabab:** Backup yaratilayotganda xatolik bo'lgan yoki fayl to'liq yuklanmagan.

**Yechim:**
```bash
# 1. Backup fayl hajmini tekshirish
ls -lh backups/kino_db_backup_*.sql.gz

# Agar 0 byte yoki juda kichik bo'lsa, buzilgan

# 2. Backup integrity test
gzip -t backups/kino_db_backup_20260223_143000.sql.gz

# Agar "OK" desa, to'g'ri
# Xatolik bersa, boshqa backupni tanlang

# 3. Boshqa backupni sinash
./scripts/manual-restore.sh kino_db_backup_20260222_100000.sql.gz
```

### ❌ Xatolik: "Permission denied"

**Sabab:** Scriptga execute ruxsati berilmagan.

**Yechim:**
```bash
# Linux/Mac
chmod +x scripts/*.sh
./scripts/manual-backup.sh

# Windows (Git Bash)
bash scripts/manual-backup.sh
```

### ❌ Xatolik: "Container ishlamayapti"

**Sabab:** Database container to'xtab qolgan.

**Yechim:**
```bash
# Container holatini tekshirish
docker ps

# Database ishga tushirish
docker-compose up -d db

# Barcha containerlarni ishga tushirish
docker-compose up -d
```

### ❌ Xatolik: "Database does not exist"

**Sabab:** Restore paytida baza to'liq tiklanmagan.

**Yechim:**
```bash
# 1. Container loglarini ko'rish
docker logs kino_database --tail 50

# 2. Database mavjudligini tekshirish
docker exec kino_database psql -U postgres -l

# 3. Agar kino_db yo'q bo'lsa, qo'lda yaratish
docker exec kino_database psql -U postgres -c "CREATE DATABASE kino_db;"

# 4. Qayta restore qilish
./scripts/manual-restore.sh kino_db_backup_20260223_143000.sql.gz

# 5. Botni qayta ishga tushirish
docker-compose restart app
```

---

## 📋 Best Practices (Eng Yaxshi Amaliyotlar)

### 1. Muntazam Backup

```bash
# Har kuni backup yaratish (cron yoki manual)
# Cron misoli (Linux/Mac):
# 0 2 * * * cd /path/to/project && ./scripts/manual-backup.sh

# Windows (Task Scheduler)
# Action: Run script
# Program: bash
# Arguments: C:/path/to/project/scripts/manual-backup.sh
```

### 2. Restore Oldidan Checklist

```bash
# ✅ 1. Yangi backup yaratish
./scripts/manual-backup.sh

# ✅ 2. Disk hajmini tekshirish
df -h

# ✅ 3. Backup fayl to'g'riligini tekshirish
gzip -t backups/kino_db_backup_20260223_143000.sql.gz

# ✅ 4. Containerlar ishlayotganini tekshirish
docker ps

# ✅ 5. Restore qilish
./scripts/manual-restore.sh kino_db_backup_20260223_143000.sql.gz

# ✅ 6. Botni qayta ishga tushirish
docker-compose restart app

# ✅ 7. Bot loglarini kuzatish
docker-compose logs -f app
```

### 3. Backup Saqlab Qolish

```bash
# Muhim backuplarni alohida saqlash
mkdir -p backups/important
cp backups/kino_db_backup_20260223_143000.sql.gz backups/important/

# Yoki boshqa diskka nusxa olish
cp backups/kino_db_backup_*.sql.gz /mnt/external-disk/backups/
```

### 4. Backup Hajmini Kamaytirish

```bash
# Gzip maksimal siqish (-9)
# Avtomatik: scriptlarda allaqachon mavjud

# Eski backuplarni o'chirish (180 kundan eski)
find backups/ -name "kino_db_backup_*.sql.gz" -mtime +180 -delete

# Faqat eng so'nggi 30 ta backupni saqlash
ls -t backups/kino_db_backup_*.sql.gz | tail -n +31 | xargs rm -f
```

---

## 🧪 Test Qilish

### Local Test

```bash
# 1. Test backup yaratish
./scripts/manual-backup.sh

# 2. Eng so'nggi backupni olish
LATEST_BACKUP=$(ls -t backups/kino_db_backup_*.sql.gz | head -1)
echo "Latest: $LATEST_BACKUP"

# 3. Restore qilish
./scripts/manual-restore.sh $(basename $LATEST_BACKUP)

# 4. Botni qayta ishga tushirish
docker-compose restart app

# 5. Bot ishlab turganini tekshirish
docker-compose logs app | grep "Started successfully"
```

---

## 📊 Foydali Komandalar

### Backup Ma'lumotlari

```bash
# Barcha backuplar
ls -lh backups/

# Backuplar soni
ls backups/*.sql.gz 2>/dev/null | wc -l

# Umumiy hajm
du -sh backups/

# Eng so'nggi backup
ls -t backups/ | head -1

# Eng katta backup
ls -lhS backups/ | head -1

# Ma'lum sanani topish (masalan, 2026-02-20)
ls backups/ | grep 20260220
```

### Database Ma'lumotlari

```bash
# Jadvallar soni
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='public';"

# Foydalanuvchilar soni
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT COUNT(*) FROM \"User\";"

# Database hajmi
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT pg_size_pretty(pg_database_size('kino_db'));"

# Eng so'nggi foydalanuvchi
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT MAX(\"createdAt\") FROM \"User\";"
```

---

## 🎓 Backup Strategiyasi

### Development (Local)

```bash
# Kunlik: Ishdan oldin backup
./scripts/manual-backup.sh

# Katta o'zgarishlardan oldin
./scripts/manual-backup.sh
```

### Production (Droplet/Server)

```bash
# Avtomatik: Docker backup container (har 6 soatda)
# Qo'lda: Muhim o'zgarishlardan oldin

# SSH orqali
ssh root@your-droplet-ip
cd /path/to/project
./scripts/manual-backup.sh

# Backup yuklab olish (local kompyuterga)
scp root@your-droplet-ip:/path/to/project/backups/kino_db_backup_*.sql.gz ./local-backups/
```

---

## ❓ Tez-tez So'raladigan Savollar

### Q: Backup qancha vaqt oladi?

**A:** 
- Kichik database (10 MB) → ~10 soniya
- O'rtacha database (100 MB) → ~30 soniya
- Katta database (1 GB) → ~2-3 daqiqa

### Q: Restore qancha vaqt oladi?

**A:**
- Kichik backup (10 MB) → ~30 soniya
- O'rtacha backup (100 MB) → ~2-3 daqiqa
- Katta backup (1 GB) → ~10-15 daqiqa

### Q: Necha ta backup saqlash kerak?

**A:**
- **Minimal**: 7 ta (har kuni)
- **Tavsiya**: 30 ta (har kuni)
- **Ideal**: 180 ta (6 oy)

### Q: Backup fayllar qancha joy oladi?

**A:**
Gzip siqilgan holda:
- 1000 foydalanuvchi → ~500 KB
- 10,000 foydalanuvchi → ~5 MB
- 100,000 foydalanuvchi → ~50 MB

### Q: Restore qilishda ma'lumotlar yo'qoladimi?

**A:**
- ✅ Backup ichidagi ma'lumotlar tiklanadi
- ❌ Backupdan keyingi qo'shilgan ma'lumotlar yo'qoladi
- ⚠️ Shuning uchun restore qilishdan oldin yangi backup yarating!

### Q: Bot ishlayotganda backup olish mumkinmi?

**A:**
- ✅ Ha, bot ishlayotganda ham backup olish mumkin
- ✅ Bot ishlayotganda restore qilmaslik kerak
- ⚠️ Restore qilishdan oldin botni to'xtating

---

## 🆘 Yordam

Muammo hal bo'lmasa:

```bash
# 1. Loglarni to'plash
docker logs kino_database --tail 100 > db_logs.txt
docker logs kino_bot --tail 100 > bot_logs.txt

# 2. Backup ma'lumotlarini to'plash
ls -lh backups/ > backup_list.txt
du -sh backups/ >> backup_list.txt

# 3. Database holatini tekshirish
docker exec kino_database pg_isready -U postgres

# 4. Admin bilan bo'lishing
# db_logs.txt, bot_logs.txt, backup_list.txt
```

---

## 🎉 Xulosa

### Backup yaratish (oddiy)
```bash
./scripts/manual-backup.sh
```

### Restore qilish (to'liq)
```bash
# 1. Backup tanlash
ls -lht backups/

# 2. Restore
./scripts/manual-restore.sh kino_db_backup_20260223_143000.sql.gz

# 3. Botni qayta ishga tushirish (MUHIM!)
docker-compose restart app
```

**Muvaffaqiyat!** 🚀
