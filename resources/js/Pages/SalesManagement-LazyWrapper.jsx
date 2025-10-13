import { Head } from '@inertiajs/react';
import { lazy } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import SalesHero from '@/Components/Sales Management/SalesHero';
import MainLayout from '@/Layouts/MainLayout';
import LazyWrapper from '@/Components/LazyWrapper';

// Lazy load heavy components
const SalesFeatures = lazy(() => import('@/Components/Sales Management/SalesFeatures'));
const ConfirmedOrders = lazy(() => import('@/Components/Sales Management/ConfirmedOrders'));
const CourierSyncStatus = lazy(() => import('@/Components/Sales Management/Courier&SyncStatus'));
const PackingProgress = lazy(() => import('@/Components/Sales Management/PackingProgress'));
const DeliveryUpdates = lazy(() => import('@/Components/Sales Management/DeliveryUpdates'));
const Faq = lazy(() => import('@/Components/Faq'));
const CallToAction = lazy(() => import('@/Components/CallToAction'));

// Custom loading components for different sections
const SectionLoader = ({ height = "h-64" }) => (
    <div className={`${height} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-lg`}>
        <div className="flex items-center justify-center h-full">
            <div className="text-gray-400">Loading...</div>
        </div>
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

            {/* Lazy load components with intersection observer */}
            <LazyWrapper
                component={SalesFeatures}
                fallback={<SectionLoader height="h-96" />}
                lazyOptions={{ rootMargin: '100px 0px' }}
            />

            <LazyWrapper
                component={ConfirmedOrders}
                fallback={<SectionLoader height="h-80" />}
                lazyOptions={{ rootMargin: '50px 0px' }}
            />

            <LazyWrapper
                component={CourierSyncStatus}
                fallback={<SectionLoader height="h-72" />}
                lazyOptions={{ rootMargin: '50px 0px' }}
            />

            <LazyWrapper
                component={PackingProgress}
                fallback={<SectionLoader height="h-80" />}
                lazyOptions={{ rootMargin: '50px 0px' }}
            />

            <LazyWrapper
                component={DeliveryUpdates}
                fallback={<SectionLoader height="h-72" />}
                lazyOptions={{ rootMargin: '50px 0px' }}
            />

            <LazyWrapper
                component={Faq}
                fallback={<SectionLoader height="h-96" />}
                lazyOptions={{ rootMargin: '0px 0px' }}
            />

            <LazyWrapper
                component={CallToAction}
                fallback={<SectionLoader height="h-48" />}
                lazyOptions={{ rootMargin: '0px 0px' }}
            />

            <Footer />
        </MainLayout>
    );
}
