import { useState, useEffect, useRef } from 'react';

export default function ExclusiveBenefits() {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for scroll effect
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px -50px 0px'
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    const stats = [
        {
            number: "500+",
            label: "Success Stories",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: "from-green-500 to-emerald-600"
        },
        {
            number: "10+",
            label: "Years Experience",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: "from-blue-500 to-blue-600"
        },
        {
            number: "25+",
            label: "Industries Supported",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            gradient: "from-purple-500 to-purple-600"
        }
    ];

    const benefits = [
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Earn ongoing referral revenue",
            description: "Get a percentage of the monthly fee for every client you bring, for as long as they stay with us. This means a steady and continuous income stream for your business.",
            linkText: "See Pricing",
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-100/50 to-emerald-100/50"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4.06 13.06L10.06 19l1.46-1.46L5.46 11.54zM12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ),
            title: "Become a Complete Solution Provider",
            description: "By introducing Storemate OMS, you enable yourself to offer an \"all-in-one\" solution to your clients, helping them manage their entire online business journey, from capturing leads to successful deliveries. This makes you a more valuable partner to them.",
            gradient: "from-blue-500 to-blue-600",
            bgGradient: "from-blue-100/50 to-blue-200/50"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Boost Your Strategic Consulting",
            description: "Storemate OMS provides your client's insights and data about their sales and operations. This powerful data allows you to offer more accurate, data-driven marketing strategies and smarter business advice, making your consulting services even more effective and indispensable.",
            gradient: "from-purple-500 to-purple-600",
            bgGradient: "from-purple-100/50 to-purple-200/50"
        }
    ];

    return (
        <div ref={componentRef} className="py-20 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-32 right-16 w-56 h-56 bg-gray-100/20 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Title and Stats */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {/* Title Section */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Exclusive Benefits for Our Valued Partners
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Partnering with Storemate OMS brings great advantages for you.
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`group transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                >
                                    <div className="relative h-full">
                                        <div
                                            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full min-h-[160px] flex flex-col justify-center"
                                            style={{backgroundColor: '#006daf'}}
                                        >
                                            {/* Star Icon */}
                                            <div className="mb-4 flex justify-center">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            </div>

                                            {/* Number */}
                                            <div className="text-3xl font-bold mb-2">{stat.number}</div>

                                            {/* Label */}
                                            <div className="text-sm font-medium opacity-90">{stat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Benefits */}
                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`group transition-all duration-1000 delay-${600 + (index * 200)} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg"
                                            style={{backgroundColor: '#006daf'}}
                                        >
                                            {benefit.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-3">{benefit.description}</p>

                                        {benefit.linkText && (
                                            <a
                                                href="/pricing"
                                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                                                style={{color: '#006daf'}}
                                            >
                                                {benefit.linkText}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
