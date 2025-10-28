import { useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const module3Translations = {
    en: {
        module3: {
            pageTitle: "Module 3: How to start COD Business - Free Course",
            breadcrumb: {
                freeCourse: "Free Course",
                module3: "Module 3"
            },
            hero: {
                badge: "MODULE 3",
                title: "How to start COD Business",
                description: "Complete guide to starting and scaling your Cash on Delivery business",
                stats: [
                    {
                        number: "5",
                        text: "Video Lessons"
                    },
                    {
                        level: "Advanced",
                        text: "Difficulty Level"
                    },
                    {
                        type: "Business",
                        text: "Focus Area"
                    }
                ]
            },
            moduleOverview: {
                title: "Module Overview",
                description: "This advanced module covers courier integration and Cash on Delivery business setup. You'll learn how to register with delivery partners, work effectively with courier companies, and implement COD operations for your business."
            },
            videos: [
                {
                    title: "What is COD? (Cash on Delivery)",
                    description: "Understanding Cash on Delivery and its benefits for your business",
                    duration: "3:10"
                },
                {
                    title: "How to Apply COD Business",
                    description: "Set up and manage Cash on Delivery business operations",
                    duration: "4:01"
                },
                {
                    title: "How to Register with Delivery Partner",
                    description: "Step-by-step registration process with delivery partners",
                    duration: "7:03"
                },
                {
                    title: "How to Work with Courier Company",
                    description: "Complete guide to partnering and working with courier companies",
                    duration: "Video Length"
                },
                {
                    title: "How a Courier Company Works",
                    description: "Overview of how courier companies operate and what to expect",
                    duration: "Video Length"
                }
            ],
            ui: {
                lessonText: "Lesson",
                watchLesson: "Watch Lesson",
                durationText: "Duration:",
                navigation: {
                    previousModule: "Previous Module",
                    courseComplete: "Course Complete"
                }
            }
        }
    },
    si: {
        module3: {
            pageTitle: "මොඩියුල 3: COD ව්‍යාපාරයක් ආරම්භ කරන්නේ කෙසේද - නොමිලේ පාඨමාලාව",
            breadcrumb: {
                freeCourse: "නොමිලේ පාඨමාලාව",
                module3: "මොඩියුල 3"
            },
            hero: {
                badge: "මොඩියුල 3",
                title: "COD ව්‍යාපාරයක් ආරම්භ කරන්නේ කෙසේද",
                description: "ඔබේ මුදල් ලබා ගැනීමේ ව්‍යාපාරය ආරම්භ කර පරිමාණය වැඩි කිරීමේ සම්පූර්ණ මාර්ගෝපදේශය",
                stats: [
                    {
                        number: "5",
                        text: "වීඩියෝ පාඩම්"
                    },
                    {
                        level: "උසස්",
                        text: "දුෂ්කරතා මට්ටම"
                    },
                    {
                        type: "ව්‍යාපාරික",
                        text: "අවධානය යොමු කරන ක්ෂේත්‍රය"
                    }
                ]
            },
            moduleOverview: {
                title: "මොඩියුල විශ්ලේෂණය",
                description: "මෙම උසස් මොඩියුලය කුරියර් ඒකාබද්ධීකරණය සහ මුදල් ලබා ගැනීමේ ව්‍යාපාර පිහිටුවීම ආවරණය කරයි. ඔබ බෙදාහැරීමේ සහකරුවන් සමඟ ලියාපදිංචි වීම, කුරියර් සමාගම් සමඟ ඵලදායී ලෙස වැඩ කිරීම සහ ඔබේ ව්‍යාපාරය සඳහා COD මෙහෙයුම් ක්‍රියාත්මක කිරීම ඉගෙන ගන්නේය."
            },
            videos: [
                {
                    title: "What is COD? (Cash on Delivery)",
                    description: "මුදල් ලබා ගැනීම සහ ඔබේ ව්‍යාපාරයට එහි ප්‍රතිලාභ තේරුම් ගැනීම",
                    duration: "3:10"
                },
                {
                    title: "How to Apply COD Business",
                    description: "මුදල් ලබා ගැනීමේ ව්‍යාපාරික මෙහෙයුම් පිහිටුවීම සහ කළමනාකරණය",
                    duration: "4:01"
                },
                {
                    title: "How to Register with Delivery Partner",
                    description: "බෙදාහැරීමේ සහකරුවන් සමඟ පියවරෙන් පියවර ලියාපදිංචි කිරීමේ ක්‍රියාවලිය",
                    duration: "7:03"
                },
                {
                    title: "How to Work with Courier Company",
                    description: "කුරියර් සමාගම් සමඟ හවුල්කාරිත්වය සහ වැඩ කිරීමේ සම්පූර්ණ මාර්ගෝපදේශය",
                    duration: "වීඩියෝ දිග"
                },
                {
                    title: "How a Courier Company Works",
                    description: "Overview of how courier companies operate and what to expect",
                    duration: "Video Length"
                }
            ],
            ui: {
                lessonText: "පාඩම",
                watchLesson: "පාඩම නරඹන්න",
                durationText: "කාලය:",
                navigation: {
                    previousModule: "පෙර මොඩියුල",
                    courseComplete: "පාඨමාලාව සම්පූර්ණයි"
                }
            }
        }
    },
    ta: {
        module3: {
            pageTitle: "தொகுதி 3: COD வணிகத்தைத் தொடங்குவது எப்படி - இலவச பாடநெறி",
            breadcrumb: {
                freeCourse: "இலவச பாடநெறி",
                module3: "தொகுதி 3"
            },
            hero: {
                badge: "தொகுதி 3",
                title: "COD வணிகத்தைத் தொடங்குவது எப்படி",
                description: "உங்கள் பணம் வசூலிப்பு வணிகத்தைத் தொடங்கி அளவிடுவதற்கான முழுமையான வழிகாட்டி",
                stats: [
                    {
                        number: "5",
                        text: "வீடியோ பாடங்கள்"
                    },
                    {
                        level: "மேம்பட்ட",
                        text: "சிரமம் நிலை"
                    },
                    {
                        type: "வணிகம்",
                        text: "கவன மையம்"
                    }
                ]
            },
            moduleOverview: {
                title: "தொகுதி கண்ணோட்டம்",
                description: "இந்த மேம்பட்ட தொகுதி கொரியர் ஒருங்கிணைப்பு மற்றும் பணம் வசூலிப்பு வணிக அமைப்பை உள்ளடக்கியது. டெலிவரி பார்ட்னர்களுடன் பதிவு செய்வது, கொரியர் நிறுவனங்களுடன் திறம்பட வேலை செய்வது மற்றும் உங்கள் வணிகத்திற்கான COD செயல்பாடுகளை செயல்படுத்துவது எப்படி என்பதை நீங்கள் கற்றுக்கொள்வீர்கள்."
            },
            videos: [
                {
                    title: "What is COD? (Cash on Delivery)",
                    description: "பணம் வசூலிப்பு மற்றும் உங்கள் வணிகத்திற்கான அதன் நன்மைகளைப் புரிந்துகொள்ளுதல்",
                    duration: "3:10"
                },
                {
                    title: "How to Apply COD Business",
                    description: "பணம் வசூலிப்பு வணிக நடவடிக்கைகளை அமைத்து நிர்வகித்தல்",
                    duration: "4:01"
                },
                {
                    title: "How to Register with Delivery Partner",
                    description: "டெலிவரி பார்ட்னர்களுடன் படிப்படியான பதிவு செயல்முறை",
                    duration: "7:03"
                },
                {
                    title: "How to Work with Courier Company",
                    description: "கொரியர் நிறுவனங்களுடன் கூட்டாண்மை மற்றும் வேலை செய்வதற்கான முழுமையான வழிகாட்டி",
                    duration: "வீடியோ நேரம்"
                },
                {
                    title: "How a Courier Company Works",
                    description: "Overview of how courier companies operate and what to expect",
                    duration: "Video Length"
                }
            ],
            ui: {
                lessonText: "பாடம்",
                watchLesson: "பாடத்தைப் பாருங்கள்",
                durationText: "கால அளவு:",
                navigation: {
                    previousModule: "முந்தைய தொகுதி",
                    courseComplete: "பாடநெறி முடிந்தது"
                }
            }
        }
    }
};

export const useModule3Translation = () => {
    const { currentLanguage } = useContext(LanguageContext);

    const tModule3 = (key) => {
        const keys = key.split('.');
        let value = module3Translations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = module3Translations.en;
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

    return { tModule3 };
};
