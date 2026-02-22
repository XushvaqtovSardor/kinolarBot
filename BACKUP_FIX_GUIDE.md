# 🔧 BUZILGAN BACKUP MUAMMOSINI HAL QILISH

## ❌ Muammo

Backup fayllarda `pg_dump` verbose output SQL kod bilan aralashib ketgan:
```
ERROR: syntax error at or near "pg_dump"
LINE 1: pg_dump: last built-in OID is 16383
```

## ✅ Yechim

Scriptlar tuzatildi. Endi Dropletda bajarish kerak:

---

## 🚀 DROPLETDA BAJARISH (TEZKOR)

### 1. SSH Orqali Kirish

```bash
ssh root@your-droplet-ip
cd ~/kinolarBot  # yoki qayerda project bo'lsa
```

### 2. Yangi Kodni Olish

```bash
git pull origin main
```

### 3. Database va Backuplarni Tiklash

```bash
# Scriptga permission berish
chmod +x scripts/fix-backups.sh

# Scriptni ishga tushirish
./scripts/fix-backups.sh
```

Script avtomatik ravishda:
- ✅ Eski buzilgan backuplarni o'chiradi
- ✅ Database holatini tekshiradi
- ✅ Prisma migrations ishga tushiradi (agar kerak bo'lsa)
- ✅ Yangi to'g'ri backup yaratadi
- ✅ Backup integrity test qiladi

### 4. Botni Qayta Ishga Tushirish

```bash
docker-compose restart app
docker-compose logs -f app
```

---

## 📋 MANUAL YECHIM (Batafsil)

Agar avtomatik script ishlamasa, qo'lda bajaring:

### Step 1: Yangi Kodni Olish

```bash
ssh root@your-droplet-ip
cd ~/kinolarBot
git pull origin main
chmod +x scripts/*.sh
```

### Step 2: Database To'liq Tozalash va Qayta Yaratish

```bash
# Botni to'xtatish
docker-compose stop app

# Database tozalash va qayta yaratish
docker exec -i kino_database psql -U postgres -d postgres <<EOF
-- Barcha connectionlarni yopish
SELECT pg_terminate_backend(pid) 
FROM pg_stat_activity 
WHERE datname = 'kino_db' AND pid <> pg_backend_pid();

-- Database o'chirish va qayta yaratish
DROP DATABASE IF EXISTS kino_db;
CREATE DATABASE kino_db;
EOF

# Prisma migrationsni ishga tushirish
docker-compose start app
docker-compose exec app npx prisma migrate deploy

# Yoki botni to'liq qayta build qilish
docker-compose down
docker-compose up -d
```

### Step 3: Eski Backuplarni O'chirish

```bash
# Eski buzilgan backuplarni o'chirish
rm -f backups/kino_db_backup_*.sql.gz

# Backuplar papkasini tozalash
ls -lh backups/
```

### Step 4: Yangi Backup Yaratish

```bash
# Yangi backup yaratish
./scripts/manual-backup.sh

# Backup yaratilganini tekshirish
ls -lht backups/ | head -1
```

### Step 5: Yangi Backup Integrity Test

```bash
# En so'nggi backupni olish
LATEST_BACKUP=$(ls -t backups/kino_db_backup_*.sql.gz | head -1)

# Integrity test
gzip -t "$LATEST_BACKUP"

# Tarkibini ko'rish (birinchi 30 qator)
gunzip -c "$LATEST_BACKUP" | head -n 30

# Agar "pg_dump: creating" yoki "pg_dump: last built-in" ko'rinsa, XATO!
# Faqat SQL komandalar (CREATE TABLE, INSERT, etc.) bo'lishi kerak
```

**To'g'ri backup tarkibi:**
```sql
--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
...
CREATE TABLE public."User" (
    id integer NOT NULL,
    ...
);
```

**❌ Noto'g'ri (buzilgan) backup:**
```sql
pg_dump: last built-in OID is 16383
pg_dump: creating TABLE "public.User"
...
```

### Step 6: Test Restore (Ixtiyoriy)

**⚠️ DIQQAT:** Bu mavjud ma'lumotlarni o'chiradi!

```bash
# Hozirgi holatdan backup olish
./scripts/manual-backup.sh

# Test restore
./scripts/manual-restore.sh kino_db_backup_20260223_XXXXXX.sql.gz

# Botni qayta ishga tushirish
docker-compose restart app

# Loglarni kuzatish
docker-compose logs -f app
```

---

## 🔍 TEKSHIRISH

### Database Holatini Tekshirish

```bash
# Jadvallar soni
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='public';"

# Foydalanuvchilar soni (agar mavjud bo'lsa)
docker exec kino_database psql -U postgres -d kino_db -c \
  "SELECT COUNT(*) FROM \"User\";"

# Barcha jadvallar
docker exec kino_database psql -U postgres -d kino_db -c "\dt"
```

### Bot Holatini Tekshirish

```bash
# Bot loglarini ko'rish
docker-compose logs app --tail 50

# Bot ishlab turganini tekshirish
docker ps | grep kino_bot

# Bot ichida test
# Telegram'da bot'ga /start yuboring
```

### Backup Tizimini Tekshirish

```bash
# Backuplar ro'yxati
ls -lht backups/

# Backup hajmilari (8-10 KB atrofida bo'lishi kerak)
du -sh backups/

# Har bir backupni integrity test
for file in backups/*.sql.gz; do
  echo "Testing: $file"
  gzip -t "$file" && echo "✅ OK" || echo "❌ FAIL"
done
```

---

## 🎯 QISQACHA (TL;DR)

```bash
# 1. SSH
ssh root@your-droplet-ip && cd ~/kinolarBot

# 2. Kodni yangilash
git pull

# 3. Tiklash scripti
chmod +x scripts/fix-backups.sh && ./scripts/fix-backups.sh

# 4. Botni qayta ishga tushirish
docker-compose restart app
```

---

## ❓ FAQ

### Q: Eski ma'lumotlar yo'qoladimi?

**A:** Ha, eski backuplar buzilgan edi, ularni restore qilish mumkin emas. Agar botda hozirda ma'lumotlar bo'lsa, ular saqlanadi. Yangi backup yaratiladi.

### Q: Foydalanuvchilar yo'qoladimi?

**A:** Agar database hozir ishlayotgan bo'lsa va foydalanuvchilar mavjud bo'lsa, ular saqlanadi. Agar database bo'sh bo'lsa, Prisma migrations jadvallarni yaratadi, lekin foydalanuvchilar bo'lmaydi (yangi boshlanadi).

### Q: Backuplar nechta bo'lishi kerak?

**A:** Kamida 1 ta ishlayotgan backup. Avtomatik backup har 6 soatda yaratiladi.

### Q: Qachon backup olish kerak?

**A:** 
- ✅ Muhim o'zgarishlardan oldin
- ✅ Kunlik (avtomatik)
- ✅ Restore qilishdan oldin

---

## 🆘 Yordam

Agar muammo hal bo'lmasa:

```bash
# Loglarni to'plash
docker logs kino_database --tail 100 > db_logs.txt
docker logs kino_bot --tail 100 > bot_logs.txt
ls -lh backups/ > backup_list.txt

# Backup tarkibini ko'rish  
gunzip -c backups/kino_db_backup_*.sql.gz | head -n 50 > backup_content.txt
```

Yuqoridagi fayllarni admin bilan bo'lishing.

---

**Muvaffaqiyat!** 🚀
