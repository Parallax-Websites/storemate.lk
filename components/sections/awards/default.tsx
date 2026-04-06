import Image from "next/image";

import { Section } from "../../ui/section";

const awardImages = [
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/3-post-1536x1024-1-1024x683.jpg",
    alt: "Award recognition 1",
    title: "Recognition 1",
    description: "Excellence in software development.",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/2-post-1536x1024-1-1024x683.jpg",
    alt: "Award recognition 2",
    title: "Recognition 2",
    description: "Innovation and product quality.",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/398445227_828030132662472_4340385669822882599_n-1536x1024-1-1024x683.jpg",
    alt: "Award recognition 3",
    title: "Recognition 3",
    description: "Outstanding digital impact.",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/1-post-1536x1024-1-1024x683.jpg",
    alt: "Award recognition 4",
    title: "Recognition 4",
    description: "Commitment to technical excellence.",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/313184887_551366230328865_6684626160421224402_n-1-1536x1024-1-1024x683.jpg",
    alt: "Award recognition 5",
    title: "Recognition 5",
    description: "Growth and business excellence.",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/APICTA-Photo-1536x1024-1-1024x683.jpeg",
    alt: "Award recognition 6",
    title: "Recognition 6",
    description: "Innovation and industry recognition.",
  },
];

interface AwardsProps {
  className?: string;
}

export default function Awards({ className }: AwardsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col gap-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary text-sm font-semibold tracking-[0.24em] uppercase">
            Recognition
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-5xl">
            We Are Awarded By
          </h2>
          <p className="text-muted-foreground mt-4 text-md font-medium sm:text-xl">
            Recognition for our commitment to excellence and innovation in software development
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awardImages.map((image, index) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                    Award
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {image.title}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-sm leading-6 text-white/85">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
