'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiTwitter, FiLinkedin, FiExternalLink, FiBook, FiAward, FiCalendar } from 'react-icons/fi';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function AuthorPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Author data
  const author = {
    name: "Dr. Albert Antwi-Boasiako",
    title: "Director-General, Cyber Security Authority, Ghana",
    bio: "Dr. Albert Antwi-Boasiako is Ghana's foremost cybersecurity expert and the visionary leader behind the nation's digital security transformation. With over 15 years of experience in cybersecurity governance, policy development, and digital transformation, he has positioned Ghana as a leader in African cybersecurity.",
    longBio: "Dr. Antwi-Boasiako serves as the first Director-General of Ghana's Cyber Security Authority, where he has spearheaded the development and implementation of comprehensive national cybersecurity frameworks. His leadership has been instrumental in establishing Ghana as a role model for cybersecurity governance across Africa. Through his extensive experience in both public and private sectors, he has developed innovative approaches to digital security that balance technological advancement with practical implementation strategies.",
    image: "/image/CEO.png",
    backgroundImage: "/image/homepage_bg.jpg",
    email: "director@csa.gov.gh",
    social: {
      twitter: "#",
      linkedin: "#",
      website: "#"
    },
    expertise: [
      "Cybersecurity Governance",
      "Digital Transformation",
      "National Security Policy",
      "Information Security Strategy",
      "Risk Management",
      "Compliance & Regulation"
    ],
    achievements: [
      {
        title: "Founder, Cyber Security Authority",
        year: "2020",
        description: "Established Ghana's first national cybersecurity authority"
      },
      {
        title: "Cybersecurity Champion Award",
        year: "2022",
        description: "Recognized for outstanding contributions to African cybersecurity"
      },
      {
        title: "Digital Transformation Pioneer",
        year: "2023",
        description: "Led Ghana's digital security transformation initiatives"
      }
    ],
    publications: [
      {
        id: 1,
        title: "The Republic",
        subtitle: "A Professional Journey, Ghana's Cybersecurity & The Making of a Role Model Country",
        cover: "/image/books/the_republic.png",
        year: "2024",
        description: "An authoritative exploration of Ghana's cybersecurity evolution and the nation's journey toward becoming a global cybersecurity role model."
      },
      {
        id: 2,
        title: "The 10 Commandments for Sustainable National Cybersecurity Development",
        subtitle: "A Framework for Digital Security Governance",
        cover: "/image/book_mockup_english.png",
        year: "2024",
        description: "A groundbreaking framework that distills complex cybersecurity governance into ten actionable principles."
      },
      {
        id: 3,
        title: "Digital Transformation",
        subtitle: "Strategic Leadership in the Digital Age",
        cover: "/image/book_mockup_french.png",
        year: "2024",
        description: "Navigate the complex landscape of organizational digital evolution with strategic leadership insights."
      }
    ],
    speaking: [
      {
        title: "Global Cybersecurity Summit",
        location: "Geneva, Switzerland",
        year: "2024",
        role: "Keynote Speaker"
      },
      {
        title: "African Digital Transformation Conference",
        location: "Nairobi, Kenya",
        year: "2024",
        role: "Panel Discussion Lead"
      },
      {
        title: "National Security Forum",
        location: "Accra, Ghana",
        year: "2023",
        role: "Guest Speaker"
      }
    ],
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "University of Ghana",
        year: "2010"
      },
      {
        degree: "Master's in Information Security",
        institution: "University of South Wales",
        year: "2005"
      },
      {
        degree: "Bachelor's in Computer Science",
        institution: "Kwame Nkrumah University of Science and Technology",
        year: "2002"
      }
    ]
  };

  // Rotating quotes
  const rotatingQuotes = [
    {
      text: '"Transforming cybersecurity education across Africa through innovative research and practical implementation"',
      link: '#publications'
    },
    {
      text: '"Building the next generation of cybersecurity professionals with cutting-edge knowledge and skills"',
      link: '#events'
    },
    {
      text: '"Pioneering digital security solutions for a safer, more connected world"',
      link: '#contact'
    }
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setScrolled(scrolled > 56);
    };

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

      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900">
        <div className="absolute inset-0">
          {author.backgroundImage && (
            <Image
              src={author.backgroundImage}
              alt="Background"
              fill
              className="object-cover opacity-30"
            />
          )}
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-merriweather text-4xl lg:text-5xl font-bold text-white mb-4 whitespace-nowrap">
                  {author.name}
                </h1>
                <p className="font-inter text-xl text-gray-200 mb-6">
                  {author.title}
                </p>
                <p className="font-inter text-gray-300 leading-relaxed mb-8">
                  {author.bio}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/"
                    className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-inter text-sm font-medium"
                  >
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Home
                  </a>
                  <a
                    href={`mailto:${author.email}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-inter text-sm font-medium"
                  >
                    <FiMail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                  {author.social.twitter && (
                    <a
                      href={author.social.twitter}
                      className="inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-inter text-sm font-medium"
                    >
                      <FiTwitter className="w-4 h-4 mr-2" />
                      Twitter
                    </a>
                  )}
                  {author.social.linkedin && (
                    <a
                      href={author.social.linkedin}
                      className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-inter text-sm font-medium"
                    >
                      <FiLinkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  {author.image && (
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover rounded-lg shadow-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PublicationsFooter />
    </div>
  );
}
