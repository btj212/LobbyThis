import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-navy">
      <NavBar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8 font-[family-name:var(--font-space-grotesk)]">
            Legal & Compliance
          </h1>

          <div className="bg-offwhite/95 rounded-2xl p-8 shadow-xl space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">About LobbyThis</h2>
              <p className="text-slate leading-relaxed mb-4">
                LobbyThis is a civic crowdfunding platform that enables citizens to pool resources for lobbying efforts. We operate in full compliance with federal lobbying disclosure laws.
              </p>
              <p className="text-slate leading-relaxed">
                All lobbying activities conducted through funds raised on this platform are disclosed to the appropriate authorities as required by law.
              </p>
            </section>

            <section id="terms">
              <h2 className="text-2xl font-bold text-navy mb-4">Terms of Service</h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  <strong>1. Acceptance of Terms:</strong> By using LobbyThis, you agree to these terms and conditions.
                </p>
                <p>
                  <strong>2. User Responsibilities:</strong> Users must provide accurate information and use the platform in good faith for civic engagement purposes.
                </p>
                <p>
                  <strong>3. Subscriptions:</strong> All contributions are recurring monthly subscriptions. You may cancel at any time through your account settings or by contacting support.
                </p>
                <p>
                  <strong>4. Use of Funds:</strong> Funds raised through LobbyThis are used exclusively for lobbying efforts as described in each proposal. We provide regular transparency reports.
                </p>
                <p>
                  <strong>5. No Guarantees:</strong> While we work diligently toward policy goals, we cannot guarantee specific legislative outcomes.
                </p>
                <p>
                  <strong>6. Refunds:</strong> Due to the nature of ongoing lobbying work, contributions are generally non-refundable. However, you may cancel your subscription at any time.
                </p>
              </div>
            </section>

            <section id="privacy">
              <h2 className="text-2xl font-bold text-navy mb-4">Privacy Policy</h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  <strong>Information We Collect:</strong> We collect your email address, payment information (processed securely through Stripe), and contribution data.
                </p>
                <p>
                  <strong>How We Use Your Information:</strong> Your information is used to process contributions, send updates about movements you support, and maintain platform functionality.
                </p>
                <p>
                  <strong>Information Sharing:</strong> We do not sell your personal information. We may be required to disclose certain information to comply with lobbying disclosure laws.
                </p>
                <p>
                  <strong>Security:</strong> We use industry-standard security measures to protect your data.
                </p>
                <p>
                  <strong>Your Rights:</strong> You may request access to, correction of, or deletion of your personal information by contacting us.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Compliance</h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  <strong>Lobbying Disclosure Act:</strong> LobbyThis complies with the Lobbying Disclosure Act of 1995 and files required reports with the U.S. Senate and House of Representatives.
                </p>
                <p>
                  <strong>Tax Status:</strong> LobbyThis operates as a for-profit platform facilitating civic engagement. Contributions are not tax-deductible.
                </p>
                <p>
                  <strong>Transparency:</strong> We maintain public records of all disbursements and provide regular updates to supporters.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Contact</h2>
              <p className="text-slate">
                For questions about our legal policies, compliance, or to exercise your privacy rights, please contact us at:
              </p>
              <p className="text-navy font-semibold mt-4">
                blake@lobbythis.com
              </p>
            </section>

            <p className="text-xs text-slate pt-8 border-t border-slate/20">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

