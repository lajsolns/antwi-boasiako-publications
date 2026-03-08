'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

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

export default function PublicationsHeader({
  scrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  currentQuoteIndex,
  setCurrentQuoteIndex,
  rotatingQuotes
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Quote Banner */}
      <div className="bg-gray-900 text-white py-2 relative z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between w-full h-full px-2">
          <button
            onClick={() => setCurrentQuoteIndex((prev) => (prev - 1 + rotatingQuotes.length) % rotatingQuotes.length)}
            className="p-1 hover:bg-gray-800 transition-colors duration-200"
            aria-label="Previous quote"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex-1 text-center px-2 flex items-center justify-center overflow-hidden">
            <p className="flex items-center justify-center font-inter text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light text-center leading-tight text-white/90">
              <span className="opacity-60 mr-2 hidden sm:inline">—</span>
              {rotatingQuotes && rotatingQuotes.length > 0 ? rotatingQuotes[currentQuoteIndex].text : ''}
              {rotatingQuotes && rotatingQuotes.length > 0 && (
                <Link
                  href={rotatingQuotes[currentQuoteIndex].link}
                  className="inline-flex items-center ml-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  aria-label="Navigate to related page"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
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

      {/* Header */}
      <header
        className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-4 pb-4 relative h-24 lg:h-36 flex items-center justify-between">
          {/* Left - Mobile Menu Button */}
          <button
            className="lg:hidden absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 z-50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6 text-gray-800" /> : <FiMenu className="w-6 h-6 text-gray-800" />}
          </button>
          <div className="hidden lg:block w-12"></div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center flex-1">
            <Link href="/publications" className="flex items-center no-underline text-gray-900 group">
              <Image
                src="/image/logo_silver.png"
                alt="Antwi-Boasiako Publications"
                width={500}
                height={500}
                className="w-24 h-24 lg:w-36 lg:h-36 object-cover cursor-pointer"
              />
            </Link>
          </div>

          {/* Right - Search and Cart (Mobile) */}
          <div className="lg:hidden absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 flex items-center gap-1 sm:gap-2">
            <button className="p-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">
              <FiSearch className="w-5 h-5" />
            </button>
            <PublicationsCartButton />
          </div>

          {/* Desktop Search and Cart */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">
              <FiSearch className="w-5 h-5" />
            </button>
            <PublicationsCartButton />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-[#FAF9F6] z-[60] transition-all duration-700 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-amber-800/20"></div>
          <div className="absolute top-20 left-10 w-px h-32 bg-amber-800/10 hidden sm:block"></div>

          {/* Header in Overlay */}
          <div className="flex flex-col items-center justify-center px-8 py-10 border-b border-gray-100 bg-white/50 backdrop-blur-md relative">
            <Link href="/publications" onClick={() => setIsMobileMenuOpen(false)} className="mb-0 group">
              <Image
                src="/image/logo_silver.png"
                alt="Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 p-3 text-gray-900 hover:bg-white transition-all border border-transparent hover:border-gray-100 shadow-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <div className="h-[calc(100vh-80px)] overflow-y-auto px-8 py-12 flex flex-col justify-between">
            <nav className="flex flex-col items-center space-y-2">
              {[
                { name: 'Home', href: '/publications' },
                { name: 'All Books', href: '/publications/all-books' },
                { name: 'Events', href: '/publications/events' },
                { name: 'Author', href: '/publications/author' },
                { name: 'Gallery', href: '/publications/gallery' },
                { name: 'About', href: '/publications/about' },
                { name: 'Contact Us', href: '/publications/contact' }
              ].map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group py-4 w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="block font-inter text-[10px] tracking-[0.4em] text-gray-400 uppercase mb-1">
                    0{i + 1}
                  </span>
                  <span className={`font-playfair text-3xl font-normal transition-all duration-300 ${pathname === link.href ? 'text-amber-800 italic pr-4' : 'text-gray-900 group-hover:text-amber-800'}`}>
                    {link.name}
                  </span>
                </Link>
              ))}

              {/* Policies as a section */}
              <div className="w-full pt-12 pb-8 flex flex-col items-center">
                <div className="w-8 h-[1px] bg-amber-800/30 mb-8"></div>
                <div className="flex gap-8">
                  <Link
                    href="/publications/privacy-policy"
                    className="font-inter text-[9px] tracking-[0.3em] uppercase text-gray-500 hover:text-amber-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/publications/shipping-policy"
                    className="font-inter text-[9px] tracking-[0.3em] uppercase text-gray-500 hover:text-amber-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Shipping
                  </Link>
                  <Link
                    href="/publications/csr"
                    className="font-inter text-[9px] tracking-[0.3em] uppercase text-gray-500 hover:text-amber-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CSR
                  </Link>
                </div>
              </div>
            </nav>

            {/* Menu Footer */}
            <div className="pt-12 text-center">
              <p className="font-playfair text-sm italic text-gray-400 max-w-[200px] mx-auto leading-relaxed mb-6">
                "Sharing the intellectual works of Dr. Albert Antwi-Boasiako"
              </p>
              <p className="font-inter text-[8px] tracking-[0.5em] uppercase text-gray-300">
                — Established 2024 —
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Desktop Only */}
        <nav className="hidden lg:block border-b border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center h-12">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/publications"
                  className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-700 hover:text-amber-800 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-amber-800 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications' ? 'after:w-full text-amber-800' : 'after:w-0'}`}>
                    Home
                  </span>
                </Link>
                <Link
                  href="/publications/all-books"
                  className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-700 hover:text-amber-800 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-amber-800 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/all-books' ? 'after:w-full text-amber-800' : 'after:w-0'}`}>
                    All Books
                  </span>
                </Link>
                <Link
                  href="/publications/events"
                  className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-700 hover:text-amber-800 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-amber-800 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/events' ? 'after:w-full text-amber-800' : 'after:w-0'}`}>
                    Events
                  </span>
                </Link>
                <Link
                  href="/publications/author"
                  className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-700 hover:text-amber-800 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-amber-800 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/author' ? 'after:w-full text-amber-800' : 'after:w-0'}`}>
                    Author
                  </span>
                </Link>
                <Link
                  href="/publications/gallery"
                  className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-700 hover:text-amber-800 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-amber-800 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/gallery' ? 'after:w-full text-amber-800' : 'after:w-0'}`}>
                    Gallery
                  </span>
                </Link>
                <Link
                  href="/publications/about"
                  className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-700 hover:text-amber-800 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-amber-800 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/about' ? 'after:w-full text-amber-800' : 'after:w-0'}`}>
                    About
                  </span>
                </Link>
                <Link
                  href="/publications/contact"
                  className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-700 hover:text-amber-800 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-amber-800 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/contact' ? 'after:w-full text-amber-800' : 'after:w-0'}`}>
                    Contact Us
                  </span>
                </Link>
                <div className="relative group">
                  <button
                    className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-700 hover:text-amber-800 transition-colors duration-200 flex items-center justify-center h-full group"
                  >
                    <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-amber-800 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${(pathname === '/publications/privacy-policy' || pathname === '/publications/shipping-policy') ? 'after:w-full text-amber-800' : 'after:w-0'}`}>
                      Policies
                    </span>
                  </button>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2 flex flex-col">
                      <Link
                        href="/publications/privacy-policy"
                        className={`px-6 py-3 font-inter text-xs tracking-widest uppercase hover:bg-gray-50 hover:text-amber-800 transition-colors text-center ${pathname === '/publications/privacy-policy' ? 'text-amber-800 bg-gray-50' : 'text-gray-500'}`}
                      >
                        Privacy
                      </Link>
                      <Link
                        href="/publications/shipping-policy"
                        className={`px-6 py-3 font-inter text-xs tracking-widest uppercase hover:bg-gray-50 hover:text-amber-800 transition-colors text-center ${pathname === '/publications/shipping-policy' ? 'text-amber-800 bg-gray-50' : 'text-gray-500'}`}
                      >
                        Shipping
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  href="/publications/csr"
                  className="font-inter text-[10px] tracking-[0.15em] uppercase text-gray-700 hover:text-amber-800 transition-colors duration-200 relative group"
                >
                  <span className={`relative after:content-[''] after:absolute after:h-[1px] after:bg-amber-800 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full ${pathname === '/publications/csr' ? 'after:w-full text-amber-800' : 'after:w-0'}`}>
                    CSR
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header >
    </>
  );
}
