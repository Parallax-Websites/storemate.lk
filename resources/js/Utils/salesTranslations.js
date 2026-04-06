import { useLanguage } from '@/Contexts/LanguageContext';

export const salesTranslations = {
    getFreeAccount: {
        en: 'Get Your Free Account',
        si: 'නොමිලේ ලියාපදිංචි වන්න',
        ta: 'உங்கள் இலவச கணக்கை பெறுங்கள்'
    },
    // Sales Hero Section
    salesHero: {
        badge: {
            en: 'SALES MANAGEMENT',
            si: 'විකුණුම් කළමනාකරණය',
            ta: 'விற்பனை மேலாண்மை'
        },
        title: {
            part1: {
                en: 'Keep track of all your orders from',
                si: 'Order එක Confirm කළ මොහොතේ සිට',
                ta: 'உங்கள் அனைத்து ஆர்டர்களையும் உறுதிப்படுத்தல் முதல்'
            },
            part2: {
                en: 'confirmation to delivery',
                si: 'Delivery කරන තුරුම සියලුම විස්තර පහසුවෙන් Track කරන්න',
                ta: 'டெலிவரி வரை கண்காணிக்கவும்'
            }
        },
        description: {
            en: 'Track your orders seamlessly from confirmation to delivery, ensuring smooth sales management and timely fulfillment. Monitor order status, manage courier details, and keep customers informed every step of the way.',
            si: 'Order Confirmation සිට Delivery දක්වා සියලුම අවස්ථා පහසුවෙන් Track කරන්න. Order Status සහ Courier විස්තර පහසුවෙන් Monitor කරමින්, පාරිභෝගිකයාටත් නියමිත වේලාවට Update ලබා දෙන්න.',
            ta: 'உறுதிப்படுத்தல் முதல் டெலிவரி வரை உங்கள் ஆர்டர்களை தடையின்றி கண்காணிக்கவும், மென்மையான விற்பனை மேலாண்மை மற்றும் சரியான நேரத்தில் நிறைவேற்றுவதை உறுதிசெய்யவும். ஆர்டர் நிலையைக் கண்காணிக்கவும், கூரியர் விவரங்களை நிர்வகிக்கவும், ஒவ்வொரு படியிலும் வாடிக்கையாளர்களுக்குத் தெரியப்படுத்துங்கள்.'
        },
        startFreeTrial: {
            en: 'Start a Free Trial',
            si: 'නොමිලේ අත්හදා බලන්න',
            ta: 'இலவச சோதனையைத் தொடங்குங்கள்'
        },
        howItWorks: {
            en: 'How It Works',
            si: 'එය ක්‍රියා කරන ආකාරය',
            ta: 'இது எவ்வாறு செயல்படுகிறது'
        },
        imageAlt: {
            en: 'Sales Management System Dashboard',
            si: 'විකුණුම් කළමනාකරණ පද්ධති උපකරණ පුවරුව',
            ta: 'விற்பனை மேலாண்மை அமைப்பு டாஷ்போர்டு'
        }
    },

    // Sales Features Section
    salesFeatures: {
        subtitle: {
            en: 'Storemate Order Management System',
            si: 'ස්ටෝර්මේට් ඇණවුම් කළමනාකරණ පද්ධතිය',
            ta: 'ஸ்டோர்மேட் ஆர்டர் மேலாண்மை அமைப்பு'
        },
        title: {
            part1: {
                en: 'Sales Management',
                si: 'විකුණුම් කළමනාකරණය',
                ta: 'விற்பனை மேலாண்மை'
            },
            part2: {
                en: 'Features',
                si: 'විශේෂාංග',
                ta: 'அம்சங்கள்'
            }
        },
        features: {
            centralizedOrders: {
                title: {
                    en: 'Centralized Order Management',
                    si: 'මධ්‍යගත ඇණවුම් කළමනාකරණය',
                    ta: 'மையப்படுத்தப்பட்ட ஆர்டர் மேலாண்மை'
                },
                description: {
                    en: 'Efficiently manage all your customer orders in one place.',
                    si: 'Storemate OMS මගින් ඔබේ සියලුම Customer Orders එකම තැනකින් ඉතා කාර්යක්ෂමව කළමනාකරණය කරන්න.',
                    ta: 'உங்கள் அனைத்து வாடிக்கையாளர் ஆர்டர்களையும் ஒரே இடத்தில் திறம்பட நிர்வகிக்கவும்.'
                }
            },
            courierTracking: {
                title: {
                    en: 'Real-Time Courier Status Tracking',
                    si: 'කුරියර් Status Track කරන්න',
                    ta: 'நிகழ்நேர கூரியர் நிலை கண்காணிப்பு'
                },
                description: {
                    en: 'Track each order\'s courier and sync status to stay on top of deliveries.',
                    si: 'සෑම Order එකකම Courier Status එසැණින් Track කර, Deliveries ගැන නිරන්තරයෙන් දැනුවත් වෙන්න.',
                    ta: 'டெலிவரிகளில் முன்னணியில் இருக்க ஒவ்வொரு ஆர்டரின் கூரியர் மற்றும் ஒத்திசைவு நிலையைக் கண்காணிக்கவும்.'
                }
            },
            packingProcess: {
                title: {
                    en: 'Streamlined Packing Process',
                    si: 'විධිමත් Packing Process එකක්',
                    ta: 'நெறிப்படுத்தப்பட்ட பேக்கிங் செயல்முறை'
                },
                description: {
                    en: 'Monitor packing progress and ensure timely shipping without delays.',
                    si: 'Packing Progress Monitor කරමින්, ප්‍රමාදයකින් තොරව නියමිත වේලාවට Shipping කටයුතු කරන්න.',
                    ta: 'பேக்கிங் முன்னேற்றத்தைக் கண்காணித்து தாமதமின்றி சரியான நேரத்தில் ஷிப்பிங்கை உறுதிசெய்யவும்.'
                }
            },
            deliveryTracking: {
                title: {
                    en: 'Accurate Delivery Information',
                    si: 'නිරවද්‍ය බෙදා හැරීමේ තොරතුරු',
                    ta: 'துல்லியமான டெலிவரி தகவல்'
                },
                description: {
                    en: 'Keep customers informed with up-to-date tracking and delivery status.',
                    si: 'Tracking සහ Delivery Status පිළිබඳ අලුත්ම විස්තර පාරිභෝගිකයාට ලබා දී Update එකේ තියාගන්න.',
                    ta: 'புதுப்பித்த கண்காணிப்பு மற்றும் டெலிவரி நிலையுடன் வாடிக்கையாளர்களுக்குத் தெரியப்படுத்துங்கள்.'
                }
            }
        },
        learnMore: {
            en: 'Learn More',
            si: 'වැඩිදුර දැනගන්න',
            ta: 'மேலும் அறிய'
        }
    },

    // Confirmed Orders Section
    confirmedOrders: {
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
                en: 'Manage confirmed orders',
                si: 'Confirm කළ Orders',
                ta: 'உறுதிப்படுத்தப்பட்ட ஆர்டர்களை'
            },
            part2: {
                en: 'efficiently',
                si: ' කාර්යක්ෂමව manage කරන්න',
                ta: 'திறம்பட நிர්வகிக்கவும்'
            }
        },
        description: {
            en: 'Streamline your order processing workflow with automated confirmation tracking, inventory updates, and seamless coordination between sales and fulfillment teams.',
            si: 'Confirmation tracking, inventory updates සහ sales/fulfillment කණ්ඩායම් අතර සම්බන්ධීකරණය automate කරමින්, ඔබේ Order Processing කටයුතු වඩාත් සරල සහ වේගවත් කරගන්න.',
            ta: 'தானியங்கு உறுதிப்படுத்தல் கண்காணிப்பு, சரக்கு புதுப்பிப்புகள் மற்றும் விற்பனை மற்றும் நிறைவேற்று குழுக்களுக்கு இடையே தடையற்ற ஒருங்கிணைப்புடன் உங்கள் ஆர்டர் செயலாக்க பணிப்பாய்வை நெறிப்படுத்துங்கள்.'
        },
        stats: {
            orderAccuracy: {
                value: {
                    en: '99.9%',
                    si: '99.9%',
                    ta: '99.9%'
                },
                label: {
                    en: 'Order Accuracy',
                    si: 'ඇණවුම් නිරවද්‍යතාව',
                    ta: 'ஆர்டர் துல்லியம்'
                }
            },
            processingSpeed: {
                value: {
                    en: '<2 min',
                    si: '<2 මිනිත්තු',
                    ta: '<2 நிமிடம்'
                },
                label: {
                    en: 'Processing Time',
                    si: 'සැකසුම් කාලය',
                    ta: 'செயலாக்க நேரம்'
                }
            }
        },
        startFreeTrial: {
            en: 'Start Free Trial',
            si: 'නොමිලේ අත්හදා බැලීම ආරම්භ කරන්න',
            ta: 'இலவச சோதனையைத் தொடங்குங்கள்'
        },
        knowMore: {
            en: 'Know More',
            si: 'වැඩිදුර දැනගන්න',
            ta: 'மேலும் அறிய'
        },
        imageAlt: {
            en: 'Confirmed Orders Management Dashboard',
            si: 'තහවුරු කළ ඇණවුම් කළමනාකරණ උපකරණ පුවරුව',
            ta: 'உறுதிப்படுத்தப்பட்ட ஆர்டர்கள் மேலாண்மை டாஷ்போர்டு'
        }
    },

    // Courier & Sync Status Section
    courierSyncStatus: {
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
                en: 'Real-time courier',
                si: 'Courier sync status',
                ta: 'நிகழ்நேர கூரியர்'
            },
            part2: {
                en: 'sync status',
                si: ' එක එසැණින්',
                ta: 'ஒத்திசைவு நிலை'
            }
        },
        description: {
            en: 'Stay updated with real-time courier integration and sync status. Monitor shipping progress, track delivery updates, and maintain seamless communication with logistics partners.',
            si: 'Real-time courier integration සහ sync status හරහා නිරතුරුවම Update වෙන්න. Shipping progress සහ Delivery updates track කරමින්, ඔබගේ logistics partners සමඟ ඉතා පහසුවෙන් සම්බන්ධතාවය පවත්වා ගන්න.',
            ta: 'நிகழ்நேர கூரியர் ஒருங்கிணைப்பு மற்றும் ஒத்திசைவு நிலையுடன் புதுப்பிக்கப்பட்டிருங்கள். ஷிப்பிங் முன்னேற்றத்தைக் கண்காணிக்கவும், டெலிவரி புதுப்பிப்புகளைக் கண்காணிக்கவும், லாஜிஸ்டிக்ஸ் பங்காளர்களுடன் தடையற்ற தொடர்பைப் பராமரிக்கவும்.'
        },
        stats: {
            syncAccuracy: {
                value: {
                    en: '100%',
                    si: '100%',
                    ta: '100%'
                },
                label: {
                    en: 'Sync Accuracy',
                    si: 'සමමුහුර්ත නිරවද්‍යතාව',
                    ta: 'ஒத்திசைவு துல்லியம்'
                }
            },
            updateSpeed: {
                value: {
                    en: 'Live',
                    si: 'සජීවී',
                    ta: 'நேரடி'
                },
                label: {
                    en: 'Update Speed',
                    si: 'යාවත්කාලීන වේගය',
                    ta: 'புதுப்பிப்பு வேகம்'
                }
            }
        },
        startFreeTrial: {
            en: 'Start Free Trial',
            si: 'නොමිලේ අත්හදා බැලීම ආරම්භ කරන්න',
            ta: 'இலவச சோதனையைத் தொடங்குங்கள்'
        },
        knowMore: {
            en: 'Know More',
            si: 'වැඩිදුර දැනගන්න',
            ta: 'மேலும் அறிய'
        },
        imageAlt: {
            en: 'Courier Sync Status Dashboard',
            si: 'කුරියර් සමමුහුර්ත තත්ත්ව උපකරණ පුවරුව',
            ta: 'கூரியர் ஒத்திசைவு நிலை டாஷ்போர்டு'
        }
    },

    // Packing Progress Section
    packingProgress: {
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
                en: 'Track packing progress',
                si: 'Packing progress එසැණින්',
                ta: 'பேக்கிங் முன்னேற்றத்தை'
            },
            part2: {
                en: 'in real-time',
                si: 'Track කරන්න',
                ta: 'நிகழ்நேரத்தில் கண்காணிக்கவும்'
            }
        },
        description: {
            en: 'Monitor every step of your packing process with detailed progress tracking, quality control checkpoints, and automated notifications to ensure orders are packed correctly and shipped on time.',
            si: 'Packing progress එක සෑම පියවරක්ම Monitor කරමින්, Quality control සහ automated notifications හරහා orders නිවැරදිව පැක් කර නියමිත වේලාවට Ship කිරීම තහවුරු කරන්න.',
            ta: 'விரிவான முன்னேற்ற கண்காணிப்பு, தர கட்டுப்பாட்டு சோதனைச் சாவடிகள் மற்றும் ஆர்டர்கள் சரியாக பேக் செய்யப்பட்டு சரியான நேரத்தில் அனுப்பப்படுவதை உறுதிசெய்ய தானியங்கு அறிவிப்புகளுடன் உங்கள் பேக்கிங் செயல்முறையின் ஒவ்வொரு படியையும் கண்காணிக்கவும்.'
        },
        stats: {
            packingEfficiency: {
                value: {
                    en: '95%',
                    si: '95%',
                    ta: '95%'
                },
                label: {
                    en: 'Packing Efficiency',
                    si: 'ඇසුරුම් කාර්යක්ෂමතාව',
                    ta: 'பேக்கிங் திறன்'
                }
            },
            qualityScore: {
                value: {
                    en: '4.9/5',
                    si: '4.9/5',
                    ta: '4.9/5'
                },
                label: {
                    en: 'Quality Score',
                    si: 'ගුණාත්මක ලකුණු',
                    ta: 'தர மதிப்பெண்'
                }
            }
        },
        startFreeTrial: {
            en: 'Start Free Trial',
            si: 'නොමිලේ අත්හදා බැලීම ආරම්භ කරන්න',
            ta: 'இலவச சோதனையைத் தொடங்குங்கள்'
        },
        knowMore: {
            en: 'Know More',
            si: 'වැඩිදුර දැනගන්න',
            ta: 'மேலும் அறிய'
        },
        imageAlt: {
            en: 'Packing Progress Tracking Dashboard',
            si: 'ඇසුරුම් ප්‍රගති ලුහුබැඳීමේ උපකරණ පුවරුව',
            ta: 'பேக்கிங் முன்னேற்ற கண்காணிப்பு டாஷ்போர்டு'
        }
    },

    // Delivery Updates Section
    deliveryUpdates: {
        brand: {
            name: {
                en: 'STOREMATE',
                si: 'ස්ටෝර්මේට්',
                ta: 'ஸ்டோர்மேट்'
            },
            subtitle: {
                en: 'Order Management System',
                si: 'ඇණවුම් කළමනාකරණ පද්ධතිය',
                ta: 'ஆர்டர் மேலாண்மை அமைப்பு'
            }
        },
        title: {
            part1: {
                en: 'Keep customers informed',
                si: 'Delivery updates මගින්',
                ta: 'வாடிக்கையாளர்களுக்கு'
            },
            part2: {
                en: 'with delivery updates',
                si: 'පාරිභෝගිකයා නිරතුරුවම දැනුවත් කරන්න',
                ta: 'டெலிவரி புதுப்பிப்புகளுடன் தெரியப்படுத்துங்கள்'
            }
        },
        description: {
            en: 'Provide exceptional customer service with automated delivery notifications, real-time tracking updates, and proactive communication about any shipping changes or delays.',
            si: 'Automated delivery notifications සහ real-time tracking හරහා පාරිභෝගිකයාට ඉහළම සේවාවක් ලබා දෙන්න. Shipping වල යම් වෙනසක් හෝ ප්‍රමාදයක් වුවහොත් කල්තියාම ඔවුන්ව දැනුවත් කරන්න.',
            ta: 'தானியங்கு டெலிவரி அறிவிப்புகள், நிகழ்நேர கண்காணிப்பு புதுப்பிப்புகள் மற்றும் ஷிப்பிங் மாற்றங்கள் அல்லது தாமதங்கள் பற்றிய செயலூக்கமான தகவல்தொடர்புகளுடன் சிறந்த வாடிக்கையாளர் சேவையை வழங்கவும்.'
        },
        stats: {
            customerSatisfaction: {
                value: {
                    en: '98%',
                    si: '98%',
                    ta: '98%'
                },
                label: {
                    en: 'Customer Satisfaction',
                    si: 'පාරිභෝගික තෘප්තිය',
                    ta: 'வாடிக்கையாளர் திருப்தி'
                }
            },
            deliverySuccess: {
                value: {
                    en: '99.5%',
                    si: '99.5%',
                    ta: '99.5%'
                },
                label: {
                    en: 'Delivery Success',
                    si: 'බෙදා හැරීමේ සාර්ථකත්වය',
                    ta: 'டெலிவரி வெற்றி'
                }
            }
        },
        startFreeTrial: {
            en: 'Start Free Trial',
            si: 'නොමිලේ අත්හදා බැලීම ආරම්භ කරන්න',
            ta: 'இலவச சோதனையைத் தொடங்குங்கள்'
        },
        knowMore: {
            en: 'Know More',
            si: 'වැඩිදුර දැනගන්න',
            ta: 'மேலும் அறிய'
        },
        imageAlt: {
            en: 'Delivery Updates Dashboard',
            si: 'බෙදා හැරීමේ යාවත්කාලීන උපකරණ පුවරුව',
            ta: 'டெலிவரி புதுப்பிப்புகள் டாஷ்போர்டு'
        }
    }
};

export const useSalesTranslation = () => {
    const { currentLanguage } = useLanguage();

    const tSales = (key, fallbackLanguage = 'en') => {
        const keys = key.split('.');
        let value = salesTranslations;

        for (const k of keys) {
            value = value?.[k];
            if (!value) break;
        }

        if (value && typeof value === 'object') {
            return value[currentLanguage] || value[fallbackLanguage] || key;
        }

        return key;
    };

    return { tSales };
};export const tSales = (key, language = 'en') => {
    const keys = key.split('.');
    let value = salesTranslations;

    for (const k of keys) {
        value = value?.[k];
        if (!value) break;
    }

    if (value && typeof value === 'object') {
        return value[language] || value['en'] || key;
    }

    return key;
};
