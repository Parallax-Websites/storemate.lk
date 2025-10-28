import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const componentRef = useRef(null);
    const { t } = useTranslation();

    // Duplicate logos for infinite scroll
    const originalLogos = [
        {
            src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-5.webp",
            alt: "Courier Partner 1"
        },
        {
            src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/royalelogo-1.webp",
            alt: "Royal Express"
        },
        {
            src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-1-e1758031524438.webp",
            alt: "Courier Partner 3"
        },
        {
            src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/images-2-1.webp",
            alt: "Domex"
        },
        {
            src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/332708073_3811654199061580_3846048282845902556_n-Photoroom-e1758020748705.webp",
            alt: "Trans Express"
        }
    ];

    // Create an infinite array of logos by duplicating them
    const logos = [...originalLogos, ...originalLogos, ...originalLogos];

    useEffect(() => {
        // Trigger loading animation
        setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        // Start the logo carousel
        const interval = setInterval(() => {
            setCurrentLogoIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                // When reaching the end, instantly reset to start without animation
                if (nextIndex >= originalLogos.length) {
                    setTimeout(() => {
                        // Remove transition temporarily
                        const carousel = document.querySelector('.logo-carousel');
                        if (carousel) {
                            carousel.style.transition = 'none';
                            setCurrentLogoIndex(0);
                            // Re-enable transition after a brief moment
                            setTimeout(() => {
                                carousel.style.transition = 'transform 500ms ease-out';
                            }, 50);
                        }
                    }, 500); // Wait for current transition to complete
                    return prevIndex; // Keep current position during reset
                }
                return nextIndex;
            });
        }, 3000); // Change logo every 3 seconds

        return () => clearInterval(interval);
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

            {/* Security Features Section */}
            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">

                    <div className="font-bold text-gray-900 mb-4 leading-tight text-center">
                        <div className="text-xl lg:text-2xl xl:text-3xl mb-2">{t('hero.fewerReturns.line1')}</div>
                        <div className="text-3xl lg:text-4xl xl:text-5xl mb-2" style={{color: '#006daf'}}>{t('hero.fewerReturns.line2')}</div>
                        <div className="text-xl lg:text-2xl xl:text-3xl mb-2">{t('hero.fewerReturns.line3')}</div>
                    </div>
                    <div className="text-gray-900 mb-4 leading-tight text-center flex justify-center">
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-center mb-8 mx-auto">
                                {t('hero.fewerReturns.description')}
                        </p>
                    </div>


                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {/* Feature 1 - Identify Fake Orders */}
                    <div className="relative group md:h-full">
                        <div className="relative md:h-full p-8 transition-all duration-300 transform hover:scale-105 rounded-xl border-2 border-[#006daf]/20">
                            <div className="relative mb-8">
                                <div className="w-16 h-16 flex items-center justify-center transition-all duration-300">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            {/* Hazard warning triangle */}
                                            <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
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
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                                        </svg>
                                    </div>
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
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" strokeWidth="2"/>
                                        </svg>
                                    </div>
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
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/>
                                        </svg>
                                    </div>
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













