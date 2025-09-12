import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const { currentLanguage, changeLanguage } = useLanguage();
    const dropdownRef = useRef(null);

    const languages = [
        {
            code: 'en',
            name: 'English',
            flag: '🇺🇸',
            nativeName: 'English'
        },
        {
            code: 'si',
            name: 'Sinhala',
            flag: '🇱🇰',
            nativeName: 'සිංහල'
        },
        {
            code: 'ta',
            name: 'Tamil',
            flag: '🇮🇳',
            nativeName: 'தமிழ்'
        }
    ];

    const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
                aria-expanded={isOpen}
                aria-haspopup="true"
                title={`Current language: ${currentLang.nativeName}`}
            >
                <div className="flex items-center justify-center">
                    <span className="text-2xl text-white">{currentLang.flag}</span>
                </div>

                {/* Small dropdown indicator */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-950 rounded-full shadow-md flex items-center justify-center">
                    <svg
                        className={`w-3 h-3 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {isOpen && (
                <div className="absolute right-0 bottom-full mb-2 w-56 rounded-xl shadow-2xl bg-gradient-to-br from-blue-800 to-blue-900 ring-1 ring-blue-600 ring-opacity-50 z-50 border border-blue-700 overflow-hidden">
                    <div className="py-2" role="menu" aria-orientation="vertical">
                        <div className="px-4 py-2 bg-blue-950 bg-opacity-60 border-b border-blue-600 border-opacity-40">
                            <p className="text-xs font-semibold text-white uppercase tracking-wide">Select Language</p>
                        </div>
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className={`flex items-center w-full px-4 py-3 text-sm transition-all duration-200 ${
                                    currentLanguage === language.code
                                        ? 'bg-blue-950 bg-opacity-80 text-white font-medium border-r-4 border-white'
                                        : 'text-white hover:bg-blue-900 hover:bg-opacity-60'
                                } hover:translate-x-1`}
                                role="menuitem"
                            >
                                <span className="mr-3 text-xl">{language.flag}</span>
                                <div className="flex flex-col items-start flex-1">
                                    <span className="font-medium">{language.nativeName}</span>
                                    <span className="text-xs text-blue-100">{language.name}</span>
                                </div>
                                {currentLanguage === language.code && (
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
