# How to Seed Production Database

Your production site on Vercel currently shows "6 supporters" because the production database is empty or has old data.

## Option 1: Seed from Your Computer (Easiest)

### Step 1: Get Your Production Database URL
1. Go to **Neon Dashboard**: https://console.neon.tech
2. Select your LobbyThis database
3. Click **"Connection Details"**
4. Copy the **Connection String** (it looks like: `postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb`)

### Step 2: Run Seed with Production URL
```bash
cd /Users/blakejones/Documents/LobbyThis
DATABASE_URL='paste-your-neon-url-here' npm run db:seed
```

**Example:**
```bash
DATABASE_URL='postgresql://user:pass@ep-abc123.us-east-2.aws.neon.tech/neondb' npm run db:seed
```

This will populate your production database with all 6 movements and realistic supporter counts!

---

## Option 2: Run Directly on Vercel

You can also trigger the seed from Vercel's dashboard, but Option 1 is simpler.

---

## What Will Happen:

After seeding, your production site will show:
- ✅ **Equal Rights Amendment**: ~6,766 supporters for $56,000/month
- ✅ **Citizens United**: ~4,531 supporters for $37,500/month  
- ✅ **Medicare for All**: ~5,437 supporters for $45,000/month
- ✅ **Fair Maps**: ~3,769 supporters for $31,200/month
- ✅ **Data Privacy**: ~2,718 supporters for $22,500/month
- ✅ **Minimum Wage**: ~3,927 supporters for $32,500/month

All with realistic $5-20 average donations per person!

---

## ⚠️ Important Notes:

1. **Make sure you're using the RIGHT database** - double-check the URL is your production Neon database
2. **The seed script will add data** - it won't delete existing data unless there's a conflict with slugs
3. **Takes ~30 seconds to run** - creating thousands of supporter records
4. **After seeding**: Wait 1-2 minutes, then refresh your production site

---

## Quick Commands:

### Get Neon URL from Vercel (if you added it as env var):
```bash
vercel env pull .env.production.local
cat .env.production.local | grep DATABASE_URL
```

### Seed production:
```bash
# Replace with your actual Neon URL
DATABASE_URL='postgresql://...' npm run db:seed
```

---

**Ready to seed production?** Just grab your Neon connection string and run the command above!

