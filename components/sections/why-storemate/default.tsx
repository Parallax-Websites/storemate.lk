"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface WhyStoremateProps {
  className?: string;
}

const sampleImage =
  "https://cimacleaners.com.au/wp-content/uploads/2025/09/Dashboards-2048x1152-1.webp";

const differentiators = [
  {
    title: "Focused on Cash on Delivery Marketing in Sri Lanka",
    description:
      "Built for COD-heavy online businesses that need better conversion, follow-up, and delivery performance.",
    image: sampleImage,
  },
  {
    title: "Sinhala / English Support",
    description:
      "Operate in both Sinhala and English so your team and customers can work in the language they prefer.",
    image: sampleImage,
  },
  {
    title: "Affordable Pricing",
    description:
      "Simple and budget-friendly plans designed for startups, growing stores, and established online brands.",
    image: sampleImage,
  },
  {
    title: "Web & Mobile Support",
    description:
      "Manage orders, confirmations, and courier syncing from desktop or mobile with the same workflow.",
    image: sampleImage,
  },
  {
    title: "Local Courier Integration",
    description:
      "Connect with Sri Lankan courier partners and streamline waybills, dispatching, and tracking updates.",
    image: sampleImage,
  },
  {
    title: "Backed by Curfox™",
    description:
      "Proven at scale, helping handle over 1 million cash on delivery orders every month.",
    image: sampleImage,
  },
];

export default function WhyStoremate({ className }: WhyStoremateProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = differentiators[activeIndex];

  return (
    <Section className={cn("px-6 sm:px-10", className)}>
      <div className="max-w-container mx-auto space-y-8 px-2 sm:px-4">
        <div className="max-w-4xl">
          <p className="text-primary text-sm font-semibold tracking-[0.24em] uppercase">
            Why Storemate for Sri Lanka
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            6 differentiators built for online businesses in Sri Lanka
          </h2>
          <p className="text-muted-foreground mt-4 text-md font-medium sm:text-xl">
            COD-first, local courier integrations, Sinhala support, social-commerce readiness, affordable pricing, and any-device access.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div>
            {differentiators.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={
                    "flex w-full items-center gap-3 border-b border-zinc-200 px-0 py-4 text-left transition-colors last:border-b-0 dark:border-zinc-700 " +
                    (isActive
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white")
                  }
                >
                  <span className="w-8 shrink-0 text-sm font-semibold text-zinc-400 sm:text-base dark:text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold sm:text-base">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative px-6 py-8 text-zinc-950 dark:text-white sm:px-8 sm:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_45%)]" />

            <div key={activeIndex} className="relative max-w-2xl animate-in fade-in slide-in-from-bottom-3 duration-[1500ms]">
              <p className="text-sm font-semibold tracking-[0.24em] uppercase text-zinc-500 dark:text-zinc-400">
                Our Story
              </p>
              <h3 className="mt-4 text-2xl leading-tight font-semibold text-zinc-950 dark:text-white sm:text-4xl sm:leading-tight">
                {active.title}
              </h3>
              <p className="mt-5 text-sm font-medium leading-7 text-zinc-600 dark:text-zinc-400 sm:text-base">
                {active.description}
              </p>

              <div className="mt-6">
                <div className="relative aspect-[16/9] w-full max-w-[340px] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover object-left"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
