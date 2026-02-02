'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  // Calculate header top position based on scroll
  const dynamicHeaderTop = scrolled ? 0 : 48; // Perfectly match quote banner height

  return (
    <>
      {/* Quote Banner - Fixed at very top */}
      <div 
        className={`bg-gray-900 text-white py-2 px-4 transition-transform duration-300 ease-in-out overflow-hidden ${
          scrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{
          height: '48px', // Reduced height
          display: 'flex',
          alignItems: 'center'
        }}
      >
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
          
          <div className="flex-1 text-center px-4 flex items-center justify-center">
            <p className="flex items-center align-center justify-center font-merriweather text-sm not-italic font-semibold text-center leading-tight">
              {rotatingQuotes[currentQuoteIndex].text}
              <Link 
                href={rotatingQuotes[currentQuoteIndex].link}
                className="inline-flex items-center ml-2 hover:bg-gray-800 transition-colors duration-200 flex-shrink-0"
                aria-label="Navigate to related page"
              >
                <svg className="w-4 h-4 align-baseline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Header - Fixed */}
      <header
        className="bg-white border-b border-gray-200 shadow-sm"
        style={{
          position: 'fixed',
          top: `${dynamicHeaderTop}px`,
          left: '0px',
          right: '0px',
          zIndex: 50,
          transition: 'top 0.3s ease-in-out'
        }}
      >
        {/* Top Bar - Logo and Cart */}
        <div className="max-w-6xl mx-auto px-8 pt-4 pb-4 relative h-24 lg:h-36 flex items-center justify-between">
          {/* Left - Mobile Menu Button */}
          <button 
            className="lg:hidden absolute left-8 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6 text-gray-800" /> : <FiMenu className="w-6 h-6 text-gray-800" />}
          </button>
          <div className="hidden lg:block w-12"></div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center flex-1">
            <Link href="/publications" className="flex items-center no-underline text-gray-900">
              <Image 
                src="/image/logo_silver.png" 
                alt="Antwi-Boasiako Publications"
                width={500}
                height={500}
                className="w-24 h-24 lg:w-36 lg:h-36 object-cover cursor-pointer"
              />
            </Link>
          </div>

          {/* Right - Search and Cart */}
          <div className="lg:hidden absolute right-8 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
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

        {/* Navigation Bar - Desktop Only */}
        <nav className="hidden lg:block border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center h-12">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/publications/all-books"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  All Books
                </Link>
                        <Link
                  href="/publications/events"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Events
                </Link>
                <Link
                  href="/publications/author"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Author
                </Link>
                <Link
                  href="/publications#gallery"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Gallery
                </Link>
                <Link
                  href="/publications#about"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/publications#contact"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link
                  href="/publications#policies"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Policies
                </Link>
                <Link
                  href="/publications#csr"
                  className="font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  CSR
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="space-y-2">
                <Link
                  href="/publications/all-books"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Books
                </Link>
         
                <Link
                  href="/publications/events"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/publications/author"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Author
                </Link>
                <Link
                  href="/publications#gallery"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/publications#about"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/publications#contact"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/publications#policies"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Policies
                </Link>
                <Link
                  href="/publications#csr"
                  className="block font-inter text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CSR
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
