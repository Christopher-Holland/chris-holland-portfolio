import React from "react";
import { Container } from "./Container";

type Props = {
    id?: string;
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
};

export function Section({
    id,
    children,
    className = "",
    containerClassName = "",
}: Props) {
    return (
        <section id={id} className={`py-16 sm:py-20 ${className}`}>
            <Container className={containerClassName}>{children}</Container>
        </section>
    );
}