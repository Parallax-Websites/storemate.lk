import { useState, useEffect } from 'react';
import { usePricingTranslation } from '@/Utils/pricingTranslations';

export default function Pricing({ onOpenTrialModal, compact = false }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { tPricing, tCard } = usePricingTranslation();

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const pricingPlans = [
        {
            name: tCard('pricing.plans.free.name'),
            subtitle: tCard('pricing.plans.free.subtitle'),
            price: `${tCard('pricing.plans.free.price')}`,
            period: tCard('pricing.plans.free.period'),
            inquiries: tCard('pricing.plans.free.inquiries'),
            users: tCard('pricing.plans.free.users'),
            products: tCard('pricing.plans.free.products'),
            deliveryAccounts: tCard('pricing.plans.free.deliveryAccounts'),
            businesses: tCard('pricing.plans.free.businesses'),
            supportLabel: tCard('pricing.communitySupportLabel'),
            features: [
                { name: tCard('pricing.features.knowledgeBaseAccess'), included: true },
                { name: tCard('pricing.features.communityForum'), included: true },
                { name: tCard('pricing.features.videoTutorials'), included: true },
                { name: tCard('pricing.features.emailSupport'), included: false },
                { name: tCard('pricing.features.customizations'), included: false }
            ],
            buttonText: tCard('pricing.plans.free.buttonText'),
            trialPeriod: tCard('pricing.plans.free.trialPeriod'),
            buttonStyle: "bg-gray-900 text-white hover:bg-gray-800",
            bgColor: "bg-orange-50",
            popular: false
        },
        {
            name: tCard('pricing.plans.starter.name'),
            subtitle: tCard('pricing.plans.starter.subtitle'),
            price: `LKR ${tCard('pricing.plans.starter.price')}`,
            period: tCard('pricing.plans.starter.period'),
            inquiries: tCard('pricing.plans.starter.inquiries'),
            users: tCard('pricing.plans.starter.users'),
            products: tCard('pricing.plans.starter.products'),
            deliveryAccounts: tCard('pricing.plans.starter.deliveryAccounts'),
            costPerOrder: tCard('pricing.plans.starter.costPerOrder'),
            businesses: tCard('pricing.plans.starter.businesses'),
            supportLabel: tCard('pricing.emailSupportLabel'),
            features: [
                { name: tCard('pricing.features.emailSupport48h'), included: true },
                { name: tCard('pricing.features.setupGuideCall'), included: true },
                { name: tCard('pricing.features.extendedKnowledgeBase'), included: true },
                { name: tCard('pricing.features.prioritySupport'), included: false },
                { name: tCard('pricing.features.customizations'), included: false }
            ],
            buttonText: tCard('pricing.plans.starter.buttonText'),
            trialPeriod: tCard('pricing.plans.starter.trialPeriod'),
            buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
            bgColor: "bg-white",
            popular: false
        },
        {
            name: tCard('pricing.plans.business.name'),
            subtitle: tCard('pricing.plans.business.subtitle'),
            price: `LKR ${tCard('pricing.plans.business.price')}`,
            period: tCard('pricing.plans.business.period'),
            inquiries: tCard('pricing.plans.business.inquiries'),
            users: tCard('pricing.plans.business.users'),
            products: tCard('pricing.plans.business.products'),
            deliveryAccounts: tCard('pricing.plans.business.deliveryAccounts'),
            costPerOrder: tCard('pricing.plans.business.costPerOrder'),
            businesses: tCard('pricing.plans.business.businesses'),
            supportLabel: tCard('pricing.prioritySupportLabel'),
            features: [
                { name: tCard('pricing.features.priorityEmailChat12h'), included: true },
                { name: tCard('pricing.features.phoneCallbackSupport'), included: true },
                { name: tCard('pricing.features.dedicatedOnboarding'), included: true },
                { name: tCard('pricing.features.customerSuccessManager'), included: false },
                { name: tCard('pricing.features.customizations'), included: false }
            ],
            buttonText: tCard('pricing.plans.business.buttonText'),
            trialPeriod: tCard('pricing.plans.business.trialPeriod'),
            buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
            bgColor: "bg-white",
            popular: true,
            popularText: tCard('pricing.plans.starter.popular')
        },
        {
            name: tCard('pricing.plans.premium.name'),
            subtitle: tCard('pricing.plans.premium.subtitle'),
            price: `LKR ${tCard('pricing.plans.premium.price')}`,
            period: tCard('pricing.plans.premium.period'),
            inquiries: tCard('pricing.plans.premium.inquiries'),
            users: tCard('pricing.plans.premium.users'),
            products: tCard('pricing.plans.premium.products'),
            deliveryAccounts: tCard('pricing.plans.premium.deliveryAccounts'),
            costPerOrder: tCard('pricing.plans.premium.costPerOrder'),
            businesses: tCard('pricing.plans.premium.businesses'),
            supportLabel: tCard('pricing.successSupportLabel'),
            features: [
                { name: tCard('pricing.features.prioritySupport4h'), included: true },
                { name: tCard('pricing.features.customerSuccessManager'), included: true },
                { name: tCard('pricing.features.whatsappSupport'), included: true },
                { name: tCard('pricing.features.integrationSetupAssistance'), included: true },
                { name: tCard('pricing.features.customizations'), included: true }
            ],
            buttonText: tCard('pricing.plans.premium.buttonText'),
            trialPeriod: tCard('pricing.plans.premium.trialPeriod'),
            buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
            bgColor: "bg-white",
            popular: false
        },
        {
            name: tCard('pricing.plans.enterprise.name'),
            subtitle: tCard('pricing.plans.enterprise.subtitle'),
            price: `LKR ${tCard('pricing.plans.enterprise.price')}`,
            period: tCard('pricing.plans.enterprise.period'),
            inquiries: tCard('pricing.plans.enterprise.inquiries'),
            users: tCard('pricing.plans.enterprise.users'),
            products: tCard('pricing.plans.enterprise.products'),
            deliveryAccounts: tCard('pricing.plans.enterprise.deliveryAccounts'),
            costPerOrder: tCard('pricing.plans.enterprise.costPerOrder'),
            businesses: tCard('pricing.plans.enterprise.businesses'),
            supportLabel: tCard('pricing.dedicatedSupportLabel'),
            features: [
                { name: tCard('pricing.features.dedicatedAccountManager'), included: true },
                { name: tCard('pricing.features.criticalSupport247'), included: true },
                { name: tCard('pricing.features.implementationTeam'), included: true },
                { name: tCard('pricing.features.customTrainingSessions'), included: true },
                { name: tCard('pricing.features.directTechnicalEscalation'), included: true },
                { name: tCard('pricing.features.strategicPlanningCalls'), included: true },
                { name: tCard('pricing.features.customizations'), included: true }
            ],
            buttonText: tCard('pricing.plans.enterprise.buttonText'),
            trialPeriod: tCard('pricing.plans.enterprise.trialPeriod'),
            buttonStyle: "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700",
            bgColor: "bg-white",
            popular: false
        }
    ];

    return (
        <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            {/* Background Pattern and Gradients */}
            {!compact && (
            <div className="absolute inset-0">
                {/* Simple Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                {/* Top to Bottom Gradient (flipped) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)'
                    }}
                ></div>

                {/* Edge to Middle Gradient (Radial) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.6) 100%)'
                    }}
                ></div>

                {/* Top to Text Area Middle Gradient (flipped) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0) 60%)'
                    }}
                ></div>

                {/* Bottom to White Gradient (underside fade) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to top, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0) 50%)'
                    }}
                ></div>

                {/* Blue gradient fading to white on top and bottom edges */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(0, 109, 175, 0.1) 15%, rgba(0, 109, 175, 0.05) 50%, rgba(0, 109, 175, 0.1) 85%, rgba(255, 255, 255, 1) 100%)'
                    }}
                ></div>
            </div>
            )}

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                {!compact && (
                <div className={`text-center mb-12 transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                    {/* Subtitle with same style as POWERING label */}
                    <div className="mb-4">
                        <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                            color: '#006daf',
                            backgroundColor: '#ffe6daff'
                        }}>
                            {tPricing('pricing.badge')}
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        <span className="text-black">{tPricing('pricing.title.part1')}</span>{' '}
                        <span style={{ color: '#006daf' }}>{tPricing('pricing.title.part2')}</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {tPricing('pricing.subtitle')}
                    </p>
                </div>
                )}

                {/* Compact Header (Lead Campaign style) */}
                {compact && (
                <div className={`text-center mb-12 transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                    <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a2e] leading-snug sm:leading-tight tracking-tight mb-4">
                        {tPricing('pricing.title.part1')}{' '}{tPricing('pricing.title.part2')}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
                        {tPricing('pricing.subtitle')}
                    </p>
                </div>
                )}

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl ${plan.popular ? 'pt-10 pb-5 px-5' : 'p-5'} transition-all duration-700 hover:scale-105 hover:shadow-xl border-2 flex flex-col ${
                                plan.popular
                                    ? 'border-blue-300 shadow-blue-100'
                                    : 'border-gray-200 hover:border-blue-200'
                            } ${plan.bgColor} ${
                                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                            style={{
                                animationDelay: `${index * 200}ms`
                            }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                                        {plan.popularText || tCard('pricing.plans.starter.popular')}
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-xs text-gray-600 mb-3">{plan.subtitle}</p>

                                {/* Price */}
                                <div className="mb-2">
                                    {plan.price.includes('LKR') && <span className="text-xs text-gray-600 font-medium">LKR </span>}
                                    <span className="text-3xl font-bold text-gray-900">{plan.price.replace('LKR ', '')}</span>
                                    {plan.period && <span className="text-sm text-gray-600">{plan.period}</span>}
                                </div>
                            </div>

                            {/* Plan Details */}
                            <div className="space-y-1.5 mb-4 text-xs text-center">
                                <div className="text-gray-700 font-medium">{plan.inquiries}</div>
                                {plan.costPerOrder && (
                                    <div className="text-gray-700 font-medium">Rs.{plan.costPerOrder}/{tCard('pricing.costPerOrderLabel').toLowerCase()}</div>
                                )}
                                <div className="text-gray-700 font-medium">{plan.users}</div>
                                <div className="text-gray-700 font-medium">{plan.products}</div>
                                <div className="text-gray-700 font-medium">{plan.deliveryAccounts}</div>
                                <div className="text-gray-700 font-medium">{tCard('pricing.businessesLabel')}: {plan.businesses}</div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-3"></div>

                            {/* Support Features Header */}
                            <div className="mb-2">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">{plan.supportLabel || tCard('pricing.supportFeaturesLabel')}</h4>
                            </div>

                            {/* Features List */}
                            <div className="space-y-2 mb-6 flex-grow">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start">
                                        {feature.included ? (
                                            <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-green-500 mt-0.5">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-gray-300 mt-0.5">
                                                <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        )}
                                        <span className="ml-3 text-xs text-gray-700 leading-tight">
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="mt-auto">
                            {onOpenTrialModal ? (
                                <button
                                    onClick={onOpenTrialModal}
                                    className={`block w-full py-2.5 px-3 rounded-lg font-medium text-xs transition-all duration-300 hover:scale-105 text-center ${plan.buttonStyle}`}
                                >
                                    {tCard('pricing.startFreeTrial')}
                                </button>
                            ) : plan.name === tCard('pricing.plans.enterprise.name') ? (
                                <a
                                    href="/contact-us"
                                    className={`block w-full py-2.5 px-3 rounded-lg font-medium text-xs transition-all duration-300 hover:scale-105 text-center ${plan.buttonStyle}`}
                                >
                                    {plan.buttonText}
                                </a>
                            ) : (
                                <a
                                    href="https://welcome.oms.storemate.cloud/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full py-2.5 px-3 rounded-lg font-medium text-xs transition-all duration-300 hover:scale-105 text-center ${plan.buttonStyle}`}
                                >
                                    {plan.buttonText}
                                </a>
                            )}
                            {plan.trialPeriod && (
                                <div className="text-center mt-2">
                                    <span className="text-xs font-semibold text-gray-600">
                                        {plan.trialPeriod}
                                    </span>
                                </div>
                            )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                {!compact && !onOpenTrialModal && (
                <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                        <span className="text-black">{tPricing('pricing.bottomCta.title.part1')}</span>{' '}
                        <span style={{ color: '#006daf' }}>{tPricing('pricing.bottomCta.title.part2')}</span>
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                        {tPricing('pricing.bottomCta.description')}
                    </p>
                    <a
                        href="/contact-us"
                        className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                    >
                        {tPricing('pricing.bottomCta.button')}
                    </a>
                </div>
                )}
            </div>
        </div>
    );
}
