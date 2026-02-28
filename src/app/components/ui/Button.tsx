import React from "react";
import Link from "next/link";
import { site } from "../config/site";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: Variant;
    className?: string;
    type?: "button" | "submit" | "reset";
};

function baseClasses() {
    return "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-black/20";
}

function variantClasses(variant: Variant) {
    switch (variant) {
        case "primary":
            return site.theme.accentClass;
        case "secondary":
            return site.theme.accentOutlineClass;
        case "ghost":
        default:
            return "text-foreground hover:bg-foreground/5";
    }
}

export function Button({
    href,
    onClick,
    children,
    variant = "primary",
    className = "",
    type = "button",
}: Props) {
    const classes = `${baseClasses()} ${variantClasses(variant)} ${className}`;

    const isExternal =
        href?.startsWith("http") ||
        href?.startsWith("mailto:") ||
        href?.startsWith("tel:");

    if (href && isExternal) {
        return (
            <a
                href={href}
                className={classes}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
                {children}
            </a>
        );
    }

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}