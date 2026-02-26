import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function CampaignTrialModal({ isOpen, onClose }) {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        courierCompanies: '',
        ordersPerDay: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        companyName: ''
    });
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);

    const validAreaCodes = [
        '011', '036', '031', '033', '038', '034', '054', '081',
        '051', '052', '066', '091', '041', '047', '032', '037',
        '021', '023', '024', '063', '067', '065', '026', '025',
        '027', '055', '057', '045', '035', '070', '071', '072',
        '074', '075', '077', '078'
    ];

    const validateEmail = (email) => {
        if (!email) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Please enter a valid email address';
        return '';
    };

    const validatePhoneNumber = (phone) => {
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        if (!/^\d{10}$/.test(cleanPhone)) return 'Phone number must be exactly 10 digits';
        const areaCode = cleanPhone.substring(0, 3);
        if (!validAreaCodes.includes(areaCode)) return 'Phone number must start with a valid Sri Lankan area code';
        return '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneNumber') {
            const digitsOnly = value.replace(/\D/g, '');
            if (digitsOnly.length > 10) return;
            setFormData(prev => ({ ...prev, [name]: digitsOnly }));
            setPhoneError(validatePhoneNumber(digitsOnly));
        } else if (name === 'email') {
            setFormData(prev => ({ ...prev, [name]: value }));
            setEmailError(validateEmail(value));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneValidationError = validatePhoneNumber(formData.phoneNumber);
        if (phoneValidationError) {
            setPhoneError(phoneValidationError);
            return;
        }

        const emailValidationError = validateEmail(formData.email);
        if (emailValidationError) {
            setEmailError(emailValidationError);
            return;
        }

        // Build registration URL with form data
        const params = new URLSearchParams({
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            companyName: formData.companyName,
            utm_source: 'call_campaign',
            utm_medium: 'web',
            utm_campaign: 'call_campaign_cta'
        });

        const registrationUrl = `https://welcome.oms.storemate.cloud/register?${params.toString()}`;

        // Push to GTM dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'trial_form_submit',
            formType: 'trial',
            buttonSource: 'call_campaign',
            formData: {
                courierCompanies: formData.courierCompanies,
                ordersPerDay: formData.ordersPerDay,
                fullName: formData.fullName,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                companyName: formData.companyName
            },
            registrationUrl: registrationUrl,
            timestamp: new Date().toISOString()
        });

        // Send form data to n8n webhooks
        const webhookPayload = JSON.stringify({
            courierCompanies: formData.courierCompanies,
            ordersPerDay: formData.ordersPerDay,
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            companyName: formData.companyName,
            source: 'call_campaign',
            registrationUrl: registrationUrl,
            accessedUrl: window.location.href,
            submittedAt: new Date().toISOString()
        });

        const webhookOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: webhookPayload
        };

        try {
            fetch('https://n8n.parallaxtec.dev/webhook/b3c967c3-2216-4566-9c73-5ba2c14aeec7', webhookOptions);
            fetch('https://n8n.parallaxtec.dev/webhook/d3588f6a-61c4-41e4-8913-8b3e988f63cb', webhookOptions);
            fetch('https://n8n.parallaxtec.dev/webhook/24718213-f012-4286-91c2-784190cf8c7f', webhookOptions);
            fetch('https://n8n.parallaxtec.dev/webhook/7675195b-6b4b-4b6c-a9c4-bc656b9cf7fb', webhookOptions);
            fetch('https://n8n.parallaxtec.dev/webhook/f5a416d9-e786-4b99-b944-bf4db994cc36', webhookOptions);
            fetch('https://n8n.parallaxtec.dev/webhook/8fce2cd8-768c-4411-b196-63f7883afc9c', webhookOptions);
        } catch (err) {
            console.error('Webhook error:', err);
        }

        // Show thank you screen
        setShowThankYou(true);
    };

    const handleClose = () => {
        setShowThankYou(false);
        setFormData({
            courierCompanies: '',
            ordersPerDay: '',
            fullName: '',
            phoneNumber: '',
            email: '',
            companyName: ''
        });
        setPhoneError('');
        setEmailError('');
        onClose();
    };

    const isFormValid =
        formData.courierCompanies &&
        formData.ordersPerDay &&
        formData.fullName &&
        formData.phoneNumber &&
        formData.email &&
        formData.companyName &&
        phoneError === '' &&
        emailError === '';

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-[99999] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {showThankYou ? (
                    <div className="p-8 text-center">
                        {/* Success Icon */}
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">{t('campaign.trialModal.thankYouTitle')}</h2>
                        <p className="text-gray-600 mb-2">{t('campaign.trialModal.thankYouMessage')}</p>
                        <p className="text-gray-600 mb-6">{t('campaign.trialModal.thankYouContact')}</p>
                        <div className="bg-blue-50 rounded-xl p-4 mb-6">
                            <div className="flex items-center justify-center gap-2 text-custom-blue-2">
                                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="text-sm font-semibold">{t('campaign.trialModal.thankYouReachOut')}</span>
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="px-8 py-2.5 bg-custom-blue-2 hover:bg-custom-blue-3 text-white font-semibold rounded-lg transition-colors cursor-pointer"
                        >
                            {t('campaign.trialModal.close')}
                        </button>
                    </div>
                ) : (
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">{t('campaign.trialModal.title')}</h2>
                            <p className="text-sm text-gray-500 mt-1">{t('campaign.trialModal.subtitle')}</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Courier Companies */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('campaign.trialModal.courierLabel')} <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="courierCompanies"
                                value={formData.courierCompanies}
                                onChange={handleInputChange}
                                placeholder={t('campaign.trialModal.courierPlaceholder')}
                                required
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue-2/40 focus:border-custom-blue-2 text-sm"
                            />
                        </div>

                        {/* Orders Per Month */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('campaign.trialModal.ordersLabel')} <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="ordersPerDay"
                                value={formData.ordersPerDay}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue-2/40 focus:border-custom-blue-2 text-sm"
                            >
                                <option value="">{t('campaign.trialModal.ordersPlaceholder')}</option>
                                <option value="0-100">0-100</option>
                                <option value="100-250">100-250</option>
                                <option value="250-500">250-500</option>
                                <option value="500-1,000">500-1,000</option>
                                <option value="1,000-2,000">1,000-2,000</option>
                                <option value="2,000-5,000">2,000-5,000</option>
                                <option value="5,000-10,000">5,000-10,000</option>
                                <option value="10,000-50,000">10,000-50,000</option>
                                <option value="50,000+">50,000+</option>
                            </select>
                        </div>

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('campaign.trialModal.fullNameLabel')} <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder={t('campaign.trialModal.fullNamePlaceholder')}
                                required
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue-2/40 focus:border-custom-blue-2 text-sm"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('campaign.trialModal.phoneLabel')} <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="0771234567"
                                required
                                className={`w-full px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 text-sm ${
                                    phoneError
                                        ? 'border-red-500 focus:ring-red-500/40'
                                        : 'border-gray-300 focus:ring-custom-blue-2/40 focus:border-custom-blue-2'
                                }`}
                            />
                            {phoneError && (
                                <p className="mt-1 text-xs text-red-500">{phoneError}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('campaign.trialModal.emailLabel')} <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="example@email.com"
                                required
                                className={`w-full px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 text-sm ${
                                    emailError
                                        ? 'border-red-500 focus:ring-red-500/40'
                                        : 'border-gray-300 focus:ring-custom-blue-2/40 focus:border-custom-blue-2'
                                }`}
                            />
                            {emailError && (
                                <p className="mt-1 text-xs text-red-500">{emailError}</p>
                            )}
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('campaign.trialModal.companyLabel')} <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                placeholder={t('campaign.trialModal.companyPlaceholder')}
                                required
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue-2/40 focus:border-custom-blue-2 text-sm"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 pt-2">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                                {t('campaign.trialModal.cancel')}
                            </button>
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`flex-1 px-4 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors cursor-pointer ${
                                    isFormValid
                                        ? 'bg-custom-blue-2 hover:bg-custom-blue-3'
                                        : 'bg-gray-300 cursor-not-allowed'
                                }`}
                            >
                                {t('campaign.trialModal.submit')}
                            </button>
                        </div>
                    </form>
                </div>
                )}
            </div>
        </div>
    );
}




