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

export default function Inquiry({ auth }) {
    return (
        <MainLayout>
            <Head title="Inquiry Management - Storemate OMS" />
            <Header auth={auth} />

            <InquiryHero auth={auth} />
            <InquiryFeatures />
            <InquiryChannels />
            <ReduceReturns />
            <DuplicateDetection />
            <Faq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
