'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function ContactPage() {
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
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <PublicationsHeader
                scrolled={scrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                currentQuoteIndex={currentQuoteIndex}
                setCurrentQuoteIndex={setCurrentQuoteIndex}
                rotatingQuotes={rotatingQuotes}
            />

            <main className="flex-grow w-full pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-[url('/image/abstract_bg_classic.jpg')] bg-cover bg-center bg-no-repeat bg-fixed relative">
                {/* Light overlay to mute background image */}
                <div className="absolute inset-0 bg-gray-50/95 backdrop-blur-sm z-0"></div>

                <div className="max-w-3xl mx-auto relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block font-inter text-xs tracking-[0.2em] text-gray-500 uppercase">
                            Get in Touch
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            Contact Us
                        </h1>
                        <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
                        <p className="font-inter text-lg text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
                            We welcome inquiries from readers, partners, and emerging authors looking to shape the future of African intellectual discourse.
                        </p>
                    </div>

                    <div className="bg-white p-10 md:p-16 border border-gray-100 shadow-xl shadow-gray-100/50 relative">
                        {/* Elegant corner accents */}
                        <div className="absolute top-0 left-0 w-8 h-[1px] bg-amber-800"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-8 bg-amber-800"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-amber-800"></div>
                        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-amber-800"></div>

                        <div className="space-y-12">
                            <div className="text-center">
                                <h3 className="font-inter text-sm tracking-widest text-amber-800 uppercase mb-4">Location</h3>
                                <p className="font-playfair text-2xl text-gray-900">
                                    84 UPSA Road<br />
                                    <span className="text-xl">East Legon, Accra</span>
                                </p>
                                <p className="font-inter text-sm text-gray-500 mt-2 uppercase tracking-wide">
                                    GPS: GM-040-9682
                                </p>
                            </div>

                            <div className="w-24 h-[1px] bg-gray-200 mx-auto"></div>

                            <div className="flex flex-col md:flex-row justify-between items-center text-center pt-4 gap-8 md:gap-4">
                                <div>
                                    <h4 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">Phone</h4>
                                    <a href="tel:+233553212028" className="font-inter text-[15px] text-gray-900 hover:text-amber-800 transition-colors whitespace-nowrap">
                                        +233 55 321 2028
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">Email</h4>
                                    <a href="mailto:info@antwi-boasiako.com" className="font-inter text-[15px] text-gray-900 hover:text-amber-800 transition-colors whitespace-nowrap">
                                        info@antwi-boasiako.com
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">Website</h4>
                                    <a href="https://www.antwi-boasiako.com" target="_blank" rel="noopener noreferrer" className="font-inter text-[15px] text-gray-900 hover:text-amber-800 transition-colors whitespace-nowrap">
                                        www.antwi-boasiako.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center pb-12 border-b border-gray-100 mb-12 relative z-20">
                            <a
                                href="mailto:info@antwi-boasiako.com"
                                className="inline-block px-10 py-4 bg-gray-900 text-white border border-gray-900 font-inter text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-gray-900 transition-colors duration-300"
                            >
                                Send a Message
                            </a>
                        </div>

                        {/* Decorative Bottom Image */}
                        <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden group border border-gray-100/50 mt-8">
                            <div className="absolute inset-4 bg-gray-200 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
                            <Image
                                src="/image/book_table.jpg"
                                alt="Antwi-Boasiako Publications Books"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 relative z-10"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <PublicationsFooter />
        </div>
    );
}
