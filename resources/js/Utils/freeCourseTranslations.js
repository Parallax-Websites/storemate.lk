import { useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const freeCourseTranslations = {
    en: {
        freeCourse: {
            pageTitle: "Free Course - Storemate OMS Training",
            hero: {
                badge: "FREE STOREMATE OMS COURSE",
                title: {
                    part1: "Master",
                    part2: "Storemate OMS"
                },
                description: "Learn how to streamline your order management, reduce returns by 80%+, and save 3+ hours daily with our comprehensive free video course.",
                stats: [
                    {
                        number: "16",
                        text: "Video Tutorials"
                    },
                    {
                        number: "3",
                        text: "Learning Modules"
                    },
                    {
                        number: "100%",
                        text: "Free Access"
                    }
                ]
            },
            courseModules: {
                sectionTitle: "Course Modules",
                sectionDescription: "Click on any module to access detailed video lessons and materials",
                modules: [
                    {
                        title: "Getting Started with Storemate OMS",
                        description: "Learn the fundamentals and understand why Storemate is perfect for online sellers",
                        level: "Basic",
                        levelText: "Level",
                        videoText: "Video Lessons",
                        startButton: "Start Module",
                        featuredText: "Featured Lessons:",
                        moreText: "more lessons"
                    },
                    {
                        title: "System Features & Management",
                        description: "Learn how to start and manage a successful COD business with courier integrations",
                        level: "Core",
                        levelText: "Level",
                        videoText: "Video Lessons",
                        startButton: "Start Module",
                        featuredText: "Featured Lessons:",
                        moreText: "more lessons"
                    },
                    {
                        title: "How to start COD Business in Sri Lanka",
                        description: "Complete guide to starting and scaling your Cash on Delivery business",
                        level: "Pro",
                        levelText: "Level",
                        videoText: "Video Lessons",
                        startButton: "Start Module",
                        featuredText: "Featured Lessons:",
                        moreText: "more lessons"
                    }
                ]
            },
            benefits: {
                title: "What You'll Learn",
                items: [
                    {
                        title: "Quick Setup",
                        description: "Get started with Storemate OMS in minutes"
                    },
                    {
                        title: "Order Management",
                        description: "Master efficient order processing workflows"
                    },
                    {
                        title: "Courier Integration",
                        description: "Connect with delivery partners seamlessly"
                    },
                    {
                        title: "COD Business",
                        description: "Set up Cash on Delivery operations"
                    }
                ]
            },
            videos: {
                modules: [
                    {
                        videos: [
                            {
                                title: "Online Sellers ලට POS Software ගැළපෙන්නේ නැත්තේ ඇයි? | Online Order Management Software",
                                description: "Why POS Software doesn't suit online sellers and what they need instead"
                            },
                            {
                                title: "The Most Trusted Sales Channel for E-commerce in Sri Lanka? | Online Order Management Software",
                                description: "Discover the most reliable sales channels for Sri Lankan e-commerce businesses"
                            },
                            {
                                title: "ඔයාට Leads ආවත් Sale එකක් වෙන්නේ නැද්ද? Online Order Management Software",
                                description: "Getting leads but no sales? Learn how to convert leads effectively"
                            },
                            {
                                title: "Order Sync with Courier Partner",
                                description: "How to synchronize orders with your courier delivery partners"
                            },
                            {
                                title: "Make Your Online Business Operations Smooth | Storemate OMS Is for Sri Lankan SMEs 🇱🇰📦",
                                description: "Complete guide on making your online business operations smooth with Storemate OMS"
                            }
                        ]
                    },
                    {
                        videos: [
                            {
                                title: "Global Search | Online Order Management Software",
                                description: "Use the powerful global search feature to find anything quickly"
                            },
                            {
                                title: "How to Add Inquiry",
                                description: "Step-by-step guide to add and manage customer inquiries"
                            },
                            {
                                title: "Inquiry Table",
                                description: "Navigate and manage your inquiry table effectively"
                            },
                            {
                                title: "How to Add Product",
                                description: "Complete guide to adding products to your inventory system"
                            },
                            {
                                title: "How to Add Customer",
                                description: "Learn how to add and manage customer information"
                            },
                            {
                                title: "How to Add User Role",
                                description: "Set up user roles and permissions for your team"
                            },
                            {
                                title: "How to Add User",
                                description: "Add new users to your Storemate OMS system"
                            }
                        ]
                    },
                    {
                        videos: [
                            {
                                title: "How to Work with Courier Company",
                                description: "Complete guide to partnering and working with courier companies"
                            },
                            {
                                title: "How to Register with Delivery Partner",
                                description: "Step-by-step registration process with delivery partners"
                            },
                            {
                                title: "How to Apply COD Business",
                                description: "Set up and manage Cash on Delivery business operations"
                            },
                            {
                                title: "What is COD? (Cash on Delivery)",
                                description: "Understanding Cash on Delivery and its benefits for your business"
                            }
                        ]
                    }
                ]
            }
        }
    },
    si: {
        freeCourse: {
            pageTitle: "නොමිලේ පාඨමාලාව - Storemate OMS පුහුණුව",
            hero: {
                badge: "නොමිලේ STOREMATE OMS පාඨමාලාව",
                title: {
                    part1: "Storemate OMS",
                    part2: "ප්‍රගුණ කරන්න"
                },
                description: "ඔබේ ඇණවුම් කළමනාකරණය සුලභ කිරීම, ආපසු යැවීම් 80%+ කින් අඩු කිරීම සහ අපගේ පුළුල් නොමිලේ වීඩියෝ පාඨමාලාව සමඟ දිනකට පැය 3+ ක් ඉතිරි කර ගන්නා ආකාරය ඉගෙන ගන්න.",
                stats: [
                    {
                        number: "16",
                        text: "වීඩියෝ නිබන්ධන"
                    },
                    {
                        number: "3",
                        text: "ඉගෙනුම් මොඩියුල"
                    },
                    {
                        number: "100%",
                        text: "නොමිලේ ප්‍රවේශය"
                    }
                ]
            },
            courseModules: {
                sectionTitle: "පාඨමාලා මොඩියුල",
                sectionDescription: "විස්තරාත්මක වීඩියෝ පාඩම් සහ ද්‍රව්‍ය ලබා ගැනීමට ඕනෑම මොඩියුලයක් මත ක්ලික් කරන්න",
                modules: [
                    {
                        title: "Storemate OMS සමඟ ආරම්භ කිරීම",
                        description: "මූලික කරුණු ඉගෙන ගන්න සහ Storemate මාර්ගගත විකුණුම්කරුවන් සඳහා ඇයි පරිපූර්ණද යන්න තේරුම් ගන්න",
                        level: "මූලික",
                        levelText: "මට්ටම",
                        videoText: "වීඩියෝ පාඩම්",
                        startButton: "මොඩියුලය ආරම්භ කරන්න",
                        featuredText: "විශේෂාංගගත පාඩම්:",
                        moreText: "තවත් පාඩම්"
                    },
                    {
                        title: "කුරියර් ඒකාබද්ධීකරණය සහ COD ව්‍යාපාරය",
                        description: "කුරියර් ඒකාබද්ධීකරණ සමඟ සාර්ථක COD ව්‍යාපාරයක් ආරම්භ කර කළමනාකරණය කරන ආකාරය ඉගෙන ගන්න",
                        level: "මධ්‍යම",
                        levelText: "මට්ටම",
                        videoText: "වීඩියෝ පාඩම්",
                        startButton: "මොඩියුලය ආරම්භ කරන්න",
                        featuredText: "විශේෂාංගගත පාඩම්:",
                        moreText: "තවත් පාඩම්"
                    },
                    {
                        title: "ශ්‍රී ලංකාවේ COD ව්‍යාපාරයක් ආරම්භ කරන්නේ කෙසේද",
                        description: "ඔබේ මුදල් ලබා ගැනීමේ ව්‍යාපාරය ආරම්භ කර පරිමාණය වැඩි කිරීමේ සම්පූර්ණ මාර්ගෝපදේශය",
                        level: "ප්‍රවීණ",
                        levelText: "මට්ටම",
                        videoText: "වීඩියෝ පාඩම්",
                        startButton: "මොඩියුලය ආරම්භ කරන්න",
                        featuredText: "විශේෂාංගගත පාඩම්:",
                        moreText: "තවත් පාඩම්"
                    }
                ]
            },
            benefits: {
                title: "ඔබ ඉගෙන ගන්නේ කුමක්ද",
                items: [
                    {
                        title: "ඉක්මන් සැකසීම",
                        description: "මිනිත්තු කිහිපයකින් Storemate OMS සමඟ ආරම්භ කරන්න"
                    },
                    {
                        title: "ඇණවුම් කළමනාකරණය",
                        description: "කාර්යක්ෂම ඇණවුම් සැකසීමේ කාර්යාකාරීත්වය ප්‍රගුණ කරන්න"
                    },
                    {
                        title: "කුරියර් ඒකාබද්ධීකරණය",
                        description: "බෙදාහැරීමේ සහකරුවන් සමඟ නිරවුල්ව සම්බන්ධ වන්න"
                    },
                    {
                        title: "COD ව්‍යාපාරය",
                        description: "මුදල් ලබා ගැනීමේ මෙහෙයුම් පිහිටුවන්න"
                    }
                ]
            },
            videos: {
                modules: [
                    {
                        videos: [
                            {
                                title: "Online Sellers ලට POS Software ගැළපෙන්නේ නැත්තේ ඇයි? | Online Order Management Software",
                                description: "POS මෘදුකාංගය මාර්ගගත විකුණුම්කරුවන්ට නොගැළපෙන්නේ ඇයි සහ ඒ වෙනුවට ඔවුන්ට අවශ්‍ය දේ"
                            },
                            {
                                title: "The Most Trusted Sales Channel for E-commerce in Sri Lanka? | Online Order Management Software",
                                description: "ශ්‍රී ලංකාවේ ඊ-වාණිජ ව්‍යාපාර සඳහා වඩාත්ම විශ්වසනීය විකුණුම් නාලිකා සොයා ගන්න"
                            },
                            {
                                title: "ඔයාට Leads ආවත් Sale එකක් වෙන්නේ නැද්ද? Online Order Management Software",
                                description: "මුණගැසීම් ලැබුණත් විකුණුම් නොවේද? ඵලදායී ලෙස මුණගැසීම් පරිවර්තනය කරන ආකාරය ඉගෙන ගන්න"
                            },
                            {
                                title: "Order Sync with Courier Partner",
                                description: "ඔබේ කුරියර් බෙදාහැරීමේ සහකරුවන් සමඟ ඇණවුම් සමමුහුර්ත කරන ආකාරය"
                            },
                            {
                                title: "Make Your Online Business Operations Smooth | Storemate OMS Is for Sri Lankan SMEs 🇱🇰📦",
                                description: "Storemate OMS සමඟ ඔබේ මාර්ගගත ව්‍යාපාරික මෙහෙයුම් සුමටව සිදු කිරීමේ සම්පූර්ණ මාර්ගෝපදේශය"
                            }
                        ]
                    },
                    {
                        videos: [
                            {
                                title: "Global Search | Online Order Management Software",
                                description: "ඕනෑම දෙයක් ඉක්මනින් සොයා ගැනීමට බලගතු ගෝලීය සෙවීමේ විශේෂාංගය භාවිතා කරන්න"
                            },
                            {
                                title: "How to Add Inquiry",
                                description: "පාරිභෝගික විමසීම් එකතු කර කළමනාකරණය කිරීමේ පියවරෙන් පියවර මාර්ගෝපදේශය"
                            },
                            {
                                title: "Inquiry Table",
                                description: "ඔබේ විමසුම් වගුව ඵලදායී ලෙස සැරිසැරීම සහ කළමනාකරණය කිරීම"
                            },
                            {
                                title: "How to Add Product",
                                description: "ඔබේ ඉන්වෙන්ටරි පද්ධතියට නිෂ්පාදන එකතු කිරීමේ සම්පූර්ණ මාර්ගෝපදේශය"
                            },
                            {
                                title: "How to Add Customer",
                                description: "පාරිභෝගික තොරතුරු එකතු කර කළමනාකරණය කරන ආකාරය ඉගෙන ගන්න"
                            },
                            {
                                title: "How to Add User Role",
                                description: "ඔබේ කණ්ඩායම සඳහා පරිශීලක භූමිකාවන් සහ අවසර පිහිටුවන්න"
                            },
                            {
                                title: "How to Add User",
                                description: "ඔබේ Storemate OMS පද්ධතියට නව පරිශීලකයින් එකතු කරන්න"
                            }
                        ]
                    },
                    {
                        videos: [
                            {
                                title: "How to Work with Courier Company",
                                description: "කුරියර් සමාගම් සමඟ හවුල්කාරිත්වය සහ වැඩ කිරීමේ සම්පූර්ණ මාර්ගෝපදේශය"
                            },
                            {
                                title: "How to Register with Delivery Partner",
                                description: "බෙදාහැරීමේ සහකරුවන් සමඟ පියවරෙන් පියවර ලියාපදිංචි කිරීමේ ක්‍රියාවලිය"
                            },
                            {
                                title: "How to Apply COD Business",
                                description: "මුදල් ලබා ගැනීමේ ව්‍යාපාරික මෙහෙයුම් පිහිටුවීම සහ කළමනාකරණය"
                            },
                            {
                                title: "What is COD? (Cash on Delivery)",
                                description: "මුදල් ලබා ගැනීම සහ ඔබේ ව්‍යාපාරයට එහි ප්‍රතිලාභ තේරුම් ගැනීම"
                            }
                        ]
                    }
                ]
            }
        }
    },
    ta: {
        freeCourse: {
            pageTitle: "இலவச பாடநெறி - Storemate OMS பயிற்சி",
            hero: {
                badge: "இலவச STOREMATE OMS பாடநெறி",
                title: {
                    part1: "Storemate OMS ஐ",
                    part2: "தேர்ச்சி பெறுங்கள்"
                },
                description: "உங்கள் ஆர்டர் நிர்வாகத்தை எளிதாக்குவது, 80%+ வரை திரும்பப் பெறுதலை குறைப்பது மற்றும் எங்கள் விரிவான இலவச வீடியோ பாடநெறியுடன் தினமும் 3+ மணிநேரம் சேமிக்கும் முறையைக் கற்றுக்கொள்ளுங்கள்.",
                stats: [
                    {
                        number: "16",
                        text: "வீடியோ டுடோரியல்கள்"
                    },
                    {
                        number: "3",
                        text: "கற்றல் தொகுதிகள்"
                    },
                    {
                        number: "100%",
                        text: "இலவச அணுகல்"
                    }
                ]
            },
            courseModules: {
                sectionTitle: "பாடநெறி தொகுதிகள்",
                sectionDescription: "விரிவான வீடியோ பாடங்கள் மற்றும் பொருட்களை அணுக எந்த தொகுதியிலும் கிளிக் செய்யுங்கள்",
                modules: [
                    {
                        title: "Storemate OMS உடன் தொடங்குதல்",
                        description: "அடிப்படைகளைக் கற்றுக்கொண்டு ஆன்லைன் விற்பனையாளர்களுக்கு Storemate ஏன் சரியானது என்பதைப் புரிந்து கொள்ளுங்கள்",
                        level: "அடிப்படை",
                        levelText: "நிலை",
                        videoText: "வீடியோ பாடங்கள்",
                        startButton: "தொகுதியைத் தொடங்கு",
                        featuredText: "சிறப்பு பாடங்கள்:",
                        moreText: "மேலும் பாடங்கள்"
                    },
                    {
                        title: "கொரியர் ஒருங்கிணைப்பு & COD வணிகம்",
                        description: "கொரியர் ஒருங்கிணைப்புகளுடன் வெற்றிகரமான COD வணிகத்தைத் தொடங்கி நிர்வகிக்கும் முறையைக் கற்றுக்கொள்ளுங்கள்",
                        level: "மையம்",
                        levelText: "நிலை",
                        videoText: "வீடியோ பாடங்கள்",
                        startButton: "தொகுதியைத் தொடங்கு",
                        featuredText: "சிறப்பு பாடங்கள்:",
                        moreText: "மேலும் பாடங்கள்"
                    },
                    {
                        title: "இலங்கையில் COD வணிகத்தைத் தொடங்குவது எப்படி",
                        description: "உங்கள் பணம் வசூலிப்பு வணிகத்தைத் தொடங்கி அளவிடுவதற்கான முழுமையான வழிகாட்டி",
                        level: "நிபுணர்",
                        levelText: "நிலை",
                        videoText: "வீடியோ பாடங்கள்",
                        startButton: "தொகுதியைத் தொடங்கு",
                        featuredText: "சிறப்பு பாடங்கள்:",
                        moreText: "மேலும் பாடங்கள்"
                    }
                ]
            },
            benefits: {
                title: "நீங்கள் என்ன கற்றுக்கொள்வீர்கள்",
                items: [
                    {
                        title: "விரைவான அமைப்பு",
                        description: "நிமிடங்களில் Storemate OMS உடன் தொடங்குங்கள்"
                    },
                    {
                        title: "ஆர்டர் நிர்வாகம்",
                        description: "திறமையான ஆர்டர் செயலாக்க பணிப்பாய்வுகளில் தேர்ச்சி பெறுங்கள்"
                    },
                    {
                        title: "கொரியர் ஒருங்கிணைப்பு",
                        description: "டெலிவரி பார்ட்னர்களுடன் தடையின்றி இணைக்கவும்"
                    },
                    {
                        title: "COD வணிகம்",
                        description: "பணம் வசூலிப்பு நடவடிக்கைகளை அமைக்கவும்"
                    }
                ]
            },
            videos: {
                modules: [
                    {
                        videos: [
                            {
                                title: "Online Sellers ලට POS Software ගැළපෙන්නේ නැත්තේ ඇයි? | Online Order Management Software",
                                description: "POS மென்பொருள் ஆன்லைன் விற்பனையாளர்களுக்கு ஏன் பொருந்தாது மற்றும் அதற்கு பதிலாக அவர்களுக்கு என்ன தேவை"
                            },
                            {
                                title: "The Most Trusted Sales Channel for E-commerce in Sri Lanka? | Online Order Management Software",
                                description: "இலங்கை மின்-வணிக வணிகங்களுக்கான மிகவும் நம்பகமான விற்பனை சேனல்களைக் கண்டறியுங்கள்"
                            },
                            {
                                title: "ඔයාට Leads ආවත් Sale එකක් වෙන්නේ නැද්ද? Online Order Management Software",
                                description: "லீட்கள் கிடைத்தும் விற்பனை இல்லையா? லீட்களை திறம்பட மாற்றும் முறையைக் கற்றுக்கொள்ளுங்கள்"
                            },
                            {
                                title: "Order Sync with Courier Partner",
                                description: "உங்கள் கொரியர் டெலிவரி பார்ட்னர்களுடன் ஆர்டர்களை ஒத்திசைக்கும் முறை"
                            },
                            {
                                title: "Make Your Online Business Operations Smooth | Storemate OMS Is for Sri Lankan SMEs 🇱🇰📦",
                                description: "Storemate OMS உடன் உங்கள் ஆன்லைன் வணிக நடவடிக்கைகளை மென்மையாக்குவதற்கான முழுமையான வழிகாட்டி"
                            }
                        ]
                    },
                    {
                        videos: [
                            {
                                title: "Global Search | Online Order Management Software",
                                description: "எதையும் விரைவாகக் கண்டறிய சக்திவாய்ந்த உலகளாவிய தேடல் அம்சத்தைப் பயன்படுத்துங்கள்"
                            },
                            {
                                title: "How to Add Inquiry",
                                description: "வாடிக்கையாளர் விசாரணைகளைச் சேர்த்து நிர்வகிப்பதற்கான படிப்படியான வழிகாட்டி"
                            },
                            {
                                title: "Inquiry Table",
                                description: "உங்கள் விசாரணை அட்டவணையை திறமையாக வழிசெலுத்தல் மற்றும் நிர்வகித்தல்"
                            },
                            {
                                title: "How to Add Product",
                                description: "உங்கள் சரக்கு அமைப்பில் தயாரிப்புகளைச் சேர்ப்பதற்கான முழுமையான வழிகாட்டி"
                            },
                            {
                                title: "How to Add Customer",
                                description: "வாடிக்கையாளர் தகவல்களைச் சேர்த்து நிர்வகிக்கும் முறையைக் கற்றுக்கொள்ளுங்கள்"
                            },
                            {
                                title: "How to Add User Role",
                                description: "உங்கள் குழுவிற்கு பயனர் பாத்திரங்கள் மற்றும் அனுமதிகளை அமைக்கவும்"
                            },
                            {
                                title: "How to Add User",
                                description: "உங்கள் Storemate OMS அமைப்பில் புதிய பயனர்களைச் சேர்க்கவும்"
                            }
                        ]
                    },
                    {
                        videos: [
                            {
                                title: "How to Work with Courier Company",
                                description: "கொரியர் நிறுவனங்களுடன் கூட்டாண்மை மற்றும் வேலை செய்வதற்கான முழுமையான வழிகாட்டி"
                            },
                            {
                                title: "How to Register with Delivery Partner",
                                description: "டெலிவரி பார்ட்னர்களுடன் படிப்படியான பதிவு செயல்முறை"
                            },
                            {
                                title: "How to Apply COD Business",
                                description: "பணம் வசூலிப்பு வணிக நடவடிக்கைகளை அமைத்து நிர்வகித்தல்"
                            },
                            {
                                title: "What is COD? (Cash on Delivery)",
                                description: "பணம் வசூலிப்பு மற்றும் உங்கள் வணிகத்திற்கான அதன் நன்மைகளைப் புரிந்துகொள்ளுதல்"
                            }
                        ]
                    }
                ]
            }
        }
    }
};

export const useFreeCourseTranslation = () => {
    const { currentLanguage } = useContext(LanguageContext);

    const tFreeCourse = (key) => {
        const keys = key.split('.');
        let value = freeCourseTranslations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = freeCourseTranslations.en;
                for (const fallbackKey of keys) {
                    if (value && typeof value === 'object' && fallbackKey in value) {
                        value = value[fallbackKey];
                    } else {
                        return key; // Return key if not found
                    }
                }
                break;
            }
        }

        return value || key;
    };

    return { tFreeCourse };
};
