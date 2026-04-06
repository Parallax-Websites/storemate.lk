"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import AppLogo from "../logos/app-logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  disableLinks?: boolean;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Home",
      isLink: true,
      href: "/",
    },
    {
      title: "Features",
      content: "components",
    },
    {
      title: "Pricing",
      isLink: true,
      href: "/pricing",
    },
    {
      title: "More",
      content: "default",
    },
  ],
  components = [
    {
      title: "Inquiry Management",
      href: siteConfig.url,
      description:
        "Streamline customer inquiries and lead conversion",
    },
    {
      title: "Sales Management",
      href: siteConfig.url,
      description:
        "Complete order and sales workflow automation",
    },
    {
      title: "Shipping & Packing",
      href: "/shipping-packing",
      description:
        "Efficient logistics and delivery management",
    },
    {
      title: "User & Product Management",
      href: siteConfig.url,
      description:
        "Comprehensive system and user administration",
    },
  ],
  logo = <AppLogo width={250} height={60} className="h-14 w-auto" />,
  logoTitle = "StoreMate OMS",
  logoDescription = "Manage social media orders, sales, and deliveries from one dashboard.",
  logoHref = siteConfig.url,
  disableLinks = false,
  introItems = [
    {
      title: "About Storemate",
      href: "/about-us",
      description: "Learn how Storemate helps businesses scale operations.",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
      description: "Reach our team for product guidance and support.",
    },
    {
      title: "Partner Program",
      href: siteConfig.url,
      description: "Grow together with Storemate partnership opportunities.",
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              disableLinks ? (
                <span
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-foreground cursor-default opacity-90",
                  )}
                >
                  {item.title}
                </span>
              ) : (
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href={item.href || ""}>{item.title}</Link>
                </NavigationMenuLink>
              )
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div
                            className={cn(
                              "from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md",
                              !disableLinks && "cursor-pointer",
                            )}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {logoDescription}
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro, i) => (
                        <ListItem
                          key={i}
                          href={disableLinks ? undefined : intro.href}
                          title={intro.title}
                          disabled={disableLinks}
                        >
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={disableLinks ? undefined : component.href}
                          disabled={disableLinks}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  disabled = false,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string; disabled?: boolean }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            disabled
              ? "text-foreground/90 cursor-default hover:bg-accent/60 hover:text-accent-foreground focus:bg-accent/60 focus:text-accent-foreground"
              : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}


