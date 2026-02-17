import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';

const faqTranslations = {
    en: {
        badge: 'FAQ',
        heading: 'Your Questions, Answered',
        subheading: 'Find quick answers to the most common questions from e-commerce sellers',
    },
    si: {
        badge: 'FAQ',
        heading: 'ඔබේ ගැටළු සඳහා පිළිතුරු',
        subheading: 'Online ව්‍යාපාරිකයින් අපෙන් නිතරම අසන ප්‍රශ්න සඳහා ඉක්මන් පිළිතුරු මෙන්න',
    },
};

const faqData = [
    {
        question: { en: 'Do I need to change how I collect orders?', si: 'මම ඕඩර් ලබාගන්නා ක්‍රමය වෙනස් කළ යුතුද?' },
        answer: { en: 'No! Keep using lead forms, DMs, or whatever works for you. Just upload your orders to StoreMate instead of keeping them scattered in Excel files.', si: 'නැත! කලින් වගේම Lead forms, DMs හෝ ඔබට පහසු ක්‍රමයක් දිගටම පාවිච්චි කරන්න. කළ යුත්තේ එම ඕඩර්ස් විසිරී ඇති Excel ෆයිල් වල තබාගන්නේ නැතිව StoreMate එකට ඇතුළත් කිරීම පමණි.' },
    },
    {
        question: { en: 'How hard is it to upload orders?', si: 'ඕඩර්ස් අප්ලෝඩ් කිරීම කොතරම් අපහසුද?' },
        answer: { en: 'Just download your Excel template, map your columns once, and upload. Bulk upload 1000+ orders in under a minute.', si: 'ඉතාම පහසුයි! අපේ Excel ටෙම්ප්ලේට් එක ඩවුන්ලෝඩ් කර, ඔබේ තොරතුරු එකතු කර අප්ලෝඩ් කරන්න. ඕඩර්ස් 1000ක් වුවත් විනාඩියකට අඩු කාලයකින් අප්ලෝඩ් කළ හැකියි.' },
    },
    {
        question: { en: 'How much does it cost?', si: 'මෙහි පිරිවැය කොපමණද?' },
        answer: { en: 'Free account available. Paid plans start at ___. All plans include courier integration and bulk upload.', si: 'නොමිලේ ගිණුමක් (Free account) ලබාගත හැකියි. ගෙවන පැකේජ (Paid plans) රු. ___ සිට ආරම්භ වේ. සියලුම පැකේජ සඳහා Courier Integration සහ Bulk Upload පහසුකම ඇතුළත් වේ.' },
    },
    {
        question: { en: 'Do you integrate with my courier service?', si: 'මම පාවිච්චි කරන Courier සේවාව සමඟ මෙය සම්බන්ධ කළ හැකිද?' },
        answer: { en: 'Yes, we integrate with Pronto, Wow Express, and other major Sri Lankan couriers.', si: 'ඔව්, Pronto, Wow Express ඇතුළු ශ්‍රී ලංකාවේ ප්‍රධාන සියලුම Courier සේවාවන් සමඟ අපගේ පද්ධතිය සම්බන්ධ කළ හැකියි.' },
    },
    {
        question: { en: "I'm already comfortable with Excel. Why switch?", si: 'මට Excel පුරුදුයි, ඇයි මම StoreMate වලට මාරු වෙන්නේ?' },
        answer: { en: "You can keep using Excel for collection! StoreMate just eliminates the chaos after download—tracking follow-ups, syncing with couriers, spotting duplicates, and managing everything from one place instead of switching between spreadsheets and courier websites.", si: 'ඔබට ඕඩර්ස් ලබාගැනීමට Excel දිගටම පාවිච්චි කළ හැකියි! නමුත් ඕඩර්ස් ඩවුන්ලෝඩ් කිරීමෙන් පසු ඇතිවන අවුල් සහගත බව—Follow-ups ට්‍රැක් කිරීම, Courier සමඟ Sync කිරීම, Duplicate හඳුනාගැනීම වැනි වැඩ සියල්ල එකම තැනකින් පහසුවෙන් කරගැනීමට StoreMate උදවු වේ.' },
    },
    {
        question: { en: 'Can my team use it?', si: 'මගේ ටීම් එකට මෙය පාවිච්චි කළ හැකිද?' },
        answer: { en: 'Yes! Add team members, assign orders, and track who\'s handling what. No more "did you call this customer?" confusion.', si: 'ඔව්! ඔබේ කණ්ඩායමේ සාමාජිකයින් ඇතුළත් කර, ඔවුන්ට වැඩ බෙදා දී, එක් එක් සාමාජිකයා කරන්නේ කුමක්ද කියා ඔබට අධීක්ෂණය කළ හැකියි.' },
    },
];

export default function LeadCampaignFaq() {
    const [openIndex, setOpenIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { currentLanguage } = useLanguage();
    const t = faqTranslations[currentLanguage] || faqTranslations.en;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={sectionRef} className="relative bg-white py-20 sm:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">{t.badge}</p>
                    <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-snug sm:leading-tight tracking-tight">
                        {t.heading}
                    </h2>
                    <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
                        {t.subheading}
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    <div className="border-t border-gray-200">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`border-b border-gray-200 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                style={{ transitionDelay: `${200 + index * 100}ms` }}
                            >
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-6 text-left cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="text-base sm:text-lg font-medium text-[#1a1a2e] pr-8">
                                        {item.question[currentLanguage] || item.question.en}
                                    </span>
                                    <span className="text-2xl font-light text-gray-400 flex-shrink-0 leading-none select-none w-6 text-center">
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="pb-6">
                                        <p className="text-gray-500 leading-relaxed text-base">
                                            {item.answer[currentLanguage] || item.answer.en}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
