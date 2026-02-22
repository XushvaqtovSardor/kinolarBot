# Database Migration muammosini hal qilish

## Muammo
Bot `/start` bosilganda xatolik bermoqda:
```
❌ Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.
```

Log'larda:
```
The table `public.User` does not exist in the current database.
```

## Sabab
Database migration'lar to'g'ri ishlamagan. Table'lar yaratilmagan.

---

## ✅ TEZKOR YECHIM (tavsiya etiladi)

**DigitalOcean droplet'ingizda quyidagilarni bajaring:**

### 1-usul: Quick Fix Script
```bash
cd /root/KInobot_uzimga  # yoki sizning path'ingiz
chmod +x scripts/quick-fix.sh
./scripts/quick-fix.sh
```

### 2-usul: Qo'lda (eng oson)
```bash
# 1. Migration ishlatish
docker exec kino_bot npx prisma migrate deploy

# 2. App restart
docker-compose restart app

# 3. Log ko'rish
docker-compose logs -f app
```

### 3-usul: To'liq diagnostic
```bash
chmod +x scripts/diagnose-and-fix.sh
./scripts/diagnose-and-fix.sh
```

---

## 🔍 Muammoni tekshirish

### Database'ga ulanish va table'larni ko'rish:
```bash
# Database'ga kirish
docker exec -it kino_database psql -U postgres -d kino_db

# Table'larni ko'rish
\dt

# User table borligini tekshirish
SELECT COUNT(*) FROM "User";

# Chiqish
\q
```

### Container'lar holatini ko'rish:
```bash
docker-compose ps
```

### Log'larni ko'rish:
```bash
# Barcha log'lar
docker-compose logs app

# Real-time log
docker-compose logs -f app

# Oxirgi 50 ta log
docker-compose logs --tail=50 app
```

---

## ⚡ Agar hech narsa ishlamasa

### Option 1: Force rebuild
```bash
# Hammani to'xtatish
docker-compose down

# Image'larni tozalash
docker system prune -f

# Rebuild va ishga tushirish
docker-compose build --no-cache app
docker-compose up -d

# Log'larni kuzatish
docker-compose logs -f app
```

### Option 2: Manual migration
```bash
# Container'ni to'xtatish
docker-compose stop app

# Migration ishlatish
docker-compose run --rm app sh -c "npx prisma generate && npx prisma migrate deploy"

# Database'ni tekshirish
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

# App'ni ishga tushirish
docker-compose up -d app
```

### Option 3: Database reset (DIQQAT!)
```bash
# ⚠️ BU BARCHA MA'LUMOTLARNI O'CHIRADI!

# Backup oling
docker exec kino_database pg_dump -U postgres kino_db > backup_$(date +%Y%m%d).sql

# Volume'ni o'chirish
docker-compose down -v

# Qayta ishga tushirish
docker-compose up -d

# Migration'lar avtomatik ishga tushadi
```

---

## 📝 .env faylni tekshirish

`.env` faylingizda `DATABASE_URL` to'g'ri bo'lishi kerak:

```env
DATABASE_URL="postgresql://postgres:12345@db:5432/kino_db"
```

**Diqqat:** 
- `@db:5432` - Docker network ichida
- `@localhost:5445` - Local mashinadan

---

## ✅ Muvaffaqiyatni tekshirish

Migration muvaffaqiyatli bo'lgandan keyin:

```bash
# 1. Table'lar borligini tekshiring
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

# Ko'rinishi kerak:
# - User
# - Admin  
# - Content
# - Payment
# va boshqalar...

# 2. Bot'ni sinab ko'ring
# Telegram'da /start yuboring

# 3. Log'da xato bo'lmasligi kerak
docker-compose logs --tail=20 app | grep -i error
```

---

## 🆘 Yordam

Agar hali ham ishlamasa, quyidagi ma'lumotlarni yuboring:

```bash
# 1. Container status
docker-compose ps

# 2. Database tables
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

# 3. Recent logs
docker-compose logs --tail=50 app

# 4. Database URL
docker exec kino_bot printenv DATABASE_URL

# 5. Migration status
docker exec kino_bot npx prisma migrate status
```

---

## 🎯 Qisqacha

**Eng oddiy va tez yechim:**

```bash
docker exec kino_bot npx prisma migrate deploy && docker-compose restart app
```

**Bu ishlamasa:**

```bash
docker-compose stop app
docker-compose run --rm app npx prisma migrate deploy
docker-compose up -d app
```

**Hali ham ishlamasa:**

```bash
./scripts/diagnose-and-fix.sh
```
