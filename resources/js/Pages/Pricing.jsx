import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Pricing from '@/Components/Pricing';
import CallToAction from '@/Components/CallToAction';
import Faq from '@/Components/Faq';
import MainLayout from '@/Layouts/MainLayout';
import TechnicalFaq from '@/Components/TechnicalFaq';

export default function PricingPage({ auth }) {
    return (
        <MainLayout>
            <Head title="Pricing - Storemate OMS" />
            <Header auth={auth} />
            <Pricing />
            <TechnicalFaq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
