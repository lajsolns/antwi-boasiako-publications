"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Geist } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const TrentoMedia = "/image/media_interview.jpg";
const OpenScience = "/image/openscience_hall.png";
const OpenScienceModel = "/image/openscience_hall_model.png";
const Unctad = "/image/unctad.png";
const Cigi = "/image/cigi.png";
const InternetFraud = "/image/internet_auction_fraud.png"





const geist = Geist({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const academicData = [
//     {
//         id: 1,
//         title: "Implementing the Harmonized Model for Digital Evidence Admissibility Assessment",
//         description: "Albert Antwi-Boasiako, Hein Venter. Implementing the Harmonized Model for Digital Evidence Admissibility Assessment. 15th IFIP International Conference on Digital Forensics (DigitalForensics),Jan 2019, Orlando, FL, United States",
//         date: "March 2024",
//         image: OpenScience,
//         link: "/academic/cybersecurity-challenges-ghana",
//         content: {
//             mainImage: OpenScience,
//             gallery: [OpenScience],
//             video: "https://www.youtube.com/embed/your-video-id",
//             fullText: `This comprehensive study examines the cybersecurity landscape in Ghana, analyzing current challenges and proposing solutions for sustainable digital security infrastructure.

// Key findings include:
// 1. Infrastructure Development Gaps
// 2. Human Resource Capacity Building
// 3. Policy and Regulatory Framework
// 4. Public-Private Partnership Opportunities

// The research methodology combines quantitative data analysis with qualitative interviews of key stakeholders in Ghana's cybersecurity ecosystem.`,
//             authors: ["Dr. Albert Antwi-Boasiako", "Dr. Jane Smith"],
//             journal: "International Journal of Cybersecurity",
//             volume: "15",
//             issue: "2",
//             pages: "45-78",
//             doi: "10.1234/ijc.2024.001",
//             downloadUrl: "/papers/cybersecurity-ghana.pdf",
//             tags: ["Cybersecurity", "Ghana", "Developing Nations", "Digital Infrastructure"]
//         }
//     },

{
    id: 1,
    title: "Book Chapter on \"Towards a Cyber Resilience-by-Design Regime - Africa in Perspective\"",
    description: "Antwi-Boasiako, Book Chapter on \"Towards a Cyber Resilience-by-Design Regime - Africa in Perspective\", Resilience in Cyberspace, European Union (EU) Cyber Direct Project, 2021.",
    date: "January 2019",
    // image: OpenScience,
    // link: "/academic/resilience-by-design",
    content: {
        mainImage: OpenScience,
        gallery: [OpenScience],
        // video: "https://www.youtube.com/embed/your-video-id",
        fullText: `Albert Antwi-Boasiako, Hein Venter. Implementing the Harmonized Model for Digital Evidence Admissibility Assessment. 15th IFIP International Conference on Digital Forensics (DigitalForensics),Jan 2019, Orlando, FL, United States`,
        authors: ["Dr. Albert Antwi-Boasiako", "Hein Venter. "],
        journal: "Hal Open Science",
        // volume: "15",
        // issue: "2",
        // pages: "45-78",
        // doi: "10.1234/ijc.2024.001",
        // downloadUrl: "https://inria.hal.science/hal-02534607/document",
        // tags: ["Admissibility Assessment", "Digital Forensics", "United States", "IFIP International Conference"]
    }
},

{
    id: 2,
    title: "Implementing the Harmonized Model for Digital Evidence Admissibility Assessment",
    description: "Albert Antwi-Boasiako, Hein Venter. Implementing the Harmonized Model for Digital Evidence Admissibility Assessment. 15th IFIP International Conference on Digital Forensics (DigitalForensics),Jan 2019, Orlando, FL, United States",
    date: "January 2019",
    image: OpenScience,
    link: "/academic/admissibility-assessment",
    content: {
        mainImage: OpenScience,
        gallery: [OpenScience],
        // video: "https://www.youtube.com/embed/your-video-id",
        fullText: `Albert Antwi-Boasiako, Hein Venter. Implementing the Harmonized Model for Digital Evidence Admissibility Assessment. 15th IFIP International Conference on Digital Forensics (DigitalForensics),Jan 2019, Orlando, FL, United States`,
        authors: ["Dr. Albert Antwi-Boasiako", "Hein Venter. "],
        journal: "Hal Open Science",
        // volume: "15",
        // issue: "2",
        // pages: "45-78",
        // doi: "10.1234/ijc.2024.001",
        downloadUrl: "https://inria.hal.science/hal-02534607/document",
        tags: ["Admissibility Assessment", "Digital Forensics", "United States", "IFIP International Conference"]
    }
},

{
    id: 3,
    title: "A Model for Digital Evidence Admissibility Assessment",
    description: "Albert Antwi-Boasiako, Hein Venter. A Model for Digital Evidence Admissibility Assessment. 13thIFIP International Conference on Digital Forensics (DigitalForensics), Jan 2017, Orlando, FL, United states",
    date: "January 2018",
    image: OpenScienceModel,
    link: "/academic/admissibility-assessment-model",
    content: {
        mainImage: OpenScienceModel,
        gallery: [OpenScienceModel],
        // video: "https://www.youtube.com/embed/your-video-id",
        fullText: `Albert Antwi-Boasiako, Hein Venter. A Model for Digital Evidence Admissibility Assessment. 13th
IFIP International Conference on Digital Forensics (DigitalForensics), Jan 2017, Orlando, FL, United
States`,
        authors: ["Dr. Albert Antwi-Boasiako", "Hein Venter. "],
        journal: "Hal Open Science",
        // volume: "15",
        // issue: "2",
        // pages: "45-78",
        // doi: "10.1234/ijc.2024.001",
        downloadUrl: "https://inria.hal.science/hal-01716394/document",
        tags: ["Admissibility Assessment", "Digital Forensics", "United States", "IFIP International Conference"]
    }
},

  
{
    id: 4,
    title: "Systems Development, Technology and Business Performance",
    description: 'Antwi-Boasiako, "Systems Development, Technology and Business Performance", In Context: Executing Strategy in a Developing Economy, Songhai Business Publishing, Bellevue, Washington, 2017',
    date: "January 2019",
    // image: OpenScience,
    // link: "/academic/resilience-by-design",
    content: {
        mainImage: OpenScience,
        gallery: [OpenScience],
        // video: "https://www.youtube.com/embed/your-video-id",
        fullText: `Antwi-Boasiako, "Systems Development, Technology and Business Performance", In Context: Executing Strategy in a Developing Economy, Songhai Business Publishing, Bellevue, Washington, 2017`,
        authors: ["Dr. Albert Antwi-Boasiako"],
        // journal: "Hal Open Science",
        // volume: "15",
        // issue: "2",
        // pages: "45-78",
        // doi: "10.1234/ijc.2024.001",
        // downloadUrl: "https://inria.hal.science/hal-02534607/document",
        // tags: ["Admissibility Assessment", "Digital Forensics", "United States", "IFIP International Conference"]
    }
},


{
    id: 5,
    title: "Data protection regulations and international data flows:Implications for trade and development",
    description: "This study reviews the current landscape and analyzes possible options for making data protection policies internationally more compatible. It also provides a fresh and balanced take on related issues by considering the varied perspectives of different stakeholders",
    date: "April 2016",
    image: Unctad,
    link: "/academic/regulations-and-international-data-flows",
    content: {
        mainImage: Unctad,
        gallery: [Unctad],
        // video: "https://www.youtube.com/embed/your-video-id",
        fullText: `This study reviews the current landscape and analyzes possible options for making data protection policies internationally more compatible. It also provides a fresh and balanced take on related issues by considering the varied perspectives of different stakeholders`,
        authors: ["Dr. Albert Antwi-Boasiako "],
        journal: "UNCTAD",
        // volume: "15",
        // issue: "2",
        // pages: "45-78",
        // doi: "10.1234/ijc.2024.001",
        downloadUrl: "https://unctad.org/system/files/official-document/dtlstict2016d1_summary_en.pdf",
        tags: ["UNCTAD", "Data protection regulations", "United States", "Trade and development"]
    }
},


{
    id: 6,
    title: "Increasing Internet Connectivity While Combatting Cybercrime:Ghana as a Case Study",
    description: " This paper considers how to promote the growth of Internet infrastructure in the region, looking at the current state of Internet connectivity in Ghana, root causes of Internet development challenges in the country and potential solutions to these challenges. It further details the link between increased Internet connectivity and a growth in cybercrime.",
    image: Cigi,
    link: "/academic/increasing-Internet-Connectivity",
    content: {
        mainImage: Cigi,
        gallery: [Cigi],
        // video: "https://www.youtube.com/embed/your-video-id",
        fullText: `This paper considers how to promote the growth of Internet infrastructure in the region, looking at the current state of Internet connectivity in Ghana, root causes of Internet development challenges in the country and potential solutions to these challenges. It further details the link between increased Internet connectivity and a growth in cybercrime.`,
        authors: ["Dr. Albert Antwi-Boasiako", "Caroline Baylon"],
        journal: "CIGI",
        // volume: "15",
        // issue: "2",
        // pages: "45-78",
        // doi: "10.1234/ijc.2024.001",
        downloadUrl: "https://www.cigionline.org/sites/default/files/documents/GCIG%20no.44_0.pdf",
        tags: ["CIGI", "Global Commission of Internet Governance", "Ghana"]
    }
},

{
    id: 7,
    title: "The Evolution of Cyber Needs in West Africa",
    description: 'Antwi-Boasiako and C. Baylon, "The Evolution of Cyber Needs in West Africa", Chatham House Publication, 2015.',
    date: "2015",
    // image: OpenScience,
    // link: "/academic/resilience-by-design",
    content: {
        // mainImage: OpenScience,
        // gallery: [OpenScience],
        // video: "https://www.youtube.com/embed/your-video-id",
        fullText: `Albert Antwi-Boasiako, Hein Venter. Implementing the Harmonized Model for Digital Evidence Admissibility Assessment. 15th IFIP International Conference on Digital Forensics (DigitalForensics),Jan 2019, Orlando, FL, United States`,
        // authors: ["Dr. Albert Antwi-Boasiako", "Hein Venter. "],
        // journal: "Hal Open Science",
        // volume: "15",
        // issue: "2",
        // pages: "45-78",
        // doi: "10.1234/ijc.2024.001",
        // downloadUrl: "https://inria.hal.science/hal-02534607/document",
        // tags: ["Admissibility Assessment", "Digital Forensics", "United States", "IFIP International Conference"]
    }
},

{
    id: 8,
    title: "Internet Auction Fraud: The Evolving Nature of Online Auctions Criminality and the Mitigating Framework to address the Threat",
    description: 'Antwi-Boasiako and A. Aleem, "Internet Auction Fraud: The Evolving Nature of Online Auctions Criminality and the Mitigating Framework to address the Threat", International Journal of Law, Crime and Justice, 2011',
    image: InternetFraud,
    date: "2011",
    link: "/academic/internet-fraud",
    content: {
        mainImage: InternetFraud,
        gallery: [InternetFraud],
        // video: "https://www.youtube.com/embed/your-video-id",
        fullText: `This paper considers how to promote the growth of Internet infrastructure in the region, looking at the current state of Internet connectivity in Ghana, root causes of Internet development challenges in the country and potential solutions to these challenges. It further details the link between increased Internet connectivity and a growth in cybercrime.`,
        authors: ["Dr. Albert Antwi-Boasiako", "Caroline Baylon"],
        journal: "Internet Auction Fraud",
        // volume: "15",
        // issue: "2",
        // pages: "45-78",
        // doi: "10.1234/ijc.2024.001",
        downloadUrl: "https://www.sciencedirect.com/science/article/abs/pii/S1756061611000504?via%3Dihub",
        tags: ["ScienceDirect", "Internet Auction Fraud", "Online Auctions Criminality","ELSEVIER"]
    }
},


{
    id: 9,
    title: "IT GRC Solution in a Ground-Breaking Technological Milestone in the Security Management Industry",
    description: 'Antwi-Boasiako and D. Forte, "IT GRC Solution in a Ground-Breaking Technological Milestone in the Security Management Industry", Industry Publication, 2011.',
    date: "May 2011",
    // image: InternetFraud,
    link: "/academic/it-grc-solution",
    content: {
        // mainImage: InternetFraud,
        // gallery: [InternetFraud],
        // video: "https://www.youtube.com/embed/your-video-id",
        fullText: `Antwi-Boasiako and D. Forte, "IT GRC Solution in a Ground-Breaking Technological Milestone in the Security Management Industry", Industry Publication, 2011.`,
        authors: ["Prof. Dario V. Forte, CFE, CISM, CGEIT (Founder & CEO), DFLabs","Albert Antwi-Boasiako, Information Security Consultant, DFLabs UK"],
        journal: "Global Security Mag",
        // volume: "15",
        // issue: "2",
        // pages: "45-78",
        // doi: "10.1234/ijc.2024.001",
        downloadUrl: "https://www.globalsecuritymag.fr/IT-GRC-Solution-in-a-Ground,20110509,23635.html",
        tags: ["Global Security Mag"]
    }
},
   
   
];

const AcademicCard = ({ item }) => {
    const router = useRouter();

    const handleReadMore = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (item.link) {
            router.push(item.link);
        }
    };

    return (
        <div className={`group relative overflow-hidden bg-[#1C1917] shadow-md ${item.link ? 'cursor-pointer' : ''}`} onClick={() => item.link && router.push(item.link)}>
            <div className="relative h-[250px] w-full overflow-hidden">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain transition-all duration-300"
                    />
                ) : (
                    <div className="relative w-full h-full">
                        <div 
                            className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
                            style={{
                                backgroundSize: '200px 200px',
                                backgroundRepeat: 'repeat',
                                backgroundPosition: 'center'
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/55 to-stone-950/75 flex items-center justify-center p-6">
                            <h3 className={`${geist.variable} text-xl font-semibold text-stone-200 text-center line-clamp-4`}>
                                {item.title}
                            </h3>
                        </div>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className={`${geist.variable} text-xl font-semibold text-stone-200 mb-2 ${!item.image ? 'hidden' : ''}`}>
                    {item.title}
                </h3>
                <p className="text-stone-400 text-sm mb-4">
                    {item.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-stone-500 text-sm">
                        {/* DOI: {item.content.doi} */}
                    </span>
                    {item.link && (
                        <button
                            onClick={handleReadMore}
                            className="text-stone-200 hover:text-stone-100 transition-colors"
                        >
                            Read more →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const AcademicHolder = () => {
    return (
        <section className="w-full bg-[#0d0b0a] py-16 relative">
            <div
                className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
                style={{
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center'
                }}
            />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className={`serif_font text-3xl font-bold text-white mb-4`}>
                        Academic Publications
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {academicData.map((item) => (
                        <AcademicCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicHolder; 