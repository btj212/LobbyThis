export interface ShareData {
  title: string
  text: string
  url: string
}

export async function shareViaWebAPI(data: ShareData): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share(data)
      return true
    } catch (error) {
      // User cancelled or error occurred
      console.error('Share failed:', error)
      return false
    }
  }
  return false
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (error) {
      console.error('Copy failed:', error)
      return false
    }
  }
  return false
}

export function buildShareURL(baseUrl: string, slug: string): string {
  const url = new URL(baseUrl)
  url.searchParams.set('utm_source', 'user')
  url.searchParams.set('utm_medium', 'share')
  url.searchParams.set('utm_campaign', slug)
  return url.toString()
}

export function buildTwitterShareURL(text: string, url: string): string {
  const twitterUrl = new URL('https://twitter.com/intent/tweet')
  twitterUrl.searchParams.set('text', text)
  twitterUrl.searchParams.set('url', url)
  return twitterUrl.toString()
}

export function buildFacebookShareURL(url: string): string {
  const facebookUrl = new URL('https://www.facebook.com/sharer/sharer.php')
  facebookUrl.searchParams.set('u', url)
  return facebookUrl.toString()
}

export function buildLinkedInShareURL(url: string): string {
  const linkedInUrl = new URL('https://www.linkedin.com/sharing/share-offsite/')
  linkedInUrl.searchParams.set('url', url)
  return linkedInUrl.toString()
}

export function buildEmailShareURL(subject: string, body: string): string {
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

