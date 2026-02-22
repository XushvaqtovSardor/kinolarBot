FROM node:22-alpine
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache bash postgresql-client

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Copy prisma schema
COPY prisma ./prisma

# Install dependencies
RUN pnpm install --shamefully-hoist

# Copy application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build application
RUN pnpm run build

# Copy entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["docker-entrypoint.sh"]