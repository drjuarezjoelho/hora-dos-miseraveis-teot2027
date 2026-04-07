/* Layout — Bunker Cirúrgico: Nav fixa tipo painel de comando, footer minimalista */
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Skull } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "INÍCIO" },
  { href: "/metodologia", label: "METODOLOGIA" },
  { href: "/cronograma", label: "CRONOGRAMA" },
  { href: "/modulos", label: "MÓDULOS" },
  { href: "/ciclo1", label: "CICLO 1" },
  { href: "/ciclo2", label: "CICLO 2" },
  { href: "/ciclo3", label: "CICLO 3" },
  { href: "/ciclo4", label: "CICLO 4" },
  { href: "/simulados", label: "SIMULADOS" },
  { href: "/sobre", label: "SOBRE" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top red accent line */}
      <div className="h-[3px] bg-[oklch(0.55_0.22_25)] w-full" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[oklch(0.07_0.005_0)]/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Skull className="w-7 h-7 text-[oklch(0.55_0.22_25)]" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg tracking-widest text-[oklch(0.55_0.22_25)] font-bold">
                HORA DOS MISERÁVEIS
              </span>
              <span className="font-accent text-[10px] tracking-[0.3em] text-muted-foreground">
                TEOT 2027
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-accent text-sm tracking-wider px-3 py-2 transition-all duration-150 no-underline ${
                  location === link.href
                    ? "text-[oklch(0.55_0.22_25)] border-b-2 border-[oklch(0.55_0.22_25)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-accent text-sm tracking-wider px-3 py-3 no-underline border-l-2 ${
                      location === link.href
                        ? "text-[oklch(0.55_0.22_25)] border-[oklch(0.55_0.22_25)] bg-[oklch(0.55_0.22_25)]/5"
                        : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-[oklch(0.05_0.005_0)]">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Skull className="w-5 h-5 text-[oklch(0.55_0.22_25)]" />
                <span className="font-display text-sm tracking-widest text-[oklch(0.55_0.22_25)]">
                  HORA DOS MISERÁVEIS
                </span>
              </div>
              <p className="text-xs text-muted-foreground max-w-md">
                Programa de treinamento de elite para residentes em ortopedia e traumatologia.
                Aprovação no TEOT 2027 com máxima exigência.
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="font-accent text-xs tracking-wider text-muted-foreground">
                TEOT 2027 — FORMAÇÃO DE ELITE
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/50">
                v5.0 — Ciclos 1-4 Completos
              </span>
            </div>
          </div>
        </div>
        <div className="h-[3px] bg-[oklch(0.55_0.22_25)]" />
      </footer>
    </div>
  );
}
