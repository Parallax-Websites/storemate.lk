import { useState, useEffect, useRef } from 'react';

export default function WhoWereLookingFor() {
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
        <div ref={componentRef} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Content Side */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        {/* Badge */}
                        <div className="mb-8">
                            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-widest border-2 shadow-lg" style={{
                                color: '#006daf',
                                backgroundColor: '#ffffff',
                                borderColor: '#006daf'
                            }}>
                                🎯 IDEAL PARTNERS
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
                            Storemate OMS
                            <span className="block" style={{color: '#006daf'}}>Who We're Looking For</span>
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We are actively seeking dynamic and forward-thinking partners who possess a strong network among Sri Lankan SMEs and E-commerce businesses, and who are committed to delivering cutting-edge solutions.
                        </p>


                        {/* CTA Button */}
                        <div className="mt-8">
                            <button
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                style={{backgroundColor: '#006daf'}}
                            >
                                Apply to Become a Partner
                                <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className={`mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-blue-100 to-purple-200 rounded-2xl blur-lg opacity-30"></div>

                            {/* Main image */}
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    className="w-full h-auto object-cover"
                                    src="https://storemate.lk/wp-content/uploads/2025/06/DSC08396-Large-1024x566.jpeg"
                                    alt="Partner Collaboration"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>

                            {/* Stats Card - Half outside, half inside */}
                            <div className="absolute -bottom-8 left-6 right-6 z-10">
                                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
                                    <div className="grid grid-cols-3">
                                        <div className="p-6 text-center border-r border-gray-200">
                                            <div className="text-3xl font-bold mb-1" style={{color: '#006daf'}}>500+</div>
                                            <div className="text-sm text-gray-600 font-medium">SMEs Served</div>
                                        </div>
                                        <div className="p-6 text-center border-r border-gray-200">
                                            <div className="text-3xl font-bold mb-1" style={{color: '#006daf'}}>50+</div>
                                            <div className="text-sm text-gray-600 font-medium">Active Partners</div>
                                        </div>
                                        <div className="p-6 text-center">
                                            <div className="text-3xl font-bold mb-1" style={{color: '#006daf'}}>95%</div>
                                            <div className="text-sm text-gray-600 font-medium">Success Rate</div>
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
