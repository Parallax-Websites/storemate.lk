import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function Hero({ onOpenTrialModal }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useTranslation();

    const computePageKey = () => {
        const currentPath = route().current();
        if (currentPath && (currentPath.startsWith('module.') || currentPath.startsWith('module-'))) {
            const moduleNumber = currentPath.includes('.') ? currentPath.split('.')[1] : currentPath.split('-')[1];
            return `module${moduleNumber}`;
        }
        const map = {
            'home': 'home',
            'pricing': 'pricing',
            'inquiry': 'inquiry',
            'sales.management': 'sales',
            'shipping.packing': 'shipping',
            'user.contact.product': 'user',
            'about': 'about',
            'free.course': 'courses',
            'contact.us': 'contactus',
            'partner.program': 'partner'
        };
        return map[currentPath] || 'home';
    };

    const partnerLogos = [
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

    const marqueeLogos = [...partnerLogos, ...partnerLogos];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative overflow-hidden bg-white text-gray-900">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 55%, rgba(255,255,255,0) 100%)' }}></div>
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 82%, rgba(255,255,255,0.7) 100%)' }}></div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(0,109,175,0.08) 18%, rgba(0,109,175,0.04) 55%, rgba(255,255,255,1) 100%)' }}></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
                    <div className={`transform text-center lg:text-left transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            {t('hero.mainTitle')}
                        </h1>

                        <p className="mt-5 text-xl font-semibold sm:text-2xl" style={{ color: '#006daf' }}>
                            {t('hero.mainSubtitle')}
                        </p>

                        <p className="mt-5 max-w-2xl mx-auto lg:mx-0 text-base leading-relaxed text-gray-600 md:text-lg">
                            {t('hero.description')}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <a
                                id={`btn_start_a_free_trial_hero_${computePageKey()}`}
                                href="https://welcome.oms.storemate.cloud/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-lg px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{ backgroundColor: '#006daf' }}
                            >
                                {t('nav.getFreeAccount')}
                            </a>

                            <a
                                href="#what-is-storemate-oms"
                                className="hidden md:inline-flex items-center rounded-lg border px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
                                style={{ borderColor: '#006daf', color: '#006daf' }}
                            >
                                {t('nav.howItWorks')}
                            </a>
                        </div>
                    </div>

                    <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="relative">
                            <img
                                src="https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-7-1-1.png"
                                alt="Storemate OMS Dashboard"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className={`mt-20 md:mt-24 border-t border-[#006daf]/20 pt-8 transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-xl font-semibold text-gray-900 text-center lg:text-left">{t('hero.trustedBy')}</p>

                    <div className="mt-6 overflow-hidden">
                        <div className="hero-logo-track flex w-max items-center gap-6 md:gap-8">
                            {marqueeLogos.map((logo, index) => (
                                <div key={`${logo.alt}-${index}`} className="flex h-16 min-w-[180px] items-center justify-center px-4 md:h-24 md:min-w-[280px] md:px-6">
                                    <img src={logo.src} alt={logo.alt} className="h-8 w-auto object-contain md:h-14" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes heroLogoSlide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .hero-logo-track {
                    animation: heroLogoSlide 24s linear infinite;
                }
            `}</style>
        </section>
    );
}













