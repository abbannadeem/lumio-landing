"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  LayoutGrid,
  BarChart3,
  Settings,
  Users,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

// Heights (in %) for the fake bar chart — kept as data so it stays tidy.
const barData = [42, 58, 35, 72, 50, 88, 64, 95];
const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

type StatCard = {
  label: string;
  value: string;
  currency?: string;
  suffix?: string;
  delta: string;
  caption: string;
};

const statCards: StatCard[] = [
  {
    label: "Revenue",
    value: "48.2",
    currency: "$",
    suffix: "k",
    delta: "+12.5%",
    caption: "vs. last week",
  },
  {
    label: "Active users",
    value: "8,941",
    delta: "+8.1%",
    caption: "7-day rolling",
  },
  {
    label: "Conversion",
    value: "3.84",
    suffix: "%",
    delta: "+0.6%",
    caption: "trial → paid",
  },
];

/**
 * A faux analytics dashboard built entirely from divs + SVG — no images, so it
 * is razor sharp on any display and adds zero image payload to the page.
 * Decorative: marked aria-hidden, with a text alternative provided by the Hero.
 *
 * Adds cursor-aware tilt (disabled on touch and reduced-motion) and uses the
 * new forest + cream + ochre palette via brand-* / cream-* / accent-* tokens.
 */
