"use client";
import Navigation from "@/componentData/NavBar";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/componentData/Footer";
import BookMountFrontFrench from "../../../../public/image/book_mockup_french.png"
import BookMountBackFrench from "../../../../public/image/book_mount_french_back.png"
import ProductImageSlider from "@/components/ui/product-image-slider";
import { useCart } from '@/context/CartContext';
import { FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const bookData = {
  id: 2,
  slug: "cybersecurity-commandments-french",
  title: "LES 10 COMMANDEMENTS POUR UN DÉVELOPPEMENT NATIONALE DURABLE DE LA CYBERSÉCURITÉ",
  subTitle: "L'AFRIQUE EN CONTEXTE:",
  subTitle2: "LEÇONS PRATIQUES ET BONNES PRATIQUES",
  desc: "Dans ce livre, Dr Albert Antwi-Boasiako fournit des perspectives et des indications sur le développement de la cybersécurité au niveau national, en se concentrant sur le contexte africain. Il tire des enseignements et des bonnes pratiques de plus d'une décennie de travail sur le continent africain et d'engagement dans des activités de cybersécurité à travers le monde.",
  internationalPrice: 55.00,
  ghanaPrice: 500.00,
  language: "French",
  images: [BookMountFrontFrench, BookMountBackFrench]
};

const BookDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems } = useCart();

  // Check if item is in cart and get its quantity
  const cartItem = cartItems.find(cartItem => cartItem.id === bookData.id);
  const isInCart = !!cartItem;

  const handleShare = (platform) => {
    const text = `Découvrez "${bookData.title}" par Dr. Albert Antwi-Boasiako`;
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
          {bookData.title}
        </h1>
        <p className="text-white text-sm mt-2">{bookData.subTitle}</p>
        <p className="text-white text-sm">{bookData.subTitle2}</p>
      </div>
      <p className="text-[#a3a3a3] md:text-sm  md:text-justify pt-2">
        {bookData.desc}
      </p>
      <div className="w-full h-full mt-7">
        <h3 className="text-sm md:text-xl font-medium text-[#fff] block">
          Africa & International | $ {bookData.internationalPrice}
        </h3>
        <h3 className="text-sm md:text-xl font-medium text-[#fff] md:inline block">
          Ghana | GHS {bookData.ghanaPrice}
        </h3>
      </div>

      {/* Quantity Counter */}
      <div className="flex items-center gap-4 mt-4">
        <span className="text-white text-sm">Quantité:</span>
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
        <button
          onClick={() => {
            addToCart({ ...bookData, image: bookData.images[0], quantity });
          }}
          className="w-full h-12 border border-stone-600 text-white rounded-lg hover:bg-stone-600 transition-colors"
        >
          {isInCart ? 'Mettre à jour le panier' : 'Ajouter au panier'}
        </button>
      </div>

      {/* Share Buttons */}
      <div className="flex flex-col gap-2 mt-6">
        <span className="text-white text-sm">Partager:</span>
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
    <div className="w-svw min-h-screen font-[family-name:var(--font-geist-sans)] bg-stone-950">
      <main className="w-full h-full">
        <nav className="w-full sticky top-0 left-0 z-50">
          <Navigation />
        </nav>

        {/* Book Details */}
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
              {/* Single Book Card */}
              <div className="w-[100%] h-fit relative rounded-lg bg-[#1C1917] p-4">
                <ProductImageSlider 
                  images={bookData.images} 
                  productDetails={productDetails}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetailPage;
