import { Head } from '@inertiajs/react';
import FeaturesHero from '@/Components/FeaturesHero';
import StoremateFeatures from '@/Components/StoremateFeatures';
import Footer from '@/Components/Footer';

export default function Features({ auth }) {
    return (
        <>
            <Head title="Features - Storemate OMS" />

            {/* Hero Section with Navigation */}
            <FeaturesHero />

            {/* Features Content */}
            <StoremateFeatures />

            {/* Footer */}
            <Footer />
        </>
    );
}
