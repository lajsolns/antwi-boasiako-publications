"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Geist } from 'next/font/google';
import { pressData } from '@/componentData/Press';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import Navbar from '../../../componentData/NavBar';
import Footer from '@/componentData/Footer';

const geist = Geist({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

const PressDetail = () => {
    const params = useParams();
    const pressItem = pressData.find(item => item.link === `/press/${params.slug}`);

    if (!pressItem) {
        return (
            <div className="min-h-screen bg-[#0d0b0a] text-stone-200 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mb-4">Press item not found</h1>
                    <Link href="/press" className="text-stone-400 hover:text-stone-200">
                        ← Back to Press
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0d0b0a] text-stone-200">
            <Navbar />
            <div className="container mx-auto px-4 py-16">
                <Link href="/press" className="text-stone-400 hover:text-stone-200 mb-8 inline-block">
                    <MdArrowBack className="inline-block mr-2" />
                    Back to Press
                </Link>

                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-2 bg-[#292524] text-stone-200 rounded-full">
                                Press Release
                            </span>
                            <span className="text-stone-400">{pressItem.date}</span>
                        </div>
                        <h1 className="text-4xl font-semibold mb-4">{pressItem.title}</h1>
                        <p className="text-stone-400 text-lg mb-6">{pressItem.description}</p>
                    </div>

                    {/* Main Image */}
                    <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={pressItem.content.mainImage}
                            alt={pressItem.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Video Section */}
                    {pressItem.content.video && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-6">Video Recording</h2>
                            <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden bg-[#292524]">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={pressItem.content.video}
                                    title="Video recording"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* Full Text */}
                    <div className="prose prose-lg max-w-none mb-8 text-stone-300">
                        {pressItem.content.fullText.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Quotes */}
                    {pressItem.content.quotes && pressItem.content.quotes.length > 0 && (
                        <div className="border-l-4 border-stone-600 pl-6 mb-8">
                            {pressItem.content.quotes.map((quote, index) => (
                                <blockquote key={index} className="italic text-xl mb-4 text-stone-300">
                                    &quot;{quote.text}&quot;
                                    <footer className="text-stone-400 mt-2">— {quote.author}</footer>
                                </blockquote>
                            ))}
                        </div>
                    )}

                    {/* Image Gallery */}
                    {pressItem.content.gallery && pressItem.content.gallery.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-6">Event Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {pressItem.content.gallery.map((image, index) => (
                                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                                        <Image
                                            src={image}
                                            alt={`Gallery image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tags */}
                    {pressItem.content.tags && pressItem.content.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {pressItem.content.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-[#292524] text-stone-200 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PressDetail; 