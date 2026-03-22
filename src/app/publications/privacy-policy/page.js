'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function PrivacyPolicyPage() {
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
                            {t('privacyPolicy.superheading')}
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            {t('privacyPolicy.title')}
                        </h1>
                        <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
                        <p className="font-inter text-md text-gray-500 italic">
                            Last updated: {new Date().toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Introduction */}
                        <section id="introduction">
                            <p className="font-inter text-gray-600 font-light leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:float-left first-letter:mr-3 first-letter:text-amber-800 first-letter:leading-none">
                                {t('privacyPolicy.intro')}
                            </p>
                        </section>

                        {/* Collecting Personal Information */}
                        <section id="collecting-personal-information" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('privacyPolicy.collectingTitle')}
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed mb-8">
                                {t('privacyPolicy.collectingIntro')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Device Information */}
                                <div className="bg-gray-50 p-6 border border-gray-100">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">{t('privacyPolicy.deviceInfoTitle')}</h3>
                                    <ul className="space-y-3">
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.deviceInfoExamplesLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.deviceInfoExamples')}</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.deviceInfoPurposeLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.deviceInfoPurpose')}</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.deviceInfoSourceLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.deviceInfoSource')}</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.deviceInfoDisclosureLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.deviceInfoDisclosure')}</span></li>
                                    </ul>
                                </div>

                                {/* Order Information */}
                                <div className="bg-gray-50 p-6 border border-gray-100">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">{t('privacyPolicy.orderInfoTitle')}</h3>
                                    <ul className="space-y-3">
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.orderInfoExamplesLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.orderInfoExamples')}</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.orderInfoPurposeLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.orderInfoPurpose')}</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.orderInfoSourceLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.orderInfoSource')}</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.orderInfoDisclosureLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.orderInfoDisclosure')}</span></li>
                                    </ul>
                                </div>

                                {/* Customer Support */}
                                <div className="bg-gray-50 p-6 border border-gray-100 md:col-span-2">
                                    <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">{t('privacyPolicy.customerSupportTitle')}</h3>
                                    <ul className="space-y-3">
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.customerSupportExamplesLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.customerSupportExamples')}</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.customerSupportPurposeLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.customerSupportPurpose')}</span></li>
                                        <li><span className="font-inter text-xs tracking-[0.1em] text-gray-500 uppercase block mb-1">{t('privacyPolicy.customerSupportSourceLabel')}</span> <span className="font-inter text-sm text-gray-600">{t('privacyPolicy.customerSupportSource')}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Minors */}
                        <section id="minors" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('privacyPolicy.minorsTitle')}
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed">
                                {t('privacyPolicy.minorsText')}
                            </p>
                        </section>

                        {/* Sharing Personal Information */}
                        <section id="sharing-personal-information" className="pt-8 border-t border-gray-100">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('privacyPolicy.sharingTitle')}
                            </h2>
                            <div className="space-y-6">
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingIntro')}
                                </p>
                                <ul className="list-disc pl-5 font-inter text-gray-600 font-light space-y-2">
                                    <li>{t('privacyPolicy.sharingLaw')}</li>
                                </ul>
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingData1')}
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingData2')}
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingData3')}
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingCookies')}
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingCookies2')}
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingThirdParty')}
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingFraud')}
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingSecurity')}
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    {t('privacyPolicy.sharingDataSecurity')}
                                </p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section id="contact" className="pt-12 mt-16 border-t border-gray-200">
                            <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4 mb-6">
                                {t('privacyPolicy.contactTitle')}
                            </h2>
                            <p className="font-inter text-gray-600 font-light leading-relaxed">
                                {t('privacyPolicy.contactText')}{' '}
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
