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
            <h3 className="text-lg font-semibold">DeckHaven</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              A card collection and deck-building platform designed for trading
              card game players. Built to manage collections, explore cards, and
              organize decks with a clean, fast UI.
            </p>

            <p className="mt-3 text-xs text-muted">
              Next.js • TypeScript • Prisma • PostgreSQL • Tailwind
            </p>

            <div className="mt-4 flex gap-3">
              <Button href="#" variant="secondary">
                Repo
              </Button>
              <Button href="#" variant="secondary">
                Live
              </Button>
            </div>
          </Card>

          {/* Project 2 */}
          <Card>
            <h3 className="text-lg font-semibold">My Ledger</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              A personal finance and budgeting application built to track
              accounts, transactions, and spending categories with clarity and
              flexibility.
            </p>

            <p className="mt-3 text-xs text-muted">
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
            <h3 className="text-lg font-semibold">
              Next.js Portfolio Template
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              A reusable, professional portfolio and marketing template built
              with modern Next.js patterns. Designed for speed, clarity, and
              easy customization.
            </p>

            <p className="mt-3 text-xs text-muted">
              Next.js • TypeScript • Tailwind
            </p>

            <div className="mt-4 flex gap-3">
              <Button href="#" variant="secondary">
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
          applications. I enjoy working on dashboards, internal tools, and
          product-focused web apps that balance usability with solid
          engineering.
        </p>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 max-w-prose text-foreground-muted">
          Interested in working together or need help with a web project? Reach
          out and include a brief overview of your goals, timeline, and any
          relevant links.
        </p>

        <div className="mt-4">
          <Button href="mailto:youremail@example.com" variant="primary">
            Email me
          </Button>
        </div>
      </Section>
    </>
  );
}