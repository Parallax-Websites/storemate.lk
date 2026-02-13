import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';

const testimonialTranslations = {
    en: {
        badge: 'Social Proof',
        heading: 'Trusted by 2,000+ Sri Lankan Businesses Scaling Effortlessly',
        subheading: 'Thousands of Sri Lankan online sellers trust StoreMate to manage their orders, reduce returns, and scale faster.',
        cta: 'Get Your Free Account',
    },
    si: {
        badge: 'Social Proof',
        heading: 'ශ්‍රී ලංකාවේ ව්‍යාපාර 2,000කට අධික ප්‍රමාණයක විශ්වාසය',
        subheading: 'Orders කළමනාකරණය කිරීමට, Returns අඩු කරගැනීමට සහ ව්‍යාපාරය වේගයෙන් දියුණු කිරීමට ශ්‍රී ලංකාවේ දහස් ගණනක් Online ව්‍යාපාරිකයින් StoreMate විශ්වාස කරති.',
        cta: 'නොමිලේ ගිණුම ලබාගන්න',
    },
};

const testimonials = [
    {
        quote: "I was managing 5 different Excel sheets for different campaigns. Now everything's in StoreMate. I can actually see which orders need follow-ups.",
        name: 'Nimesha',
        role: 'Cosmetics Seller',
        color: 'bg-rose-500',
    },
    {
        quote: 'Duplicate detection එක නිසා මං මාසෙකට courier charges 15,000ක් විතර save කරනවා. Fake orders බොහෝමයක් catch වෙනවා upload කරද්දීම.',
        name: 'Ravindu',
        role: 'Electronics Reseller',
        color: 'bg-teal-500',
    },
    {
        quote: 'Duplicate Orders නිසා මාසෙකට 200+ Returns. දැන් Auto Detection එක්ක Returns 20ට වැටුණා!',
        name: 'Chamari S.',
        role: 'Beauty Products',
        color: 'bg-purple-500',
    },
    {
        quote: 'මං දිනකට orders 200-300 ක් Excel වලින් download කරනවා. StoreMate එකට upload කරලා courier sync කරන එක විනාඩි 5කින් වෙනවා. පැය ගානක් save වෙනවා.',
        name: 'Kasun',
        role: 'Fashion Store Owner',
        color: 'bg-amber-500',
    },
];

export default function LeadCampaignTestimonials() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { currentLanguage } = useLanguage();
    const t = testimonialTranslations[currentLanguage] || testimonialTranslations.en;

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
        <section ref={sectionRef} className="relative bg-white py-20 sm:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column — Headline, Stats & CTA */}
                    <div className={`lg:col-span-5 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{t.badge}</p>
                        <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-snug sm:leading-[1.15] tracking-tight">
                            {t.heading}
                        </h2>
                        <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
                            {t.subheading}
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
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

                    {/* Right Column — Testimonials Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl p-8 border border-gray-300 hover:shadow-md hover:-translate-y-1 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                                >
                                    {/* Quote Icon */}
                                    <svg className="w-8 h-8 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                                    </svg>

                                    {/* Quote Text */}
                                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                        <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#1a1a2e]">{testimonial.name}</p>
                                            <p className="text-xs text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
