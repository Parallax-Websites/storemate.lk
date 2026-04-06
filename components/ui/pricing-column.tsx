import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheckBig, CircleX } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

const pricingColumnVariants = cva(
  "max-w-container relative flex flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
  {
    variants: {
      variant: {
        default: "glass-1 to-transparent dark:glass-3",
        glow: "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
        "glow-brand":
          "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PricingColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingColumnVariants> {
  name: string;
  icon?: ReactNode;
  description: string;
  badge?: string;
  price: string;
  pricePrefix?: string;
  priceSuffix?: string;
  priceNote?: string;
  footerNote?: string;
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
    className?: string;
  };
  features: string[];
  supportTitle?: string;
  supportItems?: {
    label: string;
    available: boolean;
  }[];
}

export function PricingColumn({
  name,
  icon,
  description,
  badge,
  price,
  pricePrefix,
  priceSuffix,
  priceNote,
  footerNote,
  cta,
  features,
  supportTitle,
  supportItems,
  variant,
  className,
  ...props
}: PricingColumnProps) {
  return (
    <div
      className={cn(pricingColumnVariants({ variant, className }))}
      {...props}
    >
      <hr
        className={cn(
          "via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent",
          variant === "glow-brand" && "via-brand",
        )}
      />
      {badge && (
        <div className="bg-primary text-primary-foreground absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold">
          {badge}
        </div>
      )}
      <div className="flex flex-col gap-7">
        <header className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 font-bold">
            {icon && (
              <div className="text-muted-foreground flex items-center gap-2">
                {icon}
              </div>
            )}
            {name}
          </h2>
          <p className="text-muted-foreground max-w-[220px] text-sm">
            {description}
          </p>
        </header>
        <section className="flex flex-col gap-3">
          <div className="flex items-end gap-1">
            {pricePrefix && (
              <span className="text-muted-foreground text-xl font-semibold">
                {pricePrefix}
              </span>
            )}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">{price}</span>
                {priceSuffix && (
                  <span className="text-muted-foreground text-xl font-semibold">
                    {priceSuffix}
                  </span>
                )}
              </div>
            </div>
          </div>
          {priceNote && <p className="text-muted-foreground text-sm">{priceNote}</p>}
          <ul className="text-muted-foreground flex min-h-[170px] flex-col gap-1 text-sm">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
        <hr className="border-input" />
        {supportTitle && (
          <p className="text-muted-foreground text-sm font-semibold uppercase">
            {supportTitle}
          </p>
        )}
        {supportItems && supportItems.length > 0 && (
          <ul className="flex min-h-[190px] flex-col gap-2">
            {supportItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm">
                {item.available ? (
                  <CircleCheckBig className="size-4 shrink-0 text-emerald-500" />
                ) : (
                  <CircleX className="text-muted-foreground/70 size-4 shrink-0" />
                )}
                <span className={cn(!item.available && "text-muted-foreground")}>{item.label}</span>
              </li>
            ))}
          </ul>
        )}
        <Button variant={cta.variant} size="lg" className={cta.className} asChild>
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
        {footerNote && (
          <p className="text-muted-foreground text-center text-sm font-medium">
            {footerNote}
          </p>
        )}
      </div>
    </div>
  );
}

export { pricingColumnVariants };
