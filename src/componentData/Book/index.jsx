"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
const Book1 = "/image/b1.png";
const Book2 = "/image/b2.png";
const BookMountFrontFrench = "/image/book_mockup_french.png"
const BookMountBackFrench = "/image/book_mount_french_back.png"
const BookMountFrontEnglish = "/image/book_mockup_english.png"
const BookMountBackEnglish = "/image/book_mount_back.png"
const BackCoverEnglish = "/image/book_mount_back.png"
import Link from "next/link";
import ProductImageSlider from "@/components/ui/product-image-slider";
import { useCart } from '@/context/CartContext';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail, MdArrowForward } from "react-icons/md";
import { FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";
import CheckOutModal from "./CheckOutModal";

const bookData = [
  {
    id: 1,
    image: BookMountFrontEnglish,
    backImage: BookMountBackEnglish,
    images: [BookMountFrontEnglish, BookMountBackEnglish],
    title: "THE 10 COMMANDMENTS FOR SUSTAINABLE NATIONAL CYBERSECURITY DEVELOPMENT",
    subTitle: "AFRICA IN CONTEXT:",
    subTitle2: "PRACTICAL LESSONS & GOOD PRACTICES",
    desc: "In this book Dr Albert Antwi-Boasiako provides perspectives and pointers into cybersecurity development at the national level, focusing on the African continent. He draws insights, invaluable lessons and good practices from more than a decade of work on the African continent and engagement in cybersecurity activities around the world.",
    internationalPrice: 55.00,
    ghanaPrice: 500.00,
    language: "English"
  },
  {
    id: 2,
    image: BookMountFrontFrench,
    backImage: BookMountBackFrench,
    images: [BookMountFrontFrench, BookMountBackFrench],
    title: "LES 10 COMMANDEMENTS POUR UN DÉVELOPPEMENT NATIONALE DURABLE DE LA CYBERSÉCURITÉ",
    subTitle: "L'AFRIQUE EN CONTEXTE:",
    subTitle2: "LEÇONS PRATIQUES ET BONNES PRATIQUES",
    desc: "Dans ce livre, Dr Albert Antwi-Boasiako fournit des perspectives et des indications sur le développement de la cybersécurité au niveau national, en se concentrant sur le contexte africain. Il tire des enseignements et des bonnes pratiques de plus d'une décennie de travail sur le continent africain et d'engagement dans des activités de cybersécurité à travers le monde.",
    internationalPrice: 55.0,
    ghanaPrice: 500.0,
    language: "French"
  },
  {
    id: 3,
    image: Book1,
    backImage: Book2,
    images: [Book1, Book2],
    title: "AI GOVERNANCE & CYBER RESILIENCE: NAVIGATING THE DIGITAL FRONTIER",
    subTitle: "THE 2025 IMPERATIVE:",
    subTitle2: "STRATEGIC FRAMEWORK FOR EMERGING THREATS",
    desc: "As artificial intelligence reshapes the global landscape, this groundbreaking work by Dr Albert Antwi-Boasiako presents a comprehensive framework for integrating AI governance with cyber resilience. Explore cutting-edge strategies for managing AI-driven security challenges, ethical considerations in autonomous systems, and building future-ready digital infrastructure for organizations and nations.",
    internationalPrice: 65.00,
    ghanaPrice: 600.00,
    language: "English"
  }
];

const BookCard = ({ item, setCheckOut }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems } = useCart();

  // Check if item is in cart and get its quantity
  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
  const isInCart = !!cartItem;

  const handleShare = (platform) => {
    const text = `Check out "${item.title}" by Dr. Albert Antwi-Boasiako`;
    const url = window.location.href;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`;
        break;
    }
    
    window.open(shareUrl, '_blank');
  };

  const productDetails = (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-white md:text-xl text-lg font-bold leading-6">
          {item.title}
        </h1>
        <p className="text-white text-sm mt-2">{item.subTitle}</p>
        <p className="text-white text-sm">{item.subTitle2}</p>
      </div>
      <p className="text-[#a3a3a3] md:text-sm  md:text-justify pt-2">
        {item.desc}
      </p>
      <div className="w-full h-full mt-7">
        <h3 className="text-sm md:text-xl font-medium text-[#fff] block">
          Africa & International | $ {item.internationalPrice}
        </h3>
        <h3 className="text-sm md:text-xl font-medium text-[#fff] md:inline block">
          Ghana | GHS {item.ghanaPrice}
        </h3>
      </div>

      {/* Quantity Counter */}
      <div className="flex items-center gap-4 mt-4">
        <span className="text-white text-sm">Quantity:</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-stone-600 text-white hover:bg-stone-700 transition-colors"
          >
            -
          </button>
          <span className="text-white w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(prev => prev + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-stone-600 text-white hover:bg-stone-700 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 mt-4">
        {/* <button
          onClick={() => {
            setCheckOut(true);
          }}
          disabled={!isInCart}
          className={`w-full h-12 rounded-lg transition-colors ${
            isInCart 
              ? 'bg-stone-600 text-white hover:bg-stone-500' 
              : 'bg-stone-700 text-stone-400 cursor-not-allowed'
          }`}
        >
          Buy Now
        </button> */}
        <button
          onClick={() => {
            addToCart({ ...item, quantity });
          }}
          className="w-full h-12 border border-stone-600 text-white rounded-lg hover:bg-stone-600 transition-colors"
        >
          {isInCart ? 'Update Cart' : 'Add to Cart'}
        </button>
      </div>

      {/* Share Buttons */}
      <div className="flex flex-col gap-2 mt-6">
        <span className="text-white text-sm">Share:</span>
        <div className="flex gap-3">
          <button
            onClick={() => handleShare('twitter')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-600 text-white hover:bg-stone-500 transition-colors"
            aria-label="Share on Twitter"
          >
            <FaTwitter className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleShare('whatsapp')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-600 text-white hover:bg-stone-500 transition-colors"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleShare('telegram')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-600 text-white hover:bg-stone-500 transition-colors"
            aria-label="Share on Telegram"
          >
            <FaTelegram className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleShare('email')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-600 text-white hover:bg-stone-500 transition-colors"
            aria-label="Share via Email"
          >
            <MdEmail className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-[100%] h-fit relative rounded-lg bg-[#1C1917] p-4">
      <ProductImageSlider images={item.images} productDetails={productDetails} />
    </div>
  );
};

const BookHolder = () => {
  const [checkOut, setCheckOut] = useState(false);

  return (
    <section className="w-full h-auto relative p-2 md:pb-16">
      <div 
        className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
        style={{ 
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="w-full container mx-auto p-3 relative z-10">
        <div className="w-full flex flex-col gap-9">
          {bookData.map((item, index) => (
            <BookCard
              key={index}
              item={item}
              setCheckOut={setCheckOut}
            />
          ))}
        </div>
      </div>
      {checkOut && (
        <CheckOutModal setCheckOut={setCheckOut} />
      )}
    </section>
  );
};

export default BookHolder;