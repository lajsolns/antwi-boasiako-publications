"use client";
import Navigation from "@/componentData/NavBar";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/componentData/Footer";
import { Card, CardContent } from "@/components/ui/card";
const BookMountFrontFrench = "/image/book_mockup_french.png"
const BookMountBackFrench = "/image/book_mount_french_back.png"
const BookMountFrontEnglish = "/image/book_mockup_english.png"
const BookMountBackEnglish = "/image/book_mount_back.png"
const Book1 = "/image/b1.png";
const Book2 = "/image/b2.png";
const BookMountRepublic = "/image/books/the_republic.png";

const booksData = [
    {
    id: 3,
    slug: "the-republic",
    title: "THE REPUBLIC",
    subTitle: "A Professional Journey, Ghana's Cybersecurity & the Making of a Role Model Country",
    subTitle2: "",
    image: BookMountRepublic,
    language: "English",
    year: "2025",
    price1: "Africa & International | $ 35",
    price2: "Ghana | GHS 350",
    description: "Comprehensive framework for integrating AI governance with cyber resilience in the digital age."
  },
  {
    id: 1,
    slug: "cybersecurity-commandments",
    title: "THE 10 COMMANDMENTS FOR SUSTAINABLE NATIONAL CYBERSECURITY DEVELOPMENT",
    subTitle: "AFRICA IN CONTEXT:",
    subTitle2: "PRACTICAL LESSONS & GOOD PRACTICES",
    image: BookMountFrontEnglish,
    language: "English",
    year: "2024",
    price1: "Africa & International | $ 55",
    price2: "Ghana | GHS 500",
    description: "Perspectives and pointers into cybersecurity development at the national level, focusing on the African continent."
  },
  {
    id: 2,
    slug: "cybersecurity-commandments-french",
    title: "LES 10 COMMANDEMENTS POUR UN DÉVELOPPEMENT NATIONALE DURABLE DE LA CYBERSÉCURITÉ",
    subTitle: "L'AFRIQUE EN CONTEXTE:",
    subTitle2: "LEÇONS PRATIQUES ET BONNES PRATIQUES",
    image: BookMountFrontFrench,
    language: "French",
    year: "2024",
    price1: "Africa & International | $ 55",
    price2: "Ghana | GHS 500",
    description: "Perspectives et indications sur le développement de la cybersécurité au niveau national, en se concentrant sur le contexte africain."
  },

];

const BookTile = ({ book, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/books/${book.slug}`}>
        <Card className="group overflow-hidden border border-stone-800 bg-stone-900/50 hover:bg-stone-800/50 transition-all duration-300">
          <div className="relative h-80 w-full overflow-hidden bg-white">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-6">
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-medium text-stone-200 group-hover:text-white transition-colors duration-300 ">
                {book.title}
              </h3>
              <p className="text-sm text-stone-400 mt-2 line-clamp-2">
                {book.subTitle}
              </p>
              <p className="text-sm text-stone-400 mt-2 line-clamp-2">
                {book.subTitle2}
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-4 text-sm text-stone-400">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 8 15.75a4.5 4.5 0 11.692-6.419 4.5 4.5 0 018.464 0c-.07.14-.783 4.98-1.751 10.669z" />
                    </svg>
                    <span>{book.language}</span>
                  </div>
                  <div className="flex flex-col  gap-1">
                    {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg> */}
                    <p>{book.price1}</p>
                    <p>{book.price2}</p>

                    
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-800">
                <div className="text-sm text-stone-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const BooksGalleryPage = () => {
  return (
    <div className="w-svw min-h-screen font-[family-name:var(--font-geist-sans)] bg-stone-950">
      <main className="w-full h-full">
        <nav className="w-full sticky top-0 left-0 z-50">
          <Navigation />
        </nav>

        {/* Header. */}
        <div className="w-full h-auto items-start justify-center bg-stone-950 p-6">
          <div className="w-full h-full flex flex-col items-center container mx-auto text-center">
            <h1 className="text-stone-200 text-center md:text-4xl text-2xl font-bold serif_font mb-4">
              Published Books
            </h1>
            <p className="text-stone-400 text-center max-w-2xl">
              Explore Dr. Albert Antwi-Boasiako's collection of cybersecurity and AI governance publications. 
              Click on any book to view detailed information and purchase options.
            </p>
          </div>
        </div>

        {/* Books Grid */}
        <section className="w-full h-auto relative p-6 md:pb-16">
          <div 
            className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
            style={{ 
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="w-full container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {booksData.map((book, index) => (
                <BookTile key={book.id} book={book} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BooksGalleryPage;
