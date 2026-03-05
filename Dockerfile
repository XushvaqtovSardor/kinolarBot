FROM node:22-alpine
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Copy prisma schema
COPY prisma ./prisma

# Install dependencies
RUN pnpm install --shamefully-hoist

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN pnpm run build

EXPOSE 3000

CMD sh -c "npx prisma migrate deploy && node dist/main.js"