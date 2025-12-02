import { useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const contactUsTranslations = {
    en: {
        contactUs: {
            pageTitle: "Contact Us - Storemate OMS",
            hero: {
                badge: "GET IN TOUCH WITH US",
                title: "Contact Us",
                description: "We're here to help you grow your business. Reach out to us and let's discuss how Storemate OMS can transform your operations."
            },
            emailCard: {
                title: "Email Us",
                description: "Simple drop us an email at",
                email: "sales@storemate.lk",
                replyTime: "and you'll receive a reply within",
                timeFrame: "24 hours",
                buttonText: "Send Email"
            },
            callCard: {
                title: "Give us a call",
                description: "Give us a ring. Our Experts are standing by",
                hours: "Monday to Friday from 9am to 5pm",
                status: "Available Now",
                phoneNumber: "011 422 6911"
            }
        }
    },
    si: {
        contactUs: {
            pageTitle: "අප හා සම්බන්ධ වන්න - Storemate OMS",
            hero: {
                badge: "අප සමඟ සම්බන්ධ වන්න",
                title: "අප හා සම්බන්ධ වන්න",
                description: "ඔබේ ව්‍යාපාරය වර්ධනය කිරීමට අපි මෙහි සිටිමු. අප හා සම්බන්ධ වී Storemate OMS ඔබේ මෙහෙයුම් පරිවර්තනය කරන ආකාරය ගැන සාකච්ඡා කරමු."
            },
            emailCard: {
                title: "ඊමේල් කරන්න",
                description: "අපට ඊමේල් එකක් එවන්න",
                email: "sales@storemate.lk",
                replyTime: "ඔබට පිළිතුරක් ලැබෙනු ඇත",
                timeFrame: "පැය 24 ක් ඇතුළත",
                buttonText: "ඊමේල් එවන්න"
            },
            callCard: {
                title: "අපට ඇමතුමක් දෙන්න",
                description: "අපට දුරකථන ඇමතුමක් දෙන්න. අපගේ විශේෂඥයින් සුදානම්ව සිටිති",
                hours: "සඳුදා සිට සිකුරාදා දක්වා පෙරවරු 9 සිට සන්ධ්‍යා 5 දක්වා",
                status: "දැන් ලබා ගත හැකිය",
                phoneNumber: "011 422 6911"
            }
        }
    },
    ta: {
        contactUs: {
            pageTitle: "எங்களை தொடர்பு கொள்ளுங்கள் - Storemate OMS",
            hero: {
                badge: "எங்களுடன் தொடர்பு கொள்ளுங்கள்",
                title: "எங்களை தொடர்பு கொள்ளுங்கள்",
                description: "உங்கள் வணிகத்தை வளர்த்தெடுக்க நாங்கள் இங்கே இருக்கிறோம். எங்களைத் தொடர்பு கொண்டு Storemate OMS உங்கள் செயல்பாடுகளை எவ்வாறு மாற்றும் என்பதைப் பற்றி விவாதிப்போம்."
            },
            emailCard: {
                title: "எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்",
                description: "எளிமையாக எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்",
                email: "sales@storemate.lk",
                replyTime: "நீங்கள் பதில் பெறுவீர்கள்",
                timeFrame: "24 மணி நேரத்திற்குள்",
                buttonText: "மின்னஞ்சல் அனுப்பு"
            },
            callCard: {
                title: "எங்களை அழையுங்கள்",
                description: "எங்களுக்கு அழைப்பு கொடுங்கள். எங்கள் நிபுணர்கள் தயாராக நிற்கிறார்கள்",
                hours: "திங்கள் முதல் வெள்ளி வரை காலை 9 மணி முதல் மாலை 5 மணி வரை",
                status: "இப்போது கிடைக்கிறது",
                phoneNumber: "011 422 6911"
            }
        }
    }
};

export const useContactUsTranslation = () => {
    const { currentLanguage } = useContext(LanguageContext);

    const tContactUs = (key) => {
        const keys = key.split('.');
        let value = contactUsTranslations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = contactUsTranslations.en;
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

    return { tContactUs };
};
