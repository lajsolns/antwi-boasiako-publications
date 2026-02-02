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
      <main className="pt-64 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-merriweather text-4xl font-bold text-gray-900 mb-4">
              All Books
            </h1>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete collection of publications on cybersecurity, digital transformation, and academic research.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
                <Link 
                  href={`/publications/${book.id}`} 
                  key={book.id} 
                  className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="relative mb-4 overflow-hidden">
                    <div className="relative w-full aspect-[3/4] bg-gray-100">
                      {book.coverImage && book.coverImage.trim() !== '' && (
                        <Image 
                          src={book.coverImage} 
                          alt={book.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    <div className="mb-2">
                      <span className="font-inter text-xs tracking-widest text-gray-500 uppercase">
                        {book.author}
                      </span>
                    </div>
                    <h3 className="font-merriweather text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {book.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-600 mb-4 line-clamp-3">
                      {book.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-lg font-medium text-gray-900">
                        ${book.internationalPrice}
                      </span>
                      <span className="font-inter text-sm text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                        View Details →
                      </span>
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
