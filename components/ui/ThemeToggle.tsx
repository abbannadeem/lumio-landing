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
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      <Sun size={19} className="hidden dark:block" aria-hidden="true" />
      <Moon size={19} className="block dark:hidden" aria-hidden="true" />
    </button>
  );
}
