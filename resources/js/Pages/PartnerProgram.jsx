import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import CallToAction from '@/Components/Partner Program/CallToAction';
import PartnerProgram from '@/Components/Partner Program/PartnerProgram';
import WhoWereLookingFor from '@/Components/Partner Program/WhoWereLookingFor';
import HowStoremateEmpowers from '@/Components/Partner Program/HowStoremateEmpowers';
import ExclusiveBenefits from '@/Components/Partner Program/ExclusiveBenefits';
import MainLayout from '@/Layouts/MainLayout';
import { usePartnerProgramTranslation } from '@/Utils/partnerProgramTranslations';

export default function PartnerProgramPage({ auth }) {
    const { tPartnerProgram } = usePartnerProgramTranslation();
    return (
        <MainLayout>
            <Head title={tPartnerProgram('partnerProgram.pageTitle')}>
                <meta name="description" content="Join StoreMate OMS Partner Program. Grow your business by helping others succeed. Earn commissions, access exclusive benefits, and be part of our success story." />
                <meta name="keywords" content="partner program, business partnership, affiliate program, reseller program, earn commissions, partner benefits" />
            </Head>
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
