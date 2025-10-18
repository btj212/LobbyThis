# Vercel Environment Variables Setup

## Critical: Add NEXT_PUBLIC_SITE_URL to Vercel

Your share links currently point to localhost because the `NEXT_PUBLIC_SITE_URL` environment variable isn't set in Vercel.

### Steps to Fix (2 minutes):

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click on your **LobbyThis** project

2. **Add Environment Variable**
   - Go to: **Settings** → **Environment Variables**
   - Click **"Add New"**
   
3. **Enter Variable**
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://lobbythis.com`
   - **Environments:** Check all three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development

4. **Save and Redeploy**
   - Click **"Save"**
   - Go to **Deployments** tab
   - Click **"..."** on latest deployment
   - Click **"Redeploy"**

---

## Why This Is Important:

Without this variable, all your share links (Twitter, Facebook, LinkedIn, copy link) will point to:
- ❌ `http://localhost:3000/proposal/...` (broken for users)

With this variable set, they'll correctly point to:
- ✅ `https://lobbythis.com/proposal/...` (works for everyone!)

---

## What Uses This Variable:

- ✅ Share buttons on proposal pages
- ✅ Social media share links (Twitter, Facebook, LinkedIn)
- ✅ Copy link feature
- ✅ Email sharing
- ✅ OpenGraph images (social media previews)

---

## Already Done Locally:

Your local `.env` file has been updated to:
```
NEXT_PUBLIC_SITE_URL="https://lobbythis.com"
```

This means when you test locally, share links will work. But you **MUST** add this to Vercel for production to work.

---

## Verification:

After redeploying:
1. Go to any proposal page on your live site
2. Click "Copy Link" in the share section
3. Paste the link - it should be `https://lobbythis.com/...`
4. ✅ If it's your domain = Success!
5. ❌ If it's still localhost = Variable not set correctly

---

**Do this now before any more users try to share!** 🚀

