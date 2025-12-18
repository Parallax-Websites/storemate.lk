import { useState, useEffect } from 'react';

export default function HowItWorks() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const steps = [
        {
            step: "Step 1",
            title: "Receive & Track Inquiries",
            description: "All orders from Facebook, WhatsApp, calls, and Instagram are captured in one clean dashboard.",
            icon: "📥",
            color: "#8B5CF6",
            bgColor: "from-purple-100 to-purple-50",
            position: "top-left"
        },
        {
            step: "Step 2",
            title: "Confirm & Convert to Order",
            description: "Detect duplicates, follow up fast, and confirm real customers before shipping.",
            icon: "✅",
            color: "#10B981",
            bgColor: "from-green-100 to-green-50",
            position: "top-right"
        },
        {
            step: "Step 3",
            title: "Sync with Courier & Print Waybill",
            description: "Send orders to Royal Express or Trans Express in one click. No Excel — just print & pack.",
            icon: "🚚",
            color: "#3B82F6",
            bgColor: "from-blue-100 to-blue-50",
            position: "bottom-left"
        },
        {
            step: "Step 4",
            title: "Monitor Everything Live",
            description: "Track delivery status, order progress, and customer history — all in one place.",
            icon: "📊",
            color: "#F59E0B",
            bgColor: "from-yellow-100 to-yellow-50",
            position: "bottom-right"
        }
    ];

    return (
        <div className="relative py-20 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                    {/* Subtitle with same style as other sections */}
                    <div className="mb-4">
                        <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                            color: '#006daf',
                            backgroundColor: '#ffe6daff'
                        }}>
                            STOREMATE™ OMS
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        How it Works?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Follow our simple 4-step process to transform your order management from chaos to complete control
                    </p>
                </div>

                {/* Flow Diagram */}
                <div className="relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 800 600">
                            <defs>
                                <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <circle cx="20" cy="20" r="2" fill="#D1D5DB"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#dots)"/>
                        </svg>
                    </div>

                    {/* Connection Lines - SVG Paths */}
                    <div className="absolute inset-0 hidden lg:block">
                        <svg className="w-full h-full" viewBox="0 0 800 400">
                            {/* Curved connection from Step 1 to Step 2 */}
                            <path
                                d="M200 120 Q400 80 600 120"
                                stroke="#E5E7EB"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray="8,8"
                                className={`transition-all duration-2000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />
                            {/* Arrow */}
                            <polygon points="590,115 600,120 590,125" fill="#E5E7EB" className={`transition-all duration-2000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}/>

                            {/* Curved connection from Step 2 to Step 3 */}
                            <path
                                d="M600 160 Q500 200 400 240 Q300 280 200 280"
                                stroke="#E5E7EB"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray="8,8"
                                className={`transition-all duration-2000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />
                            {/* Arrow */}
                            <polygon points="210,275 200,280 210,285" fill="#E5E7EB" className={`transition-all duration-2000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}/>

                            {/* Curved connection from Step 3 to Step 4 */}
                            <path
                                d="M240 280 Q400 320 600 280"
                                stroke="#E5E7EB"
                                strokeWidth="3"
                                fill="none"
                                strokeDasharray="8,8"
                                className={`transition-all duration-2000 delay-1200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />
                            {/* Arrow */}
                            <polygon points="590,275 600,280 590,285" fill="#E5E7EB" className={`transition-all duration-2000 delay-1500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}/>
                        </svg>
                    </div>

                    {/* Steps Container */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {steps.map((stepItem, index) => (
                            <div
                                key={index}
                                className={`relative transition-all duration-1000 ${
                                    isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                                } ${
                                    stepItem.position === 'top-right' || stepItem.position === 'bottom-right'
                                        ? 'lg:ml-auto'
                                        : ''
                                } ${
                                    stepItem.position === 'bottom-left' || stepItem.position === 'bottom-right'
                                        ? 'lg:mt-12'
                                        : ''
                                }`}
                                style={{
                                    animationDelay: `${index * 300}ms`,
                                    maxWidth: '380px'
                                }}
                            >
                                {/* Step Card */}
                                <div className={`bg-gradient-to-br ${stepItem.bgColor} rounded-3xl p-8 pt-12 transition-all duration-500 border border-white/50 backdrop-blur-sm relative overflow-hidden group`}>
                                    {/* Floating Icon */}
                                    <div className="absolute -top-3 left-8">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                                            style={{ backgroundColor: stepItem.color }}
                                        >
                                            <span className="text-white text-xl font-bold">{index + 1}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-8">
                                        {/* Step Number */}
                                        <div className="mb-4">
                                            <span
                                                className="text-sm font-bold tracking-widest uppercase"
                                                style={{ color: stepItem.color }}
                                            >
                                                {stepItem.step}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                            {stepItem.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-700 leading-relaxed">
                                            {stepItem.description}
                                        </p>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                                        style={{ backgroundColor: stepItem.color }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
