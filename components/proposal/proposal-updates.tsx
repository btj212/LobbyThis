"use client"

import { motion } from "framer-motion"
import { formatDistance } from "date-fns"
import { FileText, DollarSign, Activity } from "lucide-react"

interface Update {
  id: string
  title: string
  content: string
  type: string
  createdAt: Date
}

interface ProposalUpdatesProps {
  updates: Update[]
}

const typeIcons = {
  milestone: Activity,
  receipt: FileText,
  disbursement: DollarSign,
}

const typeColors = {
  milestone: "text-copper",
  receipt: "text-bronze",
  disbursement: "text-slate",
}

export function ProposalUpdates({ updates }: ProposalUpdatesProps) {
  if (updates.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-offwhite/95 rounded-2xl p-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-navy mb-4 font-[family-name:var(--font-space-grotesk)]">
          Updates
        </h2>
        <p className="text-slate">No updates yet. Check back soon for progress on this movement.</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-offwhite/95 rounded-2xl p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-navy mb-6 font-[family-name:var(--font-space-grotesk)]">
        Updates
      </h2>

      <div className="space-y-6">
        {updates.map((update, index) => {
          const Icon = typeIcons[update.type as keyof typeof typeIcons] || Activity
          const iconColor = typeColors[update.type as keyof typeof typeColors] || "text-copper"

          return (
            <div key={update.id} className="relative">
              {/* Timeline connector */}
              {index < updates.length - 1 && (
                <div className="absolute left-5 top-12 w-0.5 h-full bg-slate/20" />
              )}

              <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full bg-slate/10 flex items-center justify-center flex-shrink-0 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-navy">{update.title}</h3>
                    <span className="text-xs text-slate whitespace-nowrap ml-4">
                      {formatDistance(new Date(update.createdAt), new Date(), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-slate leading-relaxed whitespace-pre-wrap">
                    {update.content}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

