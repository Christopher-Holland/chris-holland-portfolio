import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Chris Holland | Software Engineer",
  description: "Software engineer building fast, reliable web apps and dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" style={{ colorScheme: "light dark" }}>
      <body className="bg-background text-foreground font-sans">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}