"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface WaitlistFormProps {
  onClose?: () => void
  source?: string
  inline?: boolean
}

export function WaitlistForm({ onClose, source = "unknown", inline = false }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: [] as string[],
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          interest: formData.interest.length > 0 ? formData.interest.join(", ") : null,
          source,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setSuccess(true)
      setTimeout(() => {
        if (onClose) onClose()
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const toggleInterest = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(value)
        ? prev.interest.filter((i) => i !== value)
        : [...prev.interest, value],
    }))
  }

  // Form content component
  const formContent = (
    <>
      {success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">You're on the list!</h3>
          <p className="text-slate">
            We'll email you as soon as we launch. Get ready to crowdfund democracy.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-copper bg-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-copper bg-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              I'm interested in (optional)
            </label>
            <div className="space-y-2">
              {[
                { value: "supporter", label: "Supporting causes I care about" },
                { value: "creator", label: "Creating my own movement" },
              ].map((option) => (
                <label key={option.value} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.interest.includes(option.value)}
                    onChange={() => toggleInterest(option.value)}
                    className="w-4 h-4 text-copper border-slate/30 rounded focus:ring-copper cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-slate">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
            >
              {error}
            </motion.div>
          )}

          <Button type="submit" disabled={loading} className="w-full text-base py-6">
            {loading ? "Joining..." : "Join Now"}
          </Button>

          <p className="text-xs text-slate text-center mt-4">
            We respect your privacy. No spam, unsubscribe anytime.
          </p>
        </form>
      )}
    </>
  )

  // Render inline version
  if (inline) {
    return (
      <Card className="bg-offwhite">
        <CardHeader>
          <CardTitle className="text-2xl text-navy">Join the Waitlist</CardTitle>
          <CardDescription className="text-slate">
            Be the first to know when we launch. We'll notify you as soon as you can support the causes you care about.
          </CardDescription>
        </CardHeader>
        <CardContent>{formContent}</CardContent>
      </Card>
    )
  }

  // Render modal version
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-full flex items-center justify-center p-4 py-8">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md"
          >
            <Card className="bg-offwhite relative shadow-2xl max-h-[90vh] overflow-y-auto">
              {onClose && (
                <button
                  onClick={onClose}
                  className="sticky top-4 right-4 z-10 float-right text-slate hover:text-navy transition-colors rounded-full hover:bg-slate/10 p-1.5 bg-offwhite/80 backdrop-blur-sm"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              <CardHeader className="pr-12 clear-both">
                <CardTitle className="text-2xl text-navy">Join the Waitlist</CardTitle>
                <CardDescription className="text-slate">
                  Be the first to know when we launch. We'll notify you as soon as you can support the causes you care about.
                </CardDescription>
              </CardHeader>

              <CardContent>{formContent}</CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

