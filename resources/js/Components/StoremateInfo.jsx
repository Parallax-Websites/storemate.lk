import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function StoremateInfo() {
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
        <div  className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className={`rounded-3xl p-8 md:p-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{backgroundColor: '#E6F7FF'}}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className={`transition-all duration-1200 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <h2 className="text-3xl md:text-4xl font-black mb-6" style={{
                            fontWeight: '750',
                            fontStretch: 'ultra-condensed',
                            letterSpacing: '-0.03em',
                            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                            color: '#000000ff'
                        }}>
                            We're Storemate OMS
                        </h2>

                        <p className="text-base font-medium mb-8 leading-relaxed" style={{color: '#1f1f1fff'}}>
                            We're Sri Lanka's leading Order Management System. Our vision is to empower local E-commerce businesses by automating order processes, reducing returns, and increasing profits.
                        </p>

                        <Link href="/about" className="inline-block text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:-translate-y-1" style={{
                            backgroundColor: '#013387'
                        }} onMouseEnter={(e) => e.target.style.backgroundColor = '#006daf'} onMouseLeave={(e) => e.target.style.backgroundColor = '#013387'}>
                            What we do
                        </Link>
                    </div>

                    {/* Right Content - Partner Program Card */}
                    <div className={`relative transition-all duration-1200 delay-600 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="rounded-2xl p-6 text-white hover:scale-110 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 transition-all duration-700 group/card cursor-pointer" style={{backgroundColor: '#ff7535ff'}}>
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-3 group-hover/card:scale-105 group-hover/card:-translate-y-1 transition-all duration-500">
                                        Our New Partner Program has Launched!
                                    </h3>
                                    <p className="text-sm mb-6 leading-relaxed group-hover/card:text-opacity-95 transition-all duration-400" style={{color: '#E6F7FF'}}>
                                        Find out how we're helping businesses grow with smarter operations and profit protection.
                                    </p>
                                    <Link href="/partner-program" className="inline-block border-2 border-white text-white px-4 py-2 rounded-lg font-medium transition-all duration-400 hover:bg-white hover:scale-125 hover:-translate-y-2 hover:shadow-lg" onMouseEnter={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#006daf'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'}}>
                                        Take a look
                                    </Link>
                                </div>

                                {/* Profile Images Circle */}
                                <div className="relative ml-4">
                                    <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden hover:scale-125 hover:rotate-12 transition-all duration-600 group-hover/card:animate-pulse" style={{backgroundColor: '#00BCE7'}}>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-1">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-150 hover:rotate-45 transition-all duration-400" style={{backgroundColor: '#013387'}}>
                                                    <span className="text-xs font-bold text-white">S</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-150 hover:rotate-45 transition-all duration-400 delay-100" style={{backgroundColor: '#006daf'}}>
                                                    <span className="text-xs font-bold text-white">O</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-150 hover:rotate-45 transition-all duration-400 delay-200" style={{backgroundColor: '#00BCE7'}}>
                                                    <span className="text-xs font-bold text-white">M</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-150 hover:rotate-45 transition-all duration-400 delay-300" style={{backgroundColor: '#013387'}}>
                                                    <span className="text-xs font-bold text-white">S</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced pulse rings */}
                                    <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-20 group-hover/card:opacity-40"></div>
                                    <div className="absolute -inset-1 rounded-full border border-white animate-pulse opacity-20 group-hover/card:opacity-60"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
