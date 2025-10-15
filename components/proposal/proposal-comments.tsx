"use client"

import { motion } from "framer-motion"
import { formatDistance } from "date-fns"
import { MessageCircle, Star } from "lucide-react"
import { Tier } from "@prisma/client"

interface Comment {
  id: string
  content: string
  createdAt: Date
  pledge: {
    email: string
    tier: Tier
    weight: number
  }
}

interface ProposalCommentsProps {
  proposalId: string
  comments: Comment[]
}

const tierColors = {
  TIER_5: "bg-slate/10 text-slate",
  TIER_10: "bg-bronze/10 text-bronze",
  TIER_20: "bg-copper/10 text-copper",
  TIER_100: "bg-gradient-to-r from-copper/20 to-bronze/20 text-copper border border-copper/30",
}

const tierNames = {
  TIER_5: "Supporter",
  TIER_10: "Advocate",
  TIER_20: "Champion",
  TIER_100: "Leader",
}

export function ProposalComments({ proposalId, comments }: ProposalCommentsProps) {
  // Mask email for privacy
  const maskEmail = (email: string) => {
    const [local, domain] = email.split('@')
    if (local.length <= 2) return `${local}***@${domain}`
    return `${local[0]}${local[1]}***@${domain}`
  }

  if (comments.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-offwhite/95 rounded-2xl p-8 shadow-xl"
      >
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-6 h-6 text-navy" />
          <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-space-grotesk)]">
            Comments
          </h2>
        </div>
        <p className="text-slate">
          No comments yet. Be the first to support this movement and share your thoughts!
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-offwhite/95 rounded-2xl p-8 shadow-xl"
    >
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="w-6 h-6 text-navy" />
        <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-space-grotesk)]">
          Comments
        </h2>
        <span className="text-sm text-slate ml-auto">
          Sorted by influence (tier weight)
        </span>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => {
          const isHighTier = comment.pledge.weight >= 5

          return (
            <div
              key={comment.id}
              className={`p-4 rounded-lg transition-all ${
                isHighTier ? "bg-copper/5 border border-copper/20" : "bg-slate/5"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-semibold text-sm">
                    {comment.pledge.email[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-navy">{maskEmail(comment.pledge.email)}</p>
                      {isHighTier && <Star className="w-4 h-4 text-copper fill-copper" />}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tierColors[comment.pledge.tier]}`}>
                        {tierNames[comment.pledge.tier]}
                      </span>
                      <span className="text-xs text-slate">
                        {comment.pledge.weight}x weight
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate whitespace-nowrap">
                  {formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true })}
                </span>
              </div>

              <p className="text-slate leading-relaxed">{comment.content}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-slate/10">
        <p className="text-sm text-slate text-center">
          Want to comment? Support this movement at any tier to join the conversation.
        </p>
      </div>
    </motion.div>
  )
}

