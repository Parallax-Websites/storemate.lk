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

            <section className="py-20 sm:py-24 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {/* Guest Card */}
                        <div className="w-full max-w-sm rounded-2xl bg-white border border-slate-200 pt-8 pb-6 px-8">
                            <div className="text-left">
                                <p className="text-sm font-medium uppercase tracking-widest text-slate-500">Guest</p>
                                <p className="text-xl font-bold text-slate-900">For freelancers</p>
                                <p className="mt-6 text-4xl font-bold text-slate-900">90<span className="text-base">€</span></p>
                            </div>
                            <ul className="mt-8 space-y-4 text-slate-700">
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">📦</span>1 users</li>
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">📥</span>Personal use</li>
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✅</span>Use in a free end product</li>
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">🛡️</span>6 months technical support</li>
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">🧩</span>All modules included</li>
                            </ul>
                            <button className="mt-8 w-full rounded-full bg-slate-900 py-3 text-white font-semibold hover:bg-slate-800 transition">Subscribe</button>
                        </div>

                        {/* Pro Card */}
                        <div className="w-full max-w-sm rounded-2xl bg-slate-900 text-white pt-8 pb-6 px-8">
                            <div className="text-left">
                                <p className="text-sm font-medium uppercase tracking-widest text-blue-300">Pro</p>
                                <p className="text-xl font-bold text-white">For agencies</p>
                                <p className="mt-6 text-4xl font-bold text-white">190<span className="text-base">€</span></p>
                            </div>
                            <ul className="mt-8 space-y-4 text-blue-100">
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-800 text-white flex items-center justify-center">✔️</span>Unlimited users</li>
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-800 text-white flex items-center justify-center">✔️</span>Personal or Commercial use</li>
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-800 text-white flex items-center justify-center">✔️</span>Use in a free or paid end product</li>
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-800 text-white flex items-center justify-center">✔️</span>6 months of technical support</li>
                                <li className="flex items-center gap-3"><span className="h-6 w-6 rounded-full bg-blue-800 text-white flex items-center justify-center">✔️</span>All modules included</li>
                            </ul>
                            <button className="mt-8 w-full rounded-full bg-blue-500 py-3 text-white font-semibold hover:bg-blue-400 transition">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
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