import { type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  title?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export default function CTA({
  title = "Ready to Simplify Your Order Management?",
  buttons = [
    {
      href: "https://oms.storemate.cloud/register",
      text: "Start Free Trial",
      variant: "default",
    },
  ],
  className,
}: CTAProps) {
  const steps = [
    "Book a free 10-minute demo",
    "See how Storemate fits your business",
    "Get 30 days free trial",
    "Scale confidently with Storemate OMS",
  ];

  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[860px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>

        <p className="text-md text-muted-foreground max-w-[860px] font-medium sm:text-xl">
          Start automating your sales, reduce returns, and sync couriers all in
          one platform
        </p>

        <div className="grid w-full max-w-[820px] gap-6 text-left md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-4">
              <span className="bg-primary text-primary-foreground inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                {index + 1}
              </span>
              <p className="text-lg font-medium">{step}</p>
            </div>
          ))}
        </div>

        <h3 className="pt-2 text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          Try Storemate Free
        </h3>

        {buttons !== false && buttons.length > 0 && (
          <div className="flex justify-center gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || "default"}
                size="lg"
                asChild
              >
                <a href={button.href} className="min-w-[220px]">
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </a>
              </Button>
            ))}
          </div>
        )}

        <div className="text-md text-muted-foreground flex flex-col items-center gap-4 pt-4 font-medium sm:flex-row sm:gap-10 sm:text-xl">
          <div className="flex items-center gap-2">
            <Check className="size-5 text-emerald-500" />
            <span>100% Free Trial for 30 days</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="size-5 text-emerald-500" />
            <span>No Credit Card required</span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
