export type SiteMode = "portfolio" | "client";

export const site = {
    mode: "portfolio" as SiteMode,

    brand: {
        name: "Chris Holland",
        tagline: "Building clean, fast web experiences.",
    },

    nav: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/#projects" },
        { label: "About", href: "/#about" },
        { label: "Contact", href: "/#contact" },
    ],

    cta: {
        label: "Let’s talk",
        href: "/#contact",
    },

    // Keeps the template neutral. Later you can wire this to CSS variables.
    theme: {
        accentClass:
            "bg-accent text-accent-foreground hover:opacity-90",
        accentOutlineClass:
            "border border-accent text-accent hover:bg-accent hover:text-accent-foreground",
    },
} as const;