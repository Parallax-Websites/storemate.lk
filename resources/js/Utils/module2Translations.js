import { useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const module2Translations = {
    en: {
        module2: {
            pageTitle: "Module 2: System Features & Management - Free Course",
            breadcrumb: {
                freeCourse: "Free Course",
                module2: "Module 2"
            },
            hero: {
                badge: "MODULE 2",
                title: "System Features & Management",
                description: "Master the core features including search, inquiries, products, customers and users",
                stats: [
                    {
                        number: "7",
                        text: "Video Lessons"
                    },
                    {
                        level: "Intermediate",
                        text: "Difficulty Level"
                    },
                    {
                        type: "Core Skills",
                        text: "Learning Focus"
                    }
                ]
            },
            moduleOverview: {
                title: "Module Overview",
                description: "In this comprehensive module, you'll master the essential features of Storemate OMS. Learn how to use global search, manage inquiries, add products and customers, and set up user roles and permissions for your team."
            },
            videos: [
                {
                    title: "Global Search | Online Order Management Software",
                    description: "Use the powerful global search feature to find anything quickly",
                    duration: "1:01"
                },
                {
                    title: "How to Add Inquiry",
                    description: "Step-by-step guide to add and manage customer inquiries",
                    duration: "3:11"
                },
                {
                    title: "Inquiry Table",
                    description: "Navigate and manage your inquiry table effectively",
                    duration: "3:32"
                },
                {
                    title: "How to Add Product",
                    description: "Complete guide to adding products to your inventory system",
                    duration: "4:01"
                },
                {
                    title: "How to Add Customer",
                    description: "Learn how to add and manage customer information",
                    duration: "2:56"
                },
                {
                    title: "How to Add User Role",
                    description: "Set up user roles and permissions for your team",
                    duration: "2:38"
                },
                {
                    title: "How to Add User",
                    description: "Add new users to your Storemate OMS system",
                    duration: "3:13"
                }
            ],
            ui: {
                lessonText: "Lesson",
                watchLesson: "Watch Lesson",
                durationText: "Duration:",
                navigation: {
                    previousModule: "Previous Module",
                    nextModule: "Next Module"
                }
            }
        }
    },
    si: {
        module2: {
            pageTitle: "මොඩියුල 2: පද්ධති විශේෂාංග සහ කළමනාකරණය - නොමිලේ පාඨමාලාව",
            breadcrumb: {
                freeCourse: "නොමිලේ පාඨමාලාව",
                module2: "මොඩියුල 2"
            },
            hero: {
                badge: "මොඩියුල 2",
                title: "පද්ධති විශේෂාංග සහ කළමනාකරණය",
                description: "සෙවීම, විමසීම්, නිෂ්පාදන, පාරිභෝගිකයින් සහ පරිශීලකයින් ඇතුළු මූලික විශේෂාංග ප්‍රගුණ කරන්න",
                stats: [
                    {
                        number: "7",
                        text: "වීඩියෝ පාඩම්"
                    },
                    {
                        level: "මධ්‍යම",
                        text: "දුෂ්කරතා මට්ටම"
                    },
                    {
                        type: "මූලික කුසලතා",
                        text: "ඉගෙනුම් අවධානය"
                    }
                ]
            },
            moduleOverview: {
                title: "මොඩියුල විශ්ලේෂණය",
                description: "මෙම පුළුල් මොඩියුලයේදී, ඔබ Storemate OMS හි අත්‍යවශ්‍ය විශේෂාංග ප්‍රගුණ කරන්නට ඇත. ගෝලීය සෙවීම භාවිතා කරන ආකාරය, විමසීම් කළමනාකරණය, නිෂ්පාදන සහ පාරිභෝගිකයින් එකතු කිරීම, සහ ඔබේ කණ්ඩායම සඳහා පරිශීලක භූමිකාවන් සහ අවසර පිහිටුවීම ඉගෙන ගන්න."
            },
            videos: [
                {
                    title: "Global Search | Online Order Management Software",
                    description: "ඕනෑම දෙයක් ඉක්මනින් සොයා ගැනීමට බලගතු ගෝලීය සෙවීමේ විශේෂාංගය භාවිතා කරන්න",
                    duration: "1:01"
                },
                {
                    title: "How to Add Inquiry",
                    description: "පාරිභෝගික විමසීම් එකතු කර කළමනාකරණය කිරීමේ පියවරෙන් පියවර මාර්ගෝපදේශය",
                    duration: "3:11"
                },
                {
                    title: "Inquiry Table",
                    description: "ඔබේ විමසුම් වගුව ඵලදායී ලෙස සැරිසැරීම සහ කළමනාකරණය කිරීම",
                    duration: "3:32"
                },
                {
                    title: "How to Add Product",
                    description: "ඔබේ ඉන්වෙන්ටරි පද්ධතියට නිෂ්පාදන එකතු කිරීමේ සම්පූර්ණ මාර්ගෝපදේශය",
                    duration: "4:01"
                },
                {
                    title: "How to Add Customer",
                    description: "පාරිභෝගික තොරතුරු එකතු කර කළමනාකරණය කරන ආකාරය ඉගෙන ගන්න",
                    duration: "2:56"
                },
                {
                    title: "How to Add User Role",
                    description: "ඔබේ කණ්ඩායම සඳහා පරිශීලක භූමිකාවන් සහ අවසර පිහිටුවන්න",
                    duration: "2:38"
                },
                {
                    title: "How to Add User",
                    description: "ඔබේ Storemate OMS පද්ධතියට නව පරිශීලකයින් එකතු කරන්න",
                    duration: "3:13"
                }
            ],
            ui: {
                lessonText: "පාඩම",
                watchLesson: "පාඩම නරඹන්න",
                durationText: "කාලය:",
                navigation: {
                    previousModule: "පෙර මොඩියුල",
                    nextModule: "ඊළඟ මොඩියුල"
                }
            }
        }
    },
    ta: {
        module2: {
            pageTitle: "தொகுதி 2: கணினி அம்சங்கள் மற்றும் நிர்வாகம் - இலவச பாடநெறி",
            breadcrumb: {
                freeCourse: "இலவச பாடநெறி",
                module2: "தொகுதி 2"
            },
            hero: {
                badge: "தொகுதி 2",
                title: "கணினி அம்சங்கள் மற்றும் நிர்வாகம்",
                description: "தேடல், விசாரணைகள், தயாரிப்புகள், வாடிக்கையாளர்கள் மற்றும் பயனர்கள் உட்பட முக்கிய அம்சங்களில் தேர்ச்சி பெறுங்கள்",
                stats: [
                    {
                        number: "7",
                        text: "வீடியோ பாடங்கள்"
                    },
                    {
                        level: "இடைநிலை",
                        text: "சிரமம் நிலை"
                    },
                    {
                        type: "முக்கிய திறன்கள்",
                        text: "கற்றல் கவனம்"
                    }
                ]
            },
            moduleOverview: {
                title: "தொகுதி கண்ணோட்டம்",
                description: "இந்த விரிவான தொகுதியில், நீங்கள் Storemate OMS இன் அத்தியாவசிய அம்சங்களில் தேர்ச்சி பெறுவீர்கள். உலகளாவிய தேடலை எவ்வாறு பயன்படுத்துவது, விசாரணைகளை நிர்வகிப்பது, தயாரிப்புகள் மற்றும் வாடிக்கையாளர்களைச் சேர்ப்பது மற்றும் உங்கள் குழுவிற்கான பயனர் பாத்திரங்கள் மற்றும் அனுமதிகளை அமைப்பது ஆகியவற்றைக் கற்றுக்கொள்ளுங்கள்."
            },
            videos: [
                {
                    title: "Global Search | Online Order Management Software",
                    description: "எதையும் விரைவாகக் கண்டறிய சக்திவாய்ந்த உலகளாவிய தேடல் அம்சத்தைப் பயன்படுத்துங்கள்",
                    duration: "1:01"
                },
                {
                    title: "How to Add Inquiry",
                    description: "வாடிக்கையாளர் விசாரணைகளைச் சேர்த்து நிர்வகிப்பதற்கான படிப்படியான வழிகாட்டி",
                    duration: "3:11"
                },
                {
                    title: "Inquiry Table",
                    description: "உங்கள் விசாரணை அட்டவணையை திறமையாக வழிசெலுத்தல் மற்றும் நிர்வகித்தல்",
                    duration: "3:32"
                },
                {
                    title: "How to Add Product",
                    description: "உங்கள் சரக்கு அமைப்பில் தயாரிப்புகளைச் சேர்ப்பதற்கான முழுமையான வழிகாட்டி",
                    duration: "4:01"
                },
                {
                    title: "How to Add Customer",
                    description: "வாடிக்கையாளர் தகவல்களைச் சேர்த்து நிர்வகிக்கும் முறையைக் கற்றுக்கொள்ளுங்கள்",
                    duration: "2:56"
                },
                {
                    title: "How to Add User Role",
                    description: "உங்கள் குழுவிற்கு பயனர் பாத்திரங்கள் மற்றும் அனுமதிகளை அமைக்கவும்",
                    duration: "2:38"
                },
                {
                    title: "How to Add User",
                    description: "உங்கள் Storemate OMS அமைப்பில் புதிய பயனர்களைச் சேர்க்கவும்",
                    duration: "3:13"
                }
            ],
            ui: {
                lessonText: "பாடம்",
                watchLesson: "பாடத்தைப் பாருங்கள்",
                durationText: "கால அளவு:",
                navigation: {
                    previousModule: "முந்தைய தொகுதி",
                    nextModule: "அடுத்த தொகுதி"
                }
            }
        }
    }
};

export const useModule2Translation = () => {
    const { currentLanguage } = useContext(LanguageContext);

    const tModule2 = (key) => {
        const keys = key.split('.');
        let value = module2Translations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = module2Translations.en;
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

    return { tModule2 };
};
