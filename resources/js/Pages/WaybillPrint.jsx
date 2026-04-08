import { Head } from '@inertiajs/react';
import { useRef } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import MainLayout from '@/Layouts/MainLayout';

export default function WaybillPrint({ auth }) {
    const headerRef = useRef(null);
    const embedUrl = 'https://public-waybill-print.oms.storemate.cloud/';

    return (
        <MainLayout>
            <div className="min-h-screen bg-slate-50">
                <Head title="Waybill Print | StoreMate OMS">
                    <meta
                        name="description"
                        content="Print waybills online with StoreMate's public waybill printing tool."
                    />
                </Head>

                <Header ref={headerRef} auth={auth} />

                <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <iframe
                            src={embedUrl}
                            title="Waybill Print Tool"
                            className="h-[85vh] w-full"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </section>

                <Footer />
            </div>
        </MainLayout>
    );
}
