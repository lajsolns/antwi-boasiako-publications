'use client';

import React, { useState, useEffect } from 'react';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function PrivacyPolicyPage() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rotatingQuotes = [
        {
            text: '"Transforming cybersecurity education across Africa through innovative research and practical implementation"',
            link: '/publications'
        },
        {
            text: '"Building the next generation of cybersecurity professionals with cutting-edge knowledge and skills"',
            link: '/publications'
        },
        {
            text: '"Pioneering digital security solutions for a safer, more connected world"',
            link: '/publications'
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <PublicationsHeader
                scrolled={scrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                currentQuoteIndex={currentQuoteIndex}
                setCurrentQuoteIndex={setCurrentQuoteIndex}
                rotatingQuotes={rotatingQuotes}
            />

            <main className="flex-grow w-full pt-20 pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block font-inter text-xs tracking-[0.2em] text-gray-500 uppercase">
                            Legal & Compliance
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            Privacy Policy
                        </h1>
                        <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
                    </div>

                    <div className="space-y-16">
                        <section id="introduction">
                            <p className="font-inter text-gray-600 font-light leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:float-left first-letter:mr-3 first-letter:text-amber-800 first-letter:leading-none">
                                This Privacy Policy describes how info@antwi-boasiako.com (the "Site" or "we") collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
                            </p>
                        </section>

                        <section id="collecting-personal-information" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                Collecting Personal Information
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed mb-8">
                                When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as "Personal Information".
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-6 border border-gray-100">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">Device Information</h3>
                                    <ul className="space-y-3">
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Examples:</span> <span className="font-inter text-sm text-gray-600">version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Purpose:</span> <span className="font-inter text-sm text-gray-600">to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Source:</span> <span className="font-inter text-sm text-gray-600">Collected automatically when you access our Site using cookies, log files, web beacons or tags.</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Disclosure:</span> <span className="font-inter text-sm text-gray-600">shared with our payment system provider, Paystack for payment processes.</span></li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 border border-gray-100">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">Order Information</h3>
                                    <ul className="space-y-3">
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Examples:</span> <span className="font-inter text-sm text-gray-600">name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number.</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Purpose:</span> <span className="font-inter text-sm text-gray-600">to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations...</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Source:</span> <span className="font-inter text-sm text-gray-600">collected from you.</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Disclosure:</span> <span className="font-inter text-sm text-gray-600">shared with our payment system provider, Paystack and our delivery partner.</span></li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-6 border border-gray-100 md:col-span-2">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">Customer Support</h3>
                                    <ul className="space-y-3">
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Examples:</span> <span className="font-inter text-sm text-gray-600">version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Purpose:</span> <span className="font-inter text-sm text-gray-600">to provide customer support.</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">Source:</span> <span className="font-inter text-sm text-gray-600">collected from you.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="minors" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                Minors
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed">
                                We do not intentionally collect Personal Information from children. If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us at the address below to request deletion.
                            </p>
                        </section>

                        <section id="sharing-personal-information" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                Sharing Personal Information
                            </h2>
                            <div className="space-y-6">
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:
                                </p>
                                <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                    <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</li>
                                </ul>

                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    Antwi-Boasiako Publications collects and processes personal data of visitors to the website. We mainly use your personal data to register you as a new customer; process and deliver your orders; manage your relationship with us to enable you to participate in promotions, competitions and surveys and improve our website, applications, products and services as well as allowing us to recommend/advertise products or services which may be of interest to you. It further allows us to comply with our legal obligations, including verifying your identity where necessary and detecting fraud.
                                </p>

                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    In order to provide and continually improve our products and services we store your identity data, contact data and delivery address. We also collect and store certain types of information regarding your use of the website including information about your searches, views, downloads and purchases.
                                </p>

                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    We may also receive information about you from third parties including our carriers; payment service providers; merchants/brands; and advertising service providers.
                                </p>

                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    With your consent, we put cookies on your computer, to allow us to distinguish you from other users on our website and help us provide you with an enhanced browsing experience. For example we use cookies for the recognition and counting of the number of visitors and to see how visitors move around the site when they are using it (this helps us to improve the way our website works, for example by ensuring that users can find what they are looking for). It also helps us identify your preferences and subscriptions e.g. saved items, items stored in your basket etc.
                                </p>

                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    Cookies also allows us to send you newsletters and commercial/advertising (can be unsubscribed) messages tailored to your interests. Our approved third parties may also set cookies when you use our marketplace. Third parties include search engines, providers of measurement and analytics services, social media networks and advertising companies.
                                </p>

                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    We may need to share your personal data with third parties, in order to deliver your products and services purchased on our website. Examples include fulfilling orders for products or services, delivering packages, analyzing data, providing marketing assistance, processing payments, transmitting content, assessing and managing credit risk and providing customer service.
                                </p>

                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    In order to detect fraud and abuse, we may release your personal data to other companies and organizations for fraud protection and credit risk reduction, and to comply with the law. We may share your personal data with third parties in accordance with the terms of this Privacy and Cookie Notice, our Privacy Policy and in accordance with the law and only permit them to process your personal data for specified purposes and in accordance with our instructions. We do not allow our third-party service providers to use your personal data for their own purposes.
                                </p>

                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    When we share your personal data with third parties, we require them to agree to use your data in accordance with the terms of this Privacy and Cookie Notice, our Privacy Policy and in accordance with the law; and only permit them to process your personal data for specified purposes and in accordance with our instructions. We do not allow our third-party service providers to use your personal data for their own purposes.
                                </p>

                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    With regards to data security, we have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and of such third parties. They will only process your personal data on our instructions and they are subject to a duty of care and confidentiality. We have also put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally obliged to do so.
                                </p>
                            </div>
                        </section>

                        <section id="contact" className="pt-12 mt-16 border-t border-gray-200">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                Contact Us
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed">
                                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at{' '}
                                <a href="mailto:info@antwi-boasiako.com" className="text-amber-800 hover:text-amber-900 font-medium transition-colors border-b border-amber-800/30 hover:border-amber-800">
                                    info@antwi-boasiako.com
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <PublicationsFooter />
        </div>
    );
}
