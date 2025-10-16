"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import { Users } from "lucide-react"

interface Proposal {
  id: string
  title: string
  slug: string
  summary: string
  location: string
  targetAmount: number
  currentMRR: number
  supporterCount: number
  progressPercentage: number
}

interface ProposalGridProps {
  proposals: Proposal[]
}

export function ProposalGrid({ proposals }: ProposalGridProps) {
  return (
    <section id="movements" className="py-12 md:py-16 lg:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
            Trending Movements
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto mb-4">
            Examples of the kinds of causes you'll be able to support when we launch
          </p>
        </motion.div>

        {/* Proposals grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {proposals.map((proposal, index) => (
            <motion.div
              key={proposal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-offwhite/95 border-slate/20 hover:shadow-xl hover:shadow-copper/10 relative">
                <div className="absolute top-3 right-3 bg-copper text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                  DEMO
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-slate bg-slate/10 px-3 py-1 rounded-full">
                      {proposal.location}
                    </span>
                    <div className="flex items-center gap-1 text-slate mr-16">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{proposal.supporterCount}</span>
                    </div>
                  </div>
                  <CardTitle className="text-navy mb-2">{proposal.title}</CardTitle>
                  <CardDescription className="text-slate/80 line-clamp-2">
                    {proposal.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Progress */}
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

                  {/* CTA */}
                  <Link href={`/proposal/${proposal.slug}`}>
                    <Button className="w-full">
                      Support this movement
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/proposals">
            <Button variant="outline" size="lg" className="bg-transparent">
              View all movements
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

