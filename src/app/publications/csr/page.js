'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlay, FiImage, FiFileText, FiArrowRight, FiHeart } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

const csrActivities = [
    {
        id: 1,
        title: 'Cybersecurity Education for Schools',
        category: 'Education',
        date: 'January 2025',
        location: 'Accra, Ghana',
        summary: 'Providing free cybersecurity awareness training to secondary school students across Accra, equipping the next generation with foundational digital safety knowledge.',
        coverImage: '/image/conferences/cyber_forum4.0/1.jpeg',
        mediaType: 'image',
        featured: true,
        impact: '2,000+ students reached'
    },
    {
        id: 2,
        title: 'Book Donation Programme',
        category: 'Literacy',
        date: 'November 2024',
        location: 'University of Ghana, Legon',
        summary: 'Donating copies of Dr. Antwi-Boasiako\'s publications to university libraries and academic institutions across Ghana to support research and education.',
        coverImage: '/image/conferences/cyber_forum4.0/3.jpeg',
        mediaType: 'image',
        featured: false,
        impact: '500+ books donated'
    },
    {
        id: 3,
        title: 'Women in Cybersecurity Initiative',
        category: 'Inclusion',
        date: 'October 2024',
        location: 'Movenpick Ambassador Hotel, Accra',
        summary: 'Supporting and mentoring women entering the cybersecurity field through workshops, networking events, and scholarship opportunities.',
        coverImage: '/image/events/CSWIPR_Ghanas_edit.png',
        mediaType: 'video',
        featured: false,
        impact: '300+ women supported'
    },
    {
        id: 4,
        title: 'African Youth Digital Summit',
        category: 'Youth Development',
        date: 'August 2024',
        location: 'Kempinski Hotel, Accra',
        summary: 'Hosting a youth-focused digital summit that brings together young African tech enthusiasts, providing mentorship and career guidance in the digital economy.',
        coverImage: '/image/events/ai4africa.jpeg',
        mediaType: 'image',
        featured: true,
        impact: '1,500+ youth engaged'
    },
    {
        id: 5,
        title: 'Rural Digital Access Project',
        category: 'Digital Inclusion',
        date: 'June 2024',
        location: 'Northern Ghana',
        summary: 'Partnering with NGOs to establish digital literacy centers in rural communities, providing access to computers, internet, and basic digital education.',
        coverImage: '/image/events/dasa25.jpeg',
        mediaType: 'image',
        featured: false,
        impact: '15 communities served'
    },
    {
        id: 6,
        title: 'Academic Research Grants',
        category: 'Research',
        date: 'March 2024',
        location: 'Pan-Africa',
        summary: 'Funding academic research into African cybersecurity challenges, supporting graduate students and researchers with grants to publish impactful papers.',
        coverImage: '/image/events/imdc.png',
        mediaType: 'image',
        featured: false,
        impact: '20 grants awarded'
    },
];

const categoryColors = {
    'Education': 'text-blue-700 bg-blue-50',
    'Literacy': 'text-amber-800 bg-amber-50',
    'Inclusion': 'text-rose-700 bg-rose-50',
    'Youth Development': 'text-green-700 bg-green-50',
    'Digital Inclusion': 'text-purple-700 bg-purple-50',
    'Research': 'text-gray-700 bg-gray-100',
};

