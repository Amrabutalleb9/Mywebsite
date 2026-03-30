import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Amr Abu-Talleb collects, uses, and protects your personal information on amrabutalleb.com.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="px-8 pt-32 pb-24 lg:px-16 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[65ch]">
        <p className="mb-4 text-xs font-medium tracking-[var(--tracking-label)] text-accent uppercase">
          Legal
        </p>
        <h1 className="mb-8 font-serif text-[length:var(--text-page)] font-normal tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Last updated: March 31, 2026. This policy describes how{" "}
          <strong className="text-foreground">Amr Abu-Talleb</strong> (&quot;we&quot;, &quot;us&quot;) handles
          information when you use <strong className="text-foreground">amrabutalleb.com</strong> (the
          &quot;Site&quot;).
        </p>

        <div className="flex flex-col gap-8 text-[15px] leading-[var(--leading-longform)] text-muted-foreground">
          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">1. Who we are</h2>
            <p>
              The Site is operated by Amr Abu-Talleb. For privacy-related questions, contact{" "}
              <a href="mailto:hello@amrabutalleb.com" className="text-accent underline underline-offset-2">
                hello@amrabutalleb.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">2. Information we collect</h2>
            <p className="mb-3">We may collect:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">Information you provide</strong> — for example, name, email address,
                and message content when you submit a contact form, footer form, or similar fields on the Site.
              </li>
              <li>
                <strong className="text-foreground">Technical data</strong> — such as IP address, browser type, device
                information, and pages visited, collected automatically by our hosting provider or similar
                infrastructure when you load the Site.
              </li>
              <li>
                <strong className="text-foreground">Cookies and similar technologies</strong> — if we or embedded
                third-party services set cookies or use local storage, they are used to operate the Site, remember
                preferences, or analyze traffic as described by those services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">3. How we use information</h2>
            <p className="mb-3">We use the information above to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Respond to inquiries and provide services you request;</li>
              <li>Process or fulfill digital product purchases where applicable;</li>
              <li>Operate, secure, and improve the Site;</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">4. Third-party services</h2>
            <p>
              The Site may use third-party processors (for example, form delivery, scheduling embeds, payment or checkout
              providers, or hosting). Those services have their own privacy policies. We encourage you to read them.
              We only share information with them as needed to provide the relevant feature.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">5. Retention</h2>
            <p>
              We retain personal information only as long as needed for the purposes above, unless a longer period is
              required by law. Email inquiries may be kept for a reasonable period to manage ongoing communication.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">6. Your rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, delete, or restrict processing of your
              personal data, or to object to certain processing. To exercise these rights, contact us at the email
              above. We will respond within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">7. International transfers</h2>
            <p>
              If you access the Site from outside the country where we operate, your information may be transferred
              to and processed in other countries where our providers host data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">8. Children</h2>
            <p>
              The Site is not directed at children under 16. We do not knowingly collect personal information from
              children. If you believe we have, please contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl text-foreground">9. Changes</h2>
            <p>
              We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change when
              we do. Continued use of the Site after changes means you accept the updated policy.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          <Link href="/terms" className="text-accent underline underline-offset-2">
            Terms of Service
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
