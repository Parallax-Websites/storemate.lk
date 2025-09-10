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
                        🤝 PARTNERSHIP OPPORTUNITY
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8" style={{
                    fontWeight: '750',
                    fontStretch: 'ultra-condensed',
                    letterSpacing: '-0.03em',
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>
                    Ready to Partner for Success?
                </h2>

                {/* Description */}
                <div className="mb-12 max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Join the Storemate OMS Partner Program today and let's collectively drive the future of Sri Lankan E-commerce.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                        Contact us at <span className="font-semibold text-gray-900">011 422 6911</span> or visit{' '}
                        <a
                            href="https://www.storemate.lk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline transition-colors duration-300"
                            style={{ color: '#006daf' }}
                        >
                            www.storemate.lk
                        </a>{' '}
                        to begin a discussion on how we can build a powerful, mutually beneficial partnership.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <a
                        href="tel:0114226911"
                        className="text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2"
                        style={{
                            backgroundColor: '#013387',
                            ':hover': { backgroundColor: '#001f5c' }
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#001f5c'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#013387'}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>Call 011 422 6911</span>
                    </a>

                    <a
                        href="https://www.storemate.lk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 inline-flex items-center space-x-2"
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
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                        </svg>
                        <span>Visit storemate.lk</span>
                    </a>
                </div>

                {/* Bottom Features */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Partnership Program</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Mutual Benefits</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Sri Lankan E-commerce</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CallToAction;
