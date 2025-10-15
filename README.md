# LobbyThis - Crowdfund Democracy

A civic crowdfunding platform where citizens write, fund, and transparently execute their own lobbying campaigns—turning collective wallets into real political power.

## 🌟 Features

### Core Functionality
- **📝 Proposal Submission** - Create and submit lobbying proposals (requires $10+ active subscription)
- **💰 Monthly Subscriptions** - 4 tiers ($5, $10, $20, $100/month) with weighted voting power
- **🎯 Transparent Funding** - Real-time MRR tracking and progress visualization
- **💬 Weighted Comments** - Higher-tier supporters have amplified voices
- **📊 Admin Dashboard** - Verify proposals, post updates, manage campaigns
- **📧 Email Notifications** - Benchmark notifications via Resend
- **🔐 Secure Auth** - Magic link authentication via NextAuth

### MVP Seeded Proposals
1. **Medicare for All** - Universal healthcare coverage
2. **Raise the Federal Minimum Wage** - $15/hour indexed to inflation

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Framer Motion
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** NextAuth.js (magic links via Resend)
- **Payments:** Stripe Subscriptions
- **Email:** Resend
- **UI Components:** Radix UI + custom components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or hosted like Neon, Supabase, etc.)
- Stripe account (test mode for development)
- Resend account for emails

### 1. Clone and Install

\`\`\`bash
git clone <your-repo-url>
cd LobbyThis
npm install
\`\`\`

### 2. Environment Setup

Create a `.env` file in the root directory:

\`\`\`env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/lobbythis?schema=public"

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>

# Resend
RESEND_API_KEY=re_...
EMAIL_FROM="LobbyThis <noreply@lobbythis.com>"

# Admin
ADMIN_EMAILS=btj212@gmail.com

# Site
SITE_URL=http://localhost:3000

# Tier Weights (tier_amount:weight)
TIER_WEIGHTS=5:1,10:2,20:5,100:20

# Benchmark MRR notifications (in cents)
BENCHMARKS_MRR=100000,500000,1000000,2500000,5000000
\`\`\`

**Generate NEXTAUTH_SECRET:**
\`\`\`bash
openssl rand -base64 32
\`\`\`

### 3. Database Setup

\`\`\`bash
# Generate Prisma Client
npm run db:generate

# Push schema to database
npm run db:push

# Seed initial data (creates 2 proposals)
npm run db:seed
\`\`\`

### 4. Stripe Setup

1. Get your API keys from [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Set up webhook endpoint:
   - URL: `http://localhost:3000/api/stripe/webhook`
   - Events to listen for:
     - `checkout.session.completed`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
3. Copy webhook signing secret to `.env`

