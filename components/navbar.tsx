"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { WaitlistCTA } from "@/components/waitlist-cta"

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <Link href="/" className="flex items-center group" onClick={() => setMobileMenuOpen(false)}>
            <h1 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]">
              <span className="text-white group-hover:text-white/90 transition-colors">
                LOBBY
              </span>
              <span className="text-copper group-hover:bg-gradient-to-r group-hover:from-copper group-hover:to-bronze group-hover:bg-clip-text group-hover:text-transparent transition-all">
                THIS
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <WaitlistCTA 
              source="navbar"
              className="px-6 py-2 bg-gradient-to-r from-copper to-bronze text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-copper/20 transform hover:-translate-y-0.5 transition-all duration-200"
            />
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors touch-manipulation"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy border-t border-slate/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors touch-manipulation"
              >
                How It Works
              </Link>
              <Link 
                href="/proposals" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors touch-manipulation"
              >
                Browse Movements
              </Link>
              <div className="pt-2">
                <WaitlistCTA 
                  source="navbar-mobile"
                  className="w-full px-6 py-3 bg-gradient-to-r from-copper to-bronze text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-copper/20 transition-all duration-200 text-center touch-manipulation"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

