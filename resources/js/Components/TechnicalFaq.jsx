import React, { useState } from 'react';
import { usePricingTranslation } from '@/Utils/pricingTranslations';

const TechnicalFaq = () => {
    const { tPricing } = usePricingTranslation();
    const faqs = tPricing('technicalFaq.faqs');
    const [openIndex, setOpenIndex] = useState(null);

    const toggleTechnicalFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }


    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Subtitle with same style as other sections */}
                    <div className="mb-4">
                        <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                            color: '#006daf',
                            backgroundColor: '#ffe6daff'
                        }}>
                            {tPricing('technicalFaq.badge')}
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        <span className="text-black">{tPricing('technicalFaq.title.part1')}</span>{' '}
                        <span style={{ color: '#006daf' }}>{tPricing('technicalFaq.title.part2')}</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {tPricing('technicalFaq.subtitle')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-blue-200 hover:shadow-lg">
                            <button type="button" className="flex items-center justify-between w-full px-6 py-6 sm:p-8" onClick={() => toggleTechnicalFaq(index)}>
                                <span className="flex text-lg font-semibold text-gray-900 text-left"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${openIndex === index ? 'block' : 'hidden'} px-6 pb-6 sm:px-8 sm:pb-8`}>
                                <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 text-lg">
                        {tPricing('technicalFaq.contactPrompt')}{' '}
                        <a
                            href="/contact-us"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                        >
                            {tPricing('technicalFaq.contactSupport')}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default TechnicalFaq;
