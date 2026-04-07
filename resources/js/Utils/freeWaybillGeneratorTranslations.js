import { useLanguage } from '@/Contexts/LanguageContext';

const freeWaybillGeneratorTranslations = {
    en: {
        pageTitle: 'Free Bulk Waybill Generator | StoreMate OMS',
        metaDescription: 'Free Bulk Waybill Generator for Sri Lankan sellers. Convert your Excel sheets into professional, courier-ready labels in seconds.',
        metaKeywords: 'free waybill generator, bulk waybill generator sri lanka, waybill, waybill number, waybill tracking code, tracking, parcel tracking, courier waybill, COD, cash on delivery, RTS, return to sender, waybill sheet, physical waybill document, excel to waybill',
        hero: {
            badge: 'FREE TOOL FOR E-COMMERCE SELLERS',
            title: 'Free Bulk Waybill Generator for Sri Lankan Sellers',
            description: 'Convert your Excel sheets into professional, courier-ready labels in seconds. No more handwriting, no more errors.',
            imageAlt: 'Free bulk waybill generator preview with waybill number, tracking code, and courier-ready label',
            ctaPrompt: 'Ready to professionalize your shipping?',
            ctaDescription: 'Click the button below to access our free generator. Upload your order list, customize your layout, and print in bulk.',
            ctaButton: 'Go to Free Waybill Generator'
        },
        why: {
            title: 'Why use the StoreMate Generator?',
            subtitle: 'Built for Sri Lankan social sellers who need fast, clean, and courier-ready dispatch.',
            cards: [
                {
                    title: '🚀 Speed Up Your Dispatch',
                    description: 'Upload your order list and generate up to 20 waybills at once as a guest. Stop wasting hours every night.'
                },
                {
                    title: '✨ Professional Branded Labels',
                    description: 'Add your Business Logo and contact details. Make your brand stand out from "amateur" social media sellers.'
                },
                {
                    title: '📦 Courier Ready',
                    description: 'Pre-optimized layouts for Koombiyo, Pronto, Domex, and Grasshoppers. Works perfectly with both Thermal and A4 printers.'
                }
            ]
        },
        upgrade: {
            badge: 'Upgrade Benefits',
            title: '🔓 Unlock Unlimited Power (Sign Up for Free!)',
            description: 'Is your business growing beyond 20 orders a day? Create a free StoreMate account to remove all guest limits.',
            guestTitle: 'Free Waybill Generator',
            loggedInTitle: 'Storemate OMS (Free)',
            tryNowButton: 'Try Now',
            registerButton: 'Register',
            table: {
                headers: {
                    feature: 'Feature',
                    guest: 'Guest User',
                    loggedIn: 'Logged-in User'
                },
                rows: [
                    {
                        feature: 'Excel Upload Limit',
                        guest: '20 Rows',
                        loggedIn: 'Unlimited Rows'
                    },
                    {
                        feature: 'Data History',
                        guest: 'Valid for 5 Hours',
                        loggedIn: 'Saved Forever'
                    },
                    {
                        feature: 'Logo & Branding',
                        guest: 'Basic',
                        loggedIn: 'Fully Customizable'
                    },
                    {
                        feature: 'Courier Sync',
                        guest: 'Manual',
                        loggedIn: '1-Click Auto Booking'
                    }
                ]
            }
        },
        how: {
            title: 'How It Works in 3 Simple Steps',
            steps: [
                {
                    label: 'Step 1',
                    title: 'Prepare Your Data',
                    description: 'Export your orders from Facebook, Instagram, or WhatsApp into an Excel/CSV sheet.'
                },
                {
                    label: 'Step 2',
                    title: 'Upload & Customize',
                    description: 'Click the link above to upload your file. Add your logo and choose your layout.'
                },
                {
                    label: 'Step 3',
                    title: 'Print & Ship',
                    description: 'Download your bulk PDF, print your labels, and you are ready for the courier pickup!'
                }
            ]
        },
        faq: {
            title: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Do I need to pay to use this tool?',
                    answer: 'No. The basic bulk generator is 100% free. We offer this to help Sri Lankan entrepreneurs grow their online businesses.'
                },
                {
                    question: 'Can I use this for thermal printers?',
                    answer: 'Yes! Once you log in, you can fully customize the layout to fit standard A4 paper or professional 4x6 thermal stickers.'
                },
                {
                    question: 'Which couriers are supported?',
                    answer: 'Our templates are designed to be accepted by all major Sri Lankan couriers, including Koombiyo, Pronto, and Domex.'
                }
            ]
        }
    },
    si: {
        pageTitle: 'නොමිලේ Bulk Waybill Generator | StoreMate OMS',
        metaDescription: 'ශ්‍රී ලංකාවේ විකුණුම්කරුවන් සඳහා නොමිලේ Bulk Waybill Generator එකක්. Excel sheet ඔබගේ වෘත්තීය courier-ready labels වලට තත්පර කිහිපයකින් පරිවර්තනය කරන්න.',
        metaKeywords: 'free waybill generator, bulk waybill sri lanka, waybill, waybill eka, waybill number, waybill tracking code, tracking, tracking eka, parcel, parcel eka, courier, courier eka, COD, cash on delivery, RT, return to sender, waybill sheet, physical waybill document, courier labels, excel to waybill',
        hero: {
            badge: 'E-COMMERCE SELLERS සඳහා නොමිලේ TOOL එකක්',
            title: 'ශ්‍රී ලංකාවේ විකුණුම්කරුවන් සඳහා Free Bulk Waybill Generator',
            description: 'ඔබේ Excel sheets තත්පර කිහිපයකින් professional, courier-ready labels වලට පරිවර්තනය කරන්න. අතින් ලිවීමක් නැහැ, වැරදි නැහැ.',
            imageAlt: 'Waybill අංකය, tracking code සහ courier-ready label සහිත free waybill generator preview',
            ctaPrompt: 'ඔබේ shipping ක්‍රියාවලිය වෘත්තීය මට්ටමට ගෙන යන්න සූදානම්ද?',
            ctaDescription: 'අපගේ free generator එකට පිවිසෙන්න පහත button එක click කරන්න. ඔබේ order list upload කර, layout එක customize කර, bulk ලෙස print කරන්න.',
            ctaButton: 'Free Waybill Generator වෙත යන්න'
        },
        why: {
            title: 'StoreMate Generator එක භාවිතා කළ යුත්තේ ඇයි?',
            subtitle: 'වේගවත්, පිරිසිදු, courier-ready dispatch අවශ්‍ය ශ්‍රී ලාංකීය social sellers සඳහාම නිර්මාණය කළ solution එකක්.',
            cards: [
                {
                    title: '🚀 Dispatch එක වේගවත් කරන්න',
                    description: 'Guest user කෙනෙකු ලෙස එකවර waybills 20ක් දක්වා generate කරන්න. සෑම රාත්‍රියකම නාස්තිවන පැය ගණන නවත්වන්න.'
                },
                {
                    title: '✨ Professional Branded Labels',
                    description: 'ඔබගේ business logo සහ contact details එක් කරන්න. "amateur" social media sellers අතරින් ඔබේ brand එක කැපී පෙනෙන්න සලස්වන්න.'
                },
                {
                    title: '📦 Courier Ready',
                    description: 'Koombiyo, Pronto, Domex සහ Grasshoppers සඳහා පෙර සකස් කළ layouts. Thermal සහ A4 printers දෙකටම හොඳින් ගැලපේ.'
                }
            ]
        },
        upgrade: {
            badge: 'Upgrade වාසි',
            title: '🔓 අසීමිත බලය Unlock කරන්න (නොමිලේ ලියාපදිංචි වන්න!)',
            description: 'ඔබේ business එක දිනකට orders 20 ඉක්මවා යනවාද? Guest limits ඉවත් කරගැනීමට free StoreMate account එකක් සාදන්න.',
            guestTitle: 'Free Waybill Generator',
            loggedInTitle: 'Storemate OMS (නොමිලේ)',
            tryNowButton: 'දැන් උත්සාහ කරන්න',
            registerButton: 'ලියාපදිංචි වන්න',
            table: {
                headers: {
                    feature: 'Feature',
                    guest: 'Guest User',
                    loggedIn: 'Logged-in User'
                },
                rows: [
                    {
                        feature: 'Excel Upload Limit',
                        guest: 'Rows 20',
                        loggedIn: 'අසීමිත Rows'
                    },
                    {
                        feature: 'Data History',
                        guest: 'පැය 5ක් වලංගුයි',
                        loggedIn: 'සදහටම සුරක්ෂිතයි'
                    },
                    {
                        feature: 'Logo & Branding',
                        guest: 'මූලික',
                        loggedIn: 'පූර්ණයෙන් Customize කළ හැක'
                    },
                    {
                        feature: 'Courier Sync',
                        guest: 'Manual',
                        loggedIn: '1-Click Auto Booking'
                    }
                ]
            }
        },
        how: {
            title: 'සරල පියවර 3කින් වැඩේ කරගන්න',
            steps: [
                {
                    label: 'පියවර 1',
                    title: 'Data එක සූදානම් කරන්න',
                    description: 'Facebook, Instagram හෝ WhatsApp orders Excel/CSV sheet එකකට export කරන්න.'
                },
                {
                    label: 'පියවර 2',
                    title: 'Upload & Customize',
                    description: 'ඉහත link එක click කර file එක upload කරන්න. ඔබේ logo එක එක් කර layout එක තෝරන්න.'
                },
                {
                    label: 'පියවර 3',
                    title: 'Print & Ship',
                    description: 'Bulk PDF එක download කර labels print කරන්න. Courier pickup එකට ඔබ සූදානම්!'
                }
            ]
        },
        faq: {
            title: 'නිතර අසන ප්‍රශ්න',
            items: [
                {
                    question: 'මේ tool එක භාවිතා කිරීමට ගෙවන්න ඕනෙද?',
                    answer: 'නැහැ. Basic bulk generator එක 100% නොමිලේ. ශ්‍රී ලංකාවේ online ව්‍යාපාරිකයින් වර්ධනය වීමට උදව් කිරීම සඳහා මෙය ලබා දී ඇත.'
                },
                {
                    question: 'Thermal printer සඳහා මෙය භාවිතා කළ හැකිද?',
                    answer: 'ඔව්! Login වූ පසු standard A4 paper හෝ professional 4x6 thermal stickers වලට ගැලපෙන පරිදි layout එක සම්පූර්ණයෙන් customize කළ හැක.'
                },
                {
                    question: 'මොනවද support කරන couriers services?',
                    answer: 'Koombiyo, Pronto, Domex ඇතුළු ප්‍රමුඛ ශ්‍රී ලාංකීය courier සේවා සියල්ලම පිළිගන්නා ආකාරයට templates සකසා ඇත.'
                }
            ]
        }
    },
    ta: {
        pageTitle: 'இலவச Bulk Waybill Generator | StoreMate OMS',
        metaDescription: 'இலங்கை விற்பனையாளர்களுக்கான இலவச Bulk Waybill Generator. உங்கள் Excel sheet-ஐ சில விநாடிகளில் தொழில்முறை courier-ready labels ஆக மாற்றுங்கள்.',
        metaKeywords: 'free waybill generator, bulk waybill sri lanka, waybill, waybill number, waybill tracking code, tracking, parcel tracking, courier waybill, COD, cash on delivery, RT, return to sender, waybill sheet, physical waybill document, courier labels, excel to waybill',
        hero: {
            badge: 'E-COMMERCE SELLERS க்கான இலவச TOOL',
            title: 'இலங்கை விற்பனையாளர்களுக்கான Free Bulk Waybill Generator',
            description: 'உங்கள் Excel sheets ஐ சில விநாடிகளில் professional, courier-ready labels ஆக மாற்றுங்கள். கையால் எழுதுவது வேண்டாம், பிழைகள் வேண்டாம்.',
            imageAlt: 'Waybill number, tracking code, மற்றும் courier-ready label உடன் free waybill generator preview',
            ctaPrompt: 'உங்கள் shipping செயல்முறையை professional ஆக்க தயாரா?',
            ctaDescription: 'எங்கள் free generator ஐ அணுக கீழே உள்ள button ஐ அழுத்துங்கள். உங்கள் order list ஐ upload செய்து, layout ஐ customize செய்து, bulk ஆக print செய்யுங்கள்.',
            ctaButton: 'Free Waybill Generator க்கு செல்லுங்கள்'
        },
        why: {
            title: 'StoreMate Generator ஐ ஏன் பயன்படுத்த வேண்டும்?',
            subtitle: 'வேகமான, சுத்தமான, courier-ready dispatch தேவைப்படும் இலங்கை social sellers க்காக உருவாக்கப்பட்டது.',
            cards: [
                {
                    title: '🚀 உங்கள் Dispatch ஐ வேகப்படுத்துங்கள்',
                    description: 'Guest user ஆக ஒரே நேரத்தில் 20 waybills வரை உருவாக்கலாம். ஒவ்வொரு இரவும் வீணாகும் மணிநேரங்களை நிறுத்துங்கள்.'
                },
                {
                    title: '✨ Professional Branded Labels',
                    description: 'உங்கள் business logo மற்றும் contact details ஐ சேர்க்கவும். "amateur" social media sellers இடையே உங்கள் brand ஐ தனித்துவமாக காட்டுங்கள்.'
                },
                {
                    title: '📦 Courier Ready',
                    description: 'Koombiyo, Pronto, Domex மற்றும் Grasshoppers க்கான முன் தயாரிக்கப்பட்ட layouts. Thermal மற்றும் A4 printers இரண்டிற்கும் சரியாக வேலை செய்கிறது.'
                }
            ]
        },
        upgrade: {
            badge: 'Upgrade நன்மைகள்',
            title: '🔓 Unlimited Power ஐ Unlock செய்யுங்கள் (இலவசமாக பதிவு செய்யுங்கள்!)',
            description: 'உங்கள் business தினமும் 20 orders ஐ தாண்டுகிறதா? Guest limits ஐ நீக்க free StoreMate account ஒன்றை உருவாக்குங்கள்.',
            guestTitle: 'இலவச Waybill Generator',
            loggedInTitle: 'Storemate OMS (இலவசம்)',
            tryNowButton: 'இப்போது முயற்சி செய்க',
            registerButton: 'பதிவு செய்யுங்கள்',
            table: {
                headers: {
                    feature: 'Feature',
                    guest: 'Guest User',
                    loggedIn: 'Logged-in User'
                },
                rows: [
                    {
                        feature: 'Excel Upload Limit',
                        guest: '20 Rows',
                        loggedIn: 'Unlimited Rows'
                    },
                    {
                        feature: 'Data History',
                        guest: '5 மணி நேரம் செல்லுபடியாகும்',
                        loggedIn: 'என்றென்றும் சேமிக்கப்படும்'
                    },
                    {
                        feature: 'Logo & Branding',
                        guest: 'Basic',
                        loggedIn: 'முழுமையாக Customize செய்யலாம்'
                    },
                    {
                        feature: 'Courier Sync',
                        guest: 'Manual',
                        loggedIn: '1-Click Auto Booking'
                    }
                ]
            }
        },
        how: {
            title: '3 எளிய படிகளில் எப்படி வேலை செய்கிறது',
            steps: [
                {
                    label: 'படி 1',
                    title: 'உங்கள் Data ஐ தயார் செய்யுங்கள்',
                    description: 'Facebook, Instagram அல்லது WhatsApp orders ஐ Excel/CSV sheet ஆக export செய்யுங்கள்.'
                },
                {
                    label: 'படி 2',
                    title: 'Upload & Customize',
                    description: 'மேலே உள்ள link ஐ அழுத்தி உங்கள் file ஐ upload செய்யுங்கள். உங்கள் logo ஐ சேர்த்து layout ஐ தேர்வுசெய்யுங்கள்.'
                },
                {
                    label: 'படி 3',
                    title: 'Print & Ship',
                    description: 'Bulk PDF ஐ download செய்து labels print செய்யுங்கள். Courier pickup க்கு நீங்கள் தயார்!'
                }
            ]
        },
        faq: {
            title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
            items: [
                {
                    question: 'இந்த tool ஐ பயன்படுத்த பணம் செலுத்த வேண்டுமா?',
                    answer: 'வேண்டாம். Basic bulk generator 100% இலவசம். இலங்கை தொழில்முனைவோர்கள் தங்கள் online business ஐ வளர்க்க உதவ இதை வழங்குகிறோம்.'
                },
                {
                    question: 'இதை thermal printers க்கு பயன்படுத்தலாமா?',
                    answer: 'ஆம்! Login செய்த பிறகு standard A4 paper அல்லது professional 4x6 thermal stickers க்கு layout ஐ முழுமையாக customize செய்யலாம்.'
                },
                {
                    question: 'எந்த couriers support செய்யப்படுகிறது?',
                    answer: 'Koombiyo, Pronto, Domex உள்ளிட்ட முக்கிய இலங்கை courier சேவைகள் அனைத்தும் ஏற்றுக்கொள்ளும் வகையில் templates வடிவமைக்கப்பட்டுள்ளன.'
                }
            ]
        }
    }
};

export const useFreeWaybillGeneratorTranslation = () => {
    const { currentLanguage } = useLanguage();

    const tFreeWaybill = (key) => {
        const keys = key.split('.');
        let value = freeWaybillGeneratorTranslations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                value = freeWaybillGeneratorTranslations.en;
                for (const fallbackKey of keys) {
                    if (value && typeof value === 'object' && fallbackKey in value) {
                        value = value[fallbackKey];
                    } else {
                        return key;
                    }
                }
                break;
            }
        }

        return value || key;
    };

    return { tFreeWaybill };
};
