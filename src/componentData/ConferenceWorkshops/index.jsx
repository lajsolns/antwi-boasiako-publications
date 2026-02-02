"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Geist } from 'next/font/google';
import Link from 'next/link';
const TrentoStudentSpeech = "/image/speech.jpg";


const geist = Geist({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const data = [

    {
        id: 55,
        title: "Octopus Conference 2025",
        role: "Panelist",
        date: "June 5, 2025",
        description: `Mainstreaming of cyber interference in democratic processes, particularly in elections where internal political actors consider cyber interference as part of election operations strategy is an emerging disturbing dimension of cyber interference whereby electoral interference actors are not only external actors but internal actors, capable of undermining the integrity of the elections from within. 
        

        These developments were observed in a number of elections in 2024, including 13 elections held on the African continent. Such a development; if unchecked could become ‘the new norm’ of cyber interference especially when deterrence mechanisms are weak or in some cases non-existent to deter such malign cyber actors. My book, the "The 10 Commandments for Sustainable National Cybersecurity Development - African in Context: Practical Lessons & Good Practice” provide some perspectives including legislative response to guide nations on mitigating such disturbing trends. 


        The panel discussion on Cyber interference with Democracy at the just ended Octopus Conference held in Strasbourg from June 4-6, 2025, was a perfect forum to deliberate on the issue. I extend my appreciation to the Council of Europe for the opportunity to share my perspectives on such developments on the African continent. `,
        location: "Strasbourg, France",
        image: '/image/conferences/2025_Octopus_Conference/Octopus6.jpg',

        images: [
            {
                url: '/image/conferences/2025_Octopus_Conference/Octopus1.jpg',
                alt: "CyberSecurity Forum "
            },
            {
                url: '/image/conferences/2025_Octopus_Conference/Octopus2.jpg',
                alt: "CyberSecurity Forum "
            },
            {
                url: '/image/conferences/2025_Octopus_Conference/Octopus3.jpg',
                alt: "CyberSecurity Forum "
            },
            {
                url: '/image/conferences/2025_Octopus_Conference/Octopus4.jpg',
                alt: "CyberSecurity Forum "
            },
            {
                url: '/image/conferences/2025_Octopus_Conference/Octopus6.jpg',
                alt: "CyberSecurity Forum "
            },
            {
                url: '/image/conferences/2025_Octopus_Conference/Octopus6.jpg',
                alt: "CyberSecurity Forum "
            },
            

        ],
        videos: [

        ],
        documents: [

        ]
    },

    {
        id: 54,
        title: "Forum Cyber 4.0",
        role: "Panelist",
        date: "June 4, 2025",
        description: `Leveraging on international partnerships for capacity building are effective approaches to advancing national cybersecurity capabilities, as highlighted in Commandment VI and Commandment IX of my book The 10 Commandments for Sustainable National Cybersecurity Development - African in Context: Practical Lessons & Good Practice"

        The panel discussion on "Strategies and Cooperation in Cyberspace, Building Capacities for a Secure Digital Society", at the just ended Forum Cyber 4.0, did elaborate the above imperatives. My appreciation to the Cybersecurity Competence Center of Italy for extending an invitation `,
        location: "Rome, Italy",
        image: '/image/conferences/cyber_forum4.0/4.jpeg',

        images: [
            {
                url: "/image/conferences/cyber_forum4.0/1.jpeg",
                alt: "CyberSecurity Forum "
            },
            {
                url: "/image/conferences/cyber_forum4.0/2.jpg",
                alt: "CyberSecurity Forum "
            },
            {
                url: "/image/conferences/cyber_forum4.0/3.jpeg",
                alt: "CyberSecurity Forum "
            },
            {
                url: "/image/conferences/cyber_forum4.0/4.jpeg",
                alt: "CyberSecurity Forum "
            },
            {
                url: "/image/conferences/cyber_forum4.0/5.jpeg",
                alt: "CyberSecurity Forum "
            },

        ],
        videos: [

        ],
        documents: [

        ]
    },

    {
        id: 1,
        title: "Multi-Sector Workshop on Countering Technology",
        role: "Panelist",
        date: "April 2025",
        description: "Assisted and Enabled Terrorism in West Africa; Global Internet Forum to Counter Terrorism (GIFCT) and International Institute for Justice and the Rule of Law(IIJ), Valletta, Malta.",
        location: "Valletta, Malta",
        image: null,
        // image: "/image/home_bg.jpg",

        images: [

        ],
        videos: [

        ],
        documents: [

        ]
    },
    {
        id: 2,
        title: "Prague Cyber Security Conference",
        role: "Keynote Speaker",
        date: "March 2025",
        description: "Keynote Address under the theme 'Invisible Frontlines'",
        location: "Prague, Czech Republic",
        image: null,

        images: [

        ],
        videos: [

        ],
        documents: [

        ]
    },
    {
        id: 3,
        title: "Cybersecurity Forum",
        role: "Keynote Speaker",
        date: "February 2025",
        description: "Keynote Address and Panel Session on Strengthening Africa's Digital Resilience: AI, Trusted Cloud, and Federated Cloud as Strategic Catalysts",
        location: "Rabat, Morocco",
        image: "/image/cybersecurity_forum/s5.jpg",

        images: [
            {
                url: "/image/cybersecurity_forum/s5.jpg",
                alt: "CyberSecurity Forum "
            },
            {
                url: "/image/cybersecurity_forum/s2.jpg",
                alt: "CyberSecurity Forum "
            },
            {
                url: "/image/cybersecurity_forum/s3.jpg",
                alt: "CyberSecurity Forum "
            },
            {
                url: "/image/cybersecurity_forum/s4.jpg",
                alt: "CyberSecurity Forum "
            },
            {
                url: "/image/cybersecurity_forum/s1.jpg",
                alt: "CyberSecurity Forum "
            },
        ],
        videos: [

        ],
        documents: [

        ]
    },
    {
        id: 4,
        title: "ISACA Accra Chapter Seminar",
        role: "Keynote Speaker",
        date: "January 2025",
        description: "Cybersecurity in Ghana: The Present and the Future",
        location: "Accra, Ghana",
        image: "/image/isaka_awards.png",

        images: [
            {
                url: "/image/isaka_awards.png",
                alt: "ISACA Accra Chapter Seminar"
            },
            // {
            //     url: "/image/home_bg.jpg",
            //     alt: "Panel discussion on AI"
            // },
            // {
            //     url: "/image/home_bg.jpg",
            //     alt: "Networking session"
            // }
        ],
        videos: [
            {
                url: "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1738054435/isaca_seminar_compressed_twequw.mp4",
                title: "ISACA Accra Chapter Seminar"
            },
            // {
            //     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            //     title: "Panel: AI and Cloud Security"
            // }
        ],
        documents: [
            // {
            //     url: "#",
            //     title: "Forum Report",
            //     description: "Comprehensive report on forum discussions"
            // },
            // {
            //     url: "#",
            //     title: "Research Paper",
            //     description: "AI and Cloud Security in African Context"
            // },
            // {
            //     url: "#",
            //     title: "Presentation Deck",
            //     description: "Keynote presentation slides"
            // }
        ]
    },
    {
        id: 5,
        title: "14th Edition of the Tech-in-Ghana Conference",
        role: "Speaker",
        date: "November 2024",
        description: "Conference on technology and innovation in Ghana",
        location: "Accra, Ghana",
        image: null,
    },
    {
        id: 6,
        title: "RUSI Inaugural Conference on Securing Cyberspace 2024",
        role: "Speaker",
        date: "October 2024",
        description: "An incident Responder Perspective on responsible state behaviour",
        location: "London, United Kingdom",
        image: null,
    },
    {
        id: 7,
        title: "Graduation Ceremony of University of Trento",
        role: "Guest Speaker",
        date: "October 2024",
        description: "Address to graduating students",
        location: "Trento, Italy",
        image: TrentoStudentSpeech,

        images: [
            {
                url: TrentoStudentSpeech,
                alt: "ISACA Accra Chapter Seminar"
            },

        ],
    },
    {
        id: 8,
        title: "DOT Cyber Summit: Panel Session on National Cyber",
        role: "Speaker",
        date: "September 2024",
        description: "Panel discussion on national cybersecurity strategies",
        location: "Amman, Jordan",
        image: null,
    },
    {
        id: 9,
        title: "Wilton Park Dialogue on Cyber Skills and Competencies",
        role: "Speaker",
        date: "September 2024",
        description: "Building a sustainable cyber workforce",
        location: "Wiston House, West Sussex, United Kingdom",
        image: null,

    },
    {
        id: 10,
        title: "GITEX AFRICA: Global Dialogue",
        role: "Speaker",
        date: "May 2024",
        description: "Architecting Regional Cyber Resilience: A Collaborative Blueprint",
        location: "Marrakech, Morocco",
        image: null,
    },
    {
        id: 11,
        title: "Digital Rights & Inclusion (DRIF) 2024",
        role: "Speaker",
        date: "April 2024",
        description: "Fostering Rights and Inclusion in the Digital Age",
        location: "Accra, Ghana",
        image: null,
    },
    {
        id: 12,
        title: "Joy News & Youth Bridge Foundation's National Dialogue on Cybersecurity",
        role: "Speaker",
        date: "March 2024",
        description: "National dialogue on cybersecurity awareness and development",
        location: "Accra, Ghana",
        image: null,
    },
    {
        id: 13,
        title: "Octopus Conference",
        role: "Speaker",
        date: "December 2023",
        description: "Why should African countries consider the Convention on Cybercrime and its Protocols? Capacity building as a game changer: what makes a difference?",
        location: "Bucharest, Romania",
        image: null,
    },
    {
        id: 14,
        title: "Paris Peace Forum",
        role: "Speaker",
        date: "November 2023",
        description: "Protecting Populations from Critical Harm to the Public Core of Internet",
        location: "Paris, France",
        image: null,
    },
    {
        id: 15,
        title: "GITEX Global 2023 - CYBER LEADERS OF AFRICA",
        role: "Panelist",
        date: "October 2023",
        description: "Empowering Cybersecurity for Economic Development in Africa and Beyond",
        location: "Dubai, United Arab Emirates",
        image: null,
    },
    {
        id: 16,
        title: "Internet Governance Forum – UNICEF Session",
        role: "Panelist",
        date: "October 2023",
        description: "Safe Digital Futures for Children: Aligning Global Agendas",
        location: "Kyoto, Japan",
        image: null,
    },
    {
        id: 17,
        title: "Cybertech Africa 2023",
        role: "Panelist",
        date: "October 2023",
        description: "Great Cyber Challenges for Africa with Heads of Cyber of African and Leading Countries",
        location: "Kigali, Rwanda",
        image: null,
    },
    {
        id: 18,
        title: "Global Cybersecurity Forum",
        role: "Panelist",
        date: "November 2022",
        description: "Global cybersecurity challenges and solutions",
        location: "Riyadh, Kingdom of Saudi Arabia",
        image: null,
    },
    {
        id: 19,
        title: "International Workshop on Conducting Criminal Investigations of Ransomware Attacks",
        role: "Speaker",
        date: "November 2022",
        description: "Workshop on ransomware investigation techniques and best practices",
        location: "The Hague, Netherlands",
        image: null,
    },
    {
        id: 20,
        title: "World Economic Forum Annual Meeting on Cybersecurity",
        role: "Speaker/Contributor",
        date: "November 2022",
        description: "Annual meeting on global cybersecurity challenges",
        location: "Geneva, Switzerland",
        image: null,
    },
    {
        id: 21,
        title: "Summit on Digital Diplomacy and Governance",
        role: "Discussant/Contributor",
        date: "November 2022",
        description: "DiploFoundation, Maltese Ministry for Foreign and European Affairs",
        location: "Valletta, Malta",
        image: null,
    },
    {
        id: 22,
        title: "UN-Singapore Cyber Fellowship Programme 2022",
        role: "Fellow",
        date: "August 2022",
        description: "United Nations Office for Disarmament Affairs and Cyber Security Agency of Singapore",
        location: "Singapore",
        image: null,
    },
    {
        id: 23,
        title: "African School on Internet Governance (AfriSIG) 2022",
        role: "Panelist",
        date: "July 2022",
        description: "AfriSIG & Global Partners Digital",
        location: "Lilongwe, Malawi",
        image: null,
    },
    {
        id: 24,
        title: "GIFCT Global Summit 2022",
        role: "Contributor",
        date: "July 2022",
        description: "Global Internet Forum to Counter Terrorism (GIFCT)",
        location: "California, United States",
        image: null,
    },
    {
        id: 25,
        title: "U.S.-Africa Business Summit Program",
        role: "Panelist",
        date: "July 2022",
        description: "Panel on Cybersecurity: Securing Africa's Economic Relaunch; Corporate Council on Africa",
        location: "Marrakech, Morocco",
        image: null,
    },
    {
        id: 26,
        title: "7th Singapore International Cyber Week (SICW)",
        role: "Speaker",
        date: "October 2022",
        description: "Cyber Security Agency of Singapore",
        location: "Singapore",
        image: null,
    },
    {
        id: 27,
        title: "WeProtect Global Alliance Summit",
        role: "Speaker",
        date: "June 2022",
        description: "WeProtect Global Alliance",
        location: "Brussels, Belgium",
        image: null,
    },
    {
        id: 28,
        title: "Cyber Security Summit",
        role: "Panelist",
        date: "March 2022",
        description: "Identify and Implement the Key Factors for Success to Strengthen Regional Collaboration on Cybersecurity",
        location: "Lomé, Togo",
        image: null,
    },
    {
        id: 29,
        title: "ECOWAS Cybersecurity Symposium",
        role: "Contributor",
        date: "September 2021",
        description: "Masterclass session - The UN: An International Rules Based System, International Law & Norms in Cyberspace",
        location: "Abidjan, Côte d'Ivoire",
        image: null,
    },
    {
        id: 30,
        title: "Launch of the Digital Inclusion Benchmark",
        role: "Speaker",
        date: "December 2020",
        description: "Ranking the 100 most Influential Tech Companies on Digital Inclusion: 2020 Results – World Benchmarking Alliance (WBA), the United Nations Foundation and the Office of the Special Adviser",
        location: "Virtual Event",
        image: null,
    },
    {
        id: 31,
        title: "2020 Internet Governance Forum (IGF)",
        role: "Panelist",
        date: "November 2020",
        description: "An Open Discussion about Tackling Terrorist and Violent Extremist Content - Global Internet Forum to Counter Terrorism (GIFCT)",
        location: "Virtual Event",
        image: null,
    },
    {
        id: 32,
        title: "European Union (EU) Cyber Forum",
        role: "Panelist",
        date: "September 2020",
        description: "European Union Institute for Security Studies (EUISS), German Marshall Fund of the United States and the Stiftung Neue Verantwortung and other partners",
        location: "Virtual Event",
        image: null,
    },
    {
        id: 33,
        title: "8th Annual Freedom Online Conference",
        role: "Speaker",
        date: "February 2020",
        description: "Achieving a Common Vision for Internet Freedom, Government of Ghana and Freedom Online Coalition",
        location: "Accra, Ghana",
        image: null,
    },
    {
        id: 34,
        title: "GLACY+ Advisory Mission on Cybercrime Legislation in Sierra Leone",
        role: "Trainer/Speaker",
        date: "December 2018",
        description: "Advisory mission on cybercrime legislation",
        location: "Freetown, Sierra Leone",
        image: null,
    },
    {
        id: 35,
        title: "African Forum on Cybercrime",
        role: "Speaker",
        date: "October 2018",
        description: "African Union/Council of Europe/ European Union, INTERPOL, UNODC, US State Department, UK Government, the Commonwealth Secretariat and World Bank",
        location: "Addis Ababa, Ethiopia",
        image: null,
    },
    {
        id: 36,
        title: "Council of Europe - International Conference on Judicial Cooperation in Cybercrime Matters",
        role: "Speaker",
        date: "March 2018",
        description: "International conference on judicial cooperation",
        location: "Netherlands",
        image: null,
    },
    {
        id: 37,
        title: "Council of Europe - Introductory Cybercrime and Electronic Evidence Training of Trainers Course",
        role: "Trainer/Facilitator",
        date: "September 2017",
        description: "Training of Trainers Course for the Pacific Region",
        location: "Nuku'alofa, Tonga",
        image: null,
    },
    {
        id: 38,
        title: "Council of Europe - East Africa Regional Conference on Cybercrime and Electronic Evidence",
        role: "Trainer/Facilitator",
        date: "July 2017",
        description: "Regional conference on cybercrime and electronic evidence",
        location: "Mauritius",
        image: null,
    },
    {
        id: 39,
        title: "ECOWAS Improving International Cooperation on Cybercrime & Electronic Evidence",
        role: "Trainer/Expert",
        date: "May 2016",
        description: "Council of Europe training program",
        location: "Dakar, Senegal",
        image: null,
    },
    {
        id: 40,
        title: "UNCTAD Meeting",
        role: "Speaker on Data Protection",
        date: "April 2016",
        description: "United Nations Conference on Trade and Development meeting",
        location: "Geneva, Switzerland",
        image: null,
    },
    {
        id: 41,
        title: "Octopus Conference 2015",
        role: "Session Moderator",
        date: "June 2015",
        description: "Council of Europe conference on cybercrime",
        location: "Strasbourg, France",
        image: null,
    },
    {
        id: 42,
        title: "United Nations Conference on Trade & Development (UNCTAD)",
        role: "Speaker",
        date: "March 2015",
        description: "Intergovernmental Expert Meeting on Cyberlaws and Regulations for Enhancing e-Commerce including Case Studies and Lessons Learned",
        location: "Geneva, Switzerland",
        image: null,
    },
    {
        id: 43,
        title: "Global Commission on Internet Governance",
        role: "Speaker",
        date: "February 2015",
        description: "The Royal Institute of International Affairs (Chatham House)",
        location: "London, United Kingdom",
        image: null,
    },
    {
        id: 44,
        title: "Harmonising Cyber legislation in ECOWAS",
        role: "Convenor/Speaker",
        date: "March 2014",
        description: "Council of Europe & UNCTAD",
        location: "Accra, Ghana",
        image: null,
    },
    {
        id: 45,
        title: "International MEDays 2014",
        role: "Speaker/Panelist",
        date: "2014",
        description: "Amadeus Institute",
        location: "Rabat, Morocco",
        image: null,
    },
    {
        id: 46,
        title: "West African Workshop on Computer Forensics and Intellectual Property",
        role: "Observer/Facilitator",
        date: "June 2012",
        description: "United States Department of Justice",
        location: "Accra, Ghana",
        image: null,
    },
    {
        id: 47,
        title: "International MEDays 2012",
        role: "Speaker/Panelist",
        date: "2012",
        description: "Amadeus Institute",
        location: "Rabat, Morocco",
        image: null,
    },
    {
        id: 48,
        title: "AITEC Banking & Mobile Money West Africa",
        role: "Speaker",
        date: "May 2012",
        description: "AITEC Africa",
        location: "Accra, Ghana",
        image: null,
    },
    {
        id: 49,
        title: "The 2nd Annual South African Cyber Crime Conference",
        role: "International Guest Speaker",
        date: "April 2012",
        description: "African Center for Cyberlaw & Cybercrime Prevention (ACCP)",
        location: "Cape Town, South Africa",
        image: null,
    },
    {
        id: 50,
        title: "West Africa Computer Forensics Conference",
        role: "International Guest Speaker",
        date: "April 2012",
        description: "Computer Forensics Institute of Nigeria (CFIN)",
        location: "Abuja, Nigeria",
        image: null,
    },
    {
        id: 51,
        title: "Forensic Conference for Africa",
        role: "International Guest Speaker",
        date: "March 2012",
        description: "Eastern Africa Chambers of Commerce & O'Sullivan Associates International",
        location: "Nairobi, Kenya",
        image: null,
    },
    {
        id: 52,
        title: "The East Africa Economic & High-Tech Crime Forum",
        role: "Trainer/Facilitator",
        date: "July 2011",
        description: "Forum on economic and high-tech crime",
        location: "Kampala, Uganda",
        image: null,
    },
    {
        id: 53,
        title: "CEIC Digital Investigations Conference",
        role: "Facilitator/Technology Provider",
        date: "May 2011",
        description: "Guidance Software conference on digital investigations",
        location: "Florida, United States",
        image: null,
    }
];

const ConferenceCard = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-[#1C1917] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 relative"
        >
            <div className="absolute top-4 right-4 z-10">
                {/* <div className="w-8 h-8 rounded-full bg-[#292524] flex items-center justify-center border border-stone-600">
                    <span className="text-stone-200 text-sm font-medium">#{item.id}</span>
                </div> */}
            </div>
            <div className="relative w-full h-[200px] bg-[#292524] overflow-hidden">
                <Image
                    src={item.image || "/image/home_bg.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-500 ease-in-out transform hover:scale-110 hover:brightness-110"
                />
                {!item.image && (
                    <>
                        <div className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 group-hover:bg-opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <h3 className={`${geist.variable} text-xl font-semibold text-stone-200 text-center leading-tight transition-transform duration-300 group-hover:scale-105`}>
                                {item.title}
                            </h3>
                        </div>
                    </>
                )}
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#292524] text-stone-200 text-sm rounded-full">
                        {item.role}
                    </span>
                    <span className="text-stone-400 text-sm">{item.date}</span>
                </div>
                {item.image && (
                    <h3 className={`${geist.variable} text-xl font-semibold text-stone-200 mb-2`}>
                        {item.title}
                    </h3>
                )}
                <p className="text-stone-400 text-sm mb-4 line-clamp-3">
                    {item.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-stone-500 text-sm">{item.location}</span>
                    <Link
                        href={`/conference-workshops/${item.id}`}
                        className="text-stone-200 hover:text-stone-100 transition-colors"
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const ConferenceWorkshopsHolder = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const handlePageChange = async (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;

        setIsLoading(true);
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Simulate loading state for better UX
        await new Promise(resolve => setTimeout(resolve, 300));
        setIsLoading(false);
    };

    const getPageNumbers = () => {
        const delta = 2; // Number of pages to show on each side of current page
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                range.push(i);
            }
        }

        range.forEach(i => {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        });

        return rangeWithDots;
    };

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
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >
                    <motion.h1
                        className={`${geist.variable} text-3xl font-semibold text-stone-200 mb-4 serif_font`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                    >
                        Conference & Workshop Engagements
                    </motion.h1>
                    <motion.p
                        className="text-stone-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: "easeOut"
                        }}
                    >
                        Dr. Albert Antwi-Boasiako has established himself as a distinguished speaker and thought leader in the field of cybersecurity and digital governance. His extensive participation in international conferences and workshops has contributed significantly to shaping global discourse on cybersecurity policy, digital transformation, and technological innovation.
                    </motion.p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getCurrentPageItems().map((item) => (
                        <ConferenceCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2 order-2 sm:order-1">
                        {/* First Page Button */}
                        <button
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1 || isLoading}
                            className={`p-2 rounded-md text-sm sm:text-base ${currentPage === 1
                                    ? 'bg-[#292524] text-stone-500 cursor-not-allowed'
                                    : 'bg-[#292524] text-stone-200 hover:bg-[#3f3c3a]'
                                }`}
                            aria-label="Go to first page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Previous Page Button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1 || isLoading}
                            className={`p-2 rounded-md text-sm sm:text-base ${currentPage === 1
                                    ? 'bg-[#292524] text-stone-500 cursor-not-allowed'
                                    : 'bg-[#292524] text-stone-200 hover:bg-[#3f3c3a]'
                                }`}
                            aria-label="Go to previous page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-[200px] sm:max-w-none">
                            {getPageNumbers().map((page, index) => (
                                page === '...' ? (
                                    <span key={`ellipsis-${index}`} className="text-stone-400 px-2">...</span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        disabled={isLoading}
                                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center text-sm sm:text-base ${currentPage === page
                                                ? 'bg-[#292524] text-stone-200 border border-stone-600'
                                                : 'bg-[#292524] text-stone-400 hover:bg-[#3f3c3a]'
                                            }`}
                                        aria-label={`Go to page ${page}`}
                                        aria-current={currentPage === page ? 'page' : undefined}
                                    >
                                        {page}
                                    </button>
                                )
                            ))}
                        </div>

                        {/* Next Page Button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages || isLoading}
                            className={`p-2 rounded-md text-sm sm:text-base ${currentPage === totalPages
                                    ? 'bg-[#292524] text-stone-500 cursor-not-allowed'
                                    : 'bg-[#292524] text-stone-200 hover:bg-[#3f3c3a]'
                                }`}
                            aria-label="Go to next page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Last Page Button */}
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages || isLoading}
                            className={`p-2 rounded-md text-sm sm:text-base ${currentPage === totalPages
                                    ? 'bg-[#292524] text-stone-500 cursor-not-allowed'
                                    : 'bg-[#292524] text-stone-200 hover:bg-[#3f3c3a]'
                                }`}
                            aria-label="Go to last page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L8.586 10 4.293 14.293a1 1 0 000 1.414zm6 0a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L14.586 10l-4.293 4.293a1 1 0 000 1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-stone-400 text-sm order-1 sm:order-2">
                        Page {currentPage} of {totalPages}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConferenceWorkshopsHolder; 