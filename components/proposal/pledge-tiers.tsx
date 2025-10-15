"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { WaitlistCTA } from "@/components/waitlist-cta"
import { Check } from "lucide-react"

interface PledgeTiersProps {
  proposalId: string
}

const tiers = [
  {
    key: "TIER_5",
    amount: 5,
    name: "Supporter",
    weight: 1,
    features: ["Monthly updates", "Public supporter badge", "Vote on priorities"],
  },
  {
    key: "TIER_10",
    amount: 10,
    name: "Advocate",
    weight: 2,
    features: ["All Supporter benefits", "Priority comments (2x weight)", "Early update access"],
    popular: true,
  },
  {
    key: "TIER_20",
    amount: 20,
    name: "Champion",
    weight: 5,
    features: ["All Advocate benefits", "Amplified voice (5x weight)", "Priority campaign updates"],
  },
  {
    key: "TIER_100",
    amount: 100,
    name: "Leader",
    weight: 20,
    features: ["All Champion benefits", "Maximum influence (20x weight)", "Recognition on proposal page"],
  },
]

export function PledgeTiers({ proposalId }: PledgeTiersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-4"
    >
      {/* Demo Notice */}
      <div className="bg-copper/10 border border-copper/20 rounded-lg p-4 mb-4">
        <p className="text-sm text-white">
          <strong>Demo Preview:</strong> This is an example of how our tier system will work when we launch.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
        Support This Movement
      </h2>

      <p className="text-slate text-sm mb-6">
        Join our waitlist to be notified when we launch and you can support causes like this.
      </p>

      {tiers.map((tier) => (
        <Card
          key={tier.key}
          className={`bg-offwhite/95 border-2 transition-all duration-200 ${
            tier.popular ? "border-copper shadow-lg shadow-copper/10" : "border-slate/20"
          }`}
        >
          {tier.popular && (
            <div className="bg-gradient-to-r from-copper to-bronze text-white text-xs font-semibold uppercase tracking-wider text-center py-2 rounded-t-xl">
              Most Popular
            </div>
          )}
          
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-navy text-xl mb-1">{tier.name}</CardTitle>
                <CardDescription className="text-slate/80">
                  {tier.weight}x voting weight
                </CardDescription>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-navy">
                  ${tier.amount}
                </p>
                <p className="text-xs text-slate">/month</p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <ul className="space-y-2 mb-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate">
                  <Check className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <WaitlistCTA
              source={`proposal-tier-${tier.key}`}
              className="w-full"
            >
              Join Waitlist - ${tier.amount}/month
            </WaitlistCTA>
          </CardContent>
        </Card>
      ))}

      <div className="mt-6">
        <WaitlistCTA
          source="proposal-sidebar-main"
          className="w-full"
          size="lg"
        >
          Get Notified When We Launch
        </WaitlistCTA>
      </div>

      <p className="text-xs text-slate text-center mt-4">
        All contributions will go directly to lobbying efforts when we launch.
      </p>
    </motion.div>
  )
}

