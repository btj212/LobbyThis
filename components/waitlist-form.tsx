"use client"

import { useState } from "react"
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

  const content = (
    <div 
      className={inline ? "" : "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"}
      onClick={inline ? undefined : onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Card className={`${inline ? "" : "w-full max-w-md relative"} bg-offwhite`}>
        {!inline && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate hover:text-navy transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <CardHeader>
          <CardTitle className="text-2xl text-navy">Join the Waitlist</CardTitle>
          <CardDescription className="text-slate">
            Be the first to know when we launch. We'll notify you as soon as you can support the causes you care about.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">You're on the list!</h3>
              <p className="text-slate">
                We'll email you as soon as we launch. Get ready to crowdfund democracy.
              </p>
            </div>
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
                  className="w-full px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-copper"
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
                  className="w-full px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-copper"
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
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interest.includes(option.value)}
                        onChange={() => toggleInterest(option.value)}
                        className="w-4 h-4 text-copper border-slate/30 rounded focus:ring-copper"
                      />
                      <span className="ml-2 text-sm text-slate">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Joining..." : "Join Waitlist"}
              </Button>

              <p className="text-xs text-slate text-center mt-4">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
      </div>
    </div>
  )

  return inline ? content : content
}

