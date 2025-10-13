import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import InquiryHero from '@/Components/Inquiry/InquiryHero';
import InquiryChannels from '@/Components/Inquiry/InquiryChannels';
import Footer from '@/Components/Footer';
import InquiryFeatures from '@/Components/Inquiry/InquiryFeatures';
import ReduceReturns from '@/Components/Inquiry/ReduceReturns';
import DuplicateDetection from '@/Components/Inquiry/DuplicateDetection';
import Faq from '@/Components/Faq';
import CallToAction from '@/Components/CallToAction';
import MainLayout from '@/Layouts/MainLayout';
import VerifyOrders from '@/Components/Inquiry/VerifyOrders';

export default function Inquiry({ auth }) {
    return (
        <MainLayout>
            <Head title="Inquiry Management - Capture Orders from Multiple Channels | StoreMate OMS">
                <meta name="description" content="Automatically collect and manage customer inquiries from Facebook, WhatsApp, Instagram, and phone calls. Reduce duplicates and verify orders efficiently with StoreMate OMS." />
                <meta name="keywords" content="inquiry management, order capture, multi-channel orders, Facebook orders, WhatsApp orders, Instagram orders, duplicate detection" />
            </Head>
            <Header auth={auth} />

            <InquiryHero auth={auth} />
            <InquiryFeatures />
            <InquiryChannels />
            <ReduceReturns />
            <DuplicateDetection />
            <VerifyOrders />
            <Faq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
