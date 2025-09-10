import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import ShippingHero from '@/Components/Shipping & Packing/ShippingHero';
import Faq from '@/Components/Faq';
import CallToAction from '@/Components/CallToAction';
import OneClickCourierSync from '@/Components/Shipping & Packing/OneClickCourierSync';
import ViewSyncStatus from '@/Components/Shipping & Packing/ViewSyncStatus';
import PrintWaybills from '@/Components/Shipping & Packing/PrintWaybills';
import TrackPackageStatus from '@/Components/Shipping & Packing/TrackPackageStatus';
import MonitorDeliveryStatus from '@/Components/Shipping & Packing/MonitorDeliveryStatus';
import ShippingFeatures from '@/Components/Shipping & Packing/ShippingFeatures';
import MainLayout from '@/Layouts/MainLayout';

export default function ShippingPacking({ auth }) {
    return (
        <MainLayout>
            <Head title="Shipping & Packing - Storemate OMS" />
            <Header auth={auth} />
            <ShippingHero auth={auth} />
            <ShippingFeatures />
            <OneClickCourierSync />
            <ViewSyncStatus />
            <PrintWaybills />
            <TrackPackageStatus />
            <MonitorDeliveryStatus />
            <Faq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
