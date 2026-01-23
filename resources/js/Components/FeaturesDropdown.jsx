import React, { useState, useRef, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { useTranslation } from '@/hooks/useTranslation';

export default function FeaturesDropdown({ onOpenTrialModal }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

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

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
            setActiveSection(null);
        }, 150);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Professional Icon Components
    const InquiryIcon = ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    );

    const SalesIcon = ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    );

    const ShippingIcon = ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
    );

    const ManagementIcon = ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
    );

    const TranslationIcon = ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
    );

    const RocketIcon = ({ className }) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );

    const features = {
        'inquiry': {
            title: t('features.inquiryManagement.title'),
            description: t('features.inquiryManagement.description'),
            icon: InquiryIcon,
            mainHref: '/inquiry',
            image: '/design-1.jpg',
            items: [
                {
                    name: t('features.inquiryManagement.items.inquiryChannel.name'),
                    href: '/inquiry',
                    description: t('features.inquiryManagement.items.inquiryChannel.description')
                },
                {
                    name: t('features.inquiryManagement.items.duplicateDetection.name'),
                    href: '/inquiry',
                    description: t('features.inquiryManagement.items.duplicateDetection.description')
                },
                {
                    name: t('features.inquiryManagement.items.leadScoring.name'),
                    href: '/inquiry',
                    description: t('features.inquiryManagement.items.leadScoring.description')
                }
            ]
        },
        'sales': {
            title: t('features.salesManagement.title'),
            description: t('features.salesManagement.description'),
            icon: SalesIcon,
            mainHref: '/sales-management',
            image: 'https://cimacleaners.com.au/wp-content/uploads/2025/09/design-8-4.webp',
            items: [
                {
                    name: t('features.salesManagement.items.orderProcessing.name'),
                    href: '/sales-management',
                    description: t('features.salesManagement.items.orderProcessing.description')
                },
                {
                    name: t('features.salesManagement.items.confirmedOrders.name'),
                    href: '/sales-management',
                    description: t('features.salesManagement.items.confirmedOrders.description')
                },
                {
                    name: t('features.salesManagement.items.salesAnalytics.name'),
                    href: '/sales-management',
                    description: t('features.salesManagement.items.salesAnalytics.description')
                }
            ]
        },
        'shipping': {
            title: t('features.shippingPacking.title'),
            description: t('features.shippingPacking.description'),
            icon: ShippingIcon,
            mainHref: '/shipping-packing',
            image: 'https://cimacleaners.com.au/wp-content/uploads/2025/09/design-2-2048x1612-Photoroom-1.webp',
            items: [
                {
                    name: t('features.shippingPacking.items.packingProgress.name'),
                    href: '/shipping-packing',
                    description: t('features.shippingPacking.items.packingProgress.description')
                },
                {
                    name: t('features.shippingPacking.items.courierSync.name'),
                    href: '/shipping-packing',
                    description: t('features.shippingPacking.items.courierSync.description')
                },
                {
                    name: t('features.shippingPacking.items.deliveryTracking.name'),
                    href: '/shipping-packing',
                    description: t('features.shippingPacking.items.deliveryTracking.description')
                }
            ]
        },
        'management': {
            title: t('features.userProductManagement.title'),
            description: t('features.userProductManagement.description'),
            icon: ManagementIcon,
            mainHref: '/user-contact-product',
            image: 'https://cimacleaners.com.au/wp-content/uploads/2025/09/design-new-5-Photoroom.webp',
            items: [
                {
                    name: t('features.userProductManagement.items.userManagement.name'),
                    href: '/user-contact-product',
                    description: t('features.userProductManagement.items.userManagement.description')
                },
                {
                    name: t('features.userProductManagement.items.contactManagement.name'),
                    href: '/user-contact-product',
                    description: t('features.userProductManagement.items.contactManagement.description')
                },
                {
                    name: t('features.userProductManagement.items.productCatalog.name'),
                    href: '/user-contact-product',
                    description: t('features.userProductManagement.items.productCatalog.description')
                }
            ]
        }
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
        >
            {/* Trigger Button */}
            <button className="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700">
                {t('nav.features')}
                <svg
                    className={`ml-1 -mr-0.5 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Mega Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-screen max-w-5xl transform -translate-x-1/4 z-50">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
                        <div className="grid grid-cols-4 divide-x divide-gray-100">
                            {/* Left Navigation */}
                            <div className="bg-gray-50 p-6">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                                    {t('nav.features')}
                                </h3>
                                <nav className="space-y-1">
                                    {Object.entries(features).map(([key, section]) => (
                                        <Link
                                            key={key}
                                            href={section.mainHref}
                                            onMouseEnter={() => setActiveSection(key)}
                                            className={`group flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                                                activeSection === key
                                                    ? 'bg-blue-50 text-blue-700'
                                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                            }`}
                                        >
                                            <div className={`mr-3 p-1 rounded-lg transition-colors duration-150 ${
                                                activeSection === key
                                                    ? 'bg-blue-100'
                                                    : 'bg-gray-100 group-hover:bg-gray-200'
                                            }`}>
                                                <section.icon className={`w-5 h-5 ${
                                                    activeSection === key
                                                        ? 'text-blue-600'
                                                        : 'text-gray-500 group-hover:text-gray-700'
                                                }`} />
                                            </div>
                                            <div className="text-left">
                                                <div className="font-medium">{section.title}</div>
                                                <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                                    {section.description}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Main Content Area */}
                            <div className="col-span-3">
                                {activeSection ? (
                                    <div className="grid grid-cols-2 h-full">
                                        {/* Feature Details */}
                                        <div className="p-6">
                                            <Link
                                                href={features[activeSection].mainHref}
                                                className="flex items-center mb-4 group hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-150"
                                            >
                                                <div className="mr-4 p-3 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors duration-150">
                                                    {React.createElement(features[activeSection].icon, { className: "w-7 h-7 text-blue-600" })}
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-150">
                                                        {features[activeSection].title}
                                                    </h4>
                                                    <p className="text-sm text-gray-600">
                                                        {features[activeSection].description}
                                                    </p>
                                                </div>
                                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </Link>

                                            <div className="space-y-3">
                                                {features[activeSection].items.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.href}
                                                        className="block group p-3 rounded-lg hover:bg-blue-50 transition-colors duration-150"
                                                    >
                                                        <div className="font-medium text-gray-900 group-hover:text-blue-700">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-sm text-gray-600 mt-1">
                                                            {item.description}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Live Page Preview */}
                                        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                                            <div className="h-full bg-white rounded-lg shadow-sm overflow-hidden relative">
                                                <iframe
                                                    src={features[activeSection].mainHref}
                                                    title={`${features[activeSection].title} Preview`}
                                                    className="w-full h-full border-0 pointer-events-none scale-75 origin-top-left"
                                                    style={{
                                                        width: '133.33%',
                                                        height: '133.33%',
                                                        transform: 'scale(0.75)',
                                                        transformOrigin: 'top left'
                                                    }}
                                                    sandbox="allow-same-origin allow-scripts"
                                                />
                                                <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
                                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-gray-600 font-medium">
                                                    {t('common.livePreview')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Default view when no section is hovered
                                    <div className="p-6 h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                                <RocketIcon className="w-8 h-8 text-white" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                {t('common.powerfulFeatures')}
                                            </h4>
                                            <p className="text-gray-600 max-w-md">
                                                {t('common.exploreFeatures')}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bottom CTA Section */}
                        <div className="px-6 py-5 border-t border-gray-200" style={{backgroundColor: '#ffe6daff'}}>
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-900 mb-1">
                                        {t('common.readyToStart')}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {t('common.tryAllFeatures')}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4 ml-6">
                                    <Link
                                        href="/pricing"
                                        className="inline-flex items-center px-4 py-2.5 text-sm font-semibold bg-white rounded-lg border-2 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                                        style={{
                                            color: '#006daf',
                                            borderColor: '#00BCE7'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#f0f9ff';
                                            e.target.style.borderColor = '#006daf';
                                            e.target.style.color = '#013387';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#ffffff';
                                            e.target.style.borderColor = '#00BCE7';
                                            e.target.style.color = '#006daf';
                                        }}
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        {t('common.viewPricing')}
                                    </Link>
                                    <a
                                        href="https://welcome.oms.storemate.cloud/register"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                        style={{backgroundColor: '#013387'}}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#006daf'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#013387'}
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        {t('common.startFreeTrial')}
                                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
