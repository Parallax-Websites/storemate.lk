import { useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const module1Translations = {
    en: {
        module1: {
            pageTitle: "Module 1: Getting Started with Storemate OMS - Free Course",
            breadcrumb: {
                freeCourse: "Free Course",
                module1: "Module 1"
            },
            hero: {
                badge: "MODULE 1",
                title: "Getting Started with Storemate OMS",
                description: "Learn the fundamentals and understand why Storemate is perfect for online sellers",
                stats: [
                    {
                        number: "5",
                        text: "Video Lessons"
                    },
                    {
                        level: "Beginner",
                        text: "Difficulty Level"
                    },
                    {
                        type: "Essential",
                        text: "Knowledge Base"
                    }
                ]
            },
            moduleOverview: {
                title: "Module Overview",
                description: "This foundational module introduces you to Storemate OMS and explains why traditional POS systems don't work for online sellers. You'll learn about the most trusted sales channels in Sri Lanka and discover how to convert leads into actual sales."
            },
            videos: [
                {
                    title: "Online Sellers ලට POS Software ගැළපෙන්නේ නැත්තේ ඇයි? | Online Order Management Software",
                    description: "Why POS Software doesn't suit online sellers and what they need instead",
                    duration: "1:54"
                },
                {
                    title: "The Most Trusted Sales Channel for E-commerce in Sri Lanka? | Online Order Management Software",
                    description: "Discover the most reliable sales channels for Sri Lankan e-commerce businesses",
                    duration: "2:03"
                },
                {
                    title: "ඔයාට Leads ආවත් Sale එකක් වෙන්නේ නැද්ද? Online Order Management Software",
                    description: "Getting leads but no sales? Learn how to convert leads effectively",
                    duration: "3:41"
                },
                {
                    title: "Order Sync with Courier Partner",
                    description: "How to synchronize orders with your courier delivery partners",
                    duration: "1:00"
                },
                {
                    title: "Make Your Online Business Operations Smooth | Storemate OMS Is for Sri Lankan SMEs 🇱🇰📦",
                    description: "Complete guide on making your online business operations smooth with Storemate OMS",
                    duration: "4:51"
                }
            ],
            ui: {
                lessonText: "Lesson",
                watchLesson: "Watch Lesson",
                durationText: "Duration:",
                navigation: {
                    backToCourse: "Back to Course",
                    nextModule: "Next Module"
                }
            }
        }
    },
    si: {
        module1: {
            pageTitle: "මොඩියුල 1: Storemate OMS සමඟ ආරම්භ කිරීම - නොමිලේ පාඨමාලාව",
            breadcrumb: {
                freeCourse: "නොමිලේ පාඨමාලාව",
                module1: "මොඩියුල 1"
            },
            hero: {
                badge: "මොඩියුල 1",
                title: "Storemate OMS සමඟ ආරම්භ කිරීම",
                description: "මූලික කරුණු ඉගෙන ගන්න සහ Storemate මාර්ගගත විකුණුම්කරුවන් සඳහා ඇයි පරිපූර්ණද යන්න තේරුම් ගන්න",
                stats: [
                    {
                        number: "5",
                        text: "වීඩියෝ පාඩම්"
                    },
                    {
                        level: "ආරම්භක",
                        text: "දුෂ්කරතා මට්ටම"
                    },
                    {
                        type: "අත්‍යවශ්‍ය",
                        text: "දැනුම් පදනම"
                    }
                ]
            },
            moduleOverview: {
                title: "මොඩියුල විශ්ලේෂණය",
                description: "මෙම පදනම් මොඩියුලය ඔබට Storemate OMS හඳුන්වා දෙන අතර සාම්ප්‍රදායික POS පද්ධති මාර්ගගත විකුණුම්කරුවන්ට වැඩ නොකරන්නේ ඇයි යන්න පැහැදිලි කරයි. ඔබ ශ්‍රී ලංකාවේ වඩාත්ම විශ්වසනීය විකුණුම් නාලිකා ගැන ඉගෙන ගන්නා අතර මුණගැසීම් සත්‍ය විකුණුම් බවට පරිවර්තනය කරන්නේ කෙසේදැයි සොයා ගන්නේය."
            },
            videos: [
                {
                    title: "Online Sellers ලට POS Software ගැළපෙන්නේ නැත්තේ ඇයි? | Online Order Management Software",
                    description: "POS මෘදුකාංගය මාර්ගගත විකුණුම්කරුවන්ට නොගැළපෙන්නේ ඇයි සහ ඒ වෙනුවට ඔවුන්ට අවශ්‍ය දේ",
                    duration: "1:54"
                },
                {
                    title: "The Most Trusted Sales Channel for E-commerce in Sri Lanka? | Online Order Management Software",
                    description: "ශ්‍රී ලංකාවේ ඊ-වාණිජ ව්‍යාපාර සඳහා වඩාත්ම විශ්වසනීය විකුණුම් නාලිකා සොයා ගන්න",
                    duration: "2:03"
                },
                {
                    title: "ඔයාට Leads ආවත් Sale එකක් වෙන්නේ නැද්ද? Online Order Management Software",
                    description: "මුණගැසීම් ලැබුණත් විකුණුම් නොවේද? ඵලදායී ලෙස මුණගැසීම් පරිවර්තනය කරන ආකාරය ඉගෙන ගන්න",
                    duration: "3:41"
                },
                {
                    title: "Order Sync with Courier Partner",
                    description: "ඔබේ කුරියර් බෙදාහැරීමේ සහකරුවන් සමඟ ඇණවුම් සමමුහුර්ත කරන ආකාරය",
                    duration: "1:00"
                },
                {
                    title: "Make Your Online Business Operations Smooth | Storemate OMS Is for Sri Lankan SMEs 🇱🇰📦",
                    description: "Storemate OMS සමඟ ඔබේ මාර්ගගත ව්‍යාපාරික මෙහෙයුම් සුමටව සිදු කිරීමේ සම්පූර්ණ මාර්ගෝපදේශය",
                    duration: "4:51"
                }
            ],
            ui: {
                lessonText: "පාඩම",
                watchLesson: "පාඩම නරඹන්න",
                durationText: "කාලය:",
                navigation: {
                    backToCourse: "පාඨමාලාවට ආපසු",
                    nextModule: "ඊළඟ මොඩියුල"
                }
            }
        }
    },
    ta: {
        module1: {
            pageTitle: "தொகுதி 1: Storemate OMS உடன் தொடங்குதல் - இலவச பாடநெறி",
            breadcrumb: {
                freeCourse: "இலவச பாடநெறி",
                module1: "தொகுதி 1"
            },
            hero: {
                badge: "தொகுதி 1",
                title: "Storemate OMS உடன் தொடங்குதல்",
                description: "அடிப்படைகளைக் கற்றுக்கொண்டு ஆன்லைன் விற்பனையாளர்களுக்கு Storemate ஏன் சரியானது என்பதைப் புரிந்து கொள்ளுங்கள்",
                stats: [
                    {
                        number: "5",
                        text: "வீடியோ பாடங்கள்"
                    },
                    {
                        level: "ஆரம்ப நிலை",
                        text: "சிரமம் நிலை"
                    },
                    {
                        type: "அத்தியாவசியம்",
                        text: "அறிவுத் தளம்"
                    }
                ]
            },
            moduleOverview: {
                title: "தொகுதி கண்ணோட்டம்",
                description: "இந்த அடிப்படை தொகுதி உங்களுக்கு Storemate OMS ஐ அறிமுகப்படுத்துகிறது மற்றும் பாரம்பரிய POS அமைப்புகள் ஆன்லைன் விற்பனையாளர்களுக்கு ஏன் வேலை செய்யாது என்பதை விளக்குகிறது. இலங்கையில் மிகவும் நம்பகமான விற்பனை சேனல்களைப் பற்றி நீங்கள் கற்றுக்கொள்வீர்கள் மற்றும் லீட்களை உண்மையான விற்பனையாக மாற்றுவது எப்படி என்பதைக் கண்டறிவீர்கள்."
            },
            videos: [
                {
                    title: "Online Sellers ලට POS Software ගැළපෙන්නේ නැත්තේ ඇයි? | Online Order Management Software",
                    description: "POS மென்பொருள் ஆன்லைன் விற்பனையாளர்களுக்கு ஏன் பொருந்தாது மற்றும் அதற்கு பதிலாக அவர்களுக்கு என்ன தேவை",
                    duration: "1:54"
                },
                {
                    title: "The Most Trusted Sales Channel for E-commerce in Sri Lanka? | Online Order Management Software",
                    description: "இலங்கை மின்-வணிக வணிகங்களுக்கான மிகவும் நம்பகமான விற்பனை சேனல்களைக் கண்டறியுங்கள்",
                    duration: "2:03"
                },
                {
                    title: "ඔයාට Leads ආවත් Sale එකක් වෙන්නේ නැද්ද? Online Order Management Software",
                    description: "லீட்கள் கிடைத்தும் விற்பனை இல்லையா? லீட்களை திறம்பட மாற்றும் முறையைக் கற்றுக்கொள்ளுங்கள்",
                    duration: "3:41"
                },
                {
                    title: "Order Sync with Courier Partner",
                    description: "உங்கள் கொரியர் டெலிவரி பார்ட்னர்களுடன் ஆர்டர்களை ஒத்திசைக்கும் முறை",
                    duration: "1:00"
                },
                {
                    title: "Make Your Online Business Operations Smooth | Storemate OMS Is for Sri Lankan SMEs 🇱🇰📦",
                    description: "Storemate OMS உடன் உங்கள் ஆன்லைன் வணிக நடவடிக்கைகளை மென்மையாக்குவதற்கான முழுமையான வழிகாட்டி",
                    duration: "4:51"
                }
            ],
            ui: {
                lessonText: "பாடம்",
                watchLesson: "பாடத்தைப் பாருங்கள்",
                durationText: "கால அளவு:",
                navigation: {
                    backToCourse: "பாடநெறிக்கு திரும்பு",
                    nextModule: "அடுத்த தொகுதி"
                }
            }
        }
    }
};

export const useModule1Translation = () => {
    const { currentLanguage } = useContext(LanguageContext);

    const tModule1 = (key) => {
        const keys = key.split('.');
        let value = module1Translations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = module1Translations.en;
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

    return { tModule1 };
};
