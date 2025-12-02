import { useState, useEffect } from 'react';
import Header from '@/Components/Header';

export default function FeaturesHero({ auth }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
            {/* Header */}
            <Header auth={auth} />

            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-16 w-48 h-48 bg-purple-100/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-32 left-1/4 w-56 h-56 bg-green-100/20 rounded-full blur-2xl"></div>
            </div>

            {/* Hero Content */}
            <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        {/* Badge */}
                        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-widest border-2 shadow-lg" style={{
                                color: '#006daf',
                                backgroundColor: '#ffffff',
                                borderColor: '#006daf'
                            }}>
                                ⚡ POWERFUL FEATURES
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className={`text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className="block">Everything You Need to</span>
                            <span className="block" style={{color: '#006daf'}}>Manage Your Orders</span>
                        </h1>

                        {/* Subtitle */}
                        <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            Discover how Storemate OMS transforms your e-commerce operations with comprehensive features designed specifically for Sri Lankan businesses.
                        </p>

                        {/* Feature Highlights */}
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            {/* Order Management */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Order Management</h3>
                                <p className="text-gray-600 text-sm">Centralize all your orders from multiple platforms</p>
                            </div>

                            {/* Inventory Control */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Inventory Control</h3>
                                <p className="text-gray-600 text-sm">Real-time stock tracking and management</p>
                            </div>

                            {/* Automated Logistics */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Automated Logistics</h3>
                                <p className="text-gray-600 text-sm">Seamless courier integration and tracking</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <a
                                href="https://welcome.oms.storemate.cloud/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                                style={{backgroundColor: '#013387'}}
                            >
                                Explore Features
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
