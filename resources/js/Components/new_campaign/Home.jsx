import CampaignHeader from '@/Components/new_campaign/CampaignHeader';
import CampaignHero from '@/Components/new_campaign/CampaignHero';
import { Head } from '@inertiajs/react';
import StoremateFeatures from '@/Components/StoremateFeatures';
import HowItWorksCopy from '@/Components/HowItWorks copy';
import Hero2 from '@/Components/Hero copy 2';
import Faq from '@/Components/Faq';
import CampaignCallToAction from '@/Components/new_campaign/CampaignCallToAction';
import CampaignFooter from '@/Components/new_campaign/CampaignFooter';
import MainLayout from '@/Layouts/MainLayout';

export default function CampaignHome() {
    return (
        <MainLayout>
            <Head title="StoreMate OMS - Call Our Expert for FREE | 077 699 3472">
                <meta name="description" content="Talk to our expert for FREE. Reduce returns, stop fake orders, and sync couriers — all with Storemate OMS. Call 077 699 3472 today!" />
                <meta name="keywords" content="order management system, e-commerce OMS, Storemate, call campaign, free consultation, 077 699 3472" />
            </Head>
            <CampaignHeader />
            <CampaignHero />
            <HowItWorksCopy />
            <StoremateFeatures />
            <Hero2 />
            <Faq />
            <CampaignCallToAction />
            <CampaignFooter />
        </MainLayout>
    );
}
