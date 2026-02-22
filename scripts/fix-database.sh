#!/bin/bash
# Script to fix database migration issues on DigitalOcean droplet

echo "🔧 Fixing database migrations..."

# Stop the app container
echo "⏸️  Stopping app container..."
docker-compose stop app

# Run migrations
echo "🚀 Running database migrations..."
docker-compose run --rm app npx prisma migrate deploy

# Start the app container again
echo "▶️  Starting app container..."
docker-compose start app

# Show logs
echo "📋 Showing app logs (Ctrl+C to exit)..."
docker-compose logs -f app
