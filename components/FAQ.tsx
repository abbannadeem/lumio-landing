"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type QA = { question: string; answer: string };

const faqs: QA[] = [
  {
    question: "How long does it take to set up Lumio?",
    answer:
      "Most teams are up and running in under an hour. Connect a data source, pick a template dashboard, and Lumio starts generating insights immediately — no engineering or data team required.",
  },
  {
    question: "Which data sources can I connect?",
    answer:
      "Lumio integrates with 200+ tools out of the box, including PostgreSQL, MySQL, BigQuery, Snowflake, Stripe, Google Analytics, HubSpot, and Salesforce. You can also upload spreadsheets or connect a custom source via our API.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest, we offer SSO and granular access controls, and our infrastructure is built to SOC 2 standards. Enterprise plans include a custom DPA and dedicated security review.",
  },
  {
    question: "Do I need a credit card to start the free trial?",
    answer:
      "No. The 14-day free trial requires no credit card. You get full access to Pro features, and you'll only be asked for payment details if you choose to continue after the trial.",
  },
  {
    question: "Can I change or cancel my plan later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel at any time directly from your account settings. Changes take effect immediately and we'll prorate any difference.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
  id,
  index,
}: {
  faq: QA;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`group border-t border-brand-800/10 transition-colors duration-300 dark:border-cream-100/10 ${
        isOpen ? "bg-cream-50/60 dark:bg-brand-800/30" : ""
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          onKeyDown={(e) => {
            // WAI-ARIA accordion: arrow-key navigation between headers.
            if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "Home" && e.key !== "End") return;
            const buttons = Array.from(
              (e.currentTarget.closest("[role=list]") as HTMLElement | null)?.querySelectorAll<HTMLButtonElement>(
                "button[id$='-button']",
              ) ?? [],
            );
            if (buttons.length === 0) return;
            const idx = buttons.indexOf(e.currentTarget);
            let next = idx;
            if (e.key === "ArrowDown") next = (idx + 1) % buttons.length;
            else if (e.key === "ArrowUp") next = (idx - 1 + buttons.length) % buttons.length;
            else if (e.key === "Home") next = 0;
            else if (e.key === "End") next = buttons.length - 1;
            if (next !== idx) {
              e.preventDefault();
              buttons[next].focus();
            }
          }}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 dark:focus-visible:ring-offset-brand-900 sm:py-7"
        >
          <span className="flex items-start gap-5">
            <span
              aria-hidden="true"
              className={`mt-1 font-display text-sm font-medium tabular-nums tracking-wider transition-colors duration-300 ${
                isOpen
                  ? "text-accent-500 dark:text-accent-400"
                  : "text-brand-500/70 dark:text-cream-100/40"
              }`}
            >
              {num}
            </span>
            <span
              className={`font-display text-lg font-medium tracking-tight transition-colors duration-300 sm:text-xl ${
                isOpen
                  ? "text-brand-900 dark:text-cream-50"
                  : "text-brand-800 group-hover:text-brand-900 dark:text-cream-100 dark:group-hover:text-cream-50"
              }`}
            >
              {faq.question}
            </span>
          </span>
          <span
            aria-hidden="true"
            className={`relative mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              isOpen
                ? "rotate-45 border-accent-400 bg-accent-400 text-brand-900"
                : "border-brand-800/15 bg-cream-50 text-brand-800 group-hover:border-accent-400 group-hover:text-accent-500 dark:border-cream-100/15 dark:bg-brand-800/40 dark:text-cream-100 dark:group-hover:border-accent-400 dark:group-hover:text-accent-300"
            }`}
          >
            <Plus size={18} strokeWidth={2} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="flex gap-5 pb-7 pl-0 pr-4 sm:pl-12 sm:pr-12">
              <p className="max-w-2xl text-base leading-relaxed text-brand-700/90 dark:text-cream-100/75">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3rem)] font-medium tracking-tighter text-brand-900 dark:text-cream-50">
              Questions, <em className="italic text-accent-500 dark:text-accent-400">answered</em>.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brand-700/80 dark:text-cream-100/70 sm:text-lg">
              Everything you need to know about Lumio. Still curious?{" "}
              <a
                href="#cta"
                className="font-medium text-brand-900 underline decoration-accent-400 decoration-2 underline-offset-4 transition-colors hover:text-accent-600 dark:text-cream-50 dark:hover:text-accent-300"
              >
                Get in touch
              </a>
              .
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <div
              role="list"
              className="border-b border-brand-800/10 dark:border-cream-100/10"
            >
              {faqs.map((faq, i) => (
                <div role="listitem" key={faq.question}>
                  <FaqItem
                    id={`faq-${i}`}
                    faq={faq}
                    index={i}
                    isOpen={openIndex === i}
                    onToggle={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
