import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import FeaturesDropdown from '@/Components/FeaturesDropdown';
import LanguageSelector from '@/Components/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import leadScoring from '@/Utils/leadScoring';

const Header = forwardRef(({ auth }, ref) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showingMobileFeaturesDropdown, setShowingMobileFeaturesDropdown] = useState(false);
    const [showingMobileMoreDropdown, setShowingMobileMoreDropdown] = useState(false);
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [showTrialModal, setShowTrialModal] = useState(false);
    const [showTrialThankYou, setShowTrialThankYou] = useState(false);
    const [showDemoThankYou, setShowDemoThankYou] = useState(false);
    const [trialRedirectUrl, setTrialRedirectUrl] = useState('');
    const [demoRedirectUrl, setDemoRedirectUrl] = useState('');
    const [countdown, setCountdown] = useState(5);
    const [demoCountdown, setDemoCountdown] = useState(5);
    const [trialButtonSource, setTrialButtonSource] = useState('header'); // 'header' or 'hero'
    const [formData, setFormData] = useState({
        courierCompanies: '',
        ordersPerDay: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        companyName: ''
    });
    const [trialFormData, setTrialFormData] = useState({
        courierCompanies: '',
        ordersPerDay: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        companyName: ''
    });
    const { t } = useTranslation();

    // Expose openTrialModal method to parent components
    useImperativeHandle(ref, () => ({
        openTrialModal: (source = 'hero') => {
            setTrialButtonSource(source);
            setShowTrialModal(true);
        }
    }));

    // Countdown timer for trial thank you modal
    useEffect(() => {
        let timer;
        if (showTrialThankYou && countdown > 0) {
            timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
        } else if (showTrialThankYou && countdown === 0) {
            // Auto redirect when countdown reaches 0
            handleTrialRedirect();
        }
        return () => clearTimeout(timer);
    }, [showTrialThankYou, countdown]);

    // Countdown timer for demo thank you modal
    useEffect(() => {
        let timer;
        if (showDemoThankYou && demoCountdown > 0) {
            timer = setTimeout(() => {
                setDemoCountdown(demoCountdown - 1);
            }, 1000);
        } else if (showDemoThankYou && demoCountdown === 0) {
            // Auto redirect when countdown reaches 0
            handleDemoRedirect();
        }
        return () => clearTimeout(timer);
    }, [showDemoThankYou, demoCountdown]);

    const handleTrialRedirect = () => {
        if (trialRedirectUrl) {
            window.open(trialRedirectUrl, '_blank');
            setShowTrialThankYou(false);
            setCountdown(5); // Reset countdown
            setTrialRedirectUrl('');
        }
    };

    const handleDemoRedirect = () => {
        if (demoRedirectUrl) {
            window.open(demoRedirectUrl, '_blank');
            setShowDemoThankYou(false);
            setDemoCountdown(5); // Reset countdown
            setDemoRedirectUrl('');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTrialInputChange = (e) => {
        const { name, value } = e.target;
        setTrialFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDemoSubmit = (e) => {
        e.preventDefault();

        // Track Demo Requested
        leadScoring.trackAction('Demo Requested');

        // Calculate normalized score (totalScore / 39.4, rounded to nearest integer)
        const totalScore = leadScoring.totalScore;
        const normalizedScore = Math.round(totalScore / 39.4);

        // Fixed demo login URL
        const loginUrl = 'https://oms.storemate.cloud/login?businessName=storemateoms&loginEmail=smdemo@gmail.com&password=PSP2F*uPCIxl';

        // Prepare data to send to webhooks - include the demo login URL
        const demoData = {
            courierCompanies: formData.courierCompanies,
            ordersPerDay: formData.ordersPerDay,
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            companyName: formData.companyName,
            timestamp: new Date().toISOString(),
            loginUrl: loginUrl,
            leadScore: totalScore,
            normalizedScore: normalizedScore,
            leadCategory: leadScoring.getLeadCategory()
        };

        console.log('Sending demo data to webhooks:', demoData);
        console.log('Login URL:', loginUrl);

        // Send data to both n8n and Zapier webhooks in parallel
        const n8nWebhook = fetch('https://storemateoms.app.n8n.cloud/webhook/f8df809e-732a-420d-824d-8ca58f8ed85f', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(demoData)
        })
        .then(response => {
            console.log('n8n Response status:', response.status);
            if (response.ok) {
                console.log('✅ Demo signup data sent successfully to n8n');
            } else {
                console.error('❌ n8n Error:', response.statusText);
            }
            return response;
        })
        .catch(error => {
            console.error('❌ Error sending to n8n:', error);
        });

        const zapierWebhook = fetch('https://hooks.zapier.com/hooks/catch/11465938/ukomrvd/', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                courierCompanies: formData.courierCompanies,
                ordersPerDay: formData.ordersPerDay,
                fullName: formData.fullName,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                companyName: formData.companyName,
                timestamp: new Date().toISOString(),
                loginUrl: loginUrl
            })
        })
        .then(response => {
            console.log('✅ Demo signup data sent to Zapier (no-cors mode)');
            return response;
        })
        .catch(error => {
            console.error('❌ Error sending to Zapier:', error);
        });

        const makeWebhook = fetch('https://hook.eu1.make.com/sypxt3t1jmfhljjpcf5mnp3aoofeyoln', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(demoData)
        })
        .then(response => {
            console.log('Make.com Response status:', response.status);
            if (response.ok) {
                console.log('✅ Demo signup data sent successfully to Make.com');
            } else {
                console.error('❌ Make.com Error:', response.statusText);
            }
            return response;
        })
        .catch(error => {
            console.error('❌ Error sending to Make.com:', error);
        });

        // Wait for all webhooks to complete, then redirect
        Promise.allSettled([n8nWebhook, zapierWebhook, makeWebhook])
        .then(() => {
            console.log('✅ All webhooks processed');

            // Set the redirect URL and show thank you modal
            const loginUrl = 'https://oms.storemate.cloud/login?businessName=storemateoms&loginEmail=smdemo@gmail.com&password=PSP2F*uPCIxl&utm_source=storemate_lk&utm_medium=email&utm_campaign=demo_account_details_email';
            setDemoRedirectUrl(loginUrl);
            setShowDemoModal(false);
            setShowDemoThankYou(true);
            setDemoCountdown(5); // Reset countdown to 5 seconds

            // Reset form
            setFormData({
                courierCompanies: '',
                ordersPerDay: '',
                fullName: '',
                phoneNumber: '',
                email: '',
                companyName: ''
            });
        });
    };

    const handleTrialSubmit = (e) => {
        e.preventDefault();

        // Track Trial Started
        leadScoring.trackAction('Trial Started');

        // Get current page for UTM source
        const currentPath = route().current();
        let utmSource = '';
        const buttonType = trialButtonSource; // 'header' or 'hero'

        // Check for module routes
        if (currentPath && (currentPath.startsWith('module.') || currentPath.startsWith('module-'))) {
            const moduleNumber = currentPath.includes('.')
                ? currentPath.split('.')[1]
                : currentPath.split('-')[1];
            utmSource = `btn_start_a_free_trial_${buttonType}_module${moduleNumber}`;
        } else {
            // Map other routes
            const utmSourceMap = {
                'home': `btn_start_a_free_trial_${buttonType}_home`,
                'pricing': `btn_start_a_free_trial_${buttonType}_pricing`,
                'inquiry': `btn_start_a_free_trial_${buttonType}_inquiry`,
                'sales.management': `btn_start_a_free_trial_${buttonType}_sales`,
                'shipping.packing': `btn_start_a_free_trial_${buttonType}_shipping&packing`,
                'user.contact.product': `btn_start_a_free_trial_${buttonType}_user&product`,
                'about': `btn_start_a_free_trial_${buttonType}_about`,
                'free.course': `btn_start_a_free_trial_${buttonType}_courses`,
                'contact.us': `btn_start_a_free_trial_${buttonType}_contact`,
                'partner.program': `btn_start_a_free_trial_${buttonType}_partner`,
                'privacy.policy': `btn_start_a_free_trial_${buttonType}_privacy&policy`
            };
            utmSource = utmSourceMap[currentPath] || `btn_start_a_free_trial_${buttonType}_home`;
        }

        // Create URL with form data as query parameters and dynamic UTM source
        const params = new URLSearchParams({
            fullName: trialFormData.fullName,
            phoneNumber: trialFormData.phoneNumber,
            email: trialFormData.email,
            companyName: trialFormData.companyName,
            utm_source: utmSource
        });

        const registrationUrl = `https://welcome.oms.storemate.cloud/register?${params.toString()}`;

        // Calculate normalized score (totalScore / 39.4, rounded to nearest integer)
        const totalScore = leadScoring.totalScore;
        const normalizedScore = Math.round(totalScore / 39.4);

        // Prepare data to send to webhooks
        const trialData = {
            courierCompanies: trialFormData.courierCompanies,
            ordersPerDay: trialFormData.ordersPerDay,
            fullName: trialFormData.fullName,
            phoneNumber: trialFormData.phoneNumber,
            email: trialFormData.email,
            companyName: trialFormData.companyName,
            timestamp: new Date().toISOString(),
            registrationUrl: registrationUrl,
            utmSource: utmSource,
            leadScore: totalScore,
            normalizedScore: normalizedScore,
            leadCategory: leadScoring.getLeadCategory()
        };

        console.log('Sending trial data to webhooks:', trialData);
        console.log('Registration URL:', registrationUrl);

        // Send data to both n8n and Zapier webhooks in parallel
        const n8nWebhook = fetch('https://storemateoms.app.n8n.cloud/webhook/f8df809e-732a-420d-824d-8ca58f8ed85f', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(trialData)
        })
        .then(response => {
            console.log('n8n Response status:', response.status);
            if (response.ok) {
                console.log('✅ Trial signup data sent successfully to n8n');
            } else {
                console.error('❌ n8n Error:', response.statusText);
            }
            return response;
        })
        .catch(error => {
            console.error('❌ Error sending to n8n:', error);
        });

        const zapierWebhook = fetch('https://hooks.zapier.com/hooks/catch/11465938/uz82iuk/', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(trialData)
        })
        .then(response => {
            console.log('✅ Trial signup data sent to Zapier (no-cors mode)');
            return response;
        })
        .catch(error => {
            console.error('❌ Error sending to Zapier:', error);
        });

        const makeWebhook = fetch('https://hook.eu1.make.com/7pg5oiucajn3zqla49eqxrh8j5ngfi8v', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: trialFormData.fullName,
                phoneNumber: trialFormData.phoneNumber,
                email: trialFormData.email,
                companyName: trialFormData.companyName,
                redirectUrl: registrationUrl,
                leadScore: totalScore,
                normalizedScore: normalizedScore,
                leadCategory: leadScoring.getLeadCategory(),
                timestamp: new Date().toISOString()
            })
        })
        .then(response => {
            console.log('Make.com Response status:', response.status);
            if (response.ok) {
                console.log('✅ Trial signup data sent successfully to Make.com');
            } else {
                console.error('❌ Make.com Error:', response.statusText);
            }
            return response;
        })
        .catch(error => {
            console.error('❌ Error sending to Make.com:', error);
        });

        // Wait for all webhooks to complete, then redirect
        Promise.allSettled([n8nWebhook, zapierWebhook, makeWebhook])
        .then(() => {
            console.log('✅ All webhooks processed');
            console.log('Redirecting to registration with params:', params.toString());

            // Store the redirect URL and show thank you page
            setTrialRedirectUrl(registrationUrl);
            setShowTrialModal(false);
            setShowTrialThankYou(true);
            setCountdown(5); // Reset countdown to 5 seconds

            // Reset form
            setTrialFormData({
                courierCompanies: '',
                ordersPerDay: '',
                fullName: '',
                phoneNumber: '',
                email: '',
                companyName: ''
            });
        });
    };

    // Helper to compute a page-specific id for Start Free Trial buttons
    const getStartTrialId = (buttonType = 'header') => {
        const currentPath = route().current();

        // Module routes
        if (currentPath && (currentPath.startsWith('module.') || currentPath.startsWith('module-'))) {
            const moduleNumber = currentPath.includes('.')
                ? currentPath.split('.')[1]
                : currentPath.split('-')[1];
            return `btn_start_a_free_trial_${buttonType}_module${moduleNumber}`;
        }

        const idMap = {
            'home': 'home',
            'pricing': 'pricing',
            'inquiry': 'inquiry',
            'sales.management': 'sales',
            'shipping.packing': 'shipping',
            'user.contact.product': 'user',
            'about': 'about',
            'free.course': 'courses',
            'contact.us': 'contactus',
            'partner.program': 'partner',
            'privacy.policy': 'privacy_policy'
        };

        const pageKey = idMap[currentPath] || 'home';
        return `btn_start_a_free_trial_${buttonType}_${pageKey}`;
    };

    // Helper to compute a page-specific id for Try Live Demo buttons
    const getTryDemoId = (buttonType = 'header') => {
        const currentPath = route().current();

        // Module routes
        if (currentPath && (currentPath.startsWith('module.') || currentPath.startsWith('module-'))) {
            const moduleNumber = currentPath.includes('.')
                ? currentPath.split('.')[1]
                : currentPath.split('-')[1];
            return `btn_try_live_demo_${buttonType}_module${moduleNumber}`;
        }

        const idMap = {
            'home': 'home',
            'pricing': 'pricing',
            'inquiry': 'inquiry',
            'sales.management': 'sales',
            'shipping.packing': 'shipping',
            'user.contact.product': 'user',
            'about': 'about',
            'free.course': 'courses',
            'contact.us': 'contactus',
            'partner.program': 'partner',
            'privacy.policy': 'privacy_policy'
        };

        const pageKey = idMap[currentPath] || 'home';
        return `btn_try_live_demo_${buttonType}_${pageKey}`;
    };

    const getRegisterUrl = () => {
        const currentPath = route().current();

        // Check for module routes (handles both module.1 and module-1 formats)
        if (currentPath && (currentPath.startsWith('module.') || currentPath.startsWith('module-'))) {
            const moduleNumber = currentPath.includes('.')
                ? currentPath.split('.')[1]
                : currentPath.split('-')[1];
            return `https://welcome.oms.storemate.cloud/register?utm_source=storemate_lk&utm_medium=web&utm_campaign=module${moduleNumber}_page&utm_content=btn_start_a_free_trial_header`;
        }

        const campaignMap = {
            'home': 'home_page',
            'pricing': 'pricing_page',
            'inquiry': 'inquiry_page',
            'sales.management': 'sales_page',
            'shipping.packing': 'shipping&packing_page',
            'user.contact.product': 'user&product_page',
            'about': 'about_page',
            'free.course': 'courses_page',
            'contact.us': 'contact_page',
            'partner.program': 'partner_page',
            'privacy.policy': 'privacy&policy_page'
        };

        const campaign = campaignMap[currentPath] || 'home_page';
        return `https://welcome.oms.storemate.cloud/register?utm_source=storemate_lk&utm_medium=web&utm_campaign=${campaign}&utm_content=btn_start_a_free_trial_header`;
    };

    return (
        <nav className="sticky top-0 shadow-sm bg-white z-[9999]">
            <div className="relative max-w-none">
                {/* Main content container - standard max-width */}
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 relative">
                    <div className="flex h-24 items-center justify-between">
                        {/* Main Navigation Content */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/home">
                                    <img src="/oms-v1.png" alt="Logo" className="block h-16 w-auto" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-6">
                                    <NavLink href={route('home')} active={route().current('home')} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                        {t('nav.home')}
                                    </NavLink>
                                    <FeaturesDropdown onOpenTrialModal={(source) => {
                                        setTrialButtonSource(source);
                                        setShowTrialModal(true);
                                    }} />
                                    <NavLink href={route('pricing')} active={route().current('pricing')} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                        {t('nav.pricing')}
                                    </NavLink>
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer">
                                                {t('nav.more')}
                                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            <a
                                                href={route('about')}
                                                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                            >
                                                {t('nav.about')}
                                            </a>
                                            <a
                                                href={route('free.course')}
                                                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                            >
                                                {t('nav.freeCourse')}
                                            </a>
                                            <a
                                                href={route('contact.us')}
                                                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                            >
                                                {t('nav.contact')}
                                            </a>
                                            <a
                                                href={route('partner.program')}
                                                className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                            >
                                                {t('nav.partnerProgram')}
                                            </a>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:flex sm:items-center sm:space-x-4">
                                <LanguageSelector />
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none cursor-pointer">
                                            {t('nav.login')}
                                        </span>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <a
                                            href="https://oms.storemate.cloud/login"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                        >
                                            Login to OMS
                                        </a>
                                        <a
                                            href="https://app.storemate.cloud/login"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                        >
                                            Login to POS (Lite)
                                        </a>
                                        <a
                                            href="https://app.storematepro.lk/login"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                        >
                                            Login to POS (Pro)
                                        </a>
                                    </Dropdown.Content>
                                </Dropdown>
                                <a
                                    id={getStartTrialId('header')}
                                    onClick={() => {
                                        setTrialButtonSource('header');
                                        setShowTrialModal(true);
                                    }}
                                    className="inline-flex items-center justify-center rounded-md border border-custom-blue-2 px-4 py-2 text-base font-bold text-custom-blue-2 hover:bg-gray-50 cursor-pointer"
                                >
                                    {t('nav.startFreeTrial')}
                                </a>
                                <a
                                    id={getTryDemoId('header')}
                                    onClick={() => setShowDemoModal(true)}
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-custom-blue-2 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-custom-blue-3 cursor-pointer"
                                >
                                    Try Live Demo
                                </a>
                            </div>

                            {/* Mobile Menu */}
                            <div className="flex items-center space-x-2 sm:hidden">
                                <LanguageSelector />
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="pt-2 pb-3 space-y-1">
                    <NavLink href={route('home')} active={route().current('home')} block="true">
                        {t('nav.home')}
                    </NavLink>
                    <NavLink href={route('pricing')} active={route().current('pricing')} block="true">
                        {t('nav.pricing')}
                    </NavLink>

                    {/* Mobile Features Dropdown */}
                    <div>
                        <button
                            onClick={() => setShowingMobileFeaturesDropdown((previousState) => !previousState)}
                            className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 focus:outline-none focus:text-gray-800 focus:bg-gray-50 transition duration-150 ease-in-out"
                        >
                            <span>{t('nav.features')}</span>
                            <svg
                                className={`h-4 w-4 transition-transform duration-200 ${showingMobileFeaturesDropdown ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {showingMobileFeaturesDropdown && (
                            <div className="pl-8 pb-2 space-y-1">
                                <NavLink href="/inquiry" block="true" className="text-sm">
                                    Inquiry
                                </NavLink>
                                <NavLink href={route('sales.management')} active={route().current('sales.management')} block="true" className="text-sm">
                                    Sales Management
                                </NavLink>
                                <NavLink href={route('shipping.packing')} active={route().current('shipping.packing')} block="true" className="text-sm">
                                    Shipping & Packing
                                </NavLink>
                                <NavLink href={route('user.contact.product')} active={route().current('user.contact.product')} block="true" className="text-sm">
                                    User, Contact, Product
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* Mobile More Dropdown */}
                    <div>
                        <button
                            onClick={() => setShowingMobileMoreDropdown((previousState) => !previousState)}
                            className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 focus:outline-none focus:text-gray-800 focus:bg-gray-50 transition duration-150 ease-in-out"
                        >
                            <span>{t('nav.more')}</span>
                            <svg
                                className={`h-4 w-4 transition-transform duration-200 ${showingMobileMoreDropdown ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {showingMobileMoreDropdown && (
                            <div className="pl-8 pb-2 space-y-1">
                                <NavLink href={route('about')} active={route().current('about')} block="true" className="text-sm">
                                    {t('nav.about')}
                                </NavLink>
                                <NavLink href={route('free.course')} active={route().current('free.course')} block="true" className="text-sm">
                                    {t('nav.freeCourse')}
                                </NavLink>
                                <NavLink href={route('contact.us')} active={route().current('contact.us')} block="true" className="text-sm">
                                    {t('nav.contact')}
                                </NavLink>
                                <NavLink href={route('partner.program')} active={route().current('partner.program')} block="true" className="text-sm">
                                    {t('nav.partnerProgram')}
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="mt-3 space-y-1">
                        {/* Mobile Login Options */}
                        <div className="px-4 py-2">
                            <div className="font-medium text-base text-gray-800 mb-2">{t('nav.login')} Options</div>
                            <div className="space-y-2">
                                <a
                                    href="https://oms.storemate.cloud/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded"
                                >
                                    Login to OMS
                                </a>
                                <a
                                    href="https://app.storemate.cloud/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded"
                                >
                                    Login to POS (Lite)
                                </a>
                                <a
                                    href="https://app.storematepro.lk/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded"
                                >
                                    Login to POS (Pro)
                                </a>
                            </div>
                        </div>

                        <a
                            id={getStartTrialId('header')}
                            onClick={() => {
                                setTrialButtonSource('header');
                                setShowTrialModal(true);
                            }}
                            className="block mx-4 mt-4 px-4 py-2 text-center font-bold text-custom-blue-2 border-2 border-custom-blue-2 hover:bg-gray-50 rounded-md cursor-pointer"
                        >
                            {t('nav.startFreeTrial')}
                        </a>
                        <a
                            id={getTryDemoId('header')}
                            onClick={() => setShowDemoModal(true)}
                            className="block mx-4 mt-3 px-4 py-2 text-center font-bold text-white bg-custom-blue-2 hover:bg-custom-blue-3 rounded-md cursor-pointer"
                        >
                            Try Live Demo
                        </a>
                    </div>
                </div>
            </div>

            {/* Demo Modal */}
            {showDemoModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                        <div className="p-6">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Try Live Demo</h2>
                                <p className="text-sm text-gray-600">Please provide your details to access the demo</p>
                            </div>

                            <form onSubmit={handleDemoSubmit} className="space-y-4">
                                {/* Courier Companies */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        ඔබගේ orders යවන courier companies වල නම් <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="courierCompanies"
                                        value={formData.courierCompanies}
                                        onChange={handleInputChange}
                                        placeholder="Enter courier company names"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Orders Per Day */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        කොපමණ orders ගණනක් දිනකට යවනවද <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="ordersPerDay"
                                        value={formData.ordersPerDay}
                                        onChange={handleInputChange}
                                        placeholder="Enter number of orders per day"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Company Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Company name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your company name"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowDemoModal(false)}
                                        className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2 text-sm font-medium text-white bg-custom-blue-2 rounded-md hover:bg-custom-blue-3 transition-colors"
                                    >
                                        Continue to Demo
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Free Trial Modal */}
            {showTrialModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                        <div className="p-6">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Free Trial</h2>
                                <p className="text-sm text-gray-600">Please provide your details to create your account</p>
                            </div>

                            <form onSubmit={handleTrialSubmit} className="space-y-4">
                                {/* Courier Companies */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        ඔබගේ orders යවන courier companies වල නම් <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="courierCompanies"
                                        value={trialFormData.courierCompanies}
                                        onChange={handleTrialInputChange}
                                        placeholder="Enter courier company names"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Orders Per Day */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        කොපමණ orders ගණනක් දිනකට යවනවද <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="ordersPerDay"
                                        value={trialFormData.ordersPerDay}
                                        onChange={handleTrialInputChange}
                                        placeholder="Enter number of orders per day"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={trialFormData.fullName}
                                        onChange={handleTrialInputChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={trialFormData.phoneNumber}
                                        onChange={handleTrialInputChange}
                                        placeholder="Enter your phone number"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={trialFormData.email}
                                        onChange={handleTrialInputChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Company Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Company name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={trialFormData.companyName}
                                        onChange={handleTrialInputChange}
                                        placeholder="Enter your company name"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-blue-2"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowTrialModal(false)}
                                        className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2 text-sm font-medium text-white bg-custom-blue-2 rounded-md hover:bg-custom-blue-3 transition-colors"
                                    >
                                        Start Free Trial
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Free Trial Thank You Modal */}
            {showTrialThankYou && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                                <p className="text-gray-600 mb-4">
                                    Your free trial request has been submitted successfully.
                                </p>
                                <div className="text-custom-blue-2 font-semibold text-lg">
                                    Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <button
                                    onClick={handleTrialRedirect}
                                    className="w-full px-6 py-2 text-sm font-medium text-white bg-custom-blue-2 rounded-md hover:bg-custom-blue-3 transition-colors"
                                >
                                    Continue Now
                                </button>
                                <button
                                    onClick={() => {
                                        setShowTrialThankYou(false);
                                        setCountdown(5);
                                        setTrialRedirectUrl('');
                                    }}
                                    className="w-full px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Demo Thank You Modal */}
            {showDemoThankYou && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                                <p className="text-gray-600 mb-4">
                                    Your demo request has been submitted successfully.
                                </p>
                                <div className="text-custom-blue-2 font-semibold text-lg">
                                    Redirecting to demo in {demoCountdown} second{demoCountdown !== 1 ? 's' : ''}...
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <button
                                    onClick={handleDemoRedirect}
                                    className="w-full px-6 py-2 text-sm font-medium text-white bg-custom-blue-2 rounded-md hover:bg-custom-blue-3 transition-colors"
                                >
                                    Continue Now
                                </button>
                                <button
                                    onClick={() => {
                                        setShowDemoThankYou(false);
                                        setDemoCountdown(5);
                                        setDemoRedirectUrl('');
                                    }}
                                    className="w-full px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
});

export default Header;
