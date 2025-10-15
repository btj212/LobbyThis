"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, Mail, Link as LinkIcon, Check } from "lucide-react"
import {
  shareViaWebAPI,
  copyToClipboard,
  buildShareURL,
  buildTwitterShareURL,
  buildFacebookShareURL,
  buildLinkedInShareURL,
  buildEmailShareURL,
} from "@/lib/share"

interface ShareBarProps {
  title: string
  slug: string
  url: string
}

export function ShareBar({ title, slug, url }: ShareBarProps) {
  const [copied, setCopied] = useState(false)
  
  const shareUrl = buildShareURL(url, slug)
  const shareText = `Support ${title} on LobbyThis`

  const handleWebShare = async () => {
    const shared = await shareViaWebAPI({
      title: `LobbyThis: ${title}`,
      text: shareText,
      url: shareUrl,
    })

    if (!shared) {
      // Fallback to copy
      handleCopyLink()
    }
  }

  const handleCopyLink = async () => {
    const success = await copyToClipboard(shareUrl)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleTwitter = () => {
    window.open(buildTwitterShareURL(shareText, shareUrl), '_blank', 'width=550,height=420')
  }

  const handleFacebook = () => {
    window.open(buildFacebookShareURL(shareUrl), '_blank', 'width=550,height=420')
  }

  const handleLinkedIn = () => {
    window.open(buildLinkedInShareURL(shareUrl), '_blank', 'width=550,height=420')
  }

  const handleEmail = () => {
    const emailBody = `I thought you might be interested in this movement on LobbyThis:\n\n${title}\n\n${shareUrl}`
    window.location.href = buildEmailShareURL(`Support ${title}`, emailBody)
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
      <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
        Share This Movement
      </h3>
      
      {/* Desktop: Horizontal layout */}
      <div className="hidden md:flex items-center gap-3">
        <Button
          onClick={handleCopyLink}
          variant="outline"
          size="sm"
          className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <LinkIcon className="w-4 h-4 mr-2" />
              Copy Link
            </>
          )}
        </Button>
        
        <Button
          onClick={handleTwitter}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </Button>
        
        <Button
          onClick={handleFacebook}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </Button>
        
        <Button
          onClick={handleLinkedIn}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </Button>
        
        <Button
          onClick={handleEmail}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10"
          aria-label="Share via Email"
        >
          <Mail className="w-4 h-4" />
        </Button>
      </div>

      {/* Mobile: Web Share API with fallback */}
      <div className="md:hidden space-y-2">
        <Button
          onClick={handleWebShare}
          variant="outline"
          className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10"
        >
          Share
        </Button>
        
        <Button
          onClick={handleCopyLink}
          variant="ghost"
          className="w-full text-white hover:bg-white/10"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Link Copied!
            </>
          ) : (
            <>
              <LinkIcon className="w-4 h-4 mr-2" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

