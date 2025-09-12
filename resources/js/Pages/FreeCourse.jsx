import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CallToAction from '@/Components/CallToAction';
import { useState, useEffect, useRef } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { useFreeCourseTranslation } from '@/Utils/freeCourseTranslations';

export default function FreeCourse({ auth }) {
    const { tFreeCourse } = useFreeCourseTranslation();
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

    // Function to extract YouTube video ID from URL
    const getYouTubeVideoId = (url) => {
        // Handle multiple YouTube URL formats
        const patterns = [
            /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,  // youtube.com/watch?v=VIDEO_ID
            /(?:youtube\.com\/embed\/)([^&\n?#]+)/,    // youtube.com/embed/VIDEO_ID
            /(?:youtu\.be\/)([^&\n?#]+)/,              // youtu.be/VIDEO_ID
            /(?:youtube\.com\/v\/)([^&\n?#]+)/         // youtube.com/v/VIDEO_ID
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1] && match[1].length === 11) {
                return match[1];
            }
        }

        return null;
    };

    // Function to get YouTube thumbnail URL with multiple fallbacks
    const getYouTubeThumbnail = (url) => {
        const videoId = getYouTubeVideoId(url);
        if (videoId) {
            // Start with hqdefault as it's more commonly available than maxresdefault
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return null;
    };

    // Video course data organized by sections
    const courseModules = [
        {
            title: "Getting Started with Storemate OMS",
            description: "Learn the fundamentals and understand why Storemate is perfect for online sellers",
            videos: [
                {
                    title: "Online Sellers ලට POS Software ගැළපෙන්නේ නැත්තේ ඇයි? | Online Order Management Software",
                    url: "https://youtu.be/EwXu1ovEBFY?si=KsMr7XC90wCi3WyM",
                    duration: "1:54",
                    description: "Why POS Software doesn't suit online sellers and what they need instead"
                },
                {
                    title: "The Most Trusted Sales Channel for E-commerce in Sri Lanka? | Online Order Management Software",
                    url: "https://youtu.be/BiRqNy6KkJU?si=NDSZwL-ZGxFJ3IAs",
                    duration: "2:03",
                    description: "Discover the most reliable sales channels for Sri Lankan e-commerce businesses"
                },
                {
                    title: "ඔයාට Leads ආවත් Sale එකක් වෙන්නේ නැද්ද? Online Order Management Software",
                    url: "https://youtu.be/NcHyxW8aglA?si=aatb_TOb3nEFwD0T",
                    duration: "3:41",
                    description: "Getting leads but no sales? Learn how to convert leads effectively"
                },
                {
                    title: "Order Sync with Courier Partner",
                    url: "https://youtu.be/XjxDV-ab7QU?si=1R21NMOf5PLp-Yyg",
                    duration: "1:00",
                    description: "How to synchronize orders with your courier delivery partners"
                },
                {
                    title: "Make Your Online Business Operations Smooth | Storemate OMS Is for Sri Lankan SMEs 🇱🇰📦",
                    url: "https://youtu.be/-CYtv4drzyo?si=yq8utB6BZVlueoC4",
                    duration: "4:51",
                    description: "Complete guide on making your online business operations smooth with Storemate OMS"
                }
            ]
        },
        {
            title: "Courier Integration & COD Business",
            description: "Learn how to start and manage a successful COD business with courier integrations",
            videos: [
                {
                    title: "Global Search | Online Order Management Software",
                    url: "https://youtu.be/1nWyiEuQd88?si=jn0WZdg9EBd3i7tM",
                    duration: "1:01",
                    description: "Use the powerful global search feature to find anything quickly"
                },
                {
                    title: "How to Add Inquiry",
                    url: "https://youtu.be/W0mCCdN9iTU?si=wV7znSlv3XiDf6vU",
                    duration: "3:11",
                    description: "Step-by-step guide to add and manage customer inquiries"
                },
                {
                    title: "Inquiry Table",
                    url: "https://youtu.be/YfkflwDGv-k?si=X3wmDoA3kUvsoOVk",
                    duration: "3:32",
                    description: "Navigate and manage your inquiry table effectively"
                },
                {
                    title: "How to Add Product",
                    url: "https://youtu.be/QarGtLOKNuA?si=3HDnljDBO7yvqwEE",
                    duration: "4:01",
                    description: "Complete guide to adding products to your inventory system"
                },
                {
                    title: "How to Add Customer",
                    url: "https://youtu.be/rSE2VB7Ybsc?si=1i0_e7TYTzuaifV_",
                    duration: "2:56",
                    description: "Learn how to add and manage customer information"
                },
                {
                    title: "How to Add User Role",
                    url: "https://youtu.be/qIy6InWyC0U?si=NIQnvKJFe_uK3pcz",
                    duration: "2:38",
                    description: "Set up user roles and permissions for your team"
                },
                {
                    title: "How to Add User",
                    url: "https://youtu.be/WZMhL7v0lwM?si=KpLn96zw0k5gKNFz",
                    duration: "3:13",
                    description: "Add new users to your Storemate OMS system"
                }
            ]
        },
        {
            title: "How to start COD Business in Sri Lanka",
            description: "Complete guide to starting and scaling your Cash on Delivery business",
            videos: [
                {
                    title: "How to Work with Courier Company",
                    url: "https://youtu.be/vyJsy8sW4_o?si=it1jUtg6TvvFqy_W",
                    duration: "Video Length",
                    description: "Complete guide to partnering and working with courier companies"
                },
                {
                    title: "How to Register with Delivery Partner",
                    url: "https://youtu.be/Int_5tFzjvM?si=aKBDJUDokBNmZ-44",
                    duration: "7:03",
                    description: "Step-by-step registration process with delivery partners"
                },
                {
                    title: "How to Apply COD Business",
                    url: "https://youtu.be/ZNNfJWGM04E?si=sIEmiJKODaIVWoxL",
                    duration: "4:01",
                    description: "Set up and manage Cash on Delivery business operations"
                },
                {
                    title: "What is COD? (Cash on Delivery)",
                    url: "https://youtu.be/GsLzFLNVo68?si=4qCCVcMUHB8jpOmM",
                    duration: "3:10",
                    description: "Understanding Cash on Delivery and its benefits for your business"
                }
            ]
        }
    ];

    return (
        <MainLayout>
                        <Head title={tFreeCourse('freeCourse.pageTitle')} />
            <Header auth={auth} />

            {/* Hero Section */}
                            {/* Hero Section */}
                <section className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-700 mb-8">
                                <span className="mr-2">🎓</span>
                                {tFreeCourse('freeCourse.hero.badge')}
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-black">{tFreeCourse('freeCourse.hero.title.part1')}</span>{' '}
                                <span style={{color: '#006daf'}}>{tFreeCourse('freeCourse.hero.title.part2')}</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                                {tFreeCourse('freeCourse.hero.description')}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                                {tFreeCourse('freeCourse.hero.stats').map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                        <div className="text-gray-600">{stat.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            {/* Course Modules */}
            <div ref={componentRef} className="py-16 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6">
                            <span className="text-black">{tFreeCourse('freeCourse.courseModules.sectionTitle')}</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {tFreeCourse('freeCourse.courseModules.sectionDescription')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courseModules.map((module, moduleIndex) => {
                            const moduleTranslation = tFreeCourse(`freeCourse.courseModules.modules.${moduleIndex}`);
                            return (
                                <div key={moduleIndex} className={`transition-all duration-1000 delay-${moduleIndex * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <Link
                                    href={`/module-${moduleIndex + 1}`}
                                    className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group cursor-pointer"
                                >
                                    {/* Module Header */}
                                    <div className="p-8 text-center">
                                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-6 ${
                                            moduleIndex === 0 ? 'bg-blue-100 text-blue-800' :
                                            moduleIndex === 1 ? 'bg-green-100 text-green-800' :
                                            'bg-purple-100 text-purple-800'
                                        }`}>
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                {moduleIndex === 0 && (
                                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                                                )}
                                                {moduleIndex === 1 && (
                                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                )}
                                                {moduleIndex === 2 && (
                                                    <>
                                                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                                                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                                                    </>
                                                )}
                                            </svg>
                                            Module {moduleIndex + 1}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                            <span className="text-black">{moduleTranslation.title}</span>
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {moduleTranslation.description}
                                        </p>

                                        {/* Module Stats */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="text-center">
                                                <div className={`text-2xl font-bold mb-1 ${
                                                    moduleIndex === 0 ? 'text-blue-600' :
                                                    moduleIndex === 1 ? 'text-green-600' :
                                                    'text-purple-600'
                                                }`}>
                                                    {module.videos.length}
                                                </div>
                                                <div className="text-gray-500 text-sm">{moduleTranslation.videoText}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className={`text-2xl font-bold mb-1 ${
                                                    moduleIndex === 0 ? 'text-blue-600' :
                                                    moduleIndex === 1 ? 'text-green-600' :
                                                    'text-purple-600'
                                                }`}>
                                                    {moduleTranslation.level}
                                                </div>
                                                <div className="text-gray-500 text-sm">{moduleTranslation.levelText}</div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg ${
                                            moduleIndex === 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                                            moduleIndex === 1 ? 'bg-green-600 hover:bg-green-700 text-white' :
                                            'bg-purple-600 hover:bg-purple-700 text-white'
                                        }`}>
                                            {moduleTranslation.startButton}
                                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Video Preview */}
                                    <div className="px-8 pb-8">
                                        <div className="bg-gray-100 rounded-lg p-4">
                                            <h4 className="font-medium text-gray-900 mb-2">{moduleTranslation.featuredText}</h4>
                                            <ul className="space-y-1">
                                                {module.videos.slice(0, 3).map((video, index) => {
                                                    const videoTranslation = tFreeCourse(`freeCourse.videos.modules.${moduleIndex}.videos.${index}`);
                                                    return (
                                                        <li key={index} className="text-sm text-gray-600 flex items-center">
                                                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                                                            <span className="truncate">{videoTranslation.title.substring(0, 50)}...</span>
                                                        </li>
                                                    );
                                                })}
                                                {module.videos.length > 3 && (
                                                    <li className="text-sm text-gray-500 font-medium">
                                                        +{module.videos.length - 3} {moduleTranslation.moreText}
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            );
                        })}
                    </div>

                    {/* Course Benefits */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-8">
                            <span className="text-black">{tFreeCourse('freeCourse.benefits.title')}</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {tFreeCourse('freeCourse.benefits.items').map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                                        index === 0 ? 'bg-blue-100' :
                                        index === 1 ? 'bg-green-100' :
                                        index === 2 ? 'bg-purple-100' :
                                        'bg-orange-100'
                                    }`}>
                                        <svg className={`w-6 h-6 ${
                                            index === 0 ? 'text-blue-600' :
                                            index === 1 ? 'text-green-600' :
                                            index === 2 ? 'text-purple-600' :
                                            'text-orange-600'
                                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {index === 0 && (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            )}
                                            {index === 1 && (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            )}
                                            {index === 2 && (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                            )}
                                            {index === 3 && (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                            )}
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
