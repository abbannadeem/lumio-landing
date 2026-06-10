"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Light/dark theme toggle.
 *
 * The initial theme is applied by an inline script in the layout <head> before
 * paint, so there is no flash. This button just flips the `dark` class on
 * <html> and persists the choice. Both icons are always rendered and shown via
 * CSS (`dark:` variants), which means no React state drives the markup → no
 * hydration mismatch.
 */
export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* localStorage may be unavailable (private mode) — ignore. */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-800 transition-colors hover:bg-brand-800/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 dark:text-cream-100 dark:hover:bg-cream-100/10 dark:focus-visible:ring-offset-brand-900"
    >
      <Sun size={19} className="hidden dark:block" aria-hidden="true" />
      <Moon size={19} className="block dark:hidden" aria-hidden="true" />
    </button>
  );
}
