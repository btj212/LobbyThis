# Favicon Setup Guide

## Quick Steps:

### 1. Convert Your Logo to Favicon Formats

Use a free online tool like:
- https://favicon.io/favicon-converter/
- https://realfavicongenerator.net/

Upload your logo image and download the generated files.

### 2. Replace Files

**For Simple Setup:**
- Save as `favicon.ico` (32x32 or 64x64)
- Replace: `/Users/blakejones/Documents/LobbyThis/app/favicon.ico`

**For Full Setup (Recommended):**
Download these sizes and place in `/app/`:
- `favicon.ico` (32x32)
- `icon.png` (any size, recommended 512x512)
- `apple-touch-icon.png` (180x180)

### 3. Next.js Will Auto-Generate

Next.js automatically:
- Serves `/favicon.ico` from the app directory
- Generates proper meta tags
- Creates multiple sizes for different devices
- No manual HTML updates needed!

### 4. Verify

After replacing the file:
```bash
# Restart dev server
npm run dev
```

Then visit: http://localhost:3000
- Check browser tab for new favicon
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

---

## Current Location:
`/Users/blakejones/Documents/LobbyThis/app/favicon.ico`

Just replace this file and you're done!

