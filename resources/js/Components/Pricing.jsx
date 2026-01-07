import { useState, useEffect } from 'react';
import { usePricingTranslation } from '@/Utils/pricingTranslations';

export default function Pricing({ onOpenTrialModal }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { tPricing } = usePricingTranslation();

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
/*         {
            name: tPricing('pricing.plans.free.name'),
            subtitle: tPricing('pricing.plans.free.subtitle'),
            price: `LKR ${tPricing('pricing.plans.free.price')}`,
            period: tPricing('pricing.plans.free.period'),
            inquiries: tPricing('pricing.plans.free.inquiries'),
            locations: tPricing('pricing.plans.free.locations'),
            deliveryCompanies: tPricing('pricing.plans.free.deliveryCompanies'),
            features: [
                { name: tPricing('pricing.features.inquiryManagement'), included: true },
                { name: tPricing('pricing.features.codSync'), included: true },
                { name: tPricing('pricing.features.whatsappForm'), included: false },
                { name: tPricing('pricing.features.dedicatedServer'), included: false },
                { name: tPricing('pricing.features.customizations'), included: false }
            ],
            buttonText: tPricing('pricing.plans.free.buttonText'),
            buttonStyle: "bg-gray-100 text-gray-800 hover:bg-gray-200",
            bgColor: "bg-orange-50",
            popular: false
        }, */
        {
            name: tPricing('pricing.plans.starter.name'),
            subtitle: tPricing('pricing.plans.starter.subtitle'),
            price: `LKR ${tPricing('pricing.plans.starter.price')}`,
            period: tPricing('pricing.plans.starter.period'),
            inquiries: tPricing('pricing.plans.starter.inquiries'),
            locations: tPricing('pricing.plans.starter.locations'),
            deliveryCompanies: tPricing('pricing.plans.starter.deliveryCompanies'),
            costPerOrder: tPricing('pricing.plans.starter.costPerOrder'),
            features: [
                { name: tPricing('pricing.features.inquiryManagement'), included: true },
                { name: tPricing('pricing.features.codSync'), included: true },
                { name: tPricing('pricing.features.whatsappForm'), included: true },
                { name: tPricing('pricing.features.dedicatedServer'), included: false },
                { name: tPricing('pricing.features.customizations'), included: false }
            ],
            buttonText: tPricing('pricing.plans.starter.buttonText'),
            trialPeriod: tPricing('pricing.plans.starter.trialPeriod'),
            buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
            bgColor: "bg-white",
            popular: false
        },
        {
            name: tPricing('pricing.plans.business.name'),
            subtitle: tPricing('pricing.plans.business.subtitle'),
            price: `LKR ${tPricing('pricing.plans.business.price')}`,
            period: tPricing('pricing.plans.business.period'),
            inquiries: tPricing('pricing.plans.business.inquiries'),
            locations: tPricing('pricing.plans.business.locations'),
            deliveryCompanies: tPricing('pricing.plans.business.deliveryCompanies'),
            costPerOrder: tPricing('pricing.plans.business.costPerOrder'),
            features: [
                { name: tPricing('pricing.features.inquiryManagement'), included: true },
                { name: tPricing('pricing.features.codSync'), included: true },
                { name: tPricing('pricing.features.whatsappForm'), included: true },
                { name: tPricing('pricing.features.dedicatedServer'), included: false },
                { name: tPricing('pricing.features.customizations'), included: false }
            ],
            buttonText: tPricing('pricing.plans.business.buttonText'),
            trialPeriod: tPricing('pricing.plans.business.trialPeriod'),
            buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
            bgColor: "bg-white",
            popular: true,
            popularText: tPricing('pricing.plans.starter.popular')
        },
        {
            name: tPricing('pricing.plans.premium.name'),
            subtitle: tPricing('pricing.plans.premium.subtitle'),
            price: `LKR ${tPricing('pricing.plans.premium.price')}`,
            period: tPricing('pricing.plans.premium.period'),
            inquiries: tPricing('pricing.plans.premium.inquiries'),
            locations: tPricing('pricing.plans.premium.locations'),
            deliveryCompanies: tPricing('pricing.plans.premium.deliveryCompanies'),
            costPerOrder: tPricing('pricing.plans.premium.costPerOrder'),
            features: [
                { name: tPricing('pricing.features.inquiryManagement'), included: true },
                { name: tPricing('pricing.features.codSync'), included: true },
                { name: tPricing('pricing.features.whatsappForm'), included: true },
                { name: tPricing('pricing.features.dedicatedServer'), included: false },
                { name: tPricing('pricing.features.customizations'), included: false }
            ],
            buttonText: tPricing('pricing.plans.premium.buttonText'),
            trialPeriod: tPricing('pricing.plans.premium.trialPeriod'),
            buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
            bgColor: "bg-white",
            popular: false
        },
        {
            name: tPricing('pricing.plans.enterprise.name'),
            subtitle: tPricing('pricing.plans.enterprise.subtitle'),
            price: tPricing('pricing.plans.enterprise.price'),
            period: '',
            inquiries: tPricing('pricing.plans.enterprise.inquiries'),
            locations: tPricing('pricing.plans.enterprise.locations'),
            deliveryCompanies: tPricing('pricing.plans.enterprise.deliveryCompanies'),
            costPerOrder: tPricing('pricing.plans.enterprise.costPerOrder'),
            features: [
                { name: tPricing('pricing.features.inquiryManagement'), included: true },
                { name: tPricing('pricing.features.codSync'), included: true },
                { name: tPricing('pricing.features.whatsappForm'), included: true },
                { name: tPricing('pricing.features.dedicatedServer'), included: true },
                { name: tPricing('pricing.features.customizations'), included: true }
            ],
            buttonText: tPricing('pricing.plans.enterprise.buttonText'),
            trialPeriod: tPricing('pricing.plans.enterprise.trialPeriod'),
            buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700",
            bgColor: "bg-white",
            popular: false
        }
    ];

    return (
        <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            {/* Background Pattern and Gradients */}
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

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
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

                    {/* Cost for Order Badge */}
                    <div className="mb-4">
                        <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                            color: '#006daf',
                            backgroundColor: '#e6f3ff'
                        }}>
                            COST FOR ORDER
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

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl p-8 transition-all duration-700 hover:scale-105 hover:shadow-xl border-2 ${
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
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                                        {plan.popularText || tPricing('pricing.plans.starter.popular')}
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>

                                {/* Price */}
                                <div className="mb-2">
                                    {plan.price.includes('LKR') && <span className="text-sm text-gray-600 font-medium">LKR </span>}
                                    <span className="text-4xl font-bold text-gray-900">{plan.price.replace('LKR ', '')}</span>
                                    {plan.period && <span className="text-lg text-gray-600">{plan.period}</span>}
                                </div>

                                {/* Cost per Order Badge */}
                                {plan.costPerOrder && (
                                    <div className="mt-3">
                                        <span className="inline-block text-xs font-bold tracking-widest px-3 py-1.5 rounded-full" style={{
                                            color: '#006daf',
                                            backgroundColor: '#e6f3ff'
                                        }}>
                                            {plan.costPerOrder} {tPricing('pricing.costPerOrderLabel')}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Plan Details */}
                            <div className="space-y-3 mb-6">
                                <div className="text-sm text-gray-700">
                                    <div className="font-medium">{plan.inquiries}</div>
                                </div>
                                <div className="text-sm text-gray-700">
                                    <div className="font-medium">{plan.locations}</div>
                                </div>
                                <div className="text-sm text-gray-700">
                                    <div className="font-medium">{plan.deliveryCompanies}</div>
                                </div>

                            </div>

                            {/* Features List */}
                            <div className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center">
                                        {feature.included ? (
                                            <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-green-500">
                                                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-red-600">
                                                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        )}
                                        <span className="ml-3 text-sm text-gray-700 font-medium">
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            {plan.name === tPricing('pricing.plans.enterprise.name') ? (
                                <a
                                    href="/contact-us"
                                    className={`block w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 text-center ${plan.buttonStyle}`}
                                >
                                    {plan.buttonText}
                                </a>
                            ) : (
                                <button
                                    id={`btn_start_a_free_trial_card_${computePageKey()}`}
                                    onClick={() => onOpenTrialModal?.('card')}
                                    className={`block w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 text-center ${plan.buttonStyle}`}
                                >
                                    {plan.buttonText}
                                </button>
                            )}
                            {plan.trialPeriod && (
                                <div className="text-center mt-3">
                                    <span className="text-xs font-semibold text-gray-600">
                                        {plan.trialPeriod}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
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
            </div>
        </div>
    );
}
