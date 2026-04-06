import Image from "next/image";

import { Section } from "../../ui/section";

interface StepIcon {
  src: string;
  alt: string;
  className: string;
}

interface ItemsProps {
  className?: string;
}

const steps = [
  {
    number: 1,
    img: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-7.png",
    title: "Collect",
    desc: "Collect Orders From Facebook, WhatsApp, Instagram, & Phone Calls",
    icons: [
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/facebook-1.png",
        alt: "Facebook",
        className: "-left-3 -top-3 h-11 w-11",
      },
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/social-1-1.png",
        alt: "WhatsApp",
        className: "right-8 -top-5 h-11 w-11",
      },
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/instagram.png",
        alt: "Instagram",
        className: "-right-4 bottom-16 h-10 w-10",
      },
    ] as StepIcon[],
  },
  {
    number: 2,
    img: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-10.png",
    title: "Confirm",
    desc: "Reduce Duplicate Orders & Confirm Orders Quickly With Automated Follow-Ups",
    icons: [
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/social-media.png",
        alt: "Social media",
        className: "left-8 -top-6 h-12 w-12",
      },
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/like-1.png",
        alt: "Like",
        className: "right-7 -top-4 h-10 w-10",
      },
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/duplicate-1.png",
        alt: "Duplicate",
        className: "-right-4 bottom-16 h-10 w-10",
      },
    ] as StepIcon[],
  },
  {
    number: 3,
    img: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-9.png",
    title: "Sync",
    desc: "Connect With Any Courier Partner And Print Waybill With One Click",
    icons: [
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/logo-1-1-1.png",
        alt: "Kachiyo",
        className: "-left-4 top-2 h-12 w-12",
      },
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/50283536_324614421513330_5290814888745107456_n-Photoroom.png",
        alt: "Domex",
        className: "left-1/2 -top-6 h-10 w-20 -translate-x-1/2",
      },
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/royalelogo-1-1-1.png",
        alt: "Royal Express",
        className: "-right-2 top-3 h-10 w-14",
      },
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/logo-5-1.png",
        alt: "TransEx",
        className: "-left-4 top-14 h-10 w-12",
      },
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/logo_03_06_08_logo-light-1.png",
        alt: "FDE",
        className: "-right-5 top-20 h-8 w-14",
      },
    ] as StepIcon[],
  },
  {
    number: 4,
    img: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-8.png",
    title: "Monitor",
    desc: "Track Delivery Status, Order Progress, & Customer History All In One Place",
    icons: [
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/pie-graph-1.png",
        alt: "Pie chart",
        className: "-left-3 top-5 h-10 w-10",
      },
      {
        src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/diagram-1.png",
        alt: "Diagram",
        className: "-right-3 top-0 h-10 w-10",
      },
    ] as StepIcon[],
  },
];

export default function Items({
  className,
}: ItemsProps) {
  return (
    <Section className={(className ? className + " " : "") + "hidden md:block"}>
      <div className="max-w-container mx-auto">
        <div className="mb-14 text-center">
          <div className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            <div>From Inquiry to Delivery</div>
            <div className="mt-2">4 Simple Steps</div>
          </div>
          <p className="text-md text-muted-foreground mx-auto mt-5 max-w-2xl font-medium sm:text-xl">
            Streamline your order management from collection to delivery
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative h-full overflow-visible rounded-2xl">
              <div className="relative overflow-hidden rounded-t-2xl border border-b-0 border-[#d9e3f0] bg-gradient-to-b from-[#eef4ff] to-[#f8fbff] px-4 pt-8 pb-4">
                <div className="absolute -top-10 -left-24 h-60 w-60 rounded-full bg-white/80" />
                <div className="absolute -top-16 -left-24 h-52 w-52 rounded-full bg-[#edf6ff]" />

                {step.icons.map((icon) => (
                  <div key={icon.src} className={"absolute z-20 " + icon.className}>
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}

                <div className="relative z-10 mx-auto flex h-40 w-full items-center justify-center">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={280}
                    height={170}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div className="relative -mt-1">
                <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="h-8 w-full">
                  <path d="M0,0 Q250,80 500,0 L500,80 L0,80 Z" fill="#2780D3" />
                </svg>
              </div>

              <div className="-mt-1 flex min-h-[220px] flex-col rounded-b-2xl bg-[#2780D3] px-5 pt-10 pb-6 text-center text-white">
                <h3 className="text-4xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">{step.desc}</p>
              </div>

              <div className="absolute top-[180px] left-1/2 z-30 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#2780D3] bg-white text-5xl font-semibold text-[#2780D3]">
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
