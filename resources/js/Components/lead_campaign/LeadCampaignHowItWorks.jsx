import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';

const sectionTranslations = {
    en: {
        badge: 'How It Works',
        heading: '4 Simple Steps to Automate Your Orders',
        cta: 'Get Your Free Account',
    },
    si: {
        badge: 'How It Works',
        heading: 'ඔබේ Orders Automate කිරීමට සරල පියවර 4ක්',
        cta: 'නොමිලේ ගිණුම ලබාගන්න',
    },
};

const steps = [
    {
        number: '01',
        title: { en: 'Receive', si: 'ලබාගැනීම' },
        description: { en: 'All orders from Facebook, WhatsApp, Instagram, TikTok and phone calls captured in one place.', si: 'Facebook, WhatsApp, Instagram, TikTok විතරක් නෙවෙයි phone calls වලින් එන ඔක්කොම Orders දැන් එකම තැනකට ගන්න පුළුවන්.' },
        color: 'bg-blue-500',
        lightBg: 'bg-blue-50',
        textColor: 'text-blue-600',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: { en: 'Verify', si: 'තහවුරු කිරීම' },
        description: { en: 'Automatically detect fake orders and duplicate orders, follow up instantly, and confirm real customers before you spend on shipping.', si: 'Fake Orders ලේසියෙන්ම හදුනා ගන්න. Orders යවන්න කලින් ඇත්තම Customer කවුද කියලා ඉක්මනින් Confirm කරගන්න.' },
        color: 'bg-amber-500',
        lightBg: 'bg-amber-50',
        textColor: 'text-amber-600',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: { en: 'Ship', si: 'යැවීම' },
        description: { en: 'Skip the manual work with Auto-Sync. Send order details to local couriers in one click. No Excel uploads—just print your waybill and pack.', si: 'කුරියර් සර්විස් එකත් එක්ක Auto Sync වෙන්න. Excel වලට Data දදා ඉන්න ඕනේ නැහැ, එක Click එකෙන් වේබිල් (Waybill) ප්‍රින්ට් කරලා පැක් කරන්න විතරයි තියෙන්නේ.' },
        color: 'bg-emerald-500',
        lightBg: 'bg-emerald-50',
        textColor: 'text-emerald-600',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
        ),
    },
    {
        number: '04',
        title: { en: 'Track', si: 'ලුහුබැඳීම' },
        description: { en: 'Monitor everything in one place. Track delivery status, order progress, and customer history automatically.', si: 'Order එක කොහේද තියෙන්නේ, Customerට ලැබුණද කියලා හැමදේම එකම තැනකින් බලාගන්න. Customer ගේ කලින් විස්තරත් Auto Save වෙනවා.' },
        color: 'bg-purple-500',
        lightBg: 'bg-purple-50',
        textColor: 'text-purple-600',
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
];

export default function LeadCampaignHowItWorks() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { currentLanguage } = useLanguage();
    const t = sectionTranslations[currentLanguage] || sectionTranslations.en;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-white py-20 sm:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center max-w-4xl mx-auto mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{t.badge}</p>
                    <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a2e] leading-snug sm:leading-tight tracking-tight">
                        {t.heading}
                    </h2>
                </div>

                {/* Steps Flow */}
                <div className="relative">
                    {/* Connection Line (desktop) */}
                    <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gray-200 z-0">
                        <div
                            className={`h-full bg-gradient-to-r from-blue-500 via-amber-500 via-emerald-500 to-purple-500 transition-all duration-1500 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                            style={{ transitionDelay: '500ms' }}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                style={{ transitionDelay: `${300 + index * 200}ms` }}
                            >
                                {/* Icon Circle */}
                                <div className="flex justify-center mb-6">
                                    <div className={`relative w-32 h-32 rounded-full ${step.lightBg} flex items-center justify-center`}>
                                        <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg`}>
                                            {step.icon}
                                        </div>
                                        {/* Step Number Badge */}
                                        <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center`}>
                                            <span className={`text-xs font-bold ${step.textColor}`}>{step.number}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow between steps (mobile/tablet) */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-2 sm:hidden">
                                        <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                        </svg>
                                    </div>
                                )}

                                {/* Text */}
                                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{step.title[currentLanguage] || step.title.en}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description[currentLanguage] || step.description.en}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className={`mt-16 text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
                    <a
                        href="https://welcome.oms.storemate.cloud/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#E07817] text-white font-semibold text-base hover:bg-[#c06514] transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 hover:-translate-y-0.5"
                    >
                        {t.cta}
                    </a>
                </div>
            </div>
        </section>
    );
}
