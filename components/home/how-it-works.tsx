"use client"

import { motion } from "framer-motion"
import { FileText, Users, Eye } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Start a movement",
    description: "Write a short proposal for change and share it on LobbyThis.",
  },
  {
    icon: Users,
    title: "Spread the word",
    description: "Invite supporters. More backers expands your influence.",
  },
  {
    icon: Eye,
    title: "See the impact",
    description: "We share clear updates on strategies and actions taken toward your goal.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-16 lg:py-24 bg-navy">
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
            How It Works
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            LobbyThis turns collective funding into political leverage. We're building a transparent, AI-powered firm to maximize influence and minimize overhead.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-slate/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-copper to-bronze rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-copper/20 to-bronze/20 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-copper" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
                  {step.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

