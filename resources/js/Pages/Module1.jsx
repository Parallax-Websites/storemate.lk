import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CallToAction from '@/Components/CallToAction';
import { useState, useEffect, useRef } from 'react';
import MainLayout from '@/Layouts/MainLayout';

export default function Module1({ auth }) {
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
        const patterns = [
            /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
            /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
            /(?:youtu\.be\/)([^&\n?#]+)/,
            /(?:youtube\.com\/v\/)([^&\n?#]+)/
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1] && match[1].length === 11) {
                return match[1];
            }
        }

        return null;
    };

    const getYouTubeThumbnail = (url) => {
        const videoId = getYouTubeVideoId(url);
        if (videoId) {
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return null;
    };

    // Module 1 video data
    const moduleVideos = [
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
    ];

    return (
        <MainLayout>
            <Head title="Module 1: Getting Started with Storemate OMS - Free Course" />
            <Header auth={auth} />

            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                            backgroundSize: '50px 50px'
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white"></div>
                </div>

                <div className="relative py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        {/* Breadcrumb */}
                        <nav className="mb-8">
                            <ol className="flex items-center space-x-2 text-sm">
                                <li>
                                    <Link href="/free-course" className="text-blue-600 hover:text-blue-800 transition-colors">
                                        Free Course
                                    </Link>
                                </li>
                                <li className="text-gray-400">/</li>
                                <li className="text-gray-600">Module 1</li>
                            </ol>
                        </nav>

                        <div className="text-center">
                            {/* Module Badge */}
                            <div className="mb-6">
                                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-widest shadow-lg" style={{
                                    color: '#006daf',
                                    backgroundColor: '#ffe6daff'
                                }}>
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                    </svg>
                                    MODULE 1
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6" style={{
                                fontWeight: '750',
                                fontStretch: 'ultra-condensed',
                                letterSpacing: '-0.03em',
                                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                            }}>
                                Getting Started with Storemate OMS
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                                Learn the fundamentals and understand why Storemate is perfect for online sellers
                            </p>

                            {/* Module Stats */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{moduleVideos.length}</div>
                                    <div className="text-gray-600">Video Lessons</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2">Beginner</div>
                                    <div className="text-gray-600">Difficulty Level</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">Essential</div>
                                    <div className="text-gray-600">Knowledge Base</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Module Content */}
            <div ref={componentRef} className="py-16 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Module Introduction */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Module Overview</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            This foundational module introduces you to Storemate OMS and explains why traditional POS systems don't work for online sellers.
                            You'll learn about the most trusted sales channels in Sri Lanka and discover how to convert leads into actual sales.
                        </p>
                    </div>

                    {/* Video Lessons */}
                    <div className="space-y-8">
                        {moduleVideos.map((video, index) => (
                            <div key={index} className={`transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div className="md:flex">
                                        {/* Video Thumbnail */}
                                        <div className="md:w-1/3 relative aspect-video md:aspect-auto">
                                            <img
                                                src={`https://img.youtube.com/vi/${getYouTubeVideoId(video.url)}/maxresdefault.jpg`}
                                                alt={video.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const videoId = getYouTubeVideoId(video.url);
                                                    if (videoId) {
                                                        if (e.target.src.includes('maxresdefault')) {
                                                            e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                                        } else if (e.target.src.includes('hqdefault')) {
                                                            e.target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                                                        } else if (e.target.src.includes('mqdefault')) {
                                                            e.target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
                                                        } else {
                                                            e.target.style.display = 'none';
                                                            e.target.parentElement.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6)';
                                                        }
                                                    }
                                                }}
                                            />

                                            {/* Play overlay */}
                                            <a
                                                href={video.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 group"
                                            >
                                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-red-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                                                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                                    </svg>
                                                </div>
                                            </a>

                                            {/* Duration */}
                                            <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                                                {video.duration}
                                            </div>

                                            {/* Lesson Number */}
                                            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                                Lesson {index + 1}
                                            </div>
                                        </div>

                                        {/* Video Info */}
                                        <div className="md:w-2/3 p-8">
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                                {video.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {video.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <a
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
                                                >
                                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                                    </svg>
                                                    Watch Lesson
                                                </a>
                                                <span className="text-sm text-gray-500 font-medium">
                                                    Duration: {video.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="mt-16 flex justify-between items-center">
                        <Link
                            href="/free-course"
                            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Course
                        </Link>

                        <Link
                            href="/module-2"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            Next Module
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
