import { useLanguage } from '@/Contexts/LanguageContext';

export const inquiryTranslations = {
    // Inquiry Hero Section
    inquiryHero: {
        badge: {
            en: 'INQUIRY MANAGEMENT',
            si: 'විමසුම් කළමනාකරණය',
            ta: 'விசாரணை மேலாண்மை'
        },
        title: {
            en: 'Streamline Your Customer Inquiries',
            si: 'ඔබේ පාරිභෝගික විමසුම් ක්‍රමවත් කරන්න',
            ta: 'உங்கள் வாடிக்கையாளர் விசாரணைகளை நெறிப்படுத்துங்கள்'
        },
        description: {
            en: 'Transform how you handle customer inquiries with our powerful inquiry management system. Capture, organize, and convert inquiries into sales effortlessly while never missing a potential customer.',
            si: 'අපගේ ප්‍රබල විමසුම් කළමනාකරණ පද්ධතිය සමඟ ඔබ පාරිභෝගික විමසුම් හසුරුවන ආකාරය වෙනස් කරන්න. විභව පාරිභෝගිකයෙකු අතහැර නොදමා විමසුම් ග්‍රහණය කර, සංවිධානය කර, අලෙවියට පරිවර්තනය කරන්න.',
            ta: 'எங்கள் சக்திவாய்ந்த விசாரணை மேலாண்மை அமைப்புடன் வாடிக்கையாளர் விசாரணைகளை நீங்கள் கையாளும் விதத்தை மாற்றுங்கள். சாத்தியமான வாடிக்கையாளரை ஒருபோதும் தவறவிடாமல் விசாரணைகளைப் பிடிக்கவும், ஒழுங்கமைக்கவும், விற்பனையாக மாற்றவும்.'
        },
        startFreeTrial: {
            en: 'Start a Free Trial',
            si: 'නොමිලේ අත්හදා බැලීමක් ආරම්භ කරන්න',
            ta: 'இலவச சோதனையைத் தொடங்குங்கள்'
        },
        howItWorks: {
            en: 'How It Works',
            si: 'එය ක්‍රියා කරන ආකාරය',
            ta: 'இது எவ்வாறு செயல்படுகிறது'
        },
        imageAlt: {
            en: 'Inquiry Management System Dashboard',
            si: 'විමසුම් කළමනාකරණ පද්ධති උපකරණ පුවරුව',
            ta: 'விசாரணை மேலாண்மை அமைப்பு டாஷ்போர்டு'
        }
    },

    // Inquiry Features Section
    inquiryFeatures: {
        title: {
            en: 'Get 360° view of your inquiries',
            si: 'ඔබේ විමසුම්වල 360° දර්ශනයක් ලබා ගන්න',
            ta: 'உங்கள் விசாரணைகளின் 360° பார்வையைப் பெறுங்கள்'
        },
        features: {
            customerProfiles: {
                title: {
                    en: 'Customer Profiles & History',
                    si: 'පාරිභෝගික පැතිකඩ සහ ඉතිහාසය',
                    ta: 'வாடிக்கையாளர் விவரங்கள் மற்றும் வரலாறு'
                },
                description: {
                    en: 'Access detailed profiles of every customer along with their order history, so you can make informed decisions on follow-ups and future interactions.',
                    si: 'සෑම පාරිභෝගිකයෙකුගේම ඔවුන්ගේ ඇණවුම් ඉතිහාසය සමඟ සවිස්තරාත්මක පැතිකඩ වෙත ප්‍රවේශ වන්න, එබැවින් ඔබට පසු විපරම් සහ අනාගත අන්තර්ක්‍රියා පිළිබඳව දැනුවත් තීරණ ගත හැකිය.',
                    ta: 'ஒவ்வொரு வாடிக்கையாளரின் விரிவான விவரங்களையும் அவர்களின் ஆர்டர் வரலாற்றையும் அணுகவும், இதனால் பின்தொடர்தல் மற்றும் எதிர்கால தொடர்புகள் குறித்து தகவலறிந்த முடிவுகளை எடுக்க முடியும்.'
                }
            },
            bannedCustomers: {
                title: {
                    en: 'Banned and Duplicate Customers',
                    si: 'තහනම් කළ සහ අනුපිටපත් පාරිභෝගිකයන්',
                    ta: 'தடைசெய்யப்பட்ட மற்றும் நகல் வாடிக்கையாளர்கள்'
                },
                description: {
                    en: 'Automatically identify and block banned customers, preventing them from placing orders again. Detect duplicate orders to avoid unnecessary returns.',
                    si: 'තහනම් කළ පාරිභෝගිකයන් ස්වයංක්‍රීයව හඳුනාගෙන අවහිර කරන්න, ඔවුන් නැවත ඇණවුම් කිරීම වැළැක්වීම. අනවශ්‍ය ප්‍රතිලාභ වළක්වා ගැනීම සඳහා අනුපිටපත් ඇණවුම් හඳුනා ගන්න.',
                    ta: 'தடைசெய்யப்பட்ட வாடிக்கையாளர்களை தானாகவே கண்டறிந்து தடுக்கவும், அவர்கள் மீண்டும் ஆர்டர் செய்வதைத் தடுக்கவும். தேவையற்ற திருப்பங்களைத் தவிர்க்க நகல் ஆர்டர்களைக் கண்டறியவும்.'
                }
            },
            orderStatus: {
                title: {
                    en: 'All Orders & Their Statuses',
                    si: 'සියලුම ඇණවුම් සහ ඒවායේ තත්වයන්',
                    ta: 'அனைத்து ஆர்டர்கள் மற்றும் அவற்றின் நிலைகள்'
                },
                description: {
                    en: 'Track every inquiry, order, and its current status in one place. Stay organized and avoid missed follow-ups with a clear overview.',
                    si: 'සෑම විමසුමක්, ඇණවුමක් සහ එහි වර්තමාන තත්වය එකම ස්ථානයක ලුහුබඳින්න. සංවිධානාත්මකව සිටීම සහ පැහැදිලි සමාලෝචනයක් සමඟ අතපසු වූ පසු විපරම් වළක්වා ගන්න.',
                    ta: 'ஒவ்வொரு விசாரணை, ஆர்டர் மற்றும் அதன் தற்போதைய நிலையை ஒரே இடத்தில் கண்காணிக்கவும். ஒழுங்கமைக்கப்பட்ட நிலையில் இருங்கள் மற்றும் தெளிவான கண்ணோட்டத்துடன் தவறவிட்ட பின்தொடர்தல்களைத் தவிர்க்கவும்.'
                }
            },
            orderSources: {
                title: {
                    en: 'Order Sources & Sales Channels',
                    si: 'ඇණවුම් මූලාශ්‍ර සහ අලෙවි නාලිකා',
                    ta: 'ஆர்டர் ஆதாரங்கள் மற்றும் விற்பனை சேனல்கள்'
                },
                description: {
                    en: 'Identify where your orders are coming from. See which sales channels are bringing in the most inquiries and focus your efforts accordingly.',
                    si: 'ඔබේ ඇණවුම් කොහෙන් එන්නේද යන්න හඳුනා ගන්න. කුමන අලෙවි නාලිකා වැඩියෙන්ම විමසුම් ගෙන එන්නේද යන්න බලා ඒ අනුව ඔබේ උත්සාහයන් යොමු කරන්න.',
                    ta: 'உங்கள் ஆர்டர்கள் எங்கிருந்து வருகின்றன என்பதைக் கண்டறியவும். எந்த விற்பனை சேனல்கள் அதிக விசாரணைகளைக் கொண்டு வருகின்றன என்பதைப் பார்த்து அதற்கேற்ப உங்கள் முயற்சிகளைக் கவனம் செலுத்துங்கள்.'
                }
            }
        },
        knowMore: {
            en: 'Know More',
            si: 'තව දැනගන්න',
            ta: 'மேலும் அறிய'
        }
    },

    // Inquiry Channels Section
    inquiryChannels: {
        brand: {
            name: {
                en: 'STOREMATE',
                si: 'ස්ටෝර්මේට්',
                ta: 'ஸ்டோர்மேட்'
            },
            subtitle: {
                en: 'Order Management System',
                si: 'ඇණවුම් කළමනාකරණ පද්ධතිය',
                ta: 'ஆர்டர் மேலாண்மை அமைப்பு'
            }
        },
        title: {
            part1: {
                en: 'Find your best',
                si: 'ඔබේ හොඳම',
                ta: 'உங்கள் சிறந்த'
            },
            part2: {
                en: 'inquiry channels',
                si: 'විමසුම් නාලිකා සොයා ගන්න',
                ta: 'விசாரణை சேனல்களைக் கண்டறியவும்'
            }
        },
        description: {
            en: 'Identify which sales channels bring in the most inquiries and focus your efforts where they work best.',
            si: 'කුමන අලෙවි නාලිකා වැඩියෙන්ම විමසුම් ගෙන එන්නේද යන්න හඳුනාගෙන ඒවා හොඳම ලෙස ක්‍රියා කරන තැන ඔබේ උත්සාහයන් යොමු කරන්න.',
            ta: 'எந்த விற்பனை சேனல்கள் அதிக விசாரணைகளைக் கொண்டு வருகின்றன என்பதைக் கண்டறிந்து அவை சிறப்பாக செயல்படும் இடத்தில் உங்கள் முயற்சிகளைக் கவனம் செலுத்துங்கள்.'
        },
        stats: {
            dataAccuracy: {
                value: {
                    en: '99.8%',
                    si: '99.8%',
                    ta: '99.8%'
                },
                label: {
                    en: 'Data Accuracy',
                    si: 'දත්ත නිරවද්‍යතාවය',
                    ta: 'தரவு துல்லியம்'
                }
            },
            responseSpeed: {
                value: {
                    en: '95%',
                    si: '95%',
                    ta: '95%'
                },
                label: {
                    en: 'Response Speed',
                    si: 'ප්‍රතිචාර වේගය',
                    ta: 'பதில் வேகம்'
                }
            }
        },
        startFreeTrial: {
            en: 'Start a Free Trial',
            si: 'නොමිලේ අත්හදා බැලීමක් ආරම්භ කරන්න',
            ta: 'இலவச சோதனையைத் தொடங்குங்கள்'
        },
        knowMore: {
            en: 'Know more',
            si: 'තව දැනගන්න',
            ta: 'மேலும் அறிய'
        },
        imageAlt: {
            en: 'Inquiry Channel Analytics Dashboard',
            si: 'විමසුම් නාලිකා විශ්ලේෂණ උපකරණ පුවරුව',
            ta: 'விசாரணை சேனல் பகுப்பாய்வு டாஷ்போர்டு'
        }
    },

    // Reduce Returns Section
    reduceReturns: {
        brand: {
            name: {
                en: 'STOREMATE',
                si: 'ස්ටෝර්මේට්',
                ta: 'ஸ்டோர்மேட்'
            },
            subtitle: {
                en: 'Order Management System',
                si: 'ඇණවුම් කළමනාකරණ පද්ධතිය',
                ta: 'ஆர்டர் மேலாண்மை அமைப்பு'
            }
        },
        title: {
            part1: {
                en: 'Reduce returns by',
                si: 'ප්‍රතිලාභ අඩු කරන්න',
                ta: 'திருப்பங்களைக் குறைக்கவும்'
            },
            part2: {
                en: 'identifying banned customers',
                si: 'තහනම් කළ පාරිභෝගිකයන් හඳුනාගෙන',
                ta: 'தடைசெய்யப்பட்ட வாடிக்கையாளர्களைக் கண்டறிவதன் மூலம்'
            }
        },
        description: {
            en: 'If a customer is fake or has a negative history, you can automatically block them — so if they place an order again, the system detects and flags it.',
            si: 'පාරිභෝගිකයෙකු ව්‍යාජ නම් හෝ සෘණාත්මක ඉතිහාසයක් ඇත්නම්, ඔබට ඔවුන් ස්වයංක්‍රීයව අවහිර කළ හැකිය — එබැවින් ඔවුන් නැවත ඇණවුමක් කළහොත්, පද්ධතිය එය හඳුනාගෙන සලකුණු කරයි.',
            ta: 'ஒரு வாடிக்கையாளர் போலியானவர் அல்லது எதிர்மறையான வரலாற்றைக் கொண்டிருந்தால், நீங்கள் அவர்களைத் தானாகவே தடுக்கலாம் — எனவே அவர்கள் மீண்டும் ஆர்டர் செய்தால், கணினி அதைக் கண்டறிந்து குறியிடுகிறது.'
        },
        stats: {
            returnReduction: {
                value: {
                    en: '87%',
                    si: '87%',
                    ta: '87%'
                },
                label: {
                    en: 'Return Reduction',
                    si: 'ප්‍රතිලාභ අඩුවීම',
                    ta: 'திரும்ப குறைப்பு'
                }
            },
            detectionRate: {
                value: {
                    en: '99%',
                    si: '99%',
                    ta: '99%'
                },
                label: {
                    en: 'Detection Rate',
                    si: 'හඳුනාගැනීමේ අනුපාතය',
                    ta: 'கண்டறிதல் விகிதம்'
                }
            }
        },
        startFreeTrial: {
            en: 'Start a Free Trial',
            si: 'නොමිලේ අත්හදා බැලීමක් ආරම්භ කරන්න',
            ta: 'இலவச சோதனையைத் தொடங்குங்கள்'
        },
        knowMore: {
            en: 'Know more',
            si: 'තව දැනගන්න',
            ta: 'மேலும் அறிய'
        },
        imageAlt: {
            en: 'Banned Customer Detection Dashboard',
            si: 'තහනම් කළ පාරිභෝගික හඳුනාගැනීමේ උපකරණ පුවරුව',
            ta: 'தடைசெய்யப்பட்ட வாடிக்கையாளர் கண்டறிதல் டாஷ்போர்டு'
        }
    },

    // Duplicate Detection Section
    duplicateDetection: {
        brand: {
            name: {
                en: 'STOREMATE',
                si: 'ස්ටෝර්මේට්',
                ta: 'ஸ்டோர்மேட்'
            },
            subtitle: {
                en: 'Order Management System',
                si: 'ඇණවුම් කළමනාකරණ පද්ධතිය',
                ta: 'ஆர்டர் மேலாண்மை அமைப்பு'
            }
        },
        title: {
            part1: {
                en: 'Reduce returns by',
                si: 'ප්‍රතිලාභ අඩු කරන්න',
                ta: 'திருப்பங்களைக் குறைக்கவும்'
            },
            part2: {
                en: 'identifying duplicate orders',
                si: 'අනුපිටපත් ඇණවුම් හඳුනාගෙන',
                ta: 'நகல் ஆர்டர்களைக் கண்டறிவதன் மூலம்'
            }
        },
        description: {
            en: 'If a customer places the same item twice through different channels, Storemate OMS detects it automatically - saving you from handling unnecessary returns.',
            si: 'පාරිභෝගිකයෙකු විවිධ නාලිකා හරහා එකම අයිතමය දෙවරක් ඇණවුම් කළහොත්, Storemate OMS එය ස්වයංක්‍රීයව හඳුනා ගනී - අනවශ්‍ය ප්‍රතිලාභ හසුරුවීමෙන් ඔබව ගලවයි.',
            ta: 'ஒரு வாடிக்கையாளர் வெவ்வேறு சேனல்கள் மூலம் ஒரே பொருளை இரண்டு முறை ஆர்டர் செய்தால், Storemate OMS அதை தானாகவே கண்டறிகிறது - தேவையற்ற திருப்பங்களைக் கையாள்வதில் இருந்து உங்களைக் காப்பாற்றுகிறது.'
        },
        stats: {
            dataAccuracy: {
                value: {
                    en: '99.8%',
                    si: '99.8%',
                    ta: '99.8%'
                },
                label: {
                    en: 'Data Accuracy',
                    si: 'දත්ත නිරවද්‍යතාවය',
                    ta: 'தரவு துல்லியம்'
                }
            },
            responseSpeed: {
                value: {
                    en: '95%',
                    si: '95%',
                    ta: '95%'
                },
                label: {
                    en: 'Response Speed',
                    si: 'ප්‍රතිචාර වේගය',
                    ta: 'பதில் வேகம்'
                }
            }
        },
        startFreeTrial: {
            en: 'Start a Free Trial',
            si: 'නොමිලේ අත්හදා බැලීමක් ආරම්භ කරන්න',
            ta: 'இலவச சோதனையைத் தொடங்குங்கள்'
        },
        knowMore: {
            en: 'Know more',
            si: 'තව දැනගන්න',
            ta: 'மேலும் அறிய'
        },
        imageAlt: {
            en: 'Duplicate Order Detection Dashboard',
            si: 'අනුපිටපත් ඇණවුම් හඳුනාගැනීමේ උපකරණ පුවරුව',
            ta: 'நகல் ஆர்டர் கண்டறிதல் டாஷ்போர்டு'
        }
    }
};

// Custom hook for inquiry page translations
export const useInquiryTranslation = () => {
    const { currentLanguage } = useLanguage();

    const tInquiry = (key) => {
        const keys = key.split('.');
        let value = inquiryTranslations;

        for (const k of keys) {
            value = value[k];
            if (!value) return key; // Return key if translation not found
        }

        return value[currentLanguage] || value.en || key; // Fallback to English or key
    };

    return { tInquiry, currentLanguage };
};

// Helper function to get inquiry page translations
export const tInquiry = (key, language = 'en') => {
    const keys = key.split('.');
    let value = inquiryTranslations;

    for (const k of keys) {
        value = value[k];
        if (!value) return key; // Return key if translation not found
    }

    return value[language] || value.en || key; // Fallback to English or key
};
