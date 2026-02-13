import { useLanguage } from '@/Contexts/LanguageContext';

const footerTranslations = {
    en: {
        tagline: 'Automate your order workflow. Sync lead form orders to couriers in seconds.',
        cta: 'Get Your Free Account',
        copyright: 'StoreMate OMS. A product by',
    },
    si: {
        tagline: '\u0D94\u0DB6\u0DDA Order workflow \u0D91\u0D9A Automate \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1. Lead form orders \u0DAD\u0DAD\u0DCA\u0DB4\u0DBB \u0D9A\u0DD2\u0DC4\u0DD2\u0DB4\u0DBA\u0D9A\u0DD2\u0DB1\u0DCA Courier \u0DC3\u0DDA\u0DC0\u0DCF \u0DC3\u0DB8\u0D9F Sync \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.',
        cta: '\u0DB1\u0DDC\u0DB8\u0DD2\u0DBD\u0DDA \u0D9C\u0DD2\u0DAB\u0DD4\u0DB8 \u0DBD\u0DB6\u0DCF\u0D9C\u0DB1\u0DCA\u0DB1',
        copyright: 'StoreMate OMS. Parallax Technologies \u0DC4\u0DD2 \u0DB1\u0DD2\u0DC2\u0DCA\u0DB4\u0DCF\u0DAF\u0DB1\u0DBA\u0D9A\u0DD2.',
    },
};

const LeadCampaignFooter = () => {
    const { currentLanguage } = useLanguage();
    const t = footerTranslations[currentLanguage] || footerTranslations.en;
    return (
        <footer className="bg-[#fafafa] border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center text-center">
                    {/* Logo */}
                    <img src="/oms-v1.png" alt="StoreMate" className="h-10 mb-4" />

                    <p className="text-sm text-gray-500 max-w-md mb-6">
                        {t.tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <a
                            href="https://welcome.oms.storemate.cloud/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#16162a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                        >
                            {t.cta}
                        </a>

                    </div>

                    {/* Social Links */}
                    <ul className="flex items-center gap-3 mb-6">
                        <li>
                            <a href="https://www.youtube.com/@Storemate" target="_blank" rel="noopener noreferrer" title="YouTube" className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-red-500 transition-colors">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/storemateinventory" target="_blank" rel="noopener noreferrer" title="Facebook" className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/storemate.cloud/" target="_blank" rel="noopener noreferrer" title="Instagram" className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-pink-500 transition-colors">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/storemate/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-blue-700 transition-colors">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>

                    {/* Copyright */}
                    <p className="text-xs text-gray-400">
                        &copy; {new Date().getFullYear()} {currentLanguage === 'si'
                            ? t.copyright
                            : <>{t.copyright}{' '}<a href="https://parallaxtechnologies.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Parallax Technologies</a></>
                        }
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default LeadCampaignFooter;
