'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function AboutPage() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const { t } = useLanguage();

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

    const coreValues = [
        { titleKey: 'about.values.factual.title', descKey: 'about.values.factual.desc' },
        { titleKey: 'about.values.integrity.title', descKey: 'about.values.integrity.desc' },
        { titleKey: 'about.values.professionalism.title', descKey: 'about.values.professionalism.desc' },
        { titleKey: 'about.values.inclusivity.title', descKey: 'about.values.inclusivity.desc' },
        { titleKey: 'about.values.teamwork.title', descKey: 'about.values.teamwork.desc' },
        { titleKey: 'about.values.africanFocused.title', descKey: 'about.values.africanFocused.desc' },
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

            <main className="flex-grow w-full pt-20 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <span className="inline-block font-inter text-xs tracking-[0.2em] text-gray-500 uppercase">
                            {t('about.superheading')}
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            {t('about.title')}
                        </h1>
                        <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
                        <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            {t('about.description')}
                        </p>
                    </div>

                    <div className="mb-24 relative w-full h-[400px] md:h-[500px] w-full">
                        <div className="absolute inset-4 bg-gray-200 blur-xl opacity-60"></div>
                        <div className="relative w-full h-full border border-gray-100 overflow-hidden group">
                            <Image
                                src="/image/oval_sitting.jpg"
                                alt="Dr. Albert Antwi-Boasiako"
                                fill
                                quality={100}
                                className="object-cover object-[center_30%] scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-20">
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    {t('about.whoWeAre')}
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:float-left first-letter:mr-3 first-letter:text-amber-800 first-letter:leading-none">
                                    {t('about.whoWeAreText1')}
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed mt-4">
                                    {t('about.whoWeAreText2')}
                                </p>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-12 border-t border-gray-100">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    {t('about.ourPurpose')}
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed">{t('about.ourPurposeText1')}</p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed mt-4">{t('about.ourPurposeText2')}</p>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-12 border-t border-gray-100">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    {t('about.visionaryLeadership')}
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed">{t('about.visionaryLeadershipText1')}</p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed mt-4">{t('about.visionaryLeadershipText2')}</p>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-12 border-t border-gray-100 mb-16">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    {t('about.whyWePublish')}
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed mb-8">{t('about.whyWePublishText')}</p>
                                <div className="relative w-full h-[300px] border border-gray-100 overflow-hidden group">
                                    <Image
                                        src="/image/speech.jpg"
                                        alt="Disseminating Knowledge"
                                        fill
                                        quality={90}
                                        className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-50/50 p-8 md:p-12 -mx-4 md:-mx-12 lg:-mx-16 border-y border-gray-100 my-16">
                            <div className="text-center mb-12">
                                <h2 className="font-playfair text-3xl font-normal text-gray-900 mb-4 tracking-tight">{t('about.coreValues')}</h2>
                                <div className="w-12 h-[1px] bg-amber-800 mx-auto"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                                {coreValues.map((value, idx) => (
                                    <div key={idx} className="bg-white p-6 shadow-sm border border-gray-100 group hover:-translate-y-1 transition-transform duration-300">
                                        <h3 className="font-inter text-sm tracking-widest uppercase text-gray-900 mb-3 group-hover:text-amber-800 transition-colors">
                                            {t(value.titleKey)}
                                        </h3>
                                        <p className="font-inter text-sm text-gray-500 font-light leading-relaxed">
                                            {t(value.descKey)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    {t('about.whatElse')}
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed">{t('about.whatElseText')}</p>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-12 border-t border-gray-100">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    {t('about.publishingPromise')}
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-playfair text-2xl text-gray-900 italic leading-snug">
                                    {t('about.publishingPromiseQuote')}
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <PublicationsFooter />
        </div>
    );
}
