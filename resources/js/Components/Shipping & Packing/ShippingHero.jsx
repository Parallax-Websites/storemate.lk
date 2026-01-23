import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { useShippingTranslation } from '@/Utils/shippingTranslations';

export default function ShippingHero({ auth, onOpenTrialModal }) {
  const { tShipping } = useShippingTranslation();

  const computePageKey = () => {
    const currentPath = route().current();
    if (currentPath && (currentPath.startsWith('module.') || currentPath.startsWith('module-'))) {
      const moduleNumber = currentPath.includes('.') ? currentPath.split('.')[1] : currentPath.split('-')[1];
      return `module${moduleNumber}`;
    }
    const map = {
      'home': 'home',
      'pricing': 'pricing',
      'inquiry': 'inquiry',
      'sales.management': 'sales',
      'shipping.packing': 'shipping',
      'user.contact.product': 'user',
      'about': 'about',
      'free.course': 'courses',
      'contact.us': 'contactus',
      'partner.program': 'partner'
    };
    return map[currentPath] || 'home';
  };
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
                {tShipping('shippingHero.badge')}
              </span>
            </div>
          </div>
          <div className="text-center">
            {/* Headline with staggered animation */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6 transition-all duration-900 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{
              fontWeight: '750',
              fontStretch: 'ultra-condensed',
              letterSpacing: '-0.03em',
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              {tShipping('shippingHero.title')}
            </h1>
            {/* Description with fade-in animation */}
            <p className={`text-base font-medium text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {tShipping('shippingHero.description')}
            </p>

            {/* Feature highlights */}
            <div className={`flex items-center justify-center gap-6 mb-8 transition-all duration-1200 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{tShipping('shippingHero.features.zeroManualEntry')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{tShipping('shippingHero.features.bulkProcessing')}</span>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                id={`btn_start_a_free_trial_hero_${computePageKey()}`}
                href="https://welcome.oms.storemate.cloud/register"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:shadow-lg hover:scale-105 text-center transition-all duration-300 transform hover:-translate-y-1"
                style={{backgroundColor: '#006daf', display: 'inline-block'}}>
                {tShipping('getFreeAccount')}
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className={`relative transition-all duration-1500 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative overflow-hidden rounded-lg mx-auto max-w-5xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group bg-white">
              {/* Mac-style Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200 rounded-t-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer"></div>
              </div>

              {/* Image loading shimmer effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 transition-transform duration-1000 ${isLoaded ? 'translate-x-full' : '-translate-x-full'} z-10`}></div>

              {/* Dashboard Image */}
              <div className="relative">
                <img
                  src="https://cimacleaners.com.au/wp-content/uploads/2025/09/design-10.jpg"
                  alt={tShipping('shippingHero.imageAlt')}
                  className="w-full h-auto group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Mac-style Window Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-gray-200 group-hover:border-blue-300 transition-all duration-700 pointer-events-none"></div>
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
    </div>
  );
}
