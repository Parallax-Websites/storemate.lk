import { useState, useEffect, useRef } from 'react';

export default function ShippingFeatures() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Effortless Order Uploads",
      description: "Save 5+ hours daily on manual order upload to courier portal"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Lightning-Fast Order Processing",
      description: "Process 10x more orders in the same time"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Minimal Shipping Errors",
      description: "Reduce shipping errors by 90%"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Scalable Order Management",
      description: "Handle more orders without extra staff"
    }
  ];

  return (
    <div className="py-20" ref={componentRef}>
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-30 transition-all duration-1000 ${isVisible ? 'translate-y-0 rotate-0' : 'translate-y-4 -rotate-45'}`} style={{transitionDelay: '200ms'}}></div>
        <div className={`absolute top-32 right-20 w-12 h-12 bg-indigo-100 rounded-full opacity-40 transition-all duration-1200 ${isVisible ? 'translate-y-0 rotate-0' : '-translate-y-4 rotate-45'}`} style={{transitionDelay: '400ms'}}></div>
        <div className={`absolute bottom-20 left-20 w-16 h-16 bg-purple-100 rounded-full opacity-35 transition-all duration-1000 ${isVisible ? 'translate-y-0 rotate-0' : 'translate-y-6 rotate-90'}`} style={{transitionDelay: '600ms'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
              Storemate Order Management System
            </span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span style={{color: '#006daf'}}
              className="transition-all duration-300"
              onMouseEnter={(e) => e.target.style.color = '#013387'}
              onMouseLeave={(e) => e.target.style.color = '#006daf'}>Boost Your Shipping Efficiency</span>
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Automate order processing, reduce errors, and scale effortlessly without extra staff
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${600 + (index * 200)}ms`
              }}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div
                  className={`w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 hover:bg-blue-50 rounded-lg cursor-pointer group ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-75 -rotate-45'
                  }`}
                  style={{
                    color: '#013387',
                    transitionDelay: `${800 + (index * 200)}ms`
                  }}
                >
                  <div
                    className="transition-all duration-300 group-hover:text-[#006daf]"
                    style={{ color: 'inherit' }}
                  >
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: `${1000 + (index * 200)}ms`}}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <a href="#" className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors duration-300 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
