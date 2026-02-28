import Link from "next/link";
import { site } from "../config/site";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Github, Linkedin } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="font-semibold tracking-tight">
                    {site.brand.name}
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {site.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-foreground-muted hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Social links */}
                    <Link
                        href="https://github.com/Christopher-Holland"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-foreground-muted hover:text-foreground transition-colors"
                    >
                        <Github className="h-5 w-5" />
                    </Link>

                    <Link
                        href="https://linkedin.com/in/christopher-holland-535312344"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-foreground-muted hover:text-foreground transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                    </Link>

                    <Button
                        href={site.cta.href}
                        variant="primary"
                        className="hidden md:inline-flex"
                    >
                        {site.cta.label}
                    </Button>

                    <Button
                        href={site.cta.href}
                        variant="primary"
                        className="md:hidden"
                    >
                        {site.cta.label}
                    </Button>
                </div>
            </Container>
        </header>
    );
}