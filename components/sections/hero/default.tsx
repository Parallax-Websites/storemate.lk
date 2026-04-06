import { type VariantProps } from "class-variance-authority";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: ReactNode;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "The All-in-One Order Management System Built for Sri Lanka",
  description =
    "Automate courier waybills, sync Facebook and WhatsApp orders, bulk sync orders to couriers, and detect duplicate or fake orders.",
  mockup = (
    <Screenshot
      srcLight="https://cimacleaners.com.au/wp-content/uploads/2025/09/Dashboards-2048x1152-1.webp"
      srcDark="https://cimacleaners.com.au/wp-content/uploads/2025/09/Dashboards-2048x1152-1.webp"
      alt="Launch UI app screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        New version of Launch UI is out!
      </span>
      <a
        href="https://oms.storemate.cloud/register"
        className="flex items-center gap-1"
      >
        Start Free Trial
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons = [
    {
      href: "https://oms.storemate.cloud/register",
      text: "GET YOUR FREE ACCOUNT",
      variant: "default",
    },
    {
      href: "https://oms.storemate.cloud/register",
      text: "SEE HOW IT WORKS",
      variant: "glow",
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "group fade-bottom relative overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block max-w-[20ch] bg-linear-to-r bg-clip-text text-4xl leading-[1.12] font-semibold text-balance text-transparent drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
            {title === "The All-in-One Order Management System Built for Sri Lanka" ? (
              <>
                <span className="block">The All-in-One Order</span>
                <span className="block">Management System</span>
                <span className="block">Built for Sri Lanka</span>
              </>
            ) : (
              title
            )}
          </h1>
          <p className="animate-appear relative z-10 max-w-[920px] text-lg leading-tight font-bold text-balance text-foreground opacity-0 delay-75 sm:text-xl md:text-2xl lg:text-3xl">
            The #1 OMS designed for online businesses in Sri Lanka.
          </p>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  className={index === 1 ? "hidden sm:inline-flex" : undefined}
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
            </div>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-52 w-full max-w-[850px] -translate-x-1/2 -translate-y-1/2 opacity-30 transition-all duration-500 ease-in-out group-hover:opacity-45">
        <Glow variant="center" />
      </div>
    </Section>
  );
}
