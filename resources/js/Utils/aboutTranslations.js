import { useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const aboutTranslations = {
    en: {
        getFreeAccount: "Get Your Free Account",
        about: {
            pageTitle: "About Us - Storemate OMS",
            hero: {
                title: {
                    part1: "About",
                    part2: "Storemate"
                },
                description: "Developed and maintained by Parallax Technologies, we're revolutionizing order management systems with world-class software solutions.",
                buttons: {
                    getStarted: "Get Started",
                    contactUs: "Contact Us"
                }
            },
            story: {
                badge: "OUR STORY",
                title: "Storemate OMS",
                description1: "The Storemate OMS, developed and maintained by Parallax Technologies (Pvt) Ltd, is an extension to the list of services since its beginning in 2019.",
                description2: "The world-class services offered include software development solutions, custom software developments, product software developments and software outsourcing and offshoring.",
                teamStats: {
                    title: "50+ Employees",
                    description: "Who have joined us at various stages in our 2+ years of industrial experience."
                },
                imageAlts: {
                    team: "Parallax Technologies Team",
                    office: "Parallax Technologies Office"
                }
            },
            friendlyTeam: {
                badge: "OUR STORY",
                title: "A Great Story Starts with a Friendly Team",
                description: "Globally e-enable principle-centered e-business before dynamic quality vectors cross-media materials before proactive outsourcing leverage other's vertical technology leadership.",
                imageAlts: {
                    collaboration: "Team collaboration",
                    meeting: "Team meeting",
                    achievement: "Team achievement",
                    event: "Team event",
                    celebration: "Team celebration",
                    apicta: "APICTA Event"
                }
            },
            awards: {
                badge: "🏆 RECOGNITION",
                title: {
                    part1: "We Are",
                    part2: "Awarded By"
                },
                description: "Recognition for our commitment to excellence and innovation in software development",
                imageAlt: "Awards and Recognition",
                certified: "Certified"
            },
            services: {
                badge: "OUR SERVICES",
                subtitle: "What We Do",
                title: "World-Class Software Solutions",
                description: "From custom development to enterprise solutions, we deliver exceptional software services.",
                serviceList: [
                    {
                        title: "Software Development Solutions",
                        description: "Comprehensive software development services tailored to your business needs and requirements."
                    },
                    {
                        title: "Custom Software Development",
                        description: "Bespoke software solutions designed and built specifically for your unique business processes."
                    },
                    {
                        title: "Product Software Development",
                        description: "End-to-end product development from concept to deployment, including Storemate OMS."
                    },
                    {
                        title: "Software Outsourcing & Offshoring",
                        description: "Cost-effective software development services with global reach and local expertise."
                    }
                ]
            }
        }
    },
    si: {
        getFreeAccount: "නොමිලේ ලියාපදිංචි වන්න",
        about: {
            pageTitle: "අප ගැන - Storemate OMS",
            hero: {
                title: {
                    part1: "Storemate",
                    part2: "ගැන"
                },
                description: "Parallax Technologies විසින් සංවර්ධනය කර නඩත්තු කරනු ලබන අප, ලෝක මට්ටමේ මෘදුකාංග විසඳුම් සමඟ ඇණවුම් කළමනාකරණ පද්ධති විප්ලවීය ආකාරයෙන් වෙනස් කරමින් සිටිමු.",
                buttons: {
                    getStarted: "ආරම්භ කරන්න",
                    contactUs: "අප අමතන්න"
                }
            },
            story: {
                badge: "අපගේ කතාව",
                title: "Storemate OMS",
                description1: "Storemate OMS, Parallax Technologies (Pvt) Ltd විසින් Developed කරලා Maintained කරන Storemate OMS එක, 2019 පටන් අපේ Service List එකේ Extension එකක්. ",
                description2: "අපේ World-Class Services වලට Software Development Solutions, Custom Software Developments, Product Software Developments සහ Software Outsourcing ඇතුළත් වේ.",
                teamStats: {
                    title: "සේවකයින් 50+",
                    description: "අපගේ වසර 2+ තාක්ෂණික අත්දැකීම්වල විවිධ අවස්ථා වලදී අප හා එක් වූ අය."
                },
                imageAlts: {
                    team: "Parallax Technologies කණ්ඩායම",
                    office: "Parallax Technologies කාර්යාලය"
                }
            },
            friendlyTeam: {
                badge: "අපගේ කතාව",
                title: "සාර්ථක කතාවක් ආරම්භ වන්නේ සුහදශීලී කණ්ඩායමක් සමඟයි",
                description: "ගෝලීය වශයෙන් ඔබේ e-business දියුණු කරන්න. අලුත් තාක්ෂණය සහ බාහිර සහය (Outsourcing) හරහා ව්‍යාපාරික කටයුතු වඩාත් කාර්යක්ෂම කරගන්න.",
                imageAlts: {
                    collaboration: "කණ්ඩායම් සහයෝගීතාව",
                    meeting: "කණ්ඩායම් රැස්වීම",
                    achievement: "කණ්ඩායම් ජයග්‍රහණ",
                    event: "කණ්ඩායම් සිදුවීම",
                    celebration: "කණ්ඩායම් සැමරුම",
                    apicta: "APICTA සිදුවීම"
                }
            },
            awards: {
                badge: "🏆 පිළිගැනීම",
                title: {
                    part1: "අපට",
                    part2: "ලැබී ඇති සම්මාන"
                },
                description: "Software Development හි විශිෂ්ටත්වය සහ නවෝත්පාදනය සඳහා වූ අපගේ කැපවීම වෙනුවෙන් ලැබුණු ඇගයීම්.",
                imageAlt: "සම්මාන සහ පිළිගැනීම්",
                certified: "සහතික කර ඇත"
            },
            services: {
                badge: "අපගේ සේවාවන්",
                subtitle: "අප කරන්නේ කුමක්ද",
                title: "ලෝක මට්ටමේ මෘදුකාංග විසඳුම්",
                description: "Custom Development එකේ සිට Enterprise Solutions දක්වා, අපි විශිෂ්ට Software Services ලබා දෙනවා.",
                serviceList: [
                    {
                        title: "Software Development විසඳුම්",
                        description: "ඔබේ ව්‍යාපාර අවශ්‍යතා සහ ඉල්ලීම් සඳහා විශේෂයෙන් සකස් කළ  පුළුල්  Software Development Services."
                    },
                    {
                        title: "Custom Software සංවර්ධනය",
                        description: "ඔබේ ව්‍යාපාර ක්‍රියාවලීන් සඳහාම විශේෂයෙන්  නිර්මාණය කර නිම කරන ලද Software Solutions."
                    },
                    {
                        title: "Product Software සංවර්ධනය",
                        description: "Storemate OMS ඇතුළුව, Concept එකේ සිට Deployment දක්වා සම්පූර්ණ (End-to-End) Product Development සේවා."
                    },
                    {
                        title: "Software Outsourcing සහ Offshoring",
                        description: "ලීය සහ දේශීය Expertise සහිත, පිරිවැය-කාර්යක්ෂම (Cost-effective) Software Development Services."
                    }
                ]
            }
        }
    },
    ta: {
        getFreeAccount: "உங்கள் இலவச கணக்கை பெறுங்கள்",
        about: {
            pageTitle: "எங்களைப் பற்றி - Storemate OMS",
            hero: {
                title: {
                    part1: "Storemate",
                    part2: "பற்றி"
                },
                description: "Parallax Technologies ஆல் உருவாக்கப்பட்டு பராமரிக்கப்படும், உலகத்தரம் வாய்ந்த மென்பொருள் தீர்வுகளுடன் ஆர்டர் மேலாண்மை அமைப்புகளை புரட்சிகரமாக மாற்றி வருகிறோம்.",
                buttons: {
                    getStarted: "தொடங்குங்கள்",
                    contactUs: "எங்களைத் தொடர்பு கொள்ளுங்கள்"
                }
            },
            story: {
                badge: "எங்கள் கதை",
                title: "Storemate OMS",
                description1: "Parallax Technologies (Pvt) Ltd ஆல் உருவாக்கப்பட்டு பராமரிக்கப்படும் Storemate OMS, 2019 இல் அதன் தொடக்கத்தில் இருந்து சேவைகளின் பட்டியலுக்கு ஒரு நீட்டிப்பாகும்.",
                description2: "வழங்கப்படும் உலகத்தரம் வாய்ந்த சேவைகளில் மென்பொருள் மேம்பாட்டு தீர்வுகள், தனிப்பயன் மென்பொருள் மேம்பாடுகள், தயாரிப்பு மென்பொருள் மேம்பாடுகள் மற்றும் மென்பொருள் அவுட்சோர்சிங் மற்றும் ஆஃப்ஷோரிங் ஆகியவை அடங்கும்.",
                teamStats: {
                    title: "50+ பணியாளர்கள்",
                    description: "எங்கள் 2+ வருட தொழில்துறை அனுபவத்தின் பல்வேறு கட்டங்களில் எங்களுடன் சேர்ந்தவர்கள்."
                },
                imageAlts: {
                    team: "Parallax Technologies குழு",
                    office: "Parallax Technologies அலுவலகம்"
                }
            },
            friendlyTeam: {
                badge: "எங்கள் கதை",
                title: "ஒரு சிறந்த கதை நட்பு குழுவுடன் தொடங்குகிறது",
                description: "டைனமிக் தரமான வெக்டர்கள் கிராஸ்-மீடியா பொருட்களுக்கு முன் செயலூக்கமான அவுட்சோர்சிங் மற்றவர்களின் செங்குத்து தொழில்நுட்ப தலைமைத்துவத்தை பயன்படுத்துவதற்கு முன் உலகளாவிய மின்-செயல்படுத்தல் கொள்கை-மையமான மின்-வணிகம்.",
                imageAlts: {
                    collaboration: "குழு ஒத்துழைப்பு",
                    meeting: "குழு கூட்டம்",
                    achievement: "குழு சாதனை",
                    event: "குழு நிகழ்வு",
                    celebration: "குழு கொண்டாட்டம்",
                    apicta: "APICTA நிகழ்வு"
                }
            },
            awards: {
                badge: "🏆 அங்கீகாரம்",
                title: {
                    part1: "நாங்கள்",
                    part2: "விருது பெற்றுள்ளோம்"
                },
                description: "மென்பொருள் மேம்பாட்டில் சிறப்பு மற்றும் புதுமைக்கான எங்கள் அர்ப்பணிப்புக்கான அங்கீகாரம்",
                imageAlt: "விருதுகள் மற்றும் அங்கீகாரம்",
                certified: "சான்றளிக்கப்பட்டது"
            },
            services: {
                badge: "எங்கள் சேவைகள்",
                subtitle: "நாங்கள் என்ன செய்கிறோம்",
                title: "உலகத்தரம் வாய்ந்த மென்பொருள் தீர்வுகள்",
                description: "தனிப்பயன் மேம்பாட்டில் இருந்து நிறுவன தீர்வுகள் வரை, நாங்கள் சிறந்த மென்பொருள் சேவைகளை வழங்குகிறோம்.",
                serviceList: [
                    {
                        title: "மென்பொருள் மேம்பாட்டு தீர்வுகள்",
                        description: "உங்கள் வணிகத் தேவைகள் மற்றும் தேவைகளுக்கு ஏற்ப வடிவமைக்கப்பட்ட விரிவான மென்பொருள் மேம்பாட்டு சேவைகள்."
                    },
                    {
                        title: "தனிப்பயன் மென்பொருள் மேம்பாடு",
                        description: "உங்கள் தனித்துவமான வணிக செயல்முறைகளுக்காக குறிப்பாக வடிவமைக்கப்பட்ட மற்றும் கட்டமைக்கப்பட்ட பிரத்தியேக மென்பொருள் தீர்வுகள்."
                    },
                    {
                        title: "தயாரிப்பு மென்பொருள் மேம்பாடு",
                        description: "Storemate OMS உட்பட கருத்து முதல் வரிசைப்படுத்தல் வரை முடிவு முதல் முடிவு வரை தயாரிப்பு மேம்பாடு."
                    },
                    {
                        title: "மென்பொருள் அவுட்சோர்சிங் & ஆஃப்ஷோரிங்",
                        description: "உலகளாவிய வரம்பு மற்றும் உள்ளூர் நிபுணத்துவத்துடன் செலவு-திறனான மென்பொருள் மேம்பாட்டு சேவைகள்."
                    }
                ]
            }
        }
    }
};

export const useAboutTranslation = () => {
    const { currentLanguage } = useContext(LanguageContext);

    const tAbout = (key) => {
        const keys = key.split('.');
        let value = aboutTranslations[currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = aboutTranslations.en;
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

    return { tAbout };
};
