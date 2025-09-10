import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'Can I use Storemate OMS if I don\'t have a website?',
            answer: 'Yes, absolutely.<br><br>Storemate OMS is designed for sellers who take orders through Facebook, WhatsApp, Instagram, or even phone calls. You don\'t need a website to use the system — it helps you organize and manage all your orders from one dashboard.',
            open: false
        },
        {
            question: 'Will I need to upload Excel files to the courier system?',
            answer: 'No need.<br><br>Storemate OMS is integrated with Royal Express and can send order info directly with one click. No Excel uploads. No manual entry. You can generate waybills instantly.',
            open: false
        },
        {
            question: 'Can I connect any delivery company with Storemate OMS?',
            answer: 'Yes, we can.<br><br>Storemate OMS currently supports direct integrations with Royal Express and Trans Express Service Lanka.<br><br>If you use a different courier, we can integrate them into the system based on your request, as long as they support API or file-based sync.',
            open: false
        },
        {
            question: 'How does Storemate OMS reduce return orders?',
            answer: 'By stopping problems before dispatch.<br><br>Storemate OMS helps you avoid most return orders by:<br><br>• Detecting duplicate orders from the same customer (e.g., Facebook + WhatsApp)<br>• Flagging fake or suspicious customers using order patterns<br>• Helping you follow up properly before sending out the order<br><br>Less confusion = fewer returns = more profit in your pocket.',
            open: false
        },
        {
            question: 'Can I try Storemate OMS before I pay?',
            answer: 'Yes!<br><br>You get a 30-day free trial with full access — no limitations.<br>And if you\'ve already filled out our server feedback form, your setup fee is 100% waived. (Limited-time offer)<br><br>No risk. No pressure. Just a smarter way to manage your orders.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
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
                            STOREMATE™ OMS
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{
                        fontWeight: '750',
                        fontStretch: 'ultra-condensed',
                        letterSpacing: '-0.03em',
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get answers to the most common questions about Storemate OMS
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-blue-200 hover:shadow-lg">
                            <button type="button" className="flex items-center justify-between w-full px-6 py-6 sm:p-8" onClick={() => toggleFaq(index)}>
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
                        Didn't find the answer you are looking for? {' '}
                        <a
                            href="/contact-us"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                        >
                            Contact our support
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Faq;
