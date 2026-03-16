import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const getCampaignLanguageOverride = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const utmCampaign = urlParams.get('utm_campaign')?.toLowerCase();
    const utmSource = urlParams.get('utm_source')?.toLowerCase();
    const utmMedium = urlParams.get('utm_medium')?.toLowerCase();
    const utmContent = urlParams.get('utm_content')?.toLowerCase();

    const isCommercialVideoCampaign =
        utmCampaign === 'storemate_commercial_video' &&
        utmContent === 'commercial_video' &&
        ((utmSource === 'google' && utmMedium === 'youtube') ||
            (utmSource === 'youtube' && utmMedium === 'ads'));

    return isCommercialVideoCampaign ? 'en' : null;
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        // Campaign-specific default language should override any saved local preference.
        const campaignLanguageOverride = getCampaignLanguageOverride();
        if (campaignLanguageOverride) {
            return campaignLanguageOverride;
        }

        // Get saved language from localStorage or default to Sinhala
        return localStorage.getItem('selectedLanguage') || 'si';
    });

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
        localStorage.setItem('selectedLanguage', language);
    };

    useEffect(() => {
        // Re-apply campaign override once on mount to handle hydration/boot timing edge cases.
        const campaignLanguageOverride = getCampaignLanguageOverride();
        if (campaignLanguageOverride && currentLanguage !== campaignLanguageOverride) {
            setCurrentLanguage(campaignLanguageOverride);
        }
    }, []);

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
