import { useState, useEffect, useRef } from 'react';

export default function ConfirmedOrders() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    // Intersection Observer for scroll effect
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: '50px 0px -50px 0px' // Start animation slightly before element enters view
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="relative py-20 overflow-hidden">
      {/* Background Design Elements with scroll effect */}
      <div className={`absolute inset-0 opacity-30 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-30' : 'scale-110 opacity-0'}`}>
        <div className={`absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl transition-all duration-1200 delay-200 ${isVisible ? 'translate-x-0 translate-y-0' : '-translate-x-10 -translate-y-10'}`}></div>
        <div className={`absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 rounded-full blur-xl transition-all duration-1200 delay-400 ${isVisible ? 'translate-x-0 translate-y-0' : 'translate-x-10 translate-y-10'}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-20 h-20 bg-cyan-200 rounded-full blur-lg transition-all duration-1200 delay-600 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Dashboard Interface */}
          <div className={`relative transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} ${isVisible ? 'scale-100' : 'scale-95'}`}>
            {/* Dashboard Content */}
            <div className={`relative transition-all duration-1100 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-70'}`}>
              {/* Small gradient background only at bottom center */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-gradient-to-t from-blue-500/30 to-transparent transition-all duration-1000 delay-600 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}></div>
              <img
                src="/images/hero/design-9-1-2048x1479-Photoroom.png"
                alt="Confirmed Orders Dashboard"
                className={`w-full h-auto relative z-10 delay-300 cursor-pointer ${isVisible ? 'scale-100 rotate-0' : 'scale-95 -rotate-1'}`}
                style={{
                  transition: 'transform 300ms ease-out, box-shadow 300ms ease-out, filter 300ms ease-out',
                  transitionDelay: isVisible ? '300ms' : '0ms'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  e.target.style.transition = 'transform 300ms ease-out, box-shadow 300ms ease-out';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.95) rotate(-1deg)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.transition = 'transform 800ms ease-out, box-shadow 800ms ease-out';
                }}
              />
            </div>

            {/* Order management icon floating around */}
            <div className={`absolute -bottom-4 -right-4 rounded-full p-3 shadow-lg transition-all duration-1100 delay-800 ${isVisible ? 'translate-x-0 translate-y-0 rotate-0' : 'translate-x-4 translate-y-4 rotate-45'}`} style={{backgroundColor: '#013387'}}>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} ${isVisible ? 'scale-100' : 'scale-95'}`}>
            {/* Brand Header */}
            <div className={`flex items-center space-x-3 mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-900 delay-600 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'}`} style={{backgroundColor: '#013387'}}>
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <div className="font-bold text-lg" style={{color: '#013387'}}>STOREMATE</div>
                <div className="text-gray-600 text-sm font-medium">Order Management System</div>
              </div>
            </div>

            {/* Main Title */}
            <div className={`transition-all duration-1100 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span style={{color: '#006daf'}}>All Confirmed Orders</span><br />
                in One Place
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                See every confirmed order on a single screen. No more jumping between different pages to find what you need.
              </p>
            </div>

            {/* Order Stats */}
            <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 delay-1000 ${isVisible ? 'scale-100 translate-x-0' : 'scale-90 -translate-x-4'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center transition-all duration-800 delay-1100 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 -rotate-90'}`}>
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Order Visibility</div>
                  </div>
                </div>
              </div>

              <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 delay-1200 ${isVisible ? 'scale-100 translate-x-0' : 'scale-90 translate-x-4'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-800 delay-1300 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-90'}`}>
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">0 sec</div>
                    <div className="text-sm text-gray-600">Load Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={`flex items-center space-x-4 transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <a href="https://welcome.oms.storemate.cloud/register" className={`text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 delay-1500 ${isVisible ? 'scale-100' : 'scale-90'}`}
                style={{backgroundColor: '#013387'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#006daf'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#013387'}>
                Start a Free Trial
              </a>
              <a href="/contact-us" className={`font-semibold transition-all duration-300 flex items-center space-x-2 delay-1600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                style={{color: '#006daf'}}
                onMouseEnter={(e) => e.target.style.color = '#013387'}
                onMouseLeave={(e) => e.target.style.color = '#006daf'}>
                <span>Know more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
    </div>
  );
}
