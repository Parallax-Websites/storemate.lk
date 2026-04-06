import Footer from "../../components/sections/footer/default";
import Navbar from "../../components/sections/navbar/default";
import { Button } from "../../components/ui/button";
import { LayoutLines } from "../../components/ui/layout-lines";
import { Section } from "../../components/ui/section";

export default function ContactUsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      <Section>
        <div className="max-w-container mx-auto grid gap-8 lg:grid-cols-2">
          <div className="border-border/50 bg-card/40 rounded-2xl border p-6 sm:p-8">
            <h1 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              Contact Us
            </h1>
            <p className="text-md text-muted-foreground mt-4 font-medium sm:text-xl">
              Let&apos;s find 30 minutes that work for you.
            </p>

            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-input bg-background h-12 rounded-md border px-4 text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-input bg-background h-12 rounded-md border px-4 text-sm"
                />
              </div>

              <input
                type="email"
                placeholder="Work Email"
                className="border-input bg-background h-12 w-full rounded-md border px-4 text-sm"
              />

              <textarea
                placeholder="Tell us about your requirements"
                className="border-input bg-background min-h-[130px] w-full rounded-md border p-4 text-sm"
              />

              <Button type="button" size="lg" className="w-full">
                Schedule a Demo
              </Button>
            </form>
          </div>

          <div className="border-border/50 bg-card/40 rounded-2xl border p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Email Us</h2>
            <p className="text-muted-foreground mt-4 text-base">
              Simple drop us an email at
            </p>
            <p className="text-primary mt-3 text-xl font-semibold">
              sales@storemate.lk
            </p>
            <p className="text-muted-foreground mt-3 text-base">
              and you&apos;ll receive a reply within 24 hours
            </p>

            <div className="border-border/50 my-8 border-t" />

            <h2 className="text-2xl font-semibold">Give us a call</h2>
            <p className="text-muted-foreground mt-4 text-base">
              Give us a ring. Our Experts are standing by
            </p>
            <p className="text-muted-foreground mt-3 text-base">
              Monday to Friday from 9am to 5pm
            </p>
            <p className="text-primary mt-3 text-lg font-semibold">
              Available Now
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
