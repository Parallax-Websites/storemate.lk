import { Smartphone } from "lucide-react";

import { Section } from "../../ui/section";

interface AppPromoProps {
  className?: string;
}

export default function AppPromo({ className }: AppPromoProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto rounded-[2rem] border border-zinc-200 bg-zinc-100 px-6 py-10 sm:px-10 sm:py-14 dark:border-zinc-700 dark:bg-zinc-900">
        <div className="grid items-center gap-10 md:grid-cols-[180px_1fr]">
          <div className="relative mx-auto h-44 w-32 rounded-[2rem] border-2 border-emerald-500/90 bg-gradient-to-b from-emerald-50 to-emerald-100 p-3 shadow-[0_20px_40px_rgba(16,185,129,0.2)] dark:from-emerald-950/40 dark:to-emerald-900/30">
            <div className="mx-auto h-2.5 w-12 rounded-full bg-emerald-500/90" />
            <div className="mt-4 space-y-2.5">
              <div className="h-3 w-16 rounded bg-emerald-400/70 dark:bg-emerald-400/50" />
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-4 rounded bg-emerald-200 dark:bg-emerald-200/70" />
                <div className="h-4 rounded bg-emerald-200 dark:bg-emerald-200/70" />
                <div className="h-4 rounded bg-emerald-200 dark:bg-emerald-200/70" />
              </div>
              <div className="h-7 rounded bg-emerald-500/90" />
              <div className="grid grid-cols-4 gap-1 pt-1.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-2 rounded bg-emerald-200 dark:bg-emerald-200/70" />
                ))}
              </div>
            </div>
            <div className="absolute -left-8 top-7 h-7 w-12 rounded-l-full bg-emerald-300/80 dark:bg-emerald-400/55" />
            <div className="absolute -left-7 top-16 h-7 w-11 rounded-l-full bg-emerald-300/80 dark:bg-emerald-400/55" />
            <div className="absolute -right-3 bottom-8 rounded-xl bg-white/85 px-2 py-1 text-[10px] font-semibold text-emerald-700 shadow-sm dark:bg-zinc-800 dark:text-emerald-300">
              Live updates
            </div>
          </div>

          <div>
            <p className="text-muted-foreground text-sm font-semibold tracking-[0.24em] uppercase">
              STOREMATE APP
            </p>
            <h2 className="mt-3 max-w-[760px] text-3xl leading-tight font-semibold text-zinc-900 sm:text-5xl sm:leading-tight dark:text-zinc-100">
              Manage every order with the StoreMate app
            </h2>
            <p className="mt-5 max-w-[760px] text-md font-medium text-zinc-600 sm:text-xl dark:text-zinc-300">
              View order status, confirmation progress, and courier updates in one simple OMS app built for Sri Lankan online sellers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-zinc-950 px-5 py-3 text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-zinc-900"
              >
                <Smartphone className="size-5" />
                <span>
                  <span className="block text-xs text-white/70 dark:text-zinc-500">Start with</span>
                  <span className="block text-xl font-semibold leading-tight">iOS App</span>
                </span>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-zinc-950 px-5 py-3 text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-zinc-900"
              >
                <Smartphone className="size-5" />
                <span>
                  <span className="block text-xs text-white/70 dark:text-zinc-500">Start with</span>
                  <span className="block text-xl font-semibold leading-tight">Android App</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
