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
            shortName: 'En',
            nativeName: 'English'
        },
        {
            code: 'si',
            name: 'Sinhala',
            shortName: 'සිං',
            nativeName: 'සිංහල'
        },
        {
            code: 'ta',
            name: 'Tamil',
            shortName: 'த',
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
                className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none cursor-pointer gap-1"
                aria-expanded={isOpen}
                aria-haspopup="true"
                title={`Current language: ${currentLang.nativeName}`}
            >
                <span>{currentLang.shortName}</span>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className={`flex items-center w-full px-4 py-2 text-sm ${
                                    currentLanguage === language.code
                                        ? 'bg-gray-100 text-gray-900'
                                        : 'text-gray-700 hover:bg-gray-50'
                                }`}
                                role="menuitem"
                            >
                                <span className="mr-3 font-medium">{language.shortName}</span>
                                <span className="text-gray-500">{language.nativeName}</span>
                                {currentLanguage === language.code && (
                                    <svg className="ml-auto h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
