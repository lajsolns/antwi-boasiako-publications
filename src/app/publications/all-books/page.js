'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

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
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {getCartCount()}
        </span>
      )}
    </button>
  );
};

export default function AllBooksPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Sample book data
  const books = [
    {
      id: 1,
      title: "The Republic",
      subtitle: "A Professional Journey, Ghana's Cybersecurity & The Making of a Role Model Country",
      author: "Dr. Antwi-Boasiako",
      internationalPrice: "35.00",
      ghanaPrice: "350",
      description: "An authoritative exploration of Ghana's cybersecurity evolution and the nation's journey toward becoming a global cybersecurity role model. Drawing from decades of hands-on experience, Dr. Antwi-Boasiako provides unprecedented insights into the challenges, triumphs, and strategic decisions that have shaped Ghana's digital security landscape.",
      category: 'cybersecurity',
      coverImage: '/image/books/the_republic.png',
      authorBio: "Dr. Albert Antwi-Boasiako is Ghana's foremost cybersecurity expert and Director-General of the Cyber Security Authority.",
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
      description: "A groundbreaking framework that distills complex cybersecurity governance into ten actionable principles. This comprehensive guide offers governments and organizations a roadmap for building resilient cybersecurity ecosystems.",
      category: 'cybersecurity',
      coverImage: '/image/book_mockup_english.png',
      authorBio: "Dr. Albert Antwi-Boasiako serves as a consultant to multiple African governments on cybersecurity policy.",
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
      description: "Navigate the complex landscape of organizational digital evolution with this strategic leadership guide. Dr. Antwi-Boasiako combines technical expertise with business acumen to deliver actionable insights for successful digital transformation.",
      category: 'digital',
      coverImage: '/image/book_mockup_french.png',
      authorBio: "Dr. Albert Antwi-Boasiako is a recognized expert in digital transformation strategies.",
      isbn: "978-9988-2-1234-7",
      pages: 380,
      language: "English",
      published: "2024"
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
      <main className="pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Page Header */}
          <div className="text-center mb-20 space-y-4">
            <span className="font-inter text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">Our Collection</span>
            <h1 className="font-playfair text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              All Publications
            </h1>
            <div className="w-16 h-[1px] bg-gray-300 mx-auto mt-6 mb-8"></div>
            <p className="font-inter text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our complete collection of publications on cybersecurity, digital transformation, and academic research.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {books.map((book) => (
              <Link href={`/publications/${book.id}`} key={book.id} className="book-card group cursor-pointer flex flex-col h-full bg-transparent">
                <div className="relative mb-6 overflow-hidden">
                  {/* Subtle blur shadow matching landing page */}
                  <div className="absolute inset-4 bg-gray-200 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="relative w-full aspect-[3/4] bg-gray-50 book-card-image transition-transform duration-500 group-hover:shadow-md z-10">
                    {book.coverImage && book.coverImage.trim() !== '' && (
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                </div>
                <div className="text-center flex-grow flex flex-col pt-2">
                  <h3 className="font-playfair text-xl md:text-2xl font-normal text-gray-900 mb-2 group-hover:text-amber-800 transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="font-inter text-xs tracking-widest text-gray-500 uppercase mb-4">
                    {book.author}
                  </p>
                  <p className="font-inter text-sm text-gray-500 font-light mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {book.description}
                  </p>
                  <div className="mt-auto space-y-4 border-t border-gray-100 pt-6">
                    <div className="text-sm font-inter text-gray-600">
                      Intl: ${book.internationalPrice} <span className="mx-2 text-gray-300">|</span> GH: GHS {book.ghanaPrice}
                    </div>
                    <div className="font-inter text-xs tracking-widest uppercase text-gray-900 group-hover:text-amber-800 transition-colors duration-300">
                      View Details
                      <span className="block w-0 h-[1px] bg-amber-800 mx-auto mt-2 transition-all duration-300 group-hover:w-16"></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <PublicationsFooter />
    </div>
  );
}
