'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiDownload, FiPlay, FiFileText, FiMic, FiShare2, FiChevronLeft, FiEdit, FiArrowLeft } from 'react-icons/fi';
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
      <main className="flex-grow w-full pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-[url('/image/abstract_bg_classic.jpg')] bg-cover bg-center bg-no-repeat bg-fixed relative">
        {/* Light overlay to mute background image */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back Navigation Bar - Styled like gallery */}
          <div className="mb-12">
            <Link
              href="/publications/events"
              className="inline-flex items-center text-gray-500 hover:text-amber-800 transition-colors font-inter text-xs tracking-widest uppercase"
            >
              <FiArrowLeft className="mr-2" />
              Back to Events
            </Link>
          </div>

          {/* Event Header Section - Styled like gallery */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block font-inter text-xs tracking-[0.2em] text-amber-800 uppercase">
              {event.category} • {formatDate(event.date)}
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
              {event.title}
            </h1>
            <div className="w-16 h-[1px] bg-amber-800 mx-auto mt-6 mb-8"></div>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              {event.subtitle}
            </p>
          </div>

          {/* Content Container (White Card) */}
          <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50 relative mb-12">
            {/* Elegant corner accents */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-amber-800"></div>
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-amber-800"></div>
            <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-amber-800"></div>
            <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-amber-800"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-6 flex items-center">
                    <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                    Event Description
                    <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                  </h3>
                  <p className="font-inter text-gray-700 leading-relaxed text-lg font-light">
                    {event.longDescription}
                  </p>
                </div>
              </div>

              {/* Event Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50/50 border border-gray-100 rounded-sm p-8">
                  <div className="relative h-48 bg-gray-200 rounded-sm mb-8 overflow-hidden border border-gray-100">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover hover:scale-105 transition-all duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FiCalendar className="w-12 h-12 text-gray-300" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <FiCalendar className="w-5 h-5 text-amber-800 mr-4 mt-0.5" />
                      <div>
                        <p className="font-inter text-xs tracking-widest text-gray-400 uppercase mb-1">Date</p>
                        <p className="font-inter text-sm text-gray-900 font-medium">
                          {formatDate(event.date)}
                        </p>
                        <p className="font-inter text-xs text-gray-500 mt-1 uppercase tracking-tighter">
                          {event.time} — {event.endTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FiMapPin className="w-5 h-5 text-amber-800 mr-4 mt-0.5" />
                      <div>
                        <p className="font-inter text-xs tracking-widest text-gray-400 uppercase mb-1">Venue</p>
                        <p className="font-inter text-sm text-gray-900 font-medium">
                          {event.location}
                        </p>
                        <p className="font-inter text-xs text-gray-500 mt-1 uppercase tracking-tighter">
                          {event.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FiUsers className="w-5 h-5 text-amber-800 mr-4" />
                      <div>
                        <p className="font-inter text-xs tracking-widest text-gray-400 uppercase mb-1">Attendance</p>
                        <p className="font-inter text-sm text-gray-900 font-medium">
                          {event.attendees} Professionals
                        </p>
                      </div>
                    </div>
                  </div>

                  {event.type === 'upcoming' && (
                    <button className="w-full mt-10 px-6 py-4 bg-gray-900 text-white hover:bg-amber-900 transition-colors duration-300 font-inter text-xs tracking-[0.2em] uppercase">
                      Register Attendance
                    </button>
                  )}

                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 hover:border-amber-800 hover:text-amber-800 transition-all duration-300 font-inter text-[10px] tracking-widest uppercase">
                      <FiShare2 className="w-3 h-3 inline mr-2" />
                      Share
                    </button>
                    <button className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 hover:border-amber-800 hover:text-amber-800 transition-all duration-300 font-inter text-[10px] tracking-widest uppercase">
                      <FiEdit className="w-3 h-3 inline mr-2" />
                      Export
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Tabs - Integrated into card */}
            <div className="mt-16">
              <div className="border-b border-gray-100 mb-10">
                <nav className="flex space-x-12">
                  {['overview', 'agenda', 'speakers', 'media', 'gallery'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 px-1 border-b-2 font-inter text-xs tracking-[0.2em] uppercase transition-all duration-300 ${activeTab === tab
                        ? 'border-amber-800 text-amber-800'
                        : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-200'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <div className="prose prose-lg max-w-none">
                    <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                      <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                      Detailed Highlights
                      <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      <div className="space-y-4">
                        <p className="font-inter text-gray-700 leading-relaxed font-light">
                          {event.longDescription}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-8 border border-gray-100">
                        <h4 className="font-playfair text-xl mb-6 italic text-gray-800">Key Focus Areas</h4>
                        <ul className="space-y-4">
                          {[
                            "Ghana's cybersecurity evolution",
                            "Digital transformation in Africa",
                            "Best practices for national security",
                            "Collaborative approaches to cyber defense",
                            "Future trends and technologies"
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center font-inter text-sm text-gray-600 font-light">
                              <span className="w-1.5 h-1.5 bg-amber-800 rounded-full mr-4 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'agenda' && (
                  <div>
                    <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                      <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                      Schedule of Proceedings
                      <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                    </h3>
                    <div className="space-y-1">
                      {event.agenda.map((item, index) => (
                        <div key={index} className="flex items-center py-6 border-b border-gray-50 last:border-0 group hover:bg-gray-50/50 transition-colors px-4">
                          <div className="flex-shrink-0 w-32">
                            <p className="font-inter text-xs tracking-widest text-amber-800 font-medium">
                              {item.time}
                            </p>
                            <p className="font-inter text-[10px] text-gray-400 uppercase mt-1">
                              {item.duration}
                            </p>
                          </div>
                          <div className="ml-8 flex-grow">
                            <p className="font-inter text-gray-800 text-sm font-light tracking-wide group-hover:translate-x-1 transition-transform">
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
                    <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                      <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                      Distinguished Speakers
                      <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-start gap-8 group">
                          <div className="flex-shrink-0 relative w-32 h-40 bg-gray-100 border border-gray-100 overflow-hidden shadow-sm">
                            {speaker.image ? (
                              <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-105"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <FiUsers className="w-10 h-10 text-gray-300" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-playfair text-xl text-gray-900 mb-1 group-hover:text-amber-800 transition-colors">
                              {speaker.name}
                            </h4>
                            <p className="font-inter text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-4">
                              {speaker.title}
                            </p>
                            <p className="font-inter text-sm text-gray-600 font-light leading-relaxed italic">
                              "{speaker.bio}"
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'media' && (
                  <div className="space-y-16">
                    {/* Videos Section */}
                    <div>
                      <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                        <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                        Event Footage
                        <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {event.media.videos.map((video) => (
                          <div key={video.id} className="group">
                            <div className="relative aspect-video bg-gray-900 overflow-hidden border border-gray-200">
                              {video.thumbnail ? (
                                <Image
                                  src={video.thumbnail}
                                  alt={video.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-all duration-700"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <FiPlay className="w-12 h-12 text-gray-600" />
                                </div>
                              )}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                                <button className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-amber-800 hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                  <FiPlay className="w-6 h-6 ml-1" />
                                </button>
                              </div>
                              <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-sm text-white font-inter text-[10px] tracking-widest uppercase">
                                {video.duration}
                              </div>
                            </div>
                            <div className="mt-6">
                              <h4 className="font-playfair text-lg text-gray-900 mb-2">
                                {video.title}
                              </h4>
                              <p className="font-inter text-sm text-gray-500 font-light line-clamp-2">
                                {video.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      {/* Documents */}
                      <div>
                        <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                          <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                          Documentation
                          <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                        </h3>
                        <div className="space-y-4">
                          {event.media.documents.map((doc) => (
                            <div key={doc.id} className="flex items-center justify-between p-6 bg-gray-50/50 border border-gray-100 hover:border-amber-800 transition-colors group">
                              <div className="flex items-center">
                                <FiFileText className="w-6 h-6 text-gray-400 mr-4 group-hover:text-amber-800 transition-colors" />
                                <div>
                                  <h4 className="font-inter text-sm font-medium text-gray-900 tracking-wide">
                                    {doc.title}
                                  </h4>
                                  <p className="font-inter text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                                    {doc.type} • {doc.size}
                                  </p>
                                </div>
                              </div>
                              <button className="text-gray-400 hover:text-amber-800 transition-colors">
                                <FiDownload className="w-5 h-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Audio */}
                      <div>
                        <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                          <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                          Audio Archive
                          <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                        </h3>
                        <div className="space-y-4">
                          {event.media.audio.map((audio) => (
                            <div key={audio.id} className="flex items-center justify-between p-6 bg-gray-50/50 border border-gray-100 hover:border-amber-800 transition-colors group">
                              <div className="flex items-center">
                                <FiMic className="w-6 h-6 text-gray-400 mr-4 group-hover:text-amber-800 transition-colors" />
                                <div>
                                  <h4 className="font-inter text-sm font-medium text-gray-900 tracking-wide">
                                    {audio.title}
                                  </h4>
                                  <p className="font-inter text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                                    {audio.duration} • {audio.size}
                                  </p>
                                </div>
                              </div>
                              <button className="text-gray-400 hover:text-amber-800 transition-colors">
                                <FiPlay className="w-5 h-5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'gallery' && (
                  <div>
                    <h3 className="font-inter text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center">
                      <span className="w-8 h-[1px] bg-gray-200 mr-4"></span>
                      Photo Collection
                      <span className="flex-grow h-[1px] bg-gray-100 ml-4"></span>
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                      {event.gallery.slice(0, 8).map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer group shadow-sm border border-gray-100"
                          onClick={() => {
                            setSelectedImageIndex(index);
                            setIsGalleryOpen(true);
                          }}
                        >
                          <Image
                            src={image}
                            alt={`Event image ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm px-4 py-2 font-inter text-[10px] tracking-widest uppercase text-gray-900 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                              View
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center py-12 border-t border-gray-50 bg-gray-50/30">
                      <button
                        onClick={() => {
                          setSelectedImageIndex(0);
                          setIsGalleryOpen(true);
                        }}
                        className="inline-flex items-center px-10 py-4 bg-gray-900 text-white hover:bg-amber-900 transition-all duration-300 font-inter text-xs tracking-[0.3em] uppercase"
                      >
                        Explore Archive — {event.gallery.length} Plates
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
