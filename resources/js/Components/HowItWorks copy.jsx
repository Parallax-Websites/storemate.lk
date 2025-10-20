import React, { useState, useEffect } from "react";
import { useTranslation } from '@/hooks/useTranslation';

const steps = [
	{
		img: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-4-1.png",
		title: "Step 1",
		desc: "Register or Login to your account."
	},
	{
		img: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-3-1-1.png",
		title: "Step 2",
		desc: "Place your order with required details."
	},
	{
		img: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-3-2.png",
		title: "Step 3",
		desc: "Track your order status in real time."
	},
	{
		img: "https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-6-1.png",
		title: "Step 4",
		desc: "Receive your delivery and rate the service."
	}
];

export default function HowItWorksImages() {
	const { t } = useTranslation();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<section className="py-16 md:px-4 bg-white">
				<div id="what-is-storemate-oms" className={`text-center mb-8 md:mb-16 px-4 transition-all duration-1000 ${
					isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
				}`}>

					{/* Redesigned multi-line title (matches sample) */}
					<div className="font-bold text-gray-900 mb-4 leading-tight text-center">
						<div className="text-xl lg:text-2xl xl:text-3xl mb-2">
							{t('howItWorks.title.line1', 'From Inquiry to Delivery - howItWorks.title.line1')}
						</div>
						<div className="text-3xl lg:text-4xl xl:text-5xl mb-2" style={{ color: '#006daf' }}>
							{t('howItWorks.title.line2', '4 Simple Steps - howItWorks.title.line2')}
						</div>
					</div>

					<div className="text-gray-900 mb-4 leading-tight text-center flex justify-center">
						<p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-center mb-8 mx-auto">
							{t('howItWorks.subtitle', 'Detect fake orders, validate genuine customers, and pack only verified deliveries.')}
						</p>
					</div>
				</div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-1 md:max-w-7xl md:mx-auto">
				{steps.map((step, idx) => (
					<div key={idx} className="flex flex-col items-center justify-center transition-transform duration-300 md:hover:scale-105 h-full">
						<img src={step.img} alt={`Step ${idx + 1}`} className="object-contain w-7/10 h-auto" loading="lazy" />
					</div>
				))}
			</div>
		</section>
	);
}
