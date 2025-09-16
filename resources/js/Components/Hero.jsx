import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        setIsLoaded(true);

        // Intersection Observer for scroll effect
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
                rootMargin: '50px 0px -50px 0px' // Start animation slightly before element enters view
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
        <div ref={componentRef} className="relative bg-white overflow-hidden">
            {/* Background Pattern and Gradients */}
            <div className="absolute inset-0">
                {/* Simple Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                {/* Top to Bottom Gradient (flipped) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)'
                    }}
                ></div>

                {/* Edge to Middle Gradient (Radial) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.6) 100%)'
                    }}
                ></div>

                {/* Top to Text Area Middle Gradient (flipped) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0) 60%)'
                    }}
                ></div>

                {/* Bottom to White Gradient (underside fade) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to top, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0) 50%)'
                    }}
                ></div>

                {/* Blue gradient fading to white on top and bottom edges */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(0, 109, 175, 0.1) 15%, rgba(0, 109, 175, 0.05) 50%, rgba(0, 109, 175, 0.1) 85%, rgba(255, 255, 255, 1) 100%)'
                    }}
                ></div>
            </div>

            {/* Main Content Section */}
            <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-6 lg:px-8 lg:pt-16">
                <div className="grid lg:grid-cols-2 gap-16 items-end">

                    {/* Left Column - Content */}
                    <div className={`space-y-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} ${isVisible ? 'scale-100' : 'scale-95'}`}>
                        {/* Main Title */}
                        <div className={`transition-all duration-1100 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {t('hero.title')}<br />
                                <span style={{color: '#006daf'}}>{t('hero.titleHighlight')}</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                {t('hero.description')}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className={`transition-all duration-1200 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                            <div className="relative overflow-hidden p-2">
                                <div className="flex animate-scroll space-x-6 items-center">
                                    <div className="flex-shrink-0 p-4 hover:scale-105 transition-all duration-300 group">
                                        <img
                                            src="https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-5.webp"
                                            alt="Courier Partner 1"
                                            className="h-10 w-auto object-contain transition-all duration-300"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 p-4 hover:scale-105 transition-all duration-300 group">
                                        <img
                                            src="https://cimacleaners.com.au/wp-content/uploads/2025/09/royalelogo-1.webp"
                                            alt="Royal Express"
                                            className="h-10 w-auto object-contain transition-all duration-300"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 p-4 hover:scale-105 transition-all duration-300 group">
                                        <img
                                            src="https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-1-e1758031524438.webp"
                                            alt="Courier Partner 3"
                                            className="h-10 w-auto object-contain transition-all duration-300"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 p-4 hover:scale-105 transition-all duration-300 group">
                                        <img
                                            src="https://cimacleaners.com.au/wp-content/uploads/2025/09/domex_logo.webp"
                                            alt="Domex"
                                            className="h-10 w-auto object-contain transition-all duration-300"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 p-4 hover:scale-105 transition-all duration-300 group">
                                        <img
                                            src="https://cimacleaners.com.au/wp-content/uploads/2025/09/332708073_3811654199061580_3846048282845902556_n-Photoroom-e1758020748705.webp"
                                            alt="Trans Express"
                                            className="h-10 w-auto object-contain transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className={`flex items-center space-x-4 transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <a
                                href="https://welcome.oms.storemate.cloud/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                                style={{backgroundColor: '#006daf'}}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#013387'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#006daf'}>
                                {t('nav.startFreeTrial')}
                                <svg
                                    className="inline-block w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <button
                                onClick={() => {
                                    const section = document.getElementById('what-is-storemate-oms');
                                    if (section) {
                                        // If the section exists on current page, scroll to it
                                        section.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        // If not on home page, navigate to home page with hash
                                        window.location.href = '/home#what-is-storemate-oms';
                                    }
                                }}
                                className="font-semibold transition-colors duration-300 flex items-center space-x-2 group"
                                style={{color: '#006daf'}}
                                onMouseEnter={(e) => e.target.style.color = '#013387'}
                                onMouseLeave={(e) => e.target.style.color = '#006daf'}>
                                <span>{t('hero.howItWorks')}</span>
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Dashboard Interface */}
                    <div className={`relative transition-all duration-1000 delay-1000 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'}`}>
                        {/* Dashboard Content */}
                        <div className="relative">
                            {/* Clean dashboard image without styling */}
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src="https://cimacleaners.com.au/wp-content/uploads/2025/09/mockup-Storemate-OMS-1-scaled.jpg"
                                    alt="Storemate OMS Dashboard"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Security Features Section */}
            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <div className="mb-4">
                        <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                            color: '#006daf',
                            backgroundColor: '#ffe6daff'
                        }}>
                            {t('hero.trustedBy')}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        {t('hero.reduceOrders')}
                    </h2>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {/* Feature 1 - Identify Fake Orders */}
                    <div className="relative group md:h-full">
                        <div className="relative md:h-full p-8 transition-all duration-300 transform hover:scale-105 rounded-xl border-2 border-[#006daf]/20">
                            <div className="relative mb-8">
                                <div className="w-16 h-16 flex items-center justify-center transition-all duration-300">
                                    <svg className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="#006daf" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col h-[calc(100%-88px)]">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300" style={{color: '#013387'}}>{t('hero.features.identifyFakeOrders.title')}</h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">{t('hero.features.identifyFakeOrders.description')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 - Know Genuine Customers */}
                    <div className="relative group md:h-full">
                        <div className="relative md:h-full p-8 transition-all duration-300 transform hover:scale-105 rounded-xl border-2 border-[#006daf]/20">
                            <div className="relative mb-8">
                                <div className="w-16 h-16 flex items-center justify-center transition-all duration-300">
                                    <svg className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="#006daf" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col h-[calc(100%-88px)]">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300" style={{color: '#013387'}}>{t('hero.features.knowGenuineCustomers.title')}</h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">{t('hero.features.knowGenuineCustomers.description')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 - Ban Risky Customers */}
                    <div className="relative group md:h-full">
                        <div className="relative md:h-full p-8 transition-all duration-300 transform hover:scale-105 rounded-xl border-2 border-[#006daf]/20">
                            <div className="relative mb-8">
                                <div className="w-16 h-16 flex items-center justify-center transition-all duration-300">
                                    <svg className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="#006daf" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col h-[calc(100%-88px)]">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300" style={{color: '#013387'}}>{t('hero.features.banRiskyCustomers.title')}</h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">{t('hero.features.banRiskyCustomers.description')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 - Verify Before Dispatch */}
                    <div className="relative group md:h-full">
                        <div className="relative md:h-full p-8 transition-all duration-300 transform hover:scale-105 rounded-xl border-2 border-[#006daf]/20">
                            <div className="relative mb-8">
                                <div className="w-16 h-16 flex items-center justify-center transition-all duration-300">
                                    <svg className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="#006daf" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col h-[calc(100%-88px)]">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300" style={{color: '#013387'}}>{t('hero.features.verifyBeforeDispatch.title')}</h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">{t('hero.features.verifyBeforeDispatch.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>
    );
}
