import FAQ from "./default";

export default function PricingFAQ() {
  return (
    <FAQ
      title="Pricing FAQs"
      items={[
        {
          question: "What is an order?",
          answer: (
            <>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                An order is a customer purchase request that comes through your
                social media channels (Facebook, WhatsApp, Instagram) or phone
                calls.
              </p>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                In Storemate OMS, orders are the first step in your sales
                process. They help you track and follow up with customers from
                placement to delivery.
              </p>
            </>
          ),
        },
        {
          question: "What does COD Sync mean?",
          answer: (
            <>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                COD (Cash on Delivery) Sync means that when you add orders into
                Storemate OMS, the system will automatically sync and update
                those order details with your delivery partner's system without
                any manual work required.
              </p>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                No more exporting, uploading, or typing order details again.
                Everything is synced in real time for faster and more accurate
                processing.
              </p>
            </>
          ),
        },
        {
          question: "What is a business account?",
          answer: (
            <>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                A business location is a physical address or warehouse where
                you store and dispatch your products.
              </p>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                You can set up multiple business locations in Storemate OMS if
                you have warehouses in different cities or areas, helping you
                manage inventory and shipping more efficiently.
              </p>
            </>
          ),
        },
        {
          question: "Can I choose which delivery company I need to sync with?",
          answer: (
            <>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                Yes, absolutely.
              </p>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                Storemate OMS currently integrates with many courier services.
                You can choose which courier service to use for each order.
              </p>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                We can also integrate additional courier services based on your
                business requirements.
              </p>
            </>
          ),
        },
        {
          question: "What is a WhatsApp form?",
          answer: (
            <>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                A WhatsApp form is a structured message template that customers
                can fill out directly in WhatsApp to place orders.
              </p>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                It helps you collect customer details, product preferences, and
                delivery information in an organized way, making order
                processing faster and more accurate.
              </p>
            </>
          ),
        },
        {
          question: "Why I need a dedicated server?",
          answer: (
            <>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                A dedicated server ensures better performance, security, and
                customization for your business.
              </p>
              <p className="text-muted-foreground mb-3 max-w-[640px] text-balance">
                Benefits include:
              </p>
              <ul className="text-muted-foreground mb-4 ml-5 list-disc space-y-1">
                <li>Faster loading times for your team</li>
                <li>Enhanced data security</li>
                <li>Custom features specific to your business</li>
                <li>Better uptime and reliability</li>
                <li>Dedicated support</li>
              </ul>
            </>
          ),
        },
        {
          question: "What are the customisations?",
          answer: (
            <>
              <p className="text-muted-foreground mb-3 max-w-[640px] text-balance">
                Storemate OMS offers various customizations including:
              </p>
              <ul className="text-muted-foreground mb-4 ml-5 list-disc space-y-1">
                <li>Custom order forms and fields</li>
                <li>Branded invoices and waybills</li>
                <li>Integration with your existing systems</li>
                <li>Custom reporting and analytics</li>
                <li>Workflow automation specific to your business</li>
                <li>Custom courier integrations</li>
              </ul>
            </>
          ),
        },
        {
          question: "What if I have more than 05 business locations?",
          answer: (
            <>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                No problem at all.
              </p>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                Storemate OMS can handle unlimited business locations. Each
                additional location can be set up with its own inventory
                management, staff access, and shipping preferences.
              </p>
              <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
                Contact our team to discuss enterprise pricing for multiple
                locations.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
