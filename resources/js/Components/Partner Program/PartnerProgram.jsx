import { useState, useEffect, useRef } from 'react';

export default function PartnerProgram() {
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

    return (
        <div ref={componentRef} className="relative bg-gray-900 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://storemate.lk/wp-content/uploads/2025/07/cta_bg_3.jpg"
                    alt="Partner Program Background"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {/* Badge */}
                    <div className="mb-8">
                        <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-widest bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                            🤝 PARTNERSHIP OPPORTUNITIES
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
                        Storemate OMS
                        <span className="block" style={{color: '#006daf'}}>Partner Program</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
                        Are you a Digital Marketing Agency, Business Consultant, or Technology Solutions Provider with a passion for driving success for Sri Lankan online businesses? Partner with Storemate OMS, the leading Order Management System designed exclusively for the local market, and empower your clients with unparalleled efficiency, automation, and profit protection.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 mb-16">
                        <button
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            style={{backgroundColor: '#006daf'}}
                        >
                            Join Partnership Program
                            <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-base font-medium rounded-lg text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                            Learn More About Benefits
                        </button>
                    </div>

                    {/* Partner Types */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Digital Marketing Agencies</h3>
                            <p className="text-gray-300 text-sm">Enhance your service offerings with powerful OMS integration</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v6a2 2 0 002 2h4a2 2 0 002-2V8" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Business Consultants</h3>
                            <p className="text-gray-300 text-sm">Provide comprehensive business solutions with OMS expertise</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Technology Solutions Providers</h3>
                            <p className="text-gray-300 text-sm">Integrate cutting-edge OMS technology into your solutions</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-20">
                <div className="w-96 h-96 rounded-full border-4 border-white/10"></div>
            </div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 opacity-10">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
            </div>
        </div>
    );
}
