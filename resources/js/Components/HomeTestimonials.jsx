import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

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
        quote: 'We truly appreciate the service support of Amalka who handled our technical matters. Her commitment, expertise, and responsiveness made the entire process smooth and stress-free. Highly recommended!',
        name: 'Diluk Fernando',
        role: 'Business Owner',
        color: 'bg-indigo-500',
    },
    {
        quote: 'Duplicate Orders නිසා මාසෙකට 200+ Returns. දැන් Auto Detection එක්ක Returns 20ට වැටුණා!',
        name: 'Chamari S.',
        role: 'Beauty Products',
        color: 'bg-purple-500',
    },
    {
        quote: 'StoreMate OMS system එක online business කරන්න ගොඩක් පහසු system එකක්. Products manage කරන්න, orders track කරන්න, catalog maintain කරන්න ඉතාමත් easy. Highly recommended!',
        name: 'Nishanta Kumra',
        role: 'Online Seller',
        color: 'bg-emerald-500',
    },
    {
        quote: 'මං දිනකට orders 200-300 ක් Excel වලින් download කරනවා. StoreMate එකට upload කරලා courier sync කරන එක විනාඩි 5කින් වෙනවා. පැය ගානක් save වෙනවා.',
        name: 'Kasun',
        role: 'Fashion Store Owner',
        color: 'bg-amber-500',
    },
];

export default function HomeTestimonials() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header — matching home page style */}
                <div className={`text-center mb-16 px-4 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <div className="font-bold text-gray-900 mb-4 leading-tight text-center">
                        <div className="text-xl lg:text-2xl xl:text-3xl mb-2">
                            {t('homeTestimonials.line1')}
                        </div>
                        <div className="text-3xl lg:text-4xl xl:text-5xl mb-2" style={{ color: '#2780D3' }}>
                            {t('homeTestimonials.line2')}
                        </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-center mx-auto">
                        {t('homeTestimonials.subtitle')}
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-0.5 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

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
                                    <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
