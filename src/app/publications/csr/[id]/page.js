'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiHeart, FiShare2, FiCalendar, FiMapPin, FiPlay, FiUsers } from 'react-icons/fi';
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
        fullDescription: `In January 2025, Antwi-Boasiako Publications partnered with the Ghana Education Service to deliver a comprehensive cybersecurity awareness programme to over 2,000 secondary school students across Accra.

The programme covered essential topics including safe online behaviour, password security, recognising phishing attempts, and understanding the implications of cybercrime. Students participated in interactive workshops facilitated by certified cybersecurity professionals.

Dr. Antwi-Boasiako personally led several sessions, drawing on his extensive experience as Director-General of the Cyber Security Authority to connect with young audiences and inspire the next generation of digital leaders.

The initiative also provided free copies of relevant publications to school libraries, ensuring the knowledge shared during the workshops continues to serve students long after the programme concluded.`,
        coverImage: '/image/conferences/cyber_forum4.0/1.jpeg',
        mediaType: 'image',
        impact: '2,000+ students reached',
        gallery: [
            '/image/conferences/cyber_forum4.0/1.jpeg',
            '/image/conferences/cyber_forum4.0/3.jpeg',
            '/image/conferences/cyber_forum4.0/4.jpeg',
        ],
        videoUrl: null,
        outcomes: [
            '2,000+ secondary school students trained',
            'Free publications donated to 15 school libraries',
            'Partnership established with Ghana Education Service',
            'Follow-up programme scheduled for 2025',
        ],
        relatedIds: [2, 4],
    },
    {
        id: 2,
        title: 'Book Donation Programme',
        category: 'Literacy',
        date: 'November 2024',
        location: 'University of Ghana, Legon',
        summary: 'Donating copies of Dr. Antwi-Boasiako\'s publications to university libraries and academic institutions across Ghana to support research and education.',
        fullDescription: `The Book Donation Programme seeks to democratise access to high-quality cybersecurity and digital transformation literature across Ghana's academic institutions.

In November 2024, Antwi-Boasiako Publications donated over 500 copies of key publications to university libraries, polytechnics, and research institutions across Ghana. The donations included "The Republic", "The 10 Commandments for Sustainable National Cybersecurity Development", and "Digital Transformation".

The programme acknowledges that access to quality academic literature remains a significant barrier for many Ghanaian students and researchers. By placing these publications directly in institutional libraries, we ensure that cost is never an obstacle to learning.

Academic institutions that received donations have reported significant increases in student engagement with cybersecurity and digital transformation topics, with several citing the publications as required reading in their postgraduate programmes.`,
        coverImage: '/image/conferences/cyber_forum4.0/3.jpeg',
        mediaType: 'image',
        impact: '500+ books donated',
        gallery: [
            '/image/conferences/cyber_forum4.0/3.jpeg',
            '/image/conferences/cyber_forum4.0/1.jpeg',
        ],
        videoUrl: null,
        outcomes: [
            '500+ books donated to 25 institutions',
            'Coverage across all 16 regions of Ghana',
            'Partnerships with 5 universities established',
            'Annual donation programme launched',
        ],
        relatedIds: [1, 6],
    },
    {
        id: 3,
        title: 'Women in Cybersecurity Initiative',
        category: 'Inclusion',
        date: 'October 2024',
        location: 'Movenpick Ambassador Hotel, Accra',
        summary: 'Supporting and mentoring women entering the cybersecurity field through workshops, networking events, and scholarship opportunities.',
        fullDescription: `The Women in Cybersecurity Initiative was launched to address the significant gender gap in the cybersecurity industry across Africa. Women represent less than 25% of the global cybersecurity workforce, and in Africa, this figure is even lower.

Through a series of workshops, mentorship sessions, and networking events held in October 2024, the initiative brought together over 300 women from across Ghana who are either working in or aspiring to enter the cybersecurity field.

Participants were offered access to scholarship opportunities for professional certifications, mentorship from senior cybersecurity professionals, and networking opportunities with industry leaders. Dr. Antwi-Boasiako served as the keynote speaker, sharing insights from his career and the importance of diversity in building robust national cybersecurity frameworks.

The initiative also launched a scholarship fund to support 10 women annually in obtaining recognised cybersecurity certifications, with the first cohort receiving their scholarships at the event.`,
        coverImage: '/image/events/CSWIPR_Ghanas_edit.png',
        mediaType: 'video',
        impact: '300+ women supported',
        gallery: [
            '/image/events/CSWIPR_Ghanas_edit.png',
            '/image/conferences/cyber_forum4.0/4.jpeg',
        ],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        outcomes: [
            '300+ women participated in workshops',
            '10 full scholarships awarded for certifications',
            'Mentorship network of 50+ senior professionals established',
            'Annual initiative confirmed for 2025',
        ],
        relatedIds: [1, 4],
    },
    {
        id: 4,
        title: 'African Youth Digital Summit',
        category: 'Youth Development',
        date: 'August 2024',
        location: 'Kempinski Hotel, Accra',
        summary: 'Hosting a youth-focused digital summit that brings together young African tech enthusiasts, providing mentorship and career guidance in the digital economy.',
        fullDescription: `The African Youth Digital Summit was conceived as an annual gathering that brings together young technology enthusiasts, entrepreneurs, and aspiring digital professionals from across Africa to learn, network, and be inspired.

Held in August 2024 at the Kempinski Hotel in Accra, the summit attracted over 1,500 young participants from 12 African countries. The event featured keynote addresses, panel discussions, workshops, and a startup pitch competition with prizes worth $50,000.

Dr. Antwi-Boasiako delivered the opening keynote, "Africa's Digital Future: The Role of Youth in Building Secure Digital Nations", drawing from his publications and professional experience to paint an inspiring picture of the opportunities that await young Africans in the digital economy.

The summit also featured a career fair with 30+ technology companies offering internships and graduate opportunities, and a digital innovation showcase where young inventors demonstrated their creations.`,
        coverImage: '/image/events/ai4africa.jpeg',
        mediaType: 'image',
        impact: '1,500+ youth engaged',
        gallery: [
            '/image/events/ai4africa.jpeg',
            '/image/events/dasa25.jpeg',
            '/image/events/imdc.png',
        ],
        videoUrl: null,
        outcomes: [
            '1,500+ youth from 12 African countries',
            '$50,000 in startup prizes awarded',
            '30+ companies participated in career fair',
            'Digital innovation showcase with 50 projects',
        ],
        relatedIds: [3, 5],
    },
    {
        id: 5,
        title: 'Rural Digital Access Project',
        category: 'Digital Inclusion',
        date: 'June 2024',
        location: 'Northern Ghana',
        summary: 'Partnering with NGOs to establish digital literacy centers in rural communities, providing access to computers, internet, and basic digital education.',
        fullDescription: `The Rural Digital Access Project recognises that digital inclusion — the ability of all people to participate meaningfully in the digital economy — is as important as digital security.

Launched in June 2024 in partnership with three NGOs working in Northern Ghana, the project established 15 digital literacy centres across rural communities that previously had little or no access to computers or the internet.

Each centre was equipped with 10 refurbished computers, satellite internet connectivity, and a curriculum developed specifically for adult learners with no prior digital experience. The training programme covers basic computer literacy, internet safety, online government services, digital financial services, and basic social media use.

By the end of 2024, over 800 adults had completed the foundational programme, with many going on to use their new digital skills to access online markets for their agricultural products, apply for government services, and stay connected with family members living abroad.`,
        coverImage: '/image/events/dasa25.jpeg',
        mediaType: 'image',
        impact: '15 communities served',
        gallery: [
            '/image/events/dasa25.jpeg',
            '/image/events/imdc.png',
        ],
        videoUrl: null,
        outcomes: [
            '15 digital literacy centres established',
            '800+ adults completed foundational training',
            'Satellite internet installed in 15 rural communities',
            'Partnership with 3 NGOs formalised',
        ],
        relatedIds: [3, 6],
    },
    {
        id: 6,
        title: 'Academic Research Grants',
        category: 'Research',
        date: 'March 2024',
        location: 'Pan-Africa',
        summary: 'Funding academic research into African cybersecurity challenges, supporting graduate students and researchers with grants to publish impactful papers.',
        fullDescription: `The Academic Research Grants programme was established to fill a critical gap in African cybersecurity research. Despite Africa facing unique and complex cybersecurity challenges, there is a significant lack of published research that addresses these issues from an African perspective.

Launched in March 2024 with an initial fund of $200,000, the programme awarded 20 grants to graduate students and established researchers across 8 African countries. Grant recipients are working on topics ranging from mobile money security in Ghana to cross-border cybercrime cooperation in East Africa.

Dr. Antwi-Boasiako personally reviews all grant applications and mentors selected recipients, providing access to his extensive network of industry contacts and policymakers. Antwi-Boasiako Publications has also committed to publishing the best research outputs in a dedicated anthology series.

Several grant recipients have already presented their research at international conferences, with three papers published in peer-reviewed journals within the first year of the programme.`,
        coverImage: '/image/events/imdc.png',
        mediaType: 'image',
        impact: '20 grants awarded',
        gallery: [
            '/image/events/imdc.png',
            '/image/conferences/cyber_forum4.0/4.jpeg',
        ],
        videoUrl: null,
        outcomes: [
            '20 research grants awarded across 8 countries',
            '$200,000 total funding committed',
            '3 papers published in peer-reviewed journals',
            'Annual grant cycle established',
        ],
        relatedIds: [1, 2],
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

export default function CSRDetailPage({ params }) {
    const resolvedParams = React.use(params);
    const activity = csrActivities.find(a => a.id === parseInt(resolvedParams.id));

    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [activeImage, setActiveImage] = useState(0);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const rotatingQuotes = [
        { text: '"Creating lasting impact through community engagement"', link: '#' },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.pageYOffset > 56);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!activity) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-playfair text-3xl text-gray-900 mb-4">Initiative Not Found</h1>
                    <Link href="/publications/csr" className="font-inter text-xs tracking-widest uppercase text-amber-800 underline">
                        Back to CSR
                    </Link>
                </div>
            </div>
        );
    }

    const related = csrActivities.filter(a => activity.relatedIds.includes(a.id));

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
                <div className="relative h-[60vh] min-h-[480px] bg-gray-900 overflow-hidden">
                    <Image
                        src={activity.coverImage}
                        alt={activity.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                    {/* Video play button overlay */}
                    {activity.mediaType === 'video' && (
                        <button
                            onClick={() => setIsVideoModalOpen(true)}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-10"
                            aria-label="Play video"
                        >
                            <FiPlay className="w-7 h-7 text-gray-900 ml-1" />
                        </button>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
                        <Link href="/publications/csr" className="inline-flex items-center text-white/70 hover:text-white font-inter text-xs tracking-widest uppercase mb-6 transition-colors">
                            <FiArrowLeft className="mr-2" /> CSR Initiatives
                        </Link>
                        <span className={`inline-block font-inter text-[9px] tracking-widest uppercase px-3 py-1 mb-4 ${categoryColors[activity.category]}`}>
                            {activity.category}
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight max-w-3xl">
                            {activity.title}
                        </h1>
                        <div className="flex flex-wrap gap-6 mt-6">
                            <div className="flex items-center gap-2 text-white/70">
                                <FiCalendar className="w-4 h-4" />
                                <span className="font-inter text-sm">{activity.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/70">
                                <FiMapPin className="w-4 h-4" />
                                <span className="font-inter text-sm">{activity.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-amber-400">
                                <FiHeart className="w-4 h-4" />
                                <span className="font-inter text-sm font-medium">{activity.impact}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Summary */}
                            <section>
                                <h2 className="font-playfair text-2xl text-gray-900 mb-6 pb-4 border-b border-gray-100">Overview</h2>
                                <p className="font-inter text-lg text-gray-600 font-light leading-relaxed italic border-l-2 border-amber-800 pl-6">
                                    {activity.summary}
                                </p>
                            </section>

                            {/* Full Description */}
                            <section>
                                <h2 className="font-playfair text-2xl text-gray-900 mb-6 pb-4 border-b border-gray-100">About This Initiative</h2>
                                <div className="space-y-4">
                                    {activity.fullDescription.split('\n\n').map((para, i) => (
                                        <p key={i} className="font-inter text-gray-600 font-light leading-relaxed">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </section>

                            {/* Video Section */}
                            {activity.videoUrl && (
                                <section>
                                    <h2 className="font-playfair text-2xl text-gray-900 mb-6 pb-4 border-b border-gray-100">Video</h2>
                                    <div className="relative aspect-video bg-gray-900 overflow-hidden shadow-xl">
                                        <iframe
                                            src={activity.videoUrl}
                                            title={activity.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>
                                </section>
                            )}

                            {/* Photo Gallery */}
                            {activity.gallery && activity.gallery.length > 0 && (
                                <section>
                                    <h2 className="font-playfair text-2xl text-gray-900 mb-6 pb-4 border-b border-gray-100">Gallery</h2>
                                    {/* Main image */}
                                    <div className="relative h-80 bg-gray-100 mb-3 overflow-hidden">
                                        <Image
                                            src={activity.gallery[activeImage]}
                                            alt={`${activity.title} - image ${activeImage + 1}`}
                                            fill
                                            className="object-cover transition-opacity duration-500"
                                            sizes="(max-width: 1024px) 100vw, 66vw"
                                        />
                                    </div>
                                    {/* Thumbnails */}
                                    {activity.gallery.length > 1 && (
                                        <div className="flex gap-3">
                                            {activity.gallery.map((img, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setActiveImage(i)}
                                                    className={`relative w-20 h-16 overflow-hidden border-2 transition-all ${activeImage === i ? 'border-amber-800' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                                >
                                                    <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Outcomes */}
                            <div className="bg-[#FAF9F6] p-8 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-8 h-[1px] bg-amber-800" />
                                <div className="absolute top-0 left-0 w-[1px] h-8 bg-amber-800" />
                                <h3 className="font-playfair text-xl text-gray-900 mb-6">Key Outcomes</h3>
                                <ul className="space-y-4">
                                    {activity.outcomes.map((outcome, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-amber-800 rounded-full mt-2 flex-shrink-0" />
                                            <span className="font-inter text-sm text-gray-600 font-light leading-relaxed">{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Impact */}
                            <div className="bg-gray-900 p-8 text-white text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-8 h-[1px] bg-amber-800" />
                                <div className="absolute top-0 right-0 w-[1px] h-8 bg-amber-800" />
                                <FiUsers className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                                <div className="font-playfair text-4xl text-white mb-2">{activity.impact}</div>
                                <div className="font-inter text-xs tracking-widest uppercase text-gray-400">Total Impact</div>
                            </div>

                            {/* Share */}
                            <div className="p-8 border border-gray-100">
                                <h3 className="font-inter text-xs tracking-widest uppercase text-gray-400 mb-4">Share This Initiative</h3>
                                <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 text-gray-600 hover:border-amber-800 hover:text-amber-800 transition-all font-inter text-xs tracking-widest uppercase">
                                    <FiShare2 className="w-3.5 h-3.5" />
                                    Share
                                </button>
                            </div>

                            {/* Back link */}
                            <Link
                                href="/publications/csr"
                                className="flex items-center gap-2 text-gray-400 hover:text-amber-800 transition-colors font-inter text-xs tracking-widest uppercase"
                            >
                                <FiArrowLeft className="w-3.5 h-3.5" />
                                All Initiatives
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Related Initiatives */}
                {related.length > 0 && (
                    <section className="py-20 px-8 bg-[#FAF9F6] border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <span className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase">Explore More</span>
                            <h2 className="font-playfair text-3xl text-gray-900 mt-2 mb-10">Related Initiatives</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {related.map(rel => (
                                    <Link href={`/publications/csr/${rel.id}`} key={rel.id} className="group bg-white border border-gray-100 hover:border-amber-800/30 transition-all duration-300 flex gap-6 p-6">
                                        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden bg-gray-100">
                                            <Image src={rel.coverImage} alt={rel.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="96px" />
                                        </div>
                                        <div className="flex-1">
                                            <span className={`inline-block font-inter text-[9px] tracking-widest uppercase px-2 py-0.5 mb-2 ${categoryColors[rel.category]}`}>
                                                {rel.category}
                                            </span>
                                            <h3 className="font-playfair text-lg text-gray-900 leading-snug group-hover:text-amber-800 transition-colors">{rel.title}</h3>
                                            <p className="font-inter text-[10px] text-gray-400 mt-2">{rel.date}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Video Modal */}
                {isVideoModalOpen && activity.videoUrl && (
                    <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4" onClick={() => setIsVideoModalOpen(false)}>
                        <div className="w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
                            <iframe
                                src={activity.videoUrl + '?autoplay=1'}
                                title={activity.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                )}
            </main>

            <PublicationsFooter />
        </div>
    );
}
