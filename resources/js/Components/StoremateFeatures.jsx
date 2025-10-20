import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function StoremateFeatures() {
    const { t } = useTranslation();
    const [showVideoModal, setShowVideoModal] = useState(false);

    // Handle video modal
    const openVideoModal = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        setShowVideoModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
        document.body.style.overflow = 'unset';
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeVideoModal();
            }
        };

        if (showVideoModal) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [showVideoModal]);

    return (
        <>
            {/* Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" role="dialog" aria-modal="true">
                    <div className="relative w-full max-w-4xl mx-4">
                        <button
                            onClick={closeVideoModal}
                            aria-label="Close video"
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/-CYtv4drzyo?autoplay=1&rel=0"
                                title="How Storemate Works - Complete guide for Sri Lankan SMEs"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Centered video thumbnail with play overlay */}
            <div className="flex items-center justify-center py-12 px-4">
                <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden cursor-pointer h-64 md:h-96 lg:h-[28rem]" onClick={openVideoModal} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') openVideoModal(e); }}>
                    <img
                        src="https://cimacleaners.com.au/wp-content/uploads/2025/09/Thumbnail-OMS-1-1.webp"
                        alt={t('storemateFeatures.videoDemo')}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                            e.target.src = "https://img.youtube.com/vi/-CYtv4drzyo/maxresdefault.jpg";
                            e.target.onerror = null;
                        }}
                    />

                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center text-red-600 shadow-2xl">
                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                            </svg>
                        </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
                        4:51
                    </div>
                </div>
            </div>
        </>
    );
}
