"use client";

import { useEffect, useState } from "react";
import { Hero } from "./components/sections/Hero";
import { Section } from "./components/ui/Section";
import { Card } from "./components/ui/Card";
import { Button } from "./components/ui/Button";

type ProjectGalleryProps = {
  images: string[];
  altPrefix: string;
  onImageClick: (src: string, alt: string) => void;
};

function ProjectGallery({
  images,
  altPrefix,
  onImageClick,
}: ProjectGalleryProps) {
  return (
    <div className="mb-5 min-h-0">
      <div className="relative">
        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
          {images.map((src, index) => {
            const alt = `${altPrefix} ${index + 1}`;

            return (
              <img
                key={`${altPrefix}-${index}`}
                src={src}
                alt={alt}
                onClick={() => onImageClick(src, alt)}
                className="h-48 w-auto shrink-0 snap-start rounded-xl border border-border object-cover transition-transform hover:scale-[1.01] cursor-zoom-in"
              />
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-card to-transparent" />
      </div>

      <p className="mt-2 text-xs text-muted">Scroll to view more screenshots</p>
    </div>
  );
}

type ActiveImage = {
  src: string;
  alt: string;
} | null;

export default function HomePage() {
  const [activeImage, setActiveImage] = useState<ActiveImage>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    if (activeImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

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

        <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {/* Project 1 */}
          <Card>
            <ProjectGallery
              images={[
                "/DeckHaven_Screenshots/dashboard.png",
                "/DeckHaven_Screenshots/collection_page.png",
                "/DeckHaven_Screenshots/deckbuilder.png",
                "/DeckHaven_Screenshots/binder_view.png",
                "/DeckHaven_Screenshots/sets-page.png",
                "/DeckHaven_Screenshots/sets-filters.png",
                "/DeckHaven_Screenshots/collection-drawer.png",
              ]}
              altPrefix="DeckHaven screenshot"
              onImageClick={(src, alt) => setActiveImage({ src, alt })}
            />

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
            <ProjectGallery
              images={[
                "/ClientOps_Screenshots/dashboard.png",
                "/ClientOps_Screenshots/clients.png",
                "/ClientOps_Screenshots/projects.png",
                "/ClientOps_Screenshots/add_new_client.png",
                "/ClientOps_Screenshots/add_new_project.png",
                "/ClientOps_Screenshots/billing.png",
                "/ClientOps_Screenshots/revenue.png",
                "/ClientOps_Screenshots/revenue_2.png",
              ]}
              altPrefix="ClientOps screenshot"
              onImageClick={(src, alt) => setActiveImage({ src, alt })}
            />

            <h3 className="text-lg font-semibold">ClientOps</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              A lightweight freelance operations dashboard for managing clients,
              projects, billing, and revenue in one clean workspace.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
              <li>• Client relationship tracking with status, notes, and next actions</li>
              <li>• Project and billing workflows with revenue visibility</li>
              <li>• Built as a practical internal tool with a clean SaaS-style interface</li>
            </ul>

            <p className="mt-4 text-xs text-muted">
              Next.js • TypeScript • Tailwind • Prisma • PostgreSQL
            </p>

            <div className="mt-4 flex gap-3">
              <Button
                href="https://github.com/Christopher-Holland/ClientOps.git"
                variant="secondary"
              >
                Repo
              </Button>
              <Button href="https://client-ops-ch.vercel.app/" variant="secondary">
                Live
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
        <p className="mt-1 text-sm text-muted">
          Based in the U.S. (Eastern Time Zone)
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
            <a
              href="https://linkedin.com/in/christopher-holland-535312344"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:opacity-80"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project screenshot"
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -right-2 -top-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-foreground shadow-lg hover:opacity-90"
              aria-label="Close image preview"
            >
              ✕
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-xl border border-border bg-card object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}