import { Hero } from "./components/sections/Hero";
import { Section } from "./components/ui/Section";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="projects">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-foreground-muted">
          Placeholder section. Next: add a ProjectsGrid section.
        </p>
      </Section>

      <Section id="about">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-2 text-foreground-muted">
          Placeholder section. Add a short bio + skills list later.
        </p>
      </Section>

      <Section id="contact">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-foreground-muted">
          Placeholder section. Add email, socials, or a form later.
        </p>
      </Section>
    </>
  );
}