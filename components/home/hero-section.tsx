"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { WaitlistCTA } from "@/components/waitlist-cta"
import Link from "next/link"

interface HeroSectionProps {
  totalMRR: number
}

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

export function HeroSection({ totalMRR }: HeroSectionProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: prefersReducedMotion ? 0 : 1200, bounce: 0 })

  useEffect(() => {
    motionValue.set(totalMRR)
  }, [totalMRR, motionValue])

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return unsubscribe
  }, [spring])

  const formattedMRR = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(displayValue / 100)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy via-navy to-navy/95" />
      
      {/* Decorative background circles - never behind translucent cards */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-copper rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bronze rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)] leading-tight"
        >
          We're reimagining the lobbying industry to{" "}
          <span className="bg-gradient-to-r from-copper to-bronze bg-clip-text text-transparent">
            crowdfund democracy
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
          className="text-xl sm:text-2xl text-slate mb-8 max-w-3xl mx-auto"
        >
          Support the <em className="italic font-semibold">issues</em> you care about most.
        </motion.p>

        {/* Live stat counter */}
        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.5 }}
          className="mb-12 p-8 bg-white/5 backdrop-blur-sm border border-slate/10 rounded-2xl inline-block"
        >
          <p className="text-slate text-sm uppercase tracking-wider mb-2">
            Collective Monthly Power
          </p>
          <p 
            className="text-5xl sm:text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)]"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="bg-gradient-to-r from-copper to-bronze bg-clip-text text-transparent">
              {formattedMRR}<span className="text-[0.4em] align-top">*</span>
            </span>
          </p>
          <p className="text-slate text-sm mt-2">
            per month in citizen-backed political power
          </p>
          <p className="text-slate/70 text-xs mt-3 italic">
            * Demo data for illustrative purposes only
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <WaitlistCTA
            source="hero"
            size="lg"
            className="w-full sm:w-auto text-base"
          >
            Join Our Waitlist
          </WaitlistCTA>
          <Link href="/proposals">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-transparent">
              Explore movements
            </Button>
          </Link>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.9 }}
          className="mt-4 text-slate text-sm"
        >
          Be the first to know when we launch
        </motion.p>
      </div>
    </section>
  )
}

