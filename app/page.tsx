import { prisma } from "@/lib/prisma"
import { HeroSection } from "@/components/home/hero-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { ProposalGrid } from "@/components/home/proposal-grid"
import { TransparencySection } from "@/components/home/transparency-section"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"

async function getHomeData() {
  // Get all demo proposals
  const proposals = await prisma.proposal.findMany({
    where: {
      status: {
        in: ['VERIFIED', 'FUNDING', 'EXECUTING']
      }
    },
    select: {
      id: true,
      title: true,
      slug: true,
      summary: true,
      location: true,
      targetAmount: true,
      status: true,
      createdAt: true,
      pledges: {
        where: {
          status: 'ACTIVE'
        },
        select: {
          amount: true,
          status: true
        }
      },
      _count: {
        select: {
          pledges: {
            where: {
              status: 'ACTIVE'
            }
          }
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 8
  })

  // Calculate MRR for each proposal and total
  const proposalsWithStats = proposals.map(proposal => {
    const currentMRR = proposal.pledges.reduce((sum, pledge) => sum + pledge.amount, 0)
    const progressPercentage = Math.min(Math.round((currentMRR / proposal.targetAmount) * 100), 100)
    
    return {
      id: proposal.id,
      title: proposal.title,
      slug: proposal.slug,
      summary: proposal.summary,
      location: proposal.location,
      targetAmount: proposal.targetAmount,
      currentMRR,
      supporterCount: proposal._count.pledges,
      progressPercentage
    }
  })

  // Calculate total MRR across all active pledges
  const totalMRRResult = await prisma.pledge.aggregate({
    where: {
      status: 'ACTIVE'
    },
    _sum: {
      amount: true
    }
  })

  const totalMRR = totalMRRResult._sum.amount || 0

  return {
    proposals: proposalsWithStats,
    totalMRR
  }
}

export default async function HomePage() {
  const { proposals, totalMRR } = await getHomeData()

  return (
    <main className="min-h-screen bg-navy">
      <NavBar />
      <HeroSection totalMRR={totalMRR} />
      <HowItWorks />
      <ProposalGrid proposals={proposals} />
      <TransparencySection />
      <Footer />
    </main>
  )
}
