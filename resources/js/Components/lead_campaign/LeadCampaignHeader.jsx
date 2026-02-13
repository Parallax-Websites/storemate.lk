import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';

const LeadCampaignHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const langRef = useRef(null);
    const { currentLanguage, changeLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages = [
        { code: 'en', label: 'EN', full: 'English' },
        { code: 'si', label: 'SI', full: 'සිංහල' },
    ];

    const currentLang = languages.find(l => l.code === currentLanguage) || languages[0];

    return (
        <header className={`sticky top-0 z-[9999] border-b transition-colors duration-300 ${scrolled ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#F2F8FB] border-blue-100'}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 sm:h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/lead-campaign">
                            <img src="/oms-v1.png" alt="StoreMate" className="block h-10 sm:h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Right side — Desktop CTA Buttons */}
                    <div className="hidden sm:flex items-center gap-3">
                        {/* Language Dropdown */}
                        <div className="relative" ref={langRef}>
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="inline-flex items-center gap-1.5 border border-gray-200 text-gray-700 font-semibold px-3 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {currentLang.label}
                                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {langOpen && (
                                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => { changeLanguage(lang.code); setLangOpen(false); }}
                                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                                                currentLanguage === lang.code
                                                    ? 'bg-blue-50 text-blue-700 font-semibold'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        >
                                            {lang.full}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <a
                            href="https://welcome.oms.storemate.cloud/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#16162a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            Get Your Free Account
                        </a>
                    </div>

                    {/* Mobile — Hamburger Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
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

            {/* Mobile Menu */}
            <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className={`px-4 pb-5 pt-2 border-t ${scrolled ? 'border-gray-200 bg-white' : 'border-blue-100 bg-[#F2F8FB]'}`}>
                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 mb-4">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => { changeLanguage(lang.code); }}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                                    currentLanguage === lang.code
                                        ? 'bg-[#006daf] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {lang.full}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="https://welcome.oms.storemate.cloud/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#1a1a2e] hover:bg-[#16162a] text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        Get Your Free Account
                    </a>
                </div>
            </div>
        </header>
    );
};

export default LeadCampaignHeader;
