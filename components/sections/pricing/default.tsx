import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  ctaHrefOverride?: string;
  className?: string;
}

export default function Pricing({
  title = "Choose Your Plan",
  description = "Select the perfect plan for your business needs and start managing your orders efficiently",
  plans = [
    {
      name: "Free",
      description: "Free Subscription",
      price: "0",
      cta: {
        variant: "glow",
        label: "Start Free Trial",
        href: "https://oms.storemate.cloud/register",
        className: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-900 dark:text-white",
      },
      features: [
        "100 Orders/month",
        "1 Users",
        "Unlimited Products",
        "1 Delivery Account",
        "Businesses (Brands): 1",
      ],
      supportTitle: "Community Support",
      supportItems: [
        { label: "Knowledge base access", available: true },
        { label: "Community forum", available: true },
        { label: "Video tutorials", available: true },
        { label: "Email support", available: false },
        { label: "Customizations", available: false },
      ],
      footerNote: "Try for Free",
      variant: "glow",
    },
    {
      name: "Starter",
      description: "Starter Subscription",
      price: "5,000",
      pricePrefix: "LKR",
      cta: {
        variant: "default",
        label: "Start Free Trial",
        href: "https://oms.storemate.cloud/register",
      },
      features: [
        "500 Orders/month",
        "Rs.10/per order",
        "2 Users",
        "Unlimited Products",
        "1 Delivery Account",
        "Businesses (Brands): 1",
      ],
      supportTitle: "Email Support",
      supportItems: [
        { label: "Email support (48h)", available: true },
        { label: "Setup guide call", available: true },
        { label: "Extended knowledge base", available: true },
        { label: "Priority support", available: false },
        { label: "Customizations", available: false },
      ],
      footerNote: "Free for 30 Days",
      variant: "default",
    },
    {
      name: "Business",
      description: "Business Subscription",
      badge: "Most Popular",
      price: "12,000",
      pricePrefix: "LKR",
      cta: {
        variant: "default",
        label: "Start Free Trial",
        href: "https://oms.storemate.cloud/register",
      },
      features: [
        "2000 Orders/month",
        "Rs.6/per order",
        "5 Users",
        "Unlimited Products",
        "2 Delivery Accounts",
        "Businesses (Brands): 2",
      ],
      supportTitle: "Priority Support",
      supportItems: [
        { label: "Priority email & chat (12h)", available: true },
        { label: "Phone callback support", available: true },
        { label: "Dedicated onboarding", available: true },
        { label: "Customer Success Manager", available: false },
        { label: "Customizations", available: false },
      ],
      footerNote: "Free for 30 Days",
      variant: "glow-brand",
    },
    {
      name: "Premium",
      description: "Premium Subscription",
      price: "15,000",
      pricePrefix: "LKR",
      cta: {
        variant: "default",
        label: "Start Free Trial",
        href: "https://oms.storemate.cloud/register",
      },
      features: [
        "5000 Orders/month",
        "Rs.3/per order",
        "10 Users",
        "Unlimited Products",
        "3 Delivery Accounts",
        "Businesses (Brands): 3",
      ],
      supportTitle: "Success Support",
      supportItems: [
        { label: "Priority support (4h)", available: true },
        { label: "Customer Success Manager", available: true },
        { label: "WhatsApp support", available: true },
        { label: "Integration setup assistance", available: true },
        { label: "Customizations", available: true },
      ],
      footerNote: "Free for 30 Days",
      variant: "default",
    },
    {
      name: "Enterprise",
      description: "Enterprise Solution",
      price: "24,000",
      pricePrefix: "LKR",
      cta: {
        variant: "default",
        label: "Start Free Trial",
        href: "https://oms.storemate.cloud/register",
        className: "bg-orange-500 text-white hover:bg-orange-400 dark:bg-orange-500 dark:text-white",
      },
      features: [
        "25000 Orders/month",
        "Rs.0.96/per order",
        "25 Users",
        "Unlimited Products",
        "Unlimited Delivery Accounts",
        "Businesses (Brands): Unlimited",
      ],
      supportTitle: "Dedicated Support",
      supportItems: [
        { label: "Dedicated Account Manager", available: true },
        { label: "24/7 critical support (2h SLA)", available: true },
        { label: "Implementation team", available: true },
        { label: "Custom training sessions", available: true },
        { label: "Direct technical escalation", available: true },
        { label: "Strategic planning calls", available: true },
        { label: "Customizations", available: true },
      ],
      footerNote: "For Enterprise Solution",
      variant: "default",
    },
  ],
  ctaHrefOverride,
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-12 px-4 xl:px-8">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            <p className="text-primary text-sm font-semibold tracking-[0.24em] uppercase">
              Flexible Pricing Options
            </p>
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                badge={plan.badge}
                price={plan.price}
                pricePrefix={plan.pricePrefix}
                priceSuffix={plan.priceSuffix}
                priceNote={plan.priceNote}
                footerNote={plan.footerNote}
                features={plan.features}
                supportTitle={plan.supportTitle}
                supportItems={plan.supportItems}
                variant={plan.variant}
                className={cn("w-full max-w-none", plan.className)}
                cta={{
                  ...plan.cta,
                  href: ctaHrefOverride || plan.cta.href,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
