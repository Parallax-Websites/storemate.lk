import { useState, useEffect, useRef } from 'react';
import { usePartnerProgramTranslation } from '@/Utils/partnerProgramTranslations';

export default function ExclusiveBenefits() {
    const { tPartnerProgram } = usePartnerProgramTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for scroll effect
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px -50px 0px'
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    // Get translated data
    const stats = tPartnerProgram('partnerProgram.exclusiveBenefits.stats');
    const benefits = tPartnerProgram('partnerProgram.exclusiveBenefits.benefits');

    return (
        <div ref={componentRef} className="py-20 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-32 right-16 w-56 h-56 bg-gray-100/20 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Title and Stats */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        {/* Title Section */}
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold mb-6 leading-tight">
                                <span className="block text-blue-600" style={{color: '#006daf'}}>{tPartnerProgram('partnerProgram.exclusiveBenefits.title.part1')}</span>
                                <span className="block text-black">{tPartnerProgram('partnerProgram.exclusiveBenefits.title.part2')}</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {tPartnerProgram('partnerProgram.exclusiveBenefits.subtitle')}
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`group transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                >
                                    <div className="relative h-full">
                                        <div
                                            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full min-h-[160px] flex flex-col justify-center"
                                            style={{backgroundColor: '#006daf'}}
                                        >
                                            {/* Star Icon */}
                                            <div className="mb-4 flex justify-center">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            </div>

                                            {/* Number */}
                                            <div className="text-3xl font-bold mb-2">{stat.number}</div>

                                            {/* Label */}
                                            <div className="text-sm font-medium opacity-90">{stat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Benefits */}
                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className={`group transition-all duration-1000 delay-${600 + (index * 200)} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-lg"
                                            style={{backgroundColor: '#006daf'}}
                                        >
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.iconPath} />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-3">{benefit.description}</p>

                                        {benefit.linkText && (
                                            <a
                                                href="/pricing"
                                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                                                style={{color: '#006daf'}}
                                            >
                                                {benefit.linkText}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
