import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { page } = body

    if (!page) {
      return NextResponse.json(
        { error: "Page is required" },
        { status: 400 }
      )
    }

    // Get today's date (without time)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Upsert page view count for today
    await prisma.pageView.upsert({
      where: {
        page_date: {
          page,
          date: today,
        },
      },
      update: {
        count: {
          increment: 1,
        },
      },
      create: {
        page,
        date: today,
        count: 1,
      },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Analytics error:", error)
    // Fail silently for analytics - don't break the user experience
    return NextResponse.json({ success: false }, { status: 200 })
  }
}

