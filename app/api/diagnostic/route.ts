import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'NOT SET',
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: process.env.VERCEL || 'NOT ON VERCEL',
    VERCEL_ENV: process.env.VERCEL_ENV || 'NOT SET',
  })
}

