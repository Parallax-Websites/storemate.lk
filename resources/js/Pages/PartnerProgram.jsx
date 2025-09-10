import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CallToAction from '@/Components/Partner Program/CallToAction';
import PartnerProgram from '@/Components/Partner Program/PartnerProgram';
import WhoWereLookingFor from '@/Components/Partner Program/WhoWereLookingFor';
import HowStoremateEmpowers from '@/Components/Partner Program/HowStoremateEmpowers';
import ExclusiveBenefits from '@/Components/Partner Program/ExclusiveBenefits';
import MainLayout from '@/Layouts/MainLayout';

export default function PartnerProgramPage({ auth }) {
    return (
        <MainLayout>
            <Head title="Partner Program - Storemate OMS" />
            <Header auth={auth} />

            <PartnerProgram />
            <WhoWereLookingFor />
            <HowStoremateEmpowers />
            <ExclusiveBenefits />

            <CallToAction />
            <Footer />
        </MainLayout>
    );
}
