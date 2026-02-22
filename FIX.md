# Database Migration Fix

## Muammo
Bot `/start` bosanda xato beradi: **The table public.User does not exist**

## Yechim

DigitalOcean droplet'ingizda:

```bash
ssh root@your-droplet-ip
cd /root/KInobot_uzimga
git pull
chmod +x scripts/ultimate-fix.sh
./scripts/ultimate-fix.sh
```

TAYYOR! 3-5 daqiqada bot ishlaydi.

## Tekshirish

```bash
# Table'lar bormi?
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

# Log ko'rish
docker-compose logs -f app
```
