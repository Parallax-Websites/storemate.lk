import { Link } from '@inertiajs/react';
import LanguageSelector from '@/Components/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

const CampaignHeader = () => {
    const { t } = useTranslation();

    return (
        <nav className="sticky top-0 bg-white z-[9999]">
            {/* Campaign Banner */}
            <div className="bg-gradient-to-r from-custom-blue-2 to-custom-blue-3 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-3 py-2.5 text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                        </span>
                        <span className="hidden sm:inline font-medium">{t('nav.callCampaign')}</span>
                        <a
                            href="tel:0776993472"
                            className="inline-flex items-center gap-1.5 bg-white text-custom-blue-3 font-bold px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            077 699 3472
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header Bar */}
            <div className="border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/call-campaign">
                                <img src="/oms-v1.png" alt="Logo" className="block h-14 w-auto" />
                            </Link>
                        </div>

                        {/* Right side — Language + Call Button */}
                        <div className="flex items-center space-x-3">
                            <LanguageSelector />
                            <a
                                href="tel:0776993472"
                                className="inline-flex items-center gap-2 bg-custom-blue-2 hover:bg-custom-blue-3 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="hidden sm:inline">{t('nav.callNow')}</span>
                                <span className="sm:hidden">Call</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default CampaignHeader;
