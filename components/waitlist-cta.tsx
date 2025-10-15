"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WaitlistForm } from "./waitlist-form"

interface WaitlistCTAProps {
  source?: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline"
  className?: string
  children?: React.ReactNode
}

export function WaitlistCTA({
  source = "cta",
  size = "default",
  variant = "default",
  className = "",
  children,
}: WaitlistCTAProps) {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Button
        size={size}
        variant={variant}
        onClick={() => setShowForm(true)}
        className={className}
      >
        {children || "Join Our Waitlist"}
      </Button>

      {showForm && (
        <WaitlistForm
          source={source}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  )
}

