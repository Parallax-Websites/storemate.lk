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

            {/* Hero Content */}
            <main className="pt-2 md:pt-2">
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                    <div className="flex flex-col items-center text-center">

                        <h1 className={`flex flex-col items-center space-y-2 text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight transform transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <span className="text-2xl md:text-3xl lg:text-5xl" style={{color: '#006daf'}}>{t('hero.allYour')}</span>
                            <span className="text-gray-900" style={{ fontFamily: 'var(--font-sans)' }}>{t('hero.socialMediaOrders')}</span>
                            <span className="text-gray-900">{t('hero.couriers')}</span>
                            <span className="text-2xl md:text-3xl lg:text-5xl" style={{color: '#006daf'}}>{t('hero.inOnePlace')}</span>
                        </h1>

                        <p className={`mb-12 text-xl md:text-1xl text-gray-600 max-w-2xl leading-relaxed transform transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            {t('hero.description')}
                        </p>

                        {/* Image Section */}
                        <div className={`w-full max-w-6xl mx-auto transform transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
                            <div className="relative">
                                {/* Overlap background - top and right only */}
                                {/* <div
                                    className="absolute right-0 top-0 w-full h-full border border-[#006daf]/30"
                                    style={{
                                        transform: 'translate(24px, -24px)',
                                        borderTopRightRadius: '20px',
                                        borderTopLeftRadius: '20px',
                                        borderBottomRightRadius: '20px'
                                    }}
                                ></div> */}

                                {/* Main image container */}
                                <div className="relative rounded-3xl overflow-hidden  transition-all duration-500">
                                    {/* Main content container */}
                                    <div className="relative p-[20px] rounded-3xl ">
                                        <img
                                            src="https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-7-1-1.png"
                                            alt="Storemate OMS Dashboard"
                                            className="relative w-full transform transition-all duration-700 hover:scale-[1.03]"
                                        />
                                    </div>
                                </div>



                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-wrap justify-center gap-4 mb-32 mt-16 transform transition-all duration-700 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <a
                                href="https://welcome.oms.storemate.cloud/register?utm_source=storemate_lk&utm_medium=web&utm_campaign=home_page&utm_content=btn_start_a_free_trial_hero"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
                                style={{backgroundColor: '#006daf'}}
                            >
                                {t('nav.startFreeTrial')}
                                <svg className="ml-2 -mr-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <button
                                onClick={() => {
                                    const section = document.getElementById('what-is-storemate-oms');
                                    section?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group inline-flex items-center gap-3 px-6 py-3 border-2 rounded-full shadow-sm text-base font-medium hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
                                style={{borderColor: '#006daf', color: '#006daf'}}
                            >
                                <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 group-hover:border-white group-hover:bg-white/20 transition-all duration-300"
                                    style={{borderColor: '#006daf'}}>
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                                {t('hero.howItWorks')}
                            </button>
                        </div>
                        {/* Partner Logos Carousel */}
                        <div className="relative w-full max-w-4xl mt-8 mb-12 overflow-hidden">
                            <div className="flex items-center">
                                {/* Logos Container */}
                                <div className="flex-1 overflow-hidden px-4">
                                    <div className="flex items-center justify-center space-x-8 transition-transform duration-500 ease-out logo-carousel"
                                         style={{ transform: `translateX(-${currentLogoIndex * 33.33}%)` }}>
                                        {logos.map((logo, index) => (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 w-1/3 flex justify-center transition-all duration-500"
                                            >
                                                <img
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    className="h-16 w-auto object-contain hover:drop-shadow-[0_0_15px_rgba(0,109,175,0.6)] transition-all"
                                                    onTransitionEnd={(e) => {
                                                        // When a transition ends and we're at the end of the first set
                                                        if (currentLogoIndex >= originalLogos.length - 1) {
                                                            // Reset to the beginning instantly without animation
                                                            setCurrentLogoIndex(0);
                                                        }
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center space-x-2 mt-4">
                                {originalLogos.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentLogoIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300
                                            ${index === currentLogoIndex
                                                ? 'bg-[#006daf] w-4'
                                                : 'bg-[#006daf]/30 hover:bg-[#006daf]/50'}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>
    );
}













