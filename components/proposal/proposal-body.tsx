"use client"

import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { Prose } from "@/components/ui/prose"

interface ProposalBodyProps {
  summary: string
  body: string
}

export function ProposalBody({ summary, body }: ProposalBodyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-offwhite/95 rounded-2xl p-6 md:p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-navy mb-4 font-[family-name:var(--font-space-grotesk)]">
        About This Movement
      </h2>
      
      <div className="mb-6">
        <p className="text-lg text-slate font-medium leading-relaxed">
          {summary}
        </p>
      </div>
      
      <Prose>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {body}
        </ReactMarkdown>
      </Prose>
    </motion.div>
  )
}

