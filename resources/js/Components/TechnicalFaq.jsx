import React, { useState } from 'react';

const TechnicalFaq = () => {
    const [technicalFaq, setTechnicalFaq] = useState([
        {
            question: 'What is an enquiry?',
            answer: 'An enquiry is a potential customer inquiry or lead that comes through your social media channels (Facebook, WhatsApp, Instagram) or phone calls.<br><br>In Storemate OMS, enquiries are the first step in your sales process — they help you track and follow up with potential customers before they become actual orders.',
            open: false
        },
        {
            question: 'What COD sync means?',
            answer: 'COD (Cash on Delivery) sync means automatic synchronization of COD payment status with your courier service.<br><br>When your courier partner (like Royal Express) collects payment from customers, the payment status automatically updates in your Storemate OMS dashboard — no manual updates needed.',
            open: false
        },
        {
            question: 'What is a business location?',
            answer: 'A business location is a physical address or warehouse where you store and dispatch your products.<br><br>You can set up multiple business locations in Storemate OMS if you have warehouses in different cities or areas, helping you manage inventory and shipping more efficiently.',
            open: false
        },
        {
            question: 'Can I choose which delivery company I need to sync with?',
            answer: 'Yes, absolutely.<br><br>Storemate OMS currently integrates with Royal Express and Trans Express Service Lanka. You can choose which courier service to use for each order.<br><br>We can also integrate additional courier services based on your business requirements.',
            open: false
        },
        {
            question: 'What is a WhatsApp form?',
            answer: 'A WhatsApp form is a structured message template that customers can fill out directly in WhatsApp to place orders.<br><br>It helps you collect customer details, product preferences, and delivery information in an organized way, making order processing faster and more accurate.',
            open: false
        },
        {
            question: 'Why I need a dedicated server?',
            answer: 'A dedicated server ensures better performance, security, and customization for your business.<br><br>Benefits include:<br>• Faster loading times for your team<br>• Enhanced data security<br>• Custom features specific to your business<br>• Better uptime and reliability<br>• Dedicated support',
            open: false
        },
        {
            question: 'What are the customisations?',
            answer: 'Storemate OMS offers various customizations including:<br><br>• Custom order forms and fields<br>• Branded invoices and waybills<br>• Integration with your existing systems<br>• Custom reporting and analytics<br>• Workflow automation specific to your business<br>• Custom courier integrations',
            open: false
        },
        {
            question: 'What if I have more than 05 business locations?',
            answer: 'No problem at all.<br><br>Storemate OMS can handle unlimited business locations. Each additional location can be set up with its own inventory management, staff access, and shipping preferences.<br><br>Contact our team to discuss enterprise pricing for multiple locations.',
            open: false
        }
    ]);

    const toggleTechnicalFaq = (index) => {
        setTechnicalFaq(technicalFaq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Subtitle with same style as other sections */}
                    <div className="mb-4">
                        <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                            color: '#006daf',
                            backgroundColor: '#ffe6daff'
                        }}>
                            TECHNICAL SUPPORT
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        Technical Questions & Answers
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get detailed answers about Storemate OMS features and technical aspects
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {technicalFaq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-blue-200 hover:shadow-lg">
                            <button type="button" className="flex items-center justify-between w-full px-6 py-6 sm:p-8" onClick={() => toggleTechnicalFaq(index)}>
                                <span className="flex text-lg font-semibold text-gray-900 text-left"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-4 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-6 pb-6 sm:px-8 sm:pb-8`}>
                                <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 text-lg">
                        Need more technical assistance? {' '}
                        <a
                            href="/contact-us"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                        >
                            Contact our technical support team
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default TechnicalFaq;
