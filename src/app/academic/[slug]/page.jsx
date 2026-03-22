"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Geist } from 'next/font/google';
import { academicData } from '@/componentData/Academic';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { MdArrowBack, MdDownload } from 'react-icons/md';
import Footer from '@/componentData/Footer';

const geist = Geist({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

const AcademicDetail = () => {
    const params = useParams();
    const paper = academicData.find(item => item.link === `/academic/${params.slug}`);

    if (!paper) {
        return (
            <div className="min-h-screen bg-[#0d0b0a] text-stone-200 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mb-4">Paper not found</h1>
                    <Link href="/academic" className="text-stone-400 hover:text-stone-200">
                        ← Back to Academic Papers
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0d0b0a] text-stone-200">
            <div className="container mx-auto px-4 py-16">
                <Link href="/academic" className="text-stone-400 hover:text-stone-200 mb-8 inline-block">
                    ← Back to Academic Papers
                </Link>

                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-2 bg-[#292524] text-stone-200 rounded-full">
                                {paper.content.journal}
                            </span>
                            <span className="text-stone-400">{paper.date}</span>
                        </div>
                        <h1 className="text-4xl font-semibold mb-4">{paper.title}</h1>
                        <p className="text-stone-400 text-lg mb-6">{paper.description}</p>
                        {/* <div className="flex items-center gap-2 text-stone-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>DOI: {paper.content.doi}</span>
                        </div> */}
                    </div>

                    {/* Main Image */}
                    {paper.content.mainImage && (
                        <div className="relative w-full h-[300px] md:h-[500px] mb-8 rounded-lg overflow-hidden bg-[#1C1917]">
                            <Image
                                src={paper.content.mainImage}
                                alt={paper.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}

                    {/* Video Section */}
                    {paper.content.video && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-6">Video Presentation</h2>
                            <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={paper.content.video}
                                    title="Video presentation"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* Full Text */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-6">Abstract</h2>
                        <div className="prose prose-lg max-w-none text-stone-400">
                            {paper.content.fullText.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Image Gallery */}
                    {paper.content.gallery && paper.content.gallery.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {paper.content.gallery.map((image, index) => (
                                    <div key={index} className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden bg-[#1C1917]">
                                        <Image
                                            src={image}
                                            alt={`Figure ${index + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Download Section */}
                    {paper.content.downloadUrl && (
                        <div className="mb-8 p-6 bg-[#292524] rounded-lg w-fit">
                            <h3 className="text-xl font-semibold mb-4">Download Paper</h3>
                            <a
                                href={paper.content.downloadUrl}
                                className="inline-flex items-center px-4 py-2 bg-[#1C1917] text-stone-200 rounded-md hover:bg-[#0d0b0a] transition-colors"
                                download
                            >
                                <MdDownload className="mr-2" />
                                Download PDF
                            </a>
                        </div>
                    )}

                    {/* Tags */}
                    {paper.content.tags && paper.content.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {paper.content.tags.map((tag, index) => (
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

export default AcademicDetail; 