import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import SalesHero from '@/Components/Sales Management/SalesHero';
import SalesFeatures from '@/Components/Sales Management/SalesFeatures';
import ConfirmedOrders from '@/Components/Sales Management/ConfirmedOrders';
import Faq from '@/Components/Faq';
import CallToAction from '@/Components/CallToAction';
import CourierSyncStatus from '@/Components/Sales Management/Courier&SyncStatus';
import PackingProgress from '@/Components/Sales Management/PackingProgress';
import DeliveryUpdates from '@/Components/Sales Management/DeliveryUpdates';
import MainLayout from '@/Layouts/MainLayout';

export default function SalesManagement({ auth }) {
    return (
        <MainLayout>
            <Head title="Sales Management - Storemate OMS" />
            <Header auth={auth} />
            <SalesHero auth={auth} />
            <SalesFeatures />
            <ConfirmedOrders />
            <CourierSyncStatus />
            <PackingProgress />
            <DeliveryUpdates />
            <Faq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
