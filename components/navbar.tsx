"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { WaitlistCTA } from "@/components/waitlist-cta"

export function NavBar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-slate/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <h1 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]">
              <span className="text-white group-hover:text-white/90 transition-colors">
                LOBBY
              </span>
              <span className="text-copper group-hover:bg-gradient-to-r group-hover:from-copper group-hover:to-bronze group-hover:bg-clip-text group-hover:text-transparent transition-all">
                THIS
              </span>
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#how-it-works" 
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/proposals" 
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              Browse Movements
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <WaitlistCTA 
              source="navbar"
              className="px-6 py-2 bg-gradient-to-r from-copper to-bronze text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-copper/20 transform hover:-translate-y-0.5 transition-all duration-200"
            />
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

