# LobbyThis - Quick Setup Guide

## ⚡ 5-Minute Setup

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Create `.env` File

Copy `.env.example` to `.env` and fill in:

**Required immediately:**
\`\`\`env
DATABASE_URL="postgresql://user:password@localhost:5432/lobbythis"
NEXTAUTH_SECRET="<run: openssl rand -base64 32>"
ADMIN_EMAILS="your-email@example.com"
\`\`\`

**Can add later (for full functionality):**
- `STRIPE_SECRET_KEY` - Get from Stripe dashboard
- `STRIPE_PUBLISHABLE_KEY` - Get from Stripe dashboard  
- `STRIPE_WEBHOOK_SECRET` - Get after setting up webhook
- `RESEND_API_KEY` - Get from Resend dashboard

### 3. Setup Database
\`\`\`bash
npm run db:generate  # Generate Prisma client
npm run db:push      # Create tables
npm run db:seed      # Add sample data
\`\`\`

### 4. Start Development
\`\`\`bash
npm run dev
\`\`\`

Visit: http://localhost:3000

## 🎯 What You'll See

- **Homepage** with 2 seeded proposals:
  - Medicare for All
  - Raise the Federal Minimum Wage
  
- **Live MRR counter** (will show $0 initially)

- **Fully functional UI** (payment will fail without Stripe keys)

## 🔑 Test Flow Without Stripe

1. Browse proposals at `/proposals`
2. View proposal details (click on a proposal)
3. Try to submit a proposal at `/proposals/new` (will show eligibility message)
4. Access admin at `/admin` (if your email is in ADMIN_EMAILS)

## 💳 Enable Payments (Stripe)

### Get Stripe Keys
1. Sign up at https://stripe.com
2. Get test API keys from Dashboard → Developers → API keys
3. Add to `.env`:
   \`\`\`
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   \`\`\`

### Setup Webhook (Local Development)
\`\`\`bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local
stripe listen --forward-to localhost:3000/api/stripe/webhook
\`\`\`

Copy the webhook signing secret from the CLI output:
\`\`\`env
STRIPE_WEBHOOK_SECRET=whsec_...
\`\`\`

Now test a pledge!

## 📧 Enable Emails (Resend)

1. Sign up at https://resend.com
2. Verify domain (or use test mode)
3. Get API key
4. Add to `.env`:
   \`\`\`
   RESEND_API_KEY=re_...
   EMAIL_FROM="LobbyThis <noreply@yourdomain.com>"
   \`\`\`

## 🛠️ Common Issues

### Database Connection Error
- Make sure PostgreSQL is running
- Check DATABASE_URL format
- For Neon/Supabase, append `?sslmode=require`

### Prisma Client Not Found
\`\`\`bash
npm run db:generate
\`\`\`

### Stripe Webhook Not Working
- Make sure Stripe CLI is running (`stripe listen...`)
- Check webhook secret is in `.env`
- Restart dev server after adding secret

### Magic Link Not Sending
- Check RESEND_API_KEY is set
- In development, check terminal for email preview links
- Verify email domain in Resend dashboard

## 📱 Test User Flow

### As a Supporter
1. Go to `/proposal/medicare-for-all`
2. Choose a tier (e.g., $10/month Advocate)
3. Complete Stripe checkout
4. See success message
5. View updated MRR on homepage

### As a Creator
1. Pledge $10+ to any proposal first
2. Go to `/proposals/new`
3. Fill out proposal form
4. Submit for review
5. Check `/admin` to verify

### As an Admin
1. Make sure your email is in ADMIN_EMAILS
2. Go to `/admin`
3. Approve/reject proposals
4. Post updates
5. Change proposal status

## 🚀 Deploy to Vercel

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables via Vercel dashboard
# Set production Stripe keys
# Set production database URL
# Configure production webhook
\`\`\`

## 📚 Key Files

- `app/page.tsx` - Homepage
- `app/proposal/[slug]/page.tsx` - Proposal details
- `app/admin/page.tsx` - Admin dashboard
- `lib/stripe.ts` - Stripe configuration
- `lib/auth.ts` - NextAuth configuration
- `prisma/schema.prisma` - Database schema
- `components/` - All UI components

## 💡 Tips

- Use `npm run db:studio` to view/edit database with Prisma Studio
- Check terminal for detailed error messages
- Stripe test cards: `4242 4242 4242 4242` (any future date, any CVC)
- Admin email must match exactly (case-sensitive)

## 🆘 Need Help?

Check the full README.md for detailed documentation.

---

**Happy building! 🎉**

