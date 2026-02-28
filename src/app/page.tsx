import { Hero } from "./components/sections/Hero";
import { Section } from "./components/ui/Section";
import { Card } from "./components/ui/Card";
import { Button } from "./components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Projects */}
      <Section id="projects">
        <h2 className="text-2xl font-semibold tracking-tight">Work</h2>
        <p className="mt-2 max-w-prose text-foreground-muted">
          A selection of projects focused on real-world problems, clean
          architecture, and production-ready execution.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <Card>
            {/* TODO: Add a consistent project thumbnail (16:9) */}
            <h3 className="text-lg font-semibold">DeckHaven</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              A trading card collection and deck-building web app focused on fast
              search, clean organization, and a smooth “tabletop” experience.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
              <li>• Collection management with structured data + validation</li>
              <li>• Responsive UI patterns for browsing, filtering, and navigation</li>
              <li>• Deployed for real-world use with production-ready workflows</li>
            </ul>

            <p className="mt-4 text-xs text-muted">
              Next.js • TypeScript • Prisma • PostgreSQL • Tailwind
            </p>

            <div className="mt-4 flex gap-3">
              <Button
                href="https://github.com/Christopher-Holland/DeckHaven"
                variant="secondary"
              >
                Repo
              </Button>
              <Button href="https://deck-haven.vercel.app/" variant="secondary">
                Live
              </Button>
            </div>
          </Card>

          {/* Project 2 */}
          <Card>
            {/* TODO: Add a consistent project thumbnail (16:9) */}
            <h3 className="text-lg font-semibold">My Ledger</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              A personal finance app built to track transactions, categories, and
              budgets with clarity—designed to stay maintainable as features grow.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
              <li>• Transaction and category modeling with scalable structure</li>
              <li>• Clean UI flows for day-to-day tracking and review</li>
              <li>• Built with a practical foundation for future insights/automation</li>
            </ul>

            <p className="mt-4 text-xs text-muted">
              React • Node.js • MongoDB • Express
            </p>

            <div className="mt-4 flex gap-3">
              <Button href="#" variant="secondary">
                Repo
              </Button>
            </div>
          </Card>

          {/* Project 3 */}
          <Card>
            {/* TODO: Add a consistent project thumbnail (16:9) */}
            <h3 className="text-lg font-semibold">Next.js Portfolio Template</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              A reusable portfolio/marketing template built for speed and
              customization—clean sections, consistent components, and a
              professional default look.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
              <li>• Modular sections (Hero, Work, About, Contact)</li>
              <li>• Simple theming via CSS variables + utility classes</li>
              <li>• Built for fast reuse across future client projects</li>
            </ul>

            <p className="mt-4 text-xs text-muted">
              Next.js • TypeScript • Tailwind
            </p>

            <div className="mt-4 flex gap-3">
              <Button
                href="https://github.com/Christopher-Holland/chris-holland-portfolio"
                variant="secondary"
              >
                Repo
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-2 max-w-prose text-foreground-muted">
          I’m a software engineer focused on building clean, maintainable web
          applications—especially dashboards, internal tools, and product-focused
          web apps that balance usability with solid engineering.
        </p>
        <p className="mt-4 max-w-prose text-foreground-muted">
          I prefer clear scope, predictable delivery, and systems that are easy
          to extend—so projects don’t become fragile as they evolve.
        </p>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 max-w-prose text-foreground-muted">
          If you’d like to work together, send a brief overview of what you’re
          building and what “success” looks like. I’ll reply with next steps and
          a few questions to confirm scope.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-sm font-medium">What to include</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li>• Project goal + who it’s for</li>
              <li>• Timeline (ideal launch date)</li>
              <li>• Links: reference sites, designs, docs (if you have them)</li>
              <li>• Budget range (optional, but helpful)</li>
            </ul>

            <div className="mt-5">
              <Button href="mailto:chrisholland.dev@gmail.com" variant="primary">
                Start a conversation
              </Button>

              <p className="mt-3 text-xs text-muted">
                Or copy:{" "}
                <span className="select-all font-mono text-foreground">
                  chrisholland.dev@gmail.com
                </span>
              </p>

              <p className="mt-2 text-xs text-muted">
                {/* TODO: Replace with a contact form (Formspree / Basin / Tally) */}
                Typical response time: within 1–2 business days.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-sm font-medium">Services</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li>• Dashboards & internal tools</li>
              <li>• Web apps & MVP builds</li>
              <li>• Landing pages & marketing sites</li>
              <li>• Maintenance, fixes, and iterative improvements</li>
            </ul>

            <p className="mt-4 text-sm text-foreground-muted">
              Prefer LinkedIn? Use the icon in the header, or click the link below.
            </p>
            <a href="https://linkedin.com/in/christopher-holland-535312344" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:opacity-80">
              LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}