import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import MainLayout from '@/Layouts/MainLayout';

export default function PrivacyPolicy({ auth }) {
    return (
        <MainLayout>
            <Head title="Privacy Policy - StoreMate POS System">
                <meta name="description" content="Privacy Policy for StoreMate POS System. Learn how we collect, use, and protect your personal information." />
            </Head>
            <Header auth={auth} />

            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto  rounded-lg  p-8 md:p-12">
                    <h1 className="text-xl font-medium text-custom-blue-3 mb-2">StoreMate POS System</h1>
                    <h2 className="text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h2>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            This Privacy Policy describes how StoreMate and its affiliates ("StoreMate," "we," "our" or "us") collect, use, and share information in connection with your use of our websites (including www.storemate.cloud), services, and applications (collectively, the "Services"). This Privacy Policy (the "Privacy Policy") does not apply to information our customers may process when using our Services.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            We may collect and receive information about users of our Services ("users," "you," or "your") from various sources, including: (i) information you provide through your user account on the Services (your "Account") if you register for the Services; (ii) your use of the Services; and (iii) from third-party websites, services, and partners.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            We recommend that you read this Privacy Policy in full, including the Additional Disclosures referenced at the bottom of this document, to ensure you are fully informed. If you have any questions about this Privacy Policy or StoreMate's data collection, use, and disclosure practices, please contact us at info@parallax.lk.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">01. Information We Collect</h3>

                        <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">A. Information You Provide</h4>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>I). Account Registration.</strong> When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>II). Payment Information.</strong> When you add your financial account information to your Account, that information is directed to Payhere.lk payment processor. We do not store your financial account information on our systems; however, we have access to, and may retain, subscriber information through Payhere.lk payment processor. To see the privacy policy of Payhere.lk, please visit https://www.payhere.lk/privacy
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>III). User Content.</strong> Our "Community" feature allows you to publicly post content on our Services. By registering for our Community, you agree that your profile information and the content you post may be viewed and used by other users and third parties we do not control.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>IV). Communications.</strong> If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. We may also receive a confirmation when you open an email from us.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">02. Information We Collect When You Use Our Services.</h3>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>I. Cookies and Other Tracking Technologies.</strong> As is true of most websites, we gather certain information automatically and store it in log files. In addition, when you use our Services, we may collect certain information automatically from your device. This information may include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, clickstream data, landing page, and referring URL. To collect this information, a cookie may be set on your computer or device when you visit our Services. Cookies contain a small amount of information that allows our web servers to recognize you. We store information that we collect through cookies, and/or log files to record your preferences. We may also automatically collect information about your use of features of our Services, about the functionality of our Services, frequency of visits, and other information related to your interactions with the Services.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            <strong>II. Usage of our Services.</strong> When you use our Services, we may collect information about your engagement with and utilization of our Services, such as processor and memory usage, storage capacity, navigation of our Services, and system-level metrics. We use this data to operate the Services, maintain and improve the performance and utilization of the Services, develop new features, protect the security and safety of our Services and our customers, and provide customer support. We also use this data to develop aggregate analysis and business intelligence that enable us to operate, protect, make informed decisions, and report on the performance of our business.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">03. Information We Receive from Third Parties.</h3>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>I. Third-Party Accounts.</strong> If you choose to link our Services to a third-party account, such as Emails & SMS, we will receive information about that account, such as your authentication token from the third-party account, to authorize linking. If you wish to limit the information available to us, you should visit the privacy settings of your third-party accounts to learn about your options.
                        </p>

                        <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Read our 3rd parties' privacy policies</h4>
                        <ul className="list-disc list-inside mb-8 space-y-2">
                            <li className="text-gray-700">Payhere.lk – <a href="https://www.payhere.lk/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.payhere.lk/privacy</a></li>
                            <li className="text-gray-700">StoreMate – <a href="https://storemate.parallaxtec.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://storemate.parallaxtec.com/privacy-policy/</a></li>
                            <li className="text-gray-700">MailGun – <a href="https://www.mailgun.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.mailgun.com/privacy-policy/</a></li>
                            <li className="text-gray-700">TextIT – <a href="https://textit.biz/contact-us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://textit.biz/contact-us/</a></li>
                            <li className="text-gray-700">Dropbox – <a href="https://www.dropbox.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.dropbox.com/privacy</a></li>
                            <li className="text-gray-700">Pusher – <a href="https://pusher.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://pusher.com/legal/privacy-policy</a></li>
                            <li className="text-gray-700">Google Chrome – <a href="https://www.google.com/chrome/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.google.com/chrome/privacy/</a></li>
                            <li className="text-gray-700">Facebook – <a href="https://www.facebook.com/legal/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.facebook.com/legal/terms</a></li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">04. How We Use Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect in various ways, including to:</p>
                        <ul className="list-disc list-inside mb-8 space-y-2">
                            <li className="text-gray-700">Provide, operate, and maintain our Services;</li>
                            <li className="text-gray-700">Improve, personalize, and expand our Services;</li>
                            <li className="text-gray-700">Understand and analyze how you use our Services;</li>
                            <li className="text-gray-700">Develop new products, services, features, and functionality;</li>
                            <li className="text-gray-700">Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes;</li>
                            <li className="text-gray-700">Process your transactions;</li>
                            <li className="text-gray-700">Send you text messages and push notifications;</li>
                            <li className="text-gray-700">Find and prevent fraud; and</li>
                            <li className="text-gray-700">For compliance purposes, including enforcing our Terms of Service, or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">05. How We Share Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">We may share the information we collect in various ways, including the following:</p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Vendors and Service Providers.</strong> We may share information with third-party vendors and service providers that provide services on our behalf, such as helping to provide our Services, for promotional and/or marketing purposes, and to provide you with information relevant to you such as product announcements, software updates, special offers, or other information.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Aggregate Information.</strong> Where legally permissible, we may use and share information about users with our partners in aggregated or de-identified form that can't reasonably be used to identify you.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Advertising.</strong> We work with third-party advertising partners to show you ads that we think may interest you. These advertising partners may set and access their own cookies, pixel tags, and similar technologies on our Services, and they may otherwise collect or have access to information about you which they may collect over time and across different online services. Some of our advertising partners are members of the Network Advertising Initiative or the Digital Advertising Alliance. To learn more about these programs, or opt-out of personalized ads, visit the Digital Advertising Alliance's Self-Regulatory program for Online Behavioral Advertising at www.aboutads.info, or the Network Advertising Initiative at www.networkadvertising.org.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Third-Party Partners.</strong> We also share information about users with third-party partners in order to receive additional publicly available information about you.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Information We Share When You Sign Up Through a Referral.</strong> If you sign up for our Services through a referral from a friend, we may share information with your referrer to let them know that you used their referral to sign up for our Services.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Analytics.</strong> We use analytics providers such as Google Analytics. Google Analytics uses cookies to collect non-identifying information. Google provides some additional privacy options regarding its Analytics cookies at http://www.google.com/policies/privacy/partners/.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Business Transfers.</strong> Information may be disclosed and otherwise transferred to any potential acquirer, successor, or assignee as part of any proposed merger, acquisition, debt financing, sale of assets, or similar transaction, or in the event of insolvency, bankruptcy, or receivership in which information is transferred to one or more third parties as one of our business assets.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>As Required By Law and Similar Disclosures.</strong> We may also share information to (i) satisfy any applicable law, regulation, legal process, or governmental request; (ii) enforce this Privacy Policy and our Terms of Service, including investigation of potential violations hereof; (iii) detect, prevent, or otherwise address fraud, security, or technical issues; (iv) respond to your requests; or (v) protect our rights, property or safety, our users and the public. This includes exchanging information with other companies and organizations for fraud protection and spam/malware prevention.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            <strong>With Your Consent.</strong> We may share information with your consent.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">06. Legal Basis for Processing Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our legal basis for collecting and using the personal information described above will depend on the personal information concerned and the specific context in which we collect it.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            However, we will normally collect personal information from you only (i) where we need the personal information to perform a contract with you; (ii) where the processing is in our legitimate interests and not overridden by your rights; or (iii) where we have your consent to do so. We have a legitimate interest in operating our Services and communicating with you as necessary to provide these Services, for example when responding to your queries, improving our platform, undertaking marketing, or for the purposes of detecting or preventing illegal activities.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In some cases, we may also have a legal obligation to collect personal information from you or may otherwise need the personal information to protect your vital interests or those of another person.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            If we ask you to provide personal information to comply with a legal requirement or to perform a contract with you, we will make this clear at the relevant time and advise you whether the provision of your personal information is mandatory or not (as well as of the possible consequences if you do not provide your personal information).
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">07. Third-party Services</h3>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            You may access other third-party services through the Services, for example by clicking on links to those third-party services from within the Services. We are not responsible for the privacy policies and/or practices of these third-party services, and we encourage you to carefully review their privacy policies.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">08. Security</h3>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            StoreMate is committed to protecting your information. To do so, we employ a variety of security technologies and measures designed to protect information from unauthorized access, use, or disclosure. The measures we use are designed to provide a level of security appropriate to the risk of processing your personal information. However, please bear in mind that the Internet cannot be guaranteed to be 100% secure.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">09. Data Retention</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a service you have requested or to comply with applicable legal, tax, or accounting requirements).
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Access</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you are a registered user, you may access certain information associated with your Account by logging into our Services or emailing info@parallax.lk. If you terminate your Account, any public activity on your Account prior to deletion may remain stored on our servers and may remain accessible to the public.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            To protect your privacy and security, we may also take reasonable steps to verify your identity before updating or removing your information. The information you provide us may be archived or stored periodically by us according to backup processes conducted in the ordinary course of business for disaster recovery purposes. Your ability to access and correct your information may be temporarily limited where access and correction could: inhibit StoreMate's ability to comply with a legal obligation; inhibit StoreMate's ability to investigate, make or defend legal claims; result in disclosure of personal information about a third party; or result in breach of a contract or disclosure of trade secrets or other proprietary business information belonging to StoreMate or a third party.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Your Data Protection Rights</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you are a resident of the EEA, you have the following data protection rights:
                        </p>
                        <ul className="list-disc list-inside mb-8 space-y-2">
                            <li className="text-gray-700">If you wish to access, correct, update, or request deletion of your personal information, you can do so at any time by emailing info@parallax.lk.</li>
                            <li className="text-gray-700">In addition, you can object to the processing of your personal information, ask us to restrict the processing of your personal information, or request portability of your personal information. Again, you can exercise these rights by emailing info@parallax.lk.</li>
                            <li className="text-gray-700">You have the right to opt-out of marketing communications we send you at any time. You can exercise this right by clicking on the "unsubscribe" or "opt-out" link in the marketing emails we send you. To opt-out of other forms of marketing, please contact us by emailing info@parallax.lk.</li>
                            <li className="text-gray-700">Similarly, if we have collected and process your personal information with your consent, then you can withdraw your consent at any time. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</li>
                            <li className="text-gray-700">You have the right to complain to a data protection authority about our collection and use of your personal information. For more information, please contact your local data protection authority.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Your Choices</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You can use some of the features of the Services without registering, thereby limiting the type of information that we collect.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You may unsubscribe from receiving certain promotional emails from us. If you wish to do so, simply follow the instructions found at the end of the email. Even if you unsubscribe, we may still contact you for informational, transactional, account-related, or similar purposes.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Many browsers have an option for disabling cookies, which may prevent your browser from accepting new cookies or enable selective use of cookies. Please note that, if you choose not to accept cookies, some features and the personalization of our Services may no longer work for you. You will continue to receive advertising material but it will not be tailored to your interests.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Children's Privacy</h3>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            StoreMate does not knowingly collect information from children under the age of 13, and children under 13 are prohibited from using our Services. If you learn that a child has provided us with personal information in violation of this Privacy Policy, you can alert us at info@parallax.lk.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Changes to this Privacy Policy</h3>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            This Privacy Policy may be modified from time to time, so please review it frequently. Changes to this Privacy Policy will be posted on our websites. If we materially change the ways in which we use or share personal information previously collected from you through our Services, we will notify you through our Services, by email, or other communication.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions or concerns about this Privacy Policy, please feel free to email us at info@parallax.lk.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The data controller of your personal information is Parallax Technologies (PRIVATE) Ltd.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </MainLayout>
    );
}
