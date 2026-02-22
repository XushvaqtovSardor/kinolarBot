# ⚡ Backup/Restore - Tezkor Qo'llanma

## 🎯 ASOSIY MUAMMO VA YECHIM

### ❌ Muammo
Backupni restore qilgandan keyin bot ishlamaydi: 
```
The table `public.User` does not exist
```

### ✅ Yechim
**Restore qilgandan keyin ALBATTA botni qayta ishga tushiring:**

```bash
docker-compose restart app
```

---

## 📦 1. BACKUP YARATISH

```bash
# Local/Development
./scripts/manual-backup.sh

# Droplet/Production (SSH orqali)
ssh root@your-droplet-ip
cd /path/to/project
./scripts/manual-backup.sh
```

---

## 🔄 2. RESTORE QILISH (TO'LIQ JARAYON)

```bash
# 1. Backuplarni ko'rish
ls -lht backups/

# 2. Restore qilish
./scripts/manual-restore.sh kino_db_backup_20260223_143000.sql.gz

# Tasdiqlash:
# Davom etishni xohlaysizmi? (yes/no): yes

# 3. ⚠️ MUHIM: Botni qayta ishga tushirish
docker-compose restart app

# 4. Loglarni kuzatish
docker-compose logs -f app
```

---

## 🧪 3. TEST QILISH

```bash
# Backup tizimini test qilish
chmod +x scripts/test-backup.sh
./scripts/test-backup.sh
```

---

## ⚠️ ESLATMALAR

1. ✅ **Restore qilgandan KEYIN botni ALBATTA qayta ishga tushiring**
2. ✅ **Restore qilishdan OLDIN yangi backup yarating**
3. ✅ **Backup fayllarni tekshiring** (`gzip -t backups/*.sql.gz`)

---

## 🔧 TEZKOR MUAMMO HAL QILISH

### Restore qilgandan keyin bot ishlamayapti

```bash
# Botni qayta ishga tushirish
docker-compose restart app

# Yoki to'liq qayta build
docker-compose down
docker-compose up -d

# Loglarni ko'rish
docker-compose logs -f app
```

### Backup fayli buzilgan

```bash
# Integrity test
gzip -t backups/kino_db_backup_*.sql.gz

# Boshqa backupni sinash
./scripts/manual-restore.sh kino_db_backup_20260222_100000.sql.gz
docker-compose restart app
```

### Container ishlamayapti

```bash
# Barcha containerlarni qayta ishga tushirish
docker-compose down
docker-compose up -d

# Holatni tekshirish
docker ps
```

---

## 📖 TO'LIQ QO'LLANMA

Batafsil qo'llanma:
```bash
cat BACKUP_QOLLANMA.md
```

---

## 🆘 YORDAM

Muammo hal bo'lmasa:

```bash
# Loglarni ko'rish
docker logs kino_database --tail 50
docker logs kino_bot --tail 50

# Test qilish
./scripts/test-backup.sh
```

---

**Esda tuting:** Restore qilgandan keyin **ALBATTA** botni qayta ishga tushiring! 🚀
