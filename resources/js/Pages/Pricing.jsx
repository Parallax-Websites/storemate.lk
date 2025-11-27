import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Pricing from '@/Components/Pricing';
import CallToAction from '@/Components/CallToAction';
import Faq from '@/Components/Faq';
import MainLayout from '@/Layouts/MainLayout';
import TechnicalFaq from '@/Components/TechnicalFaq';
import { useRef } from 'react';

export default function PricingPage({ auth }) {
    const headerRef = useRef(null);

    return (
        <MainLayout>
            <Head title="Pricing - Affordable Plans for Every Business | StoreMate OMS">
                <meta name="description" content="Choose the perfect StoreMate OMS plan for your business. Flexible pricing for startups to enterprises. Start free and scale as you grow. Transparent pricing with no hidden fees." />
                <meta name="keywords" content="OMS pricing, order management pricing, e-commerce software pricing, affordable OMS, pricing plans, business plans" />
            </Head>
            <Header ref={headerRef} auth={auth} />
            <Pricing onOpenTrialModal={() => headerRef.current?.openTrialModal('card')} />
            <TechnicalFaq />
            <CallToAction onOpenTrialModal={() => headerRef.current?.openTrialModal('cta')} />
            <Footer />
        </MainLayout>
    );
}
