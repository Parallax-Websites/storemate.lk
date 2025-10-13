import { Head } from '@inertiajs/react';
import { lazy, Suspense } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import SalesHero from '@/Components/Sales Management/SalesHero';
import MainLayout from '@/Layouts/MainLayout';

// Lazy load components that are below the fold
const SalesFeatures = lazy(() => import('@/Components/Sales Management/SalesFeatures'));
const ConfirmedOrders = lazy(() => import('@/Components/Sales Management/ConfirmedOrders'));
const CourierSyncStatus = lazy(() => import('@/Components/Sales Management/Courier&SyncStatus'));
const PackingProgress = lazy(() => import('@/Components/Sales Management/PackingProgress'));
const DeliveryUpdates = lazy(() => import('@/Components/Sales Management/DeliveryUpdates'));
const Faq = lazy(() => import('@/Components/Faq'));
const CallToAction = lazy(() => import('@/Components/CallToAction'));

// Loading component for better UX
const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
);

export default function SalesManagement({ auth }) {
    return (
        <MainLayout>
            <Head title="Sales Management - Confirm & Track Orders Efficiently | StoreMate OMS">
                <meta name="description" content="Streamline your sales process with automated order confirmation, real-time courier sync, packing progress tracking, and delivery updates. Manage your entire sales pipeline in one place." />
                <meta name="keywords" content="sales management, order confirmation, courier sync, packing tracking, delivery status, order pipeline, sales automation" />
            </Head>
            <Header auth={auth} />
            <SalesHero auth={auth} />

            <Suspense fallback={<LoadingSpinner />}>
                <SalesFeatures />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <ConfirmedOrders />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <CourierSyncStatus />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <PackingProgress />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <DeliveryUpdates />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <Faq />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <CallToAction />
            </Suspense>

            <Footer />
        </MainLayout>
    );
}
