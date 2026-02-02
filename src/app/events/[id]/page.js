'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiDownload, FiPlay, FiFileText, FiMic, FiShare2, FiChevronLeft, FiEdit } from 'react-icons/fi';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';
import ImageGalleryModal from '@/components/ImageGalleryModal';

export default function EventDetailPage({ params }) {
  const resolvedParams = use(params);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Sample event data - in a real app, this would be fetched based on resolvedParams.id
  const event = {
    id: resolvedParams?.id || 1,
    title: "The Republic Book Launch",
    subtitle: "A Professional Journey in Ghana's Cybersecurity",
    description: "Join Dr. Antwi-Boasiako for the official launch of his latest book 'The Republic'. This landmark publication explores Ghana's cybersecurity evolution and the nation's journey toward becoming a global cybersecurity role model.",
    longDescription: "The Republic Book Launch celebrates the release of Dr. Antwi-Boasiako's seminal work on Ghana's cybersecurity journey. This exclusive event features readings from the book, insightful discussions on the themes explored, and opportunities for attendees to engage with the author. The publication represents a comprehensive analysis of Ghana's transformation into a cybersecurity leader in Africa, making this launch a significant moment in the nation's technological and literary landscape.",
    date: "2024-03-15",
    time: "05:00 PM",
    endDate: "2024-03-15",
    endTime: "08:00 PM",
    location: "British Council, Accra",
    address: "Liberty Avenue, Accra, Ghana",
    type: "upcoming",
    category: "launch",
    image: "/image/events/book_launch.jpeg",
    attendees: 200,
    speaker: "Dr. Antwi-Boasiako",
    registrationLink: "#register",
    agenda: [
      { time: "05:00 PM", title: "Guest Arrival & Welcome Reception", duration: "30 min" },
      { time: "05:30 PM", title: "Opening Remarks", duration: "10 min" },
      { time: "05:40 PM", title: "Author Introduction", duration: "15 min" },
      { time: "05:55 PM", title: "Book Reading - Selected Chapters", duration: "25 min" },
      { time: "06:20 PM", title: "Q&A Session with Author", duration: "30 min" },
      { time: "06:50 PM", title: "Literary Discussion", duration: "20 min" },
      { time: "07:10 PM", title: "Book Signing Session", duration: "40 min" },
      { time: "07:50 PM", title: "Networking & Refreshments", duration: "40 min" }
    ],
    speakers: [
      {
        name: "Dr. Antwi-Boasiako",
        title: "Director-General, Cyber Security Authority",
        bio: "Leading Ghana's cybersecurity initiatives with over 15 years of experience in digital security governance and policy development.",
        image: "/image/CEO.png"
      },
      {
        name: "Prof. Jane Smith",
        title: "Cybersecurity Expert, University of Ghana",
        bio: "Specializing in digital forensics and cybercrime investigation with extensive research experience in African cybersecurity challenges.",
        image: "/image/aboutpics.png"
      },
      {
        name: "Dr. Michael Johnson",
        title: "Senior Security Consultant",
        bio: "Expert in enterprise security architecture and risk management with over 20 years of experience in the field.",
        image: "/image/IMG_9663 2.png"
      }
    ],
    media: {
      videos: [
        {
          id: 1,
          title: "Opening Keynote - Dr. Antwi-Boasiako",
          description: "Full keynote speech on Africa's cybersecurity landscape",
          thumbnail: "/image/events/CSWIPR_Ghanas_edit2.png",
          duration: "45:30",
          url: "#video1",
          recordedAt: "2024-03-15T09:45:00"
        },
        {
          id: 2,
          title: "Panel Discussion - Emerging Threats",
          description: "Expert panel discussing latest cybersecurity threats",
          thumbnail: "/image/events/dasa25.jpeg",
          duration: "58:15",
          url: "#video2",
          recordedAt: "2024-03-15T10:30:00"
        }
      ],
      documents: [
        {
          id: 1,
          title: "Event Program",
          description: "Complete event schedule and speaker information",
          type: "PDF",
          size: "2.3 MB",
          url: "#program",
          uploadedAt: "2024-03-10"
        },
        {
          id: 2,
          title: "Presentation Slides - Keynote",
          description: "Dr. Antwi-Boasiako's keynote presentation slides",
          type: "PPTX",
          size: "15.7 MB",
          url: "#slides",
          uploadedAt: "2024-03-15"
        }
      ],
      audio: [
        {
          id: 1,
          title: "Audio Recording - Panel Discussion",
          description: "Full audio recording of the emerging threats panel",
          duration: "58:15",
          size: "45.2 MB",
          url: "#audio1",
          recordedAt: "2024-03-15T10:30:00"
        }
      ]
    },
    gallery: [
      "/image/events/CSWIPR_Ghanas.jpg",
      "/image/events/book_launch_doctor.jpeg",
      "/image/events/imdec.jpeg",
      "/image/events/book_highlights.png",
      "/image/events/CSWIPR_Ghanas_edit.png",
      "/image/events/book_launch.jpeg",
      "/image/events/dasa25.jpeg",
      "/image/events/ai4africa.jpeg",
      "/image/events/imdc.png",
      "/image/events/firstcon25.jpeg"
    ]
  };

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
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/events"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 font-inter text-sm font-medium"
            >
              <FiChevronLeft className="w-4 h-4 mr-1" />
              Back to Events
            </Link>
          </div>

          {/* Event Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="font-inter text-xs tracking-widest text-gray-500 uppercase">
                  {event.category}
                </span>
              </div>
              <h1 className="font-merriweather text-4xl font-bold text-gray-900 mb-4">
                {event.title}
              </h1>
              <p className="font-inter text-xl text-gray-600 mb-6">
                {event.subtitle}
              </p>
              <p className="font-inter text-gray-700 leading-relaxed">
                {event.longDescription}
              </p>
            </div>

            {/* Event Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="relative h-48 bg-gray-200 rounded-lg mb-6 overflow-hidden">
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
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiCalendar className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-inter text-sm text-gray-900">
                        {formatDate(event.date)}
                      </p>
                      <p className="font-inter text-sm text-gray-600">
                        {event.time} - {event.endTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiMapPin className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-inter text-sm text-gray-900">
                        {event.location}
                      </p>
                      <p className="font-inter text-sm text-gray-600">
                        {event.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiUsers className="w-5 h-5 text-gray-600 mr-3" />
                    <p className="font-inter text-sm text-gray-900">
                      {event.attendees} attendees
                    </p>
                  </div>
                </div>

                {event.type === 'upcoming' && (
                  <button className="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-inter text-sm font-medium">
                    Register Now
                  </button>
                )}

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-inter text-sm text-gray-700">
                    <FiShare2 className="w-4 h-4 inline mr-1" />
                    Share
                  </button>
                  <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-inter text-sm text-gray-700">
                    <FiEdit className="w-4 h-4 inline mr-1" />
                    Export
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {['overview', 'agenda', 'speakers', 'media', 'gallery'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-inter text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="prose prose-lg max-w-none">
                <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-4">
                  Event Overview
                </h2>
                <p className="font-inter text-gray-700 leading-relaxed mb-6">
                  {event.longDescription}
                </p>
                <h3 className="font-merriweather text-xl font-semibold text-gray-900 mb-3">
                  Key Topics
                </h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li className="font-inter text-gray-700">Current cybersecurity landscape in Africa</li>
                  <li className="font-inter text-gray-700">Emerging threats and vulnerabilities</li>
                  <li className="font-inter text-gray-700">Best practices for organizational security</li>
                  <li className="font-inter text-gray-700">Collaborative approaches to cyber defense</li>
                  <li className="font-inter text-gray-700">Future trends and technologies</li>
                </ul>
              </div>
            )}

            {activeTab === 'agenda' && (
              <div>
                <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">
                  Event Agenda
                </h2>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                      <div className="flex-shrink-0 w-24">
                        <p className="font-inter text-sm font-medium text-gray-900">
                          {item.time}
                        </p>
                        <p className="font-inter text-xs text-gray-500">
                          {item.duration}
                        </p>
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="font-inter text-gray-900">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'speakers' && (
              <div>
                <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">
                  Featured Speakers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-start bg-gray-50 rounded-lg p-6">
                      <div className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
                        {speaker.image ? (
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <FiUsers className="w-8 h-8 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-merriweather text-lg font-semibold text-gray-900">
                          {speaker.name}
                        </h3>
                        <p className="font-inter text-sm text-gray-600 mb-2">
                          {speaker.title}
                        </p>
                        <p className="font-inter text-sm text-gray-700">
                          {speaker.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div>
                <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">
                  Event Media
                </h2>
                
                {/* Videos Section */}
                <div className="mb-8">
                  <h3 className="font-merriweather text-xl font-semibold text-gray-900 mb-4">
                    <FiPlay className="inline w-5 h-5 mr-2" />
                    Videos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.media.videos.map((video) => (
                      <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden">
                        <div className="relative h-32 bg-gray-200">
                          {video.thumbnail ? (
                            <Image
                              src={video.thumbnail}
                              alt={video.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FiPlay className="w-8 h-8 text-gray-400" />
                            </div>
                          )}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                              <FiPlay className="w-5 h-5 text-white ml-1" />
                            </button>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-inter font-medium text-gray-900 mb-1">
                            {video.title}
                          </h4>
                          <p className="font-inter text-sm text-gray-600 mb-2">
                            {video.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-inter text-xs text-gray-500">
                              {video.duration}
                            </span>
                            <button className="text-blue-600 hover:text-blue-700 font-inter text-sm font-medium">
                              Watch
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents Section */}
                <div className="mb-8">
                  <h3 className="font-merriweather text-xl font-semibold text-gray-900 mb-4">
                    <FiFileText className="inline w-5 h-5 mr-2" />
                    Documents
                  </h3>
                  <div className="space-y-3">
                    {event.media.documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <FiFileText className="w-8 h-8 text-gray-400 mr-3" />
                          <div>
                            <h4 className="font-inter font-medium text-gray-900">
                              {doc.title}
                            </h4>
                            <p className="font-inter text-sm text-gray-600">
                              {doc.description}
                            </p>
                            <p className="font-inter text-xs text-gray-500">
                              {doc.type} • {doc.size} • {doc.uploadedAt}
                            </p>
                          </div>
                        </div>
                        <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-inter text-sm font-medium">
                          <FiDownload className="inline w-4 h-4 mr-1" />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audio Section */}
                <div>
                  <h3 className="font-merriweather text-xl font-semibold text-gray-900 mb-4">
                    <FiMic className="inline w-5 h-5 mr-2" />
                    Audio Recordings
                  </h3>
                  <div className="space-y-3">
                    {event.media.audio.map((audio) => (
                      <div key={audio.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <FiMic className="w-8 h-8 text-gray-400 mr-3" />
                          <div>
                            <h4 className="font-inter font-medium text-gray-900">
                              {audio.title}
                            </h4>
                            <p className="font-inter text-sm text-gray-600">
                              {audio.description}
                            </p>
                            <p className="font-inter text-xs text-gray-500">
                              {audio.duration} • {audio.size} • {audio.recordedAt}
                            </p>
                          </div>
                        </div>
                        <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-inter text-sm font-medium">
                          <FiPlay className="inline w-4 h-4 mr-1" />
                          Play
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div>
                <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">
                  Event Gallery
                </h2>
                <p className="font-inter text-gray-600 mb-6">
                  {event.gallery.length > 4 
                    ? `Showing 4 of ${event.gallery.length} photos. Click on any image to view in fullscreen slideshow mode.`
                    : 'Click on any image to view in fullscreen slideshow mode.'
                  }
                </p>
                
                {/* Display first 4 images */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {event.gallery.slice(0, 4).map((image, index) => (
                    <div 
                      key={index} 
                      className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => {
                        setSelectedImageIndex(index);
                        setIsGalleryOpen(true);
                      }}
                    >
                      <Image
                        src={image}
                        alt={`Event image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button for galleries with more than 4 images */}
                {event.gallery.length > 4 && (
                  <div className="text-center">
                    <button
                      onClick={() => {
                        setSelectedImageIndex(0);
                        setIsGalleryOpen(true);
                      }}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-inter text-sm font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      View All {event.gallery.length} Photos
                    </button>
                    <p className="font-inter text-sm text-gray-500 mt-2">
                      Or click any image above to start slideshow
                    </p>
                  </div>
                )}

                {/* Additional images counter for reference */}
                {event.gallery.length > 4 && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-inter font-medium text-gray-900">
                          Complete Gallery
                        </h3>
                        <p className="font-inter text-sm text-gray-600">
                          All {event.gallery.length} event photos available in fullscreen slideshow
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {event.gallery.slice(0, 6).map((_, index) => (
                          <div 
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index < 4 ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                        {event.gallery.length > 6 && (
                          <span className="font-inter text-xs text-gray-500">+{event.gallery.length - 6}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <PublicationsFooter />

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={event.gallery}
        initialIndex={selectedImageIndex}
      />
    </div>
  );
}
