import { useState, useEffect } from 'react';

export default function AutoTranslation() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeDemo, setActiveDemo] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    // Demo messages cycling
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDemo((prev) => (prev + 1) % demoMessages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const demoMessages = [
        {
            original: "Can I use Storemate OMS if I don't have a website?",
            sinhala: "මට වෙබ් අඩවියක් නැතිනම් Storemate OMS භාවිතා කරන්න පුළුවන්ද?",
            tamil: "என்னிடம் வலைத்தளம் இல்லாவிட்டால் Storemate OMS ஐ பயன்படுத்த முடியுமா?",
            type: "FAQ"
        },
        {
            original: "Will I need to upload Excel files to the courier system?",
            sinhala: "මට කුරියර් සිස්ටම් එකට Excel ගොනු අප්ලෝඩ් කරන්න වෙයිද?",
            tamil: "கூரியர் சிஸ்டத்திற்கு Excel கோப்புகளை பதிவேற்ற வேண்டுமா?",
            type: "System"
        },
        {
            original: "Can I connect any delivery company with Storemate OMS?",
            sinhala: "මට ඕනෑම බෙදාහැරීම් සමාගමක් Storemate OMS එක්ක සම්බන්ධ කරන්න පුළුවන්ද?",
            tamil: "எந்த டெலிவரி நிறுவனத்தையும் Storemate OMS உடன் இணைக்க முடியுமா?",
            type: "Integration"
        },
        {
            original: "How does Storemate OMS reduce return orders?",
            sinhala: "Storemate OMS මොකද්ද කරන්නේ ආපසු එන ඕඩර් අඩු කරන්න?",
            tamil: "Storemate OMS எவ்வாறு திரும்பும் ஆர்டர்களை குறைக்கிறது?",
            type: "Benefits"
        },
        {
            original: "Can I try Storemate OMS before I pay?",
            sinhala: "මම ගෙවන්න කලින් Storemate OMS ට්‍රයි කරන්න පුළුවන්ද?",
            tamil: "நான் பணம் செலுத்துவதற்கு முன் Storemate OMS ஐ முயற்சி செய்ய முடியுமா?",
            type: "Trial"
        }
    ];

    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
            ),
            title: 'Real-Time Translation',
            description: 'Messages are translated instantly as customers type, ensuring seamless communication flow.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: '98% Accuracy Rate',
            description: 'Our AI model is specifically trained on Sri Lankan language patterns for maximum accuracy.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
            ),
            title: 'Bidirectional Support',
            description: 'Translates both incoming customer messages and your outgoing responses automatically.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <div className="mb-6">
                            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                                AUTO TRANSLATION
                            </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Instant Translation
                            <br />
                            <span style={{color: '#006daf'}}>Powered by AI</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                            Our advanced AI translation engine automatically converts customer messages between Sinhala and Tamil in real-time. No delays, no manual intervention required.
                        </p>

                        {/* Features List */}
                        <div className="space-y-6 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{color: '#006daf', backgroundColor: '#e6f7ff'}}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="https://welcome.oms.storemate.cloud/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                            style={{backgroundColor: '#013387'}}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#006daf'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#013387'}
                        >
                            Start a Free Trial
                            <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>

                    {/* Right Demo */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    Live Translation Demo
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">Watch how messages are translated in real-time</p>
                            </div>

                            {/* Demo Container */}
                            <div className="space-y-4">
                                {/* Message Type Badge */}
                                <div className="text-center">
                                    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full" style={{
                                        color: '#006daf',
                                        backgroundColor: '#e6f7ff'
                                    }}>
                                        {demoMessages[activeDemo].type} Message
                                    </span>
                                </div>

                                {/* Original Message */}
                                <div className="bg-white rounded-lg p-4 shadow-sm border">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-xs font-medium text-gray-500">ENGLISH (Original)</span>
                                    </div>
                                    <p className="text-gray-900 font-medium">{demoMessages[activeDemo].original}</p>
                                </div>

                                {/* Translation Arrow */}
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{backgroundColor: '#00BCE7'}}>
                                        <svg className="w-4 h-4 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Sinhala Translation */}
                                <div className="bg-white rounded-lg p-4 shadow-sm border">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="text-xs font-medium text-gray-500">සිංහල (Auto-Translated)</span>
                                    </div>
                                    <p className="text-gray-900 font-medium">{demoMessages[activeDemo].sinhala}</p>
                                </div>

                                {/* Tamil Translation */}
                                <div className="bg-white rounded-lg p-4 shadow-sm border">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                        <span className="text-xs font-medium text-gray-500">தமிழ் (Auto-Translated)</span>
                                    </div>
                                    <p className="text-gray-900 font-medium">{demoMessages[activeDemo].tamil}</p>
                                </div>

                                {/* Progress Indicators */}
                                <div className="flex justify-center space-x-2 pt-4">
                                    {demoMessages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveDemo(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                activeDemo === index ? 'w-6' : ''
                                            }`}
                                            style={{
                                                backgroundColor: activeDemo === index ? '#006daf' : '#d1d5db'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
