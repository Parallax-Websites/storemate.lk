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
        question: { en: 'Do I need to change how I collect orders?', si: 'මම Orders ලබාගන්නා ක්‍රමය වෙනස් කළ යුතුද?' },
        answer: { en: 'No! Keep using lead forms, DMs, or whatever works for you. Just upload your orders to StoreMate instead of keeping them scattered in Excel files.', si: 'නැහැ! කලින් වගේම Lead forms, WhatsApp chat හෝ ඔබට පහසු ක්‍රමයක් දිගටම පාවිච්චි කරන්න. ඔබ මොන ක්‍රමය භාවිතා කලත් වෙන වෙනම Excel file වල තබාගන්නේ නැතිව StoreMate එකට ඇතුළත් කල හැකියි.' },
    },
    {
        question: { en: 'How hard is it to upload orders?', si: 'Storemate හරහා Orders upload කිරීම කොතරම් පහසුද?' },
        answer: { en: 'Just download your Excel template, map your columns once, and upload. Bulk upload 1000+ orders in under a minute.', si: 'ඉතාම පහසුයි! ඔබ download කර ගන්නා Google Excel sheet එක (Leads), storemate එකට upload කරන්න පුළුවන්. Orders 1000ක් වුවත් විනාඩියකට අඩු කාලයකින් upload කළ හැකියි.' },
    },
    {
        question: { en: 'Do you integrate with my courier service?', si: 'මම පාවිච්චි කරන Courier සේවාව සමඟ මෙය සම්බන්ධ කළ හැකිද?' },
        answer: { en: 'Yes, we integrate with Pronto, Wow Express, and other major Sri Lankan couriers.', si: 'ඔව්, Trans Express, Royal Express, Koombiyo, Domex සහ ලංකාවේ ප්‍රධාන Courier services එක්ක අපි link වෙලා ඉන්නේ. ඕනෑම courier එකක් අපි විනාඩි කිහිපයක් ඇතුලත conect කරලා දෙනවා.' },
    },
    {
        question: { en: "I'm already comfortable with Excel. Why switch?", si: 'ඇයි මම Excel වලින් StoreMate වලට මාරු වෙන්නේ?' },
        answer: { en: "You can keep using Excel for collection! StoreMate just eliminates the chaos after download—tracking follow-ups, syncing with couriers, spotting duplicates, and managing everything from one place instead of switching between spreadsheets and courier websites.", si: 'ඔයාට කලින් වගේම Excel දිගටම පාවිච්චි කරන්න පුළුවන්. හැබැයි Excel එකෙන් ඕඩර්ස් ගත්තට පස්සේ වෙන පටලැවිල්ල StoreMate එකෙන් ලේසි කරනවා. orders මඟ හැරෙන්නේ නැතුව Follow-up කරන්නත්, එකින් එක type කරන්නේ නැතුව courier site එකට orders යවන්නත් (Sync) මේකෙන් පුළුවන්. ඒ වගේම එකම කෙනා කිහිප සැරයක් orders දාලා නම් ඒකත් ලේසියෙන්ම පෙන්නවා.' },
    },
    {
        question: { en: 'Can my team use it?', si: 'මගේ team එකට මෙය පාවිච්චි කළ හැකිද?' },
        answer: { en: 'Yes! Add team members, assign orders, and track who\'s handling what. No more "did you call this customer?" confusion.', si: 'ඔව්! ඔබේ team එකට user account ලබා දී, ඔවුන්ට වැඩ බෙදා දිය හැකිය, එක් එක් user ගේ profomance ඔබට වෙන වෙනම බැලිය හැකිය.' },
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