[
  {
    "id": "409ad889-3723-4bca-a3c5-8f83b4b4b934",
    "value": "{{ $('Webhook').item.json.body.email }}"
  },

  {
    "id": "45042fdf-a459-411b-8972-e3fc8b2a5b79",
    "value": "{{ $('Webhook').item.json.body.companyName }}"
  },

  {
    "id": "1f23b48b-57fa-4b55-83ac-0c9ab784d012",
    "value": "{{ $('Code in JavaScript1').item.json.formattedPhone }}"
  },

  {
    "id": "831f2bca-099f-40e2-b119-e6590f7f2f8d",
    "value": "https://welcome.oms.storemate.cloud/register?utm_source=tiktok&utm_medium=ads&utm_campaign01_test_sale_home_page_web&utm_content=strat_free_trial"
  },


  {
    "id": "6eaa625f-d217-402d-8019-c2b01971dfff",
    "value": "https://wa.me/{{ $('Webhook').item.json.body.phoneNumber }}"
  },

  {
    "id": "e7d0d116-5e9a-477d-b121-e7a166ee3971",
    "value": "22555ecb-f7c1-4df2-87b5-b4d63d4a2bf9"
  },

  {
    "id": "5715bf89-b46a-4fd6-9986-ece92455e861",
    "value": "e4a31b5a-472d-4971-907e-5333ec0fcc2a"
  },

  {
    "id": "272285b5-454a-435b-9344-3cbe869409e7",
    "value": "Web Form Submission"
  }
]
