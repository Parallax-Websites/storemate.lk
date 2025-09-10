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
            number: "1",
            title: "RECEIVE",
            subtitle: "Receive & Track Inquiries",
            description: "All orders from Facebook, WhatsApp, calls, and Instagram are captured in one clean dashboard.",
            icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
            bgColor: "linear-gradient(135deg, #D81B60 0%, #E91E63 100%)",
            color: "#D81B60",
            details: [
                "Facebook integration",
                "WhatsApp management",
                "Call tracking",
                "Instagram orders"
            ]
        },
        {
            number: "2",
            title: "CONFIRM",
            subtitle: "Confirm & Convert to Order",
            description: "Detect duplicates, follow up fast, and confirm real customers before shipping.",
            icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>,
            bgColor: "linear-gradient(135deg, #FF6F00 0%, #FF9800 100%)",
            color: "#FF6F00",
            details: [
                "Duplicate detection",
                "Fast follow-ups",
                "Customer verification",
                "Order confirmation"
            ]
        },
        {
            number: "3",
            title: "SYNC",
            subtitle: "Sync with Courier & Print Waybill",
            description: "Send orders to Royal Express or Trans Express in one click. No Excel — just print & pack.",
            icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>,
            bgColor: "linear-gradient(135deg, #FF9800 0%, #FFC107 100%)",
            color: "#FF9800",
            details: [
                "Royal Express sync",
                "Trans Express sync",
                "One-click shipping",
                "Waybill printing"
            ]
        },
        {
            number: "4",
            title: "MONITOR",
            subtitle: "Monitor Everything Live",
            description: "Track delivery status, order progress, and customer history — all in one place.",
            icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>,
            bgColor: "linear-gradient(135deg, #00ACC1 0%, #26C6DA 100%)",
            color: "#00ACC1",
            details: [
                "Delivery tracking",
                "Order progress",
                "Customer history",
                "Live monitoring"
            ]
        }
    ];

    return (
        <div className="relative py-20 px-4 sm:px-6 lg:px-8 mb-20">
            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                    <div className="mb-4">
                        <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                            color: '#006daf',
                            backgroundColor: '#ffe6daff'
                        }}>
                            STOREMATE™ PROCESS
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
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-36">
                        Follow our simple 4-step process to transform your order management from chaos to complete control
                    </p>
                </div>

                {/* Wave Flow Design */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Desktop Layout */}
                    <div className="hidden lg:block relative h-[600px]">
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-orange-50/30 rounded-3xl"></div>

                        {/* Center Wave Line */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 600">
                            {/* Main Wave Path with enhanced styling */}
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#006daf" />
                                    <stop offset="50%" stopColor="#0077cc" />
                                    <stop offset="100%" stopColor="#006daf" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 50 300 Q 200 220 350 300 T 650 300 T 950 300"
                                stroke="url(#waveGradient)"
                                strokeWidth="5"
                                fill="none"
                                strokeDasharray="15,8"
                                className={`transition-all duration-3000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                                style={{
                                    strokeDashoffset: isLoaded ? '0' : '100',
                                    transition: 'stroke-dashoffset 3s ease-out'
                                }}
                            />
                        </svg>

                        {/* Step Components */}
                        {/* Step 1 - Top Left */}
                        <div
                            className={`absolute transition-all duration-1000 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{
                                left: '10px',
                                top: '-70px',
                                transitionDelay: '500ms',
                                zIndex: 20
                            }}
                        >
                            <div className="flex flex-col items-center group">
                                <div className="text-center max-w-64 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-pink-300/80 mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:border-pink-400/90">
                                    <h3 className="font-bold text-gray-900 mb-3 text-base">{steps[0].subtitle}</h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{steps[0].description}</p>
                                    <div className="space-y-2">
                                        {steps[0].details.map((detail, idx) => (
                                            <div key={idx} className="text-sm text-gray-700 flex items-center">
                                                <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: steps[0].color }}></span>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className="w-24 h-24 flex flex-col items-center justify-center text-white cursor-pointer transform transition-all duration-500 rounded-2xl shadow-2xl relative overflow-hidden group-hover:scale-110"
                                    style={{ background: steps[0].bgColor }}
                                >
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="text-xl font-black mb-1 relative z-10">{steps[0].number}</div>
                                    <div className="text-sm font-bold tracking-wider mb-1 relative z-10">{steps[0].title}</div>
                                    <div className="relative z-10 text-white">{steps[0].icon}</div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 - On wave */}
                        <div
                            className={`absolute transition-all duration-1000 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{
                                left: '310px',
                                top: '280px',
                                transitionDelay: '700ms',
                                zIndex: 20
                            }}
                        >
                            <div className="flex flex-col items-center group">
                                <div
                                    className="w-24 h-24 flex flex-col items-center justify-center text-white cursor-pointer transform transition-all duration-500 rounded-2xl shadow-2xl relative overflow-hidden group-hover:scale-110 mb-6"
                                    style={{ background: steps[1].bgColor }}
                                >
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="text-xl font-black mb-1 relative z-10">{steps[1].number}</div>
                                    <div className="text-sm font-bold tracking-wider mb-1 relative z-10">{steps[1].title}</div>
                                    <div className="relative z-10 text-white">{steps[1].icon}</div>
                                </div>
                                <div className="text-center max-w-64 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-orange-300/80 transform transition-all duration-300 group-hover:scale-105 group-hover:border-orange-400/90">
                                    <h3 className="font-bold text-gray-900 mb-3 text-base">{steps[1].subtitle}</h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{steps[1].description}</p>
                                    <div className="space-y-2">
                                        {steps[1].details.map((detail, idx) => (
                                            <div key={idx} className="text-sm text-gray-700 flex items-center">
                                                <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: steps[1].color }}></span>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 - Top */}
                        <div
                            className={`absolute transition-all duration-1000 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{
                                left: '610px',
                                top: '-70px',
                                transitionDelay: '900ms',
                                zIndex: 20
                            }}
                        >
                            <div className="flex flex-col items-center group">
                                <div className="text-center max-w-64 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-yellow-300/80 mb-6 transform transition-all duration-300 group-hover:scale-105 group-hover:border-yellow-400/90">
                                    <h3 className="font-bold text-gray-900 mb-3 text-base">{steps[2].subtitle}</h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{steps[2].description}</p>
                                    <div className="space-y-2">
                                        {steps[2].details.map((detail, idx) => (
                                            <div key={idx} className="text-sm text-gray-700 flex items-center">
                                                <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: steps[2].color }}></span>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className="w-24 h-24 flex flex-col items-center justify-center text-white cursor-pointer transform transition-all duration-500 rounded-2xl shadow-2xl relative overflow-hidden group-hover:scale-110"
                                    style={{ background: steps[2].bgColor }}
                                >
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="text-xl font-black mb-1 relative z-10">{steps[2].number}</div>
                                    <div className="text-sm font-bold tracking-wider mb-1 relative z-10">{steps[2].title}</div>
                                    <div className="relative z-10 text-white">{steps[2].icon}</div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 - On wave */}
                        <div
                            className={`absolute transition-all duration-1000 ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{
                                left: '900px',
                                top: '280px',
                                transitionDelay: '1100ms',
                                zIndex: 20
                            }}
                        >
                            <div className="flex flex-col items-center group">
                                <div
                                    className="w-24 h-24 flex flex-col items-center justify-center text-white cursor-pointer transform transition-all duration-500 rounded-2xl shadow-2xl relative overflow-hidden group-hover:scale-110 mb-6"
                                    style={{ background: steps[3].bgColor }}
                                >
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="text-xl font-black mb-1 relative z-10">{steps[3].number}</div>
                                    <div className="text-sm font-bold tracking-wider mb-1 relative z-10">{steps[3].title}</div>
                                    <div className="relative z-10 text-white">{steps[3].icon}</div>
                                </div>
                                <div className="text-center max-w-64 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-cyan-300/80 transform transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/90">
                                    <h3 className="font-bold text-gray-900 mb-3 text-base">{steps[3].subtitle}</h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{steps[3].description}</p>
                                    <div className="space-y-2">
                                        {steps[3].details.map((detail, idx) => (
                                            <div key={idx} className="text-sm text-gray-700 flex items-center">
                                                <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: steps[3].color }}></span>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden space-y-12">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`transition-all duration-1000 ${
                                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 300}ms` }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="w-24 h-24 flex flex-col items-center justify-center text-white mb-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                                        style={{ background: step.bgColor }}
                                    >
                                        <div className="text-lg font-black mb-1">{step.number}</div>
                                        <div className="text-xs font-bold tracking-wider mb-1">{step.title}</div>
                                        <div className="text-white">{step.icon}</div>
                                    </div>

                                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.subtitle}</h3>
                                    <p className="text-sm text-gray-600 mb-6 max-w-sm">{step.description}</p>

                                    <div className="bg-white rounded-lg p-4 shadow-sm max-w-sm w-full border border-gray-100">
                                        <div className="grid grid-cols-2 gap-3">
                                            {step.details.map((detail, idx) => (
                                                <div key={idx} className="text-sm text-gray-700">• {detail}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile connector */}
                                {index < steps.length - 1 && (
                                    <div className="flex justify-center mt-8">
                                        <div
                                            className="w-2 h-12 rounded-full opacity-50"
                                            style={{ backgroundColor: step.color }}
                                        ></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
