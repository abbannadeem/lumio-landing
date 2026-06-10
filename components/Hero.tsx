"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play, Sparkles, ArrowRight } from "lucide-react";

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
      <div className="container-page pb-16 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy — left column on desktop, second on mobile (image first) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <motion.div variants={item} className="flex">
              <span className="eyebrow">
                <Sparkles size={13} aria-hidden="true" />
                The operator&rsquo;s analytics layer
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              id="hero-heading"
              className="mt-6 break-words font-display text-[clamp(2rem,8vw,2.5rem)] font-medium leading-[1.05] tracking-tighter text-brand-800 dark:text-cream-50 sm:text-5xl lg:text-[clamp(3rem,5.5vw,4.5rem)]"
            >
              Stop reporting on the business. Start{" "}
              <em className="font-display italic text-accent-500 dark:text-accent-300">
                running
              </em>{" "}
              it.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-brand-700/90 dark:text-cream-200/80 sm:text-lg"
            >
              Lumio is the analytics layer modern operators trust to surface the
              one decision that matters this week &mdash; pulled from every tool
              you already use, explained in a sentence, ready before your Monday
              standup.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <a href="#cta" className="btn-primary w-full sm:w-auto">
                See your first insight in 4 minutes
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary w-full sm:w-auto"
              >
                <Play size={15} aria-hidden="true" />
                Watch a 90-second tour
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 text-xs text-brand-600/70 dark:text-cream-300/60"
            >
              No credit card required &middot; 14-day free trial &middot; Cancel
              anytime
            </motion.p>
          </motion.div>

          {/* Editorial image — right column on desktop, first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-sm bg-accent-400 sm:translate-x-3 sm:translate-y-3 lg:translate-x-[12px] lg:translate-y-[12px]"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-brand-800/10 bg-cream-100 shadow-soft dark:border-cream-100/10 dark:bg-brand-800">
                <img
                  src="https://images.unsplash.com/featured/?dataviz,abstract,green&auto=format&fit=crop&w=1200&q=80"
                  srcSet="https://source.unsplash.com/featured/1400x1600?dataviz,abstract,green&auto=format&fit=crop&w=1200&q=80"
                  alt="Abstract green data visualization representing Lumio's analytics layer"
                  loading="eager"
                  decoding="async"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-brand-800/15 mix-blend-multiply"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
