import { useState, useEffect } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';

const heroTranslations = {
    en: {
        headline: 'Handling 500+ Lead Form Orders?',
        subheadline: 'Stop wasting hours on messy Excel sheets and manual data entry. Automate your order workflow with StoreMate OMS and scale your business with zero friction.',
        cta: 'Get Your Free Account',
        trust1: '30,000+ Sri Lankan Businesses Trust Us',
        trust2: '50M+ orders handled',
        trust3: 'No Credit Card Required',
        trust4: '30-Day Free Trial',
    },
    si: {
        headline: 'Lead Form වලින් Orders 500+ වඩා එනවද?',
        subheadline: 'Excel sheets සහ manual වැඩ වලට කාලය නාස්ති නොකර, StoreMate OMS හරහා ඔබේ orders automate කරලා කිසිම කරදරයක් නැතිව business එක scale කරන්න.',
        cta: 'නොමිලේ ගිණුම ලබාගන්න',
        trust1: 'ශ්‍රී ලංකාවේ ව්‍යාපාර 30,000+ ක විශ්වාසය',
        trust2: 'Orders 50M+ සාර්ථකව හසුරුවා ඇත',
        trust3: 'Credit Card එකක් අවශ්‍ය නැත',
        trust4: 'දින 30ක නොමිලේ අත්හදා බැලීමක්',
    },
};

export default function LeadCampaignHero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const { currentLanguage } = useLanguage();
    const t = heroTranslations[currentLanguage] || heroTranslations.en;

    const originalLogos = [
        { src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-5.webp", alt: "Courier Partner 1" },
        { src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/royalelogo-1.webp", alt: "Royal Express" },
        { src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/logo-1-e1758031524438.webp", alt: "Courier Partner 3" },
        { src: "https://cimacleaners.com.au/wp-content/uploads/2025/10/images-2-1.webp", alt: "Domex" },
        { src: "https://cimacleaners.com.au/wp-content/uploads/2025/09/332708073_3811654199061580_3846048282845902556_n-Photoroom-e1758020748705.webp", alt: "Trans Express" }
    ];

    const logos = [...originalLogos, ...originalLogos, ...originalLogos];

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 100);

        const interval = setInterval(() => {
            setCurrentLogoIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= originalLogos.length) {
                    setTimeout(() => {
                        const carousel = document.querySelector('.lead-logo-carousel');
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
        <section className="relative bg-[#F2F8FB] overflow-hidden">
            {/* Hero Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Headline */}
                    <h1
                        className={`text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-[#1a1a2e] leading-snug sm:leading-[1.15] tracking-tight transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                    >
                        {t.headline}
                    </h1>

                    {/* Sub-headline */}
                    <p
                        className={`mt-6 sm:mt-8 text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        {t.subheadline}
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        <a
                            href="https://welcome.oms.storemate.cloud/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#1a1a2e] text-white font-semibold text-base hover:bg-[#16162a] transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 hover:-translate-y-0.5"
                        >
                            {t.cta}
                        </a>

                    </div>

                    {/* Trust Badges */}
                    <div
                        className={`mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 transform transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        <div className="hidden sm:flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-500">{t.trust1}</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-500">{t.trust2}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-500">{t.trust3}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-500">{t.trust4}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Screenshot in Browser Mockup */}
            <div
                className={`relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
                <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-200">
                    {/* Browser Chrome */}
                    <div className="bg-[#f5f5f7] border-b border-gray-200 px-4 py-3 flex items-center gap-3">
                        {/* Traffic lights */}
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                        </div>
                        {/* URL Bar */}
                        <div className="flex-1 max-w-lg mx-auto">
                            <div className="bg-white rounded-md px-4 py-1.5 text-center text-sm text-gray-400 border border-gray-200 select-none">
                                https://oms.storemate.cloud/dashboard
                            </div>
                        </div>
                        {/* Spacer for symmetry */}
                        <div className="w-[52px]"></div>
                    </div>

                    {/* Dashboard Image */}
                    <div className="relative bg-black">
                        <img
                            src="https://cimacleaners.com.au/wp-content/uploads/2025/09/Dashboards-2048x1152-1.webp"
                            alt="StoreMate OMS Dashboard — bulk orders being processed"
                            className="w-full h-auto block"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>

            {/* Partner Logos Carousel */}
            <div className={`relative w-full max-w-4xl mx-auto mt-4 mb-12 overflow-hidden transform transition-all duration-700 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex items-center">
                    <div className="flex-1 overflow-hidden px-4">
                        <div className="flex items-center justify-center space-x-8 transition-transform duration-500 ease-out lead-logo-carousel"
                             style={{ transform: `translateX(-${currentLogoIndex * 33.33}%)` }}>
                            {logos.map((logo, index) => (
                                <div key={index} className="flex-shrink-0 w-1/3 flex justify-center transition-all duration-500">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-16 w-auto object-contain hover:drop-shadow-[0_0_15px_rgba(0,109,175,0.6)] transition-all duration-300"
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
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentLogoIndex ? 'bg-[#1a1a2e] w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
