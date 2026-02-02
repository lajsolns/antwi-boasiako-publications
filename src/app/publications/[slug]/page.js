'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingBag, FiShare2, FiExternalLink, FiChevronLeft, FiStar, FiChevronUp } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';
import YouMayAlsoLike from '@/components/YouMayAlsoLike';

// Publications-specific cart button
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

export default function BookDetailPage({ params }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState('paperback');
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { addToCart } = useCart();

  // Unwrap params since it's a Promise in Next.js 15+
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  // Handle scroll to top button and header behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setShowBackToTop(scrolled > 300);
      setScrolled(scrolled > 56);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Sample book data - in a real app, this would come from an API or database
  const books = {
    1: {
      id: 1,
      title: "The Republic",
      subtitle: "A Professional Journey, Ghana's Cybersecurity & The Making of a Role Model Country",
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "35.00",
      ghanaPrice: "350",
      description: "An authoritative exploration of Ghana's cybersecurity evolution and the nation's journey toward becoming a global cybersecurity role model. Drawing from decades of hands-on experience, Dr. Antwi-Boasiako provides unprecedented insights into the challenges, triumphs, and strategic decisions that have shaped Ghana's digital security landscape. This seminal work is essential reading for policymakers, security professionals, and anyone interested in Africa's digital transformation.",
      longDescription: "In this comprehensive work, Dr. Albert Antwi-Boasiako, Ghana's foremost cybersecurity expert and Director-General of the Cyber Security Authority, presents a detailed account of Ghana's journey from a nation with minimal cyber defenses to becoming a recognized leader in African cybersecurity. The book covers the establishment of the Cyber Security Authority, the development of national cybersecurity frameworks, and the strategic partnerships that have positioned Ghana as a role model for other African nations. Through personal anecdotes, case studies, and strategic analysis, Dr. Antwi-Boasiako provides invaluable insights into the challenges and opportunities facing developing nations in the digital age.",
      category: 'cybersecurity',
      coverImage: '/image/books/the_republic.png',
      authorBio: "Dr. Albert Antwi-Boasiako is Ghana's foremost cybersecurity expert and Director-General of the Cyber Security Authority. With over 15 years of experience in digital security governance, he has pioneered national cybersecurity frameworks and positioned Ghana as a leader in African cyber defense.",
      isbn: "978-9988-2-1234-5",
      pages: 342,
      language: "English",
      published: "2024",
      format: "Paperback",
      trimSize: "234 x 156mm",
      weight: "450g",
      publisher: "Antwi-Boasiako Publications"
    },
    2: {
      id: 2,
      title: "The 10 Commandments for Sustainable National Cybersecurity Development",
      subtitle: "A Framework for Building Resilient Cybersecurity Ecosystems",
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "45.00",
      ghanaPrice: "450",
      description: "A groundbreaking framework that distills complex cybersecurity governance into ten actionable principles. This comprehensive guide offers governments and organizations a roadmap for building resilient cybersecurity ecosystems. Through real-world case studies and proven methodologies, Dr. Antwi-Boasiako demonstrates how developing nations can establish robust cyber defenses while fostering economic growth and digital innovation.",
      longDescription: "This seminal work presents a comprehensive framework for national cybersecurity development, distilled into ten fundamental commandments. Each commandment is explored in depth with practical examples, implementation strategies, and real-world case studies from Dr. Antwi-Boasiako's extensive experience working with governments across Africa. The book addresses critical topics including policy development, capacity building, international cooperation, public-private partnerships, and the balance between security and economic growth. It serves as both a strategic guide for policymakers and a practical manual for cybersecurity professionals.",
      category: 'cybersecurity',
      coverImage: '/image/book_mockup_english.png',
      authorBio: "Dr. Albert Antwi-Boasiako serves as a consultant to multiple African governments on cybersecurity policy and has been instrumental in shaping regional cyber security cooperation initiatives.",
      isbn: "978-9988-2-1234-6",
      pages: 428,
      language: "English",
      published: "2024",
      format: "Paperback",
      trimSize: "234 x 156mm",
      weight: "520g",
      publisher: "Antwi-Boasiako Publications"
    },
    3: {
      id: 3,
      title: "Digital Transformation",
      subtitle: "Strategic Leadership for Organizational Change in the Digital Age",
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "40.00",
      ghanaPrice: "400",
      description: "Navigate the complex landscape of organizational digital evolution with this strategic leadership guide. Dr. Antwi-Boasiako combines technical expertise with business acumen to deliver actionable insights for successful digital transformation. From legacy system modernization to cultural change management, this book provides the tools and frameworks needed to lead organizations through the digital revolution.",
      longDescription: "Digital Transformation offers a comprehensive approach to navigating the complex landscape of organizational change in the digital era. Dr. Antwi-Boasiako combines his technical expertise in cybersecurity with strategic business insights to provide a holistic framework for digital transformation. The book covers critical topics including legacy system modernization, cloud adoption strategies, cybersecurity in transformation, data governance, and cultural change management. Through detailed case studies and practical frameworks, readers will learn how to develop and implement digital transformation strategies that align with organizational goals while managing risks and maximizing opportunities in the digital age.",
      category: 'digital-transformation',
      coverImage: '/image/book_mockup_french.png',
      authorBio: "A recognized thought leader in digital transformation, Dr. Antwi-Boasiako has helped numerous organizations across Africa successfully navigate their digital journeys.",
      isbn: "978-9988-2-1234-7",
      pages: 386,
      language: "English",
      published: "2023",
      format: "Paperback",
      trimSize: "234 x 156mm",
      weight: "480g",
      publisher: "Antwi-Boasiako Publications"
    }
  };

  const book = books[slug];

  // Handle scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!book) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-merriweather text-3xl font-bold text-gray-900 mb-4">Book Not Found</h1>
          <p className="font-inter text-gray-600 mb-8">The book you're looking for doesn't exist.</p>
          <Link 
            href="/publications" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiChevronLeft className="w-4 h-4" />
            Back to Publications
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      image: book.coverImage,
      internationalPrice: parseFloat(book.internationalPrice),
      africaPrice: parseFloat(book.internationalPrice),
      ghanaPrice: parseFloat(book.ghanaPrice),
      quantity: quantity,
      format: selectedFormat
    });
  };

  return (
    <div className="min-h-screen bg-white" style={{ borderRadius: '0' }}>
      <PublicationsHeader
        scrolled={scrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentQuoteIndex={currentQuoteIndex}
        setCurrentQuoteIndex={setCurrentQuoteIndex}
        rotatingQuotes={rotatingQuotes}
      />

      {/* Main Content - New Release Page Style */}
      <main className="flex flex-col lg:flex-row" style={{ paddingTop: '200px' }}>
        {/* Left Side - Static Book Image */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-16 lg:self-start flex items-start justify-center lg:justify-end pt-2 lg:pt-2 px-8 lg:pr-8" style={{ zIndex: 10 }}>
          <div className="w-full max-w-md lg:max-w-md">
            <div className="relative w-full aspect-[3/4] mb-6">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="w-full lg:w-1/2 lg:self-start">
          <div className="px-8 py-8">
            <div className="max-w-md">
              <div className="mb-4">
                <span className="font-inter text-xs tracking-widest text-gray-500 uppercase">
                  DR. ANTWI-BOSIAKO
                </span>
            </div>
            <h2 className="font-merriweather text-3xl font-bold text-gray-900 leading-tight mb-1">
              {book.title}
            </h2>
            <div className="font-inter text-sm text-gray-600 mb-1">
              {book.subtitle}
            </div>
            <div className="font-inter text-lg font-medium text-gray-900 mb-1">
              Africa & International | ${book.internationalPrice}
            </div>
            <div className="font-inter text-lg font-medium text-gray-900 mb-4">
              Ghana | GHS {book.ghanaPrice}
            </div>
            <div className="font-inter text-sm text-gray-600 mb-4">
              VAT included
            </div>

            <div className="mb-4">
              <div className="font-inter text-sm font-medium text-gray-800 mb-2">Format</div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedFormat('paperback')}
                  className={`px-4 py-2 border text-sm font-medium transition-colors ${
                    selectedFormat === 'paperback'
                      ? 'bg-blue-800 text-white border-blue-800'
                      : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Paperback
                </button>
                <button
                  onClick={() => setSelectedFormat('ebook')}
                  className={`px-4 py-2 border text-sm font-medium transition-colors ${
                    selectedFormat === 'ebook'
                      ? 'bg-blue-800 text-white border-blue-800'
                      : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Ebook
                </button>
              </div>
            </div>

            <div className="mb-4">
              <div className="font-inter text-sm font-medium text-gray-800 mb-2">Quantity</div>
              <div className="flex items-center border border-gray-300 rounded w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 border-r border-gray-300"
                >
                  −
                </button>
                <div className="flex-1 text-center font-inter text-base text-gray-900 py-2">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 border-l border-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full px-6 py-3 bg-blue-800 text-white font-inter text-base font-medium rounded hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>

          {/* Synopsis */}
          <section className="mb-12">
            <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">Synopsis</h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed">
                {book.description}
              </p>
            </div>
          </section>

          {/* About This Book */}
          <section className="mb-12">
            <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">About This Book</h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed">
                {book.longDescription}
              </p>
            </div>
          </section>

          {/* Praise for this Book */}
          <section className="mb-12">
            <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">Praise for this Book</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-inter text-gray-700 italic">
                  "Dr. Antwi-Boasiako's work has become essential reading for our cybersecurity program. The Republic provides unparalleled insights into Ghana's digital security evolution."
                </p>
                <p className="font-inter text-sm text-gray-600 mt-2">— Prof. Kofi Annan Center, Academic Institution</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-inter text-gray-700 italic">
                  "The 10 Commandments framework transformed how we approach national cybersecurity strategy. Clear, actionable, and based on real-world experience."
                </p>
                <p className="font-inter text-sm text-gray-600 mt-2">— Sarah Johnson, Cybersecurity Analyst</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-inter text-gray-700 italic">
                  "Digital Transformation is the most comprehensive guide I've found for leading organizational change. Dr. Antwi-Boasiako's expertise shines through every chapter."
                </p>
                <p className="font-inter text-sm text-gray-600 mt-2">— Michael Chen, Digital Transformation Consultant</p>
              </div>
            </div>
          </section>

          {/* Product Details */}
          <section className="mb-12">
            <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-inter text-gray-600">ISBN:</span>
                  <span className="font-inter text-gray-900">{book.isbn}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-inter text-gray-600">Pages:</span>
                  <span className="font-inter text-gray-900">{book.pages}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-inter text-gray-600">Language:</span>
                  <span className="font-inter text-gray-900">{book.language}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-inter text-gray-600">Published:</span>
                  <span className="font-inter text-gray-900">{book.published}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-inter text-gray-600">Format:</span>
                  <span className="font-inter text-gray-900">{book.format}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-inter text-gray-600">Trim Size:</span>
                  <span className="font-inter text-gray-900">{book.trimSize}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-inter text-gray-600">Weight:</span>
                  <span className="font-inter text-gray-900">{book.weight}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-inter text-gray-600">Publisher:</span>
                  <span className="font-inter text-gray-900">{book.publisher}</span>
                </div>
              </div>
            </div>
          </section>

          {/* About the Author */}
          <section>
            <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-6">About the Author</h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed">
                {book.authorBio}
              </p>
            </div>
          </section>
        </div>
      </div>
      </main>

      {/* You May Also Like Section */}
      <YouMayAlsoLike currentBookId={book.id} books={Object.values(books)} />

      {/* Footer */}
      <PublicationsFooter />

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
  );
}
