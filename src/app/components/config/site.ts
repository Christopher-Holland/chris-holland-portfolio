export type SiteMode = "portfolio" | "client";

export const site = {
    mode: "portfolio" as SiteMode,

    brand: {
        name: "Chris Holland",
        tagline: "Full-Stack Software Engineer building modern web applications with React, Next.js, Node.js, and scalable backend systems.",
    },

    nav: [
        { label: "Home", href: "/" },
        { label: "Work", href: "/#projects" },
        { label: "About", href: "/#about" },
        { label: "Contact", href: "/#contact" },
    ],

    cta: {
        // Make the action explicit and business-like
        label: "Contact",
        href: "/#contact",
    },

    // Keeps the template neutral. Later you can wire this to CSS variables.
    theme: {
        accentClass: "bg-accent text-accent-foreground hover:opacity-90",
        accentOutlineClass:
            "border border-accent text-accent hover:bg-accent hover:text-accent-foreground",
    },
} as const;