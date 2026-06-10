"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

/**
 * Editorial sticky navbar.
 *
 * - At rest: transparent, type sits over the hero canvas.
 * - Scrolled: cream/forest frosted bar with a hairline forest border.
 * - Mobile (≤360px): hamburger + theme toggle both fit; menu slides under
 *   the bar as a forest-tinted sheet with cream-on-forest links.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Hairline + frost engage once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock body scroll, handle Escape, focus first item on open,
  // return focus to toggle on close, and trap Tab within the menu.
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    // Move focus into the menu on the next tick so the AnimatePresence
    // child is mounted and queryable.
    const focusTimer = window.setTimeout(() => {
      const first = menuRef.current?.querySelector<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    }, 0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusables = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled"));
      // Include the toggle button so Shift+Tab from the first item returns to it.
      if (toggleButtonRef.current) focusables.unshift(toggleButtonRef.current);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      // Return focus to the toggle button (or whatever was focused before).
      const target = toggleButtonRef.current ?? previouslyFocused;
      target?.focus?.();
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-800/10 bg-cream-50/85 shadow-soft backdrop-blur-md supports-[backdrop-filter]:bg-cream-50/70 dark:border-cream-100/10 dark:bg-brand-900/85 dark:supports-[backdrop-filter]:bg-brand-900/70"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between gap-2"
      >
        <a
          href="#top"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 dark:focus-visible:ring-offset-brand-900"
          aria-label="Lumio — back to top"
        >
          <Logo />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded text-sm font-medium text-brand-700/90 transition-colors hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 dark:text-cream-100/80 dark:hover:text-cream-50 dark:focus-visible:ring-offset-brand-900"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent-400 transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href="#cta" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile controls — both fit at 360px (40 + 4 + 40 = 84px) */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            ref={toggleButtonRef}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-800 transition-colors hover:bg-brand-800/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 dark:text-cream-100 dark:hover:bg-cream-100/10 dark:focus-visible:ring-offset-brand-900"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence initial={false} mode="wait">
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <X size={22} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <Menu size={22} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden border-b border-brand-800/10 bg-cream-50/95 backdrop-blur-md dark:border-cream-100/10 dark:bg-brand-900/95 md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.04, delayChildren: 0.05 },
                },
                hidden: {},
              }}
              className="container-page flex flex-col gap-1 py-4"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: -6 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-lg border border-transparent px-3 py-3 font-display text-lg font-medium tracking-tight text-brand-800 transition-colors hover:border-brand-800/10 hover:bg-cream-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 dark:text-cream-100 dark:hover:border-cream-100/10 dark:hover:bg-cream-100/5 dark:focus-visible:ring-offset-brand-900"
                  >
                    <span>{link.label}</span>
                    <span
                      aria-hidden="true"
                      className="text-accent-400 transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -6 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="pt-3"
              >
                <a
                  href="#cta"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Get Started
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
