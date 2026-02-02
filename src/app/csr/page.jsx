"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Footer from '@/componentData/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = ({ images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <>
            <div className="relative">
                <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="flex">
                        {images.map((image, index) => (
                            <div key={`slide-${index}`} className="flex-[0_0_100%] min-w-0 relative aspect-video">
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    className="object-cover cursor-pointer"
                                    onClick={toggleFullscreen}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
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

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={`dot-${index}`}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                index === selectedIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Thumbnails */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={`thumb-${index}`}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden ${
                                index === selectedIndex ? 'ring-2 ring-gray-900' : ''
                            }`}
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Fullscreen View */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                        onClick={toggleFullscreen}
                    >
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                            <button
                                onClick={toggleFullscreen}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                                aria-label="Close fullscreen"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="relative w-full max-w-7xl aspect-video">
                                <Image
                                    src={images[selectedIndex].url}
                                    alt={images[selectedIndex].alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    scrollPrev();
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="Previous image"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    scrollNext();
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                                aria-label="Next image"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        y: -5,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    }
};

const FeaturedProject = ({ project }) => {
    return (
        <motion.div 
            className="bg-[#1C1917] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
        >
            <div className="relative h-[400px]">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-semibold text-stone-200 mb-4">{project.title}</h3>
                    <p className="text-stone-400 mb-6">{project.description}</p>
                    <div className="flex gap-4">
                        <a 
                            href="https://educationfordevelopment.org.gh/#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-stone-800 text-stone-200 rounded-full hover:bg-stone-700 transition-colors duration-300"
                        >
                            Learn More
                        </a>
                        {/* <button className="px-6 py-2 border border-stone-400 text-stone-200 rounded-full hover:bg-stone-800 transition-colors duration-300">
                            Donate
                        </button> */}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const StoryItem = ({ icon: Icon, title, description }) => {
    return (
        <motion.div 
            className="flex items-start gap-4 p-4 rounded-lg bg-[#1C1917] hover:bg-stone-800 transition-colors duration-300 cursor-pointer group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
        >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-stone-700 transition-colors duration-300">
                <Icon className="w-6 h-6 text-stone-400 group-hover:text-stone-200 transition-colors duration-300" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-stone-200 mb-1">{title}</h3>
                <p className="text-stone-400">{description}</p>
            </div>
        </motion.div>
    );
};

const MissionVisionCard = ({ icon: Icon, title, content }) => {
    return (
        <motion.div 
            className="bg-[#1C1917] p-8 rounded-lg shadow-sm hover:bg-stone-800 transition-all duration-300 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-stone-700 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-stone-400 group-hover:text-stone-200 transition-colors duration-300" />
                </div>
                <h2 className="text-2xl font-semibold text-stone-200">{title}</h2>
            </div>
            <p className="text-stone-400">{content}</p>
        </motion.div>
    );
};

const CoreValueCard = ({ icon: Icon, title, content }) => {
    return (
        <motion.div 
            className="bg-[#1C1917] p-6 rounded-lg shadow-sm hover:bg-stone-800 transition-all duration-300 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover="hover"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-stone-700 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-stone-400 group-hover:text-stone-200 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-stone-200">{title}</h3>
            </div>
            <p className="text-stone-400">{content}</p>
        </motion.div>
    );
};

export default function CSRPage() {
    // Featured project data
    const featuredProject = {
        title: "COMMUNITY LIBRARY & ICT CENTRE",
        description: "Establishing the Janet Brako Community Library  & ICT Center with modern computers to bridge the digital divide. This initiative provides students with access to technology and digital skills training, preparing them for the modern workforce.",
        location: "Akim-Bieni, Ghana",
        image: "/image/library_banner.jpg",
        link: "#"
    };

    // Dummy data for gallery images - replace with actual images
    const images = [
        {
            url: "/image/library1.jpg",
            alt: "E4D Foundation Event"
        },
        {
            url: "/image/library.png",
            alt: "Community Outreach"
        },
        {
            url: "/image/library_banner.jpg",
            alt: "Community Outreach"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0d0b0a]">
            {/* Hero Banner */}
            <motion.div 
                className="relative h-[60vh] min-h-[500px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0">
                    <Image
                        src="/image/library_banner.jpg"
                        alt="E4D Foundation"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.div 
                    className="relative h-full flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl font-bold mb-6 text-stone-200">The E4D Foundation</h1>
                            <p className="text-xl text-stone-400 mb-8">
                                Empowering Communities Through Education
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Main Content Section */}
            <section className="w-full min-h-screen bg-[#0d0b0a] relative">
                <div 
                    className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
                    style={{ 
                        backgroundSize: '200px 200px',
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center'
                    }}
                />
                <div className="relative z-10">
                    {/* Background Section */}
                    <motion.div 
                        className="py-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-4xl font-bold mb-8 text-stone-200 serif_font">Background</h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-stone-400 mb-4">
                                    The <a href="https://educationfordevelopment.org.gh" target="_blank" rel="noopener noreferrer" className="text-stone-200 hover:text-stone-300 font-bold">Education for Development (E4D) Foundation</a> , a non-profit established by Dr. Albert Antwi-Boasiako, works to empower unserved and underserved communities in the Achiase District of Ghana&apos;s Eastern Region. Registered under the Companies Act, 2019 (Act 992) and licensed by the Department of Social Welfare, the Foundation is committed to transforming lives through education. 
                                    </p>
                                    <p className="text-stone-400 mb-4">
                                    Dr. Antwi-Boasiako, who hails from the same District, serves as a living testament to the power of education to change personal and community outcomes. His own journey from a student in District to a a professional of international standing and impact reflects the profound impact education can have on individuals and their communities.
                                    </p>
                                    <p className="text-stone-400">
                                    The Foundation&apos;s creation is inspired by Plato&apos;s cardinal belief that &quot;the direction in which education starts a man will determine his future in life.&quot; E4D&apos;s mission is to offer this critical educational opportunity to individuals in these unserved and underserved communities, particularly in Akim-Bieni and Anyinam-Kotoku, where Dr. Antwi-Boasiako first received his earliest form of formal education.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Our Story Section */}
                    <motion.div 
                        className="py-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-4xl font-semibold mb-8 text-stone-200 serif_font">Story</h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-stone-400 mb-8">
                                        The birth of E4D Foundation was shaped by three key factors:
                                    </p>
                                    <div className="space-y-4">
                                        <StoryItem 
                                            icon={AcademicCapIcon}
                                            title="Early ICT Access"
                                            description="Dr. Antwi-Boasiako's primary education which he achieved distinction, a record achievement in the community;"
                                        />
                                        <StoryItem 
                                            icon={UserGroupIcon}
                                            title="Educational Legacy"
                                            description="his late father, Albert Yaw Broni Antwi, an educationist who promoted education across the district;"
                                        />
                                        <StoryItem 
                                            icon={HeartIcon}
                                            title="Community Impact"
                                            description="and the desire to give back to these communities through educational interventions."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured Project Section */}
                    <motion.div 
                        className="py-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-4xl font-semibold mb-12 text-stone-200 serif_font">Featured Project</h2>
                                <FeaturedProject project={featuredProject} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Mission & Vision Section */}
                    <motion.div 
                        className="py-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-8 mb-16">
                                    <MissionVisionCard 
                                        icon={FlagIcon}
                                        title="Mission"
                                        content="The mission of the E4D Foundation is to empower the underprivileged for community-based development through education and we achieve this through collaboration with local stakeholders, national actors & our international partners."
                                    />
                                    <MissionVisionCard 
                                        icon={EyeIcon}
                                        title="Vision"
                                        content="E4D Foundation envisions a community-based development achieved through education."
                                    />
                                </div>

                                {/* Core Values Section */}
                                <div>
                                    <h2 className="text-4xl font-semibold mb-6 text-stone-200 serif_font">Core Values</h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <CoreValueCard 
                                            icon={UsersIcon}
                                            title="Community-focused"
                                            content="Putting the needs and aspirations of our communities at the heart of everything we do."
                                        />
                                        <CoreValueCard 
                                            icon={ChartBarIcon}
                                            title="Development-oriented"
                                            content="Committed to sustainable growth and progress in education and community development."
                                        />
                                        <CoreValueCard 
                                            icon={HandshakeIcon}
                                            title="Partnership-driven"
                                            content="Building strong collaborations to maximize our impact and reach."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Media Section */}
                    {images.length > 0 && (
                        <motion.div 
                            className="py-20"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-4xl font-semibold mb-6 text-stone-200 serif_font"> Gallery</h2>
                                    <ImageSlider images={images} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
            <Footer />
        </div>
    );
}

// Heroicons components
const AcademicCapIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
    </svg>
);

const UserGroupIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
    </svg>
);

const HeartIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
    </svg>
);

// Additional Heroicons components
const FlagIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
        />
    </svg>
);

const EyeIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
    </svg>
);

const UsersIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6 0 3.375 3.375 0 016 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
    </svg>
);

const ChartBarIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
    </svg>
);

const HandshakeIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
    </svg>
);