export function DashboardMockup() {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });

  useEffect(() => {
    if (reduceMotion) return;
    const node = cardRef.current;
    if (!node) return;

    // Only enable tilt for fine pointers (mouse), never touch.
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const handleMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1
      // Map 0..1 → -4..+4 deg. Invert Y so cursor up tilts top toward viewer.
      const ry = (x - 0.5) * 8;
      const rx = -(y - 0.5) * 8;
      setTilt({ rx, ry });
    };
    const handleLeave = () => setTilt({ rx: 0, ry: 0 });

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", handleLeave);
    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", handleLeave);
    };
  }, [reduceMotion]);

  return (
    <div
      className="relative w-full"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={cardRef}
        aria-hidden="true"
        className="relative w-full select-none rounded-2xl border border-brand-800/10 bg-cream-50 shadow-card dark:border-brand-200/10 dark:bg-brand-800"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-brand-800/10 px-4 py-3 dark:border-brand-200/10">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
          <div className="ml-3 hidden h-5 flex-1 rounded-md bg-cream-100 dark:bg-brand-900/40 sm:block" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-40 shrink-0 flex-col gap-1 border-r border-brand-800/10 p-3 dark:border-brand-200/10 sm:flex">
            <div className="mb-2 flex items-center gap-2 px-2 py-1">
              <span className="h-6 w-6 rounded-md bg-accent-gradient" />
              <span className="font-display text-[13px] font-medium text-brand-800 dark:text-cream-100">
                Lumio
              </span>
            </div>
            {[
              { icon: LayoutGrid, active: true, w: "w-20", label: "Overview" },
              { icon: BarChart3, active: false, w: "w-16", label: "Reports" },
              { icon: Users, active: false, w: "w-20", label: "Audience" },
              { icon: TrendingUp, active: false, w: "w-14", label: "Growth" },
              { icon: Settings, active: false, w: "w-16", label: "Settings" },
            ].map(({ icon: Icon, active, w }, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-lg px-2 py-2 ${
                  active
                    ? "bg-brand-800 text-cream-50 dark:bg-cream-100 dark:text-brand-800"
                    : "text-brand-800/50 dark:text-cream-100/50"
                }`}
              >
                <Icon size={14} />
                <span
                  className={`h-2 rounded ${w} ${
                    active
                      ? "bg-accent-300/80 dark:bg-brand-800/40"
                      : "bg-brand-800/15 dark:bg-cream-100/15"
                  }`}
                />
              </div>
            ))}
          </aside>

          {/* Main panel */}
          <div className="flex-1 space-y-4 p-4">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {statCards.map((s, idx) => (
                <div
                  key={s.label}
                  className="relative flex flex-col rounded-xl border border-brand-800/10 bg-white p-3 dark:border-brand-200/10 dark:bg-brand-900/50"
                >
                  {idx > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute -left-1.5 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-brand-800/10 dark:bg-cream-100/10 sm:block"
                    />
                  )}
                  <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-brand-800/60 dark:text-cream-100/60">
                    {s.label}
                  </p>
                  <p className="mt-1.5 flex items-baseline font-display text-base font-medium tabular-nums text-brand-800 dark:text-cream-100 sm:text-lg">
                    {s.currency && (
                      <span className="mr-0.5 text-[11px] font-normal text-brand-800/50 dark:text-cream-100/50 sm:text-xs">
                        {s.currency}
                      </span>
                    )}
                    {s.value}
                    {s.suffix && (
                      <span className="ml-0.5 text-[11px] font-normal text-brand-800/50 dark:text-cream-100/50 sm:text-xs">
                        {s.suffix}
                      </span>
                    )}
                  </p>
                  <div className="mt-1.5 h-px w-full bg-brand-800/10 dark:bg-cream-100/10" />
                  <div className="mt-1.5 flex items-center justify-between gap-1">
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-brand-700 dark:text-accent-300">
                      <ArrowUpRight size={10} strokeWidth={2.5} />
                      {s.delta}
                    </span>
                    <span className="text-[9px] font-medium text-brand-800/40 dark:text-cream-100/40">
                      {s.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="rounded-xl border border-brand-800/10 bg-white p-4 dark:border-brand-200/10 dark:bg-brand-900/50">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <span className="font-display text-xs font-medium text-brand-800 dark:text-cream-100 sm:text-sm">
                    Weekly performance
                  </span>
                  <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-brand-800/50 dark:text-cream-100/50">
                    Jun 3 — Jun 9
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-accent-200 bg-accent-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-700 dark:border-accent-400/30 dark:bg-accent-400/10 dark:text-accent-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                  Live
                </span>
              </div>
              <div className="flex h-28 items-end justify-between gap-2">
                {barData.map((h, i) => (
                  <motion.div
                    key={i}
                    className="relative w-full rounded-t-md bg-accent-gradient"
                    style={{ transformOrigin: "bottom" }}
                    initial={{ scaleY: reduceMotion ? 1 : 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: reduceMotion ? 0 : i * 0.06,
                      ease: "easeOut",
                    }}
                  >
                    <div style={{ height: `${(h / 100) * 112}px` }} />
                  </motion.div>
                ))}
              </div>
              <div className="mt-2 flex justify-between border-t border-brand-800/10 pt-1.5 dark:border-cream-100/10">
                {weekdays.map((d, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-medium text-brand-800/40 dark:text-cream-100/40"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* AI insight callout */}
            <div className="flex items-start gap-3 rounded-xl border border-brand-800/10 bg-brand-800 p-3 dark:border-brand-200/10 dark:bg-brand-900">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent-gradient text-brand-900">
                <Sparkles size={13} strokeWidth={2.25} />
              </span>
              <div className="space-y-1.5">
                <p className="font-display text-[11px] font-medium text-accent-300">
                  This week&apos;s insight
                </p>
                <p className="text-[11px] leading-snug text-cream-100">
                  Checkout drop-off fell <span className="font-semibold text-accent-200">14%</span> after the Tuesday pricing tweak.
                </p>
                <p className="text-[10px] text-cream-100/60">
                  Recommend rolling the change to the EU plan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating accent card */}
        <motion.div
          className="absolute -bottom-5 -right-3 hidden rounded-xl border border-brand-800/10 bg-cream-50 p-3 shadow-card dark:border-brand-200/10 dark:bg-brand-800 sm:block"
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-brand-800/60 dark:text-cream-100/60">
            Forecast
          </p>
          <p className="mt-0.5 font-display text-sm font-medium tabular-nums text-brand-800 dark:text-cream-100">
            <span className="text-accent-500 dark:text-accent-300">▲</span> 24%
            <span className="ml-1 text-[10px] font-normal text-brand-800/50 dark:text-cream-100/50">
              growth
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
