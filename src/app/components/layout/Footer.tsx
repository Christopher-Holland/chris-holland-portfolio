import { Container } from "../ui/Container";
import { site } from "../config/site";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <Container className="flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                    © {year} {site.brand.name}. All rights reserved.
                </p>
                <p className="text-sm text-muted">{site.brand.tagline}</p>
            </Container>
        </footer>
    );
}