import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import MainLayout from '@/Layouts/MainLayout';
import { useEffect, useRef, useState } from 'react';
import { useFreeWaybillGeneratorTranslation } from '@/Utils/freeWaybillGeneratorTranslations';

export default function FreeWaybillGenerator({ auth }) {
    const headerRef = useRef(null);
    const toolUrl = import.meta.env.VITE_FREE_WAYBILL_TOOL_URL || '/dashboard';
    const heroVideoId = 'mEy7tDOs8Vo';
    const heroVideoThumbnail = '/images/hero/169-waybill.jpg';
    const heroVideoEmbedUrl = import.meta.env.VITE_FREE_WAYBILL_HERO_EMBED_URL || `https://www.youtube.com/embed/${heroVideoId}?autoplay=1&rel=0&enablejsapi=1`;
    const [isHeroVideoOpen, setIsHeroVideoOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(0);
    const isExternalTool = /^https?:\/\//i.test(toolUrl);
    const { tFreeWaybill } = useFreeWaybillGeneratorTranslation();

    const whyCards = tFreeWaybill('why.cards');
    const howSteps = tFreeWaybill('how.steps');
    const faqItems = tFreeWaybill('faq.items');
    const upgradeRows = tFreeWaybill('upgrade.table.rows');

    useEffect(() => {
        if (!isHeroVideoOpen) {
            document.body.style.overflow = '';
            return undefined;
        }

        document.body.style.overflow = 'hidden';

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsHeroVideoOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isHeroVideoOpen]);

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

            <section className="relative isolate overflow-hidden bg-white py-20 text-gray-900 sm:py-28">
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                            backgroundSize: '50px 50px'
                        }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 55%, rgba(255,255,255,0) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0) 40%, rgba(255,255,255,0.35) 82%, rgba(255,255,255,0.7) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(0,109,175,0.08) 18%, rgba(0,109,175,0.04) 55%, rgba(255,255,255,1) 100%)' }} />
                </div>

                <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
                    <span className="inline-flex items-center rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
                        {tFreeWaybill('hero.badge')}
                    </span>

                    <h1 className="mt-8 text-balance text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        {tFreeWaybill('hero.title')}
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                        {tFreeWaybill('hero.description')}
                    </p>

                    <button
                        type="button"
                        onClick={() => setIsHeroVideoOpen(true)}
                        className="group mx-auto mt-10 block w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                        aria-label="Play Free Waybill Generator video"
                    >
                        <div className="relative aspect-video w-full bg-slate-900">
                            <img
                                src={heroVideoThumbnail}
                                alt={tFreeWaybill('hero.imageAlt')}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all duration-300 group-hover:bg-black/30">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-xl transition-all duration-300 group-hover:scale-110">
                                    <svg className="ml-0.5 h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>

                    {isHeroVideoOpen && (
                        <div
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4"
                            role="dialog"
                            aria-modal="true"
                            onClick={() => setIsHeroVideoOpen(false)}
                        >
                            <div className="relative w-full max-w-sm" onClick={(event) => event.stopPropagation()}>
                                <button
                                    type="button"
                                    onClick={() => setIsHeroVideoOpen(false)}
                                    aria-label="Close video"
                                    className="absolute -top-12 right-0 text-white transition-colors hover:text-gray-300"
                                >
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="relative overflow-hidden rounded-2xl bg-black" style={{ paddingBottom: '177.78%' }}>
                                    <iframe
                                        className="absolute left-0 top-0 h-full w-full"
                                        src={heroVideoEmbedUrl}
                                        title="Free Waybill Generator Hero Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    )}

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
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            {tFreeWaybill('why.title')}
                        </h2>
                        <p className="mt-4 text-base text-slate-600 sm:text-lg">
                            {tFreeWaybill('why.subtitle')}
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-300">
                        {whyCards.map((card, index) => (
                            <article key={index} className="px-0 md:px-8">
                                <p className="text-5xl font-black leading-none text-slate-300">{String(index + 1).padStart(2, '0')}</p>
                                <h3 className="mt-4 text-xl font-bold text-slate-900">{card.title.replace(/^\p{Emoji_Presentation}\s*/u, '')}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{card.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-black py-20 sm:py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                            {tFreeWaybill('upgrade.badge')}
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                            {tFreeWaybill('upgrade.title').replace(/^\p{Emoji_Presentation}\s*/u, '')}
                        </h2>
                        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                            {tFreeWaybill('upgrade.description')}
                        </p>
                    </div>

                    <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
                        <article className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">{tFreeWaybill('upgrade.table.headers.guest')}</p>
                            <h3 className="mt-3 text-2xl font-extrabold text-white">{tFreeWaybill('upgrade.guestTitle')}</h3>

                            <div className="mt-6 divide-y divide-white/10">
                                {upgradeRows.map((row, index) => (
                                    <div key={index} className="py-4">
                                        <p className="text-xs font-semibold tracking-[0.2em] text-blue-300">{String(index + 1).padStart(2, '0')}</p>
                                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-300">{row.feature}</p>
                                        <p className="mt-1 text-lg font-bold text-white">{row.guest}</p>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://public-waybill-print.oms.storemate.cloud/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                            >
                                {tFreeWaybill('upgrade.tryNowButton')}
                            </a>
                        </article>

                        <article className="rounded-3xl border border-blue-500/40 bg-gradient-to-b from-blue-500/15 to-blue-900/10 p-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">{tFreeWaybill('upgrade.table.headers.loggedIn')}</p>
                            <h3 className="mt-3 text-2xl font-extrabold text-white">{tFreeWaybill('upgrade.loggedInTitle')}</h3>

                            <div className="mt-6 divide-y divide-blue-300/20">
                                {upgradeRows.map((row, index) => (
                                    <div key={index} className="py-4">
                                        <p className="text-xs font-semibold tracking-[0.2em] text-blue-300">{String(index + 1).padStart(2, '0')}</p>
                                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-blue-200">{row.feature}</p>
                                        <p className="mt-1 text-lg font-bold text-white">{row.loggedIn}</p>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://oms.storemate.cloud/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-400"
                            >
                                {tFreeWaybill('upgrade.registerButton')}
                            </a>
                        </article>
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

                    <div className="mx-auto mt-12 max-w-3xl space-y-4">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="cursor-pointer rounded-2xl border-2 border-gray-200 bg-white transition-all duration-200 hover:border-blue-200 hover:shadow-lg"
                            >
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between px-6 py-6 text-left sm:p-8"
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                                >
                                    <span className="flex text-lg font-semibold text-gray-900">{item.question}</span>

                                    <svg
                                        className={`ml-4 h-6 w-6 flex-shrink-0 text-gray-400 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`${openFaqIndex === index ? 'block' : 'hidden'} px-6 pb-6 sm:px-8 sm:pb-8`}>
                                    <p className="leading-relaxed text-gray-700">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            </div>
        </MainLayout>
    );
}





