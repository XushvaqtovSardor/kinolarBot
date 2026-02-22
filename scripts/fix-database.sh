#!/bin/bash
# Script to fix database migration issues on DigitalOcean droplet

set -e  # Exit on error

echo "🔧 Fixing database migrations..."
echo ""

# Check if containers are running
echo "📊 Checking container status..."
docker-compose ps

echo ""
echo "⏸️  Stopping app container..."
docker-compose stop app

echo ""
echo "🗑️  Removing old container..."
docker-compose rm -f app

echo ""
echo "🔍 Checking database connection..."
docker exec kino_database psql -U postgres -d kino_db -c "SELECT version();"

echo ""
echo "🚀 Running database migrations..."
docker-compose run --rm app sh -c "npx prisma generate && npx prisma migrate deploy"

echo ""
echo "✅ Verifying tables were created..."
docker exec kino_database psql -U postgres -d kino_db -c "\dt"

echo ""
echo "▶️  Starting app container..."
docker-compose up -d app

echo ""
echo "⏳ Waiting for app to start..."
sleep 5

echo ""
echo "📋 Showing recent app logs..."
docker-compose logs --tail=50 app

echo ""
echo "✅ Done! Monitor logs with: docker-compose logs -f app"
