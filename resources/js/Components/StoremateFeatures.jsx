import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import leadScoring from '@/Utils/leadScoring';

const videos = [
    { id: '-uaIR7ujjyo', thumbnail: '/images/vid/1.jpg' },
    { id: 'D6Eu42pBhtI', thumbnail: '/images/vid/2.jpg' },
    { id: 'UmKREoxWjoc', thumbnail: '/images/vid/3.jpg' },
    { id: 'RbzHweGZ6YA', thumbnail: '/images/vid/4.jpg' },
    { id: 'h6otioSo3bo', thumbnail: '/images/vid/5.jpg' },
    { id: 'q2s6Gd_5J7k', thumbnail: '/images/vid/6.jpg' },
];

export default function StoremateFeatures() {
    const { t } = useTranslation();
    const [activeVideo, setActiveVideo] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // YouTube Player API
    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }, []);

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const openVideoModal = (video) => {
        setActiveVideo(video);
        document.body.style.overflow = 'hidden';

        // GTM tracking
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'lead_action',
                leadAction: 'Video Played',
                videoId: video.id,
                videoUrl: window.location.href
            });
        }
    };

    const closeVideoModal = () => {
        setActiveVideo(null);
        document.body.style.overflow = 'unset';
    };

    // Close on escape
    useEffect(() => {
        const handleEscape = (e) => { if (e.key === 'Escape') closeVideoModal(); };
        if (activeVideo) document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [activeVideo]);

    return (
        <>
            {/* Video Modal — portrait (9:16) for Shorts */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" role="dialog" aria-modal="true" onClick={closeVideoModal}>
                    <div className="relative w-full max-w-sm mx-4" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeVideoModal}
                            aria-label="Close video"
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative bg-black rounded-2xl overflow-hidden" style={{ paddingBottom: '177.78%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&enablejsapi=1`}
                                title="StoreMate OMS Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Two-Column Section */}
            <section ref={sectionRef} className="relative bg-white py-20 sm:py-28 overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column — Title & Description */}
                        <div className={`lg:col-span-5 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#2780D3' }}>
                                {t('storemateFeatures.subtitle')}
                            </p>
                            <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug tracking-tight">
                                {t('storemateFeatures.videoDemo')}
                            </h2>
                            <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
                                {t('storemateFeatures.videoDescription')}
                            </p>
                            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
                                {t('storemateFeatures.description1')}
                            </p>

                            <div className="mt-10">
                                <a
                                    href="https://welcome.oms.storemate.cloud/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#E07817] text-white font-semibold text-base hover:bg-[#c06514] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    {t('storemateFeatures.rightBox.cta')}
                                </a>
                            </div>
                        </div>

                        {/* Right Column — Video Grid */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {videos.map((video, index) => (
                                    <div
                                        key={video.id}
                                        className={`relative rounded-2xl overflow-hidden cursor-pointer group transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                        style={{ transitionDelay: `${200 + index * 100}ms` }}
                                        onClick={() => openVideoModal(video)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => { if (e.key === 'Enter') openVideoModal(video); }}
                                    >
                                        {/* Thumbnail — portrait aspect ratio */}
                                        <div className="relative" style={{ paddingBottom: '177.78%' }}>
                                            <img
                                                src={video.thumbnail}
                                                alt={`StoreMate OMS Video ${index + 1}`}
                                                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                onError={(e) => {
                                                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                                    e.target.onerror = null;
                                                }}
                                            />

                                            {/* Hover overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-red-600 shadow-xl opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                                                    <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                                    </svg>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
