import { ReactNode } from "react";
import Image from "next/image";

import { siteConfig } from "@/config/site";

import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";

interface LogoItem {
  src: string;
  alt: string;
  darkSrc?: string;
}

const originalLogos: LogoItem[] = [
  {
    src: "https://cimacleaners.com.au/wp-content/uploads/2026/04/citypak-logo.png",
    darkSrc: "https://cimacleaners.com.au/wp-content/uploads/2026/04/Citypack.png",
    alt: "Citypack",
  },
  {
    src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-5.webp",
    alt: "Courier Partner 1",
  },
  {
    src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/royalelogo-1.webp",
    alt: "Royal Express",
  },
  {
    src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-1-e1758031524438.webp",
    alt: "Courier Partner 3",
  },
  {
    src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/images-2-1.webp",
    alt: "Domex",
  },
  {
    src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/332708073_3811654199061580_3846048282845902556_n-Photoroom-e1758020748705.webp",
    alt: "Trans Express",
  },
];

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Our Courier Partners",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Integrations
    </Badge>
  ),
  logos = originalLogos.map((logo) => (
    <div
      key={logo.src}
      data-slot="logo"
      className="flex items-center justify-center"
    >
      {logo.darkSrc ? (
        <>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={140}
            height={44}
            className="h-11 w-auto object-contain opacity-90 dark:hidden"
          />
          <Image
            src={logo.darkSrc}
            alt={logo.alt}
            width={140}
            height={44}
            className="hidden h-11 w-auto object-contain opacity-90 dark:block"
          />
        </>
      ) : (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={140}
          height={44}
          className="h-11 w-auto object-contain opacity-90"
        />
      )}
    </div>
  )),
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
