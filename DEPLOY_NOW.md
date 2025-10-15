# Deploy LobbyThis in 15 Minutes ⚡

## Step 1: Set Up Database (5 min)

### Option A: Vercel Postgres (Easiest)
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Storage" → "Create Database" → "Postgres"
3. Copy the `DATABASE_URL` connection string

### Option B: Supabase (Free Forever)
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database → Connection String
4. Copy the connection pooler URL

---

## Step 2: Deploy to Vercel (5 min)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repo
   - Click "Import"

3. **Add Environment Variables:**
   In Vercel dashboard, add:
   ```
   DATABASE_URL=your_postgresql_url_here
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Click "Deploy"**
   - Wait ~2 minutes
   - Your site is live! 🎉

---

## Step 3: Set Up Database (2 min)

In your terminal, run:
```bash
# Set your production DATABASE_URL temporarily
export DATABASE_URL="your_postgresql_url_here"

# Generate Prisma client
npx prisma generate

# Create tables
npx prisma db push

# Add demo data
npx prisma db seed
```

---

## Step 4: Connect GoDaddy Domain (3 min)

### In Vercel:
1. Go to your project → Settings → Domains
2. Add your domain: `lobbythis.com`
3. Vercel will show you DNS records to add

### In GoDaddy:
1. Go to DNS Management for your domain
2. Add the DNS records from Vercel:
   - **A Record:** Name: `@`, Value: `76.76.21.21`
   - **CNAME Record:** Name: `www`, Value: `cname.vercel-dns.com`

3. Wait 5-60 minutes for DNS propagation

---

## Done! ✅

Your site will be live at:
- `https://your-domain.vercel.app` (immediate)
- `https://lobbythis.com` (after DNS propagates)

---

## Troubleshooting

**"Module not found" errors:**
```bash
npm install
npx prisma generate
```

**Database connection errors:**
- Make sure `DATABASE_URL` is correct in Vercel environment variables
- Check that you ran `npx prisma db push`

**Domain not working:**
- DNS can take up to 48 hours (usually 5-30 min)
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)

---

## Useful Links

- **Your Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Deployment Guide:** See `DEPLOYMENT_GUIDE.md` for details
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)

---

## Cost Breakdown

- **Vercel Hosting:** $0/month (free tier, unlimited for hobby projects)
- **Vercel Postgres OR Supabase:** $0/month (free tier)
- **Total:** **$0/month** 💰

Your GoDaddy domain stays the same, just point it to Vercel!

