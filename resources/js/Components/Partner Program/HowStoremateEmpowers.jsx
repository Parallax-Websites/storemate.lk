import { useState, useEffect, useRef } from 'react';

export default function HowStoremateEmpowers() {
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

    const benefits = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            title: "Effortless Order Centralization",
            description: "Your clients can easily manage all their online orders from platforms like Facebook and WhatsApp in one simple place. This saves time and keeps everything organized.",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Guaranteed Profit Protection",
            description: "Storemate OMS automatically finds duplicate orders and helps block fake customers. This greatly reduces costly returns and fraud, directly protecting your clients' earnings. It ensures the conversion rate.",
            gradient: "from-green-500 to-green-600"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            title: "Seamless Courier Automation",
            description: "Your clients can say goodbye to manual data entry! Orders are automatically sent to courier systems without needing Excel sheets, leading to faster and error-free deliveries.",
            gradient: "from-purple-500 to-purple-600"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Boosted Daily Efficiency",
            description: "From printing waybills with one click to easily managing customer inquiries, Storemate OMS automates boring daily tasks. This allows your clients to focus more on growing their business and less on busywork.",
            gradient: "from-orange-500 to-orange-600"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "A Smart Solution Built for Sri Lanka",
            description: "Storemate OMS isn't just a general tool. It's a smart Order Management System specifically designed to meet the unique needs and challenges faced by online sellers in Sri Lanka.",
            gradient: "from-red-500 to-red-600"
        }
    ];

    return (
        <div ref={componentRef} className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/20 rounded-full blur-xl"></div>
                <div className="absolute top-32 right-20 w-48 h-48 bg-purple-100/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-32 w-40 h-40 bg-green-100/20 rounded-full blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header Section */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {/* Badge */}
                    <div className="mb-8">
                        <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-widest border-2 shadow-lg" style={{
                            color: '#006daf',
                            backgroundColor: '#ffffff',
                            borderColor: '#006daf'
                        }}>
                            💼 CLIENT BENEFITS
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        <span style={{color: '#006daf'}}>STOREMATE OMS</span>
                        <span className="block text-gray-900">How Storemate OMS Empowers Your</span>
                        <span className="block text-gray-900">Clients' Businesses</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        When your clients use Storemate OMS, they gain powerful advantages that streamline their operations and boost their growth.
                    </p>
                </div>

                {/* Creative Layout - 3 items in first row, 2 items in second row */}
                <div className="relative">
                    {/* Top Row - 3 items */}
                    <div className="flex justify-center mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                            {/* 1. Effortless Order Centralization */}
                            <div className={`group transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="relative">
                                    {/* Hexagonal background */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/30 to-blue-300/30 transform rotate-45 rounded-3xl blur-sm"></div>

                                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                                        {/* Floating Icon */}
                                        <div className="absolute -top-6 left-8">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Effortless Order Centralization</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">Your clients can easily manage all their online orders from platforms like Facebook and WhatsApp in one simple place. This saves time and keeps everything organized.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Guaranteed Profit Protection */}
                            <div className={`group transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="relative">
                                    {/* Hexagonal background */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-green-200/30 to-emerald-300/30 transform -rotate-45 rounded-3xl blur-sm"></div>

                                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                                        {/* Floating Icon */}
                                        <div className="absolute -top-6 left-8">
                                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Profit Protection</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">Storemate OMS automatically finds duplicate orders and helps block fake customers. This greatly reduces costly returns and fraud, directly protecting your clients' earnings.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Seamless Courier Automation */}
                            <div className={`group transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="relative">
                                    {/* Hexagonal background */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-200/30 to-purple-300/30 transform rotate-45 rounded-3xl blur-sm"></div>

                                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                                        {/* Floating Icon */}
                                        <div className="absolute -top-6 right-8">
                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Courier Automation</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">Your clients can say goodbye to manual data entry! Orders are automatically sent to courier systems without needing Excel sheets, leading to faster and error-free deliveries.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row - 2 items */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">
                            {/* 4. Boosted Daily Efficiency */}
                            <div className={`group transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="relative">
                                    {/* Hexagonal background */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-200/30 to-orange-300/30 transform -rotate-45 rounded-3xl blur-sm"></div>

                                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                                        {/* Floating Icon */}
                                        <div className="absolute -top-6 left-8">
                                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Boosted Daily Efficiency</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">From printing waybills with one click to easily managing customer inquiries, Storemate OMS automates boring daily tasks. This allows your clients to focus more on growing their business and less on busywork.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 5. A Smart Solution Built for Sri Lanka */}
                            <div className={`group transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="relative">
                                    {/* Hexagonal background */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-red-200/30 to-red-300/30 transform rotate-45 rounded-3xl blur-sm"></div>

                                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                                        {/* Floating Icon */}
                                        <div className="absolute -top-6 right-8">
                                            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">A Smart Solution Built for Sri Lanka</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">Storemate OMS isn't just a general tool. It's a smart Order Management System specifically designed to meet the unique needs and challenges faced by online sellers in Sri Lanka.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
