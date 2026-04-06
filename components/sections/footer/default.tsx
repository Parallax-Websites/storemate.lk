import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import AppLogo from "../../logos/app-logo";
import { Button } from "../../ui/button";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href?: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <AppLogo width={250} height={60} className="h-14 w-auto" />,
  name = "Storemate OMS",
  columns = [
    {
      title: "Company",
      links: [
        { text: "About", href: "/about-us" },
        { text: "Contact Us", href: "/contact-us" },
        { text: "How it Works" },
        { text: "Pricing", href: "/pricing" },
        { text: "Privacy & Policy" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { text: "Inquiry Management" },
        { text: "Sales Management" },
        { text: "Shipping & Packing", href: "/shipping-packing" },
        { text: "User & Contact" },
        { text: "Partner Program" },
      ],
    },
  ],
  copyright =
    "© Copyright 2025, All Rights Reserved by Storemate OMS | Product by Parallax Technologies",
  policies = [],
  showModeToggle = false,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-2">
              <div className="flex items-center gap-2">
                {logo}
              </div>
              <p className="text-muted-foreground max-w-[420px] text-base leading-8">
                {name} helps Sri Lankan businesses manage orders from Facebook,
                WhatsApp, and Instagram in one powerful dashboard. Streamline
                your order management today.
              </p>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  link.href ? (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="text-muted-foreground text-sm"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <span
                      key={linkIndex}
                      className="text-muted-foreground text-sm"
                    >
                      {link.text}
                    </span>
                  )
                ))}
              </FooterColumn>
            ))}
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-1">
              <h3 className="text-md pt-1 font-semibold uppercase">
                Subscribe to newsletter
              </h3>
              <div className="flex flex-col gap-3">
                <label htmlFor="footer-email" className="text-muted-foreground text-sm">
                  Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-input bg-background h-11 rounded-md border px-3 text-sm"
                />
                <Button type="button" variant="default" className="w-fit">
                  Subscribe
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                Get the latest updates about Storemate OMS features and tips
                directly to your inbox.
              </p>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <span key={index}>{policy.text}</span>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
