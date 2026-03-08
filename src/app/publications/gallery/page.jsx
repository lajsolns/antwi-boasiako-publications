'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function GalleryPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll for header
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Rotating quotes for the top banner (same as main publications page)
    const rotatingQuotes = [
        {
            text: "Sharing the intellectual works of Dr Albert Antwi-Boasiako",
            link: "/about"
        },
        {
            text: "Independent publishing distinctive voices from Africa",
            link: "/books"
        },
        {
            text: "Celebrating excellence in cybersecurity literature",
            link: "/publications"
        },
        {
            text: "Bridging knowledge gaps through innovative publishing",
            link: "/events"
        },
        {
            text: "Your trusted source for professional insights",
            link: "/contact"
        }
    ];

    // Rotate quotes every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [rotatingQuotes.length]);

    // Sample gallery data
    const galleryItems = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
            title: "The Cyber Gap Launch",
            category: "Book Launches",
            date: "October 2025"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
            title: "Accra Book Fair",
            category: "Events",
            date: "September 2025"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
            title: "Author Signing Session",
            category: "Portraits",
            date: "August 2025"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop",
            title: "Writing Masterclass",
            category: "Workshops",
            date: "July 2025"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop",
            title: "Digital Frontiers",
            category: "Book Launches",
            date: "June 2025"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1513475303643-4b2a55a297c9?q=80&w=800&auto=format&fit=crop",
            title: "University Tour",
            category: "Events",
            date: "May 2025"
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

            {/* Main Content */}
            <main className="flex-grow w-full pt-12 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-tight">
                            Visual Journey
                        </h1>
                        <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            A curated collection of moments from our literary events, book launches,
                            and the vibrant community that brings our stories to life.
                        </p>
                        <div className="w-24 h-1 bg-amber-700 mx-auto mt-6"></div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {galleryItems.map((item) => (
                            <div
                                key={item.id}
                                className="group cursor-pointer flex flex-col space-y-4"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                    />

                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider text-gray-900 uppercase">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Caption / Details */}
                                <div className="text-center space-y-1">
                                    <h3 className="font-serif text-xl text-gray-900 group-hover:text-amber-800 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="font-inter text-sm text-gray-500 uppercase tracking-wide">
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button (Mock) */}
                    <div className="mt-20 text-center">
                        <button className="inline-block border border-gray-900 px-8 py-3 text-sm font-medium tracking-widest text-gray-900 uppercase hover:bg-gray-900 hover:text-white transition-all duration-300">
                            View More Archives
                        </button>
                    </div>
                </div>
            </main>

            <PublicationsFooter />
        </div>
    );
}
