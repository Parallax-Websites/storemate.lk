import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function HowItWorks() {
    const { t } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);

    const socialIcons = [
        {
            id: 'facebook',
            name: 'Facebook',
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
            </svg>,
            color: '#1877F2',
            gradient: 'linear-gradient(135deg, #1877F2 0%, #2b96ff 100%)'
        },
        {
            id: 'whatsapp',
            name: 'WhatsApp',
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>,
            color: '#25D366',
            gradient: 'linear-gradient(135deg, #25D366 0%, #4ADE80 100%)'
        },
        {
            id: 'instagram',
            name: 'Instagram',
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>,
            color: '#E4405F'
        },
        {
            id: 'phone',
            name: 'Direct Call',
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>,
            color: '#34D399'
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const partnerLogos = [
        {
            id: 'domex-additional',
            name: 'Domex',
            imageUrl: 'https://cimacleaners.com.au/wp-content/uploads/2025/09/domex_logo.webp'
        },
        {
            id: 'logo-5',
            name: 'Trans Ex',
            imageUrl: 'https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-5.webp'
        },
        {
            id: 'royalelogo',
            name: 'Royal Express',
            imageUrl: 'https://cimacleaners.com.au/wp-content/uploads/2025/09/royalelogo-1.webp'
        },
        {
            id: 'logo-1',
            name: 'koombiyo',
            imageUrl: 'https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-1-e1758031524438.webp'
        },

        {
            id: 'domex',
            name: 'FDE Express',
            imageUrl: 'https://cimacleaners.com.au/wp-content/uploads/2025/09/332708073_3811654199061580_3846048282845902556_n-Photoroom-e1758020748705.webp'
        }
    ];

    const monitoringIcons = [
        {
            id: 'delivery-tracking',
            name: 'Delivery Tracking',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>,
            color: '#00ACC1',
            gradient: 'linear-gradient(135deg, #00ACC1 0%, #26C6DA 100%)'
        },
        {
            id: 'order-progress',
            name: 'Order Progress',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>,
            color: '#2196F3',
            gradient: 'linear-gradient(135deg, #2196F3 0%, #42A5F5 100%)'
        },
        {
            id: 'customer-history',
            name: 'Customer History',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
            color: '#7E57C2',
            gradient: 'linear-gradient(135deg, #7E57C2 0%, #9575CD 100%)'
        },
        {
            id: 'live-monitoring',
            name: 'Live Monitoring',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>,
            color: '#F44336',
            gradient: 'linear-gradient(135deg, #F44336 0%, #EF5350 100%)'
        }
    ];

    const featureIcons = [
        {
            id: 'duplicate',
            name: 'Duplicate Detection',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>,
            color: '#2E7D32',
            gradient: 'linear-gradient(135deg, #2E7D32 0%, #43A047 100%)'
        },
        {
            id: 'fast-followup',
            name: 'Fast Follow-ups',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>,
            color: '#1E88E5',
            gradient: 'linear-gradient(135deg, #1E88E5 0%, #42A5F5 100%)'
        },
        {
            id: 'verification',
            name: 'Customer Verification',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>,
            color: '#FB8C00',
            gradient: 'linear-gradient(135deg, #FB8C00 0%, #FFA726 100%)'
        },
        {
            id: 'confirmation',
            name: 'Order Confirmation',
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>,
            color: '#D81B60',
            gradient: 'linear-gradient(135deg, #D81B60 0%, #EC407A 100%)'
        }
    ];

    const steps = [
        {
            number: "1",
            title: t('howItWorks.steps.receive.title'),
            subtitle: t('howItWorks.steps.receive.subtitle'),
            description: t('howItWorks.steps.receive.description'),
            icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
            bgColor: "linear-gradient(135deg, #D81B60 0%, #E91E63 100%)",
            color: "#D81B60",
            details: [
                t('howItWorks.steps.receive.details.0'),
                t('howItWorks.steps.receive.details.1'),
                t('howItWorks.steps.receive.details.2'),
                t('howItWorks.steps.receive.details.3')
            ]
        },
        {
            number: "2",
            title: t('howItWorks.steps.confirm.title'),
            subtitle: t('howItWorks.steps.confirm.subtitle'),
            description: t('howItWorks.steps.confirm.description'),
            icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>,
            bgColor: "linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)",
            color: "#2E7D32",
            details: [
                t('howItWorks.steps.confirm.details.0'),
                t('howItWorks.steps.confirm.details.1'),
                t('howItWorks.steps.confirm.details.2'),
                t('howItWorks.steps.confirm.details.3')
            ]
        },
        {
            number: "3",
            title: t('howItWorks.steps.sync.title'),
            subtitle: t('howItWorks.steps.sync.subtitle'),
            description: t('howItWorks.steps.sync.description'),
            icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>,
            bgColor: "linear-gradient(135deg, #FF9800 0%, #FFC107 100%)",
            color: "#FF9800",
            details: [
                t('howItWorks.steps.sync.details.0'),
                t('howItWorks.steps.sync.details.1'),
                t('howItWorks.steps.sync.details.2'),
                t('howItWorks.steps.sync.details.3')
            ]
        },
        {
            number: "4",
            title: t('howItWorks.steps.monitor.title'),
            subtitle: t('howItWorks.steps.monitor.subtitle'),
            description: t('howItWorks.steps.monitor.description'),
            icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>,
            bgColor: "linear-gradient(135deg, #00ACC1 0%, #26C6DA 100%)",
            color: "#00ACC1",
            details: [
                t('howItWorks.steps.monitor.details.0'),
                t('howItWorks.steps.monitor.details.1'),
                t('howItWorks.steps.monitor.details.2'),
                t('howItWorks.steps.monitor.details.3')
            ]
        }
    ];

    return (
        <div className="relative py-20 px-4 sm:px-6 lg:px-8 lg:mb-20">
            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
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
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-36">
                        {t('howItWorks.subtitle')}
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
                                {/* Social Icons - Desktop */}
                                <div className="hidden lg:block relative w-full h-0">
                                    {socialIcons.map((icon, index) => {
                                        // Custom positions for each icon to match the design
                                        const positions = [
                                            { x: 80, y: -40 },   // Facebook - top right
                                            { x: -80, y: -40 },  // WhatsApp - top left
                                            { x: -160, y: 40 },   // Instagram - bottom left
                                            { x: -160, y: 160 }     // Phone - bottom right
                                        ];
                                        const pos = positions[index];

                                        return (
                                            <button
                                                key={icon.id}
                                                className="absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-white backdrop-blur-sm hover:backdrop-blur-md group"
                                                style={{
                                                    left: `calc(50% + ${pos.x}px)`,
                                                    top: `calc(50% + ${pos.y}px)`,
                                                    background: icon.gradient || icon.color,
                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                                }}
                                            >
                                                {icon.icon}
                                                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    {icon.name}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Social Icons - Mobile */}
                                <div className="flex lg:hidden gap-3 mb-6 justify-center">
                                    {socialIcons.map((icon) => (
                                        <button
                                            key={icon.id}
                                            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white relative group shadow-md"
                                            style={{
                                                backgroundColor: icon.color,
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                            }}
                                        >
                                            {icon.icon}
                                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                {icon.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>

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
                                {/* Feature Icons - Desktop */}
                                <div className="hidden lg:block relative w-full h-0">
                                    {featureIcons.map((icon, index) => {
                                        const positions = [
                                            { x: -160, y: 120 },    // Duplicate Detection - top right
                                            { x: -80, y: -40 },   // Fast Follow-ups - top left
                                            { x: -160, y: 40 },   // Customer Verification - bottom left
                                            { x: 160, y: 40 }     // Order Confirmation - bottom right
                                        ];
                                        const pos = positions[index];

                                        return (
                                            <button
                                                key={icon.id}
                                                className="absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-white backdrop-blur-sm hover:backdrop-blur-md group"
                                                style={{
                                                    left: `calc(50% + ${pos.x}px)`,
                                                    top: `calc(50% + ${pos.y}px)`,
                                                    background: icon.gradient,
                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                                }}
                                            >
                                                {icon.icon}
                                                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    {icon.name}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="text-center max-w-64 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-green-300/80 transform transition-all duration-300 group-hover:scale-105 group-hover:border-green-400/90">
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
                                {/* Partner Logos - Desktop */}
                                <div className="hidden lg:block relative w-full h-0">
                                    {partnerLogos.map((logo, index) => {
                                        // Custom positions for each logo
                                        const positions = [
                                            { x: -180, y: 170 },     // Far Left
                                            { x: -180, y: 60 },    // Left
                                            { x: -180, y: 280 },   // Left Top
                                            { x: 180, y: 160 },      // Far Right
                                            { x: 180, y: 60 },     // Right
                                            { x: 180, y: -180 }     // Right Top
                                        ];
                                        const pos = positions[index];

                                        return (
                                            <div
                                                key={logo.id}
                                                className="absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm hover:backdrop-blur-md group bg-white/90"
                                                style={{
                                                    left: `calc(50% + ${pos.x}px)`,
                                                    top: `calc(50% + ${pos.y}px)`,
                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                                }}
                                            >
                                                <img
                                                    src={logo.imageUrl}
                                                    alt={logo.name}
                                                    className="w-12 h-12 object-contain"
                                                />
                                                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    {logo.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

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
                                {/* Monitoring Icons - Desktop */}
                                <div className="hidden lg:block relative w-full h-0">
                                    {monitoringIcons.map((icon, index) => {
                                        const positions = [
                                            { x: -160, y: -40 },   // Delivery Tracking - Top Left
                                            { x: 160, y: -40 },    // Order Progress - Top Right
                                            { x: -160, y: 80 },    // Customer History - Bottom Left
                                            { x: 160, y: 80 }      // Live Monitoring - Bottom Right
                                        ];
                                        const pos = positions[index];

                                        return (
                                            <button
                                                key={icon.id}
                                                className="absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-white backdrop-blur-sm hover:backdrop-blur-md group"
                                                style={{
                                                    left: `calc(50% + ${pos.x}px)`,
                                                    top: `calc(50% + ${pos.y}px)`,
                                                    background: icon.gradient,
                                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                                }}
                                            >
                                                {icon.icon}
                                                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    {icon.name}
                                                </span>
                                            </button>
                                        );
                                    })}
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

                    {/* Mobile Section Divider */}
                    <div className="lg:hidden mt-12">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-70"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
