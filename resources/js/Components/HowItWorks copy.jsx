import React, { useState, useEffect } from "react";
import { useTranslation } from '@/hooks/useTranslation';

const steps = [
	{
		number: 1,
		img: "https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/Group-7.png",
		title: "Collect",
		desc: "Collect Orders From Facebook, WhatsApp, Instagram, & Phone Calls",
		bgColor: "#2780D3"
	},
	{
		number: 2,
		img: "https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/Group-10.png",
		title: "Confirm",
		desc: "Reduce Duplicate Orders & Confirm Orders Quickly With Automated Follow-Ups",
		bgColor: "#2780D3"
	},
	{
		number: 3,
		img: "https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/Group-9.png",
		title: "Sync",
		desc: "Connect With Any Courier Partner And Print Waybill With One Click",
		bgColor: "#2780D3"
	},
	{
		number: 4,
		img: "https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/Group-8.png",
		title: "Monitor",
		desc: "Track Delivery Status, Order Progress, & Customer History All In One Place",
		bgColor: "#2780D3"
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
		<>
			{/* Add floating animation styles */}
			<style>{`
				@keyframes float {
					0%, 100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-10px);
					}
				}
				.animate-float {
					animation: float 3s ease-in-out infinite;
				}
			`}</style>

		<section className="py-16 md:px-4">
			<div id="what-is-storemate-oms" className={`text-center mb-16 px-4 transition-all duration-1000 ${
				isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
			}`}>
				{/* Title */}
				<div className="font-bold text-gray-900 mb-4 leading-tight text-center">
					<div className="text-xl lg:text-2xl xl:text-3xl mb-2">
						{t('howItWorks.title.line1', 'From Inquiry to Delivery')}
					</div>
					<div className="text-3xl lg:text-4xl xl:text-5xl mb-2" style={{ color: '#2780D3' }}>
						{t('howItWorks.title.line2', '4 Simple Steps')}
					</div>
				</div>

				<div className="text-gray-900 mb-4 leading-tight text-center flex justify-center">
					<p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-center mb-8 mx-auto">
						{t('howItWorks.subtitle', 'Streamline your order management from collection to delivery')}
					</p>
				</div>
			</div>

			{/* Steps Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 max-w-6xl mx-auto px-4">
				{steps.map((step, idx) => (
					<div
						key={idx}
						className={`transition-all duration-700 ${
							isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
						}`}
						style={{ transitionDelay: `${idx * 100}ms` }}
					>
						{/* Card Container */}
						<div className="relative group h-full">
							{/* Social Media Icons - Only for Step 1 */}
							{step.number === 1 && (
								<>
									{/* Facebook Icon - Top Left */}
									<div className="absolute -left-8 -top-4 z-30 w-10 h-10 md:w-14 md:h-14">
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/facebook-1.png"
											alt="Facebook"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* WhatsApp Icon - Top Right */}
									<div className="absolute right-16 -top-8 z-30 w-10 h-10 md:w-14 md:h-14" style={{ animationDelay: '0.3s' }}>
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/social-1-1.png"
											alt="WhatsApp"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* Instagram Icon - Bottom Right */}
									<div className="absolute -right-6 bottom-64 z-30 w-10 h-10 md:w-14 md:h-14" style={{ animationDelay: '0.6s' }}>
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/instagram.png"
											alt="Instagram"
											className="w-full h-full object-contain"
										/>
									</div>
								</>
							)}

							{/* Icons for Step 2 */}
							{step.number === 2 && (
								<>
									{/* Social Media Icon - Top Left */}
									<div className="absolute left-8 -top-10 z-30 w-12 h-12 md:w-20 md:h-20">
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/social-media.png"
											alt="Social Media"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* Like Icon - Top Right */}
									<div className="absolute right-10 -top-8 z-30 w-10 h-10 md:w-16 md:h-16" style={{ animationDelay: '0.3s' }}>
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/like-1.png"
											alt="Like"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* Duplicate Icon - Bottom Right */}
									<div className="absolute -right-6 bottom-64 z-30 w-10 h-10 md:w-16 md:h-16" style={{ animationDelay: '0.6s' }}>
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/duplicate-1.png"
											alt="Duplicate"
											className="w-full h-full object-contain"
										/>
									</div>
								</>
							)}

							{/* Courier Company Logos - Only for Step 3 */}
							{step.number === 3 && (
								<>
									{/* Kachiyo Logo - Top Left */}
									<div className="absolute -left-4 top-2 z-30 w-16 h-16 md:w-24 md:h-24 p-1 flex items-center justify-center">
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/logo-1-1-1.png"
											alt="Kachiyo"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* Domex Logo - Top Center */}
									<div className="absolute left-1/2 transform -translate-x-1/2 -top-8 z-30 w-24 h-14 md:w-32 md:h-16 p-1 flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/50283536_324614421513330_5290814888745107456_n-Photoroom.png"
											alt="Domex"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* Royal Express Logo - Top Right */}
									<div className="absolute -right-2 top-4 z-30 w-16 h-16 md:w-20 md:h-16 p-1 flex items-center justify-center" style={{ animationDelay: '0.4s' }}>
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/royalelogo-1-1-1.png"
											alt="Royal Express"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* TransEx Logo - Bottom Left */}
									<div className="absolute -left-4 top-16 z-30 w-16 h-16 md:w-20 md:h-20 p-1 flex items-center justify-center" style={{ animationDelay: '0.6s' }}>
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/logo-5-1.png"
											alt="TransEx"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* FDL Logo - Bottom Right */}
									<div className="absolute -right-6 top-24 z-30 w-16 h-12 md:w-20 md:h-12 p-1 flex items-center justify-center" style={{ animationDelay: '0.8s' }}>
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/logo_03_06_08_logo-light-1.png"
											alt="FDL"
											className="w-full h-full object-contain"
										/>
									</div>
								</>
							)}

							{/* Icons for Step 4 - Monitor */}
							{step.number === 4 && (
								<>
									{/* Pie Graph Icon - Top Left */}
									<div className="absolute -left-4 top-8 z-30 w-14 h-14 md:w-12 md:h-12">
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/pie-graph-1.png"
											alt="Pie Graph"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* Diagram Icon - Top Right */}
									<div className="absolute -right-4 z-30 w-14 h-14 md:w-12 md:h-12" style={{ animationDelay: '0.3s' }}>
										<img
											src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/diagram-1.png"
											alt="Diagram"
											className="w-full h-full object-contain"
										/>
									</div>
								</>
							)}



							{/* Main Card */}
							<div
								className="relative w-full h-full min-h-[400px] rounded-[14px] transition-transform duration-300 md:hover:scale-105"
								style={{ background: 'transparent' }}
							>
								{/* Illustration Container with Background Circles */}
								<div className="relative w-full h-[200px] overflow-hidden rounded-t-[14px] bg-gradient-to-b from-gray-50 to-white">
									{/* Background decorative circles */}
									<div className="absolute w-[500px] h-[320px] -left-[130px] -top-[70px] bg-white rounded-full opacity-80" />
									<div className="absolute w-[260px] h-[280px] -left-[130px] -top-[140px] bg-[#F1F8FF] rounded-full" />

									{/* Image */}
									<div className="relative z-10 w-full h-full flex items-center justify-center p-8">
										<img
											src={step.img}
											alt={`${step.title}`}
											className="object-contain w-full h-full"
											loading="lazy"
										/>
									</div>

									{/* Decorative corner element - top left */}
									<div className="absolute w-[70px] h-[70px] -left-[38px] -top-[15px] transform -rotate-6 opacity-40 z-0">
										<div className="w-full h-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl" />
									</div>

									{/* Decorative corner element - top right */}
									<div className="absolute w-[57px] h-[57px] right-[0px] -top-[33px] transform -rotate-6 opacity-40 z-0">
										<div className="w-full h-full bg-gradient-to-br from-[#40B9FF] to-[#2780D3] rounded-xl" />
									</div>
								</div>

								{/* Wave Divider - Curved Top for Blue Section */}
								<div className="relative w-full" style={{ marginTop: '-2px' }}>
									<svg
										viewBox="0 0 500 80"
										preserveAspectRatio="none"
										className="w-full h-[40px]"
										style={{ display: 'block' }}
									>
										<path
											d="M0,0 Q250,80 500,0 L500,80 L0,80 Z"
											fill={step.bgColor}
										/>
									</svg>
								</div>

								{/* Blue Content Section */}
								<div
									className="px-4 pt-2 pb-6 text-center rounded-b-[14px]"
									style={{ background: step.bgColor, marginTop: '-2px' }}
								>
									{/* Title */}
									<h3 className="text-white text-[22px] font-semibold mb-2 mt-2 leading-tight">
										{t(`howItWorks.steps.step${step.number}.title`, step.title)}
									</h3>

									{/* Description */}
									<p className="text-white text-[14px] font-normal leading-[18px]">
										{t(`howItWorks.steps.step${step.number}.description`, step.desc)}
									</p>
								</div>
							</div>

							{/* Step Number Badge */}
							<div className="absolute w-[55px] h-[55px] left-1/2 transform -translate-x-1/2 top-[175px] z-20">
								<div className="w-full h-full bg-white rounded-full border-2 border-[#2780D3] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
									<span className="text-[#2780D3] text-[30px] font-semibold">
										{step.number}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
		</>
	);
}
