import { prisma } from "@/lib/prisma"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import { Users, MapPin } from "lucide-react"

async function getProposals() {
  const proposals = await prisma.proposal.findMany({
    where: {
      status: {
        in: ['VERIFIED', 'FUNDING', 'EXECUTING', 'COMPLETED']
      }
    },
    select: {
      id: true,
      title: true,
      slug: true,
      summary: true,
      location: true,
      status: true,
      targetAmount: true,
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
    }
  })

  return proposals.map(proposal => {
    const currentMRR = proposal.pledges.reduce((sum, pledge) => sum + pledge.amount, 0)
    const progressPercentage = Math.min(Math.round((currentMRR / proposal.targetAmount) * 100), 100)
    
    return {
      id: proposal.id,
      title: proposal.title,
      slug: proposal.slug,
      summary: proposal.summary,
      location: proposal.location,
      status: proposal.status,
      targetAmount: proposal.targetAmount,
      currentMRR,
      supporterCount: proposal._count.pledges,
      progressPercentage
    }
  })
}

export default async function ProposalsPage() {
  const proposals = await getProposals()

  return (
    <main className="min-h-screen bg-navy">
      <NavBar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
              All Movements
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Browse active lobbying campaigns and join the fight for the policies that matter
            </p>
          </div>

          {proposals.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate text-lg mb-6">No active movements yet. Be the first to start one!</p>
              <Link href="/proposals/new">
                <Button size="lg">Start a Movement</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proposals.map((proposal) => (
                <Card key={proposal.id} className="h-full bg-offwhite/95 border-slate/20 hover:shadow-xl hover:shadow-copper/10">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2 text-slate">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider">{proposal.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-medium">{proposal.supporterCount}</span>
                      </div>
                    </div>
                    <CardTitle className="text-navy mb-2">{proposal.title}</CardTitle>
                    <CardDescription className="text-slate/80 line-clamp-3">
                      {proposal.summary}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <div className="flex justify-between items-baseline mb-2">
                        <div>
                          <p className="text-2xl font-bold text-navy">
                            {formatCurrency(proposal.currentMRR)}
                            <span className="text-sm text-slate font-normal">/month</span>
                          </p>
                          <p className="text-xs text-slate">
                            of {formatCurrency(proposal.targetAmount)}/month goal
                          </p>
                        </div>
                        <p className="text-lg font-semibold text-copper">
                          {proposal.progressPercentage}%
                        </p>
                      </div>
                      <Progress value={proposal.progressPercentage} max={100} />
                    </div>

                    <Link href={`/proposal/${proposal.slug}`}>
                      <Button className="w-full">
                        View Details & Support
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}

