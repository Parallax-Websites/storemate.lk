import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        // Check URL parameters for specific campaign
        const urlParams = new URLSearchParams(window.location.search);
        const utmCampaign = urlParams.get('utm_campaign');
        const utmSource = urlParams.get('utm_source');
        const utmMedium = urlParams.get('utm_medium');

        // Set English as default for the commercial video campaign
        if (utmCampaign === 'storemate_commercial_video' &&
            utmSource === 'Youtube' &&
            utmMedium === 'ads') {
            return 'en';
        }

        // Get saved language from localStorage or default to Sinhala
        return localStorage.getItem('selectedLanguage') || 'si';
    });

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
        localStorage.setItem('selectedLanguage', language);
    };

    useEffect(() => {
        // Update document language attribute
        document.documentElement.lang = currentLanguage;
    }, [currentLanguage]);

    const value = {
        currentLanguage,
        changeLanguage,
        isEnglish: currentLanguage === 'en',
        isSinhala: currentLanguage === 'si',
        isTamil: currentLanguage === 'ta',
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext };
