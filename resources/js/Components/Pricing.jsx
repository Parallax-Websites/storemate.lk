import { useState, useEffect } from 'react';

export default function Pricing() {
    const [isLoaded, setIsLoaded] = useState(false);

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
            name: "Free",
            subtitle: "Free Subscription",
            price: "LKR 0",
            period: "/month",
            inquiries: "500 inquiries/month",
            locations: "2 Business Locations",
            deliveryCompanies: "1 Delivery Company",
            features: [
                { name: "Inquiry Management", included: true },
                { name: "COD Sync", included: true },
                { name: "WhatsApp Form", included: false },
                { name: "Dedicated Server", included: false },
                { name: "Customizations", included: false }
            ],
            buttonText: "Try for Free",
            buttonStyle: "bg-gray-100 text-gray-800 hover:bg-gray-200",
            bgColor: "bg-orange-50",
            popular: false
        },
        {
            name: "Starter",
            subtitle: "Starter Subscription",
            price: "LKR 5,000",
            period: "/month",
            inquiries: "500 inquiries/month",
            locations: "2 Business Locations",
            deliveryCompanies: "1 Delivery Company",
            features: [
                { name: "Inquiry Management", included: true },
                { name: "COD Sync", included: true },
                { name: "WhatsApp Form", included: true },
                { name: "Dedicated Server", included: false },
                { name: "Customizations", included: false }
            ],
            buttonText: "Get Started",
            buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
            bgColor: "bg-blue-50",
            popular: true
        },
        {
            name: "Business",
            subtitle: "Business Subscription",
            price: "LKR 12,000",
            period: "/month",
            inquiries: "5,000 inquiries/month",
            locations: "5 Business Locations",
            deliveryCompanies: "2 Delivery Companies",
            features: [
                { name: "Inquiry Management", included: true },
                { name: "COD Sync", included: true },
                { name: "WhatsApp Form", included: true },
                { name: "Dedicated Server", included: false },
                { name: "Customizations", included: false }
            ],
            buttonText: "Get Started",
            buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
            bgColor: "bg-purple-50",
            popular: false
        },
        {
            name: "Premium",
            subtitle: "Premium Subscription",
            price: "LKR 25,000",
            period: "/month",
            inquiries: "50,000 inquiries/month",
            locations: "5 Business Locations",
            deliveryCompanies: "10 Delivery Companies",
            features: [
                { name: "Inquiry Management", included: true },
                { name: "COD Sync", included: true },
                { name: "WhatsApp Form", included: true },
                { name: "Dedicated Server", included: false },
                { name: "Customizations", included: false }
            ],
            buttonText: "Get Started",
            buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
            bgColor: "bg-green-50",
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
                            FLEXIBLE PRICING OPTIONS
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        Choose Your Plan
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Select the perfect plan for your business needs and start managing your orders efficiently
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>

                                {/* Price */}
                                <div className="mb-2">
                                    <span className="text-sm text-gray-600 font-medium">LKR </span>
                                    <span className="text-4xl font-bold text-gray-900">{plan.price.replace('LKR ', '')}</span>
                                    <span className="text-lg text-gray-600">{plan.period}</span>
                                </div>
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
                                            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
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
                            <a
                                href="https://welcome.oms.storemate.cloud/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 text-center ${plan.buttonStyle}`}
                            >
                                {plan.buttonText}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                        Need Something More?
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                        Need a custom solution? We offer enterprise packages tailored to your specific requirements.
                    </p>
                    <a
                        href="/contact-us"
                        className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                    >
                        Contact Sales
                    </a>
                </div>
            </div>
        </div>
    );
}
