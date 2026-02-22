FROM node:22-alpine
WORKDIR /app

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

EXPOSE 3000

CMD ["node", "dist/src/main.js"]