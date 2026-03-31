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
import CustomerLogos from '@/Components/CustomerLogos';
import MainLayout from '@/Layouts/MainLayout';
import { useEffect, useRef } from 'react';
import HowItWorksCopy from '@/Components/HowItWorks copy';
import Hero2 from '@/Components/Hero copy 2';
import leadScoring from '@/Utils/leadScoring';
import HomeTestimonials from '@/Components/HomeTestimonials';

export default function Home({ auth }) {
    const headerRef = useRef(null);

    useEffect(() => {
        // Track home page view
        leadScoring.trackPageView('home');

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
            <Head title="Best Order Management System in Sri Lanka | StoreMate OMS">
                <meta name="description" content="Streamline your online business with StoreMate, the #1 Order Management System in Sri Lanka. Automate courier waybills, sync Facebook/WhatsApp orders, and detect duplicate customers." />
                <meta name="keywords" content="order management system, e-commerce OMS, online store management, order tracking, shipping automation, StoreMate" />
            </Head>
            <Header ref={headerRef} auth={auth} />
            <Hero onOpenTrialModal={() => headerRef.current?.openTrialModal()} />

            <HowItWorksCopy />
            <StoremateFeatures />
            <Hero2 />
<CustomerLogos />
            <HomeTestimonials />

            <Faq />
            <CallToAction onOpenTrialModal={() => headerRef.current?.openTrialModal('cta')} />
            <Footer />
        </MainLayout>
    );
}
