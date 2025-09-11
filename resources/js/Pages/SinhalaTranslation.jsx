import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import SinhalaTranslationHero from '@/Components/Sinhala Translation/SinhalaTranslationHero';
import Faq from '@/Components/Faq';
import CallToAction from '@/Components/CallToAction';
import SinhalaTranslationFeatures from '@/Components/Sinhala Translation/SinhalaTranslationFeatures';
import AutoTranslation from '@/Components/Sinhala Translation/AutoTranslation';
import MainLayout from '@/Layouts/MainLayout';

export default function SinhalaTranslation({ auth }) {
    return (
        <MainLayout>
            <Head title="Sinhala Tamil Translation - Storemate OMS" />
            <Header auth={auth} />
            <SinhalaTranslationHero auth={auth} />
            <SinhalaTranslationFeatures />
            <AutoTranslation />
            <Faq />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
