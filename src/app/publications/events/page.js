'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiArrowRight } from 'react-icons/fi';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function EventsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample events data
  const events = [
    {
      id: 1,
      title: "The Republic Book Launch",
      subtitle: "A Professional Journey in Ghana's Cybersecurity",
      description: "Join Dr. Antwi-Boasiako for the official launch of his latest book 'The Republic'. This landmark publication explores Ghana's cybersecurity evolution and the nation's journey toward becoming a global cybersecurity role model.",
      date: "2024-03-15",
      time: "05:00 PM",
      location: "British Council, Accra",
      type: "upcoming",
      category: "launch",
      image: "/image/events/book_launch.jpeg",
      attendees: 200,
      speaker: "Dr. Antwi-Boasiako",
      registrationLink: "#register"
    },
    {
      id: 2,
      title: "Author Meet & Greet",
      subtitle: "Digital Transformation Book Signing",
      description: "An intimate evening with Dr. Antwi-Boasiako discussing his insights on digital transformation in Africa. Includes book reading, Q&A session, and personalized book signing.",
      date: "2024-03-20",
      time: "06:00 PM",
      location: "Accra Mall Bookstore",
      type: "upcoming",
      category: "author",
      image: "/image/events/book_launch_doctor.jpeg",
      attendees: 50,
      speaker: "Dr. Antwi-Boasiako",
      registrationLink: "#register"
    },
    {
      id: 3,
      title: "Cybersecurity Workshop",
      subtitle: "Based on '10 Commandments for Sustainable National Cybersecurity'",
      description: "Hands-on workshop based on Dr. Antwi-Boasiako's bestselling book. Participants will learn practical implementation strategies for the 10 commandments framework.",
      date: "2024-02-28",
      time: "09:00 AM",
      location: "Kofi Annan ICT Centre",
      type: "past",
      category: "workshop",
      image: "/image/events/dasa25.jpeg",
      attendees: 75,
      speaker: "Dr. Antwi-Boasiako",
      registrationLink: null
    },
    {
      id: 4,
      title: "Literary Evening",
      subtitle: "African Cybersecurity Literature Discussion",
      description: "Join leading authors and cybersecurity experts for an evening discussing the growing body of African cybersecurity literature and its impact on policy and practice.",
      date: "2024-02-15",
      time: "07:00 PM",
      location: "University of Ghana Bookshop",
      type: "past",
      category: "literary",
      image: "/image/events/ai4africa.jpeg",
      attendees: 100,
      speaker: "Dr. Antwi-Boasiako",
      registrationLink: null
    },
    {
      id: 5,
      title: "Publishers Conference",
      subtitle: "Digital Publishing & Cybersecurity",
      description: "Annual conference bringing together publishers, authors, and cybersecurity experts to discuss digital publishing security and intellectual property protection in the digital age.",
      date: "2024-01-25",
      time: "09:00 AM",
      location: "Accra International Conference Centre",
      type: "past",
      category: "conference",
      image: "/image/events/imdc.png",
      attendees: 300,
      speaker: "Dr. Antwi-Boasiako",
      registrationLink: null
    },
    {
      id: 6,
      title: "Book Tour 2025",
      subtitle: "The Republic - African Edition Launch",
      description: "Pan-African book tour launching the special African edition of 'The Republic'. Features readings, discussions, and cultural exchanges across multiple African countries.",
      date: "2025-02-10",
      time: "05:00 PM",
      location: "National Theatre, Accra",
      type: "upcoming",
      category: "launch",
      image: "/image/events/firstcon25.jpeg",
      attendees: 500,
      speaker: "Dr. Antwi-Boasiako",
      registrationLink: "#register"
    }
  ];

  // Rotating quotes
  const rotatingQuotes = [
    {
      text: '"Transforming cybersecurity education across Africa through innovative research and practical implementation"',
      link: '#new-releases'
    },
    {
      text: '"Building the next generation of cybersecurity professionals with cutting-edge knowledge and skills"',
      link: '#categories'
    },
    {
      text: '"Pioneering digital security solutions for a safer, more connected world"',
      link: '#events'
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

  // Filter events
  const filteredEvents = events.filter(event => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'upcoming') return event.type === 'upcoming';
    if (selectedFilter === 'past') return event.type === 'past';
    return event.category === selectedFilter;
  });

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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

      {/* Main Content */}
      <main className="pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-merriweather text-4xl font-bold text-gray-900 mb-4">
              Publications Events
            </h1>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for book launches, author events, workshops, and literary discussions featuring Dr. Antwi-Boasiako and other distinguished authors.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-6 py-2 rounded-full font-inter text-sm font-medium transition-colors duration-200 ${
                selectedFilter === 'all'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedFilter('upcoming')}
              className={`px-6 py-2 rounded-full font-inter text-sm font-medium transition-colors duration-200 ${
                selectedFilter === 'upcoming'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setSelectedFilter('past')}
              className={`px-6 py-2 rounded-full font-inter text-sm font-medium transition-colors duration-200 ${
                selectedFilter === 'past'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Past Events
            </button>
            <button
              onClick={() => setSelectedFilter('conference')}
              className={`px-6 py-2 rounded-full font-inter text-sm font-medium transition-colors duration-200 ${
                selectedFilter === 'conference'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Conferences
            </button>
            <button
              onClick={() => setSelectedFilter('author')}
              className={`px-6 py-2 rounded-full font-inter text-sm font-medium transition-colors duration-200 ${
                selectedFilter === 'author'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Author Events
            </button>
            <button
              onClick={() => setSelectedFilter('literary')}
              className={`px-6 py-2 rounded-full font-inter text-sm font-medium transition-colors duration-200 ${
                selectedFilter === 'literary'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Literary Events
            </button>
            <button
              onClick={() => setSelectedFilter('launch')}
              className={`px-6 py-2 rounded-full font-inter text-sm font-medium transition-colors duration-200 ${
                selectedFilter === 'launch'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Book Launches
            </button>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
              >
                {/* Event Image */}
                <div className="relative h-48 bg-gray-100">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FiCalendar className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium font-inter ${
                      event.type === 'upcoming'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="font-inter text-xs tracking-widest text-gray-500 uppercase">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="font-merriweather text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-600 mb-4">
                    {event.subtitle}
                  </p>
                  <p className="font-inter text-sm text-gray-700 mb-6 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <FiCalendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiClock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiMapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiUsers className="w-4 h-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/publications/events/${event.id}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-inter text-sm font-medium"
                  >
                    {event.type === 'upcoming' ? 'Register Now' : 'View Details'}
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <FiCalendar className="w-16 h-16 text-gray-400 mx-auto" />
              </div>
              <h3 className="font-merriweather text-xl font-semibold text-gray-900 mb-2">
                No events found
              </h3>
              <p className="font-inter text-gray-600">
                Check back soon for upcoming events!
              </p>
            </div>
          )}
        </div>
      </main>

      <PublicationsFooter />
    </div>
  );
}
