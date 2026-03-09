import { useContext } from 'react';
import { LanguageContext } from '@/Contexts/LanguageContext';

const pricingTranslations = {
    en: {
        pricing: {
            badge: "FLEXIBLE PRICING OPTIONS",
            costPerOrderLabel: "PER ORDER",
            addonPriceLabel: "Addon price per order",
            businessesLabel: "Businesses (Brands)",
            deliveryAccountsLabel: "Delivery Accounts",
            supportFeaturesLabel: "SUPPORT & FEATURES",
            communitySupportLabel: "Community Support",
            emailSupportLabel: "Email Support",
            prioritySupportLabel: "Priority Support",
            successSupportLabel: "Success Support",
            dedicatedSupportLabel: "Dedicated Support",
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
                    inquiries: "100 Orders/month",
                    users: "1 Users",
                    products: "Unlimited Products",
                    deliveryAccounts: "1 Delivery Account",
                    businesses: "1",
                    buttonText: "Get Started",
                    trialPeriod: "Try for Free"
                },
                starter: {
                    name: "Starter",
                    subtitle: "Starter Subscription",
                    price: "5,000",
                    period: "/month",
                    inquiries: "500 Orders/month",
                    users: "2 Users",
                    products: "Unlimited Products",
                    deliveryAccounts: "1 Delivery Account",
                    costPerOrder: "10",
                    businesses: "1",
                    buttonText: "Get Your Free Account",
                    trialPeriod: "Free for 30 Days",
                    popular: "Most Popular"
                },
                business: {
                    name: "Business",
                    subtitle: "Business Subscription",
                    price: "12,000",
                    period: "/month",
                    inquiries: "2000 Orders/month",
                    users: "5 Users",
                    products: "Unlimited Products",
                    deliveryAccounts: "2 Delivery Accounts",
                    costPerOrder: "6",
                    businesses: "2",
                    buttonText: "Get Your Free Account",
                    trialPeriod: "Free for 30 Days"
                },
                premium: {
                    name: "Premium",
                    subtitle: "Premium Subscription",
                    price: "15,000",
                    period: "/month",
                    inquiries: "5000 Orders/month",
                    users: "10 Users",
                    products: "Unlimited Products",
                    deliveryAccounts: "3 Delivery Accounts",
                    costPerOrder: "3",
                    businesses: "3",
                    buttonText: "Get Your Free Account",
                    trialPeriod: "Free for 30 Days"
                },
                enterprise: {
                    name: "Enterprise",
                    subtitle: "Enterprise Solution",
                    price: "24,000",
                    period: "/month",
                    inquiries: "25000 Orders/month",
                    users: "25 Users",
                    products: "Unlimited Products",
                    deliveryAccounts: "Unlimited Delivery Accounts",
                    costPerOrder: "0.96",
                    businesses: "Unlimited",
                    buttonText: "Contact Sales",
                    trialPeriod: "For Enterprise Solution"
                }
            },
            features: {
                knowledgeBaseAccess: "Knowledge base access",
                communityForum: "Community forum",
                videoTutorials: "Video tutorials",
                emailSupport: "Email support",
                emailSupport48h: "Email support (48h)",
                setupGuideCall: "Setup guide call",
                extendedKnowledgeBase: "Extended knowledge base",
                prioritySupport: "Priority support",
                priorityEmailChat12h: "Priority email & chat (12h)",
                phoneCallbackSupport: "Phone callback support",
                dedicatedOnboarding: "Dedicated onboarding",
                customerSuccessManager: "Customer Success Manager",
                prioritySupport4h: "Priority support (4h)",
                whatsappSupport: "WhatsApp support",
                integrationSetupAssistance: "Integration setup assistance",
                dedicatedAccountManager: "Dedicated Account Manager",
                criticalSupport247: "24/7 critical support (2h SLA)",
                implementationTeam: "Implementation team",
                customTrainingSessions: "Custom training sessions",
                directTechnicalEscalation: "Direct technical escalation",
                strategicPlanningCalls: "Strategic planning calls",
                customizations: "Customizations"
            },
            startFreeTrial: "Start Free Trial",
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
                    question: "What is an order?",
                    answer: "An order is a customer purchase request that comes through your social media channels (Facebook, WhatsApp, Instagram) or phone calls.<br><br>In Storemate OMS, orders are the first step in your sales process — they help you track and follow up with customers from placement to delivery."
                },
                {
                    question: "What does COD Sync mean?",
                    answer: "COD (Cash on Delivery) Sync means that when you add orders into Storemate OMS, the system will automatically sync and update those orders details with your delivery partner’s system — without any manual work required.<br><br>No more exporting, uploading, or typing order details again. Everything is synced in real time for faster and more accurate processing."
                },
                {
                    question: "What is a business account?",
                    answer: "A business location is a physical address or warehouse where you store and dispatch your products.<br><br>You can set up multiple business locations in Storemate OMS if you have warehouses in different cities or areas, helping you manage inventory and shipping more efficiently."
                },
                {
                    question: "Can I choose which delivery company I need to sync with?",
                    answer: "Yes, absolutely.<br><br>Storemate OMS currently integrates with many courier services. You can choose which courier service to use for each order.<br><br>We can also integrate additional courier services based on your business requirements."
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
            badge: "නම්‍යශීලී මිල ගණන්",
            costPerOrderLabel: "ඇණවුමකට",
            addonPriceLabel: "ඇණවුමකට අමතර මිල",
            businessesLabel: "ව්‍යාපාර (බ්‍රෑන්ඩ්)",
            deliveryAccountsLabel: "බෙදාහැරීම් ගිණුම්",
            supportFeaturesLabel: "සහාය සහ විශේෂාංග",
            communitySupportLabel: "ප්‍රජා සහාය",
            emailSupportLabel: "විද්‍යුත් තැපැල් සහාය",
            prioritySupportLabel: "ප්‍රමුඛතා සහාය",
            successSupportLabel: "සාර්ථකත්ව සහාය",
            dedicatedSupportLabel: "වෙන්වූ සහාය",
            title: {
                part1: "ඔබට ගැළපෙන",
                part2: "පැකේජ (Package) තෝරාගන්න"
            },
            subtitle: "ඔබේ Package එක තොරගන්න  - ඔබේ Business එකට හොදින් ගැලපෙන Package එක Select කරලා Orders පහසුවෙන් Manage කරන්න පටන් ගන්න.",
            plans: {
                free: {
                    name: "නොමිලේ",
                    subtitle: "නොමිලේ පැකේජය",
                    price: "0",
                    period: "/මාසිකව",
                    inquiries: "මාසික ඇණවුම් 100",
                    users: "පරිශීලකයින් 1",
                    products: "අසීමිත නිෂ්පාදන",
                    deliveryAccounts: "බෙදාහැරීම් ගිණුම් 1",
                    businesses: "1",
                    buttonText: "ආරම්භ කරන්න",
                    trialPeriod: "නොමිලේ උත්සාහ කරන්න"
                },
                starter: {
                    name: "ආරම්භක",
                    subtitle: "ආරම්භක පැකේජය",
                    price: "5,000",
                    period: "/මාසිකව",
                    inquiries: "මාසික ඇණවුම් 500",
                    users: "පරිශීලකයින් 2",
                    products: "අසීමිත නිෂ්පාදන",
                    deliveryAccounts: "බෙදාහැරීම් ගිණුම් 1",
                    costPerOrder: "10",
                    businesses: "1",
                    buttonText: "නොමිලේ ලියාපදිංචි වන්න",
                    trialPeriod: "දින 30 නොමිලේ අත්හදා බැලීම",
                    popular: "වඩාත් ජනප්‍රිය"
                },
                business: {
                    name: "ව්‍යාපාරික",
                    subtitle: "ව්‍යාපාරික පැකේජය",
                    price: "12,000",
                    period: "/මාසිකව",
                    inquiries: "මාසික ඇණවුම් 2000",
                    users: "පරිශීලකයින් 5",
                    products: "අසීමිත නිෂ්පාදන",
                    deliveryAccounts: "බෙදාහැරීම් ගිණුම් 2",
                    costPerOrder: "6",
                    businesses: "2",
                    buttonText: "නොමිලේ ලියාපදිංචි වන්න",
                    trialPeriod: "දින 30 නොමිලේ අත්හදා බැලීම"
                },
                premium: {
                    name: "ප්‍රිමියම්",
                    subtitle: "ප්‍රිමියම් පැකේජය",
                    price: "15,000",
                    period: "/මාසිකව",
                    inquiries: "මාසික ඇණවුම් 5000",
                    users: "පරිශීලකයින් 10",
                    products: "අසීමිත නිෂ්පාදන",
                    deliveryAccounts: "බෙදාහැරීම් ගිණුම් 3",
                    costPerOrder: "3",
                    businesses: "3",
                    buttonText: "නොමිලේ ලියාපදිංචි වන්න",
                    trialPeriod: "දින 30 නොමිලේ අත්හදා බැලීම"
                },
                enterprise: {
                    name: "ව්‍යවසායික",
                    subtitle: "ව්‍යවසායික විසඳුම",
                    price: "24,000",
                    period: "/මාසිකව",
                    inquiries: "මාසික ඇණවුම් 25000",
                    users: "පරිශීලකයින් 25",
                    products: "අසීමිත නිෂ්පාදන",
                    deliveryAccounts: "අසීමිත බෙදාහැරීම් ගිණුම්",
                    costPerOrder: "0.96",
                    businesses: "අසීමිත",
                    buttonText: "විකුණුම් අංශය අමතන්න",
                    trialPeriod: "ව්‍යවසායික විසඳුම සඳහා"
                }
            },
            features: {
                knowledgeBaseAccess: "දැනුම් පදනම ප්‍රවේශය",
                communityForum: "ප්‍රජා සංසදය",
                videoTutorials: "වීඩියෝ නිබන්ධන",
                emailSupport: "විද්‍යුත් තැපැල් සහාය",
                emailSupport48h: "විද්‍යුත් තැපැල් සහාය (පැය 48)",
                setupGuideCall: "පිහිටුවීම් මාර්ගෝපදේශ ඇමතුම",
                extendedKnowledgeBase: "විස්තීරණය කළ දැනුම් පදනම",
                prioritySupport: "ප්‍රමුඛතා සහාය",
                priorityEmailChat12h: "ප්‍රමුඛතා විද්‍යුත් තැපෑල සහ chat (පැය 12)",
                phoneCallbackSupport: "දුරකතන ආපසු ඇමතුම් සහාය",
                dedicatedOnboarding: "වෙන්වූ ආරම්භක පුහුණුව",
                customerSuccessManager: "පාරිභෝගික සාර්ථකත්ව කළමනාකරු",
                prioritySupport4h: "ප්‍රමුඛතා සහාය (පැය 4)",
                whatsappSupport: "WhatsApp සහාය",
                integrationSetupAssistance: "ඒකාබද්ධ කිරීමේ සහාය",
                dedicatedAccountManager: "වෙන්වූ ගිණුම් කළමනාකරු",
                criticalSupport247: "24/7 වැදගත් සහාය (පැය 2 SLA)",
                implementationTeam: "ක්‍රියාත්මක කිරීමේ කණ්ඩායම",
                customTrainingSessions: "අභිරුචි පුහුණු සැසිවාර",
                directTechnicalEscalation: "සෘජු තාක්ෂණික උපක්‍රමණය",
                strategicPlanningCalls: "උපාය මාර්ගික සැලසුම් ඇමතුම්",
                customizations: "අභිරුචිකරණ"
            },
            startFreeTrial: "නොමිලේ අත්හදා බලන්න",
            bottomCta: {
                title: {
                    part1: "මේ Packages",
                    part2: "ප්‍රමාණවත් නැද්ද?"
                },
                description: "ඔයාගේ Business එකට Custom Solution එකක් අවශ්‍යද? ඔබගේ Business අවශ්‍යතා වලට අනුවම Software එක සකස් කර ගැනීමට අවශ්‍ය නම්, ඔබට Enterprise Packages එකක් වෙත යා හැකියි.",
                button: "විකුණුම් අංශය අමතන්න"
            }
        },
        technicalFaq: {
            badge: "තාක්ෂණික සහාය",
            title: {
                part1: "තාක්ෂණික ප්‍රශ්න",
                part2: "සහ පිළිතුරු"
            },
            subtitle: "Storemate OMS Features සහ Technical Aspects ගැන විස්තර සහිතව පිළිතුරු ලබා ගන්න",
            faqs: [
                {
                    question: "Order එකක් කියන්නේ මොකක්ද?",
                    answer: "Order එකක් කියන්නේ ඔයාගේ Business එකට Facebook Messages, WhatsApp Chats, Instagram DMs, හෝ Phone Calls හරහා එන Customer Purchase Request එකක්.<br><br>Storemate OMS තුළ, Orders යනු ඔබේ Sales Process එකේ පළමු පියවරයි — Order එක Place කරන තැන සිට Delivery එක දක්වා Customers ලා Track කරන්න සහ Follow Up කරන්න මේවා උදව් වෙනවා."
                },
                {
                    question: "COD Sync කියන්නේ මොකක්ද?",
                    answer: "COD (Cash on Delivery) Sync කියන්නේ ඔබ Storemate OMS එකට Orders Add කරන විට, System එක Automatically ඒ Order විස්තර ඔබේ Delivery Partner ගේ System එක සමඟ Sync කර Update කරනවා. කිසිදු Manual වැඩක් අවශ්‍ය නැතිව."
                },
                {
                    question: "Business Location එකක් මඟින් අදහස් වන්නේ කුමක්ද?",
                    answer: "Business Location එකක් කියන්නෙ ඔබේ Products ගබඩා කරන (Store) සහ පිටත් කරන (Dispatch) Physical Address එකක් හෝ Warehouse එකක් වේ. ඔබට විවිධ Cities හෝ Areas වල Warehouses තිබේ නම්, Storemate OMS තුළ Multiple Business Accounts Set Up කිරීමට හැකියාව ඇත. එමඟින් ඔබේ Inventory සහ Shipping කටයුතු වඩාත් පහසුවෙන් Manage කර ගැනිමට උදව් වේ."
                },
                {
                    question: "මම Sync කරන Delivery Company එක මට තෝරා ගැනීමට හැකිද? ",
                    answer: "ඔව්, අනිවාර්යයෙන්ම! <br/><br/> දැනට ලංකාවේ Major Courier Services ගණනාවක් එක්ක Storemate OMS Integrate වෙලා තියෙනවා. සෑම Order එකක් සඳහාම භාවිතා කළ යුතු Courier Service එක ඔබට තෝරා ගත හැක.<br/><br/> ඔයා use කරන Specific Courier Service එකක් අපේ List එකේ නැත්නම්, කිසිම ප්‍රශ්නයක් නෑ! ඔයාගේ Business Requirements අනුව අමතර Courier Services Integrate කරන්න අපිට පුළුවන්"
                },
                {
                    question: "WhatsApp Form එකක් යනු කුමක්ද?",
                    answer: "WhatsApp පෝරමයක් (WhatsApp Form) යනු පාරිභෝගිකයන්ට ඇණවුම් ලබා දීම සඳහා WhatsApp හරහාම පිරවිය හැකි කලින් සකස් කළ Message Templete එකක්. <br/><br/>මෙමගින් Customer Information, Products සහ Delivery Information ඉතා විධිමත්ව රැස් කරගත හැකි අතර, එමගින් Order සැකසීමේ කටයුතු වඩාත් වේගවත් හා නිවැරදිව සිදු කිරීමට ඔබට ඉඩ සැලසේ."
                },
                {
                    question: "මට Dedicated Server එකක් අවශ්‍ය ඇයි?",
                    answer: "ඔබේ ව්‍යාපාරය සඳහා Dedicated Server එකක් අවශ්‍ය වන්නේ, <br>• වේගවත් ක්‍රියාකාරිත්වයක් (Performance).<br>• ඉහළ ආරක්ෂාවක් (Security).<br>• ඔබට අවශ්‍ය පරිදි Software එක සකස් කරවා ගැනීමේ (Customization) පහසුකම ලබා ගැනීමටයි.<br><br> එහි ප්‍රතිලාභ පහත දැක්වේ. <br>• ඔබගේ Team එක සඳහා වඩා වේගවත් Loading Time එකක් ලැබීම. <br>• වැඩි දියුණු කළ Data Security පද්ධතියක්. <br>• ඔබේ Business එක සඳහාම වූ Specific Custom Features. <br>• වඩා හොඳ Uptime සහ Reliability එකක් ලැබීම. <br>• Dedicated Support පහසුකම් ලබාගැනීමට."
                },
                {
                    question: "Customizations යනු කුමක්ද?",
                    answer: "Storemate OMS මඟින් පහත දක්වා ඇති විවිධ Customizations අවස්ථා ලබා දේ, <br>• ඔබට අවශ්‍ය පරිදි සකස් කළ Order Forms සහ Fields. <br>• ඔබේ Brand එක සඳහාම සකස් කළ Invoices සහ Waybills. <br>• ඔබේ දැනට තිබෙන Systems සමඟ Integrate වීමේ හැකියාව. <br>• ඔබේ ව්‍යාපාරයටම ගැළපෙන Custom Reporting සහ Analytics සැකසීම. <br>• ඔබේ Business එක සඳහාම සැකසූ Workflow Automation පද්ධති. <br>• ඔබට අවශ්‍ය අමතර Courier Services සමඟ Custom Integrations සැකසීම."
                },
                {
                    question: "මට Business Locations 05කට වඩා තිබුණොත් මොකද කරන්නෙ?",
                    answer: "කිසිම ගැටලුවක් නැත.<br><br>Storemate OMS වලට Unlimited Business Locations Manage කිරීමට හැකියාව ඇත. එහිදී, සෑම Additional Location එක සඳහා, වෙනම Inventory Management, Staff Access, සහ Shipping Preferences Set Up කිරීමට පුළුවන්. <br><br>Locations කිහිපයක් සඳහා Enterprise Pricing ගැන සාකච්ඡා කිරීමට අපේ Team එක සම්බන්ධ කර ගන්න. "
                }
            ],
            contactPrompt: "තවත් තාක්ෂණික සහාය අවශ්‍යද?",
            contactSupport: "අපගේ තාක්ෂණික සහාය කණ්ඩායම අමතන්න"
        }
    },
    ta: {
        pricing: {
            badge: "நெகிழ்வான விலை நிர்ணாரண விருப்பங்கள்",            costPerOrderLabel: "ஒரு ஆர்டருக்கு",
            addonPriceLabel: "ஒரு ஆர்டருக்கான கூடுதல் விலை",
            businessesLabel: "வணிகங்கள் (பிராண்டுகள்)",
            deliveryAccountsLabel: "டெலிவரி கணக்குகள்",
            supportFeaturesLabel: "ஆதரவு மற்றும் அம்சங்கள்",
            communitySupportLabel: "சமூக ஆதரவு",
            emailSupportLabel: "மின்னஞ்சல் ஆதரவு",
            prioritySupportLabel: "முன்னுரிமை ஆதரவு",
            successSupportLabel: "வெற்றி ஆதரவு",
            dedicatedSupportLabel: "அர்ப்பணிக்கப்பட்ட ஆதரவு",
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
                    inquiries: "மாத ஆர்டர்கள் 100",
                    users: "பயனர்கள் 1",
                    products: "வரம்பற்ற தயாரிப்புகள்",
                    deliveryAccounts: "1 டெலிவரி கணக்கு",
                    businesses: "1",
                    buttonText: "தொடங்குங்கள்",
                    trialPeriod: "இலவசமாக முயற்சிக்கவும்"
                },
                starter: {
                    name: "தொடக்கம்",
                    subtitle: "தொடக்க சந்தா",
                    price: "5,000",
                    period: "/மாதம்",
                    inquiries: "மாத ஆர்டர்கள் 500",
                    users: "பயனர்கள் 2",
                    products: "வரம்பற்ற தயாரிப்புகள்",
                    deliveryAccounts: "1 டெலிவரி கணக்கு",
                    costPerOrder: "10",
                    businesses: "1",
                    buttonText: "உங்கள் இலவச கணக்கை பெறுங்கள்",
                    trialPeriod: "30 நாட்கள் இலவச சோதனை",
                    popular: "மிகவும் பிரபலமான"
                },
                business: {
                    name: "வணிகம்",
                    subtitle: "வணிக சந்தா",
                    price: "12,000",
                    period: "/மாதம்",
                    inquiries: "மாத ஆர்டர்கள் 2000",
                    users: "பயனர்கள் 5",
                    products: "வரம்பற்ற தயாரிப்புகள்",
                    deliveryAccounts: "2 டெலிவரி கணக்குகள்",
                    costPerOrder: "6",
                    businesses: "2",
                    buttonText: "உங்கள் இலவச கணக்கை பெறுங்கள்",
                    trialPeriod: "30 நாட்கள் இலவச சோதனை"
                },
                premium: {
                    name: "பிரீமியம்",
                    subtitle: "பிரீமியம் சந்தா",
                    price: "15,000",
                    period: "/மாதம்",
                    inquiries: "மாத ஆர்டர்கள் 5000",
                    users: "பயனர்கள் 10",
                    products: "வரம்பற்ற தயாரிப்புகள்",
                    deliveryAccounts: "3 டெலிவரி கணக்குகள்",
                    costPerOrder: "3",
                    businesses: "3",
                    buttonText: "உங்கள் இலவச கணக்கை பெறுங்கள்",
                    trialPeriod: "30 நாட்கள் இலவச சோதனை"
                },
                enterprise: {
                    name: "நிறுவன",
                    subtitle: "நிறுவன தீர்வு",
                    price: "24,000",
                    period: "/மாதம்",
                    inquiries: "மாத ஆர்டர்கள் 25000",
                    users: "பயனர்கள் 25",
                    products: "வரம்பற்ற தயாரிப்புகள்",
                    deliveryAccounts: "வரம்பற்ற டெலிவரி கணக்குகள்",
                    costPerOrder: "0.96",
                    businesses: "வரம்பற்ற",
                    buttonText: "விற்பனையை தொடர்பு கொள்ளுங்கள்",
                    trialPeriod: "நிறுவன தீர்வுக்கு"
                }
            },
            features: {
                knowledgeBaseAccess: "அறிவுத் தள அணுகல்",
                communityForum: "சமூக மன்றம்",
                videoTutorials: "வீடியோ பயிற்சிகள்",
                emailSupport: "மின்னஞ்சல் ஆதரவு",
                emailSupport48h: "மின்னஞ்சல் ஆதரவு (48 மணி)",
                setupGuideCall: "அமைப்பு வழிகாட்டி அழைப்பு",
                extendedKnowledgeBase: "விரிவாக்கப்பட்ட அறிவுத் தளம்",
                prioritySupport: "முன்னுரிமை ஆதரவு",
                priorityEmailChat12h: "முன்னுரிமை மின்னஞ்சல் & அரட்டை (12 மணி)",
                phoneCallbackSupport: "தொலைபேசி திரும்ப அழைப்பு ஆதரவு",
                dedicatedOnboarding: "அர்ப்பணிக்கப்பட்ட பதிவு செயல்முறை",
                customerSuccessManager: "வாடிக்கையாளர் வெற்றி மேலாளர்",
                prioritySupport4h: "முன்னுரிமை ஆதரவு (4 மணி)",
                whatsappSupport: "WhatsApp ஆதரவு",
                integrationSetupAssistance: "ஒருங்கிணைப்பு அமைப்பு உதவி",
                dedicatedAccountManager: "அர்ப்பணிக்கப்பட்ட கணக்கு மேலாளர்",
                criticalSupport247: "24/7 முக்கிய ஆதரவு (2 மணி SLA)",
                implementationTeam: "செயல்படுத்தல் குழு",
                customTrainingSessions: "தனிப்பயன் பயிற்சி அமர்வுகள்",
                directTechnicalEscalation: "நேரடி தொழில்நுட்ப உயர்வு",
                strategicPlanningCalls: "மூலோபாய திட்டமிடல் அழைப்புகள்",
                customizations: "தனிப்பயனாக்கங்கள்"
            },
            startFreeTrial: "இலவச சோதனையைத் தொடங்குங்கள்",
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
                    question: "ஆர்டர் என்றால் என்ன?",
                    answer: "ஆர்டர் என்பது உங்கள் சமூக ஊடக சேனல்கள் (Facebook, WhatsApp, Instagram) அல்லது தொலைபேசி அழைப்புகள் மூலம் வரும் வாடிக்கையாளர் கொள்முதல் கோரிக்கையாகும்.<br><br>Storemate OMS இல், ஆர்டர்கள் உங்கள் விற்பனை செயல்முறையின் முதல் படியாகும் — ஆர்டர் வைப்பது முதல் டெலிவரி வரை வாடிக்கையாளர்களை கண்காணிக்கவும் பின்தொடரவும் உதவுகின்றன."
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
                    answer: "ஆம், நிச்சயமாக.<br><br>ஸ்டோர்மேட் OMS தற்போது பல கூரியர் சேவைகளுடன் ஒருங்கிணைக்கிறது. ஒவ்வொரு ஆர்டருக்கும் பயன்படுத்த வேண்டிய கொரியர் சேவையை நீங்கள் தேர்வு செய்யலாம்.<br><br>உங்கள் வணிகத் தேவைகளின் அடிப்படையில் கூடுதல் கொரியர் சேவைகளையும் ஒருங்கிணைக்க முடியும்."
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
    const context = useContext(LanguageContext);
    const currentLanguage = context?.currentLanguage || 'en';

    const resolveKey = (key, lang) => {
        const keys = key.split('.');
        let value = pricingTranslations[lang];
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return null;
            }
        }
        return value || null;
    };

    const tPricing = (key) => {
        return resolveKey(key, currentLanguage) || resolveKey(key, 'en') || key;
    };

    // Always English for card-level content (plans, features, labels)
    const tCard = (key) => {
        return resolveKey(key, 'en') || key;
    };

    return { tPricing, tCard };
};
