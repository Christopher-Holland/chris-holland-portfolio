import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { site } from "../config/site";

export function Hero() {
    const isPortfolio = site.mode === "portfolio";

    return (
        <Section className="py-20 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                    <p className="text-sm font-medium text-muted">
                        {isPortfolio ? "Portfolio" : "Services"}
                    </p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                        {site.brand.tagline}
                    </h1>

                    <p className="mt-4 max-w-prose text-base text-foreground-muted">
                        {isPortfolio
                            ? "I design and build production-ready web applications with clean UX, strong engineering, and a focus on measurable outcomes."
                            : "I help businesses launch modern websites and web apps that convert, scale, and stay maintainable."}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button href="/#contact" variant="primary">
                            Contact
                        </Button>
                        <Button href="/#projects" variant="secondary">
                            View work
                        </Button>
                    </div>

                    <div className="mt-8 flex gap-8 text-sm text-muted">
                        <div>
                            <div className="font-semibold text-foreground">Fast delivery</div>
                            <div>Ship MVPs & iterations</div>
                        </div>
                        <div>
                            <div className="font-semibold text-foreground">Built to last</div>
                            <div>Clean, maintainable code</div>
                        </div>
                        <div>
                            <div className="font-semibold text-foreground">Modern stack</div>
                            <div>Next.js + TypeScript</div>
                        </div>
                    </div>
                </div>

                <Card className="lg:ml-auto">
                    <div className="space-y-4">
                        <div className="text-sm font-medium text-muted">Engagement</div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-xl bg-surface p-4 transition-colors hover:bg-surface-hover">
                                <div className="text-xs text-muted">Typical projects</div>
                                <div className="mt-1 font-medium">
                                    {isPortfolio ? "Dashboards & web apps" : "Websites & funnels"}
                                </div>
                            </div>

                            <div className="rounded-xl bg-surface p-4 transition-colors hover:bg-surface-hover">
                                <div className="text-xs text-muted">Stack</div>
                                <div className="mt-1 font-medium">Next.js, TS, Tailwind</div>
                            </div>

                            <div className="rounded-xl bg-surface p-4 transition-colors hover:bg-surface-hover">
                                <div className="text-xs text-muted">Workflow</div>
                                <div className="mt-1 font-medium">Scope → build → launch</div>
                            </div>

                            <div className="rounded-xl bg-surface p-4 transition-colors hover:bg-surface-hover">
                                <div className="text-xs text-muted">Support</div>
                                <div className="mt-1 font-medium">Ongoing improvements</div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-border p-4 text-sm text-foreground-muted">
                            <div className="font-medium text-foreground">Availability</div>
                            <div className="mt-1">
                                Open to new projects and recurring support. Reach out with a brief
                                overview, timeline, and any links or references.
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Section>
    );
}