"use client";
import { motion } from "framer-motion";
import { Geist } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import ForumCyber4 from "../../../public/image/Forum_Cyber_4.0.png"
import OctopusConference2025 from "../../../public/image/Octopus_Conference_2025.png"
import Link from 'next/link'

const geist = Geist({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const data = [
    {
        title: "Book Launch: THE REPUBLIC",
        description: "A Professional Journey, Ghana's Cybersecurity & the Making of a Role Model Country",
        date: "November 25, 2025",
        status: 'Upcoming',
        link: null,
        image: "/image/events/book_launch.jpeg",
        location: "British Council Ridge, Accra",
        role: "Author",
        organisers: "Antwi-Boasiako Publications",
        imageAlt:  "/image/events/book_launch.jpeg"
    },

    {
        title: "Digital Assets Summit Africa (DASA '25)",
        description: "Unlocking Africa's Digital Economy Through Innovation & Regulation",
        date: "29 - 30 September, 2025",
        status: 'Upcoming',
        link: null,
        image: "/image/events/dasa25.jpeg",
        location: "Ghana-India Kofi Annan Centre of Excellence in ICT (GI-KACE), Accra",
        role: "Speaker",
        organisers: null,
        imageAlt: "/image/events/dasa25.jpeg"
    },

    {
        title: "Cybersecurity Hygiene",
        description: "Promoting Safe Online Practices among PR Practitioners",
        date: "28th August, 2025",
        status: 'Upcoming',
        link: null,
        image: "/image/events/CSWIPR_Ghanas_edit2.png",
        location: "Virtual session",
        role: "Resource Person",
        organisers: "Women in PR Ghana",
        imageAlt: "/image/events/CSWIPR_Ghanas.jpg"
    },

    {
        title: "4TH International Maritime Defence Exhibition & Conference (IMDEC)",
        description: "Interactive Panel Discussion on the topic Cybersecurity Challenges in AI-Driven Maritime Surveillance",
        date: "8 - 9 July, 2025",
        status: 'Done',
        link: "https://imdecafrica.com/",
        image: "/image/events/imdec.jpeg",
        location: "Burma Hall, Ghana Armed Forces Headquarters, Accra Ghana",
        role: "Panelist",
        organisers: "Ghana Navy"
    },

    // {
    //     title: "FIRSTCON25",
    //     description: 'Panel Discussion on the topic "Developing a Sectoral CERT Ecosystem"',
    //     date: "22 - 27 June, 2025",
    //     status: 'Done',
    //     link: 'https://www.first.org/conference/2025/',
    //     image: "/image/events/firstcon25.jpeg",
    //     location: "Copenhagen, Denmark",
    //     role: "Panelist",
    //     organisers: "FIRST Global"
    // },

    // {
    //     title: "Octopus Conference 2025",
    //     description: 'Panel Discussion on the topic, "Cyber Interference with Democracy"',
    //     date: "5th June, 2025",
    //     status: 'Done',
    //     link: 'conference-workshops/55',
    //     image: "/image/Octopus_Conference_2025.png",
    //     location: "Strasbourg, France",
    //     role: "Panelist",
    //     organisers: "Council of Europe"
    // },

    // {
    //     title: "Transform Africa Summit 2025",
    //     description: 'Transform Africa Summit 2025',
    //     date: "22 - 24 July, 2025",
    //     status: "Upcoming",
    //     link: "https://transformafricasummit.org/home-25/",
    //     image: "/image/events/ai4africa.jpeg",
    //     location: "Kigali Convention Center, Rwanda",
    //     role: "Panelist",
    //     organisers: ""
    // },




    // {
    //     title: "Forum Cyber 4.0",
    //     description: 'Panel Discussion on the topic, "Strategies and Cooperation in Cyberspace, Building Capacities for a Secure Digital Society"',
    //     date: "4th June, 2025",
    //     status: "Done",
    //     link: 'https://www.cyber40.it/forum-cyber-4-0-2025/#SPEAKERS',
    //     image: "/image/forumeCyber4.0.jpeg",
    //     location: "Rome, Italy",
    //     role: "Panelist",
    //     organisers: "Italy Cybersecurity Competence Centre"
    // },
    // {
    //     title: "Book Launch : French Version",
    //     description: "Les 10 commandements pour un développement national durable de la cybersécurité L'Afrique en contexte : leçons pratiques et bonnes pratiques",
    //     date: "4th February, 2025",
    //     status: "Done",
    //     link: "https://x.com/aantwi_boasiako/status/1890705589778465104",
    //     image: "/image/french_launch.jpg",
    //     location: "Morroco",
    //     role: "Author",
    //     organisers: "Antwi-Boasiako Publications"
    // },

    
    // {
    //     title: "Book Launch : French Version",
    //     description: "Les 10 commandements pour un développement national durable de la cybersécurité L'Afrique en contexte : leçons pratiques et bonnes pratiques",
    //     date: "4th February, 2025",
    //     status: "Done",
    //     link: "https://x.com/aantwi_boasiako/status/1890705589778465104",
    //     image: "/image/french_launch.jpg",
    //     location: "Morroco",
    //     role: "Author",
    //     organisers: "French Cybersecurity Association"
    // },
    // {
    //     title: "ISACA Seminar",
    //     description: "Highlights from my address at the ISACA Seminar on 'Cybersecurity in Ghana: The Present & The Future'.",
    //     date: "24th January, 2025",
    //     status: "Done",
    //     link: 'https://www.linkedin.com/feed/update/urn:li:activity:7288806687048634369/',
    //     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    //     location: "Accra, Ghana",
    //     role: "Keynote Speaker",
    //     organisers: "ISACA Ghana Chapter"
    // },
    // {
    //     title: "Tech in Ghana",
    //     description: "It was encouraging to see a number of young people pursuing different interests in Tech including cybersecurity",
    //     date: "26th November, 2024",
    //     status: "Done",
    //     link: 'https://www.linkedin.com/feed/update/urn:li:activity:7267688266072559616/',
    //     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    //     location: "Accra, Ghana",
    //     role: "Guest Speaker",
    //     organisers: "Tech in Ghana"
    // },
    // {
    //     title: "Book Launch: English Version",
    //     description: "The Ten Commandments for Sustainable National Cybersecurity Development – Africa in Context: Practical Lessons and Good Practices.",
    //     date: "12th August, 2021",
    //     status: "Done",
    //     link: 'https://www.linkedin.com/feed/update/urn:li:activity:7266106496181010432/',
    //     image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop",
    //     location: "Accra, Ghana",
    //     role: "Author & Speaker",
    //     organisers: "Ghana Cybersecurity Authority"
    // }
];

const EventsHolder = () => {
    const [desktopApi, setDesktopApi] = React.useState(null);
    const [mobileApi, setMobileApi] = React.useState(null);
    const [canScrollPrev, setCanScrollPrev] = React.useState(true);
    const [canScrollNext, setCanScrollNext] = React.useState(true);
    const [isMobile, setIsMobile] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalImage, setModalImage] = React.useState(null);

    const processedData = useMemo(() => {
        const today = new Date();

        return data.map(event => {
            let dateString = event.date;
            
            if (dateString.includes(' - ')) {
                const parts = dateString.split(' - ');
                dateString = parts[parts.length - 1];
            }

            const cleanDateString = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');

            const eventDate = new Date(cleanDateString);
            eventDate.setHours(23, 59, 59, 999); 

            const isDone = today > eventDate;
            
            return {
                ...event,
                status: isDone ? 'Done' : 'Upcoming'
            };
        });
    }, []);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        
        // Initial check
        checkMobile();
        
        // Add event listener
        window.addEventListener('resize', checkMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const onSelect = useCallback((api) => {
        if (!api) return;
        const scrollProgress = api.scrollProgress();
        setCanScrollPrev(scrollProgress > 0);
        setCanScrollNext(scrollProgress < 1);
    }, []);

    const handlePrevClick = useCallback(() => {
        if (window.innerWidth >= 640) {
            if (desktopApi) {
                desktopApi.scrollPrev();
                onSelect(desktopApi);
            }
        } else {
            if (mobileApi) {
                mobileApi.scrollPrev();
                onSelect(mobileApi);
            }
        }
    }, [desktopApi, mobileApi, onSelect]);

    const handleNextClick = useCallback(() => {
        if (window.innerWidth >= 640) {
            if (desktopApi) {
                desktopApi.scrollNext();
                onSelect(desktopApi);
            }
        } else {
            if (mobileApi) {
                mobileApi.scrollNext();
                onSelect(mobileApi);
            }
        }
    }, [desktopApi, mobileApi, onSelect]);

    useEffect(() => {
        if (!desktopApi) return;
        onSelect(desktopApi);
        desktopApi.on("reInit", onSelect);
        desktopApi.on("select", onSelect);
        desktopApi.on("settle", onSelect);
        return () => {
            desktopApi.off("select", onSelect);
            desktopApi.off("reInit", onSelect);
            desktopApi.off("settle", onSelect);
        };
    }, [desktopApi, onSelect]);

    useEffect(() => {
        if (!mobileApi) return;
        onSelect(mobileApi);
        mobileApi.on("reInit", onSelect);
        mobileApi.on("select", onSelect);
        mobileApi.on("settle", onSelect);
        return () => {
            mobileApi.off("select", onSelect);
            mobileApi.off("reInit", onSelect);
            mobileApi.off("settle", onSelect);
        };
    }, [mobileApi, onSelect]);

    return (
        <section className='w-full bg-[#0d0b0a] md:p-5 p-5 pt-6'>
            <div className='container mx-auto border-b border-[#464646] pb-12 md:pb-16 '>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className=" w-full flex items-center justify-between gap-5 pb-5 relative z-20"
                >
                    <div className="flex flex-col gap-5 w-full">
                        <div className="w-full flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <motion.h1
                                    className={`${geist.variable} md:text-2xl text-2xl font-semibold text-stone-200`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.7 }}
                                >
                                    Events
                                </motion.h1>
                                <hr className="md:w-[50%] w-[50%]" />
                            </div>
                            <Link 
                                href="/conference-workshops" 
                                className="text-stone-200 hover:text-stone-100 hover:underline transition-colors duration-200 text-sm font-medium flex items-center group hidden md:flex"
                            >
                                <span>View all</span>
                                <MdKeyboardArrowRight size={25} />
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-full">
                                    <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
                                </div>
                                <span className="text-sm text-stone-400">Upcoming</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-full">
                                    <div className="w-[8px] h-[8px] bg-[#78716C] rounded-full"></div>
                                </div>
                                <span className="text-sm text-stone-400">Past</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 relative z-20">
                        {(processedData.length > 3 || isMobile) && (
                            <>
                                <button
                                    onClick={handlePrevClick}
                                    disabled={!canScrollPrev}
                                    className="w-[40px] h-[40px] rounded-full border border-[#fff] hover:bg-white text-stone-100 hover:text-stone-950 flex items-center justify-center disabled:opacity-50 relative z-20"
                                >
                                    <MdKeyboardArrowLeft />
                                </button>
                                <button
                                    onClick={handleNextClick}
                                    disabled={!canScrollNext}
                                    className="w-[40px] h-[40px] rounded-full border border-[#fff] hover:bg-white text-stone-100 hover:text-stone-950 flex items-center justify-center disabled:opacity-50 relative z-20"
                                >
                                    <MdKeyboardArrowRight />
                                </button>
                            </>
                        )}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full sm:block hidden"
                >
                    <Carousel
                        opts={{
                            align: "start",
                            containScroll: "trimSnaps",
                            dragFree: false,
                            skipSnaps: false,
                            inViewThreshold: 0.7
                        }}
                        setApi={setDesktopApi}
                        className="w-full"
                    >
                        <CarouselContent>
                            {processedData.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 cursor-pointer">
                                    <div className="p-1">
                                        <Card
                                            className="group overflow-hidden border border-stone-800 bg-stone-900/50 hover:bg-stone-800/50 transition-all duration-300"
                                            onClick={() => {
                                                if (!item.link) {
                                                    setModalImage(item.imageAlt);
                                                    setModalOpen(true);
                                                }
                                            }}
                                            style={{ cursor: !item.link ? 'pointer' : 'default' }}
                                        >
                                            <div className="relative h-48 w-full overflow-hidden">
                                                {item.link ? (
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" tabIndex={-1} style={{display:'block',height:'100%'}}>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            className={`${index === 0 ? 'object-cover' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-300`}
                                                        />
                                                    </a>
                                                ) : (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className={`${index === 0 ? 'object-cover' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-300`}
                                                    />
                                                )}
                                            </div>
                                            <CardContent className="p-6">
                                                <div className="flex flex-col h-full">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="w-[50px] h-[40px] rounded-lg bg-black relative flex items-center justify-center">
                                                            <div className={`w-2 h-2 rounded-full
                                                                ${item?.status === 'Upcoming'
                                                                    ? 'bg-green-500 animate-pulse shadow-lg shadow-green-500/50'
                                                                    : item?.status === 'Done'
                                                                    ? 'bg-gray-500'
                                                                    : 'bg-gray-500'
                                                                }`}></div>
                                                        </div>
                                                        <span className="text-xs text-stone-400">{item?.date}</span>
                                                    </div>
                                                    <h3 className="text-lg font-medium text-stone-200 group-hover:text-white transition-colors duration-300">
                                                        {item?.title}
                                                    </h3>
                                                    <p className="text-sm text-stone-400 mt-2 line-clamp-3">
                                                        {item?.description}
                                                    </p>
                                                    <div className="mt-3 flex flex-col gap-2">
                                                        <div className="flex items-center gap-4 text-sm text-stone-400">
                                                            <div className="flex items-center md:gap-1">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                </svg>
                                                                <span>{item?.location}</span>
                                                            </div>
                                                            <div className="flex items-center md:gap-1">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                                <span>{item?.role}</span>
                                                            </div>
                                                        </div>
                                                        {item?.organisers && (
                                                            <div className="flex items-center md:gap-1 text-sm text-stone-400">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                                </svg>
                                                                <span>{item?.organisers}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {item?.link && (
                                                        <div className="mt-4 pt-4 border-t border-stone-800">
                                                            <a 
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-sm text-stone-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                                                            >
                                                                View Event
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full block sm:hidden"
                >
                    <Carousel
                        opts={{
                            align: "start",
                            containScroll: "trimSnaps",
                            dragFree: false,
                            skipSnaps: false,
                            inViewThreshold: 0.7
                        }}
                        setApi={setMobileApi}
                        className="w-full"
                    >
                        <CarouselContent>
                            {processedData.map((item, index) => (
                                <CarouselItem key={index} className="cursor-pointer">
                                    <div className="p-1">
                                        <Card
                                            className="group overflow-hidden border border-stone-800 bg-stone-900/50 hover:bg-stone-800/50 transition-all duration-300"
                                            onClick={() => {
                                                if (!item.link) {
                                                    setModalImage(item.image);
                                                    setModalOpen(true);
                                                }
                                            }}
                                            style={{ cursor: !item.link ? 'pointer' : 'default' }}
                                        >
                                            <div className="relative h-48 w-full overflow-hidden">
                                                {item.link ? (
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" tabIndex={-1} style={{display:'block',height:'100%'}}>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            className={`${index === 2 ? 'object-cover' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-300`}
                                                        />
                                                    </a>
                                                ) : (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className={`${index === 2 ? 'object-cover' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-300`}
                                                    />
                                                )}
                                            </div>
                                            <CardContent className="p-6">
                                                <div className="flex flex-col h-full">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="w-[50px] h-[40px] rounded-lg bg-black relative flex items-center justify-center">
                                                            <div className={`w-2 h-2 rounded-full
                                                                ${item?.status === 'Upcoming'
                                                                    ? 'bg-green-500 animate-pulse shadow-lg shadow-green-500/50'
                                                                    : item?.status === 'Done'
                                                                    ? 'bg-gray-500'
                                                                    : 'bg-gray-500'
                                                                }`}></div>
                                                        </div>
                                                        <span className="text-xs text-stone-400">{item?.date}</span>
                                                    </div>
                                                    <h3 className="text-lg font-medium text-stone-200 group-hover:text-white transition-colors duration-300">
                                                        {item?.title}
                                                    </h3>
                                                    <p className="text-sm text-stone-400 mt-2 line-clamp-2">
                                                        {item?.description}
                                                    </p>
                                                    <div className="mt-3 flex flex-col gap-2">
                                                        <div className="flex items-center gap-4 text-sm text-stone-400">
                                                            <div className="flex items-center gap-1">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                </svg>
                                                                <span>{item?.location}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                                <span>{item?.role}</span>
                                                            </div>
                                                        </div>
                                                        {item?.organisers && (
                                                            <div className="flex items-center gap-1 text-sm text-stone-400">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                                </svg>
                                                                <span>{item?.organisers}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {item?.link && (
                                                        <div className="mt-4 pt-4 border-t border-stone-800">
                                                            <a 
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-sm text-stone-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                                                            >
                                                                View Event
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>
            </div>
            {/* Modal for full image preview. */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-2" onClick={() => setModalOpen(false)}>
                    <div className="relative max-w-3xl w-full " onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 text-white text-2xl z-10"
                            onClick={() => setModalOpen(false)}
                        >
                            &times;
                        </button>
                        <div className="relative">
                            <div className="relative w-full" style={{ height: '70vh' }}>
                                <Image 
                                    src={modalImage} 
                                    alt="Event Full" 
                                    fill
                                    className="rounded-lg object-contain"
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </div>
                            {modalImage && modalImage.includes('book_launch') && (
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 pt-4">
                                    <Link 
                                        href="/gallery"
                                        className="bg-black text-black md:bg-black md:text-white bg-white  px-6 py-2 rounded-full font-medium transition-colors mt-4"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.gtag?.('event', 'video_gallery_click', {
                                                event_category: 'engagement',
                                                event_label: 'view_book_launch_video_modal'
                                            });
                                        }}
                                    >
                                        Watch Highlights
                                    </Link>
                                    <Link 
                                        href="/concept-note"
                                        className="bg-black text-black md:bg-black md:text-white bg-white  px-6 py-2 rounded-full font-medium transition-colors mt-4"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.gtag?.('event', 'concept_note_click', {
                                                event_category: 'engagement',
                                                event_label: 'view_concept_note_modal'
                                            });
                                        }}
                                    >
                                        Read Synopsis
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default EventsHolder