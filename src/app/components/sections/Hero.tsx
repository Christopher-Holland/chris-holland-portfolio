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
                            ? "I build modern web apps with strong UX, clean code, and a focus on shipping."
                            : "I help businesses launch modern websites and web apps that convert and scale."}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button href={site.cta.href} variant="primary">
                            {isPortfolio ? "See my work" : "Get a quote"}
                        </Button>
                        <Button href="/#projects" variant="secondary">
                            {isPortfolio ? "Featured projects" : "Case studies"}
                        </Button>
                    </div>

                    <div className="mt-8 flex gap-8 text-sm text-muted">
                        <div>
                            <div className="font-semibold text-foreground">Fast</div>
                            <div>Ship clean MVPs</div>
                        </div>
                        <div>
                            <div className="font-semibold text-foreground">Reliable</div>
                            <div>Maintainable builds</div>
                        </div>
                        <div>
                            <div className="font-semibold text-foreground">Modern</div>
                            <div>Next.js + Tailwind</div>
                        </div>
                    </div>
                </div>

                <Card className="lg:ml-auto">
                    <div className="space-y-4">
                        <div className="text-sm font-medium text-muted">
                            Quick snapshot
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-xl bg-surface p-4 transition-colors hover:bg-surface-hover">
                                <div className="text-xs text-muted">Focus</div>
                                <div className="mt-1 font-medium">
                                    {isPortfolio ? "Web apps + UX" : "Websites + funnels"}
                                </div>
                            </div>

                            <div className="rounded-xl bg-surface p-4 transition-colors hover:bg-surface-hover">
                                <div className="text-xs text-muted">Stack</div>
                                <div className="mt-1 font-medium">Next.js, TS, Tailwind</div>
                            </div>

                            <div className="rounded-xl bg-surface p-4 transition-colors hover:bg-surface-hover">
                                <div className="text-xs text-muted">Speed</div>
                                <div className="mt-1 font-medium">Launch-ready</div>
                            </div>

                            <div className="rounded-xl bg-surface p-4 transition-colors hover:bg-surface-hover">
                                <div className="text-xs text-muted">Support</div>
                                <div className="mt-1 font-medium">Iterate & improve</div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-border p-4 text-sm text-foreground-muted">
                            Replace this card with: testimonials, a project highlight, a
                            booking widget, or an email capture.
                        </div>
                    </div>
                </Card>
            </div>
        </Section>
    );
}