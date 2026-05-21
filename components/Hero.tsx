"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import { DashboardMockup } from "@/components/DashboardMockup";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-32"
      aria-labelledby="hero-heading"
    >
      {/* Soft gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200/40 via-accent-400/20 to-transparent blur-3xl dark:from-brand-500/25 dark:via-accent-500/15" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container-page grid items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <span className="eyebrow">
              <Sparkles size={13} />
              AI-powered analytics
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            id="hero-heading"
            className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Turn raw data into{" "}
            <span className="text-gradient">decisions</span> — automatically
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg lg:mx-0"
          >
            Lumio connects your business data, surfaces AI-driven insights, and
            delivers automated reports — so your team spends less time digging
            through dashboards and more time making the right call.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Start free trial
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
              <Play size={15} />
              Watch demo
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 text-xs text-slate-400 dark:text-slate-500"
          >
            No credit card required · 14-day free trial · Cancel anytime
          </motion.p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
