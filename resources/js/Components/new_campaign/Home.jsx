import CampaignHeader from '@/Components/new_campaign/CampaignHeader';
import CampaignHero from '@/Components/new_campaign/CampaignHero';
import { Head } from '@inertiajs/react';
import StoremateFeatures from '@/Components/StoremateFeatures';
import HowItWorksCopy from '@/Components/HowItWorks copy';
import Hero2 from '@/Components/Hero copy 2';
import Faq from '@/Components/Faq';
import CampaignCallToAction from '@/Components/new_campaign/CampaignCallToAction';
import CampaignFooter from '@/Components/new_campaign/CampaignFooter';
import CampaignTrialModal from '@/Components/new_campaign/CampaignTrialModal';
import MainLayout from '@/Layouts/MainLayout';
import { useState } from 'react';
import Pricing from '../Pricing';

export default function CampaignHome() {
    const [showTrialModal, setShowTrialModal] = useState(false);
    const openTrialForm = () => setShowTrialModal(true);

    return (
        <MainLayout>
            <Head title="StoreMate OMS - Contact Us | Start Your Free Trial">
                <meta name="description" content="Contact us today. Reduce returns, stop fake orders, and sync couriers — all with Storemate OMS. Start your free trial now!" />
                <meta name="keywords" content="order management system, e-commerce OMS, Storemate, contact us, free trial, free consultation" />
            </Head>
            <CampaignHeader onOpenTrialForm={openTrialForm} />
            <div id="hero">
                <CampaignHero onOpenTrialForm={openTrialForm} />
            </div>
            <div id="how-it-works">
                <HowItWorksCopy />
            </div>
            <div id="features">
                <StoremateFeatures />
            </div>
            <div id="demo">
                <Hero2 />
            </div>
            <div id="pricing">
                <Pricing onOpenTrialModal={openTrialForm} />
            </div>
            <div id="faq">
                <Faq />
            </div>
            <div id="contact">
                <CampaignCallToAction onOpenTrialForm={openTrialForm} />
            </div>
            <CampaignFooter onOpenTrialForm={openTrialForm} />
            <CampaignTrialModal
                isOpen={showTrialModal}
                onClose={() => setShowTrialModal(false)}
            />
        </MainLayout>
    );
}
