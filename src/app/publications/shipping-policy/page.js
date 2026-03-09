'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function ShippingPolicyPage() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const { t, locale } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.pageYOffset > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rotatingQuotes = [
        { text: '"Transforming cybersecurity education across Africa through innovative research and practical implementation"', link: '/publications' },
        { text: '"Building the next generation of cybersecurity professionals with cutting-edge knowledge and skills"', link: '/publications' },
        { text: '"Pioneering digital security solutions for a safer, more connected world"', link: '/publications' }
    ];

    // Retrieve array-type translation values
    const standardOrders = t('shippingPolicy.standardOrders');
    const bulkOrders = t('shippingPolicy.bulkOrders');
    const failedItems = t('shippingPolicy.requirementFailedItems');
    const issuesItems = t('shippingPolicy.deliveryIssuesItems');
    const conditionsList = t('shippingPolicy.importantConditionsList');
    const feesList = t('shippingPolicy.deliveryFeesList');

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
                            {t('shippingPolicy.superheading')}
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            {t('shippingPolicy.title')}
                        </h1>
                        <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
                        <p className="font-inter text-md text-gray-500 italic">
                            Last updated: {new Date().toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* 1. Delivery Coverage */}
                        <section id="delivery-coverage" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('shippingPolicy.deliveryCoverageTitle')}
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:float-left first-letter:mr-3 first-letter:text-amber-800 first-letter:leading-none">
                                {t('shippingPolicy.deliveryCoverageText')}
                            </p>
                        </section>

                        {/* 2. Delivery Timeframes */}
                        <section id="delivery-timeframes" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('shippingPolicy.deliveryTimeframesTitle')}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-6 border border-gray-100">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">
                                        {t('shippingPolicy.standardOrdersTitle')} <span className="text-gray-400 lowercase">{t('shippingPolicy.standardOrdersSubtitle')}</span>
                                    </h3>
                                    <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                        {Array.isArray(standardOrders) && standardOrders.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 border border-gray-100">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">
                                        {t('shippingPolicy.bulkOrdersTitle')}
                                    </h3>
                                    <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                        {Array.isArray(bulkOrders) && bulkOrders.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. Delivery Process */}
                        <section id="delivery-process" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('shippingPolicy.deliveryProcessTitle')}
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-inter text-sm tracking-widest text-gray-900 uppercase mb-2">{t('shippingPolicy.orderProcessingTitle')}</h3>
                                    <p className="font-inter text-gray-600 font-light leading-relaxed">
                                        {t('shippingPolicy.orderProcessingText')}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-inter text-sm tracking-widest text-gray-900 uppercase mb-2">{t('shippingPolicy.deliveryContactTitle')}</h3>
                                    <p className="font-inter text-gray-600 font-light leading-relaxed">
                                        {t('shippingPolicy.deliveryContactText')}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 4. Delivery Requirements */}
                        <section id="delivery-requirements" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('shippingPolicy.deliveryRequirementsTitle')}
                            </h2>
                            <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-4">
                                <li><span className="font-medium text-gray-900">{t('shippingPolicy.requirementAvailability')}</span> {t('shippingPolicy.requirementAvailabilityText')}</li>
                                <li><span className="font-medium text-gray-900">{t('shippingPolicy.requirementContact')}</span> {t('shippingPolicy.requirementContactText')}</li>
                                <li>
                                    <span className="font-medium text-gray-900">{t('shippingPolicy.requirementFailed')}</span>
                                    <p className="mt-2 text-gray-500 italic">{t('shippingPolicy.requirementFailedNote')}</p>
                                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                                        {Array.isArray(failedItems) && failedItems.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        {/* 5. Delivery Partner Policies */}
                        <section id="partner-policies" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('shippingPolicy.partnerPoliciesTitle')}
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-inter text-sm tracking-widest text-gray-900 uppercase mb-2">{t('shippingPolicy.thirdPartyTitle')}</h3>
                                    <p className="font-inter text-gray-600 font-light leading-relaxed">
                                        {t('shippingPolicy.thirdPartyText')}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-inter text-sm tracking-widests text-gray-900 uppercase mb-2">{t('shippingPolicy.deliveryIssuesTitle')}</h3>
                                    <p className="font-inter text-gray-600 font-light leading-relaxed mb-2">
                                        {t('shippingPolicy.deliveryIssuesText')}
                                    </p>
                                    <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-1">
                                        {Array.isArray(issuesItems) && issuesItems.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 6. Important Conditions */}
                        <section id="important-conditions" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('shippingPolicy.importantConditionsTitle')}
                            </h2>
                            <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-4">
                                <li>
                                    {t('shippingPolicy.importantConditionsIntro')}
                                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500 italic">
                                        {Array.isArray(conditionsList) && conditionsList.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </li>
                                <li>{t('shippingPolicy.importantConditions2')}</li>
                                <li>{t('shippingPolicy.importantConditions3')}</li>
                            </ul>
                        </section>

                        {/* 7. Delivery Fees */}
                        <section id="delivery-fees" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('shippingPolicy.deliveryFeesTitle')}
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed mb-4">
                                {t('shippingPolicy.deliveryFeesText')}
                            </p>
                            <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                {Array.isArray(feesList) && feesList.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* 8. Contact Information */}
                        <section id="contact-info" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('shippingPolicy.contactInfoTitle')}
                            </h2>
                            <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                <li><span className="font-medium text-gray-900">{t('shippingPolicy.contactOrderIssues')}</span> – {t('shippingPolicy.contactOrderIssuesText')}</li>
                                <li><span className="font-medium text-gray-900">{t('shippingPolicy.contactDeliveryStatus')}</span> – {t('shippingPolicy.contactDeliveryStatusText')}</li>
                                <li><span className="font-medium text-gray-900">{t('shippingPolicy.contactServiceHours')}</span> {t('shippingPolicy.contactServiceHoursText')}</li>
                            </ul>
                        </section>

                        <div className="pt-8 mt-12 border-t border-gray-200 text-center">
                            <p className="font-inter text-xs tracking-widest text-gray-400 uppercase leading-relaxed">
                                {t('shippingPolicy.policyFootnote')}
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <PublicationsFooter />
        </div>
    );
}
