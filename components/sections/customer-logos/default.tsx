import Image from "next/image";

import { Section } from "../../ui/section";

const customerLogos = [
  { src: "/images/customers/Clif-Collagen.jpeg", name: "Clif Collagen" },
  { src: "/images/customers/F---Craft-Choice.jpeg", name: "Craft Choice" },
  { src: "/images/customers/F---EZGI.jpeg", name: "EZGI" },
  { src: "/images/customers/F---Gifora.jpeg", name: "Gifora" },
  { src: "/images/customers/F---Redora.jpeg", name: "Redora" },
  {
    src: "/images/customers/I-Grid-Holdings-Pvt-Ltd.jpeg",
    name: "I Grid Holdings",
  },
  { src: "/images/customers/Lizas-Closet.jpg", name: "Liza's Closet" },
  {
    src: "/images/customers/Naturista-Ceylon.jpeg",
    name: "Naturista Ceylon",
  },
  { src: "/images/customers/Navora-Herbals.jpeg", name: "Navora Herbals" },
  {
    src: "/images/customers/NK-Online-Super.jpeg",
    name: "NK Online Super",
  },
  { src: "/images/customers/Shamrock.png", name: "Shamrock" },
  {
    src: "/images/customers/Vishwa-Karma-Aayurveda.jpeg",
    name: "Vishwa Karma Aayurveda",
  },
  {
    src: "/images/customers/Vishwa-Shakthi-Aayurveda.jpeg",
    name: "Vishwa Shakthi Aayurveda",
  },
];

interface CustomerLogosProps {
  title?: string;
  className?: string;
}

export default function CustomerLogos({
  title = "Trusted by Growing Sri Lankan Brands",
  className,
}: CustomerLogosProps) {
  const firstRow = customerLogos.slice(0, 7);
  const secondRow = customerLogos.slice(7);

  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-primary text-sm font-semibold tracking-[0.24em] uppercase">
            Trusted Partners
          </p>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[700px] font-medium sm:text-xl">
            Join hundreds of businesses already using StoreMate OMS to scale
            their operations.
          </p>
        </div>

        <div className="grid w-full grid-cols-3 gap-6 lg:hidden">
          {customerLogos.map((logo) => (
            <div key={logo.src} data-slot="logo" className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={64}
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>
          ))}
        </div>

        <div className="hidden w-full max-w-[1200px] flex-col gap-8 lg:flex">
          <div className="flex items-center justify-center gap-10">
            {firstRow.map((logo) => (
              <div key={logo.src} data-slot="logo" className="flex min-w-[100px] items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={230}
                  height={92}
                  className="h-16 w-auto object-contain opacity-90"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-10">
            {secondRow.map((logo) => (
              <div key={logo.src} data-slot="logo" className="flex min-w-[100px] items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={230}
                  height={92}
                  className="h-16 w-auto object-contain opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
