"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { formatCurrency } from "@/lib/utils"
import { Users, MapPin } from "lucide-react"
import { ProposalStatus } from "@prisma/client"

interface ProposalHeaderProps {
  title: string
  location: string
  status: ProposalStatus
  totalMRR: number
  targetAmount: number
  progressPercentage: number
  supporterCount: number
}

const statusColors = {
  DRAFT: "bg-slate/20 text-slate",
  UNDER_REVIEW: "bg-bronze/20 text-bronze",
  VERIFIED: "bg-copper/20 text-copper",
  FUNDING: "bg-copper/20 text-copper",
  EXECUTING: "bg-bronze/20 text-bronze",
  COMPLETED: "bg-green-500/20 text-green-400",
  REJECTED: "bg-red-500/20 text-red-400",
}

const statusLabels = {
  DRAFT: "Draft",
  UNDER_REVIEW: "Under Review",
  VERIFIED: "Verified",
  FUNDING: "Active Funding",
  EXECUTING: "In Progress",
  COMPLETED: "Completed",
  REJECTED: "Rejected",
}

export function ProposalHeader({
  title,
  location,
  status,
  totalMRR,
  targetAmount,
  progressPercentage,
  supporterCount,
}: ProposalHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-offwhite/95 rounded-2xl p-8 shadow-xl"
    >
      {/* Status and location */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
          <div className="flex items-center gap-1.5 text-slate">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate">
          <Users className="w-5 h-5" />
          <span className="text-lg font-semibold text-navy">{supporterCount}</span>
          <span className="text-sm">supporters</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-navy mb-6 font-[family-name:var(--font-space-grotesk)]">
        {title}
      </h1>

      {/* Funding progress */}
      <div className="space-y-3">
        <div className="flex justify-between items-baseline">
          <div>
            <p className="text-3xl font-bold text-navy">
              {formatCurrency(totalMRR)}
              <span className="text-base text-slate font-normal">/month</span>
            </p>
            <p className="text-sm text-slate">
              of {formatCurrency(targetAmount)}/month goal
            </p>
          </div>
          <p className="text-2xl font-semibold text-copper">
            {progressPercentage}%
          </p>
        </div>
        <Progress value={progressPercentage} max={100} animated />
      </div>
    </motion.div>
  )
}

