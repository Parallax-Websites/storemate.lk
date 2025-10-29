import { useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const pricingTranslations = {
    en: {
        pricing: {
            badge: "FLEXIBLE PRICING OPTIONS",
            title: {
                part1: "Choose Your",
                part2: "Plan"
            },
            subtitle: "Select the perfect plan for your business needs and start managing your orders efficiently",
            plans: {
                free: {
                    name: "Free",
                    subtitle: "Free Subscription",
                    price: "0",
                    period: "/month",
                    inquiries: "500 inquiries/month",
                    locations: "2 Business Locations",
                    deliveryCompanies: "1 Delivery Company",
                    buttonText: "Try for Free"
                },
                starter: {
                    name: "Starter",
                    subtitle: "Starter Subscription",
                    price: "5,000",
                    period: "/month",
                    inquiries: "500 inquiries/month",
                    locations: "2 Business Locations",
                    deliveryCompanies: "1 Delivery Company",
                    buttonText: "Get Started",
                    popular: "Most Popular"
                },
                business: {
                    name: "Business",
                    subtitle: "Business Subscription",
                    price: "12,000",
                    period: "/month",
                    inquiries: "5,000 inquiries/month",
                    locations: "5 Business Locations",
                    deliveryCompanies: "2 Delivery Companies",
                    buttonText: "Get Started"
                },
                premium: {
                    name: "Premium",
                    subtitle: "Premium Subscription",
                    price: "25,000",
                    period: "/month",
                    inquiries: "50,000 inquiries/month",
                    locations: "5 Business Locations",
                    deliveryCompanies: "10 Delivery Companies",
                    buttonText: "Get Started"
                }
            },
            features: {
                inquiryManagement: "Inquiry Management",
                codSync: "COD Sync",
                whatsappForm: "WhatsApp Form",
                dedicatedServer: "Dedicated Server",
                customizations: "Customizations"
            },
            bottomCta: {
                title: {
                    part1: "Need Something",
                    part2: "More?"
                },
                description: "Need a custom solution? We offer enterprise packages tailored to your specific requirements.",
                button: "Contact Sales"
            }
        },
        technicalFaq: {
            badge: "TECHNICAL SUPPORT",
            title: {
                part1: "Technical Questions",
                part2: "& Answers"
            },
            subtitle: "Get detailed answers about Storemate OMS features and technical aspects",
            faqs: [
                {
                    question: "What is an enquiry?",
                    answer: "An enquiry is a potential customer inquiry or lead that comes through your social media channels (Facebook, WhatsApp, Instagram) or phone calls.<br><br>In Storemate OMS, enquiries are the first step in your sales process — they help you track and follow up with potential customers before they become actual orders."
                },
                {
                    question: "What does COD Sync mean?",
                    answer: "COD (Cash on Delivery) Sync means that when you add orders into Storemate OMS, the system will automatically sync and update those orders details with your delivery partner’s system — without any manual work required.<br><br>No more exporting, uploading, or typing order details again. Everything is synced in real time for faster and more accurate processing."
                },
                {
                    question: "What is a business location?",
                    answer: "A business location is a physical address or warehouse where you store and dispatch your products.<br><br>You can set up multiple business locations in Storemate OMS if you have warehouses in different cities or areas, helping you manage inventory and shipping more efficiently."
                },
                {
                    question: "Can I choose which delivery company I need to sync with?",
                    answer: "Yes, absolutely.<br><br>Storemate OMS currently integrates with Royal Express and Trans Express Service Lanka. You can choose which courier service to use for each order.<br><br>We can also integrate additional courier services based on your business requirements."
                },
                {
                    question: "What is a WhatsApp form?",
                    answer: "A WhatsApp form is a structured message template that customers can fill out directly in WhatsApp to place orders.<br><br>It helps you collect customer details, product preferences, and delivery information in an organized way, making order processing faster and more accurate."
                },
                {
                    question: "Why I need a dedicated server?",
                    answer: "A dedicated server ensures better performance, security, and customization for your business.<br><br>Benefits include:<br>• Faster loading times for your team<br>• Enhanced data security<br>• Custom features specific to your business<br>• Better uptime and reliability<br>• Dedicated support"
                },
                {
                    question: "What are the customisations?",
                    answer: "Storemate OMS offers various customizations including:<br><br>• Custom order forms and fields<br>• Branded invoices and waybills<br>• Integration with your existing systems<br>• Custom reporting and analytics<br>• Workflow automation specific to your business<br>• Custom courier integrations"
                },
                {
                    question: "What if I have more than 05 business locations?",
                    answer: "No problem at all.<br><br>Storemate OMS can handle unlimited business locations. Each additional location can be set up with its own inventory management, staff access, and shipping preferences.<br><br>Contact our team to discuss enterprise pricing for multiple locations."
                }
            ],
            contactPrompt: "Need more technical assistance?",
            contactSupport: "Contact our technical support team"
        }
    },
    si: {
        pricing: {
            badge: "නම්‍යශීලී මිල ගණන් විකල්ප",
            title: {
                part1: "ඔබේ",
                part2: "සැලැස්ම තෝරන්න"
            },
            subtitle: "ඔබේ ව්‍යාපාරික අවශ්‍යතා සඳහා පරිපූර්ණ සැලැස්ම තෝරන්න සහ කාර්යක්ෂමව ඔබේ ඇණවුම් කළමනාකරණය කිරීම ආරම්භ කරන්න",
            plans: {
                free: {
                    name: "නොමිලේ",
                    subtitle: "නොමිලේ දායකත්වය",
                    price: "0",
                    period: "/මාසිකව",
                    inquiries: "මාසිකව විමසීම් 500",
                    locations: "ව්‍යාපාරික ස්ථාන 2",
                    deliveryCompanies: "බෙදාහැරීම් සමාගම 1",
                    buttonText: "නොමිලේ උත්සාහ කරන්න"
                },
                starter: {
                    name: "ආරම්භක",
                    subtitle: "ආරම්භක දායකත්වය",
                    price: "5,000",
                    period: "/මාසිකව",
                    inquiries: "මාසිකව විමසීම් 500",
                    locations: "ව්‍යාපාරික ස්ථාන 2",
                    deliveryCompanies: "බෙදාහැරීම් සමාගම 1",
                    buttonText: "ආරම්භ කරන්න",
                    popular: "වඩාත් ජනප්‍රිය"
                },
                business: {
                    name: "ව්‍යාපාරික",
                    subtitle: "ව්‍යාපාරික දායකත්වය",
                    price: "12,000",
                    period: "/මාසිකව",
                    inquiries: "මාසිකව විමසීම් 5,000",
                    locations: "ව්‍යාපාරික ස්ථාන 5",
                    deliveryCompanies: "බෙදාහැරීම් සමාගම් 2",
                    buttonText: "ආරම්භ කරන්න"
                },
                premium: {
                    name: "ප්‍රිමියම්",
                    subtitle: "ප්‍රිමියම් දායකත්වය",
                    price: "25,000",
                    period: "/මාසිකව",
                    inquiries: "මාසිකව විමසීම් 50,000",
                    locations: "ව්‍යාපාරික ස්ථාන 5",
                    deliveryCompanies: "බෙදාහැරීම් සමාගම් 10",
                    buttonText: "ආරම්භ කරන්න"
                }
            },
            features: {
                inquiryManagement: "විමසුම් කළමනාකරණය",
                codSync: "COD සමමුහුර්තකරණය",
                whatsappForm: "WhatsApp පෝරමය",
                dedicatedServer: "කැප වූ සේවාදායකය",
                customizations: "අභිරුචිකරණ"
            },
            bottomCta: {
                title: {
                    part1: "තව යමක්",
                    part2: "අවශ්‍යද?"
                },
                description: "අභිරුචි විසඳුමක් අවශ්‍යද? අපි ඔබේ විශේෂිත අවශ්‍යතා සඳහා සකස් කරන ලද ව්‍යවසායික පැකේජ පිරිනමන්නෙමු.",
                button: "විකුණුම් අමතන්න"
            }
        },
        technicalFaq: {
            badge: "තාක්ෂණික සහාය",
            title: {
                part1: "තාක්ෂණික ප්‍රශ්න",
                part2: "සහ පිළිතුරු"
            },
            subtitle: "Storemate OMS විශේෂාංග සහ තාක්ෂණික කරුණු පිළිබඳ විස්තරාත්මක පිළිතුරු ලබා ගන්න",
            faqs: [
                {
                    question: "විමසුමක් කියන්නේ මොකද්ද?",
                    answer: "විමසුමක් යනු ඔබේ සමාජ මාධ්‍ය නාලිකා (Facebook, WhatsApp, Instagram) හෝ දුරකථන ඇමතුම් හරහා පැමිණෙන විභව ගනුදෙනුකරුවෙකුගේ විමසීමක් හෝ මඟපෙන්වීමකි.<br><br>Storemate OMS හි, විමසීම් යනු ඔබේ විකුණුම් ක්‍රියාවලියේ පළමු පියවර — ඔවුන් සැබෑ ඇණවුම් බවට පත්වීමට පෙර විභව ගනුදෙනුකරුවන් සමඟ ලුහුබදින්න සහ පසු විපරම් කිරීමට ඔබට උපකාරී වේ."
                },
                {
                    question: "COD සමමුහුර්තකරණය කියන්නේ මොකද්ද?",
                    answer: "COD (Cash on Delivery) සමමුහුර්තකරණය යනු ඔබේ කුරියර් සේවාව සමඟ COD ගෙවීම් තත්ත්වයේ ස්වයංක්‍රිය සමමුහුර්තකරණයයි.<br><br>ඔබේ කුරියර් සහකරු (Royal Express වැනි) ගනුදෙනුකරුවන්ගෙන් ගෙවීම් එකතු කරන විට, ගෙවීම් තත්ත්වය ඔබේ Storemate OMS ඩෑෂ්බෝඩ්හි ස්වයංක්‍රීයව යාවත්කාලීන වේ — අතින් යාවත්කාලීන කිරීම් අවශ්‍ය නැත."
                },
                {
                    question: "ව්‍යාපාරික ස්ථානයක් කියන්නේ මොකද්ද?",
                    answer: "ව්‍යාපාරික ස්ථානයක් යනු ඔබ ඔබේ නිෂ්පාදන ගබඩා කර යවන භෞතික ලිපිනයක් හෝ ගබඩාවකි.<br><br>ඔබට විවිධ නගරවල හෝ ප්‍රදේශවල ගබඩා තිබේ නම්, Storemate OMS හි ඔබට බහු ව්‍යාපාරික ස්ථාන පිහිටුවිය හැකි අතර, එය ඔබට ඉන්වෙන්ටරි සහ නාවික කටයුතු වඩාත් කාර්යක්ෂමව කළමනාකරණය කිරීමට උපකාරී වේ."
                },
                {
                    question: "මට සමමුහුර්ත කිරීමට අවශ්‍ය බෙදාහැරීම් සමාගම තෝරා ගත හැකිද?",
                    answer: "ඔව්, නිසැකවම.<br><br>Storemate OMS දැනට Royal Express සහ Trans Express Service Lanka සමඟ ඒකාබද්ධ වේ. ඔබට සෑම ඇණවුමක් සඳහාම භාවිතා කිරීමට කුරියර් සේවාව තෝරා ගත හැකිය.<br><br>ඔබේ ව්‍යාපාරික අවශ්‍යතා මත පදනම්ව අපට අමතර කුරියර් සේවා ද ඒකාබද්ධ කළ හැකිය."
                },
                {
                    question: "WhatsApp පෝරමයක් කියන්නේ මොකද්ද?",
                    answer: "WhatsApp පෝරමයක් යනු ගනුදෙනුකරුවන්ට ඇණවුම් ලබා දීමට WhatsApp හි සෘජුව පුරවා ගත හැකි ව්‍යුහගත පණිවිඩ ආකෘතියකි.<br><br>එය ගනුදෙනුකරුවන්ගේ විස්තර, නිෂ්පාදන මනාපයන් සහ බෙදාහැරීම් තොරතුරු සංවිධානාත්මක ආකාරයකින් එකතු කිරීමට ඔබට උපකාරී වන අතර, ඇණවුම් සැකසීම වේගවත් සහ වඩාත් නිවැරදි කරයි."
                },
                {
                    question: "මට කැප වූ සේවාදායකයක් අවශ්‍ය ඇයි?",
                    answer: "කැප වූ සේවාදායකයක් ඔබේ ව්‍යාපාරය සඳහා වඩා හොඳ කාර්ය සාධනය, ආරක්ෂාව සහ අභිරුචිකරණය සහතික කරයි.<br><br>ප්‍රතිලාභ ඇතුළත්:<br>• ඔබේ කණ්ඩායම සඳහා වේගවත් පැටවීම් කාලය<br>• වැඩි දියුණු කළ දත්ත ආරක්ෂාව<br>• ඔබේ ව්‍යාපාරයට විශේෂිත අභිරුචි විශේෂාංග<br>• වඩා හොඳ අපටයිම් සහ විශ්වසනීයත්වය<br>• කැප වූ සහාය"
                },
                {
                    question: "අභිරුචිකරණ මොනවාද?",
                    answer: "Storemate OMS විවිධ අභිරුචිකරණ පිරිනමයි:<br><br>• අභිරුචි ඇණවුම් පෝරම සහ ක්ෂේත්‍ර<br>• සන්නාමගත ඉන්වොයිසි සහ වේබිල්<br>• ඔබේ පවත්නා පද්ධති සමඟ ඒකාබද්ධීකරණය<br>• අභිරුචි වාර්තාකරණය සහ විශ්ලේෂණ<br>• ඔබේ ව්‍යාපාරයට විශේෂිත කාර්යප්‍රවාහ ස්වයංක්‍රීයකරණය<br>• අභිරුචි කුරියර් ඒකාබද්ධීකරණ"
                },
                {
                    question: "මට ව්‍යාපාරික ස්ථාන 05කට වඩා තිබේ නම් කුමක් කළ යුතුද?",
                    answer: "කිසිම ගැටලුවක් නැත.<br><br>Storemate OMS සීමා රහිත ව්‍යාපාරික ස්ථාන හැසිරවිය හැකිය. සෑම අමතර ස්ථානයක්ම එහිම ඉන්වෙන්ටරි කළමනාකරණය, කාර්ය මණ්ඩල ප්‍රවේශය සහ නාවික මනාපයන් සමඟ පිහිටුවිය හැකිය.<br><br>බහු ස්ථාන සඳහා ව්‍යවසායික මිල ගණන් කරන්න ගැන සාකච්ඡා කිරීමට අපගේ කණ්ඩායම අමතන්න."
                }
            ],
            contactPrompt: "තවත් තාක්ෂණික සහාය අවශ්‍යද?",
            contactSupport: "අපගේ තාක්ෂණික සහාය කණ්ඩායම අමතන්න"
        }
    },
    ta: {
        pricing: {
            badge: "நெகிழ்வான விலை நிர்ধாரண விருப்பங்கள்",
            title: {
                part1: "உங்கள்",
                part2: "திட்டத்தைத் தேர்ந்தெடுங்கள்"
            },
            subtitle: "உங்கள் வணிகத் தேவைகளுக்கு சரியான திட்டத்தைத் தேர்ந்தெடுத்து, உங்கள் ஆர்டர்களை திறமையாக நிர்வகிக்கத் தொடங்குங்கள்",
            plans: {
                free: {
                    name: "இலவசம்",
                    subtitle: "இலவச சந்தா",
                    price: "0",
                    period: "/மாதம்",
                    inquiries: "மாதத்திற்கு 500 விசாரணைகள்",
                    locations: "2 வணிக இடங்கள்",
                    deliveryCompanies: "1 டெலிவரி நிறுவனம்",
                    buttonText: "இலவசமாக முயற்சிக்கவும்"
                },
                starter: {
                    name: "தொடக்கம்",
                    subtitle: "தொடக்க சந்தா",
                    price: "5,000",
                    period: "/மாதம்",
                    inquiries: "மாதத்திற்கு 500 விசாரணைகள்",
                    locations: "2 வணிக இடங்கள்",
                    deliveryCompanies: "1 டெலிவரி நிறுவனம்",
                    buttonText: "தொடங்குங்கள்",
                    popular: "மிகவும் பிரபலமான"
                },
                business: {
                    name: "வணிகம்",
                    subtitle: "வணிக சந்தா",
                    price: "12,000",
                    period: "/மாதம்",
                    inquiries: "மாதத்திற்கு 5,000 விசாரணைகள்",
                    locations: "5 வணிக இடங்கள்",
                    deliveryCompanies: "2 டெலிவரி நிறுவனங்கள்",
                    buttonText: "தொடங்குங்கள்"
                },
                premium: {
                    name: "பிரீமியம்",
                    subtitle: "பிரீமியம் சந்தா",
                    price: "25,000",
                    period: "/மாதம்",
                    inquiries: "மாதத்திற்கு 50,000 விசாரணைகள்",
                    locations: "5 வணிக இடங்கள்",
                    deliveryCompanies: "10 டெலிவரி நிறுவனங்கள்",
                    buttonText: "தொடங்குங்கள்"
                }
            },
            features: {
                inquiryManagement: "விசாரணை நிர்வாகம்",
                codSync: "COD ஒத்திசைவு",
                whatsappForm: "WhatsApp படிவம்",
                dedicatedServer: "அர்ப்பணிக்கப்பட்ட சர்வர்",
                customizations: "தனிப்பயனாக்கங்கள்"
            },
            bottomCta: {
                title: {
                    part1: "மேலும் ஏதாவது",
                    part2: "தேவையா?"
                },
                description: "தனிப்பயன் தீர்வு தேவையா? உங்கள் குறிப்பிட்ட தேவைகளுக்கு ஏற்ப வடிவமைக்கப்பட்ட நிறுவன பேக்கேஜ்களை நாங்கள் வழங்குகிறோம்.",
                button: "விற்பனையைத் தொடர்பு கொள்ளுங்கள்"
            }
        },
        technicalFaq: {
            badge: "தொழில்நுட்ப ஆதரவு",
            title: {
                part1: "தொழில்நுட்ப கேள்விகள்",
                part2: "மற்றும் பதில்கள்"
            },
            subtitle: "Storemate OMS அம்சங்கள் மற்றும் தொழில்நுட்ப அம்சங்கள் பற்றிய விரிவான பதில்களைப் பெறுங்கள்",
            faqs: [
                {
                    question: "விசாரணை என்றால் என்ன?",
                    answer: "விசாரணை என்பது உங்கள் சமூக ஊடக சேனல்கள் (Facebook, WhatsApp, Instagram) அல்லது தொலைபேசி அழைப்புகள் மூலம் வரும் சாத்தியமான வாடிக்கையாளர் விசாரணை அல்லது முன்னணியாகும்.<br><br>Storemate OMS இல், விசாரணைகள் உங்கள் விற்பனை செயல்முறையின் முதல் படியாகும் — அவை உண்மையான ஆர்டர்களாக மாறுவதற்கு முன்பு சாத்தியமான வாடிக்கையாளர்களை கண்காணிக்கவும் பின்தொடரவும் உதவுகின்றன."
                },
                {
                    question: "COD ஒத்திசைவு என்றால் என்ன?",
                    answer: "COD (Cash on Delivery) ஒத்திசைவு என்பது உங்கள் கொரியர் சேவையுடன் COD கட்டண நிலையின் தானியங்கி ஒத்திசைவாகும்.<br><br>உங்கள் கொரியர் பங்குதாரர் (Royal Express போன்றவர்கள்) வாடிக்கையாளர்களிடமிருந்து கட்டணத்தை வசூலிக்கும்போது, கட்டண நிலை உங்கள் Storemate OMS டாஷ்போர்டில் தானாகவே புதுப்பிக்கப்படும் — கையேடு புதுப்பிப்புகள் தேவையில்லை."
                },
                {
                    question: "வணிக இடம் என்றால் என்ன?",
                    answer: "வணிக இடம் என்பது நீங்கள் உங்கள் தயாரிப்புகளை சேமித்து அனுப்பும் உடல் முகவரி அல்லது கிடங்காகும்.<br><br>உங்களுக்கு வெவ்வேறு நகரங்களில் அல்லது பகுதிகளில் கிடங்குகள் இருந்தால், Storemate OMS இல் பல வணிக இடங்களை அமைக்கலாம், இது சரக்கு மற்றும் கப்பல் போக்குவரத்தை மிகவும் திறமையாக நிர்வகிக்க உதவுகிறது."
                },
                {
                    question: "எந்த டெலிவரி நிறுவனத்துடன் ஒத்திசைக்க வேண்டும் என்பதை என்னால் தேர்வு செய்ய முடியுமா?",
                    answer: "ஆம், நிச்சயமாக.<br><br>Storemate OMS தற்போது Royal Express மற்றும் Trans Express Service Lanka உடன் நேரடி ஒருங்கிணைப்புகளை ஆதரிக்கிறது. ஒவ்வொரு ஆர்டருக்கும் பயன்படுத்த வேண்டிய கொரியர் சேவையை நீங்கள் தேர்வு செய்யலாம்.<br><br>உங்கள் வணிகத் தேவைகளின் அடிப்படையில் கூடுதல் கொரியர் சேவைகளையும் ஒருங்கிணைக்க முடியும்."
                },
                {
                    question: "WhatsApp படிவம் என்றால் என்ன?",
                    answer: "WhatsApp படிவம் என்பது வாடிக்கையாளர்கள் ஆர்டர் செய்ய WhatsApp இல் நேரடியாக நிரப்பக்கூடிய கட்டமைக்கப்பட்ட செய்தி வார்ப்புருவாகும்.<br><br>இது வாடிக்கையாளர் விவரங்கள், தயாரிப்பு விருப்பங்கள் மற்றும் டெலிவரி தகவல்களை ஒழுங்கமைக்கப்பட்ட வழியில் சேகரிக்க உதவுகிறது, ஆர்டர் செயலாக்கத்தை வேகமாகவும் துல்லியமாகவும் செய்கிறது."
                },
                {
                    question: "எனக்கு ஏன் அர்ப்பணிக்கப்பட்ட சர்வர் தேவை?",
                    answer: "அர்ப்பணிக்கப்பட்ட சர்வர் உங்கள் வணிகத்திற்கு சிறந்த செயல்திறன், பாதுகாப்பு மற்றும் தனிப்பயனாக்கத்தை உறுதி செய்கிறது.<br><br>நன்மைகள்:<br>• உங்கள் குழுவிற்கு வேகமான ஏற்றுதல் நேரங்கள்<br>• மேம்படுத்தப்பட்ட தரவு பாதுகாப்பு<br>• உங்கள் வணிகத்திற்கு குறிப்பிட்ட தனிப்பயன் அம்சங்கள்<br>• சிறந்த செயல்நேரம் மற்றும் நம்பகத்தன்மை<br>• அர்ப்பணிக்கப்பட்ட ஆதரவு"
                },
                {
                    question: "தனிப்பயனாக்கங்கள் என்ன?",
                    answer: "Storemate OMS பல்வேறு தனிப்பயனாக்கங்களை வழங்குகிறது:<br><br>• தனிப்பயன் ஆர்டர் படிவங்கள் மற்றும் புலங்கள்<br>• பிராண்டட் இன்வாய்ஸ்கள் மற்றும் வேபில்கள்<br>• உங்கள் தற்போதைய அமைப்புகளுடன் ஒருங்கிணைப்பு<br>• தனிப்பயன் அறிக்கையிடல் மற்றும் பகுப்பாய்வு<br>• உங்கள் வணிகத்திற்கு குறிப்பிட்ட பணியோட்ட தானியங்கு<br>• தனிப்பயன் கொரியர் ஒருங்கிணைப்புகள்"
                },
                {
                    question: "எனக்கு 05 க்கும் மேற்பட்ட வணிக இடங்கள் இருந்தால் என்ன செய்வது?",
                    answer: "எந்த பிரச்சனையும் இல்லை.<br><br>Storemate OMS வரம்பற்ற வணிக இடங்களைக் கையாள முடியும். ஒவ்வொரு கூடுதல் இடமும் அதன் சொந்த சரக்கு நிர்வாகம், ஊழியர் அணுகல் மற்றும் கப்பல் போக்குவரத்து விருப்பங்களுடன் அமைக்கப்படலாம்.<br><br>பல இடங்களுக்கான நிறுவன விலைகள் பற்றி விவாதிக்க எங்கள் குழுவைத் தொடர்பு கொள்ளுங்கள்."
                }
            ],
            contactPrompt: "மேலும் தொழில்நுட்ப உதவி தேவையா?",
            contactSupport: "எங்கள் தொழில்நுட்ப ஆதரவு குழுவைத் தொடர்பு கொள்ளுங்கள்"
        }
    }
};

export const usePricingTranslation = () => {
    const { currentLanguage } = useContext(LanguageContext);

    const tPricing = (key) => {
        const keys = key.split('.');
        let value = pricingTranslations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = pricingTranslations.en;
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

    return { tPricing };
};
