"use client"

import { motion } from "framer-motion"
import { DollarSign, Users, BarChart3 } from "lucide-react"
import { WaitlistCTA } from "@/components/waitlist-cta"

const principles = [
  {
    icon: DollarSign,
    title: "Money is speech, spend accordingly",
    description: "Citizens United isn't going anywhere - we want to use it to empower the people.",
  },
  {
    icon: Users,
    title: "Popular ideas should become law",
    description: "Special interests have stood in the way of radical progress for too long.",
  },
  {
    icon: BarChart3,
    title: "Maximum impact, minimum overhead",
    description: "We leverage AI-powered analytics to assess maximum dollar impact. No army of expensive lobbyists.",
  },
]

export function TransparencySection() {
  return (
    <section id="transparency" className="py-12 md:py-16 lg:py-24 bg-navy border-t border-slate/10">
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
            Our Philosophy
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            Built on trust, transparency, and the belief that your money should work for you
          </p>
        </motion.div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-copper/20 to-bronze/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <principle.icon className="w-8 h-8 text-copper" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                {principle.title}
              </h3>
              <p className="text-slate leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-copper/10 via-bronze/10 to-copper/10 border border-copper/20 rounded-2xl p-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
              Join the Movement
            </h3>
            <p className="text-lg text-slate mb-8 leading-relaxed">
              Support a cause. Build pressure. Move policy, together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitlistCTA
                source="transparency-support"
                size="lg"
                className="px-8 py-3"
              >
                Support a cause
              </WaitlistCTA>
              <WaitlistCTA
                source="transparency-create"
                size="lg"
                variant="outline"
                className="px-8 py-3"
              >
                Start your own
              </WaitlistCTA>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

