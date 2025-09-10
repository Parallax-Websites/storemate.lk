import { useState, useEffect, useRef } from 'react';

export default function SalesFeatures() {
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
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Centralized Order Management",
      description: "Efficiently manage all your customer orders in one place."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Real-Time Courier Status Tracking",
      description: "Track each order's courier and sync status to stay on top of deliveries."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      ),
      title: "Streamlined Packing Process",
      description: "Monitor packing progress and ensure timely shipping without delays."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Accurate Delivery Information",
      description: "Keep customers informed with up-to-date tracking and delivery status."
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
              onMouseLeave={(e) => e.target.style.color = '#006daf'}>Sales Management</span> Features
          </h2>
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
