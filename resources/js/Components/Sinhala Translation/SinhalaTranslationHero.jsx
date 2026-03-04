import { useState, useEffect } from 'react';

export default function SinhalaTranslationHero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="bg-white relative">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-orange-50/20 to-blue-50/30 z-0"></div>
            <div className="relative isolate px-6 pt-14 lg:px-8 z-10">
                {/* Background Pattern */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            background: 'linear-gradient(to top right, #FF6B35, #F7931E, #00BCE7, #006daf, #013387)',
                        }}
                    />
                </div>

                {/* Hero Content */}
                <div className="mx-auto max-w-2xl py-12 sm:py-18 lg:py-22">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                                color: '#006daf',
                                backgroundColor: '#ffe6daff'
                            }}>
                                SINHALA TAMIL TRANSLATION
                            </span>
                        </div>
                    </div>

                    <div className="text-center">
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6 transition-all duration-900 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{
                            fontWeight: '750',
                            fontStretch: 'ultra-condensed',
                            letterSpacing: '-0.03em',
                            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                        }}>
                            Bridge Language Barriers<br />
                            <span style={{color: '#006daf'}}>සිංහල & தமிழ்</span><br />
                            Customer Communication
                        </h1>

                        <p className={`text-base font-medium text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Seamlessly communicate with your Sinhala and Tamil speaking customers using our AI-powered translation system.
                            Break down language barriers and expand your business across all Sri Lankan communities.
                        </p>

                        {/* Status Badges */}
                        <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                Real-time Translation
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12a1 1 0 01-.117-1.993L9 10h2a1 1 0 01.117 1.993L11 12H9zm4-6a1 1 0 01.117 1.993L13 8H7a1 1 0 01-.117-1.993L7 6h6zm-2-4a1 1 0 01.117 1.993L11 4H9a1 1 0 01-.117-1.993L9 2h2z" />
                                </svg>
                                Human Review
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                Cultural Context
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className={`mt-10 flex items-center justify-center gap-x-6 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <a
                                href="https://welcome.oms.storemate.cloud/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:shadow-lg hover:scale-105 text-center transition-all duration-300 transform hover:-translate-y-1"
                                style={{backgroundColor: '#006daf'}}
                            >
                                Start a Free Trial
                            </a>
                            <a
                                href="/#what-is-storemate-oms"
                                className="flex items-center gap-3 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-all duration-300"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                                    <svg className="w-5 h-5 text-blue-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                                <span>How It Works</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className={`mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="text-center mb-12">
                        {/* Subtitle with same style as POWERING label */}
                        <div className="mb-4">
                            <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                                color: '#006daf',
                                backgroundColor: '#ffe6daff'
                            }}>
                                TRUSTED BY 1000+ BUSINESSES
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                            fontWeight: '750',
                            fontStretch: 'ultra-condensed',
                            letterSpacing: '-0.03em',
                            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                        }}>
                            Serving All Sri Lankan Communities
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {/* Stat 1 - Translation Accuracy */}
                        <div className="relative group">
                            <div className="bg-white border-2 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#00BCE7'}}>
                                <div className="text-3xl md:text-4xl font-black mb-4" style={{color: '#013387'}}>
                                    98%
                                </div>
                                <div className="text-lg font-semibold text-gray-800 mb-2">Translation Accuracy</div>
                                <div className="text-sm text-gray-600 leading-relaxed">
                                    AI-powered precision for perfect communication.
                                </div>
                            </div>
                            {/* Connecting line */}
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2" style={{backgroundColor: '#00BCE7'}}></div>
                        </div>

                        {/* Stat 2 - Languages Supported */}
                        <div className="relative group">
                            <div className="bg-white border-2 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#006daf'}}>
                                <div className="text-3xl md:text-4xl font-black mb-4" style={{color: '#013387'}}>
                                    2
                                </div>
                                <div className="text-lg font-semibold text-gray-800 mb-2">Languages Supported</div>
                                <div className="text-sm text-gray-600 leading-relaxed">
                                    Comprehensive Sinhala and Tamil language support.
                                </div>
                            </div>
                            {/* Connecting line */}
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2" style={{backgroundColor: '#006daf'}}></div>
                        </div>

                        {/* Stat 3 - Service Availability */}
                        <div className="relative group">
                            <div className="bg-white border-2 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#013387'}}>
                                <div className="text-3xl md:text-4xl font-black mb-4" style={{color: '#013387'}}>
                                    24/7
                                </div>
                                <div className="text-lg font-semibold text-gray-800 mb-2">Service Availability</div>
                                <div className="text-sm text-gray-600 leading-relaxed">
                                    Round-the-clock translation support for your business.
                                </div>
                            </div>
                            {/* Connecting line */}
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2" style={{backgroundColor: '#013387'}}></div>
                        </div>

                        {/* Stat 4 - Messages Translated */}
                        <div className="relative group">
                            <div className="bg-white border-2 rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105" style={{borderColor: '#013387'}}>
                                <div className="text-3xl md:text-4xl font-black mb-4" style={{color: '#013387'}}>
                                    15M+
                                </div>
                                <div className="text-lg font-semibold text-gray-800 mb-2">Messages Translated</div>
                                <div className="text-sm text-gray-600 leading-relaxed">
                                    Proven track record of successful translations.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Background Pattern */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            background: 'linear-gradient(to bottom left, #FF8C42, #FF6B35, #00BCE7, #006daf)',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
