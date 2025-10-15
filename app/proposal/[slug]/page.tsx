import { notFound } from "next/navigation"
import { Metadata } from "next"
import { prisma } from "@/lib/prisma"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProposalHeader } from "@/components/proposal/proposal-header"
import { PledgeTiers } from "@/components/proposal/pledge-tiers"
import { ProposalBody } from "@/components/proposal/proposal-body"
import { ProposalUpdates } from "@/components/proposal/proposal-updates"
import { ProposalComments } from "@/components/proposal/proposal-comments"
import { ShareBar } from "@/components/proposal/share-bar"

async function getProposal(slug: string) {
  const proposal = await prisma.proposal.findUnique({
    where: { slug },
    select: {
      id: true,
      title: true,
      slug: true,
      summary: true,
      body: true,
      location: true,
      targetAmount: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      pledges: {
        where: {
          status: 'ACTIVE',
        },
        select: {
          amount: true,
          status: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
      updates: {
        select: {
          id: true,
          title: true,
          content: true,
          type: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
      comments: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          pledge: {
            select: {
              email: true,
              tier: true,
              weight: true,
            },
          },
        },
        orderBy: [
          // Sort by weight first (higher tier = higher weight = top of list)
          { pledge: { weight: 'desc' } },
          // Then by creation date
          { createdAt: 'desc' },
        ],
      },
      _count: {
        select: {
          pledges: {
            where: {
              status: 'ACTIVE',
            },
          },
        },
      },
    },
  })

  if (!proposal) {
    return null
  }

  // Calculate total MRR
  const totalMRR = proposal.pledges.reduce((sum, pledge) => sum + pledge.amount, 0)
  const progressPercentage = Math.min(
    Math.round((totalMRR / proposal.targetAmount) * 100),
    100
  )

  return {
    ...proposal,
    totalMRR,
    progressPercentage,
    supporterCount: proposal._count.pledges,
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const proposal = await getProposal(slug)

  if (!proposal) {
    return {
      title: 'Proposal Not Found',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const ogImageUrl = `${siteUrl}/api/og?title=${encodeURIComponent(proposal.title)}&mrr=${proposal.totalMRR}&progress=${proposal.progressPercentage}`

  return {
    title: `${proposal.title} | LobbyThis`,
    description: proposal.summary,
    openGraph: {
      title: proposal.title,
      description: proposal.summary,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: proposal.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: proposal.title,
      description: proposal.summary,
      images: [ogImageUrl],
    },
  }
}

export default async function ProposalPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ success?: string; canceled?: string }>
}) {
  const { slug } = await params
  const sp = await searchParams
  const proposal = await getProposal(slug)

  if (!proposal) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-navy">
      <NavBar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success/Cancel messages */}
          {sp.success && (
            <div className="mb-8 p-4 bg-copper/10 border border-copper/20 rounded-lg text-white">
              <p className="font-semibold">Thank you for your support!</p>
              <p className="text-sm text-slate mt-1">
                Your subscription is now active. You'll receive updates as this movement progresses.
              </p>
            </div>
          )}
          
          {sp.canceled && (
            <div className="mb-8 p-4 bg-slate/10 border border-slate/20 rounded-lg text-white">
              <p>Your pledge was canceled. You can try again anytime.</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <ProposalHeader
                title={proposal.title}
                location={proposal.location}
                status={proposal.status}
                totalMRR={proposal.totalMRR}
                targetAmount={proposal.targetAmount}
                progressPercentage={proposal.progressPercentage}
                supporterCount={proposal.supporterCount}
              />
              
              <ShareBar
                title={proposal.title}
                slug={proposal.slug}
                url={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/proposal/${proposal.slug}`}
              />
              
              <ProposalBody
                summary={proposal.summary}
                body={proposal.body}
              />
              
              <ProposalUpdates updates={proposal.updates} />
              
              <ProposalComments
                proposalId={proposal.id}
                comments={proposal.comments}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <PledgeTiers proposalId={proposal.id} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

