import { useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const partnerProgramTranslations = {
    en: {
        partnerProgram: {
            pageTitle: "Partner Program - Storemate OMS",
            hero: {
                badge: "PARTNERSHIP OPPORTUNITIES",
                title: {
                    part1: "Storemate OMS",
                    part2: "Partner Program"
                },
                description: "Are you a Digital Marketing Agency, Business Consultant, or Technology Solutions Provider with a passion for driving success for Sri Lankan online businesses? Partner with Storemate OMS, the leading Order Management System designed exclusively for the local market, and empower your clients with unparalleled efficiency, automation, and profit protection.",
                buttons: {
                    joinProgram: "Join Partnership Program",
                    learnMore: "Learn More About Benefits"
                },
                partnerTypes: [
                    {
                        title: "Digital Marketing Agencies",
                        description: "Enhance your service offerings with powerful OMS integration"
                    },
                    {
                        title: "Business Consultants",
                        description: "Provide comprehensive business solutions with OMS expertise"
                    },
                    {
                        title: "Technology Solutions Providers",
                        description: "Integrate cutting-edge OMS technology into your solutions"
                    }
                ]
            },
            whoWereLookingFor: {
                badge: "IDEAL PARTNERS",
                title: {
                    part1: "Storemate OMS",
                    part2: "Who We're Looking For"
                },
                description: "We are actively seeking dynamic and forward-thinking partners who possess a strong network among Sri Lankan SMEs and E-commerce businesses, and who are committed to delivering cutting-edge solutions.",
                button: "Apply to Become a Partner",
                stats: [
                    { number: "500+", label: "SMEs Served" },
                    { number: "50+", label: "Active Partners" },
                    { number: "95%", label: "Success Rate" }
                ]
            },
            howStoremateEmpowers: {
                badge: "CLIENT BENEFITS",
                title: {
                    part1: "STOREMATE OMS",
                    part2: "How Storemate OMS Empowers Your",
                    part3: "Clients' Businesses"
                },
                subtitle: "When your clients use Storemate OMS, they gain powerful advantages that streamline their operations and boost their growth.",
                benefits: [
                    {
                        title: "Effortless Order Centralization",
                        description: "Your clients can easily manage all their online orders from platforms like Facebook and WhatsApp in one simple place. This saves time and keeps everything organized."
                    },
                    {
                        title: "Guaranteed Profit Protection",
                        description: "Storemate OMS automatically finds duplicate orders and helps block fake customers. This greatly reduces costly returns and fraud, directly protecting your clients' earnings. It ensures the conversion rate."
                    },
                    {
                        title: "Seamless Courier Automation",
                        description: "Your clients can say goodbye to manual data entry! Orders are automatically sent to courier systems without needing Excel sheets, leading to faster and error-free deliveries."
                    },
                    {
                        title: "Boosted Daily Efficiency",
                        description: "From printing waybills with one click to easily managing customer inquiries, Storemate OMS automates boring daily tasks. This allows your clients to focus more on growing their business and less on busywork."
                    },
                    {
                        title: "A Smart Solution Built for Sri Lanka",
                        description: "Storemate OMS isn't just a general tool. It's a smart Order Management System specifically designed to meet the unique needs and challenges faced by online sellers in Sri Lanka."
                    }
                ]
            },
            exclusiveBenefits: {
                title: {
                    part1: "Exclusive Benefits",
                    part2: "for Our Valued Partners"
                },
                subtitle: "Partnering with Storemate OMS brings great advantages for you.",
                stats: [
                    { number: "500+", label: "Success Stories" },
                    { number: "10+", label: "Years Experience" },
                    { number: "25+", label: "Industries Supported" }
                ],
                benefits: [
                    {
                        title: "Earn ongoing referral revenue",
                        description: "Get a percentage of the monthly fee for every client you bring, for as long as they stay with us. This means a steady and continuous income stream for your business.",
                        linkText: "See Pricing",
                        iconPath: "M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    },
                    {
                        title: "Become a Complete Solution Provider",
                        description: "By introducing Storemate OMS, you enable yourself to offer an \"all-in-one\" solution to your clients, helping them manage their entire online business journey, from capturing leads to successful deliveries. This makes you a more valuable partner to them.",
                        iconPath: "M15 17h5l-5 5v-5zM4.06 13.06L10.06 19l1.46-1.46L5.46 11.54zM12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    },
                    {
                        title: "Boost Your Strategic Consulting",
                        description: "Storemate OMS provides your client's insights and data about their sales and operations. This powerful data allows you to offer more accurate, data-driven marketing strategies and smarter business advice, making your consulting services even more effective and indispensable.",
                        iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    }
                ]
            },
            callToAction: {
                badge: "PARTNERSHIP OPPORTUNITY",
                title: "Ready to Partner for Success?",
                description: {
                    part1: "Join the Storemate OMS Partner Program today and let's collectively drive the future of Sri Lankan E-commerce.",
                    part2: "Contact us at 011 422 6911 or visit www.storemate.lk to begin a discussion on how we can build a powerful, mutually beneficial partnership."
                },
                buttons: {
                    call: "Call 011 422 6911",
                    visit: "Visit storemate.lk"
                },
                features: [
                    "Partnership Program",
                    "Mutual Benefits",
                    "Sri Lankan E-commerce"
                ]
            }
        }
    },
    si: {
        partnerProgram: {
            pageTitle: "හවුල්කාරිත්ව වැඩසටහන - Storemate OMS",
            hero: {
                badge: "හවුල්කාරිත්ව අවස්ථා",
                title: {
                    part1: "Storemate OMS",
                    part2: "හවුල්කාරිත්ව වැඩසටහන"
                },
                description: "ඔබ ශ්‍රී ලංකාවේ මාර්ගගත ව්‍යාපාර සඳහා සාර්ථකත්වය ලබා දීමේ ආශාවක් ඇති ඩිජිටල් අලෙවිකරණ ආයතනයක්, ව්‍යාපාර උපදේශකයෙක්, හෝ තාක්ෂණ විසඳුම් සැපයුම්කරුවෙක්ද? දේශීය වෙළඳපොළ සඳහා විශේෂයෙන් නිර්මාණය කරන ලද ප්‍රමුඛ ඇණවුම් කළමනාකරණ පද්ධතිය වන Storemate OMS සමඟ හවුල් වී, ඔබේ ගනුදෙනුකරුවන්ට අසමසම කාර්යක්ෂමතාව, ස්වයංක්‍රීයකරණය සහ ලාභ ආරක්ෂාව ලබා දෙන්න.",
                buttons: {
                    joinProgram: "හවුල්කාරිත්ව වැඩසටහනට සම්බන්ධ වන්න",
                    learnMore: "ප්‍රතිලාභ ගැන වැඩිදුර ඉගෙන ගන්න"
                },
                partnerTypes: [
                    {
                        title: "ඩිජිටල් අලෙවිකරණ ආයතන",
                        description: "බලගතු OMS ඒකාබද්ධීකරණයෙන් ඔබේ සේවා දීමනා වැඩිදියුණු කරන්න"
                    },
                    {
                        title: "ව්‍යාපාර උපදේශකයින්",
                        description: "OMS ප්‍රවීණතාවයෙන් සම්පූර්ණ ව්‍යාපාරික විසඳුම් සපයන්න"
                    },
                    {
                        title: "තාක්ෂණ විසඳුම් සැපයුම්කරුවන්",
                        description: "ඔබේ විසඳුම්වලට අත්‍යාවශ්‍ය OMS තාක්ෂණය ඒකාබද්ධ කරන්න"
                    }
                ]
            },
            whoWereLookingFor: {
                badge: "වැදගත් හවුල්කරුවන්",
                title: {
                    part1: "Storemate OMS",
                    part2: "අපි සොයන්නේ කවුරුන්ද"
                },
                description: "ශ්‍රී ලංකාවේ කුඩා සහ මධ්‍යම ව්‍යාපාර සහ ඊ-වාණිජ ව්‍යාපාර අතර ශක්තිමත් ජාලයක් ඇති සහ අත්‍යාවශ්‍ය විසඳුම් ලබා දීමට කැපවී සිටින ගතික සහ ඉදිරි දැක්මක් ඇති හවුල්කරුවන් අපි ක්‍රියාකාරීව සොයමු.",
                button: "හවුල්කරුවෙකු වීමට අයදුම් කරන්න",
                stats: [
                    { number: "500+", label: "සේවා කළ SMEs" },
                    { number: "50+", label: "ක්‍රියාකාරී හවුල්කරුවන්" },
                    { number: "95%", label: "සාර්ථකත්ව අනුපාතය" }
                ]
            },
            howStoremateEmpowers: {
                badge: "ගනුදෙනුකරු ප්‍රතිලාභ",
                title: {
                    part1: "STOREMATE OMS",
                    part2: "Storemate OMS ඔබේ",
                    part3: "ගනුදෙනුකරුවන්ගේ ව්‍යාපාර බලගන්වන්නේ කෙසේද"
                },
                subtitle: "ඔබේ ගනුදෙනුකරුවන් Storemate OMS භාවිතා කරන විට, ඔවුන්ගේ මෙහෙයුම් කාර්යක්ෂම කරන සහ ඔවුන්ගේ වර්ධනය ඉහළ නංවන බලගතු වාසි ලබා ගනී.",
                benefits: [
                    {
                        title: "අනර්ථ ඇණවුම් මධ්‍යගතකරණය",
                        description: "ඔබේ ගනුදෙනුකරුවන්ට Facebook සහ WhatsApp වැනි වේදිකාවලින් ඔවුන්ගේ සියලුම මාර්ගගත ඇණවුම් එක සරල ස්ථානයකින් පහසුවෙන් කළමනාකරණය කළ හැකිය. මෙය කාලය ඉතිරි කරන අතර සියල්ල සංවිධානය කරයි."
                    },
                    {
                        title: "සහතික ලාභ ආරක්ෂාව",
                        description: "Storemate OMS ස්වයංක්‍රීයව අනුපිටපත් ඇණවුම් සොයා ගෙන ව්‍යාජ ගනුදෙනුකරුවන් වැළැක්වීමට උපකාර කරයි. මෙය මිල අධික ආපසු යැවීම් සහ වංචා විශාල ලෙස අඩු කරයි, ඔබේ ගනුදෙනුකරුවන්ගේ ආදායම සෘජුවම ආරක්ෂා කරයි. එය පරිවර්තන අනුපාතය සහතික කරයි."
                    },
                    {
                        title: "විශ්වාසනීය කුරියර් ස්වයංක්‍රීයකරණය",
                        description: "ඔබේ ගනුදෙනුකරුවන්ට අතින් දත්ත ඇතුළත් කිරීමට සමුගත හැකිය! Excel පත්‍ර අවශ්‍ය නොවී ඇණවුම් ස්වයංක්‍රීයව කුරියර් පද්ධතිවලට යවනු ලබන අතර, වේගවත් සහ දෝෂ රහිත බෙදාහැරීම්වලට යොමු වේ."
                    },
                    {
                        title: "ඉහළ නැංවූ දෛනික කාර්යක්ෂමතාව",
                        description: "එක් ක්ලිකයකින් waybills මුද්‍රණය කිරීමේ සිට ගනුදෙනුකරු විමසීම් පහසුවෙන් කළමනාකරණය කිරීම දක්වා, Storemate OMS කම්මැලි දෛනික කාර්යයන් ස්වයංක්‍රීය කරයි. මෙය ඔබේ ගනුදෙනුකරුවන්ට ඔවුන්ගේ ව්‍යාපාරය වර්ධනය කිරීම සහ කාර්යයන්ට අඩු අවධානය යොමු කිරීමට ඉඩ සලසයි."
                    },
                    {
                        title: "ශ්‍රී ලංකාව සඳහා ගොඩනගන ලද බුද්ධිමත් විසඳුමක්",
                        description: "Storemate OMS පොදු මෙවලමක් පමණක් නොවේ. එය ශ්‍රී ලංකාවේ මාර්ගගත විකුණුම්කරුවන් මුහුණ දෙන අනන්‍ය අවශ්‍යතා සහ අභියෝගවලට ප්‍රතිචාර දැක්වීම සඳහා විශේෂයෙන් නිර්මාණය කරන ලද බුද්ධිමත් ඇණවුම් කළමනාකරණ පද්ධතියකි."
                    }
                ]
            },
            exclusiveBenefits: {
                title: {
                    part1: "අපගේ වටිනා හවුල්කරුවන්",
                    part2: "සඳහා විශේෂ ප්‍රතිලාභ"
                },
                subtitle: "Storemate OMS සමඟ හවුල් වීම ඔබට විශාල වාසි ගෙන එයි.",
                stats: [
                    { number: "500+", label: "සාර්ථක කතන්දර" },
                    { number: "10+", label: "වසර පළපුරුද්ද" },
                    { number: "25+", label: "සහාය දක්වන කර්මාන්ත" }
                ],
                benefits: [
                    {
                        title: "අඛණ්ඩ රෙෆරල් ආදායම ලබා ගන්න",
                        description: "ඔබ ගෙන එන සෑම ගනුදෙනුකරුවෙකු සඳහාම, ඔවුන් අප සමඟ සිටින තාක් කල් මාසික ගාස්තුවෙන් ප්‍රතිශතයක් ලබා ගන්න. මෙයින් අදහස් කරන්නේ ඔබේ ව්‍යාපාරය සඳහා ස්ථාවර සහ අඛණ්ඩ ආදායම් ප්‍රවාහයකි.",
                        linkText: "මිල ගණන් බලන්න",
                        iconPath: "M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    },
                    {
                        title: "සම්පූර්ණ විසඳුම් සැපයුම්කරුවෙකු වන්න",
                        description: "Storemate OMS හඳුන්වා දීමෙන්, ඔබේ ගනුදෙනුකරුවන්ට \"සියල්ල-එකම\" විසඳුමක් ලබා දීමට ඔබ සමත් වන අතර, ප්‍රධාන ග්‍රහණයේ සිට සාර්ථක බෙදාහැරීම් දක්වා ඔවුන්ගේ සම්පූර්ණ මාර්ගගත ව්‍යාපාරික ගමන කළමනාකරණය කිරීමට උපකාර කරයි. මෙය ඔබව ඔවුන්ට වඩාත් වටිනා හවුල්කරුවෙකු බවට පත් කරයි.",
                        iconPath: "M15 17h5l-5 5v-5zM4.06 13.06L10.06 19l1.46-1.46L5.46 11.54zM12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    },
                    {
                        title: "ඔබේ උපායමාර්ගික උපදේශන ඉහළ නංවන්න",
                        description: "Storemate OMS ඔබේ ගනුදෙනුකරුගේ අවබෝධය සහ ඔවුන්ගේ විකුණුම් සහ මෙහෙයුම් පිළිබඳ දත්ත සපයයි. මෙම බලගතු දත්ත ඔබට වඩාත් නිවැරදි, දත්ත මත පදනම් වූ අලෙවිකරණ උපායමාර්ග සහ බුද්ධිමත් ව්‍යාපාරික උපදේශ ලබා දීමට ඉඩ සලසයි, ඔබේ උපදේශන සේවා වඩාත් ඵලදායී සහ අත්‍යවශ්‍ය කරයි.",
                        iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    }
                ]
            },
            callToAction: {
                badge: "හවුල්කාරිත්ව අවස්ථාව",
                title: "සාර්ථකත්වය සඳහා හවුල් වීමට සූදානම්ද?",
                description: {
                    part1: "අද Storemate OMS හවුල්කාරිත්ව වැඩසටහනට සම්බන්ධ වී ශ්‍රී ලංකාවේ ඊ-වාණිජ්‍යයේ අනාගතය සාමූහිකව මෙහෙයවමු.",
                    part2: "011 422 6911 හරහා අප හා සම්බන්ධ වන්න හෝ www.storemate.lk වෙත පිවිසෙන්න අපට බලගතු, අන්‍යෝන්‍ය ප්‍රතිලාභදායක හවුල්කාරිත්වයක් ගොඩනගා ගන්නේ කෙසේද යන්න පිළිබඳ සාකච්ඡාවක් ආරම්භ කිරීමට."
                },
                buttons: {
                    call: "011 422 6911 අමතන්න",
                    visit: "storemate.lk වෙත පිවිසෙන්න"
                },
                features: [
                    "හවුල්කාරිත්ව වැඩසටහන",
                    "අන්‍යෝන්‍ය ප්‍රතිලාභ",
                    "ශ්‍රී ලංකාවේ ඊ-වාණිජ්‍යය"
                ]
            }
        }
    },
    ta: {
        partnerProgram: {
            pageTitle: "கூட்டாண்மை திட்டம் - Storemate OMS",
            hero: {
                badge: "கூட்டாண்மை வாய்ப்புகள்",
                title: {
                    part1: "Storemate OMS",
                    part2: "கூட்டாண்மை திட்டம்"
                },
                description: "நீங்கள் இலங்கையின் ஆன்லைன் வணிகங்களுக்கு வெற்றியை உந்துவதில் ஆர்வமுள்ள டிஜிட்டல் மார்க்கெட்டிங் ஏஜென்சியா, வணிக ஆலோசகரா, அல்லது தொழில்நுட்ப தீர்வு வழங்குநரா? உள்ளூர் சந்தைக்காக பிரத்யேகமாக வடிவமைக்கப்பட்ட முன்னணி ஆர்டர் மேலாண்மை அமைப்பான Storemate OMS உடன் கூட்டாண்மை செய்து, உங்கள் வாடிக்கையாளர்களுக்கு இணையற்ற செயல்திறன், தன்னியக்கம் மற்றும் லாப பாதுகாப்பை வழங்குங்கள்.",
                buttons: {
                    joinProgram: "கூட்டாண்மை திட்டத்தில் சேரவும்",
                    learnMore: "நன்மைகளைப் பற்றி மேலும் அறிக"
                },
                partnerTypes: [
                    {
                        title: "டிஜிட்டல் மார்க்கெட்டிங் ஏஜென்சிகள்",
                        description: "சக்திவாய்ந்த OMS ஒருங்கிணைப்புடன் உங்கள் சேவை வழங்கல்களை மேம்படுத்துங்கள்"
                    },
                    {
                        title: "வணிக ஆலோசகர்கள்",
                        description: "OMS நிபுணத்துவத்துடன் விரிவான வணிக தீர்வுகளை வழங்குங்கள்"
                    },
                    {
                        title: "தொழில்நுட்ப தீர்வு வழங்குநர்கள்",
                        description: "உங்கள் தீர்வுகளில் அதிநவீன OMS தொழில்நுட்பத்தை ஒருங்கிணைக்கவும்"
                    }
                ]
            },
            whoWereLookingFor: {
                badge: "இலட்சிய கூட்டாளர்கள்",
                title: {
                    part1: "Storemate OMS",
                    part2: "நாங்கள் தேடுபவர்கள் யார்"
                },
                description: "இலங்கையின் SME மற்றும் மின்-வணிக வணிகங்களிடையே வலுவான நெட்வொர்க்கைக் கொண்ட மற்றும் அதிநவீன தீர்வுகளை வழங்குவதில் அர்ப்பணிப்புள்ள ஆற்றல்மிக்க மற்றும் முன்னோக்கு சிந்தனையுள்ள கூட்டாளர்களை நாங்கள் தீவிரமாகத் தேடுகிறோம்.",
                button: "கூட்டாளராக விண்ணப்பிக்கவும்",
                stats: [
                    { number: "500+", label: "சேவை செய்த SMEகள்" },
                    { number: "50+", label: "செயலில் உள்ள கூட்டாளர்கள்" },
                    { number: "95%", label: "வெற்றி விகிதம்" }
                ]
            },
            howStoremateEmpowers: {
                badge: "வாடிக்கையாளர் நன்மைகள்",
                title: {
                    part1: "STOREMATE OMS",
                    part2: "Storemate OMS உங்கள்",
                    part3: "வாடிக்கையாளர்களின் வணிகங்களை எவ்வாறு வலுப்படுத்துகிறது"
                },
                subtitle: "உங்கள் வாடிக்கையாளர்கள் Storemate OMS ஐப் பயன்படுத்தும்போது, அவர்களின் செயல்பாடுகளை சுலபமாக்கி அவர்களின் வளர்ச்சியை அதிகரிக்கும் சக்திவாய்ந்த நன்மைகளைப் பெறுகிறார்கள்.",
                benefits: [
                    {
                        title: "எளிதான ஆர்டர் மையமாக்கல்",
                        description: "உங்கள் வாடிக்கையாளர்கள் Facebook மற்றும் WhatsApp போன்ற தளங்களிலிருந்து தங்கள் அனைத்து ஆன்லைன் ஆர்டர்களையும் ஒரு எளிய இடத்தில் எளிதாக நிர்வகிக்க முடியும். இது நேரத்தை மிச்சப்படுத்துகிறது மற்றும் எல்லாவற்றையும் ஒழுங்கமாக வைத்திருக்கிறது."
                    },
                    {
                        title: "உத்தரவாதமான லாப பாதுகாப்பு",
                        description: "Storemate OMS தானாகவே நகல் ஆர்டர்களைக் கண்டறிந்து போலி வாடிக்கையாளர்களைத் தடுக்க உதவுகிறது. இது விலையுயர்ந்த வருமானங்கள் மற்றும் மோசடிகளை பெரிதும் குறைக்கிறது, உங்கள் வாடிக்கையாளர்களின் வருவாயை நேரடியாகப் பாதுகாக்கிறது. இது மாற்று விகிதத்தை உறுதி செய்கிறது."
                    },
                    {
                        title: "தடையற்ற கூரியர் தன்னியக்கம்",
                        description: "உங்கள் வாடிக்கையாளர்கள் கைமுறை தரவு உள்ளீட்டிற்கு விடைபெறலாம்! Excel தாள்கள் தேவையில்லாமல் ஆர்டர்கள் தானாகவே கூரியர் அமைப்புகளுக்கு அனுப்பப்படுகின்றன, இது வேகமான மற்றும் பிழையற்ற விநியோகங்களுக்கு வழிவகுக்கிறது."
                    },
                    {
                        title: "அதிகரித்த தினசரி செயல்திறன்",
                        description: "ஒரே கிளிக்கில் waybills அச்சிடுவதிலிருந்து வாடிக்கையாளர் விசாரணைகளை எளிதாக நிர்வகிப்பது வரை, Storemate OMS சலிப்பான தினசரி பணிகளை தானியக்கமாக்குகிறது. இது உங்கள் வாடிக்கையாளர்கள் தங்கள் வணிகத்தை வளர்ப்பதில் அதிக கவனம் செலுத்தவும், வேலைகளில் குறைவாக கவனம் செலுத்தவும் அனுமதிக்கிறது."
                    },
                    {
                        title: "இலங்கைக்காக கட்டமைக்கப்பட்ட புத்திசாலித்தனமான தீர்வு",
                        description: "Storemate OMS வெறும் பொதுவான கருவி அல்ல. இது இலங்கையின் ஆன்லайன் விற்பனையாளர்கள் எதிர்கொள்ளும் தனித்துவமான தேவைகள் மற்றும் சவால்களைப் பூர்த்தி செய்ய குறிப்பாக வடிவமைக்கப்பட்ட புத்திசாலித்தனமான ஆர்டர் மேலாண்மை அமைப்பு."
                    }
                ]
            },
            exclusiveBenefits: {
                title: {
                    part1: "எங்கள் மதிப்புமிக்க கூட்டாளர்களுக்கான",
                    part2: "பிரத்யேக நன்மைகள்"
                },
                subtitle: "Storemate OMS உடன் கூட்டாண்மை உங்களுக்கு சிறந்த நன்மைகளைக் கொண்டுவருகிறது.",
                stats: [
                    { number: "500+", label: "வெற்றிக் கதைகள்" },
                    { number: "10+", label: "ஆண்டுகள் அனுபவம்" },
                    { number: "25+", label: "ஆதரவளிக்கும் தொழில்கள்" }
                ],
                benefits: [
                    {
                        title: "தொடர்ச்சியான பரிந்துரை வருவாயைப் பெறுங்கள்",
                        description: "நீங்கள் கொண்டுவரும் ஒவ்வொரு வாடிக்கையாளருக்கும், அவர்கள் எங்களுடன் இருக்கும் வரை மாதாந்திர கட்டணத்தின் சதவீதத்தைப் பெறுங்கள். இது உங்கள் வணிகத்திற்கு நிலையான மற்றும் தொடர்ச்சியான வருமான ஓட்டத்தைக் குறிக்கிறது.",
                        linkText: "விலைகளைப் பார்க்கவும்",
                        iconPath: "M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    },
                    {
                        title: "முழுமையான தீர்வு வழங்குநராக மாறுங்கள்",
                        description: "Storemate OMS ஐ அறிமுகப்படுத்துவதன் மூலம், உங்கள் வாடிக்கையாளர்களுக்கு \"அனைத்தும்-ஒன்றில்\" தீர்வை வழங்க நீங்கள் உங்களை செயல்படுத்திக் கொள்ளுங்கள், லீட்களைப் பிடிப்பதிலிருந்து வெற்றிகரமான விநியோகங்கள் வரை அவர்களின் முழு ஆன்லைன் வணிகப் பயணத்தை நிர்வகிக்க உதவுகிறது. இது உங்களை அவர்களுக்கு மிகவும் மதிப்புமிக்க கூட்டாளியாக ஆக்குகிறது.",
                        iconPath: "M15 17h5l-5 5v-5zM4.06 13.06L10.06 19l1.46-1.46L5.46 11.54zM12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    },
                    {
                        title: "உங்கள் மூலோபாய ஆலோசனையை மேம்படுத்துங்கள்",
                        description: "Storemate OMS உங்கள் வாடிக்கையாளரின் நுண்ணறிவுகள் மற்றும் அவர்களின் விற்பனை மற்றும் செயல்பாடுகள் பற்றிய தரவை வழங்குகிறது. இந்த சக்திவாய்ந்த தரவு உங்களுக்கு மிகவும் துல்லியமான, தரவு-உந்துதல் மார்க்கெட்டிங் உத்திகள் மற்றும் புத்திசாலித்தனமான வணிக ஆலோசனைகளை வழங்க அனுமதிக்கிறது, உங்கள் ஆலோசனை சேவைகளை இன்னும் பயனுள்ளதாகவும் இன்றியமையாததாகவும் ஆக்குகிறது.",
                        iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    }
                ]
            },
            callToAction: {
                badge: "கூட்டாண்மை வாய்ப்பு",
                title: "வெற்றிக்காக கூட்டாண்மை செய்ய தயாரா?",
                description: {
                    part1: "இன்றே Storemate OMS கூட்டாண்மை திட்டத்தில் சேர்ந்து இலங்கையின் மின்-வணிகத்தின் எதிர்காலத்தை கூட்டாக இயக்குவோம்.",
                    part2: "011 422 6911 இல் எங்களைத் தொடர்பு கொள்ளுங்கள் அல்லது www.storemate.lk ஐப் பார்வையிடுங்கள் நாம் எவ்வாறு சக்திவாய்ந்த, பரஸ்பர நன்மையான கூட்டாண்மையை உருவாக்க முடியும் என்பது குறித்த விவாதத்தைத் தொடங்க."
                },
                buttons: {
                    call: "011 422 6911 அழைக்கவும்",
                    visit: "storemate.lk ஐப் பார்வையிடவும்"
                },
                features: [
                    "கூட்டாண்மை திட்டம்",
                    "பரஸ்பர நன்மைகள்",
                    "இலங்கையின் மின்-வணிகம்"
                ]
            }
        }
    }
};

export const usePartnerProgramTranslation = () => {
    const { currentLanguage } = useContext(LanguageContext);

    const tPartnerProgram = (key) => {
        const keys = key.split('.');
        let value = partnerProgramTranslations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = partnerProgramTranslations.en;
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

    return { tPartnerProgram };
};
