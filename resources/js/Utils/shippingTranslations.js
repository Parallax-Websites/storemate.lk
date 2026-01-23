import { useLanguage } from '@/Contexts/LanguageContext';

export const shippingTranslations = {
    getFreeAccount: {
        en: 'Get Your Free Account',
        si: 'නොමිලේ ලියාපදිංචි වන්න',
        ta: 'உங்கள் இலவச கணக்கை பெறுங்கள்'
    },
    // Shipping Hero Section
    shippingHero: {
        badge: {
            en: 'SHIPPING AND PACKING',
            si: 'නැව්ගත කිරීම සහ ඇසුරුම්',
            ta: 'ஷிப்பிங் மற்றும் பேக்கிங்'
        },
        title: {
            en: 'Seamless integrations from checkout to doorstep',
            si: 'Checkout එකේ සිට Doorstep එක දක්වා සියලුම පියවර එකිනෙකට සම්බන්ධ කරගන්න.',
            ta: 'செக்அவுட்டிலிருந்து வீட்டு வாசல் வரை தடையற்ற ஒருங்கிணைப்புகள்'
        },
        description: {
            en: 'Save time and reduce errors by automatically syncing orders to your courier partner\'s portal. Experience zero manual entry and bulk processing capabilities for efficient shipping management.',
            si: 'Orders ස්වයංක්‍රීයව ඔබේ Courier Portal එකට Sync කර කාලය ඉතිරි කරගන්න. කිසිදු manual entry එකක් නොමැතිව, ඉතා වේගයෙන් Bulk processing හරහා ඔබේ සියලුම Deliveries පහසුවෙන් කළමනාකරණය කරන්න.',
            ta: 'உங்கள் கூரியர் பங்காளியின் போர்ட்டலுடன் ஆர்டர்களை தானாகவே ஒத்திசைப்பதன் மூலம் நேரத்தை மிச்சப்படுத்தி பிழைகளைக் குறைக்கவும். திறமையான ஷிப்பிங் மேலாண்மைக்காக பூஜ்ஜிய கையேடு நுழைவு மற்றும் மொத்த செயலாக்க திறன்களை அனுபவிக்கவும்.'
        },
        features: {
            zeroManualEntry: {
                en: 'Zero Manual Entry',
                si: 'අතින් ඇතුල් කිරීම නැත',
                ta: 'பூஜ்ஜிய கையேடு நுழைவு'
            },
            bulkProcessing: {
                en: 'Bulk Processing',
                si: 'තොග සැකසුම',
                ta: 'மொத்த செயலாக்கம்'
            }
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
            en: 'Shipping and Packing Management Dashboard',
            si: 'නැව්ගත කිරීම සහ ඇසුරුම් කළමනාකරණ උපකරණ පුවරුව',
            ta: 'ஷிப்பிங் மற்றும் பேக்கிங் மேலாண்மை டாஷ்போர்டு'
        }
    },

    // Shipping Features Section
    shippingFeatures: {
        subtitle: {
            en: 'Storemate Order Management System',
            si: 'ස්ටෝර්මේට් ඇණවුම් කළමනාකරණ පද්ධතිය',
            ta: 'ஸ்டோர்மேட் ஆர்டர் மேலாண்மை அமைப்பு'
        },
        title: {
            en: 'Boost Your Shipping Efficiency',
            si: 'ඔබේ Shipping කටයුතු වඩාත් කාර්යක්ෂම කරගන්න',
            ta: 'உங்கள் ஷிப்பிங் திறனை அதிகரிக்கவும்'
        },
        description: {
            en: 'Automate order processing, reduce errors, and scale effortlessly without extra staff',
            si: 'Order processing ස්වයංක්‍රීය කර, වැරදි අවම කරගන්න. අමතර සේවකයන් අවශ්‍ය නොවී ඔබේ ව්‍යාපාරය ඉතා පහසුවෙන් වර්ධනය (Scale) කරගන්න.',
            ta: 'ஆர்டர் செயலாக்கத்தை தானியங்கமாக்கவும், பிழைகளைக் குறைக்கவும், கூடுதல் ஊழியர்கள் இல்லாமல் சாவகாசமாக அளவிடவும்'
        },
        features: {
            effortlessOrderUploads: {
                title: {
                    en: 'Effortless Order Uploads',
                    si: 'පහසුවෙන් orders Upload කරන්න',
                    ta: 'எளிதான ஆர்டர் அப்லோடுகள்'
                },
                description: {
                    en: 'Save 5+ hours daily on manual order upload to courier portal',
                    si: 'Courier portal එකට manual order upload කිරීම සඳහා දිනකට වැය වන පැය 5කට වඩා වැඩි කාලයක් ඉතුරු කරගන්න.',
                    ta: 'கூரியர் போர்ட்டலுக்கு கையேடு ஆர்டர் அப்லோடில் தினசரி 5+ மணிநேரங்களை சேமிக்கவும்'
                }
            },
            lightningFastProcessing: {
                title: {
                    en: 'Lightning-Fast Order Processing',
                    si: 'ගවත්ව orders process කරන්න',
                    ta: 'மின்னல் வேகமான ஆர்டர் செயலாக்கம்'
                },
                description: {
                    en: 'Process 10x more orders in the same time',
                    si: 'Storemate OMS මගින් එකම වේලාවේදි සාමාන්‍යයෙන් කරනවාට වඩා 10x  ගුණයකින් වැඩියෙන් Orders Process කරන්න.',
                    ta: 'அதே நேரத்தில் 10 மடங்கு அதிகமான ஆர்டர்களைச் செயலாக்கவும்'
                }
            },
            minimalShippingErrors: {
                title: {
                    en: 'Minimal Shipping Errors',
                    si: 'අවම නැව්ගත කිරීමේ දෝෂ',
                    ta: 'குறைந்தபட்ச ஷிப்பிங் பிழைகள்'
                },
                description: {
                    en: 'Reduce shipping errors by 90%',
                    si: 'Storemate OMS මගින් Shipping දෝෂ 90%කටත් වඩා අඩු කරමින්, ඔබේ කාලයත් මුදලුත් ඉතිරි කරගන්න.',
                    ta: 'ஷிப்பிங் பிழைகளை 90% குறைக்கவும்'
                }
            },
            scalableOrderManagement: {
                title: {
                    en: 'Scalable Order Management',
                    si: 'Orders පහසුවෙන් Manage කරන්න',
                    ta: 'அளவிடக்கூடிய ஆர்டர் மேலாண்மை'
                },
                description: {
                    en: 'Handle more orders without extra staff',
                    si: 'දැන් Storemate OMS සමග අමතර සේවකයන් නැතිවම වැඩි Orders ප්‍රමාණයක් හසුරුවන්න ඔබටත් පුලුවන්.',
                    ta: 'கூடுதல் ஊழியர்கள் இல்லாமல் அதிக ஆர்டர்களைக் கையாளவும்'
                }
            }
        },
        learnMore: {
            en: 'Learn More',
            si: 'වැඩිදුර දැනගන්න',
            ta: 'மேலும் அறிய'
        }
    },

    // One-Click Courier Sync Section
    oneClickCourierSync: {
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
                en: 'One-click courier sync',
                si: 'ඔබේ Courier Company',
                ta: 'ஒரே கிளிக் கூரியர்'
            },
            part2: {
                en: 'to your courier',
                si: 'එක සමඟ One-Click Sync වන්න',
                ta: 'கூரியர் ஒத்திசைவு'
            }
        },
        description: {
            en: 'Streamline your shipping process with seamless courier integration. Upload orders instantly without manual data entry, generate waybills automatically, and track shipments in real-time.',
            si: 'Courier integration හරහා ඔබේ Shipping කටයුතු වඩාත් සරල කරගන්න. Manual data entry රහිතව Orders එසැණින් Upload කර, Waybills ස්වයංක්‍රීයව සකසා ගන්න. එමෙන්ම Shipments සියල්ල එසැණින් (Real-time) Track කරන්න.',
            ta: 'தடையற்ற கூரியர் ஒருங்கிணைப்புடன் உங்கள் ஷிப்பிங் செயல்முறையை நெறிப்படுத்துங்கள். கையேடு டேட்டா நுழைவு இல்லாமல் ஆர்டர்களை உடனடியாக அப்லோட் செய்யுங்கள், வேபில்களை தானாகவே உருவாக்குங்கள், மற்றும் ஷிப்மென்ட்களை நிகழ்நேரத்தில் கண்காணிக்கவும்.'
        },
        stats: {
            timeReduction: {
                value: {
                    en: '90%',
                    si: '90%',
                    ta: '90%'
                },
                label: {
                    en: 'Time Reduction',
                    si: 'කාල අඩුවීම',
                    ta: 'நேர குறைப்பு'
                }
            },
            accuracyIncrease: {
                value: {
                    en: '99.9%',
                    si: '99.9%',
                    ta: '99.9%'
                },
                label: {
                    en: 'Accuracy Increase',
                    si: 'නිරවද්‍යතා වැඩිදියුණු කිරීම',
                    ta: 'துல்லியத்தன்மை அதிகரிப்பு'
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
            en: 'One-Click Courier Sync Dashboard',
            si: 'එක් ක්ලික් කුරියර් සමමුහුර්ත උපකරණ පුවරුව',
            ta: 'ஒரே கிளிக் கூரியர் ஒத்திசைவு டாஷ்போர்டு'
        }
    },

    // View Sync Status Section
    viewSyncStatus: {
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
                en: 'View real-time',
                si: 'Real-Time Sync',
                ta: 'நிகழ்நேர'
            },
            part2: {
                en: 'sync status',
                si: 'status නිරික්ෂණය කරන්න',
                ta: 'ஒத்திசைவு நிலையைப் பார்க்கவும்'
            }
        },
        description: {
            en: 'Monitor synchronization status between your orders and courier systems. Get instant notifications about successful syncs, failed uploads, and shipping updates to maintain complete visibility over your logistics operations.',
            si: 'ඔබේ Orders සහ Courier පද්ධති අතර සම්බන්ධතාවය (Sync status) නිරීක්ෂණය කරන්න. සාර්ථක වූ Syncs, වැරදුණු Uploads සහ Shipping updates පිළිබඳව එසැණින් දැනුම්දීම් ලබාගෙන, ඔබේ Logistics කටයුතු පිළිබඳ පූර්ණ අවබෝධයක් පවත්වා ගන්න.',
            ta: 'உங்கள் ஆர்டர்கள் மற்றும் கூரியர் அமைப்புகளுக்கு இடையில் ஒத்திசைவு நிலையைக் கண்காணிக்கவும். உங்கள் லாஜிஸ்டிக்ஸ் செயல்பாடுகளில் முழுமையான தெரிவுநிலையைப் பராமரிக்க வெற்றிகரமான ஒத்திசைவுகள், தோல்வியுற்ற அப்லோடுகள் மற்றும் ஷிப்பிங் புதுப்பிப்புகள் பற்றிய உடனடி அறிவிப்புகளைப் பெறுங்கள்.'
        },
        stats: {
            syncReliability: {
                value: {
                    en: '99.9%',
                    si: '99.9%',
                    ta: '99.9%'
                },
                label: {
                    en: 'Sync Reliability',
                    si: 'සමමුහුර්ත විශ්වසනීයත්වය',
                    ta: 'ஒத்திசைவு நம்பகத்தன்மை'
                }
            },
            updateFrequency: {
                value: {
                    en: 'Real-time',
                    si: 'තත්ව කාලීන',
                    ta: 'நிகழ்நேரம்'
                },
                label: {
                    en: 'Update Frequency',
                    si: 'යාවත්කාලීන සංඛ්‍යාතය',
                    ta: 'புதுப்பிப்பு அதிர்வெண்'
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
            en: 'Real-time Sync Status Dashboard',
            si: 'තත්ව කාලීන සමමුහුර්ත තත්ත්ව උපකරණ පුවරුව',
            ta: 'நிகழ்நேர ஒத்திசைவு நிலை டாஷ்போர்டு'
        }
    },

    // Print Waybills Section
    printWaybills: {
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
                en: 'Print waybills',
                si: 'ක්ෂණිකව Waybills',
                ta: 'வேபில்களை'
            },
            part2: {
                en: 'instantly',
                si: 'Print කරන්න',
                ta: 'உடனடியாக அச்சிடுங்கள்'
            }
        },
        description: {
            en: 'Generate and print professional waybills instantly with automated order information. Support for multiple courier formats, batch printing capabilities, and customizable templates to streamline your shipping workflow.',
            si: 'ඇණවුම් විස්තර ඇසුරින් Professional Waybills එකක් එසැණින් සකසා Print කරගන්න. විවිධ Courier ආකෘතීන් (Formats), Batch printing පහසුකම සහ ඔබේ අවශ්‍යතාවයට අනුව වෙනස් කළ හැකි Templates හරහා Shipping කටයුතු වඩාත් විධිමත් කරගන්න.',
            ta: 'தானியங்கு ஆர்டர் தகவலுடன் தொழில்முறை வேபில்களை உடனடியாக உருவாக்கி அச்சிடுங்கள். பல கூரியர் வடிவங்கள், தொகுப்பு அச்சிடும் திறன்கள் மற்றும் உங்கள் ஷிப்பிங் பணிப்பாய்வை நெறிப்படுத்த தனிப்பயனாக்கக்கூடிய டெம்ப்ளேட்களுக்கான ஆதரவு.'
        },
        stats: {
            printSpeed: {
                value: {
                    en: '<5 sec',
                    si: '<5 තත්පර',
                    ta: '<5 விநாடி'
                },
                label: {
                    en: 'Print Speed',
                    si: 'මුද්‍රණ වේගය',
                    ta: 'அச்சு வேகம்'
                }
            },
            errorReduction: {
                value: {
                    en: '95%',
                    si: '95%',
                    ta: '95%'
                },
                label: {
                    en: 'Error Reduction',
                    si: 'දෝෂ අඩුකිරීම',
                    ta: 'பிழை குறைப்பு'
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
            en: 'Waybill Printing System',
            si: 'මාර්ග බිල්පත් මුද්‍රණ පද්ධතිය',
            ta: 'வேபில் அச்சிடும் அமைப்பு'
        }
    },

    // Track Package Status Section
    trackPackageStatus: {
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
                en: 'Track package status',
                si: 'Package එකේ සෑම',
                ta: 'பேக்கேஜ் நிலையை'
            },
            part2: {
                en: 'at every step',
                si: 'පියවරක්ම Track කරන්න',
                ta: 'ஒவ்வொரு படியிலும் கண்காணிக்கவும்'
            }
        },
        description: {
            en: 'Comprehensive package tracking with detailed status updates at every milestone. Monitor pickup, transit, out for delivery, and completion status with automated customer notifications and delivery confirmations.',
            si: 'සෑම වැදගත් පියවරකදීම විස්තරාත්මක Status Updates සමඟින් පැකේජය Track කරන්න. Pickup, Transit සහ Delivery පියවරයන් නිරීක්ෂණය කරන අතරම, Automated Notifications හරහා පාරිභෝගිකයා දැනුවත් කිරීම සහ Delivery Confirmations ලබා ගැනීම සිදු කළ හැකිය.',
            ta: 'ஒவ்வொரு மைல்கல்லிலும் விரிவான நிலை புதுப்பிப்புகளுடன் விரிவான பேக்கேஜ் கண்காணிப்பு. தானியங்கு வாடிக்கையாளர் அறிவிப்புகள் மற்றும் டெலிவரி உறுதிப்படுத்தல்களுடன் பிக்அப், டிரான்சிட், டெலிவரிக்காக வெளியே மற்றும் நிறைவு நிலையைக் கண்காணிக்கவும்.'
        },
        stats: {
            trackingAccuracy: {
                value: {
                    en: '99.8%',
                    si: '99.8%',
                    ta: '99.8%'
                },
                label: {
                    en: 'Tracking Accuracy',
                    si: 'ලුහුබැඳීමේ නිරවද්‍යතාව',
                    ta: 'கண்காணிப்பு துல்லியம்'
                }
            },
            updateFrequency: {
                value: {
                    en: 'Every 30min',
                    si: 'මිනිත්තු 30කට',
                    ta: 'ஒவ்வொரு 30 நிமிடம்'
                },
                label: {
                    en: 'Update Frequency',
                    si: 'යාවත්කාලීන සංඛ්‍යාතය',
                    ta: 'புதுப்பிப்பு அதிர்வெண்'
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
            en: 'Package Tracking Dashboard',
            si: 'පැකේජ ලුහුබැඳීමේ උපකරණ පුවරුව',
            ta: 'பேக்கேஜ் கண்காணிப்பு டாஷ்போர்டு'
        }
    },

    // Monitor Delivery Status Section
    monitorDeliveryStatus: {
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
                en: 'Monitor delivery status',
                si: 'Delivery status සහ ',
                ta: 'டெலிவரி நிலையை'
            },
            part2: {
                en: 'and performance',
                si: 'ක්‍රියාකාරීත්වය නිරීක්ෂණය කරන්න',
                ta: 'மற்றும் செயல்திறனைக் கண்காணிக்கவும்'
            }
        },
        description: {
            en: 'Advanced delivery monitoring with comprehensive analytics and performance metrics. Track delivery success rates, identify bottlenecks, and optimize your shipping operations with data-driven insights.',
            si: 'විස්තරාත්මක දත්ත (Analytics) සහ Performance මිනුම් දඬු සමඟින් උසස් Delivery නිරීක්ෂණ පහසුකම් ලබාගන්න. Delivery සාර්ථකත්ව අනුපාතයන් හඳුනාගෙන, දත්ත පදනම් කරගත් තොරතුරු (Data-driven insights) හරහා ඔබේ Shipping කටයුතු තවදුරටත් දියුණු කරන්න.',
            ta: 'விரிவான பகுப்பாய்வு மற்றும் செயல்திறன் அளவீடுகளுடன் மேம்பட்ட டெலிவரி கண்காணிப்பு. டெலிவரி வெற்றி விகிதங்களைக் கண்காணிக்கவும், தடைகளைக் கண்டறியவும், தரவு-உந்துதல் நுண்ணறிவுகளுடன் உங்கள் ஷிப்பிங் செயல்பாடுகளை மேம்படுத்தவும்.'
        },
        stats: {
            realTimeUpdates: {
                value: {
                    en: 'Live',
                    si: 'සජීවී',
                    ta: 'நேரடி'
                },
                label: {
                    en: 'Real-time Updates',
                    si: 'තත්ව කාලීන යාවත්කාලීන',
                    ta: 'நிகழ்நேர புதுப்பிப்புகள்'
                }
            },
            customerInformed: {
                value: {
                    en: '100%',
                    si: '100%',
                    ta: '100%'
                },
                label: {
                    en: 'Customer Informed',
                    si: 'පාරිභෝගිකයින් දැනුම් දීම',
                    ta: 'வாடிக்கையாளர் தகவல்'
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
            en: 'Delivery Status Monitoring Dashboard',
            si: 'බෙදා හැරීමේ තත්ත්ව නිරීක්ෂණ උපකරණ පුවරුව',
            ta: 'டெலிவரி நிலை கண்காணிப்பு டாஷ்போர்டு'
        }
    }
};

export const useShippingTranslation = () => {
    const { currentLanguage } = useLanguage();

    const tShipping = (key, fallbackLanguage = 'en') => {
        const keys = key.split('.');
        let value = shippingTranslations;

        for (const k of keys) {
            value = value?.[k];
            if (!value) break;
        }

        if (value && typeof value === 'object') {
            return value[currentLanguage] || value[fallbackLanguage] || key;
        }

        return key;
    };

    return { tShipping };
};

export const tShipping = (key, language = 'en') => {
    const keys = key.split('.');
    let value = shippingTranslations;

    for (const k of keys) {
        value = value?.[k];
        if (!value) break;
    }

    if (value && typeof value === 'object') {
        return value[language] || value['en'] || key;
    }

    return key;
};
