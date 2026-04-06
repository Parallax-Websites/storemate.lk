"use client";

import { Section } from "../../ui/section";
import { X, Star } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I was managing 5 different Excel sheets for different campaigns. Now everything's in StoreMate. I can actually see which orders need follow-ups.",
    name: "Nimesha",
    role: "Cosmetics Seller",
    initials: "N",
  },
  {
    quote:
      "Duplicate detection එක නිසා මං මාසෙකට courier charges 15,000ක් විතර save කරනවා. Fake orders බොහෝමයක් catch වෙනවා upload කරད්දීම.",
    name: "Ravindu",
    role: "Electronics Reseller",
    initials: "R",
  },
  {
    quote:
      "We truly appreciate the service support of Amalka who handled our technical matters. Her commitment, expertise, and responsiveness made the entire process smooth.",
    name: "Diluk Fernando",
    role: "Business Owner",
    initials: "D",
  },
  {
    quote:
      "Duplicate Orders නිසා මාසෙකට 200+ Returns. දැන් Auto Detection එක්ක Returns 20ට වැටුණා!",
    name: "Chamari S.",
    role: "Beauty Products",
    initials: "C",
  },
  {
    quote:
      "StoreMate OMS system එක online business කරන්න ගොඩක් පහසු system එකක්. Products manage කරන්න, orders track කරන්න, catalog maintain කරන්න ඉතාමත් easy.",
    name: "Nishanta Kumra",
    role: "Online Seller",
    initials: "N",
  },
  {
    quote:
      "මං දිනකට orders 200-300 ක් Excel වලින් download කරනවා. StoreMate එකට upload කරලා courier sync කරන එක විනාඩි 5කින් වෙනවා. පැය ගානක් save වෙනවා.",
    name: "Kasun",
    role: "Fashion Store Owner",
    initials: "K",
  },
];

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(
    testimonials.map((_, i) => i)
  );

  const handleRemove = (index: number) => {
    setVisibleTestimonials((prev) => prev.filter((i) => i !== index));
  };

  const filteredTestimonials = testimonials.filter((_, i) =>
    visibleTestimonials.includes(i)
  );

  return (
    <Section className={cn("px-6 sm:px-10")}>
      <div className="max-w-container mx-auto space-y-8 px-2 sm:px-4">
        <div className="max-w-4xl">
          <p className="text-primary text-sm font-semibold tracking-[0.24em] uppercase">
            Success Stories
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Public Cheers for Us!
          </h2>
          <p className="text-muted-foreground mt-4 text-md font-medium sm:text-xl">
            Find out how our users are spending the word
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
            >
              <button
                onClick={() =>
                  handleRemove(testimonials.indexOf(testimonial))
                }
                className="absolute top-4 right-4 p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              </button>

              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm">
                  {testimonial.initials}
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-sm leading-6 font-medium text-zinc-700 dark:text-zinc-300 mb-4">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="font-semibold text-sm text-zinc-950 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
