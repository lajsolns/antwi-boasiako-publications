'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function EventsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { t, locale } = useLanguage();

  const events = [
    { id: 1, title: "The Republic Book Launch", subtitle: "A Professional Journey in Ghana's Cybersecurity", description: "Join Dr. Antwi-Boasiako for the official launch of his latest book 'The Republic'. This landmark publication explores Ghana's cybersecurity evolution and the nation's journey toward becoming a global cybersecurity role model.", date: "2024-03-15", time: "05:00 PM", location: "British Council, Accra", type: "upcoming", category: "launch", image: "/image/events/book_launch.jpeg", attendees: 200, speaker: "Dr. Antwi-Boasiako", registrationLink: "#register" },
    { id: 2, title: "Author Meet & Greet", subtitle: "Digital Transformation Book Signing", description: "An intimate evening with Dr. Antwi-Boasiako discussing his insights on digital transformation in Africa. Includes book reading, Q&A session, and personalized book signing.", date: "2024-03-20", time: "06:00 PM", location: "Accra Mall Bookstore", type: "upcoming", category: "author", image: "/image/events/book_launch_doctor.jpeg", attendees: 50, speaker: "Dr. Antwi-Boasiako", registrationLink: "#register" },
    { id: 3, title: "Cybersecurity Workshop", subtitle: "Based on '10 Commandments for Sustainable National Cybersecurity'", description: "Hands-on workshop based on Dr. Antwi-Boasiako's bestselling book. Participants will learn practical implementation strategies for the 10 commandments framework.", date: "2024-02-28", time: "09:00 AM", location: "Kofi Annan ICT Centre", type: "past", category: "workshop", image: "/image/events/dasa25.jpeg", attendees: 75, speaker: "Dr. Antwi-Boasiako", registrationLink: null },
    { id: 4, title: "Literary Evening", subtitle: "African Cybersecurity Literature Discussion", description: "Join leading authors and cybersecurity experts for an evening discussing the growing body of African cybersecurity literature and its impact on policy and practice.", date: "2024-02-15", time: "07:00 PM", location: "University of Ghana Bookshop", type: "past", category: "literary", image: "/image/events/ai4africa.jpeg", attendees: 100, speaker: "Dr. Antwi-Boasiako", registrationLink: null },
    { id: 5, title: "Publishers Conference", subtitle: "Digital Publishing & Cybersecurity", description: "Annual conference bringing together publishers, authors, and cybersecurity experts to discuss digital publishing security and intellectual property protection.", date: "2024-01-25", time: "09:00 AM", location: "Accra International Conference Centre", type: "past", category: "conference", image: "/image/events/imdc.png", attendees: 300, speaker: "Dr. Antwi-Boasiako", registrationLink: null },
    { id: 6, title: "Book Tour 2025", subtitle: "The Republic - African Edition Launch", description: "Pan-African book tour launching the special African edition of 'The Republic'. Features readings, discussions, and cultural exchanges across multiple African countries.", date: "2025-02-10", time: "05:00 PM", location: "National Theatre, Accra", type: "upcoming", category: "launch", image: "/image/events/firstcon25.jpeg", attendees: 500, speaker: "Dr. Antwi-Boasiako", registrationLink: "#register" }
  ];

  const rotatingQuotes = [
    { text: '"Transforming cybersecurity education across Africa through innovative research and practical implementation"', link: '#new-releases' },
    { text: '"Building the next generation of cybersecurity professionals with cutting-edge knowledge and skills"', link: '#categories' },
    { text: '"Pioneering digital security solutions for a safer, more connected world"', link: '#events' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 56);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filters = [
    { id: 'all', label: t('events.filterAll') },
    { id: 'upcoming', label: t('events.filterUpcoming') },
    { id: 'past', label: t('events.filterPast') },
    { id: 'conference', label: t('events.filterConference') },
    { id: 'author', label: t('events.filterAuthor') },
    { id: 'literary', label: t('events.filterLiterary') },
    { id: 'launch', label: t('events.filterLaunch') },
  ];

  const filteredEvents = events.filter(event => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'upcoming') return event.type === 'upcoming';
    if (selectedFilter === 'past') return event.type === 'past';
    return event.category === selectedFilter;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', options);
  };

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

      <main className="pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="font-inter text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">{t('events.superheading')}</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              {t('events.title')}
            </h1>
            <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {t('events.description')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`relative font-inter text-sm tracking-wide uppercase pb-1 transition-colors duration-300 ${selectedFilter === filter.id
                  ? 'text-amber-800 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-amber-800'
                  : 'text-gray-500 hover:text-gray-900'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-transparent p-6 md:p-8 border border-gray-200 hover:border-gray-300 transition-colors duration-500 flex flex-col h-full group">
                <div className="relative h-56 md:h-64 bg-gray-50 mb-8 overflow-hidden">
                  {event.image ? (
                    <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FiCalendar className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-4 py-1.5 border text-xs tracking-[0.15em] font-medium font-inter uppercase ${event.type === 'upcoming'
                      ? 'border-green-800 bg-white/90 text-green-800 backdrop-blur-sm'
                      : 'border-gray-500 bg-white/90 text-gray-700 backdrop-blur-sm'}`}>
                      {event.type === 'upcoming' ? t('events.upcoming') : t('events.past')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="font-inter text-xs tracking-widest text-amber-800 uppercase">{event.category}</span>
                  </div>
                  <h3 className="font-playfair text-2xl font-normal text-gray-900 mb-3 group-hover:text-amber-800 transition-colors duration-300">{event.title}</h3>
                  <p className="font-merriweather text-sm text-gray-600 italic mb-5">{event.subtitle}</p>
                  <p className="font-inter text-sm text-gray-600 font-light mb-8 line-clamp-3 leading-relaxed">{event.description}</p>

                  <div className="space-y-3 mb-8 mt-auto border-t border-gray-100 pt-6">
                    <div className="flex items-center text-sm text-gray-600 font-light tracking-wide">
                      <FiCalendar className="w-4 h-4 mr-3 text-amber-800" />{formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-light tracking-wide">
                      <FiClock className="w-4 h-4 mr-3 text-amber-800" />{event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-light tracking-wide">
                      <FiMapPin className="w-4 h-4 mr-3 text-amber-800" />{event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 font-light tracking-wide">
                      <FiUsers className="w-4 h-4 mr-3 text-amber-800" />{event.attendees} {t('events.attendees')}
                    </div>
                  </div>

                  <Link
                    href={`/publications/events/${event.id}`}
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-gray-900 text-white border border-gray-900 hover:bg-transparent hover:text-gray-900 transition-all duration-300 font-inter text-sm tracking-widest uppercase mt-auto"
                  >
                    {event.type === 'upcoming' ? t('events.registerNow') : t('events.viewDetails')}
                    <FiArrowRight className="w-4 h-4 ml-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-24 border border-gray-200">
              <div className="mb-6"><FiCalendar className="w-12 h-12 text-gray-300 mx-auto" strokeWidth={1} /></div>
              <h3 className="font-playfair text-2xl font-normal text-gray-900 mb-3">{t('events.noEventsTitle')}</h3>
              <p className="font-inter text-gray-500 font-light max-w-md mx-auto">{t('events.noEventsMessage')}</p>
            </div>
          )}
        </div>
      </main>

      <PublicationsFooter />
    </div>
  );
}
