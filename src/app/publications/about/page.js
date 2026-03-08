'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function AboutPage() {
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

    const coreValues = [
        { title: 'Factual', desc: 'Evidence-based, Data-driven, rigorously verified' },
        { title: 'Integrity', desc: 'Ethical authorship and editorial independence' },
        { title: 'Professionalism', desc: 'Quality, reliability and respect' },
        { title: 'Inclusivity', desc: 'Diverse voices and perspectives' },
        { title: 'Teamwork', desc: 'Collaborative knowledge creation' },
        { title: 'African-focused', desc: 'Focusing on Africa’s intellectual, scientific and professional themes.' },
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
                    {/* Header Section */}
                    <div className="text-center mb-24 space-y-4">
                        <span className="inline-block font-inter text-xs tracking-[0.2em] text-gray-500 uppercase">
                            Corporate Profile
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            About Us
                        </h1>
                        <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
                        <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Antwi-Boasiako Publications is a mission-driven publishing house dedicated to documenting and disseminating works that shape the continent's strategic future, established in 2025.
                        </p>
                    </div>

                    {/* Hero Image */}
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
                        {/* Who We Are */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    Who We Are
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:float-left first-letter:mr-3 first-letter:text-amber-800 first-letter:leading-none">
                                    Established in 2025, Antwi-Boasiako Publications is a mission-driven publishing house dedicated to publishing and disseminating the intellectual and professional works of its Founder, Dr Albert Antwi-Boasiako.
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed mt-4">
                                    The firm serves as a definite intellectual and professional platform for the works of Dr. Albert Antwi-Boasiako, a recognised Cybersecurity Expert, and a known Institutional Builder who served as the founding Director-General of Ghana’s Cyber Security Authority (CSA). Dr Antwi-Boasiako also founded the e-Crime Bureau and was elected as the founding President of the African Network of Cybersecurity Authorities (ANCA), representing the CSA.
                                </p>
                            </div>
                        </section>

                        {/* Our Purpose */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-12 border-t border-gray-100">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    Our Purpose
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    We believe that the Human Condition can be improved significantly through comprehensive, accurate, and accessible knowledge.
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed mt-4">
                                    Our publications document this knowledge, translate policy into practical insight, support institutional and leadership development, and preserve intellectual and professional legacies that support continuous improvement of the Human Condition.
                                </p>
                            </div>
                        </section>

                        {/* Visionary Leadership */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-12 border-t border-gray-100">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    Visionary Leadership
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    Antwi-Boasiako Publications is driven by the strategic vision of its founder, Dr. Albert Antwi-Boasiako, a Distinguished Author, Institutional Builder, and foremost Cybersecurity Expert.
                                </p>
                                <p className="font-inter text-gray-600 font-light leading-relaxed mt-4">
                                    As the first Director-General of the CSA, he led landmark legislative and strategic reforms that positioned Ghana as a cybersecurity role-model country, impacting the rest of African countries. As an institutional builder with almost two decades of career experience spanning across the globe, his depth of experience, insight, and vision underpins every publication we produce.
                                </p>
                            </div>
                        </section>

                        {/* Why We Publish */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-12 border-t border-gray-100 mb-16">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    Why We Publish
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed mb-8">
                                    We publish to disseminate and preserve knowledge – intellectual, professional, and historical experiences. Our publications bridge the gap between policy, academia, and industry, providing trusted resources for leaders, decision-makers, scholars, practitioners, and students.
                                </p>

                                {/* Inline Image */}
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

                        {/* Core Values */}
                        <section className="bg-gray-50/50 p-8 md:p-12 -mx-4 md:-mx-12 lg:-mx-16 border-y border-gray-100 my-16">
                            <div className="text-center mb-12">
                                <h2 className="font-playfair text-3xl font-normal text-gray-900 mb-4 tracking-tight">Core Values</h2>
                                <div className="w-12 h-[1px] bg-amber-800 mx-auto"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                                {coreValues.map((value, idx) => (
                                    <div key={idx} className="bg-white p-6 shadow-sm border border-gray-100 group hover:-translate-y-1 transition-transform duration-300">
                                        <h3 className="font-inter text-sm tracking-widest uppercase text-gray-900 mb-3 group-hover:text-amber-800 transition-colors">
                                            {value.title}
                                        </h3>
                                        <p className="font-inter text-sm text-gray-500 font-light leading-relaxed">
                                            {value.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* What Else Do We Do? */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    What Else Do We Do?
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-inter text-gray-600 font-light leading-relaxed">
                                    Apart from publishing and disseminating the scientific, intellectual, and professional works of Dr Albert Antwi-Boasiako, we also offer services, guidance, and support to other Authors and Publishers, particularly new Authors whose works seek to contribute to the body of knowledge that improves the Human Condition.
                                </p>
                            </div>
                        </section>

                        {/* Our Publishing Promise */}
                        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-12 border-t border-gray-100">
                            <div className="md:col-span-4">
                                <h2 className="font-playfair text-2xl font-normal text-gray-900 border-l-[1px] border-amber-800 pl-4">
                                    Our Publishing Promise
                                </h2>
                            </div>
                            <div className="md:col-span-8 prose prose-lg">
                                <p className="font-playfair text-2xl text-gray-900 italic leading-snug">
                                    "Antwi-Boasiako Publications is more than a publisher; it is an institution committed to documenting the works of one of Africa’s finest minds – in shaping the continent’s strategic future."
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
