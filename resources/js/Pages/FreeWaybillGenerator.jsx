import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import MainLayout from '@/Layouts/MainLayout';
import { useRef } from 'react';
import { useFreeWaybillGeneratorTranslation } from '@/Utils/freeWaybillGeneratorTranslations';

export default function FreeWaybillGenerator({ auth }) {
    const headerRef = useRef(null);
    const toolUrl = import.meta.env.VITE_FREE_WAYBILL_TOOL_URL || '/dashboard';
    const isExternalTool = /^https?:\/\//i.test(toolUrl);
    const { tFreeWaybill } = useFreeWaybillGeneratorTranslation();

    const whyCards = tFreeWaybill('why.cards');
    const upgradeRows = tFreeWaybill('upgrade.table.rows');
    const howSteps = tFreeWaybill('how.steps');
    const faqItems = tFreeWaybill('faq.items');

    return (
        <MainLayout>
            <div className="min-h-screen bg-slate-50">
            <Head title={tFreeWaybill('pageTitle')}>
                <meta
                    name="description"
                    content={tFreeWaybill('metaDescription')}
                />
                <meta
                    name="keywords"
                    content={tFreeWaybill('metaKeywords')}
                />
            </Head>

            <Header ref={headerRef} auth={auth} />

            <section className="relative isolate overflow-hidden py-20 sm:py-28">
                <div className="pointer-events-none absolute -left-28 top-8 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

                <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
                    <span className="inline-flex items-center rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
                        {tFreeWaybill('hero.badge')}
                    </span>

                    <h1 className="mt-8 text-balance text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        {tFreeWaybill('hero.title')}
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                        {tFreeWaybill('hero.description')}
                    </p>

                    <div className="mx-auto mt-12 max-w-3xl">
                        <p className="text-base font-medium text-slate-700 sm:text-lg">
                            {tFreeWaybill('hero.ctaPrompt')}
                        </p>
                        <p className="mt-3 text-sm text-slate-600 sm:text-base">
                            {tFreeWaybill('hero.ctaDescription')}
                        </p>

                        <a
                            href={toolUrl}
                            target={isExternalTool ? '_blank' : undefined}
                            rel={isExternalTool ? 'noopener noreferrer' : undefined}
                            className="mt-7 inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                            style={{ backgroundColor: '#013387' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#006daf';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#013387';
                            }}
                        >
                            {tFreeWaybill('hero.ctaButton')}
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            {tFreeWaybill('why.title')}
                        </h2>
                        <p className="mt-4 text-base text-slate-600 sm:text-lg">
                            {tFreeWaybill('why.subtitle')}
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {whyCards.map((card, index) => (
                            <article key={index} className="rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1">
                                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{card.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-sky-50 to-orange-50">
                        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                            {/* Guest User Card */}
                            <div className="flex-1 bg-white rounded-2xl p-6 mb-6 md:mb-0 flex flex-col justify-start">
                                <div className="flex items-center mb-4">
                                    <svg className="w-7 h-7 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" /></svg>
                                    <span className="font-bold text-lg text-slate-800">Guest User</span>
                                </div>
                                <ul className="space-y-4 text-base">
                                    <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm0 4h14v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7zm2 2v6h2V9H5zm4 0v6h2V9H9zm4 0v6h2V9h-2z" /></svg> <span className="font-semibold">Excel Upload:</span> 20 Rows</li>
                                    <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8V5a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 101.414-1.414l-2.707-2.707z" /></svg> <span className="font-semibold">Data History:</span> Valid for 5 Hours</li>
                                    <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0l-1.172 1.172-9.192 9.192a2 2 0 000 2.828l3.172 3.172a2 2 0 002.828 0l9.192-9.192a2 2 0 000-2.828l-3.172-3.172zM7.05 16.95a1 1 0 01-1.414 0l-3.172-3.172a1 1 0 010-1.414l9.192-9.192a1 1 0 011.414 0l3.172 3.172a1 1 0 010 1.414l-9.192 9.192z" /></svg> <span className="font-semibold">Logo & Branding:</span> Basic</li>
                                    <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17 8V6a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2zm-7-2a3 3 0 016 0v2H6V6zm8 7a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 011-1h10a1 1 0 011 1v5z" /></svg> <span className="font-semibold">Courier Sync:</span> Manual</li>
                                </ul>
                            </div>

                            {/* Arrow/Divider for large screens */}
                            <div className="hidden md:flex flex-col items-center justify-center mx-4 mt-12 md:mt-0">
                                <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#e0e7ff"/><path d="M16 24h16m0 0l-6-6m6 6l-6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>

                            {/* Logged-in User Card */}
                            <div className="flex-1 bg-white rounded-2xl p-6 border-2 border-emerald-200 flex flex-col justify-start">
                                <div className="flex items-center mb-4">
                                    <svg className="w-7 h-7 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
                                    <span className="font-bold text-lg text-blue-700">Free StoreMate Account <span className="font-normal">(Unlocks Forever!)</span></span>
                                </div>
                                <ul className="space-y-4 text-base">
                                    <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm0 4h14v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7zm2 2v6h2V9H5zm4 0v6h2V9H9zm4 0v6h2V9h-2z" /></svg> <span className="font-semibold">Excel Upload:</span> <span className="text-blue-700">Bulk Processing (No Limits)</span></li>
                                    <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8V5a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 101.414-1.414l-2.707-2.707z" /></svg> <span className="font-semibold">Data History:</span> <span className="text-blue-700">Cloud Storage & Order History</span></li>
                                    <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0l-1.172 1.172-9.192 9.192a2 2 0 000 2.828l3.172 3.172a2 2 0 002.828 0l9.192-9.192a2 2 0 000-2.828l-3.172-3.172zM7.05 16.95a1 1 0 01-1.414 0l-3.172-3.172a1 1 0 010-1.414l9.192-9.192a1 1 0 011.414 0l3.172 3.172a1 1 0 010 1.414l-9.192 9.192z" /></svg> <span className="font-semibold">Logo & Branding:</span> <span className="text-blue-700">Fully Customizable Brand Kit</span></li>
                                    <li className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17 8V6a5 5 0 00-10 0v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2zm-7-2a3 3 0 016 0v2H6V6zm8 7a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a1 1 0 011-1h10a1 1 0 011 1v5z" /></svg> <span className="font-semibold">Courier Sync:</span> <span className="text-blue-700">Automated Fulfillment</span></li>
                                </ul>
                                <a
                                    href="https://oms.storemate.cloud/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-block w-full rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-4 text-center text-lg font-bold text-white hover:from-sky-700 hover:to-blue-700 transition-all duration-200"
                                >
                                    Create Your Free Account Now →
                                </a>
                            </div>
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">{tFreeWaybill('upgrade.badge')}</p>
                            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">{tFreeWaybill('upgrade.title')}</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-base leading-7 text-slate-600 sm:text-lg">{tFreeWaybill('upgrade.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            {tFreeWaybill('how.title')}
                        </h2>
                    </div>

                    <div className="relative mt-14">
                        <div className="absolute left-0 right-0 top-9 hidden h-px bg-slate-300 md:block" />

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {howSteps.map((step, index) => (
                                <article key={index} className="relative rounded-2xl border border-slate-200 p-6">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-900 bg-white text-slate-900">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8M8 15h5M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0l-4 4m4-4l4 4M5 20h14" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 9h14M7 13h10M9 17h6M4 4h16v16H4V4z" />
                                            </svg>
                                        )}
                                    </div>
                                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-sky-700">{step.label}</p>
                                    <h3 className="mt-2 text-xl font-bold text-slate-900">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            {tFreeWaybill('faq.title')}
                        </h2>
                    </div>

                    <div className="mt-12 space-y-4">
                        {faqItems.map((item, index) => (
                            <details key={index} className="group rounded-2xl border border-slate-200 p-5 sm:p-6" open={index === 0}>
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-bold text-slate-900">
                                    <span>{item.question}</span>
                                    <span className="mt-0.5 text-slate-500 transition-transform duration-200 group-open:rotate-180">⌄</span>
                                </summary>
                                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            </div>
        </MainLayout>
    );
}