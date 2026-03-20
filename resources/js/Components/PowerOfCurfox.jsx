import { useState, useEffect } from 'react';

export default function PowerOfCurfox() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const openVideo = () => {
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
    };

    return (
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-orange-50/15 to-blue-50/20 z-0"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Main Content Grid - Title and Video */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Side - Title Section */}
                    <div className={`transition-all duration-1000 ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                        <div className="mb-4">
                            <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                                color: '#006daf',
                                backgroundColor: '#ffe6daff'
                            }}>
                                POWER OF CURFOX
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                            fontWeight: '750',
                            fontStretch: 'ultra-condensed',
                            letterSpacing: '-0.03em',
                            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                        }}>
                            Running an   <span style={{ color: '#006daf' }}>Online Business </span> In Sri Lanka?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Storemate oms is built for sri lankan SMEs to manage their orders efficiently

                            and ensure timely deliveries with curfox's reliable courier services.
                        </p>
                    </div>

                    {/* Right Side - Video Thumbnail */}
                    <div className={`transition-all duration-1000 delay-300 ${
                        isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}>
                        <div
                            className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-blue-300/60 hover:border-blue-400/80 transition-all duration-500 hover:scale-105"
                            onClick={openVideo}
                        >
                            <img
                                src="https://storemate.lk/wp-content/uploads/2025/06/Thumbnail-OMS-1.jpg"
                                alt="Curfox Video Thumbnail"
                                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl border border-white/50">
                                    <svg className="w-8 h-8 ml-1" style={{ color: '#006daf' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className={`w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-4 transition-all duration-1000 delay-1000 ${
                    isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}></div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeVideo}>
                    <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeVideo}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/-CYtv4drzyo?autoplay=1"
                                title="Power Of Curfox"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
