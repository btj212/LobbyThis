import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight mb-4 font-[family-name:var(--font-space-grotesk)]">
              <span className="text-white">LOBBY</span>
              <span className="text-copper">THIS</span>
            </h2>
            <p className="text-slate text-sm max-w-md mb-4">
              A civic crowdfunding platform where citizens write, fund, and transparently execute their own lobbying campaigns.
            </p>
            <p className="text-bronze italic font-medium">
              The people, organized.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#how-it-works" className="text-slate hover:text-white text-sm transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/proposals" className="text-slate hover:text-white text-sm transition-colors">
                  Browse Movements
                </Link>
              </li>
              <li>
                <Link href="/#transparency" className="text-slate hover:text-white text-sm transition-colors">
                  Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-slate hover:text-white text-sm transition-colors">
                  Legal & Compliance
                </Link>
              </li>
              <li>
                <Link href="mailto:blake@lobbythis.com" className="text-slate hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate text-sm">
              © {currentYear} LobbyThis. All rights reserved.
            </p>
            <p className="text-slate/60 text-xs mt-2 md:mt-0">
              Built to democratize political influence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

