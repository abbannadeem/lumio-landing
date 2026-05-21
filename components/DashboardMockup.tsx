"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  LayoutGrid,
  BarChart3,
  Settings,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

// Heights (in %) for the fake bar chart — kept as data so it stays tidy.
const barData = [42, 58, 35, 72, 50, 88, 64, 95];
const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

const statCards = [
  { label: "Revenue", value: "$48.2k", delta: "+12.5%" },
  { label: "Active users", value: "8,941", delta: "+8.1%" },
  { label: "Conversion", value: "3.84%", delta: "+0.6%" },
];

/**
 * A faux analytics dashboard built entirely from divs + SVG — no images, so it
 * is razor sharp on any display and adds zero image payload to the page.
 * Decorative: marked aria-hidden, with a text alternative provided by the Hero.
 */
export function DashboardMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative w-full select-none rounded-2xl border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <span className="h-3 w-3 rounded-full bg-rose-300" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-300" />
        <div className="ml-3 hidden h-5 flex-1 rounded-md bg-slate-100 dark:bg-slate-800 sm:block" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-40 shrink-0 flex-col gap-1 border-r border-slate-100 p-3 dark:border-slate-800 sm:flex">
          <div className="mb-2 flex items-center gap-2 px-2 py-1">
            <span className="h-6 w-6 rounded-md bg-brand-gradient" />
            <span className="h-3 w-16 rounded bg-slate-200 dark:bg-slate-700" />
          </div>
          {[
            { icon: LayoutGrid, active: true, w: "w-20" },
            { icon: BarChart3, active: false, w: "w-16" },
            { icon: Users, active: false, w: "w-20" },
            { icon: TrendingUp, active: false, w: "w-14" },
            { icon: Settings, active: false, w: "w-16" },
          ].map(({ icon: Icon, active, w }, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 rounded-lg px-2 py-2 ${
                active
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
                  : "text-slate-400 dark:text-slate-500"
              }`}
            >
              <Icon size={16} />
              <span
                className={`h-2.5 rounded ${w} ${
                  active ? "bg-brand-200" : "bg-slate-200 dark:bg-slate-700"
                }`}
              />
            </div>
          ))}
        </aside>

        {/* Main panel */}
        <div className="flex-1 space-y-4 p-4">
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-3">
            {statCards.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-800/40"
              >
                <p className="text-[10px] font-medium text-slate-400">
                  {s.label}
                </p>
                <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-100 sm:text-base">
                  {s.value}
                </p>
                <span className="mt-1 inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <ArrowUpRight size={10} />
                  {s.delta}
                </span>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                Weekly performance
              </span>
              <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                Live
              </span>
            </div>
            <div className="flex h-28 items-end justify-between gap-2">
              {barData.map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded-md bg-brand-gradient"
                  style={{ transformOrigin: "bottom" }}
                  initial={{ scaleY: reduceMotion ? 1 : 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
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
            <div className="mt-2 flex justify-between">
              {weekdays.map((d, i) => (
                <span key={i} className="text-[9px] text-slate-300 dark:text-slate-600">
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* AI insight callout */}
          <div className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/70 p-3 dark:border-brand-500/20 dark:bg-brand-500/10">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
              <TrendingUp size={13} />
            </span>
            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold text-brand-800 dark:text-brand-300">
                AI insight
              </p>
              <div className="h-2 w-40 rounded bg-brand-200/70" />
              <div className="h-2 w-28 rounded bg-brand-200/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent card */}
      <motion.div
        className="absolute -bottom-5 -right-3 hidden rounded-xl border border-slate-100 bg-white p-3 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:block"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] font-medium text-slate-400">Forecast</p>
        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">▲ 24% growth</p>
      </motion.div>
    </div>
  );
}
