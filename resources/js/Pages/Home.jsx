import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import { Head } from '@inertiajs/react';
import StoremateInfo from '@/Components/StoremateInfo';
import StoremateFeatures from '@/Components/StoremateFeatures';
import Pricing from '@/Components/Pricing';
import HowItWorks from '@/Components/HowItWorks';
import Faq from '@/Components/Faq';
import Footer from '@/Components/Footer';
import CallToAction from '@/Components/CallToAction';
import PowerOfCurfox from '@/Components/PowerOfCurfox';
import MainLayout from '@/Layouts/MainLayout';
import { useEffect } from 'react';
import HowItWorksCopy from '@/Components/HowItWorks copy';

export default function Home({ auth }) {
    useEffect(() => {
        // Handle hash navigation when page loads
        const hash = window.location.hash;
        if (hash === '#what-is-storemate-oms') {
            setTimeout(() => {
                const section = document.getElementById('what-is-storemate-oms');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // Small delay to ensure page is fully loaded
        }
    }, []);

    return (
        <MainLayout>
            <Head title="StoreMate OMS - Complete Order Management System for E-commerce">
                <meta name="description" content="StreamMate OMS helps e-commerce businesses manage orders efficiently from inquiry to delivery. Automate order processing, track shipments, and grow your online store." />
                <meta name="keywords" content="order management system, e-commerce OMS, online store management, order tracking, shipping automation, StoreMate" />
            </Head>
            <Header auth={auth} />
            <Hero />
            <HowItWorksCopy />
            <StoremateFeatures />
            <Faq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
