# Microsoft Clarity Setup Guide

Microsoft Clarity has been integrated into your site to track user behavior with:
- 🎥 Session recordings
- 🔥 Heatmaps
- 📊 Click analytics
- 📱 Mobile-optimized tracking

## Setup Steps (5 minutes):

### 1. Create Clarity Account
- Go to https://clarity.microsoft.com
- Sign up with your Microsoft account (free)
- Click **"Add new project"**

### 2. Get Your Clarity ID
- Enter project name: **LobbyThis**
- Add website URL: `https://lobbythis.com` (or your Vercel URL)
- Click **"Get tracking code"**
- Copy the **Project ID** (it looks like: `abc123def456`)

### 3. Add Clarity ID to Your Site
- Open `app/layout.tsx`
- Find this line: `"SET_YOUR_CLARITY_ID"`
- Replace it with your actual Clarity ID
- Example: `"abc123def456"`

### 4. Deploy
- Commit and push the change
- Vercel will auto-deploy

### 5. Verify Installation
- Go back to Clarity dashboard
- Wait 2-3 minutes
- You should see "Receiving data" status

---

## What You'll See in Clarity:

### 📊 Dashboard
- Page views
- Session count
- User engagement metrics
- Dead clicks (clicks that do nothing)
- Rage clicks (frustrated users)

### 🎥 Session Recordings
- Watch real users navigate your site
- See where they get stuck
- Identify confusing UI elements

### 🔥 Heatmaps
- Click heatmaps (where users click most)
- Scroll depth (how far users scroll)
- Area clicks (which sections get attention)

### 📱 Mobile vs Desktop
- Compare behavior across devices
- Identify mobile-specific issues
- Track touch interactions

---

## Privacy Note:
Microsoft Clarity is privacy-friendly:
- ✅ Free forever
- ✅ No PII (Personally Identifiable Information) collected
- ✅ GDPR compliant
- ✅ Input fields are automatically masked
- ✅ No cookies required

---

## Tips for Using Clarity:

1. **Watch the first 10 sessions** - Look for patterns in how users navigate
2. **Check "Dead Clicks"** - These show where users expect something to be clickable but isn't
3. **Review "Rage Clicks"** - Multiple rapid clicks = frustrated users
4. **Filter by device** - Mobile behavior is often very different from desktop
5. **Create custom tags** - Track specific user journeys (e.g., "viewed-waitlist-form")

---

## Current Integration:
- ✅ Tracking code installed in `app/layout.tsx`
- ✅ Runs on all pages automatically
- ✅ No performance impact
- ⏳ Waiting for your Clarity Project ID

---

**Next Step:** Go to https://clarity.microsoft.com and get your Project ID!

