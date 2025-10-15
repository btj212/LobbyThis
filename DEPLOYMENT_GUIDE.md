# LobbyThis Deployment Guide

## Quick Start (Recommended: Vercel)

### 1. Database Setup
You need to migrate from SQLite to PostgreSQL for production.

**Option A: Vercel Postgres**
- Free tier available
- Automatic scaling
- Integrated with Vercel hosting

**Option B: Supabase**
- Free tier with generous limits
- Easy PostgreSQL hosting
- Good for side projects

**Option C: Railway or Render**
- Both offer free PostgreSQL tiers
- Simple setup

### 2. Update Database Configuration

Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"  // Change from "sqlite"
  url      = env("DATABASE_URL")
}
```

### 3. Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Import to Vercel:**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Add Environment Variables in Vercel:**
   ```
   DATABASE_URL=your-postgresql-connection-string
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Run Database Migrations:**
   ```bash
   # Locally, with production DATABASE_URL
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Connect GoDaddy Domain:**
   - In Vercel: Settings → Domains → Add Domain
   - In GoDaddy: Update DNS records:
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`
     - Type: `A`
     - Name: `@`
     - Value: `76.76.21.21`

### 4. Deploy
Click "Deploy" in Vercel. Your site will be live in ~2 minutes!

---

## Alternative: GoDaddy VPS/Dedicated Server

If you have a GoDaddy VPS with Node.js support:

### 1. Server Requirements
- Node.js 18+ installed
- PostgreSQL or MySQL installed
- SSH access
- Domain configured

### 2. Upload Files
```bash
# Via SCP or Git
scp -r ./lobbythis user@your-server:/var/www/lobbythis
# Or clone from Git
```

### 3. On Server (via SSH)
```bash
cd /var/www/lobbythis

# Install dependencies
npm install --production

# Generate Prisma Client
npx prisma generate

# Set up database
npx prisma db push
npx prisma db seed

# Build the app
npm run build

# Install PM2 for process management
npm install -g pm2

# Start the app
pm2 start npm --name "lobbythis" -- start
pm2 save
pm2 startup

# Configure Nginx as reverse proxy (optional but recommended)
```

### 4. Environment Variables
Create `/var/www/lobbythis/.env`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/lobbythis"
NEXT_PUBLIC_SITE_URL="https://lobbythis.com"
NODE_ENV="production"
```

### 5. Nginx Configuration (if using)
```nginx
server {
    listen 80;
    server_name lobbythis.com www.lobbythis.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Production Environment Variables

Create these in your hosting platform:

```bash
DATABASE_URL="postgresql://user:password@host:5432/dbname"
NEXT_PUBLIC_SITE_URL="https://lobbythis.com"
NODE_ENV="production"
```

---

## Pre-Deployment Checklist

- [ ] Switch from SQLite to PostgreSQL
- [ ] Update `prisma/schema.prisma` provider
- [ ] Test build locally: `npm run build`
- [ ] Set up production database
- [ ] Run migrations on production DB
- [ ] Configure environment variables
- [ ] Test all pages work in production mode
- [ ] Set up domain DNS records
- [ ] Enable HTTPS/SSL certificate

---

## Database Migration from SQLite to PostgreSQL

1. **Update schema.prisma:**
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

2. **Create production database** (Vercel Postgres, Supabase, etc.)

3. **Update DATABASE_URL** in production environment

4. **Run migrations:**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

---

## Recommended Stack for Easy Deployment

1. **Hosting:** Vercel (free tier, optimized for Next.js)
2. **Database:** Vercel Postgres or Supabase (free tier)
3. **Domain:** GoDaddy (connect via DNS)
4. **SSL:** Automatic with Vercel

**Total Cost:** $0/month on free tiers (sufficient for MVP/demo)

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Prisma with PostgreSQL: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql

---

## Quick Commands Reference

```bash
# Build for production
npm run build

# Start production server
npm start

# Database commands
npx prisma generate          # Generate Prisma Client
npx prisma db push          # Push schema to database
npx prisma db seed          # Seed database with demo data
npx prisma studio           # View database in browser

# Check for errors
npm run lint
```

