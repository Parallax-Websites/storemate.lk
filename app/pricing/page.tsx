import Footer from "../../components/sections/footer/default";
import PricingFAQ from "../../components/sections/faq/pricing";
import Navbar from "../../components/sections/navbar/default";
import Pricing from "../../components/sections/pricing/default";
import { LayoutLines } from "../../components/ui/layout-lines";

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Pricing className="pt-10" />
      <PricingFAQ />
      <Footer />
    </main>
  );
}
