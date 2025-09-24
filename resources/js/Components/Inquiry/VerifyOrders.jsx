import { useState, useEffect, useRef } from 'react';
import { useInquiryTranslation } from '@/Utils/inquiryTranslations';

export default function VerifyOrders() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const { tInquiry } = useInquiryTranslation();

  useEffect(() => {
    setIsLoaded(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
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
        <div className={`absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-xl transition-all duration-1200 delay-200 ${isVisible ? 'translate-x-0 translate-y-0' : '-translate-x-10 -translate-y-10'}`}></div>
        <div className={`absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-xl transition-all duration-1200 delay-400 ${isVisible ? 'translate-x-0 translate-y-0' : 'translate-x-10 translate-y-10'}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-20 h-20 bg-blue-100 rounded-full blur-lg transition-all duration-1200 delay-600 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} ${isVisible ? 'scale-100' : 'scale-95'}`}>
            {/* Brand Header */}
            <div className={`flex items-center space-x-3 mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-900 delay-600 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-12'}`} style={{backgroundColor: '#013387'}}>
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <div className="font-bold text-lg" style={{color: '#013387'}}>{tInquiry('verifyOrders.brand.name')}</div>
                <div className="text-gray-600 text-sm font-medium">{tInquiry('verifyOrders.brand.subtitle')}</div>
              </div>
            </div>

              {/* Main Title */}
            <div className={`transition-all duration-1100 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">{tInquiry('verifyOrders.title.part1')}</span><br />
                <span className="text-gray-900">{tInquiry('verifyOrders.title.part2')}</span><br />
                <span style={{color: '#006daf'}}>{tInquiry('verifyOrders.title.part3')}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {tInquiry('verifyOrders.description')}
              </p>
            </div>

            {/* Verification Features */}
            <div className={`space-y-6 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className={`transition-all duration-300 delay-1000 ${isVisible ? 'scale-100 translate-x-0' : 'scale-90 -translate-x-4'}`}>
                <div className="flex items-start space-x-3">
                  <span className="mt-1.5 text-blue-600">•</span>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{tInquiry('verifyOrders.features.autoVerification.title')}</div>
                    <div className="text-sm text-gray-600">{tInquiry('verifyOrders.features.autoVerification.desc')}</div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-300 delay-1200 ${isVisible ? 'scale-100 translate-x-0' : 'scale-90 translate-x-4'}`}>
                <div className="flex items-start space-x-3">
                  <span className="mt-1.5 text-blue-600">•</span>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{tInquiry('verifyOrders.features.customerFollowups.title')}</div>
                    <div className="text-sm text-gray-600">{tInquiry('verifyOrders.features.customerFollowups.desc')}</div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-300 delay-1400 ${isVisible ? 'scale-100 translate-x-0' : 'scale-90 -translate-x-4'}`}>
                <div className="flex items-start space-x-3">
                  <span className="mt-1.5 text-blue-600">•</span>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{tInquiry('verifyOrders.features.genuineOrders.title')}</div>
                    <div className="text-sm text-gray-600">{tInquiry('verifyOrders.features.genuineOrders.desc')}</div>
                  </div>
                </div>
              </div>
            </div>            {/* CTA */}
            <div className={`flex items-center space-x-4 transition-all duration-1000 delay-1600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a href="https://welcome.oms.storemate.cloud/register" className="text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                style={{backgroundColor: '#013387'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#006daf'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#013387'}>
                {tInquiry('verifyOrders.startFreeTrial')}
                <svg
                  className="inline-block w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="/contact-us" className="font-semibold transition-colors duration-300 flex items-center space-x-2 group"
                style={{color: '#006daf'}}
                onMouseEnter={(e) => e.target.style.color = '#013387'}
                onMouseLeave={(e) => e.target.style.color = '#006daf'}>
                <span>{tInquiry('verifyOrders.knowMore')}</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Dashboard Interface */}
          <div className={`relative transition-all duration-1000 delay-1000 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'}`}>
            <div className="relative">
              <img
                src="https://cimacleaners.com.au/wp-content/uploads/2025/09/Generated-Image-September-23-2025-4_35PM-Photoroom-1.png"
                alt={tInquiry('verifyOrders.imageAlt')}
                className="w-full h-auto relative z-10 transition-all duration-300 ease-out"
                style={{
                  filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.transition = 'transform 300ms ease-out';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.transition = 'transform 800ms ease-out';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
    </div>
  );
}
