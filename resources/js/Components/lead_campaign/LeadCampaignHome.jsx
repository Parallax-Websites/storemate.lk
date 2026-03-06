import LeadCampaignHeader from '@/Components/lead_campaign/LeadCampaignHeader';
import LeadCampaignHero from '@/Components/lead_campaign/LeadCampaignHero';
import LeadCampaignProblem from '@/Components/lead_campaign/LeadCampaignProblem';
import LeadCampaignHowItWorks from '@/Components/lead_campaign/LeadCampaignHowItWorks';
import LeadCampaignBenefits from '@/Components/lead_campaign/LeadCampaignBenefits';
import LeadCampaignTestimonials from '@/Components/lead_campaign/LeadCampaignTestimonials';
import LeadCampaignFaq from '@/Components/lead_campaign/LeadCampaignFaq';
import LeadCampaignFooter from '@/Components/lead_campaign/LeadCampaignFooter';
import Pricing from '@/Components/Pricing';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function LeadCampaignHome() {
    return (
        <MainLayout>
            <Head title="StoreMate OMS — Sync 500+ Lead Form Orders to Courier in Seconds">
                <meta name="description" content="Stop wasting hours on messy Excel sheets. Automate your order workflow with StoreMate OMS — sync lead form orders to couriers in seconds & never miss a follow-up." />
                <meta name="keywords" content="order management system, lead form orders, courier sync, StoreMate OMS, e-commerce automation, Sri Lanka" />
            </Head>
            <div className="font-jakarta">
                <LeadCampaignHeader />
                <LeadCampaignHero />
                <LeadCampaignProblem />
                <LeadCampaignHowItWorks />
                <LeadCampaignBenefits />
                <LeadCampaignTestimonials />
                <div id="pricing">
                    <Pricing compact />
                </div>
                <LeadCampaignFaq />
                <LeadCampaignFooter />
            </div>
        </MainLayout>
    );
}
