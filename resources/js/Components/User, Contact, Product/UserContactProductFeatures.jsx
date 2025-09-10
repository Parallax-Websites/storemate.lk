import { useState, useEffect, useRef } from 'react';

export default function UserContactProductFeatures() {
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
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: "User Management",
      description: "Create and manage user accounts effortlessly. Assign roles and permissions to streamline team responsibilities."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Product Management",
      description: "Add items with details like categories, brands, and quantities. Stay organized with a clean and searchable product database."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Contact Management",
      description: "Keep all customer and vendor information in one secure place. Access profiles quickly for smoother communication and service."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Easy Organization",
      description: "Navigate your data with smart sorting and filtering tools. Locate users, products, or contacts instantly with precision."
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
              onMouseLeave={(e) => e.target.style.color = '#006daf'}>Smart Management</span>
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
                  Know More
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
