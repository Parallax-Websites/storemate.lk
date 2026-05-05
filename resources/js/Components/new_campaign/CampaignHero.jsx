import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function CampaignHero({ onOpenTrialForm }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const componentRef = useRef(null);
    const { t } = useTranslation();

    const originalLogos = [
        { src: "https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/09/logo-5.webp", alt: "Courier Partner 1" },
        { src: "https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/09/royalelogo-1.webp", alt: "Royal Express" },
        { src: "https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/09/logo-1-e1758031524438.webp", alt: "Courier Partner 3" },
        { src: "https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/images-2-1.webp", alt: "Domex" },
        { src: "https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/09/332708073_3811654199061580_3846048282845902556_n-Photoroom-e1758020748705.webp", alt: "Trans Express" }
    ];

    const logos = [...originalLogos, ...originalLogos, ...originalLogos];

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 100);

        const interval = setInterval(() => {
            setCurrentLogoIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= originalLogos.length) {
                    setTimeout(() => {
                        const carousel = document.querySelector('.logo-carousel');
                        if (carousel) {
                            carousel.style.transition = 'none';
                            setCurrentLogoIndex(0);
                            setTimeout(() => {
                                carousel.style.transition = 'transform 500ms ease-out';
                            }, 50);
                        }
                    }, 500);
                    return prevIndex;
                }
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={componentRef} className="relative bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                    backgroundSize: '50px 50px'
                }}></div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)' }}></div>
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 40%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0.6) 100%)' }}></div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 60%)' }}></div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0) 50%)' }}></div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(0,109,175,0.1) 15%, rgba(0,109,175,0.05) 50%, rgba(0,109,175,0.1) 85%, rgba(255,255,255,1) 100%)' }}></div>
            </div>

            {/* Hero Content */}
            <main className="pt-2 md:pt-2">
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                    <div className="flex flex-col items-center text-center">

                        <h1 className={`flex flex-col items-center space-y-2 text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight transform transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <span className="text-xl md:text-2xl lg:text-4xl" style={{color: '#006daf'}}>{t('hero.allYour')}</span>
                            <span className="text-gray-900" style={{ fontFamily: 'var(--font-sans)' }}>{t('hero.socialMediaOrders')}</span>
                            <span className="text-gray-900">{t('hero.couriers')}</span>
                            <span className="text-xl md:text-2xl lg:text-4xl" style={{color: '#006daf'}}>{t('hero.inOnePlace')}</span>
                        </h1>

                        <p className={`mb-12 text-xl md:text-1xl text-gray-600 max-w-2xl leading-relaxed transform transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            {t('hero.description')}
                        </p>

                        {/* Image Section */}
                        <div className={`w-full max-w-6xl mx-auto transform transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
                            <div className="relative">
                                <div className="relative rounded-3xl overflow-hidden transition-all duration-500">
                                    <div className="relative p-[20px] rounded-3xl">
                                        <img
                                            src="https://lightcyan-buffalo-783093.hostingersite.com/wp-content/uploads/2025/10/Group-7-1-1.png"
                                            alt="Storemate OMS Dashboard"
                                            className="relative w-full transform transition-all duration-700 hover:scale-[1.03]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA — Get Free Account & WhatsApp Buttons */}
                        <div className={`flex flex-wrap justify-center gap-4 mb-32 mt-8 md:mt-16 transform transition-all duration-700 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <button
                                onClick={onOpenTrialForm}
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-white hover:scale-105 transition-all duration-300"
                                style={{backgroundColor: '#006daf'}}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                {t('nav.startFreeTrial')}
                            </button>
                            <a
                                href="https://wa.me/94777672155"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-white hover:scale-105 transition-all duration-300 bg-[#25D366] hover:bg-[#1da851]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                WhatsApp
                            </a>
                        </div>

                        {/* Partner Logos Carousel */}
                        <div className="relative w-full max-w-4xl mt-8 mb-12 overflow-hidden">
                            <div className="flex items-center">
                                <div className="flex-1 overflow-hidden px-4">
                                    <div className="flex items-center justify-center space-x-8 transition-transform duration-500 ease-out logo-carousel"
                                         style={{ transform: `translateX(-${currentLogoIndex * 33.33}%)` }}>
                                        {logos.map((logo, index) => (
                                            <div key={index} className="flex-shrink-0 w-1/3 flex justify-center transition-all duration-500">
                                                <img
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    className="h-16 w-auto object-contain hover:drop-shadow-[0_0_15px_rgba(0,109,175,0.6)] transition-all"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-2 mt-4">
                                {originalLogos.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentLogoIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentLogoIndex ? 'bg-[#006daf] w-4' : 'bg-[#006daf]/30 hover:bg-[#006daf]/50'}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>
    );
}
