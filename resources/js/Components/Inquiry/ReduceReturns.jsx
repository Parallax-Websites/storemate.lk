import { useState, useEffect, useRef } from 'react';
import { useInquiryTranslation } from '@/Utils/inquiryTranslations';

export default function ReduceReturns() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const { tInquiry } = useInquiryTranslation();

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

          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} ${isVisible ? 'scale-100' : 'scale-95'}`}>


            {/* Main Title */}
            <div className={`transition-all duration-1100 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {tInquiry('reduceReturns.title.part1')}<br />
                <span style={{color: '#006daf'}}>{tInquiry('reduceReturns.title.part2')}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {tInquiry('reduceReturns.description')}
              </p>
            </div>

            {/* Channel Stats */}
            <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 delay-1000 ${isVisible ? 'scale-100 translate-x-0' : 'scale-90 -translate-x-4'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center transition-all duration-800 delay-1100 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 -rotate-90'}`}>
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{tInquiry('reduceReturns.stats.returnReduction.value')}</div>
                    <div className="text-sm text-gray-600">{tInquiry('reduceReturns.stats.returnReduction.label')}</div>
                  </div>
                </div>
              </div>

              <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 delay-1200 ${isVisible ? 'scale-100 translate-x-0' : 'scale-90 translate-x-4'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center transition-all duration-800 delay-1300 ${isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-90'}`}>
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{tInquiry('reduceReturns.stats.detectionRate.value')}</div>
                    <div className="text-sm text-gray-600">{tInquiry('reduceReturns.stats.detectionRate.label')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}

          </div>

          {/* Right Column - Dashboard Interface */}
          <div className={`relative transition-all duration-1000 delay-1000 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'}`}>
            {/* Dashboard Content */}
            <div className="relative">
             <img
                src="https://cimacleaners.com.au/wp-content/uploads/2025/10/Group-2-11.png"
                alt={tInquiry('reduceReturns.imageAlt')}
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
