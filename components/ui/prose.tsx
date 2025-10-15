import { cn } from "@/lib/utils"
import * as React from "react"

interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Prose({ children, className, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:font-[family-name:var(--font-space-grotesk)] prose-headings:text-navy prose-headings:font-bold",
        "prose-h1:text-4xl prose-h1:mb-6",
        "prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4",
        "prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3",
        "prose-p:text-slate prose-p:leading-7 prose-p:mb-4",
        "prose-a:text-copper prose-a:no-underline hover:prose-a:text-bronze hover:prose-a:underline",
        "prose-strong:text-navy prose-strong:font-semibold",
        "prose-ul:text-slate prose-ul:leading-7",
        "prose-ol:text-slate prose-ol:leading-7",
        "prose-li:my-2",
        "prose-code:text-copper prose-code:bg-copper/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded",
        "prose-blockquote:border-l-copper prose-blockquote:text-slate prose-blockquote:italic",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

