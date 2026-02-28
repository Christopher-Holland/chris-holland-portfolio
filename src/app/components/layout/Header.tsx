import Link from "next/link";
import { site } from "../config/site";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

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

                <div className="flex items-center gap-2">
                    <Button href={site.cta.href} variant="primary" className="hidden md:inline-flex">
                        {site.cta.label}
                    </Button>
                    <Button href={site.cta.href} variant="primary" className="md:hidden">
                        {site.cta.label}
                    </Button>
                </div>
            </Container>
        </header>
    );
}