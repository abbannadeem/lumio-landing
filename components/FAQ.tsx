"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
}: {
  faq: QA;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-4 rounded-lg py-5 text-left"
        >
          <span className="font-display text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
            {faq.question}
          </span>
          <ChevronDown
            size={20}
            aria-hidden="true"
            className={`shrink-0 text-brand-600 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 font-display text-[clamp(1.5rem,7vw,1.875rem)] font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Everything you need to know about Lumio. Can&apos;t find an answer?{" "}
            <a
              href="#cta"
              className="font-semibold text-brand-700 underline-offset-4 hover:underline dark:text-brand-300"
            >
              Get in touch
            </a>
            .
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div>
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                id={`faq-${i}`}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
