import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { slugify } from "@/lib/utils"

export async function POST(req: NextRequest) {
  try {
    const session = await auth()

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Verify user has $10+ active subscription
    const pledges = await prisma.pledge.findMany({
      where: {
        email: session.user.email,
        status: 'ACTIVE',
        amount: {
          gte: 1000, // $10 in cents
        },
      },
    })

    if (pledges.length === 0) {
      return NextResponse.json(
        { error: "You must have an active $10+ subscription to submit proposals" },
        { status: 403 }
      )
    }

    const body = await req.json()
    const { title, summary, body: proposalBody, location, targetAmount } = body

    // Validate required fields
    if (!title || !summary || !proposalBody || !location || !targetAmount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Get or create user
    let user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: session.user.email,
          role: 'CREATOR',
        },
      })
    }

    // Generate unique slug
    let slug = slugify(title)
    let slugExists = await prisma.proposal.findUnique({
      where: { slug },
    })

    let counter = 1
    while (slugExists) {
      slug = `${slugify(title)}-${counter}`
      slugExists = await prisma.proposal.findUnique({
        where: { slug },
      })
      counter++
    }

    // Create proposal
    const proposal = await prisma.proposal.create({
      data: {
        title,
        slug,
        summary,
        body: proposalBody,
        location,
        targetAmount: parseInt(targetAmount),
        status: 'UNDER_REVIEW',
        creatorId: user.id,
      },
    })

    return NextResponse.json({
      id: proposal.id,
      slug: proposal.slug,
    })
  } catch (error) {
    console.error("Proposal creation error:", error)
    return NextResponse.json(
      { error: "Failed to create proposal" },
      { status: 500 }
    )
  }
}

