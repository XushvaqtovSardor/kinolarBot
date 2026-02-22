# Database Migration Fix Guide

## Muammo
`The table public.User does not exist in the current database.` xatosi - database migration'lar ishlamagan.

## Yechim (DigitalOcean droplet'ingizda ishlatish uchun)

### Usul 1: Tez fix (tavsiya etiladi)
```bash
# SSH orqali droplet'ga kiring
ssh root@your-droplet-ip

# Loyiha papkasiga o'ting
cd /path/to/KInobot_uzimga

# Script'ni executable qiling
chmod +x scripts/migrate-manual.sh

# Ishga tushiring
./scripts/migrate-manual.sh

# App'ni restart qiling
docker-compose restart app
```

### Usul 2: To'liq rebuild
```bash
# SSH orqali droplet'ga kiring
ssh root@your-droplet-ip

cd /path/to/KInobot_uzimga

# Script'ni executable qiling  
chmod +x scripts/fix-database.sh

# Ishga tushiring
./scripts/fix-database.sh
```

### Usul 3: Qo'lda
```bash
# 1. Container'ni to'xtating
docker-compose stop app

# 2. Migration'ni ishga tushiring
docker-compose run --rm app npx prisma migrate deploy

# 3. Database'ni tekshiring
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

# 4. App'ni ishga tushiring
docker-compose up -d app

# 5. Log'larni ko'ring
docker-compose logs -f app
```

### Usul 4: Hammani qayta ishga tushirish
```bash
# Hammani to'xtating
docker-compose down

# Qayta build qiling
docker-compose build --no-cache app

# Ishga tushiring
docker-compose up -d

# Log'larni kuzating
docker-compose logs -f app
```

## Tekshirish
Migration'lar to'g'ri ishladi yoki yo'qligini tekshiring:

```bash
# Database'dagi table'larni ko'ring
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

# User table'ni tekshiring
docker exec kino_database psql -U postgres -d kino_db -c "SELECT COUNT(*) FROM \"User\";"
```

## Ko'p uchraydigan muammolar

### 1. DATABASE_URL noto'g'ri
`.env` faylingizda `DATABASE_URL` to'g'ri yozilganligini tekshiring:
```
DATABASE_URL="postgresql://postgres:12345@db:5432/kino_db"
```

### 2. Database container ishlamayapti
```bash
docker-compose ps  # Container'lar holatini ko'ring
docker-compose up -d db  # Database'ni ishga tushiring
```

### 3. Migration fayllar yo'q
```bash
ls -la prisma/migrations/  # Migration fayllarini tekshiring
```

## Keyingi qadamlar
Migration muvaffaqiyatli bo'lgandan keyin:
1. Bot'ni sinab ko'ring: `/start` commandasini yuboring
2. Log'larni kuzating: `docker-compose logs -f app`
3. Xatolar ketgan bo'lishi kerak

## Yordam kerak bo'lsa
Quyidagi ma'lumotlarni yuboring:
```bash
docker-compose ps
docker-compose logs app --tail=50
docker exec kino_database psql -U postgres -d kino_db -c "\dt"
```
