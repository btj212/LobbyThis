import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Prose } from "@/components/ui/prose"

export const metadata = {
  title: "Privacy Policy | LobbyThis",
  description: "Learn how we protect your privacy and handle your data",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-navy">
      <NavBar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 font-[family-name:var(--font-space-grotesk)]">
            Privacy Policy
          </h1>
          
          <div className="bg-offwhite/95 rounded-lg p-8 sm:p-12">
            <Prose>
              <p className="text-sm text-slate mb-6">
                <strong>Last Updated:</strong> October 15, 2025
              </p>

              <h2>Our Commitment to Privacy</h2>
              <p>
                At LobbyThis, we believe privacy is a fundamental right. This policy explains what minimal data we collect, why we collect it, and how we protect it.
              </p>

              <h2>What Data We Collect</h2>
              
              <h3>Waitlist Signups</h3>
              <p>When you join our waitlist, we collect:</p>
              <ul>
                <li><strong>Email address</strong> - To notify you when we launch</li>
                <li><strong>Name</strong> - To personalize communications</li>
                <li><strong>Interest preferences (optional)</strong> - To understand what features matter most</li>
                <li><strong>Signup source</strong> - To understand which pages are most effective</li>
              </ul>

              <h3>Anonymous Analytics</h3>
              <p>We collect basic page view statistics:</p>
              <ul>
                <li><strong>Page visited</strong> - Which pages are viewed</li>
                <li><strong>Visit count</strong> - How many times pages are viewed per day</li>
              </ul>
              <p>
                We do NOT collect: IP addresses, browser fingerprints, location data, cookies for tracking, or any personally identifiable information in our analytics.
              </p>

              <h2>What We Don't Do</h2>
              <ul>
                <li>❌ No third-party tracking pixels or analytics (Google Analytics, Facebook Pixel, etc.)</li>
                <li>❌ No advertising cookies</li>
                <li>❌ No selling or sharing your data with third parties</li>
                <li>❌ No behavioral profiling or targeting</li>
                <li>❌ No unnecessary data retention</li>
              </ul>

              <h2>How We Use Your Data</h2>
              <p>
                We use your waitlist information solely to:
              </p>
              <ul>
                <li>Notify you when we launch</li>
                <li>Send important updates about the platform (if you opt in)</li>
                <li>Understand aggregate interest levels (e.g., "X people signed up from the homepage")</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                Your data is stored securely in our database with industry-standard encryption. We implement appropriate technical and organizational measures to protect your information.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access</strong> - Request a copy of your data</li>
                <li><strong>Correction</strong> - Request corrections to your data</li>
                <li><strong>Deletion</strong> - Request deletion of your data at any time</li>
                <li><strong>Opt-out</strong> - Unsubscribe from all communications</li>
              </ul>
              <p>
                To exercise these rights, contact us at <a href="mailto:blake@lobbythis.com">blake@lobbythis.com</a>
              </p>

              <h2>Data Retention</h2>
              <p>
                We retain waitlist data until you request deletion or until 2 years after our launch if you haven't engaged with the platform.
              </p>

              <h2>Compliance</h2>
              <p>
                This privacy policy is designed to comply with:
              </p>
              <ul>
                <li>General Data Protection Regulation (GDPR) - EU</li>
                <li>California Consumer Privacy Act (CCPA) - California</li>
                <li>Other applicable privacy laws</li>
              </ul>

              <h2>Children's Privacy</h2>
              <p>
                Our service is not directed to children under 13. We do not knowingly collect information from children under 13.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this policy as we develop our platform. Material changes will be communicated via email to waitlist members.
              </p>

              <h2>Contact Us</h2>
              <p>
                Questions about privacy? Contact us at:
              </p>
              <ul>
                <li>Email: <a href="mailto:blake@lobbythis.com">blake@lobbythis.com</a></li>
                <li>Mail: LobbyThis Privacy, [Address TBD]</li>
              </ul>

              <hr />

              <h2>Technical Details</h2>
              
              <h3>Cookies</h3>
              <p>
                We use minimal essential cookies only:
              </p>
              <ul>
                <li><strong>Session cookies</strong> - To maintain your session while browsing (expires when you close browser)</li>
              </ul>
              <p>
                No advertising, tracking, or analytics cookies are used.
              </p>

              <h3>Data Processors</h3>
              <p>
                We use the following services that may process data on our behalf:
              </p>
              <ul>
                <li><strong>Hosting provider</strong> - For website hosting and database storage</li>
                <li><strong>Email service</strong> - For sending launch notifications (when we launch)</li>
              </ul>
              <p>
                All data processors are contractually required to protect your data and use it only as instructed.
              </p>

              <h3>International Data Transfers</h3>
              <p>
                Your data may be stored and processed in the United States. We ensure appropriate safeguards are in place for international transfers.
              </p>
            </Prose>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

