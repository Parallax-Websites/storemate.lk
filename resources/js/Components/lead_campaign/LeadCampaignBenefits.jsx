import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';

const benefitTranslations = {
    en: {
        badge: 'Key Benefits',
        heading: 'Built for Sri Lankan Online Sellers',
        cta: 'Get Your Free Account',
    },
    si: {
        badge: 'Key Benefits',
        heading: 'ශ්‍රී ලංකාවේ Online ව්‍යාපාරිකයින් සඳහාම විශේෂයෙන් සකසා ඇත',
        cta: 'නොමිලේ ගිණුම ලබාගන්න',
    },
};

const benefits = [
    {
        title: { en: 'Direct Courier Integration', si: 'Courier Service සමග සෘජුවම සම්බන්ධයි' },
        description: { en: 'Upload your orders once, sync with Trans Express, Royal Express, Koombiyo, Domex and other local couriers. No more retyping data into courier websites.', si: 'ඔයාගේ Orders ටික එකපාර අපේ සිස්ටම් එකට දාන්න. Trans Express, Royal Express, Koombiyo, Domex සහ ලංකාවේ ප්‍රධාන කුරියර් සර්විස් එක්ක අපි ලින්ක් වෙලා ඉන්නේ. ආයෙත් Courier Website වලට ඩේටා ටයිප් කර කර කාලය නාස්ති කරන්න ඕනේ නැහැ.' },
        iconColor: 'text-blue-600',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
        ),
    },
    {
        title: { en: 'One Dashboard for Everything', si: 'හැමදේම එකම තැනකින්' },
        description: { en: 'Facebook leads, Instagram orders, WhatsApp messages—see everything in one place instead of juggling multiple Excel files.', si: 'Facebook Leads, Instagram Orders, Tiktok Orders, WhatsApp Messages මේ හැමදේම දැන් එකම තැනකින් බලන්න පුළුවන්. Excel File එකින් එක check කරන්න ඕනේ නැහැ.' },
        iconBg: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
    },
    {
        title: { en: 'Manage from Your Phone', si: 'Phone එකෙන්ම Manage කර ගන්න' },
        description: { en: 'Full mobile app. Check order status, update customers, and manage deliveries from anywhere.', si: 'අපේ මොබයිල් ඇප් එක හරහා ඕනෑම තැනක ඉඳන් වැඩ ටික කරගන්න. ඕඩර් ස්ටේටස් බලන්න, කස්ටමර්ස්ලට විස්තර යවන්න සහ ඩිලිවරි පාලනය කරන්න මේ ඇප් එකෙන්ම පුළුවන්.' },
        iconBg: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
    },
    {
        title: { en: 'Built for High Volume', si: 'Orders ඕන ප්‍රමාණයකට' },
        description: { en: 'Upload 500, 1000, or more orders at once. Built to handle the volume that Facebook advertisers generate.', si: 'ඔයා දවසට Orders 500ක්, 1000ක් හෝ ඊට වඩා වැඩි ප්‍රමාණයක් කරන කෙනෙක් වුණත් ප්‍රශ්නයක් නැහැ. Facebook Ads හරහා එන විශාල Orders ප්‍රමාණයක් වුණත් එකපාර සිස්ටම් එකට අප්ලෝඩ් කරන්න පුළුවන්.' },
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-600',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
    },
    {
        title: { en: 'Reduce Fake Orders', si: 'Fake Orders අඩු කරගන්න' },
        description: { en: 'Duplicate detection spots repeat customers. Verification tools flag suspicious addresses and phone numbers before you ship.', si: 'එකම කෙනා කිහිප සැරයක් ඕඩර් කරලා නම් ඒක ලේසියෙන්ම හඳුනා ගන්න පුළුවන් (Duplicate detection).' },
        iconBg: 'bg-green-50',
        iconColor: 'text-green-600',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
];

export default function LeadCampaignBenefits() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { currentLanguage } = useLanguage();
    const t = benefitTranslations[currentLanguage] || benefitTranslations.en;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-[#F2F8FB] py-20 sm:py-28 overflow-hidden">
            {/* Decorative dot patterns */}
            <div className="absolute top-8 left-8 hidden lg:grid grid-cols-4 gap-2">
                {[...Array(20)].map((_, i) => (
                    <div key={`tl-${i}`} className="w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
                ))}
            </div>
            <div className="absolute bottom-8 right-8 hidden lg:grid grid-cols-4 gap-2">
                {[...Array(20)].map((_, i) => (
                    <div key={`br-${i}`} className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
                ))}
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{t.badge}</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a2e] leading-tight tracking-tight">
                        {t.heading}
                    </h2>
                </div>

                {/* Benefits Grid - 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`flex items-start gap-5 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${200 + index * 150}ms` }}
                        >
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#006daf] to-[#005a91] flex items-center justify-center shadow-lg shadow-[#006daf]/20">
                                <div className="text-white">
                                    {benefit.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                                    {benefit.title[currentLanguage] || benefit.title.en}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {benefit.description[currentLanguage] || benefit.description.en}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`mt-16 text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
                    <a
                        href="https://welcome.oms.storemate.cloud/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#006daf] text-white font-semibold text-base hover:bg-[#005a91] transition-all duration-300 hover:shadow-lg hover:shadow-[#006daf]/30 hover:-translate-y-0.5"
                    >
                        {t.cta}
                    </a>
                </div>
            </div>
        </section>
    );
}
