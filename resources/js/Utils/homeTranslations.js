import { useLanguage } from '@/Contexts/LanguageContext';

export const homeTranslations = {


            getFreeAccount: {
            en: 'Get Your Free Account',
            si: 'නොමිලේ ලියාපදිංචි වන්න',
            ta: 'உங்கள் இலவச கணக்கை பெறுங்கள்'
        },
    // How It Works Section
    howItWorks: {
        title: {
            line1: {
                en: 'From Inquiry to Delivery',
                si: 'විමසීමේ සිට බෙදාහැරීම දක්වා',
                ta: 'விசாரணையிலிருந்து விநியோகம் வரை'
            },
            line2: {
                en: '4 Simple Steps',
                si: 'සරල පියවර 4',
                ta: '4 எளிய படிகள்'
            }
        },
        subtitle: {
            en: 'Streamline your order management from collection to delivery',
            si: 'එකතු කිරීමේ සිට බෙදාහැරීම දක්වා ඔබේ ඇණවුම් කළමනාකරණය ක්‍රමවත් කරන්න',
            ta: 'சேகரிப்பு முதல் விநியோகம் வரை உங்கள் ஆர்டர் மேலாண்மையை நெறிப்படுத்துங்கள்'
        },
        steps: {
            step1: {
                title: {
                    en: 'Collect',
                    si: 'එකතු කරන්න',
                    ta: 'சேகரி'
                },
                description: {
                    en: 'Collect Orders From Facebook, WhatsApp, Instagram, & Phone Calls',
                    si: 'Facebook, WhatsApp, Instagram සහ දුරකථන ඇමතුම් වලින් ඇණවුම් එකතු කරන්න',
                    ta: 'Facebook, WhatsApp, Instagram மற்றும் தொலைபேசி அழைப்புகளிலிருந்து ஆர்டர்களைச் சேகரிக்கவும்'
                }
            },
            step2: {
                title: {
                    en: 'Confirm',
                    si: 'තහවුරු කරන්න',
                    ta: 'உறுதிப்படுத்து'
                },
                description: {
                    en: 'Reduce Duplicate Orders & Confirm Orders Quickly With Automated Follow-Ups',
                    si: 'අනුපිටපත් ඇණවුම් අඩු කරන්න සහ ස්වයංක්‍රීය පසු විපරම් සමඟ ඇණවුම් ඉක්මනින් තහවුරු කරන්න',
                    ta: 'நகல் ஆர்டர்களைக் குறைக்கவும் மற்றும் தானியங்கு பின்தொடர்தல்களுடன் ஆர்டர்களை விரைவாக உறுதிப்படுத்தவும்'
                }
            },
            step3: {
                title: {
                    en: 'Sync',
                    si: 'සමමුහුර්ත කරන්න',
                    ta: 'ஒத்திசைக்கவும்'
                },
                description: {
                    en: 'Connect With Any Courier Partner And Print Waybill With One Click',
                    si: 'ඕනෑම කුරියර් හවුල්කරුවෙකු සමඟ සම්බන්ධ වී එක් ක්ලික් එකකින් මාර්ග බිල්පත මුද්‍රණය කරන්න',
                    ta: 'எந்த கூரியர் பார்ட்னருடனும் இணைக்கவும் மற்றும் ஒரே கிளிக்கில் வேபில்லை அச்சிடவும்'
                }
            },
            step4: {
                title: {
                    en: 'Monitor',
                    si: 'නිරීක්ෂණය කරන්න',
                    ta: 'கண்காணிக்கவும்'
                },
                description: {
                    en: 'Track Delivery Status, Order Progress, & Customer History All In One Place',
                    si: 'බෙදාහැරීමේ තත්වය, ඇණවුම් ප්‍රගතිය සහ පාරිභෝගික ඉතිහාසය සියල්ල එක තැනකින් නිරීක්ෂණය කරන්න',
                    ta: 'விநியோக நிலை, ஆர்டர் முன்னேற்றம் மற்றும் வாடிக்கையாளர் வரலாறு அனைத்தையும் ஒரே இடத்தில் கண்காணிக்கவும்'
                }
            }
        }
    }
};

// Custom hook for home page translations
export const useHomeTranslation = () => {
    const { currentLanguage } = useLanguage();

    const tHome = (key) => {
        const keys = key.split('.');
        let value = homeTranslations;

        for (const k of keys) {
            value = value[k];
            if (!value) return key; // Return key if translation not found
        }

        return value[currentLanguage] || value.en || key; // Fallback to English or key
    };

    return { tHome, currentLanguage };
};

// Helper function to get home page translations
export const tHome = (key, language = 'en') => {
    const keys = key.split('.');
    let value = homeTranslations;

    for (const k of keys) {
        value = value[k];
        if (!value) return key; // Return key if translation not found
    }

    return value[language] || value.en || key; // Fallback to English or key
};
