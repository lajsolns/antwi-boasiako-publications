'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiShare2, FiExternalLink, FiChevronUp } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import InstagramModal from '@/components/InstagramModal';

// Publications-specific cart button to match Salt Publishing style
const PublicationsCartButton = () => {
  const { setIsCartOpen, getCartCount } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
      aria-label="Open cart"
    >
      <FiShoppingBag className="w-5 h-5" />
      {getCartCount() > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-900 text-white text-xs font-medium  flex items-center justify-center">
          {getCartCount()}
        </span>
      )}
    </button>
  );
};

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newReleaseQuantity, setNewReleaseQuantity] = useState(1);
  const [isInstagramModalOpen, setIsInstagramModalOpen] = useState(false);
  const [currentInstagramPost, setCurrentInstagramPost] = useState(0);
  const [currentFeatureSlide, setCurrentFeatureSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to hide quote section
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');

  // Rotating quotes for the top banner
  const rotatingQuotes = [
    { 
      text: "Sharing the intellectual works of Dr Albert Antwi-Boasiako",
      link: "/about"
    },
    { 
      text: "Independent publishing distinctive voices from Africa",
      link: "/books"
    },
    { 
      text: "Celebrating excellence in cybersecurity literature",
      link: "/publications"
    },
    { 
      text: "Bridging knowledge gaps through innovative publishing",
      link: "/events"
    },
    { 
      text: "Your trusted source for professional insights",
      link: "/contact"
    }
  ];

  // Rotate quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Zoom parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-zoom-bg');
      
      parallaxElements.forEach((element) => {
        const speed = 0.3; // Reduced speed for smoother effect
        const yPos = -(scrolled * speed);
        const scale = 1 + (scrolled * 0.0005); // Increased zoom rate
        
        element.style.transform = `translateY(${yPos}px) scale(${Math.min(scale, 1.1)})`;
      });

      // Show/hide back-to-top button
      setShowBackToTop(scrolled > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const { addToCart } = useCart();

  // Responsive effect for mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset slide when switching between mobile/desktop
  useEffect(() => {
    setCurrentFeatureSlide(0);
  }, [isMobile]);

  // Sample Instagram posts data
  const instagramPosts = [
    {
      id: 1,
      image: '/image/press/chronicling_ghana.jpeg',
      alt: 'Chronicling Ghana press coverage',
      caption: 'Featured in Chronicling Ghana! Our latest publication on Ghana\'s digital transformation journey is making waves in the cybersecurity community. Proud to contribute to the national conversation on building a safer digital future.',
      hashtags: '#ChroniclingGhana #PressCoverage #DigitalTransformation #GhanaTech #Cybersecurity #DrAntwiBoasiako',
      date: '25 January'
    },
    {
      id: 2,
      image: '/image/events/CSWIPR_Ghanas_edit.png',
      alt: 'CSWIPR Ghana event',
      caption: 'Honored to speak at the CSWIPR Ghana conference on cybersecurity governance. Engaging discussions on policy frameworks and international cooperation in building resilient digital ecosystems.',
      hashtags: '#CSWIPR #CybersecurityGovernance #PolicyFramework #InternationalCooperation #DigitalResilience',
      date: '24 January'
    },
    {
      id: 3,
      image: '/image/events/dasa25.jpeg',
      alt: 'DASA 25 event',
      caption: 'DASA 25 Conference highlights! Great insights on emerging cybersecurity threats and innovative solutions. The future of digital security depends on collaboration and knowledge sharing.',
      hashtags: '#DASA25 #CybersecurityConference #DigitalSecurity #Innovation #Collaboration',
      date: '23 January'
    },
    {
      id: 4,
      image: '/image/events/ai4africa.jpeg',
      alt: 'AI for Africa event',
      caption: 'AI for Africa Summit - Exploring the intersection of artificial intelligence and cybersecurity. Critical discussions on responsible AI development and implementation across the continent.',
      hashtags: '#AIForAfrica #ArtificialIntelligence #Cybersecurity #ResponsibleAI #TechSummit',
      date: '22 January'
    },
    {
      id: 5,
      image: '/image/events/imdc.png',
      alt: 'IMDC event',
      caption: 'International Media and Digital Conference - Sharing insights on media literacy in the digital age. Important conversations about combating misinformation and promoting digital citizenship.',
      hashtags: '#IMDC #MediaLiteracy #DigitalCitizenship #Misinformation #DigitalAge',
      date: '21 January'
    },
    {
      id: 6,
      image: '/image/press/daily_guide.jpg',
      alt: 'Daily Guide press coverage',
      caption: 'Featured in Daily Guide! Our work on cybersecurity education and awareness continues to gain recognition. Committed to making digital safety accessible to all Ghanaians.',
      hashtags: '#DailyGuide #PressCoverage #CybersecurityEducation #DigitalSafety #PublicAwareness',
      date: '20 January'
    },
    {
      id: 7,
      image: '/image/press/executive_chairman_e_crime.jpeg',
      alt: 'Executive chairman e-crime press coverage',
      caption: 'Executive Chairman discusses e-crime prevention strategies in latest press coverage. Comprehensive approach to tackling cyber threats through policy, education, and international cooperation.',
      hashtags: '#ECrimePrevention #CybersecurityPolicy #ExecutiveLeadership #DigitalSafety #PressCoverage',
      date: '19 January'
    },
    {
      id: 8,
      image: '/image/events/firstcon25.jpeg',
      alt: 'First Conference 25 event',
      caption: 'First Conference 25 - Bringing together thought leaders in cybersecurity and digital innovation. Productive discussions on shaping the future of digital governance in Africa.',
      hashtags: '#FirstCon25 #DigitalInnovation #CybersecurityLeadership #AfricaTech #DigitalGovernance',
      date: '18 January'
    },
    {
      id: 9,
      image: '/image/events/imdec.jpeg',
      alt: 'IMDEC event',
      caption: 'IMDEC Conference insights - Focus on building capacity for digital investigation and evidence collection. Essential skills for modern law enforcement in the digital age.',
      hashtags: '#IMDEC #DigitalInvestigation #LawEnforcement #DigitalEvidence #CapacityBuilding',
      date: '17 January'
    },
    {
      id: 10,
      image: '/image/events/book_highlights.png',
      alt: 'Book highlights event',
      caption: 'Book launch highlights! "The Republic" continues to receive positive feedback from readers and critics alike. Thank you for your support in sharing this important story of Ghana\'s cybersecurity journey.',
      hashtags: '#BookLaunch #TheRepublic #CybersecurityJourney #ReaderFeedback #PublishingSuccess',
      date: '16 January'
    }
  ];

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'All Books' },
    // { id: 'fiction', name: 'Fiction' },
    // { id: 'poetry', name: 'Poetry' },
    // { id: 'short-stories', name: 'Short Stories' },
    // { id: 'academic', name: 'Academic' }
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "The Republic",
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "35.00",
      ghanaPrice: "350",
      description: "An authoritative exploration of Ghana's cybersecurity evolution and the nation's journey toward becoming a global cybersecurity role model. Drawing from decades of hands-on experience, Dr. Antwi-Boasiako provides unprecedented insights into the challenges, triumphs, and strategic decisions that have shaped Ghana's digital security landscape. This seminal work is essential reading for policymakers, security professionals, and anyone interested in Africa's digital transformation.",
      category: 'academic',
      coverImage: '/image/books/the_republic.png',
      authorBio: "Dr. Albert Antwi-Boasiako is Ghana's foremost cybersecurity expert and Director-General of the Cyber Security Authority. With over 15 years of experience in digital security governance, he has pioneered national cybersecurity frameworks and positioned Ghana as a leader in African cyber defense.",
      isbn: "978-9988-2-1234-5",
      pages: 342,
      language: "English",
      published: "2024"
    },
    {
      id: 2,
      title: "The 10 Commandments for Sustainable National Cybersecurity Development",
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "45.00",
      ghanaPrice: "450",
      description: "A groundbreaking framework that distills complex cybersecurity governance into ten actionable principles. This comprehensive guide offers governments and organizations a roadmap for building resilient cybersecurity ecosystems. Through real-world case studies and proven methodologies, Dr. Antwi-Boasiako demonstrates how developing nations can establish robust cyber defenses while fostering economic growth and digital innovation.",
      category: 'academic',
      coverImage: '/image/book_mockup_english.png',
      authorBio: "Dr. Albert Antwi-Boasiako serves as a consultant to multiple African governments on cybersecurity policy and has been instrumental in shaping regional cyber security cooperation initiatives.",
      isbn: "978-9988-2-1234-6",
      pages: 428,
      language: "English",
      published: "2024"
    },
    {
      id: 3,
      title: "Digital Transformation",
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "40.00",
      ghanaPrice: "400",
      description: "Navigate the complex landscape of organizational digital evolution with this strategic leadership guide. Dr. Antwi-Boasiako combines technical expertise with business acumen to deliver actionable insights for successful digital transformation. From legacy system modernization to cultural change management, this book provides the tools and frameworks needed to lead organizations through the digital revolution.",
      category: 'academic',
      coverImage: '/image/book_mockup_french.png',
      authorBio: "A recognized thought leader in digital transformation, Dr. Antwi-Boasiako has helped numerous organizations across Africa successfully navigate their digital journeys.",
      isbn: "978-9988-2-1234-7",
      pages: 386,
      language: "English",
      published: "2023"
    }
  ];

  const newReleases = [
    {
      id: 5,
      title: "White Spines",
      author: "Albert Antwi-Boasiako",
      price: "$26.99",
      description: "Confessions of a book collector in this intimate memoir.",
      category: 'academic',
      coverColor: '#166534'
    },
    {
      id: 6,
      title: "The Night-Soil Men",
      author: "Albert Antwi-Boasiako",
      price: "$21.99",
      description: "A gripping tale of urban life and hidden histories.",
      category: 'fiction',
      coverColor: '#7c3aed'
    },
    {
      id: 7,
      title: "Best British Short Stories 2024",
      author: "Edited by Albert Antwi-Boasiako",
      price: "$29.99",
      description: "The definitive short fiction collection of the year.",
      category: 'short-stories',
      coverColor: '#dc2626'
    },
    {
      id: 8,
      title: "The Peckham Experiment",
      author: "Albert Antwi-Boasiako",
      price: "$23.99",
      description: "A groundbreaking study of community and social change.",
      category: 'academic',
      coverColor: '#0891b2'
    }
  ];

  const allBooks = [...featuredBooks, ...newReleases];

  // Testimonials from readers
  const testimonials = [
    {
      id: 1,
      name: "Prof. Kofi Annan Center",
      role: "Academic Institution",
      content: "Dr. Antwi-Boasiako's work has become essential reading for our cybersecurity program. The Republic provides unparalleled insights into Ghana's digital security evolution.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Cybersecurity Analyst",
      content: "The 10 Commandments framework transformed how we approach national cybersecurity strategy. Clear, actionable, and based on real-world experience.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Digital Transformation Consultant",
      content: "Digital Transformation is the most comprehensive guide I've found for leading organizational change. Dr. Antwi-Boasiako's expertise shines through every chapter.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 4,
      name: "Ama Mensah",
      role: "Government Policy Advisor",
      content: "These books have become foundational texts for our national cybersecurity policy development. The practical insights are invaluable.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  // Publication statistics
  const publicationStats = [
    {
      label: "Books Published",
      value: "12+",
      description: "Academic and professional publications"
    },
    {
      label: "Countries Reached",
      value: "45+",
      description: "Global distribution and impact"
    },
    {
      label: "Copies Sold",
      value: "50K+",
      description: "Worldwide readership and adoption"
    },
    {
      label: "Academic Citations",
      value: "200+",
      description: "Research papers and policy documents"
    }
  ];

  const filteredBooks = selectedCategory === 'all' 
    ? allBooks 
    : allBooks.filter(book => book.category === selectedCategory);

  // Features data for slideshow
  const features = [
    {
      id: 1,
      color: 'blue',
      title: "Essential reading for cybersecurity professionals",
      source: "TechCrunch",
      description: "Dr. Antwi-Boasiako's \"The Republic\" provides invaluable insights into Ghana's digital transformation journey."
    },
    {
      id: 2,
      color: 'green',
      title: "A groundbreaking approach to cybersecurity governance",
      source: "Harvard Business Review",
      description: "The 10 Commandments framework offers practical solutions for national security challenges."
    },
    {
      id: 3,
      color: 'purple',
      title: "Visionary leadership in digital transformation",
      source: "Forbes Africa",
      description: "Dr. Albert Antwi-Boasiako shares his expertise on building resilient cybersecurity frameworks."
    },
    {
      id: 4,
      color: 'orange',
      title: "Comprehensive guide to national cybersecurity",
      source: "BBC Technology",
      description: "An authoritative resource for policymakers and security professionals worldwide."
    },
    {
      id: 5,
      color: 'red',
      title: "Transformative approach to digital governance",
      source: "The Guardian",
      description: "Innovative strategies for building secure digital infrastructure in developing nations."
    },
    {
      id: 6,
      color: 'indigo',
      title: "Leading voice in African cybersecurity",
      source: "Al Jazeera Technology",
      description: "Dr. Antwi-Boasiako's work is shaping the future of digital security across the continent."
    }
  ];

  // Slideshow navigation functions
  const featuresPerSlide = 3; // Desktop
  const mobileFeaturesPerSlide = 1; // Mobile
  
  const currentFeaturesPerSlide = isMobile ? mobileFeaturesPerSlide : featuresPerSlide;
  const totalSlides = Math.ceil(features.length / currentFeaturesPerSlide);

  const nextSlide = () => {
    setCurrentFeatureSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentFeatureSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Icon mapping for publications
  const getPublicationIcon = (source) => {
    const iconMap = {
      'TechCrunch': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 0v24h24V0H0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      'Harvard Business Review': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      'Forbes Africa': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      ),
      'BBC Technology': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      'The Guardian': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
        </svg>
      ),
      'Al Jazeera Technology': (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      )
    };
    return iconMap[source] || iconMap['TechCrunch'];
  };

  // Color mapping for Tailwind classes
  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getCurrentFeatures = () => {
    const startIndex = currentFeatureSlide * featuresPerSlide;
    return features.slice(startIndex, startIndex + featuresPerSlide);
  };

  // Events data
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [currentUpcomingIndex, setCurrentUpcomingIndex] = useState(0);
  
  const upcomingEvents = [

    {
      id: 2,
      title: "Cybersecurity Author Talk",
      date: "April 22, 2026",
      time: "2:00 PM - 4:00 PM GMT",
      location: "University of Ghana, Legon",
      description: "An intimate discussion with Dr. Antwi-Boasiako about his latest publications and the future of cybersecurity literature in Africa.",
      flyer: "/image/conferences/cyber_forum4.0/4.jpeg",
      registrationLink: "#register-talk",
      highlights: [
        "Behind the Scenes of Book Writing",
        "Cybersecurity Insights from Publications",
        "Student & Faculty Engagement",
        "Book Bundle Available"
      ]
    },
        {
      id: 1,
      title: "Book Launch: The Republic",
      date: "March 15, 2026",
      time: "6:00 PM - 8:00 PM GMT",
      location: "Accra International Conference Centre, Ghana",
      description: "Join Dr. Albert Antwi-Boasiako for the official launch of his groundbreaking book 'The Republic' - a professional journey through Ghana's cybersecurity evolution.",
      flyer: "/image/book_launch_it's today.jpeg",
      registrationLink: "#register-launch",
      highlights: [
        "Author Reading & Book Signing",
        "Q&A Session with Dr. Antwi-Boasiako",
        "Networking Reception",
        "Special Launch Price Available"
      ]
    },
  ];

  const pastEvents = [
    {
      id: 2,
      title: "10 Commandments Book Launch",
      date: "November 28, 2025",
      location: "Movenpick Ambassador Hotel, Accra",
      description: "Successful launch event for Dr. Antwi-Boasiako's second major publication on sustainable national cybersecurity development.",
      flyer: "/image/conferences/cyber_forum4.0/1.jpeg"
    },
    {
      id: 3,
      title: "Literary Gala & Awards",
      date: "October 15, 2025",
      location: "Kempinski Hotel, Accra",
      description: "Annual literary celebration featuring Dr. Antwi-Boasiako's contributions to cybersecurity literature and academic publishing.",
      flyer: "/image/conferences/cyber_forum4.0/3.jpeg"
    },
    {
      id: 4,
      title: "Academic Book Signing",
      date: "July 20, 2025",
      location: "University of Ghana Bookstore, Legon",
      description: "Intimate book signing session for students and faculty featuring Dr. Antwi-Boasiako's complete collection of publications.",
      flyer: "/image/book_launch.png"
    }
  ];

  const currentUpcomingEvent = upcomingEvents[currentUpcomingIndex];

  const nextUpcomingEvent = () => {
    setCurrentUpcomingIndex((prev) => (prev + 1) % upcomingEvents.length);
  };

  const prevUpcomingEvent = () => {
    setCurrentUpcomingIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  const navLinks = [
    { name: 'Home', href: '#fiction' },
    { name: 'Author', href: '#fiction' },
    { name: 'Books', href: '#non-fiction' },
    { name: 'Press', href: '#poetry' },
    { name: 'Book Signing', href: '#short-stories' },
    { name: 'Events', href: '#information' },
    { name: 'Reviews', href: '#authors' },
    { name: 'Gallery', href: '#information' },
    { name: 'Policy', href: '#authors' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Rotating Quote Banner - Above header */}
      <div className={`bg-gray-900 text-white py-3 px-4 quote-banner ${scrolled ? 'hidden' : ''}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => setCurrentQuoteIndex((prev) => (prev - 1 + rotatingQuotes.length) % rotatingQuotes.length)}
            className="p-1 hover:bg-gray-800 transition-colors duration-200"
            aria-label="Previous quote"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex-1 text-center px-8 flex items-center justify-center">
            <p className="flex items-center align-center justify-center font-merriweather text-sm not-italic font-semibold">
              {rotatingQuotes[currentQuoteIndex].text}
              <Link 
                href={rotatingQuotes[currentQuoteIndex].link}
                className="inline-flex items-center ml-2 hover:bg-gray-800 transition-colors duration-200"
                aria-label="Navigate to related page"
              >
                <svg className="w-5 h-5 align-baseline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6L14 10L10 14" stroke="white" strokeOpacity="0.8"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10H1" stroke="white" strokeOpacity="0.6"/>
                </svg>
              </Link>
            </p>
          </div>
          
          <button 
            onClick={() => setCurrentQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length)}
            className="p-1 hover:bg-gray-800 transition-colors duration-200"
            aria-label="Next quote"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Header - Fixed at top, below quote banner */}
      <header className="bg-white border-b border-gray-200 sticky-header">
        {/* Top Bar - Logo, Search, Cart */}
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center h-36">
          {/* Left - Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6 text-gray-800" /> : <FiMenu className="w-6 h-6 text-gray-800" />}
          </button>
          <div className="hidden lg:block w-12"></div>

          {/* Center - Logo */}
          <Link href="/publications" className="flex items-center no-underline text-gray-900">
            <Image 
              src="/image/logo_silver.png" 
              alt="Antwi-Boasiako Publications"
              width={500}
              height={500}
              className="w-full h-full object-cover cursor-pointer"
              style={{ width: '140px', height: '140px' }}
            />
          </Link>

          {/* Right - Search and Cart */}
          <div className="flex items-center gap-4">
            <button 
              className="p-2 hover:bg-gray-100 transition-colors duration-200 bg-none border-none"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FiSearch className="w-5 h-5" />
            </button>
            <PublicationsCartButton />
          </div>
        </div>

        {/* Navigation Bar - Absolute positioned for mobile */}
        <nav className={`bg-white mb-4 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block lg:relative lg:mb-4 absolute top-full left-0 right-0 z-40`}>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 list-none m-0 p-4 lg:p-0 justify-center lg:justify-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-gray-600 no-underline font-normal transition-all duration-200 font-inter text-md camelcase tracking-wide relative py-2 lg:py-1 hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full block lg:inline text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 px-4 py-3">
            <div className="max-w-4xl mx-auto">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </header>

      {/* Main Content Container */}
      <div className="bg-white text-gray-900 font-inter leading-relaxed m-0 p-0 min-h-screen">
        {/* Breadcrumb Navigation - Mobile Only */}
        <div className="lg:hidden bg-gray-50 border-b border-gray-200 px-4 py-2">
          <nav className="flex items-center text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 font-medium">Publications</span>
          </nav>
        </div>

      {/* Hero Section with Zoom Parallax */}
      <section className="relative py-32 px-8 min-h-[85vh] flex items-center overflow-hidden">
        {/* Hero Background with Zoom Parallax */}
        <div className="absolute inset-0">
          <Image
            src="/image/press/chronicling_ghana.jpeg"
            alt="Hero background"
            fill
            className="object-cover parallax-zoom-bg"
            style={{
              transformOrigin: 'center center',
              transform: 'scale(1.15)',
              willChange: 'transform',
              minHeight: '120vh'
            }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Antwi-Boasiako Publications
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-delay">
           Sharing the intellectual works of Dr Albert Antwi-Boasiako
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <button className="px-8 py-3 bg-white text-gray-900 font-inter text-sm font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors duration-200">
              Browse Books
            </button>
            <button className="px-8 py-3 bg-transparent text-white border-2 border-white font-inter text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-colors duration-200">
              New & forthcoming
            </button>
          </div>
        </div>
      </section>

      {/* New Release Section - Exact copy from Salt Publishing */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-4xl font-bold text-gray-900 mb-4">
              New release 🚀
            </h2>
            <div className="space-y-2">
              <h3 className="font-inter text-lg font-normal text-gray-600">
                {/* The making of a Role Model Country */}
              </h3>
              {/* <h3 className="font-inter text-lg font-normal text-gray-600">
                Dazzling Debuts to kickstart 2026 —Daily Mail
              </h3> */}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Featured Book */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full max-w-xs aspect-[3/4] mb-4 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <Image 
                  src="/image/books/the_republic.png" 
                  alt="The Fox of Kensal Green"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Book Details Section */}
            <div className="max-w-md flex flex-col">
              <div className="font-inter text-xs tracking-widest text-gray-500 mb-2">
                DR. ANTWI-BOSIAKO
              </div>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 leading-tight mb-1">
                THE REPUBLIC
              </h2>
                 <div className="font-inter text-sm text-gray-600">
                A PROFESSIONAL JOURNEY, GHANA'S CYBERSECURITY 
              </div>
                  <div className="font-inter text-sm text-gray-600 mb-4">
                 & THE MAKING OF A ROLE MODEL COUNTRY
              </div>

              <div className="font-inter text-lg font-medium text-gray-900 mb-1">
                Africa & International | $35
              </div>
              <div className="font-inter text-lg font-medium text-gray-900 mb-4">
                Ghana | GHS 350
              </div>
              <div className="font-inter text-sm text-gray-600 mb-4">
                VAT included
              </div>
{/* 
               <div className="font-inter text-sm text-gray-700 mb-4">
                Pay in 3 interest-free instalments for orders over <strong>$50.00</strong> with{' '}
                <span className="inline-block px-2 py-1 bg-black text-white text-xs font-bold rounded">shop</span>
                <span className="inline-block px-2 py-1 bg-gray-800 text-white text-xs font-bold rounded ml-1">Pay</span>
                <a className="text-gray-600 underline text-xs hover:text-gray-900 transition-colors duration-200" href="#">Learn more</a>
              </div>  */}

              <div className="mb-4">
                <div className="font-inter text-sm font-medium text-gray-800 mb-2">Format</div>
                <button type="button" className="px-4 py-2 bg-black text-white border border-gray-300  text-sm font-medium">
                  Paperback
                </button>
              </div>

              <div className="mb-4">
                <div className="font-inter text-sm font-medium text-gray-800 mb-2">Quantity</div>
                <div className="flex items-center border border-gray-300  w-32">
                  <button
                    type="button"
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 border-r border-gray-300"
                    onClick={() => setNewReleaseQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <div className="flex-1 text-center font-inter text-base text-gray-900 py-2">
                    {newReleaseQuantity}
                  </div>
                  <button
                    type="button"
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 border-l border-gray-300"
                    onClick={() => setNewReleaseQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* <button
                type="button"
                className="w-full min-h-14 bg-white text-orange-500 border-2 border-orange-500 px-5 py-4  font-inter text-base font-medium cursor-pointer transition-colors duration-200 hover:bg-orange-500 hover:text-white mb-3"
                onClick={() => {
                  addToCart({
                    id: 'salt-new-release-fox-of-kensal-green',
                    title: 'The Fox of Kensal Green',
                    image: '/image/books/the_republic.png',
                    internationalPrice: 10.99,
                    africaPrice: 10.99,
                    ghanaPrice: 10.99,
                    quantity: newReleaseQuantity,
                  });
                }}
              >
                Add to cart
              </button> */}

              <button type="button" className="w-full min-h-14 bg-white text-blue-800 border-2 border-blue-800  font-inter text-lg font-semibold cursor-pointer shadow-lg mb-3 hover:bg-blue-800 hover:text-white transition-all duration-200">
                Add to <span className="font-extrabold">cart</span>
              </button>

              <div className="flex gap-3 mb-4">
                <button className="flex-1 px-4 py-2 text-blue-800 border border-blue-800  font-inter text-sm font-medium hover:bg-blue-800 hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                  <FiShare2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex-1 px-4 py-2 text-blue-800 border border-blue-800  font-inter text-sm font-medium hover:bg-blue-800 hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                  <FiExternalLink className="w-4 h-4" />
                  View full details
                </button>
              </div>

              {/* <a className="block text-center text-gray-600 underline font-inter text-sm mb-4" href="#">
                More payment options
              </a> */}

              {/* <div className="font-inter text-sm text-gray-700">
                A story of hypocrisy, injustice and the obstacles against social reform.
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3  font-inter text-md font-medium transition-colors duration-200 ${
                  selectedCategory === category.id 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.slice(0, 3).map(book => (
              <div key={book.id} className="book-card group cursor-pointer">
                <div className="relative mb-4 overflow-hidden ">
                  <div className="relative w-full aspect-[3/4] bg-gray-100 book-card-image">
                    {book.coverImage && book.coverImage.trim() !== '' && (
                      <Image 
                        src={book.coverImage} 
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          console.error('Image failed to load:', book.coverImage);
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-inter text-base font-medium text-gray-900 mb-1 group-hover:text-salt-orange transition-colors duration-200 hover:underline">
                    {book.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-600 mb-3">
                    {book.author}
                  </p>
                  <div className="flex flex-col items-start justify-between">
                    <div className="w-full">
                      <h3 className="text-sm md:text-base font-medium text-gray-900 block">
                        Africa & International | ${book.internationalPrice}
                      </h3>
                      <h3 className="text-sm md:text-base font-medium text-gray-900 md:inline block">
                        Ghana | GHS {book.ghanaPrice}
                      </h3>
                    </div>
                    <button className="px-3 py-1 bg-white text-blue-800 border border-blue-800 font-inter text-xs font-medium hover:bg-blue-800 hover:text-white transition-all duration-200 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {!showPastEvents ? (
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2  text-sm font-semibold mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  UPCOMING EVENT
                </div>
                
                <h2 className="font-merriweather text-4xl font-bold text-gray-900 mb-6">
                  {currentUpcomingEvent.title}
                </h2>
                
                <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{currentUpcomingEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{currentUpcomingEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{currentUpcomingEvent.location}</span>
                  </div>
                </div>
              </div>

              {/* Single Event Card with Navigation */}
              <div className="relative">
                {/* Navigation Arrows */}
                {upcomingEvents.length > 1 && (
                  <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
                    <button
                      onClick={prevUpcomingEvent}
                      className="p-3 bg-white/90 backdrop-blur-sm  shadow-lg hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={upcomingEvents.length <= 1}
                      aria-label="Previous event"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextUpcomingEvent}
                      className="p-3 bg-white/90 backdrop-blur-sm  shadow-lg hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={upcomingEvents.length <= 1}
                      aria-label="Next event"
                    >
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Event Flyer */}
                    <div className="relative h-64 md:h-auto bg-gray-100">
                      <Image
                        src={currentUpcomingEvent.flyer}
                        alt={currentUpcomingEvent.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onError={(e) => {
                          e.target.src = "/image/CyberForum4Flier.png";
                        }}
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-600 text-white px-3 py-1  text-xs font-semibold">
                          UPCOMING
                        </span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <p className="font-inter text-gray-800 text-lg leading-relaxed mb-8">
                          {currentUpcomingEvent.description}
                        </p>
                        
                        <div className="mb-8">
                          <h4 className="font-merriweather text-xl font-semibold text-gray-900 mb-4">Event Highlights</h4>
                          <ul className="space-y-3">
                            {currentUpcomingEvent.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-800 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-inter text-gray-800">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <button className="w-full px-8 py-4 bg-white text-blue-800 border-2 border-blue-800  font-inter text-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-200 shadow-lg">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Event Indicators */}
                {upcomingEvents.length > 1 && (
                  <div className="flex justify-center mt-6 gap-2">
                    {upcomingEvents.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentUpcomingIndex(index)}
                        className={`w-2 h-2  transition-colors duration-200 ${
                          index === currentUpcomingIndex ? 'bg-gray-900' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to event ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-4">
                  Past Events
                </h2>
                <p className="font-inter text-gray-600 max-w-2xl mx-auto">
                  Explore our previous events and conferences
                </p>
              </div>
            </div>
          )}

          {/* Toggle Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowPastEvents(!showPastEvents)}
              className="inline-flex items-center gap-2 px-6 mt-4 py-3 bg-white border border-gray-300  hover:bg-gray-50 transition-colors duration-200 font-inter text-medium"
            >
              {showPastEvents ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Upcoming Event
                </>
              ) : (
                <>
                  View Past Events
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* Past Events Grid */}
          {showPastEvents && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={event.flyer}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        e.target.src = "/image/Forum_Cyber_4.0.png";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-merriweather text-lg font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <p className="font-inter text-gray-800 text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-4">
              Follow us on LinkedIn
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Discover behind-the-scenes content, author interviews, and literary inspiration. 
              Join our community of book lovers and stay connected with the latest from our publishing house.
            </p>
          </div>
          
          {/* First Row - 5 images */}
          <div className="grid grid-cols-5 gap-1 mb-1">
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(0);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/press/chronicling_ghana.jpeg" 
                alt="Chronicling Ghana press coverage"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
            
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(1);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/events/CSWIPR_Ghanas_edit.png" 
                alt="CSWIPR Ghana event"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
            
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(2);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/events/dasa25.jpeg" 
                alt="DASA 25 event"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
            
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(3);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/events/ai4africa.jpeg" 
                alt="AI for Africa event"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
            
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(4);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/events/imdc.png" 
                alt="IMDC event"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Second Row - 5 more images */}
          <div className="grid grid-cols-5 gap-1 mb-1">
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(5);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/press/daily_guide.jpg" 
                alt="Daily Guide press coverage"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
            
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(6);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/press/executive_chairman_e_crime.jpeg" 
                alt="Executive chairman e-crime press coverage"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
            
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(7);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/events/firstcon25.jpeg" 
                alt="First Conference 25 event"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
            
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(8);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/events/imdec.jpeg" 
                alt="IMDEC event"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
            
            <div 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentInstagramPost(9);
                setIsInstagramModalOpen(true);
              }}
            >
              <Image 
                src="/image/events/book_highlights.png" 
                alt="Book highlights event"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-left">
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 relative group pb-1 text-sm"
            >

              @antwibosiakopublications
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform scale-x-0 scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
        </div>
      </section>

      {/* Recently Been Featured Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-4">
              Recently been Featured
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Our books and authors have been recognized by leading publications and media outlets around the world.
            </p>
          </div>
          
          <div className="relative">
            {/* Navigation buttons */}
            <div className="flex justify-end mb-4 gap-2">
              <button
                onClick={prevSlide}
                className="p-2 bg-white border border-gray-300  hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={totalSlides <= 1}
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-white border border-gray-300  hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={totalSlides <= 1}
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slideshow container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentFeatureSlide * 100}%)` }}
              >
                {/* Create slides */}
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-1">
                    <div className={`grid gap-8 ${
                      isMobile 
                        ? 'grid-cols-1' 
                        : 'md:grid-cols-2 lg:grid-cols-3'
                    }`}>
                      {features
                        .slice(slideIndex * currentFeaturesPerSlide, (slideIndex + 1) * currentFeaturesPerSlide)
                        .map((feature) => {
                          const colorClasses = getColorClasses(feature.color);
                          return (
                          <div key={feature.id} className="bg-white p-6  shadow-sm">
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 ${colorClasses.bg}  flex items-center justify-center flex-shrink-0`}>
                                <div className={colorClasses.text}>
                                  {getPublicationIcon(feature.source)}
                                </div>
                              </div>
                              <div>
                                <h3 className="font-merriweather text-lg font-semibold text-gray-900 mb-2">
                                  "{feature.title}"
                                </h3>
                                <p className="font-inter text-sm text-gray-600 mb-2">
                                  {feature.source}
                                </p>
                                <p className="font-inter text-gray-800 text-sm">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        )})}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide indicators */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeatureSlide(index)}
                    className={`w-2 h-2  transition-colors duration-200 ${
                      index === currentFeatureSlide ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-4">
              Testimonials
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Social proof from readers - Hear what professionals and academics are saying about Dr. Antwi-Boasiako's publications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 border-2 border-gray-300">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-full"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = "https://randomuser.me/api/portraits/lego/0.jpg";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-inter text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="font-inter text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="font-inter text-gray-800 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors / Media Partners Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              We are proud to collaborate with leading multinational cybersecurity companies committed to advancing digital security and innovation worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Partner 1 - Cisco */}
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-200">
                <Image 
                  src="https://picsum.photos/seed/cisco-logo/150/150.jpg" 
                  alt="Cisco"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>';
                  }}
                />
              </div>
            </div>

            {/* Partner 2 - Palo Alto Networks */}
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-200">
                <Image 
                  src="https://picsum.photos/seed/paloalto-logo/150/150.jpg" 
                  alt="Palo Alto Networks"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>';
                  }}
                />
              </div>
            </div>

            {/* Partner 3 - Fortinet */}
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-200">
                <Image 
                  src="https://picsum.photos/seed/fortinet-logo/150/150.jpg" 
                  alt="Fortinet"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';
                  }}
                />
              </div>
            </div>

            {/* Partner 4 - Check Point */}
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-200">
                <Image 
                  src="https://picsum.photos/seed/checkpoint-logo/150/150.jpg" 
                  alt="Check Point"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11z"/><circle cx="17.5" cy="17.5" r="4.5"/><path d="M3 13.5h8v8H3z"/></svg>';
                  }}
                />
              </div>
            </div>

            {/* Partner 5 - CrowdStrike */}
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-200">
                <Image 
                  src="https://picsum.photos/seed/crowdstrike-logo/150/150.jpg" 
                  alt="CrowdStrike"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>';
                  }}
                />
              </div>
            </div>

            {/* Partner 6 - McAfee */}
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-200">
                <Image 
                  src="https://picsum.photos/seed/mcafee-logo/150/150.jpg" 
                  alt="McAfee"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Today Section */}
      <section className="py-20 px-8" style={{backgroundColor: '#f3f3f3'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-6">
              Join us today!
            </h2>
            <p className="font-inter text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed mb-8">
              Subscribe to our newsletter for monthly product updates, a regular newsletter, as well as links to features in our House Magazine. You can unsubscribe at any time.
            </p>
          </div>
          
          <div className="flex justify-center items-center mb-12">
            <div className="max-w-md w-full">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 pr-12 bg-white border border-gray-300  text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                />
                <button 
                  onClick={() => {
                    if (email) {
                      // Handle newsletter signup
                      alert(`Thank you for subscribing with: ${email}`);
                      setEmail('');
                    }
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900 text-white  hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Subscribe to newsletter"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="font-inter text-sm text-gray-600 mb-4">
              Follow us for daily literary inspiration
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 bg-white  flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white  flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white  flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div>
              <div className="mb-4 flex justify-center">
                <Image 
                  src="/image/logo_silver.png" 
                  alt="Antwi-Boasiako Publications"
                  width={500}
                  height={500}
                  className="w-30 h-30 object-contain"
                  style={{ width: '200px', height: '200px' }}
                />
              </div>
              <div className="flex space-x-4  flex md:justify-center">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Publications */}
            <div>
              <h3 className="font-merriweather text-xl font-semibold mb-4">Publications</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    The Republic
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    10 Commandments for Cybersecurity
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Academic Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Press Releases
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-merriweather text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Cybersecurity Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Digital Governance
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Policy Development
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Speaking Engagements
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Training Programs
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-merriweather text-xl font-semibold mb-4">Stay Connected</h3>
              <p className="font-inter text-gray-300 text-sm mb-4">
                Subscribe for updates on cybersecurity insights, new publications, and professional developments.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700  text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button className="w-full px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700 transition-colors duration-200 font-inter text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="font-inter text-gray-400 text-sm">
                  © 2026 Antwi-Boasiako Publications. All rights reserved.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
                <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Cookie Policy
                </a>
                <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Instagram Modal */}
      <InstagramModal 
        isOpen={isInstagramModalOpen}
        onClose={() => setIsInstagramModalOpen(false)}
        posts={instagramPosts}
        currentPostIndex={currentInstagramPost}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition-all duration-300 z-40 group"
          aria-label="Back to top"
        >
          <FiChevronUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
        </button>
      )}
      </div>
    </>
  );
}
