import { useState, useEffect } from 'react';

export default function SinhalaTranslationFeatures() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
            ),
            title: 'Instant Auto-Translation',
            description: 'AI-powered translation engine automatically converts between Sinhala and Tamil in real-time',
            benefits: [
                'Real-time translation of customer messages',
                'Automatic product description translation',
                'Order details in customer\'s preferred language'
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: 'Smart Language Detection',
            description: 'Automatically detects whether customer is speaking Sinhala or Tamil based on their input',
            benefits: [
                'Automatic language preference detection',
                'Location-based language suggestions',
                'Customer history-based recommendations'
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
            ),
            title: 'Manual Translation Override',
            description: 'Human translators can review and edit AI translations for perfect accuracy',
            benefits: [
                'Quality control by human reviewers',
                'Cultural context preservation',
                'Industry-specific terminology accuracy'
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
            ),
            title: 'Bilingual Customer Support',
            description: 'Support team can communicate with customers in Sinhala and Tamil seamlessly',
            benefits: [
                'Bilingual support chat',
                'Translation history tracking',
                'Context-aware responses'
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            ),
            title: 'Translation Analytics',
            description: 'Track translation performance, accuracy rates, and customer language preferences',
            benefits: [
                'Translation accuracy metrics',
                'Language preference insights',
                'Performance optimization reports'
            ]
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            ),
            title: 'Easy Integration',
            description: 'Seamlessly integrate translation features into your existing customer communication workflow',
            benefits: [
                'Simple API integration',
                'Plug-and-play functionality',
                'Minimal setup required'
            ]
        }
    ];

    return (
        <section className="py-20 bg-white relative">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-blue-50/20 to-gray-50/30 z-0"></div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="mb-4">
                        <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                            TRANSLATION FEATURES
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Break Language Barriers
                        <br />
                        <span style={{color: '#006daf'}}>Serve Every Sri Lankan Customer</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our advanced translation system ensures no customer is left behind due to language differences.
                        Expand your reach across all communities in Sri Lanka.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{
                                transitionDelay: `${200 + (index * 100)}ms`
                            }}
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full" style={{backgroundColor: '#013387'}}>
                                    <div style={{color: 'white'}}>
                                        {feature.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {feature.description}
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-2">
                                {feature.benefits.map((benefit, benefitIndex) => (
                                    <div key={benefitIndex} className="flex items-start space-x-2">
                                        <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" style={{color: '#013387'}}>
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-600 text-xs leading-relaxed">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
