#!/bin/sh
# Docker entrypoint script for database migration and app startup

set -e

echo "🚀 Starting application initialization..."
echo ""

# Wait for database to be ready
echo "⏳ Waiting for database connection..."
until npx prisma db execute --stdin <<< "SELECT 1" 2>/dev/null || npx prisma migrate status 2>/dev/null; do
  echo "Database is unavailable - sleeping"
  sleep 2
done

echo "✅ Database is ready!"
echo ""

# Generate Prisma Client
echo "🔧 Generating Prisma Client..."
npx prisma generate
echo ""

# Run migrations
echo "🗄️  Running database migrations..."
if npx prisma migrate deploy; then
    echo "✅ Migrations completed successfully!"
else
    echo "⚠️  Migration failed, trying prisma db push..."
    npx prisma db push --accept-data-loss --skip-generate
fi
echo ""

# Start the application
echo "▶️  Starting NestJS application..."
exec node dist/src/main.js
