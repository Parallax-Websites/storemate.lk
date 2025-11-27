import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import SinhalaTranslationHero from '@/Components/Sinhala Translation/SinhalaTranslationHero';
import Faq from '@/Components/Faq';
import CallToAction from '@/Components/CallToAction';
import SinhalaTranslationFeatures from '@/Components/Sinhala Translation/SinhalaTranslationFeatures';
import AutoTranslation from '@/Components/Sinhala Translation/AutoTranslation';
import MainLayout from '@/Layouts/MainLayout';
import { useRef } from 'react';

export default function SinhalaTranslation({ auth }) {
    const headerRef = useRef(null);

    return (
        <MainLayout>
            <Head title="Sinhala Tamil Translation - Storemate OMS" />
            <Header ref={headerRef} auth={auth} />
            <SinhalaTranslationHero auth={auth} />
            <SinhalaTranslationFeatures />
            <AutoTranslation />
            <Faq />
            <CallToAction onOpenTrialModal={() => headerRef.current?.openTrialModal('cta')} />
            <Footer />
        </MainLayout>
    );
}
