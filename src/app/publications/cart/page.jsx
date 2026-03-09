"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

const PublicationsCartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, getTotalDisplay, getPriceDisplay, getItemPrice, userLocation, isLocationLoading } = useCart();
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.pageYOffset > 56);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rotatingQuotes = [
        { text: '"Transforming cybersecurity education across Africa through innovative research"', link: '#' },
        { text: '"Building the next generation of cybersecurity professionals"', link: '#' }
    ];

    const handleCheckout = () => router.push('/publications/checkout');

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

            <main className="flex-grow w-full pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-[url('/image/abstract_bg_classic.jpg')] bg-cover bg-center bg-no-repeat bg-fixed relative">
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-0"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="mb-12">
                        <Link
                            href="/publications/all-books"
                            className="inline-flex items-center text-gray-500 hover:text-amber-800 transition-colors font-inter text-xs tracking-widest uppercase"
                        >
                            <FiArrowLeft className="mr-2" />
                            {t('cart.continueShopping')}
                        </Link>
                    </div>

                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block font-inter text-xs tracking-[0.2em] text-amber-800 uppercase">
                            {t('cart.shoppingBag')}
                        </span>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 tracking-tight">
                            {t('cart.selectedWorks')}
                        </h1>
                        <div className="w-16 h-[1px] bg-amber-800 mx-auto mt-6 mb-8"></div>
                    </div>

                    {!cartItems || cartItems.length === 0 ? (
                        <div className="bg-white p-12 border border-gray-100 shadow-xl shadow-gray-100/50 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-8 h-[1px] bg-amber-800"></div>
                            <div className="absolute top-0 left-0 w-[1px] h-8 bg-amber-800"></div>
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
                                <FiShoppingBag className="w-8 h-8 text-gray-200" />
                            </div>
                            <h2 className="font-playfair text-2xl text-gray-900 mb-4">{t('cart.emptyBag')}</h2>
                            <p className="font-inter text-gray-500 mb-10 max-w-md mx-auto font-light leading-relaxed">
                                {t('cart.emptyBagMessage')}
                            </p>
                            <Link
                                href="/publications/all-books"
                                className="inline-flex items-center px-10 py-4 bg-gray-900 text-white hover:bg-amber-900 transition-all duration-300 font-inter text-xs tracking-[0.2em] uppercase"
                            >
                                {t('cart.discoverBooks')}
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-white p-8 sm:p-10 border border-gray-100 shadow-xl shadow-gray-100/50 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-8 h-[1px] bg-amber-800"></div>
                                    <div className="absolute top-0 left-0 w-[1px] h-8 bg-amber-800"></div>
                                    <div className="space-y-10">
                                        {cartItems.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="flex flex-col sm:flex-row gap-8 pb-10 border-b border-gray-50 last:border-0 last:pb-0"
                                            >
                                                <div className="relative w-full sm:w-32 h-44 bg-gray-50 border border-gray-100 flex-shrink-0 group overflow-hidden">
                                                    {item.image ? (
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <span className="text-gray-300 text-[10px] uppercase tracking-widest">{t('common.noImage')}</span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div className="space-y-2">
                                                        <h3 className="font-playfair text-2xl text-gray-900 leading-snug">{item.title}</h3>
                                                        <p className="font-inter text-sm text-gray-400 font-light flex items-center uppercase tracking-widest">
                                                            {t('common.price')}: <span className="ml-2 text-amber-800 font-medium">{isLocationLoading ? '...' : getPriceDisplay(item)}</span>
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-8">
                                                        <div className="flex items-center border border-gray-100 bg-white">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-amber-800 transition-colors"
                                                            >
                                                                <FiMinus className="w-3 h-3" />
                                                            </button>
                                                            <span className="font-inter text-sm text-gray-600 w-12 text-center border-x border-gray-50">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-amber-800 transition-colors"
                                                            >
                                                                <FiPlus className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="flex items-center text-gray-300 hover:text-red-500 transition-colors font-inter text-[10px] tracking-widest uppercase"
                                                        >
                                                            <FiTrash2 className="mr-2" />
                                                            {t('cart.remove')}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="hidden sm:block text-right min-w-[120px]">
                                                    <p className="font-playfair text-xl text-gray-900">
                                                        {isLocationLoading ? '...' : (() => {
                                                            const total = getItemPrice(item) * item.quantity;
                                                            if (userLocation?.pricing === 'ghana') return `GHS ${total.toFixed(2)}`;
                                                            return `$${total.toFixed(2)}`;
                                                        })()}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white p-10 border border-gray-100 shadow-xl shadow-gray-100/50 sticky top-40 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-8 h-[1px] bg-amber-800"></div>
                                    <div className="absolute top-0 right-0 w-[1px] h-8 bg-amber-800"></div>

                                    <h2 className="font-playfair text-2xl text-gray-900 mb-8 pb-4 border-b border-gray-50">{t('cart.orderSummary')}</h2>

                                    <div className="space-y-6 mb-10">
                                        <div className="flex justify-between items-center text-sm font-inter tracking-wide">
                                            <span className="text-gray-400 uppercase text-[10px] tracking-[0.2em]">{t('cart.subtotal')}</span>
                                            <span className="text-gray-900 font-medium">{isLocationLoading ? '...' : getTotalDisplay()}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm font-inter tracking-wide font-light">
                                            <span className="text-gray-400 uppercase text-[10px] tracking-[0.2em]">{t('cart.shipping')}</span>
                                            <span className="text-gray-400 italic">{t('cart.shippingCalc')}</span>
                                        </div>
                                        <div className="pt-6 border-t border-gray-100 flex justify-between items-baseline">
                                            <span className="font-inter text-xs tracking-widest uppercase text-gray-900 font-bold">{t('cart.estimatedTotal')}</span>
                                            <span className="font-playfair text-3xl text-amber-800">{isLocationLoading ? '...' : getTotalDisplay()}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleCheckout}
                                        className="w-full py-5 bg-gray-900 text-white hover:bg-amber-900 transition-all duration-500 font-inter text-xs tracking-[0.3em] uppercase shadow-lg shadow-gray-100"
                                    >
                                        {t('cart.checkout')}
                                    </button>

                                    <div className="mt-8 pt-8 border-t border-gray-50 space-y-4">
                                        <div className="flex items-center text-[9px] text-gray-400 uppercase tracking-widest">
                                            <span className="w-1.5 h-1.5 bg-amber-800 rounded-full mr-3"></span>
                                            {t('cart.secureTransactions')}
                                        </div>
                                        <div className="flex items-center text-[9px] text-gray-400 uppercase tracking-widest">
                                            <span className="w-1.5 h-1.5 bg-amber-800 rounded-full mr-3"></span>
                                            {t('cart.globalDelivery')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <PublicationsFooter />
        </div>
    );
};

export default PublicationsCartPage;
