import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const getCampaignLanguageOverride = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmCampaign = (urlParams.get('utm_campaign') || '').toLowerCase();
    const utmSource = (urlParams.get('utm_source') || '').toLowerCase();
    const utmMedium = (urlParams.get('utm_medium') || '').toLowerCase();
    const utmContent = (urlParams.get('utm_content') || '').toLowerCase();

    const isCommercialVideoCampaign =
        utmCampaign === 'storemate_commercial_video' &&
        utmSource === 'youtube' &&
        (utmMedium === 'ads' ||
            (utmMedium === 'searchads' && utmContent === 'keyword_campaign'));

    const isKeywordSearchCampaign =
        utmCampaign === 'storemate_keyword_search' &&
        (utmSource === 'google' || utmSource === 'youtube') &&
        utmMedium === 'searchads' &&
        utmContent === 'keyword_campaign';

    if (isCommercialVideoCampaign || isKeywordSearchCampaign) {
        return 'en';
    }

    return null;
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const campaignLanguageOverride = getCampaignLanguageOverride();

    const [currentLanguage, setCurrentLanguage] = useState(() => {
        // Force campaign language regardless of saved preference.
        if (campaignLanguageOverride) {
            return campaignLanguageOverride;
        }

        // Get saved language from localStorage or default to Sinhala
        return localStorage.getItem('selectedLanguage') || 'si';
    });

    const changeLanguage = (language) => {
        if (campaignLanguageOverride && language !== campaignLanguageOverride) {
            setCurrentLanguage(campaignLanguageOverride);
            return;
        }

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
