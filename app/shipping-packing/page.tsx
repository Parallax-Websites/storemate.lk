import CTA from "../../components/sections/cta/default";
import Footer from "../../components/sections/footer/default";
import FAQ from "../../components/sections/faq/default";
import Navbar from "../../components/sections/navbar/default";
import { Button } from "../../components/ui/button";
import { LayoutLines } from "../../components/ui/layout-lines";
import { Section } from "../../components/ui/section";
import { cn } from "@/lib/utils";

const quickBenefits = [
	{
		title: "Upload Orders Easily",
		body: "Save over 5 hours daily by removing manual courier portal uploads.",
	},
	{
		title: "Process Orders 10x Faster",
		body: "Handle significantly higher order volume with bulk-ready automation.",
	},
	{
		title: "Reduce Shipping Errors",
		body: "Cut shipping mistakes by up to 90% and protect delivery quality.",
	},
	{
		title: "Scale Without Extra Staff",
		body: "Manage more shipments without increasing operations headcount.",
	},
];

const workflowSections = [
	{
		title: "One-Click Courier Sync",
		description:
			"Sync orders to your courier company instantly. Remove manual data entry, upload shipments in one click, and auto-generate waybills from order data.",
		metrics: [
			{ label: "time reduction", value: "90%" },
			{ label: "accuracy improvement", value: "99.9%" },
		],
		image: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-2-6.png",
		imageAlt: "One-click courier sync dashboard",
	},
	{
		title: "Real-Time Sync Status Monitoring",
		description:
			"Track successful syncs, failed uploads, and shipping updates in real time so your team always knows the exact logistics status.",
		metrics: [
			{ label: "sync reliability", value: "99.9%" },
			{ label: "status update frequency", value: "Live" },
		],
		image: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-2-5-1.png",
		imageAlt: "Real-time sync status dashboard",
	},
	{
		title: "Instant Waybill Printing",
		description:
			"Generate professional waybills instantly with support for multiple courier formats, batch printing, and customizable templates.",
		metrics: [
			{ label: "print speed", value: "<5s" },
			{ label: "error reduction", value: "95%" },
		],
		image: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-2-6.png",
		imageAlt: "Waybill printing workflow",
	},
	{
		title: "Track Every Package Step",
		description:
			"Monitor pickup, transit, and delivery milestones with detailed updates. Keep customers informed automatically and capture delivery confirmations.",
		metrics: [
			{ label: "tracking accuracy", value: "99.8%" },
			{ label: "update interval", value: "30 min" },
		],
		image: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-2-5-1.png",
		imageAlt: "Package tracking status dashboard",
	},
	{
		title: "Delivery Performance Analytics",
		description:
			"Use data-driven delivery insights to improve shipping performance, identify bottlenecks, and optimize courier operations continuously.",
		metrics: [
			{ label: "live status visibility", value: "Realtime" },
			{ label: "customer notifications", value: "100%" },
		],
		image: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-2-6.png",
		imageAlt: "Delivery analytics dashboard",
	},
];

export default function ShippingPackingPage() {
	return (
		<main className="bg-background text-foreground min-h-screen w-full">
			<LayoutLines />
			<Navbar />

			<Section className="pb-10">
				<div className="max-w-container mx-auto grid items-center gap-10 lg:grid-cols-2">
					<div>
						<p className="text-primary text-sm font-semibold tracking-[0.22em] uppercase">
							Shipping and Packing Management
						</p>
						<h1 className="mt-4 text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
							Connect Every Step from Checkout to Doorstep
						</h1>
						<p className="text-md text-muted-foreground mt-5 max-w-[66ch] font-medium sm:text-xl">
							Automate order processing, reduce shipping mistakes, and scale
							logistics with less manual effort. Sync orders directly to courier
							systems and track every shipment in one place.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Button asChild size="lg">
								<a href="https://welcome.oms.storemate.cloud/register">
									Register for Free
								</a>
							</Button>
							<Button asChild size="lg" variant="outline">
								<a href="/contact-us">Contact Support</a>
							</Button>
						</div>
					</div>

					<div className="from-muted/40 to-background overflow-hidden rounded-3xl bg-linear-to-br p-2 sm:p-3">
						<img
							src="https://cimacleaners.com.au/wp-content/uploads/2025/09/design-10.jpg"
							alt="Storemate OMS shipping and packing overview"
							className="h-auto w-full rounded-2xl object-cover"
						/>
					</div>
				</div>
			</Section>

			<Section className="pt-0 !border-b-0">
				<div className="max-w-container relative mx-auto">
					<div className="bg-primary/10 pointer-events-none absolute -top-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full blur-3xl" />
					<div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-4">
						{quickBenefits.map((benefit, index) => (
							<article
								key={benefit.title}
								className="relative px-1"
							>
								<div className="flex items-center gap-3">
									<span className="bg-primary text-primary-foreground inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-bold">
										{String(index + 1).padStart(2, "0")}
									</span>
									<div className="bg-border/70 h-px w-14" />
								</div>
								<h2 className="mt-4 text-xl font-semibold leading-snug sm:text-2xl">
									{benefit.title}
								</h2>
								<p className="text-muted-foreground mt-2 text-sm leading-7">
									{benefit.body}
								</p>
							</article>
						))}
					</div>
				</div>
			</Section>

			{workflowSections.map((section, index) => (
				<Section key={section.title} className={index === 0 ? "pt-14" : ""}>
					<div className="max-w-container mx-auto grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
						<div className={cn("lg:col-span-7", index % 2 === 1 && "lg:order-2")}>
							<p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
								Shipping Workflow {String(index + 1).padStart(2, "0")}
							</p>
							<h2 className="mt-3 text-3xl leading-tight font-semibold sm:text-4xl">
								{section.title}
							</h2>
							<p className="text-muted-foreground mt-5 max-w-[72ch] text-base leading-8">
								{section.description}
							</p>
							<div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
								{section.metrics.map((metric) => (
									<div key={metric.label} className="min-w-[180px]">
										<p className="text-muted-foreground text-[11px] font-semibold tracking-[0.14em] uppercase">
											{metric.label}
										</p>
										<p className="from-foreground to-foreground dark:to-brand mt-1 bg-linear-to-r bg-clip-text text-3xl font-semibold text-transparent">
											{metric.value}
										</p>
									</div>
								))}
							</div>
						</div>

						<div className={cn("lg:col-span-5", index % 2 === 1 && "lg:order-1")}>
							<div className="from-muted/40 to-background overflow-hidden rounded-3xl bg-linear-to-br p-2">
								<img
									src={section.image}
									alt={section.imageAlt}
									className="h-auto w-full rounded-2xl object-cover"
								/>
							</div>
						</div>
					</div>
				</Section>
			))}

			<FAQ title="Shipping and Packing Questions, Answered" className="pt-8" />
			<CTA />
			<Footer />
		</main>
	);
}