For local development, use [Stripe CLI](https://stripe.com/docs/stripe-cli):
\`\`\`bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
\`\`\`

### 5. Resend Setup

1. Sign up at [Resend](https://resend.com)
2. Verify your domain (or use test mode)
3. Get API key and add to `.env`

### 6. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
LobbyThis/
├── app/
│   ├── api/                    # API routes
│   │   ├── auth/              # NextAuth endpoints
│   │   ├── admin/             # Admin management
│   │   ├── proposals/         # Proposal CRUD
│   │   └── stripe/            # Stripe checkout & webhooks
│   ├── admin/                 # Admin dashboard
│   ├── auth/                  # Auth pages (signin, verify)
│   ├── proposal/[slug]/       # Proposal detail page
│   ├── proposals/             # Browse & create proposals
│   ├── legal/                 # Legal & compliance
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles + theme
├── components/
│   ├── admin/                 # Admin components
│   ├── home/                  # Homepage sections
│   ├── proposal/              # Proposal components
│   ├── proposals/             # Proposal form
│   ├── ui/                    # Reusable UI components
│   ├── navbar.tsx
│   └── footer.tsx
├── lib/
│   ├── auth.ts                # NextAuth config
│   ├── email.ts               # Email templates
│   ├── prisma.ts              # Prisma client
│   ├── stripe.ts              # Stripe helpers
│   └── utils.ts               # Utility functions
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Seed script
├── types/
│   └── next-auth.d.ts         # NextAuth type extensions
└── public/                    # Static assets
\`\`\`

## 🎨 Design System

### Colors
- **Navy** (`#0A1A2F`) - Backgrounds, trust anchor
- **White** (`#FFFFFF`) - Text, clarity
- **Copper** (`#C67C3D`) - Brand primary, CTAs, wordmark "THIS"
- **Bronze** (`#D89A55`) - Secondary accent, monetary metrics
- **Slate** (`#B5C0CF`) - Muted text, outlines
- **Offwhite** (`#F5F6F8`) - Card backgrounds

### Typography
- **Headlines:** Space Grotesk (600-700)
- **Body:** Inter (400-500-600)

### Components
All components follow the brand design system with copper/bronze gradients, subtle animations via Framer Motion, and navy-based dark backgrounds.

## 🔑 Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, how it works, proposal grid |
| `/proposals` | Browse all active movements |
| `/proposal/[slug]` | Proposal detail with pledge tiers & comments |
| `/proposals/new` | Submit new proposal (requires $10+ subscription) |
| `/admin` | Admin dashboard (requires admin email) |
| `/auth/signin` | Magic link authentication |
| `/legal` | Legal & compliance information |

## 💳 Subscription Tiers

| Tier | Amount | Weight | Benefits |
|------|--------|--------|----------|
| **Supporter** | $5/mo | 1x | Updates, badge, voting |
| **Advocate** | $10/mo | 2x | Priority comments, early access |
| **Champion** | $20/mo | 5x | Amplified voice, strategy calls |
| **Leader** | $100/mo | 20x | Maximum influence, direct input |

## 🔐 Admin Access

Admin users (defined in `ADMIN_EMAILS` env var) can:
- Verify or reject submitted proposals
- Post updates (milestone, receipt, disbursement)
- Change proposal status (VERIFIED → EXECUTING → COMPLETED)
- View platform-wide stats

Access: `/admin`

## 📧 Email Notifications

### Automated Emails
1. **Magic Link** - Sent when signing in
2. **Benchmark Notifications** - When MRR milestones are reached
3. **Welcome Email** - After first pledge (TODO: implement in webhook)

### Email Templates
Beautiful, branded HTML emails with copper/bronze gradients and responsive design.

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy!

Vercel automatically:
- Installs dependencies
- Runs Prisma generate
- Builds Next.js app
- Deploys globally

### Environment Variables on Vercel

Add all variables from `.env` to Vercel project settings. Don't forget:
- Use production Stripe keys
- Use production database URL
- Update `NEXTAUTH_URL` and `SITE_URL` to your domain
- Configure Stripe webhook for production URL

### Post-Deploy

1. Run migrations: `npx prisma db push` (or migrate)
2. Seed database: `npm run db:seed`
3. Test Stripe webhook endpoint
4. Verify email sending works

## 🛡️ Security Notes

- Never commit `.env` file
- Use Stripe test mode in development
- Webhook signatures are verified
- Admin routes check email authorization
- All subscriptions processed through Stripe
- Passwords are never stored (magic links only)

## 📝 Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:seed      # Seed initial data
npm run db:studio    # Open Prisma Studio
\`\`\`

## 🎯 Acceptance Criteria (MVP)

- [x] Home shows two seeded national proposals + live counters
- [x] Donors subscribe at tier levels, charged immediately
- [x] Comments rank by pledge weight
- [x] Creators submit only if $10+ subscriber
- [x] Benchmarks trigger emails
- [x] Ledger + receipts visible (via Updates)
- [x] Admin can verify proposals and post updates
- [x] Two-tone wordmark (LOBBY in white, THIS in copper)
- [x] Modern, serious design with copper/bronze branding

## 🔮 Future Enhancements

- Comment submission UI for pledgers
- User dashboard with all active pledges
- Pledge management portal (upgrade/downgrade/cancel)
- More granular expense tracking
- Proposal voting/prioritization
- State and local scopes beyond national
- Mobile app
- Advanced analytics

## 📄 License

Proprietary - All rights reserved

## 🤝 Contributing

This is an MVP build. Contact the team before contributing.

---

**Built with ❤️ to democratize political influence**

*The people, organized.*
