import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';

const problemTranslations = {
    en: {
        heading: 'Is Your Online Business Stuck Because of These Struggles?',
        subheading: "If you're handling 500+ lead form orders, these daily headaches are silently killing your growth and profits.",
        cta: 'Get Your Free Account',
    },
    si: {
        heading: 'ඔබේ Online Business එකත් මේ ප්‍රශ්න නිසා හිරවෙලාද?',
        subheading: 'ඔබ දිනකට Lead Form Orders 500+ ක් කරනවා නම්, මේ ප්‍රශ්න නිසා ඔබේ ව්‍යාපාරයේ වර්ධනය සහ ලාභය දිනෙන් දින අඩුවෙනවා.',
        cta: 'නොමිලේ ගිණුම ලබාගන්න',
    },
};

const problems = [
    {
        emoji: '😰',
        title: { en: 'Convert Every Lead into a Sale', si: 'හැම Lead එකක්ම Sale එකක් කරගන්න' },
        description: { en: 'When managing 500+ orders manually, missing even a single follow-up means losing a customer to your competitor forever.', si: 'Orders 500ක් 1000ක් එද්දී Manual විදියට Follow-up කරන්න ගිහින් එක Lead එකක් හරි මඟ හැරුණොත්, ඒ Customer ව ඔයාට අහිමි වෙනවා.' },
        iconBg: 'bg-red-50',
        iconColor: 'text-red-500',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
    },
    {
        emoji: '⏰',
        title: { en: 'Break Free from Manual Work Overload', si: 'Manual වැඩවලින් නිදහස් වෙන්න' },
        description: { en: 'Checking for duplicates, copying to Excel, and re-uploading to courier sites kills half your day. Your growth is stalled by slow manual processes.', si: 'Duplicate Orders චෙක් කරලා, Excel වලට Copy කරලා, ආයෙත් Courier Site එකට Upload කරන්න ගියාම දවසෙන් භාගයක්ම ඉවරයි. වැඩේ වෙන්නෙත් හරිම හෙමින්.' },
        iconBg: 'bg-amber-50',
        iconColor: 'text-amber-500',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        emoji: '📊',
        title: { en: 'End the Spreadsheet & Data Chaos', si: 'Data පටලැවිල්ලට තිත තියන්න' },
        description: { en: 'Managing orders, payments, and returns on spreadsheets leads to messy data and total system failure as your business scales.', si: 'Orders, Payments වගේම Returns හැමදේම Excel එකේ Track කරන්න ගියාම, Business එක වැඩි වෙද්දී Data පටලැවිලා මුළු System එකම අවුල් වෙනවා.' },
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-500',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
        ),
    },
    {
        emoji: '❌',
        title: { en: 'Cut Returns and Secure Your Profits', si: 'Returns අඩු කරගෙන ලාභය වැඩි කරගන්න' },
        description: { en: "Duplicate orders from the same number drive up your return rates. You're burning profits on courier charges for orders that should never have been sent.", si: 'එකම Phone Number එකෙන් තැන් දෙක තුනකින් Orders දාන නිසා Returns වැඩි වෙනවා. මේ නිසා කිසිම තේරුමක් නැතුව Courier Charges වලට සල්ලි නාස්ති වෙනවා.' },
        iconBg: 'bg-rose-50',
        iconColor: 'text-rose-500',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
    },
    {
        emoji: '👥',
        title: { en: 'Eliminate Delays and Build Customer Trust', si: 'පමාවන් නවත්වා පාරිභෝගික විශ්වාසය දිනාගන්න' },
        description: { en: 'Who is following up? Who is dispatching? Without a clear system, roles get blurred, mistakes happen, and orders get delayed.', si: 'කවුද මේ Order එක Follow කරන්න ඕනේ? කවුද Courier දාන්න ඕනේ? මේ Confusion එක නිසා වැඩ බෙදාගන්න බැරි වෙලා Orders Delay වෙනවා.' },
        iconBg: 'bg-purple-50',
        iconColor: 'text-purple-500',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
    {
        emoji: '📈',
        title: { en: 'Don\'t Let Your Business Scale Out of Control', si: 'බිස්නස් එක ඔබේ පාලනයෙන් ගිලිහෙන්න දෙපා' },
        description: { en: 'Scaling to 2,000+ orders without automation is a recipe for disaster. Without a system, your business remains a "job" that controls you, rather than a scalable asset.', si: 'හරියට System එකක් නැතුව Orders 1000ක් 2000ක් Handle කරන්න ගියොත් දවසක ඔයාගේ Business එක ලොකු කඩා වැටීමකට ලක් වෙන්න පුළුවන්.' },
        iconBg: 'bg-green-50',
        iconColor: 'text-green-500',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
        ),
    },
];

export default function LeadCampaignProblem() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { currentLanguage } = useLanguage();
    const t = problemTranslations[currentLanguage] || problemTranslations.en;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-white py-20 sm:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header — Full Width */}
                <div className={`max-w-4xl mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a2e] leading-snug sm:leading-tight tracking-tight">
                        {t.heading}
                    </h2>
                    <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
                        {t.subheading}
                    </p>
                    <div className="mt-8">
                        <a
                            href="https://welcome.oms.storemate.cloud/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#E07817] text-white font-semibold text-base hover:bg-[#c06514] transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 hover:-translate-y-0.5"
                        >
                            {t.cta}
                        </a>
                    </div>
                </div>

                {/* Problem Cards Grid — Full Width */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border border-gray-300 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${200 + index * 150}ms` }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#006daf] to-[#005a91] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#006daf]/20">
                                    <div className="text-white">
                                        {problem.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-[#1a1a2e]">
                                    {problem.title[currentLanguage] || problem.title.en}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {problem.description[currentLanguage] || problem.description.en}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
