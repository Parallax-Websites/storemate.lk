import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const customers = [
    { src: '/images/customers/Clif-Collagen.jpeg', name: 'Clif Collagen' },
    { src: '/images/customers/F---Craft-Choice.jpeg', name: 'Craft Choice' },
    { src: '/images/customers/F---EZGI.jpeg', name: 'EZGI' },
    { src: '/images/customers/F---Gifora.jpeg', name: 'Gifora' },
    { src: '/images/customers/F---Redora.jpeg', name: 'Redora' },
    { src: '/images/customers/I-Grid-Holdings-Pvt-Ltd.jpeg', name: 'I Grid Holdings' },
    { src: '/images/customers/Lizas-Closet.jpg', name: "Liza's Closet" },
    { src: '/images/customers/Naturista-Ceylon.jpeg', name: 'Naturista Ceylon' },
    { src: '/images/customers/Navora-Herbals.jpeg', name: 'Navora Herbals' },
    { src: '/images/customers/NK-Online-Super.jpeg', name: 'NK Online Super' },
    { src: '/images/customers/Shamrock.png', name: 'Shamrock' },
    { src: '/images/customers/Vishwa-Karma-Aayurveda.jpeg', name: 'Vishwa Karma Aayurveda' },
    { src: '/images/customers/Vishwa-Shakthi-Aayurveda.jpeg', name: 'Vishwa Shakthi Aayurveda' },
];

export default function CustomerLogos() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header — centered, matching other sections */}
                <div className={`text-center mb-16 px-4 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <div className="font-bold text-gray-900 mb-4 leading-tight text-center">
                        <div className="text-xl lg:text-2xl xl:text-3xl mb-2">
                            {t('customerLogos.badge')}
                        </div>
                        <div className="text-3xl lg:text-4xl xl:text-5xl mb-2" style={{ color: '#2780D3' }}>
                            {t('customerLogos.title')}
                        </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-center mx-auto">
                        {t('customerLogos.subtitle')}
                    </p>
                </div>

                {/* Logo Grid */}
                <div className={`transform transition-all duration-700 delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 sm:gap-6 max-w-6xl mx-auto">
                        {customers.map((customer) => (
                            <div
                                key={customer.name}
                                className="flex items-center justify-center bg-white border border-gray-100 rounded-xl p-5 aspect-square hover:shadow-md hover:border-gray-200 transition-all duration-300"
                            >
                                <img
                                    src={customer.src}
                                    alt={customer.name}
                                    title={customer.name}
                                    className="max-w-full max-h-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
