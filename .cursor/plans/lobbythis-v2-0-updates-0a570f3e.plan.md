<!-- 0a570f3e-6e7d-4986-af3f-ec7c4570f882 7ded6792-3099-4470-b5ab-8223cdf99164 -->
# Fix NextAuth v5 API Compatibility

## Problem

The project uses NextAuth v5 beta but the code is written for NextAuth v4, causing module resolution errors. Additionally, required email dependencies are missing.

## Solution

### 1. Install Missing Dependencies

```bash
npm install nodemailer @react-email/render
```

### 2. Update Auth Configuration (lib/auth.ts)

Migrate from NextAuth v4 to v5 pattern:

**Current (v4 pattern):**

```typescript
export const authOptions: NextAuthOptions = { ... }
```

**Update to (v5 pattern):**

```typescript
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      // ... existing email config
    })
  ],
  pages: { ... },
  callbacks: { ... },
  session: { strategy: "jwt" }
})
```

### 3. Update API Route (app/api/auth/[...nextauth]/route.ts)

**Current:**

```typescript
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

**Update to:**

```typescript
import { handlers } from "@/lib/auth"
export const { GET, POST } = handlers
```

### 4. Update All getServerSession Calls (5 files)

Replace `getServerSession(authOptions)` with `auth()`:

**Files to update:**

- `app/proposals/new/page.tsx`
- `app/admin/page.tsx`
- `app/api/proposals/route.ts`
- `app/api/admin/proposals/[id]/route.ts`
- `app/api/admin/proposals/[id]/updates/route.ts`

**Pattern:**

```typescript
// Before
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
const session = await getServerSession(authOptions)

// After
import { auth } from "@/lib/auth"
const session = await auth()
```

### 5. Update Session Type Access

NextAuth v5 session structure is slightly different:

```typescript
// Session user access remains the same
const email = session?.user?.email
const role = session?.user?.role // May need to update callback
```

## Files Modified

- `lib/auth.ts` - Migrate to v5 API
- `app/api/auth/[...nextauth]/route.ts` - Use exported handlers
- `app/proposals/new/page.tsx` - Use auth() instead of getServerSession
- `app/admin/page.tsx` - Use auth() instead of getServerSession
- `app/api/proposals/route.ts` - Use auth() instead of getServerSession
- `app/api/admin/proposals/[id]/route.ts` - Use auth() instead of getServerSession
- `app/api/admin/proposals/[id]/updates/route.ts` - Use auth() instead of getServerSession
- `package.json` - Add nodemailer and @react-email/render

## Testing

After changes:

1. Server should restart without errors
2. Navigate to /proposals/new - page should load
3. Sign in flow should work
4. All authenticated pages should load correctly

### To-dos

- [ ] Fix Next.js 15 async params warnings in proposal page
- [ ] Refactor backgrounds - keep circles in hero only, never behind cards
- [ ] Update typography: 18px base, create Prose component, update spacing
- [ ] Convert seeded proposals to Markdown and add react-markdown rendering
- [ ] Implement ShareBar component with Web Share API and UTM tracking
- [ ] Create dynamic OG images with Vercel OG Edge function
- [ ] Add table of contents and reading progress bar
- [ ] Enhance card elevation, shadows, and focus states
- [ ] Refine animations with reduced-motion support
- [ ] Complete accessibility and QA pass