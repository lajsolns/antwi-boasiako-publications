'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';
import { FiHome, FiSearch } from 'react-icons/fi';

export default function NotFound() {
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
        { text: `"Sharing the intellectual works of Dr Albert Antwi-Boasiako"`, link: '/publications' },
        { text: `"Independent publishing distinctive voices from Africa"`, link: '/publications' },
        { text: `"Celebrating excellence in cybersecurity literature"`, link: '/publications' }
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

            <main className="flex-grow flex items-center justify-center py-32 px-4 bg-[url('/image/abstract_bg_classic.jpg')] bg-cover bg-center bg-fixed relative">
                {/* Light overlay */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-0"></div>

                <div className="max-w-2xl w-full bg-white p-12 md:p-20 border border-gray-100 shadow-2xl relative z-10 text-center">
                    {/* Elegant corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-[1px] bg-amber-800"></div>
                    <div className="absolute top-0 left-0 w-[1px] h-12 bg-amber-800"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-[1px] bg-amber-800"></div>
                    <div className="absolute bottom-0 right-0 w-[1px] h-12 bg-amber-800"></div>

                    <span className="inline-block font-inter text-xs tracking-[0.4em] text-amber-800 uppercase mb-6">
                        Error Code 404
                    </span>

                    <h1 className="font-playfair text-6xl md:text-8xl font-normal text-gray-900 mb-8 tracking-tighter">
                        Lost in <br /> Thought
                    </h1>

                    <div className="w-16 h-[1px] bg-amber-800 mx-auto mb-10"></div>

                    <p className="font-inter text-lg text-gray-600 font-light leading-relaxed mb-12">
                        The page you are looking for has been moved, renamed, or perhaps never existed in this collection.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/publications"
                            className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-inter text-xs tracking-widest uppercase hover:bg-amber-800 transition-all duration-500 flex items-center justify-center gap-3"
                        >
                            <FiHome />
                            Back to Home
                        </Link>
                        <Link
                            href="/publications/all-books"
                            className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-900 font-inter text-xs tracking-widest uppercase hover:border-amber-800 transition-all duration-500 flex items-center justify-center gap-3"
                        >
                            <FiSearch />
                            Browse Library
                        </Link>
                    </div>

                    {/* Decorative fine print */}
                    <p className="mt-16 font-inter text-[10px] tracking-widest text-gray-300 uppercase italic">
                        Antwi-Boasiako Publications — Archive Search
                    </p>
                </div>
            </main>

            <PublicationsFooter />
        </div>
    );
}
