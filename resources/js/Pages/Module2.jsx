import { Head, Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CallToAction from '@/Components/CallToAction';
import { useState, useEffect, useRef } from 'react';
import MainLayout from '@/Layouts/MainLayout';

export default function Module2({ auth }) {
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

    // Module 2 video data
    const moduleVideos = [
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
    ];

    return (
        <MainLayout>
            <Head title="Module 2: System Features & Management - Free Course" />
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
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-white"></div>
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
                                <li className="text-gray-600">Module 2</li>
                            </ol>
                        </nav>

                        <div className="text-center">
                            {/* Module Badge */}
                            <div className="mb-6">
                                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-widest shadow-lg" style={{
                                    color: '#059669',
                                    backgroundColor: '#ecfdf5'
                                }}>
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                    MODULE 2
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6" style={{
                                fontWeight: '750',
                                fontStretch: 'ultra-condensed',
                                letterSpacing: '-0.03em',
                                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                            }}>
                                System Features & Management
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                                Master the core features including search, inquiries, products, customers and users
                            </p>

                            {/* Module Stats */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2">{moduleVideos.length}</div>
                                    <div className="text-gray-600">Video Lessons</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">Intermediate</div>
                                    <div className="text-gray-600">Difficulty Level</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">Core Skills</div>
                                    <div className="text-gray-600">Learning Focus</div>
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
                            In this comprehensive module, you'll master the essential features of Storemate OMS. Learn how to use global search,
                            manage inquiries, add products and customers, and set up user roles and permissions for your team.
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
                                                            e.target.parentElement.style.background = 'linear-gradient(135deg, #10b981, #3b82f6)';
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
                                            <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
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
                                                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
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
                            href="/module-1"
                            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Previous Module
                        </Link>

                        <Link
                            href="/module-3"
                            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300"
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
