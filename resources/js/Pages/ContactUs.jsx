import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import CallToAction from '@/Components/CallToAction';
import MainLayout from '@/Layouts/MainLayout';

export default function ContactUs({ auth }) {
    return (
        <MainLayout>
            <Head title="Contact Us - Storemate OMS" />
            <Header auth={auth} />

            {/* Main Content Container with Single Background Pattern */}
            <div className="relative bg-white overflow-hidden">
                {/* Background Pattern and Gradients */}
                <div className="absolute inset-0">
                    {/* Simple Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3e%3cg fill='none' stroke='%23006daf' stroke-width='0.5'%3e%3cpath d='M0 0h50v50H0z'/%3e%3c/g%3e%3c/svg%3e")`,
                            backgroundSize: '50px 50px'
                        }}
                    ></div>

                    {/* Center Spotlight - Radial gradient to fade blue grid to white in center */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse 800px 600px at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.1) 80%, rgba(255, 255, 255, 0) 100%)'
                        }}
                    ></div>

                    {/* Secondary Center Focus - Smaller ellipse for content area */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse 600px 400px at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 100%)'
                        }}
                    ></div>

                    {/* Top Edge Fade */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0) 40%)'
                        }}
                    ></div>

                    {/* Bottom Edge Fade */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0) 40%)'
                        }}
                    ></div>

                    {/* Left and Right Edge Fade */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 15%, rgba(255, 255, 255, 0) 30%), linear-gradient(to left, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 15%, rgba(255, 255, 255, 0) 30%)'
                        }}
                    ></div>
                </div>

                {/* Hero Section */}
                <div className="relative py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            {/* Subtitle with same style as POWERING label */}
                            <div className="mb-4">
                                <span className="inline-block text-sm font-bold tracking-widest px-4 py-2 rounded-full" style={{
                                    color: '#006daf',
                                    backgroundColor: '#ffe6daff'
                                }}>
                                    GET IN TOUCH WITH US
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6" style={{
                                fontWeight: '750',
                                fontStretch: 'ultra-condensed',
                                letterSpacing: '-0.03em',
                                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                            }}>
                                Contact Us
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We're here to help you grow your business. Reach out to us and let's discuss how Storemate OMS can transform your operations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="relative py-8">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Email Us Card */}
                        <div className="group relative bg-gradient-to-br from-white via-blue-50 to-white border-2 border-blue-100 rounded-3xl p-8  hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-50 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-custom-blue-2 to-custom-blue-1 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-custom-blue-3 transition-colors duration-300">
                                    Email Us
                                </h3>
                                <div className="text-center mb-6">
                                    <p className="text-gray-600 mb-2">
                                        Simple drop us an email at
                                    </p>
                                    <p className="text-lg font-bold text-custom-blue-2 mb-2">sales@storemate.lk</p>
                                    <p className="text-sm text-gray-500">
                                        and you'll receive a reply within <span className="font-semibold text-green-600">24 hours</span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <a
                                        href="mailto:sales@storemate.lk"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-custom-blue-2 to-custom-blue-3 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:from-custom-blue-3 group-hover:to-custom-blue-2"
                                    >
                                        <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        Send Email
                                        <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Call Us Card */}
                        <div className="group relative bg-gradient-to-br from-white via-green-50 to-white border-2 border-green-100 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-50 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-green-700 transition-colors duration-300">
                                    Give us a call
                                </h3>
                                <div className="text-center mb-6">
                                    <p className="text-gray-600 mb-2">
                                        Give us a ring. Our Experts are standing by
                                    </p>
                                    <p className="text-sm font-semibold text-gray-700 mb-2">Monday to Friday from 9am to 5pm</p>
                                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                        Available Now
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a
                                        href="tel:0114226911"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:from-emerald-600 group-hover:to-green-500"
                                    >
                                        <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        011 422 6911
                                        <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <CallToAction />

            <Footer />
        </MainLayout>
    );
}
