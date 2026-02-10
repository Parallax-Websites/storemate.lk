import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const CampaignCallToAction = () => {
    const { t } = useTranslation();

    return (
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            {/* Background — same subtle grid + gradient as Hero/Pricing */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                    backgroundSize: '50px 50px'
                }}></div>
                <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(0,109,175,0.08) 20%, rgba(0,109,175,0.04) 50%, rgba(0,109,175,0.08) 80%, rgba(255,255,255,1) 100%)'
                }}></div>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Badge */}
                <div className="text-center mb-5">
                    <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                        color: '#006daf',
                        backgroundColor: '#ffe6daff'
                    }}>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {t('campaign.cta.badge')}
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 max-w-3xl mx-auto" style={{ letterSpacing: '-0.02em' }}>
                    {t('campaign.cta.heading')}
                </h2>

                {/* Subheading */}
                <p className="text-center text-lg text-gray-600 leading-relaxed mb-14 max-w-2xl mx-auto">
                    {t('campaign.cta.subheading')}
                </p>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-4xl mx-auto">

                    {/* Left — Steps */}
                    <div className="space-y-5">
                        {/* Step 1 */}
                        <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#006daf' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#006daf' }}>{t('campaign.cta.step1Label')}</span>
                                <p className="text-gray-800 font-semibold mt-0.5">{t('campaign.cta.step1')}</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#006daf' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#006daf' }}>{t('campaign.cta.step2Label')}</span>
                                <p className="text-gray-800 font-semibold mt-0.5">{t('campaign.cta.step2')}</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#006daf' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#006daf' }}>{t('campaign.cta.step3Label')}</span>
                                <p className="text-gray-800 font-semibold mt-0.5">{t('campaign.cta.step3')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right — Call Card */}
                    <div className="rounded-3xl p-8 sm:p-10 border border-gray-100" style={{ backgroundColor: '#E6F7FF' }}>
                        {/* Phone Icon */}
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: '#006daf' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {t('campaign.cta.callTitle')}
                        </h3>
                        <p className="text-gray-600 text-sm mb-7 leading-relaxed">
                            {t('campaign.cta.callSubtext')}
                        </p>

                        {/* Phone Number Button */}
                        <a
                            href="tel:0779436364"
                            className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                            style={{ backgroundColor: '#013387' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            077 943 6364
                        </a>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/94777672155"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] mt-3 bg-[#25D366] hover:bg-[#1da851]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            WhatsApp
                        </a>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-gray-600">{t('campaign.cta.trust1')}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-gray-600">{t('campaign.cta.trust2')}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CampaignCallToAction;
