"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { data } from '../../../componentData/ConferenceWorkshops';
import Footer from '@/componentData/Footer';

const ImageSlider = ({ images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((image, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[600px]">
                            <Image
                                src={image.url}
                                alt={image.alt}
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Previous image"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Next image"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function ConferenceDetail({ params }) {
    const unwrappedParams = React.use(params);
    const conference = data.find(item => item.id === parseInt(unwrappedParams.id));

    if (!conference) {
        return (
            <div className="min-h-screen bg-[#0d0b0a] text-stone-200 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mb-4">Conference not found</h1>
                    <Link href="/conference-workshops" className="text-stone-400 hover:text-stone-200">
                        ← Back to Conferences
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0d0b0a] text-stone-200">
            <div className="container mx-auto px-4 py-16">
                <Link href="/conference-workshops" className="text-stone-400 hover:text-stone-200 mb-8 inline-block">
                    ← Back to Conferences
                </Link>

                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-2 bg-[#292524] text-stone-200 rounded-full">
                                {conference.role}
                            </span>
                            <span className="text-stone-400">{conference.date}</span>
                        </div>
                        <h1 className="text-4xl font-semibold mb-4">{conference.title}</h1>
                        {/* Render description as paragraphs split by double line breaks */}
                        {(conference.description || "").split(/\r?\n\r?\n/).map((text, idx) => (
                            <p key={idx} className="text-stone-400 text-lg mb-4">{text}</p>
                        ))}
                        <div className="flex items-center gap-2 text-stone-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{conference.location}</span>
                        </div>
                    </div>

                    {conference.images && conference.images.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-semibold mb-6">Event Gallery</h2>
                            {conference.images.length > 2 ? (
                                <ImageSlider images={conference.images} />
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    {conference.images.map((image, index) => (
                                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                                            <Image
                                                src={image.url}
                                                alt={image.alt}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {conference.videos && conference.videos.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-semibold mb-6">Video Recordings</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {conference.videos.map((video, index) => (
                                    <div key={index} className="aspect-video rounded-lg overflow-hidden bg-[#292524]">
                                        <iframe
                                            src={`${video.url}?autoplay=0`}
                                            title={video.title}
                                            className="w-full h-full"
                                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {conference.documents && conference.documents.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-semibold mb-6">Related Documents</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {conference.documents.map((doc, index) => (
                                    <div key={index} className="p-6 bg-[#292524] rounded-lg">
                                        <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                                        <p className="text-stone-400 mb-4">{doc.description}</p>
                                        <a
                                            href={doc.url}
                                            className="inline-flex items-center gap-2 text-stone-200 hover:text-stone-100"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Download Document
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
} 