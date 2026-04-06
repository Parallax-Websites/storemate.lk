import CTA from "../components/sections/cta/default";
import AppPromo from "../components/sections/app-promo/default";
import Awards from "../components/sections/awards/default";
import CustomerLogos from "../components/sections/customer-logos/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import Testimonials from "../components/sections/testimonials/default";
import VideoShowcase from "../components/sections/video-showcase/default";
import WhyStoremate from "../components/sections/why-storemate/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Hero />
      <Logos />
      <Stats />
      <Awards />
      <AppPromo />
      <WhyStoremate />
      <Pricing ctaHrefOverride="/pricing" />
      <CustomerLogos />
      <Testimonials />
      <VideoShowcase />
      <Items />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
