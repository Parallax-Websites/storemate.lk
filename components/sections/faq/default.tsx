import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Your Questions, Answered",
  items = [
    {
      question: "Can I use Storemate OMS if I don't have a website?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Yes, absolutely.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Storemate OMS is designed for sellers who take orders through
            Facebook, WhatsApp, Instagram, or even phone calls. You don't need
            a website to use the system. It helps you organize and manage all
            your orders from one dashboard.
          </p>
        </>
      ),
    },
    {
      question: "Will I need to upload Excel files to the courier system?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            No need.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Storemate OMS is integrated with courier companies and can send
            order info directly with one click. No Excel uploads. No manual
            entry. You can generate waybills instantly.
          </p>
        </>
      ),
    },
    {
      question:
        "Can I connect any delivery company with Storemate OMS?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Absolutely, yes.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Storemate OMS already supports direct integrations with leading
            courier partners in Sri Lanka.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            If you are using a different courier, we can integrate it on
            request as long as the courier provides an API or file-based sync
            method.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Our goal is to keep your operations automated and hassle-free,
            regardless of your delivery partner.
          </p>
        </>
      ),
    },
    {
      question: "How does Storemate OMS reduce return orders?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            By stopping problems before dispatch.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Storemate OMS helps you avoid most return orders by detecting
            duplicate orders from the same customer, flagging suspicious
            customers, and helping your team follow up before dispatch.
          </p>
          <ul className="text-muted-foreground mb-4 ml-5 list-disc space-y-1">
            <li>Detecting duplicate orders from the same customer.</li>
            <li>Flagging fake or suspicious customers.</li>
            <li>Helping you follow up before sending the order.</li>
          </ul>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Less confusion means fewer returns and better profit.
          </p>
        </>
      ),
    },
    {
      question: "Can I try Storemate OMS before I pay?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            You get a 30-day free trial with full access and no limitations.
            If you have already filled out the server feedback form, your setup
            fee is 100% waived (limited-time offer).
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            No risk. No pressure. Just a smarter way to manage your orders.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
