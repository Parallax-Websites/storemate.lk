import { useState, useEffect } from 'react';

export default function StoremateFeatures() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Loading animation trigger
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div id="what-is-storemate-oms" className={`transition-all duration-1200 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        {/* Subtitle with same style as POWERING label */}
                        <div className="mb-4">
                            <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                                color: '#006daf',
                                backgroundColor: '#ffe6daff'
                            }}>
                                STOREMATE ORDER MANAGEMENT
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-4xl font-black mb-8" style={{
                            fontWeight: '750',
                            fontStretch: 'ultra-condensed',
                            letterSpacing: '-0.03em',
                            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                            color: '#2D3748',
                            lineHeight: '1.1'
                        }}>
                            What is Storemate OMS?
                        </h1>

                        {/* Description */}
                        <div className="space-y-6 mb-8">
                            <p className="text-lg leading-relaxed" style={{color: '#4A5568'}}>
                                Storemate OMS is built for Sri Lankan E-Commerce/Online sellers who want to stay organized.
                            </p>

                            <p className="text-lg leading-relaxed" style={{color: '#4A5568'}}>
                                Manage all inquiries, orders, and deliveries in one place, <strong style={{color: '#2D3748'}}>avoid fake/duplicate orders</strong>, and <strong style={{color: '#2D3748'}}>auto-sync</strong> with your courier in just one click.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#00BCE7'}}>
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold" style={{color: '#2D3748'}}>No more excel uploads</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#00BCE7'}}>
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold" style={{color: '#2D3748'}}>No more missed follow ups</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#00BCE7'}}>
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold" style={{color: '#2D3748'}}>No more returns</span>
                            </div>
                        </div>

                        {/* Bottom Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl hover:scale-105 transition-all duration-500" style={{backgroundColor: '#F7FAFC'}}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#E0F2F1'}}>
                                    <svg className="w-6 h-6" style={{color: '#006daf'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{color: '#2D3748'}}>
                                    Fewer Duplicate Orders
                                </h3>
                                <p className="text-sm leading-relaxed" style={{color: '#4A5568'}}>
                                    Smart detection stops double shipping before it happens.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl hover:scale-105 transition-all duration-500" style={{backgroundColor: '#F7FAFC'}}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{backgroundColor: '#E0F2F1'}}>
                                    <svg className="w-6 h-6" style={{color: '#006daf'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{color: '#2D3748'}}>
                                    Reduction in Return Losses
                                </h3>
                                <p className="text-sm leading-relaxed" style={{color: '#4A5568'}}>
                                    Block fake customers early and avoid unnecessary courier costs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Full Width Image */}
                    <div className={`relative transition-all duration-1200 delay-600 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="relative overflow-visible">
                            {/* Creative Background Elements */}
                            <div className="absolute inset-0 z-0">
                                {/* Large gradient circle */}
                                <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full opacity-20" style={{
                                    background: 'linear-gradient(135deg, #013387 0%, #006daf 100%)'
                                }}></div>

                                {/* Medium circle */}
                                <div className="absolute -top-10 -left-16 w-48 h-48 rounded-full opacity-15" style={{
                                    background: 'linear-gradient(45deg, #00BCE7 0%, #006daf 100%)'
                                }}></div>

                                {/* Small accent circle */}
                                <div className="absolute top-1/2 -right-8 w-24 h-24 rounded-full opacity-25" style={{
                                    background: 'linear-gradient(225deg, #013387 0%, #00BCE7 100%)'
                                }}></div>

                                {/* Floating dots */}
                                <div className="absolute top-20 left-8 w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: '#00BCE7', opacity: '0.6'}}></div>
                                <div className="absolute bottom-32 right-20 w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#013387', opacity: '0.4'}}></div>
                                <div className="absolute top-40 right-12 w-4 h-4 rounded-full animate-pulse" style={{backgroundColor: '#006daf', opacity: '0.5'}}></div>
                            </div>

                            {/* Main Creative Container */}
                            <div className="relative z-20 transform hover:scale-105 transition-all duration-700 hover:-translate-y-2">
                                {/* Outer container with creative shape */}
                                <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl overflow-hidden border border-gray-100" style={{
                                    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)'
                                }}>
                                    {/* Top decorative bar */}
                                    <div className="h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700" style={{
                                        background: 'linear-gradient(90deg, #013387 0%, #006daf 50%, #00BCE7 100%)'
                                    }}></div>

                                    {/* Image Section with Creative Frame */}
                                    <div className="p-6">
                                        <div className="relative overflow-hidden rounded-2xl" style={{
                                            background: 'linear-gradient(45deg, #f1f5f9 0%, #e2e8f0 100%)',
                                            padding: '3px'
                                        }}>
                                            <div className="relative h-80 rounded-2xl overflow-hidden bg-white group cursor-pointer">
                                                {/* Video Thumbnail */}
                                                <img
                                                    src="https://storemate.lk/wp-content/uploads/2025/06/Thumbnail-OMS-1.jpg"
                                                    alt="Storemate OMS - How it Works Video"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    onError={(e) => {
                                                        // Fallback to YouTube thumbnail if custom thumbnail fails
                                                        e.target.src = "https://img.youtube.com/vi/-CYtv4drzyo/maxresdefault.jpg";
                                                        e.target.onerror = function() {
                                                            // Final fallback to gradient
                                                            const parent = e.target.parentNode;
                                                            if (parent) {
                                                                const div = document.createElement('div');
                                                                div.className = 'w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center';
                                                                div.innerHTML = '<div class="text-center text-white p-8"><svg class="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p class="text-xl font-semibold">Storemate OMS</p><p class="text-sm opacity-90">Video Preview</p></div>';
                                                                parent.replaceChild(div, e.target);
                                                            }
                                                        };
                                                    }}
                                                />

                                                {/* Video Play Overlay */}
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                                    <a
                                                        href="https://youtu.be/-CYtv4drzyo"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="transform group-hover:scale-110 transition-all duration-300"
                                                    >
                                                        <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center text-red-600 shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300">
                                                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>

                                                {/* Video Duration Badge */}
                                                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
                                                    4:51
                                                </div>

                                                {/* Video Title Overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                                                    <h3 className="text-white font-bold text-lg mb-1">
                                                        How Storemate Works
                                                    </h3>
                                                    <p className="text-white/90 text-sm">
                                                        Complete guide for Sri Lankan SMEs 🇱🇰
                                                    </p>
                                                </div>

                                                {/* Image overlay effects */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/5 pointer-events-none"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Text Section */}
                                    <div className="px-6 pb-4">
                                        <div className="text-center">
                                            <h2 className="text-2xl md:text-3xl font-black mb-4" style={{
                                                fontWeight: '750',
                                                fontStretch: 'ultra-condensed',
                                                letterSpacing: '-0.02em',
                                                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                                                color: '#2D3748',
                                                lineHeight: '1.2'
                                            }}>
                                                Running an Online Business In Sri Lanka?
                                            </h2>
                                            <p className="text-lg text-gray-600 mb-6">
                                                See how Storemate OMS can transform your business operations
                                            </p>
                                        </div>
                                    </div>

                                    {/* Creative Stats Section */}
                                    <div className="px-6 pb-6">
                                        <div className="relative">
                                            {/* Stats background with creative shape */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-2xl transform -skew-y-1"></div>

                                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                                                <div className="grid grid-cols-3 gap-6">
                                                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                                                        <div className="relative">
                                                            <div className="text-3xl font-black mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                                                500+
                                                            </div>
                                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full opacity-20 blur-sm"></div>
                                                        </div>
                                                        <div className="text-sm text-gray-600 font-semibold">
                                                            SMEs Served
                                                        </div>
                                                    </div>

                                                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                                                        <div className="relative">
                                                            <div className="text-3xl font-black mb-2 bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">
                                                                50+
                                                            </div>
                                                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 to-blue-300 rounded-full opacity-20 blur-sm"></div>
                                                        </div>
                                                        <div className="text-sm text-gray-600 font-semibold">
                                                            Active Partners
                                                        </div>
                                                    </div>

                                                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                                                        <div className="relative">
                                                            <div className="text-3xl font-black mb-2 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                                                95%
                                                            </div>
                                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full opacity-20 blur-sm"></div>
                                                        </div>
                                                        <div className="text-sm text-gray-600 font-semibold">
                                                            Success Rate
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
