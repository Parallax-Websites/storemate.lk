import Footer from "../../components/sections/footer/default";
import Navbar from "../../components/sections/navbar/default";
import Stats from "../../components/sections/stats/default";
import { Button } from "../../components/ui/button";
import { LayoutLines } from "../../components/ui/layout-lines";
import { Section } from "../../components/ui/section";

const teamGallery = [
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/3-post-1536x1024-1-1024x683.jpg",
    alt: "Storemate team collaboration",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/2-post-1536x1024-1-1024x683.jpg",
    alt: "Storemate team meeting",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/398445227_828030132662472_4340385669822882599_n-1536x1024-1-1024x683.jpg",
    alt: "Storemate team achievement",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/1-post-1536x1024-1-1024x683.jpg",
    alt: "Storemate team event",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/313184887_551366230328865_6684626160421224402_n-1-1536x1024-1-1024x683.jpg",
    alt: "Storemate celebration",
  },
  {
    src: "https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/APICTA-Photo-1536x1024-1-1024x683.jpeg",
    alt: "Storemate APICTA event",
  },
];

const services = [
  "Software Development Solutions",
  "Custom Software Development",
  "Product Software Development",
  "Software Outsourcing",
  "Enterprise Solution Delivery",
  "Order Management Workflow Design",
];

export default function AboutUsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      <Section className="pb-10">
        <div className="max-w-container mx-auto grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.22em] uppercase">
              About Storemate
            </p>
            <h1 className="mt-4 text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              Storemate OMS by Parallax Technologies
            </h1>
            <p className="text-md text-muted-foreground mt-5 max-w-[64ch] font-medium sm:text-xl">
              Storemate OMS is developed and maintained by Parallax Technologies
              (Pvt) Ltd. Since 2019, we have helped businesses manage orders,
              automate operations, and scale social commerce using reliable
              software systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="https://welcome.oms.storemate.cloud/register">
                  Register for Free
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/contact-us">Contact Us</a>
              </Button>
            </div>
          </div>

          <div className="border-border/50 bg-card/40 rounded-2xl border p-3 sm:p-4">
            <img
              src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/DSC08396-Large-1024x566.jpeg"
              alt="Parallax Technologies team"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Stats
        className="pt-0"
        items={[
          {
            label: "team",
            value: "50+",
            description: "talented professionals",
          },
          {
            label: "experience",
            value: "7+",
            description: "years of technical delivery",
          },
          {
            label: "since",
            value: "2019",
            description: "building Storemate OMS",
          },
          {
            label: "focus",
            value: "24/7",
            description: "continuous product support",
          },
        ]}
      />

      <Section>
        <div className="max-w-container mx-auto grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative lg:col-span-7">
            <div className="bg-primary/10 absolute -top-8 -left-10 h-36 w-36 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">
                Our Story
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">
                We Build Practical Software for Real Operations
              </h2>
              <div className="mt-6 space-y-4 border-l border-border/60 pl-5 sm:pl-6">
                <p className="text-muted-foreground text-base leading-8">
                  We combine strong product thinking with practical execution.
                  From custom builds to enterprise-grade implementations, our
                  team helps growing companies simplify complex order operations
                  and improve customer experience.
                </p>
                <p className="text-muted-foreground text-base leading-8">
                  We focus on building software that is dependable, flexible,
                  and easy to adopt for teams handling sales through Facebook,
                  WhatsApp, and Instagram.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="bg-primary/10 absolute right-0 -bottom-6 h-28 w-28 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">What We Do</h3>
                <span className="text-muted-foreground text-xs uppercase">
                  6 Core Services
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {services.map((service, index) => (
                  <li key={service} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-primary text-xs font-semibold tracking-wider">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground text-base font-medium">
                        {service}
                      </span>
                    </div>
                    <div className="bg-border/60 h-px w-full" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
            Success Starts with a Great Team
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[80ch] text-base leading-8">
            Our team culture is built around collaboration, learning, and shared
            ownership. These moments capture the people and partnerships behind
            the work we deliver.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamGallery.map((photo) => (
              <div
                key={photo.src}
                className="border-border/50 bg-card/40 overflow-hidden rounded-xl border"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-52 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-container mx-auto grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
              Awards & Recognition
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-8">
              We are proud of the recognition we have received for excellence
              and innovation in software development. These milestones reflect
              our commitment to long-term value for every business we support.
            </p>
          </div>
          <div className="border-border/50 bg-card/40 rounded-2xl border p-3 sm:p-4">
            <img
              src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/canva-awards-1-1024x576.jpg"
              alt="Storemate awards and recognition"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-container mx-auto border-border/50 bg-card/40 rounded-2xl border p-6 text-center sm:p-10">
          <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
            Ready to Simplify Your Order Management?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[70ch] text-base leading-8">
            Automate sales workflows, reduce returns, and sync your courier
            operations from one platform. Start with a 30-day free trial and
            explore how Storemate fits your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="https://welcome.oms.storemate.cloud/register">
                Try Storemate Free
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/pricing">View Pricing</a>
            </Button>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            30-day free trial. No credit card required.
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