export default function CSRPage() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { t } = useLanguage();

    const categories = ['All', ...new Set(csrActivities.map(a => a.category))];
    const filtered = selectedCategory === 'All' ? csrActivities : csrActivities.filter(a => a.category === selectedCategory);
    const featured = csrActivities.filter(a => a.featured);

    const rotatingQuotes = [
        { text: '"Giving back to communities that shaped our digital future"', link: '#' },
        { text: '"Building a more inclusive and secure digital Africa"', link: '#' },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.pageYOffset > 56);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <PublicationsHeader
                scrolled={scrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                currentQuoteIndex={currentQuoteIndex}
                setCurrentQuoteIndex={setCurrentQuoteIndex}
                rotatingQuotes={rotatingQuotes}
            />

            <main>
                {/* Hero */}
                <section className="relative pt-48 pb-32 px-8 overflow-hidden bg-[#FAF9F6]">
                    <div className="absolute inset-0 bg-[url('/image/press/chronicling_ghana.jpeg')] bg-cover bg-center opacity-[0.07]" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="font-inter text-xs tracking-[0.3em] text-amber-800 uppercase mb-6 block">{t('csr.superheading')}</span>
                        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-tight mb-6">
                            {t('csr.title')}<br />
                            <span className="italic font-light">{t('csr.titleItalic')}</span>
                        </h1>
                        <div className="w-16 h-[1px] bg-amber-800 mx-auto my-8" />
                        <p className="font-inter text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                            {t('csr.description')}
                        </p>

                        {/* Impact Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
                            {[
                                { value: '4,300+', label: t('csr.livesTouched') },
                                { value: '6', label: t('csr.activeProgrammes') },
                                { value: '15+', label: t('csr.communities') },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="font-playfair text-3xl text-gray-900 mb-1">{stat.value}</div>
                                    <div className="font-inter text-[10px] tracking-widest text-gray-400 uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Activities */}
                <section className="py-24 px-8 bg-white border-t border-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12">
                            <span className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase">{t('csr.spotlight')}</span>
                            <h2 className="font-playfair text-3xl text-gray-900 mt-2">{t('csr.featuredInitiatives')}</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featured.map((activity) => (
                                <Link href={`/publications/csr/${activity.id}`} key={activity.id} className="group relative overflow-hidden block">
                                    <div className="relative h-80 bg-gray-100">
                                        <Image src={activity.coverImage} alt={activity.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        {activity.mediaType === 'video' && (
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <FiPlay className="w-5 h-5 text-gray-900 ml-1" />
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <span className={`inline-block font-inter text-[9px] tracking-widest uppercase px-3 py-1 mb-3 ${categoryColors[activity.category]}`}>
                                                {activity.category}
                                            </span>
                                            <h3 className="font-playfair text-2xl text-white leading-snug mb-2">{activity.title}</h3>
                                            <p className="font-inter text-xs text-white/70 tracking-widest uppercase">{activity.date} · {activity.location}</p>
                                        </div>
                                    </div>
                                    <div className="p-6 border border-t-0 border-gray-100 bg-white group-hover:border-amber-800/30 transition-colors duration-300">
                                        <p className="font-inter text-sm text-gray-600 font-light leading-relaxed mb-4">{activity.summary}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <FiHeart className="w-3.5 h-3.5 text-amber-800" />
                                                <span className="font-inter text-xs text-amber-800 font-medium">{activity.impact}</span>
                                            </div>
                                            <span className="font-inter text-[10px] tracking-widest uppercase text-gray-400 group-hover:text-amber-800 transition-colors flex items-center gap-1">
                                                {t('common.readMore')} <FiArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Activities */}
                <section className="py-24 px-8 bg-[#FAF9F6] border-t border-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
                            <div>
                                <span className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase">{t('csr.ourWork')}</span>
                                <h2 className="font-playfair text-3xl text-gray-900 mt-2">{t('csr.allInitiatives')}</h2>
                            </div>
                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`font-inter text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${selectedCategory === cat
                                            ? 'bg-gray-900 text-white border-gray-900'
                                            : 'bg-white text-gray-500 border-gray-200 hover:border-gray-900 hover:text-gray-900'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filtered.map((activity) => (
                                <Link href={`/publications/csr/${activity.id}`} key={activity.id} className="group bg-white border border-gray-100 hover:border-amber-800/30 transition-all duration-300 flex flex-col">
                                    <div className="relative h-52 overflow-hidden bg-gray-100">
                                        <Image src={activity.coverImage} alt={activity.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                        {/* Media type badge */}
                                        <div className="absolute top-4 right-4">
                                            {activity.mediaType === 'video' ? (
                                                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow">
                                                    <FiPlay className="w-3.5 h-3.5 text-gray-900 ml-0.5" />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow">
                                                    <FiImage className="w-3.5 h-3.5 text-gray-600" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`font-inter text-[9px] tracking-widest uppercase px-2.5 py-1 ${categoryColors[activity.category]}`}>
                                                {activity.category}
                                            </span>
                                            <span className="font-inter text-[10px] text-gray-400">{activity.date}</span>
                                        </div>
                                        <h3 className="font-playfair text-xl text-gray-900 leading-snug mb-3 group-hover:text-amber-800 transition-colors duration-300">
                                            {activity.title}
                                        </h3>
                                        <p className="font-inter text-xs text-gray-500 font-light leading-relaxed mb-4 flex-1 line-clamp-3">
                                            {activity.summary}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                            <div className="flex items-center gap-2">
                                                <FiHeart className="w-3 h-3 text-amber-800" />
                                                <span className="font-inter text-[10px] text-amber-800">{activity.impact}</span>
                                            </div>
                                            <span className="font-inter text-[10px] tracking-widest uppercase text-gray-400 group-hover:text-amber-800 transition-colors flex items-center gap-1">
                                                {t('common.viewDetails')} <FiArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 px-8 bg-gray-900 text-white text-center">
                    <div className="max-w-2xl mx-auto">
                        <span className="font-inter text-xs tracking-[0.3em] text-amber-400 uppercase mb-4 block">{t('csr.getInvolved')}</span>
                        <h2 className="font-playfair text-4xl font-normal mb-6">{t('csr.partnerWithUs')}</h2>
                        <div className="w-12 h-[1px] bg-amber-800 mx-auto mb-8" />
                        <p className="font-inter text-gray-400 font-light leading-relaxed mb-10">
                            {t('csr.partnerDescription')}
                        </p>
                        <Link
                            href="/publications/contact"
                            className="inline-block px-10 py-4 border border-white text-white font-inter text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            {t('csr.getInTouch')}
                        </Link>
                    </div>
                </section>
            </main>

            <PublicationsFooter />
        </div>
    );
}
