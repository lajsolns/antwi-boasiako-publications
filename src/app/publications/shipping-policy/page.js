'use client';

import React, { useState, useEffect } from 'react';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function ShippingPolicyPage() {
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
                            Operational Guidelines
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            Shipping Policy
                        </h1>
                        <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
                        <p className="font-inter text-md text-gray-500 italic">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="space-y-16">
                        <section id="delivery-coverage" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                1. Delivery Coverage
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:float-left first-letter:mr-3 first-letter:text-amber-800 first-letter:leading-none">
                                Currently, delivery is available exclusively within Accra for all online purchases through our trusted delivery partner. We are excited to announce that delivery across Ghana will be available in the near future. Customers will be notified as soon as expanded delivery becomes available.
                            </p>
                        </section>

                        <section id="delivery-timeframes" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                2. Delivery Timeframes
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-6 border border-gray-100">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">2.1 Standard Orders <span className="text-gray-400 lowercase">(Non-Bulk)</span></h3>
                                    <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                        <li>Orders placed before 12:00 PM (Monday-Friday): Same-day delivery</li>
                                        <li>Orders placed after 12:00 PM (Monday-Friday): Next business day by 12:00 PM</li>
                                        <li>Weekend orders: Next business day delivery</li>
                                        <li>Public Holiday orders: Next business day delivery</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 border border-gray-100">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">2.2 Bulk Orders</h3>
                                    <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                        <li>Orders placed before 10:00 AM (Monday-Friday): Next business day delivery</li>
                                        <li>Orders placed after 10:00 AM (Monday-Friday): Delivery within 48 hours</li>
                                        <li>Weekend orders (Saturday-Sunday): Delivery within two business days</li>
                                        <li>Public Holiday orders: Delivery within two business days</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="delivery-process" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                3. Delivery Process
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-inter text-sm tracking-widest text-gray-900 uppercase mb-2">3.1 Order Processing</h3>
                                    <p className="font-inter text-gray-600 font-light leading-relaxed">
                                        Once your order is confirmed and payment is processed, we prepare your items and hand them over to our delivery partner for prompt dispatch.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-inter text-sm tracking-widest text-gray-900 uppercase mb-2">3.2 Delivery Contact</h3>
                                    <p className="font-inter text-gray-600 font-light leading-relaxed">
                                        Our delivery partner will contact you by phone before dispatch to confirm your availability and delivery address.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="delivery-requirements" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                4. Delivery Requirements
                            </h2>
                            <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-4">
                                <li><span className="font-medium text-gray-900">Customer Availability:</span> Someone must be present to receive the package at the designated address</li>
                                <li><span className="font-medium text-gray-900">Contact Accessibility:</span> Customer must be reachable by phone during delivery</li>
                                <li>
                                    <span className="font-medium text-gray-900">Failed Delivery Attempts:</span>
                                    <p className="mt-2 text-gray-500 italic">If delivery cannot be completed:</p>
                                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                                        <li>Our delivery partner will attempt redelivery based on their standard procedures</li>
                                        <li>Customer may be required to collect from a designated pickup point</li>
                                        <li>Additional redelivery fees may apply as per delivery partner&#39;s policy</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section id="partner-policies" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                5. Delivery Partner Policies
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-inter text-sm tracking-widest text-gray-900 uppercase mb-2">5.1 Third-Party Delivery Instructions</h3>
                                    <p className="font-inter text-gray-600 font-light leading-relaxed">
                                        When customers request delivery to a third party (friend, family member, colleague), both Antwi-Boasiako Publications and our delivery partner cannot be held responsible for any damage, loss, or mishandling of items after successful delivery to the designated recipient.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-inter text-sm tracking-widest text-gray-900 uppercase mb-2">5.2 Delivery Issues</h3>
                                    <p className="font-inter text-gray-600 font-light leading-relaxed mb-2">
                                        For any delivery-related concerns (delays, damaged packages, failed delivery attempts), customers should:
                                    </p>
                                    <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-1">
                                        <li>Contact our delivery partner directly by phone</li>
                                        <li>Contact Antwi-Boasiako Publications customer service for order-related issues</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="important-conditions" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                6. Important Conditions
                            </h2>
                            <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-4">
                                <li>
                                    All delivery commitments are contingent upon:
                                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500 italic">
                                        <li>Item availability in stock</li>
                                        <li>Successful payment processing</li>
                                        <li>Accurate delivery information provided by customer</li>
                                        <li>Delivery partner&#39;s operational capacity and policies</li>
                                    </ul>
                                </li>
                                <li>Delivery times are estimates and may vary due to traffic, weather, or other circumstances beyond our control</li>
                                <li>Antwi-Boasiako Publications is responsible for order accuracy and item condition upon handover to delivery partner</li>
                            </ul>
                        </section>

                        <section id="delivery-fees" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                7. Delivery Fees
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed mb-4">
                                Delivery charges will be clearly displayed at checkout and are determined by:
                            </p>
                            <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                <li>Delivery location within Accra</li>
                                <li>Order size and weight</li>
                                <li>Delivery speed selected</li>
                                <li>Our delivery partner&#39;s current rate structure</li>
                            </ul>
                        </section>

                        <section id="contact-info" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                8. Contact Information
                            </h2>
                            <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                <li><span className="font-medium text-gray-900">For Order Issues</span> – contact Antwi-Boasiako Publications customer service</li>
                                <li><span className="font-medium text-gray-900">For Delivery Status/Issues</span> – contact our delivery partner by phone</li>
                                <li><span className="font-medium text-gray-900">Customer Service Hours:</span> 8AM – 5PM</li>
                            </ul>
                        </section>

                        <div className="pt-8 mt-12 border-t border-gray-200 text-center">
                            <p className="font-inter text-xs tracking-widest text-gray-400 uppercase leading-relaxed">
                                This policy is subject to updates.<br className="hidden md:block" /> Customers will be notified of any policy changes.<br className="hidden md:block" /> Delivery partner terms and conditions also apply.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <PublicationsFooter />
        </div>
    );
}
