import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CallToAction from '@/Components/CallToAction';
import { useState, useEffect, useRef } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { useAboutTranslation } from '@/Utils/aboutTranslations';
import leadScoring from '@/Utils/leadScoring';

export default function About({ auth }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const headerRef = useRef(null);
    const { tAbout } = useAboutTranslation();

    useEffect(() => {
        leadScoring.trackPageView('about');
        setIsLoaded(true);

        // Intersection Observer for scroll effect
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
        <MainLayout>
            <Head title={tAbout('about.pageTitle')} />
            <Header ref={headerRef} auth={auth} />

            {/* Combined About Storemate & Parallax Technologies Section */}
            <div className="relative bg-white overflow-hidden py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* About Storemate Header */}
                    <div className="text-center mb-16">
                        <h1 className={`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <span className="block xl:inline">{tAbout('about.hero.title.part1')}</span>{' '}
                            <span className="block xl:inline" style={{color: '#006daf'}}>{tAbout('about.hero.title.part2')}</span>
                        </h1>
                        <p className={`mt-6 text-base text-gray-500 sm:mt-8 sm:text-lg max-w-3xl mx-auto md:text-xl transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            {tAbout('about.hero.description')}
                        </p>
                        <div className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <button
                                id={`btn_start_a_free_trial_hero_about`}
                                onClick={() => headerRef.current?.openTrialModal('hero')}
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                                style={{backgroundColor: '#013387'}}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#006daf'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#013387'}
                            >
                                {tAbout('getFreeAccount')}
                            </button>
                            <a
                                href="/contact-us"
                                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300"
                            >
                                {tAbout('about.hero.buttons.contactUs')}
                            </a>
                        </div>
                    </div>

                    {/* Parallax Technologies Story */}
                    <div ref={componentRef} className={`lg:grid lg:grid-cols-2 lg:gap-24 items-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="mb-12 lg:mb-0">
                            <div className="mb-6">
                                <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                                    color: '#006daf',
                                    backgroundColor: '#ffe6daff'
                                }}>
                                    {tAbout('about.story.badge')}
                                </span>
                            </div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">
                                {tAbout('about.story.title')}
                            </h2>
                            <p className="text-lg text-gray-500 mb-4">
                                {tAbout('about.story.description1')}
                            </p>
                            <p className="text-lg text-gray-500 mb-6">
                                {tAbout('about.story.description2')}
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{backgroundColor: '#013387'}}>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900">{tAbout('about.story.teamStats.title')}</h4>
                                    <p className="text-base text-gray-500">{tAbout('about.story.teamStats.description')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="relative overflow-hidden rounded-xl shadow-xl">
                                <img
                                    className="w-full h-64 object-cover hover:scale-105 transition-all duration-300"
                                    src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/DSC08396-Large-1024x566.jpeg"
                                    alt={tAbout('about.story.imageAlts.team')}
                                />
                            </div>
                            <div className="relative overflow-hidden rounded-xl shadow-xl">
                                <img
                                    className="w-full h-64 object-cover hover:scale-105 transition-all duration-300"
                                    src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/05/432624349_921192850012866_2265390938881499857_n-scaled-1-1024x442.jpg"
                                    alt={tAbout('about.story.imageAlts.office')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story - Friendly Team Section */}
            <div className="py-16 bg-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="mb-6">
                            <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                                color: '#006daf',
                                backgroundColor: '#ffe6daff'
                            }}>
                                {tAbout('about.friendlyTeam.badge')}
                            </span>
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {tAbout('about.friendlyTeam.title')}
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                            {tAbout('about.friendlyTeam.description')}
                        </p>
                    </div>

                    {/* Team Photo Grid */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <img
                                className="w-full h-64 object-cover"
                                src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/3-post-1536x1024-1-1024x683.jpg"
                                alt={tAbout('about.friendlyTeam.imageAlts.collaboration')}
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <img
                                className="w-full h-64 object-cover"
                                src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/2-post-1536x1024-1-1024x683.jpg"
                                alt={tAbout('about.friendlyTeam.imageAlts.meeting')}
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <img
                                className="w-full h-64 object-cover"
                                src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/398445227_828030132662472_4340385669822882599_n-1536x1024-1-1024x683.jpg"
                                alt={tAbout('about.friendlyTeam.imageAlts.achievement')}
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <img
                                className="w-full h-64 object-cover"
                                src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/1-post-1536x1024-1-1024x683.jpg"
                                alt={tAbout('about.friendlyTeam.imageAlts.event')}
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <img
                                className="w-full h-64 object-cover"
                                src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/313184887_551366230328865_6684626160421224402_n-1-1536x1024-1-1024x683.jpg"
                                alt={tAbout('about.friendlyTeam.imageAlts.celebration')}
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <img
                                className="w-full h-64 object-cover"
                                src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/APICTA-Photo-1536x1024-1-1024x683.jpeg"
                                alt={tAbout('about.friendlyTeam.imageAlts.apicta')}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards Section - Redesigned */}
            <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="mb-6">
                            <span className="inline-block text-sm font-bold tracking-widest px-6 py-3 rounded-full shadow-lg" style={{
                                color: '#006daf',
                                backgroundColor: '#ffffff',
                                border: '2px solid #006daf'
                            }}>
                                {tAbout('about.awards.badge')}
                            </span>
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
                            <span className="text-black">{tAbout('about.awards.title.part1')}</span>{' '}
                            <span style={{color: '#006daf'}}>{tAbout('about.awards.title.part2')}</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {tAbout('about.awards.description')}
                        </p>
                    </div>

                    {/* Awards Display - Enhanced */}
                    <div className="relative mb-16">
                        <div className="flex justify-center">
                            <div className="relative group">
                                {/* Background decoration */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 via-blue-100 to-purple-200 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

                                {/* Main award image */}
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02] max-w-5xl">
                                    <img
                                        className="w-full h-auto object-cover"
                                        src="https://magenta-dotterel-745114.hostingersite.com/wp-content/uploads/2025/06/canva-awards-1-1024x576.jpg"
                                        alt={tAbout('about.awards.imageAlt')}
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                                    {/* Floating badge */}
                                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-sm font-semibold text-gray-800">{tAbout('about.awards.certified')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Bottom decorative element */}
                    <div className="mt-16 flex justify-center">
                        <div className="flex items-center space-x-4 text-gray-400">
                            <div className="w-8 h-px bg-gray-300"></div>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="w-8 h-px bg-gray-300"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <div className="mb-6">
                            <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                                color: '#006daf',
                                backgroundColor: '#ffe6daff'
                            }}>
                                {tAbout('about.services.badge')}
                            </span>
                        </div>
                        <h2 className="text-base font-semibold tracking-wide uppercase" style={{color: '#006daf'}}>
                            {tAbout('about.services.subtitle')}
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {tAbout('about.services.title')}
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            {tAbout('about.services.description')}
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {tAbout('about.services.serviceList').map((service, index) => (
                                <div key={index} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white" style={{backgroundColor: '#013387'}}>
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                {index === 0 && (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                )}
                                                {index === 1 && (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                )}
                                                {index === 2 && (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                )}
                                                {index === 3 && (
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                )}
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        {service.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            <CallToAction onOpenTrialModal={() => headerRef.current?.openTrialModal('cta')} />
            <Footer />
        </MainLayout>
    );
}
