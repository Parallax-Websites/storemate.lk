import React from 'react';

const CallToAction = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
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

            <div className="relative max-w-4xl mx-auto text-center">
                {/* Subtitle */}
                <div className="mb-6">
                    <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                        color: '#006daf',
                        backgroundColor: '#ffe6daff'
                    }}>
                        LET'S TRY! GET FREE SUPPORT
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12" style={{
                    fontWeight: '750',
                    fontStretch: 'ultra-condensed',
                    letterSpacing: '-0.03em',
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>
                    Ready to get started?
                </h2>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#013387' }}>
                            <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <span className="text-gray-700 text-base">Book a free 10-minute demo</span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#013387' }}>
                            <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <span className="text-gray-700 text-base">See how Storemate fits your business</span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#013387' }}>
                            <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <span className="text-gray-700 text-base">Get 30 days free trial</span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#013387' }}>
                            <span className="text-white text-sm font-bold">4</span>
                        </div>
                        <span className="text-gray-700 text-base">Scale confidently with Storemate OMS</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <a
                        href="https://welcome.oms.storemate.cloud/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center"
                        style={{
                            backgroundColor: '#013387',
                            ':hover': { backgroundColor: '#001f5c' }
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#001f5c'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#013387'}
                    >
                        Start a Free Trial
                    </a>

                    <button
                        onClick={() => {
                            const section = document.getElementById('what-is-storemate-oms');
                            if (section) {
                                // If the section exists on current page, scroll to it
                                section.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                // If not on home page, navigate to home page with hash
                                window.location.href = '/home#what-is-storemate-oms';
                            }
                        }}
                        className="border-2 px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 inline-flex items-center space-x-2"
                        style={{
                            borderColor: '#013387',
                            color: '#013387'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f0f4ff';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                        }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span>How It Works</span>
                    </button>
                </div>

                {/* Bottom Features */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Free 30-day trial</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Online Support</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CallToAction;
