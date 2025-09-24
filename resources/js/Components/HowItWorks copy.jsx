import React, { useState, useEffect } from "react";
import { useTranslation } from '@/hooks/useTranslation';

const steps = [
	{
		img: "https://cimacleaners.com.au/wp-content/uploads/2025/09/Frame-1.svg",
		title: "Step 1",
		desc: "Register or Login to your account."
	},
	{
		img: "https://cimacleaners.com.au/wp-content/uploads/2025/09/Frame-2.svg",
		title: "Step 2",
		desc: "Place your order with required details."
	},
	{
		img: "https://cimacleaners.com.au/wp-content/uploads/2025/09/Frame-5.svg",
		title: "Step 3",
		desc: "Track your order status in real time."
	},
	{
		img: "https://cimacleaners.com.au/wp-content/uploads/2025/09/Frame-4.svg",
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
		<section className="py-16 px-4 bg-white">
                <div id="what-is-storemate-oms" className={`text-center mb-16 transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                    <div className="mb-4">
                        <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                            color: '#006daf',
                            backgroundColor: '#ffe6daff'
                        }}>
                            {t('howItWorks.badge')}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        {t('howItWorks.title')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                        {t('howItWorks.subtitle')}
                    </p>
                </div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-1 max-w-7xl mx-auto">
				{steps.map((step, idx) => (
					<div key={idx} className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-100">
						<img src={step.img} alt={`Step ${idx + 1}`} className="object-cover w-full h-full" loading="lazy" />
					</div>
				))}
			</div>
		</section>
	);
}
