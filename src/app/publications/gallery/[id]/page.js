'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// This would typically come from an API or database.
// Hardcoded here to match the parent gallery and demonstrate the layout.
const galleryData = {
    '1': {
        title: "The Cyber Gap Launch",
        category: "Book Launches",
        date: "October 2025",
        description: "An exclusive look at the official launch event for 'The Cyber Gap'. Industry leaders, academics, and cybersecurity professionals gathered to celebrate this milestone publication.",
        video: "/videos/booklaunch.mp4",
        images: [
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800&auto=format&fit=crop"
        ]
    },
    '2': {
        title: "Accra Book Fair",
        category: "Events",
        date: "September 2025",
        description: "Antwi-Boasiako Publications at the annual Accra Book Fair. Engaging with readers, showcasing our latest catalog, and participating in panel discussions on the future of African intellectual writing.",
        video: null,
        images: [
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1513475303643-4b2a55a297c9?q=80&w=800&auto=format&fit=crop"
        ]
    },
    '3': {
        title: "Author Signing Session",
        category: "Portraits",
        date: "August 2025",
        description: "Intimate moments from our recent author signing session. A wonderful opportunity for readers to connect directly with the minds behind our publications.",
        video: null,
        images: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
        ]
    }
};

export default function GalleryDetailPage({ params }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    // Lightbox state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Ensure params is available (Next.js 15+ app router dynamic routing requires unwrapping the params promise)
    const resolvedParams = React.use(params);
    const eventId = resolvedParams?.id;
    const eventDetails = galleryData[eventId];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [lightboxOpen]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % eventDetails.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + eventDetails.images.length) % eventDetails.images.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, eventDetails]);

    if (!eventDetails) {
        return notFound();
    }

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

            {/* Back Navigation Bar */}
            <div className="w-full bg-gray-50 border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center">
                    <Link
                        href="/publications/gallery"
                        className="inline-flex items-center text-gray-500 hover:text-amber-800 transition-colors font-inter text-xs tracking-widest uppercase"
                    >
                        <FiArrowLeft className="mr-2" />
                        Back to Gallery
                    </Link>
                </div>
            </div>

            <main className="flex-grow w-full pt-16 pb-32 px-4 sm:px-6 lg:px-8 bg-[url('/image/abstract_bg_classic.jpg')] bg-cover bg-center bg-no-repeat bg-fixed relative">
                {/* Light overlay to mute background image exactly like Contact page */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-0"></div>

                <div className="max-w-5xl mx-auto relative z-10">

                    {/* Event Header Section */}
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block font-inter text-xs tracking-[0.2em] text-amber-800 uppercase">
                            {eventDetails.category} • {eventDetails.date}
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            {eventDetails.title}
                        </h1>
                        <div className="w-16 h-[1px] bg-amber-800 mx-auto mt-6 mb-8"></div>
                        <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                            {eventDetails.description}
                        </p>
                    </div>

                    {/* Media Container (White Card) */}
                    <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50 relative">
                        {/* Elegant corner accents matching the Contact page */}
                        <div className="absolute top-0 left-0 w-8 h-[1px] bg-amber-800"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-8 bg-amber-800"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-amber-800"></div>
                        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-amber-800"></div>

                        {/* Video Section (If Available) */}
                        {eventDetails.video && (
                            <div className="mb-16">
                                <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-6 flex items-center">
                                    <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                                    Event Footage
                                    <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                                </h3>
                                <div className="relative w-full aspect-video border border-gray-200 shadow-sm bg-gray-900">
                                    <video
                                        controls
                                        className="w-full h-full object-contain"
                                        poster={eventDetails.images[0]}
                                    >
                                        <source src={eventDetails.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        )}

                        {/* Image Grid Section */}
                        <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                            <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                            Photo Gallery
                            <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                        </h3>

                        <div className="space-y-8">
                            {/* Featured (First) Image taking full width */}
                            {eventDetails.images.slice(0, 1).map((src, index) => (
                                <div
                                    key={`feat-${index}`}
                                    className="relative w-full h-[400px] md:h-[600px] overflow-hidden group border border-gray-100/50 cursor-pointer"
                                    onClick={() => openLightbox(0)}
                                >
                                    <Image
                                        src={src}
                                        alt={`${eventDetails.title} featured image`}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 1000px"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="bg-white/90 backdrop-blur-sm px-6 py-3 font-inter text-xs tracking-widest uppercase text-gray-900 border border-gray-100">
                                            View Full Screen
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Remaining images in a grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {eventDetails.images.slice(1).map((src, index) => (
                                    <div
                                        key={`grid-${index}`}
                                        className="relative w-full h-[300px] md:h-[400px] overflow-hidden group border border-gray-100/50 cursor-pointer"
                                        onClick={() => openLightbox(index + 1)}
                                    >
                                        <Image
                                            src={src}
                                            alt={`${eventDetails.title} image ${index + 2}`}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <span className="bg-white/90 backdrop-blur-sm px-4 py-2 font-inter text-[10px] tracking-widest uppercase text-gray-900 border border-gray-100">
                                                Zoom
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <PublicationsFooter />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black backdrop-blur-md transition-all duration-500"
                    >


                        {/* Navigation - Prev (with side transition area) */}
                        <button
                            onClick={prevImage}
                            className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-[110] flex items-center justify-start md:pl-12 group transition-all duration-500 bg-gradient-to-r from-black/30 to-transparent opacity-0 hover:opacity-100"
                            aria-label="Previous image"
                        >
                            <FiChevronLeft size={64} className="text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all" />
                        </button>

                        <div className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity">
                            <FiChevronLeft size={48} className="text-white/20" />
                        </div>

                        {/* Navigation - Next (with side transition area) */}
                        <button
                            onClick={nextImage}
                            className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-[110] flex items-center justify-end md:pr-12 group transition-all duration-500 bg-gradient-to-l from-black/30 to-transparent opacity-0 hover:opacity-100"
                            aria-label="Next image"
                        >
                            <FiChevronRight size={64} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </button>

                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity">
                            <FiChevronRight size={48} className="text-white/20" />
                        </div>

                        {/* Image Frame Container */}
                        <div className="relative max-w-full max-h-full flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="relative p-3 md:p-6 bg-white shadow-2xl border border-gray-200"
                                >
                                    {/* Inner Matte / Bezel effect */}
                                    <div className="relative bg-gray-50 border border-gray-100 p-1">
                                        <div className="relative w-auto h-auto max-w-[85vw] max-h-[70vh]">
                                            <img
                                                src={eventDetails.images[currentImageIndex]}
                                                alt={`${eventDetails.title} slideshow image ${currentImageIndex + 1}`}
                                                className="block w-auto h-auto max-w-full max-h-[70vh] object-contain shadow-inner"
                                                loading="eager"
                                            />
                                        </div>
                                    </div>

                                    {/* Minimalist Frame Label */}
                                    <div className="absolute -bottom-10 left-0 right-0 text-center">
                                        <p className="font-playfair text-white text-sm tracking-wide opacity-80 italic">
                                            {eventDetails.title} — Plate {currentImageIndex + 1}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Counter */}
                        <div className="absolute bottom-8 right-8 text-right pointer-events-none">
                            <p className="font-inter text-[10px] tracking-[0.4em] text-white/30 uppercase">
                                Collection Archive: {currentImageIndex + 1} of {eventDetails.images.length}
                            </p>
                            <div className="flex justify-end space-x-1.5 mt-2 opacity-20">
                                {eventDetails.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-1 h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-3 bg-amber-800 opacity-100' : 'bg-white'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Close Button - Moved here and bumped z-index to fix overlap */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[120] p-2"
                            aria-label="Close slideshow"
                        >
                            <FiX size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
