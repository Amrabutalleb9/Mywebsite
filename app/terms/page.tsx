import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of amrabutalleb.com and purchase of digital products from Amr Abu-Talleb.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[65ch]">
        <p className="mb-4 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">
          Legal
        </p>
        <h1 className="mb-8 font-serif text-[length:var(--text-page)] font-normal tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Last updated: March 31, 2026. These terms govern your use of{" "}
          <strong className="text-foreground">amrabutalleb.com</strong> (the &quot;Site&quot;) and any digital products
          or services offered by <strong className="text-foreground">Amr Abu-Talleb</strong> (&quot;we&quot;,
          &quot;us&quot;). By using the Site or purchasing from us, you agree to these terms.
        </p>

        <div className="flex flex-col gap-8 text-[15px] leading-[var(--leading-longform)] text-muted-foreground">
          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">1. Use of the Site</h2>
            <p>
              You may use the Site for lawful purposes only. You agree not to misuse the Site, attempt unauthorized
              access, interfere with security, scrape content in violation of these terms, or use the Site in a way
              that harms others or our systems.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">2. Intellectual property</h2>
            <p>
              All content on the Site — including text, graphics, logos, layouts, and downloadable materials — is
              owned by Amr Abu-Talleb or licensed to us and is protected by copyright and other laws. You may not copy,
              redistribute, or create derivative works from our content without prior written permission, except as
              allowed by law or expressly stated for a specific product (e.g., a personal-use license for a purchased
              digital file).
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">3. Digital products</h2>
            <p className="mb-3">
              When you purchase a digital product (such as guides or templates), you receive a limited, non-exclusive,
              non-transferable license to use the materials for your personal or internal business use, unless a
              separate license is provided at purchase. You may not resell, share, or publicly republish the files
              except as permitted in writing.
            </p>
            <p>
              Product descriptions, pricing, and checkout are provided at the point of sale. We reserve the right to
              modify offerings or correct errors.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">4. Refunds</h2>
            <p>
              Unless stated otherwise on the product page at the time of purchase, digital products may be eligible for
              a refund within the period and under the conditions stated there (for example, a 30-day satisfaction
              guarantee where offered). Refund requests should be sent to{" "}
              <a href="mailto:hello@amrabutalleb.com" className="text-accent underline underline-offset-2">
                hello@amrabutalleb.com
              </a>{" "}
              with your purchase details. We do not guarantee results; outcomes depend on your effort and market
              conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">5. Disclaimers</h2>
            <p className="mb-3">
              The Site and all content are provided &quot;as is&quot; and &quot;as available.&quot; To the fullest
              extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the Site will be uninterrupted or error-free.
            </p>
            <p>
              Educational or strategic content on the Site is for general information only and is not legal,
              financial, or professional advice. You are responsible for your own decisions and compliance with
              third-party platforms (e.g., Freelancer.com) and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">6. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Amr Abu-Talleb shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from your
              use of the Site or products. Our total liability for any claim relating to the Site or a purchase shall
              not exceed the amount you paid us for the specific product or service giving rise to the claim in the
              twelve months before the claim, or one hundred US dollars if greater.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">7. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless Amr Abu-Talleb from claims, damages, or expenses arising from
              your violation of these terms or misuse of the Site or products.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">8. Governing law</h2>
            <p>
              These terms are governed by the laws applicable in the jurisdiction of our principal place of business,
              without regard to conflict-of-law rules. Courts in that jurisdiction shall have exclusive jurisdiction
              over disputes, subject to mandatory consumer protections in your country of residence where they cannot
              be waived.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">9. Changes</h2>
            <p>
              We may update these terms from time to time. The updated date will appear at the top. Continued use after
              changes constitutes acceptance. For material changes affecting purchases, we may provide additional
              notice where required.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">10. Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href="mailto:hello@amrabutalleb.com" className="text-accent underline underline-offset-2">
                hello@amrabutalleb.com
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          <Link href="/privacy" className="text-accent underline underline-offset-2">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/" className="text-accent underline underline-offset-2">
            Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
