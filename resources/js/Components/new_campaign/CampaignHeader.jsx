import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef, useCallback } from 'react';
import LanguageSelector from '@/Components/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

const CampaignHeader = ({ onOpenTrialForm }) => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { id: 'hero', label: t('nav.home') },
        { id: 'how-it-works', label: t('nav.howItWorks') },
        { id: 'features', label: t('nav.features') },
        { id: 'benefits', label: t('nav.benefits') },
        { id: 'pricing', label: t('nav.pricing') },
        { id: 'faq', label: t('nav.faq') },
        { id: 'contact', label: t('nav.contact') },
    ];

    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 140;
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
        }
        setMobileOpen(false);
    }, []);

    useEffect(() => {
        const sectionIds = navLinks.map(l => l.id);
        const handleScroll = () => {
            const scrollPos = window.scrollY + 180;
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos) {
                    current = id;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        <button
                            onClick={onOpenTrialForm}
                            className="inline-flex items-center gap-1.5 bg-white text-custom-blue-3 font-bold px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            {t('nav.startFreeTrial')}
                        </button>
                        <a
                            href="https://wa.me/94777672155"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#25D366] text-white font-bold px-4 py-1 rounded-full text-sm hover:bg-[#1da851] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header Bar */}
            <div className="border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
                    <div className="flex h-16 sm:h-20 items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/home">
                                <img src="/oms-v1.png" alt="Logo" className="block h-12 sm:h-14 w-auto" />
                            </Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                                        activeSection === link.id
                                            ? 'bg-custom-blue-2 text-white shadow-sm'
                                            : 'text-gray-600 hover:text-custom-blue-2 hover:bg-blue-50'
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Right side — Language + CTA Buttons */}
                        <div className="hidden sm:flex items-center space-x-3">
                            <LanguageSelector />
                            <button
                                onClick={onOpenTrialForm}
                                className="inline-flex items-center gap-2 bg-custom-blue-2 hover:bg-custom-blue-3 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span className="hidden xl:inline">{t('nav.startFreeTrial')}</span>
                                <span className="xl:hidden">Free Trial</span>
                            </button>
                            <a
                                href="https://wa.me/94777672155"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden xl:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                WhatsApp
                            </a>
                        </div>

                        {/* Mobile — Hamburger Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            {mobileOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-5 pt-3 border-t border-gray-100 bg-white">
                    {/* Section Navigation */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                                    activeSection === link.id
                                        ? 'bg-custom-blue-2 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => { onOpenTrialForm(); setMobileOpen(false); }}
                            className="flex items-center justify-center gap-2 w-full bg-custom-blue-2 hover:bg-custom-blue-3 text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            {t('nav.startFreeTrial')}
                        </button>
                        <a
                            href="https://wa.me/94777672155"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default CampaignHeader;
