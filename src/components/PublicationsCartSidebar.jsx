"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PublicationsCartSidebar = () => {
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        removeFromCart,
        updateQuantity,
        getTotalDisplay,
        getPriceDisplay,
        isLocationLoading,
        clearCart
    } = useCart();
    const router = useRouter();
    const { t } = useLanguage();

    const handleCheckout = () => {
        setIsCartOpen(false);
        router.push('/publications/checkout');
    };

    const handleGoToCart = () => {
        setIsCartOpen(false);
        router.push('/publications/cart');
    };

    return (
        <>
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[100]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col border-l border-gray-100"
                        >
                            {/* Classic Background Image & Overlay */}
                            <div className="absolute inset-0 bg-[url('/image/abstract_bg_classic.jpg')] bg-cover bg-center opacity-[0.03] pointer-events-none"></div>

                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100 relative z-10">
                                <div>
                                    <h2 className="font-playfair text-2xl text-gray-900">{t('cart.title')}</h2>
                                    <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-amber-800 mt-1">
                                        {cartItems.length} {cartItems.length === 1 ? t('cart.itemCount_one', { count: cartItems.length }) : t('cart.itemCount_other', { count: cartItems.length })}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="p-2 hover:bg-gray-50 rounded-full transition-colors group"
                                >
                                    <FiX className="w-5 h-5 text-gray-400 group-hover:text-amber-800 transition-colors" />
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-8 relative z-10 no-scrollbar">
                                {cartItems.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center">
                                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                            <FiShoppingBag className="w-6 h-6 text-gray-300" />
                                        </div>
                                        <h3 className="font-playfair text-xl text-gray-900 mb-2">{t('cart.empty')}</h3>
                                        <p className="font-inter text-sm text-gray-500 font-light mb-8 max-w-[240px]">
                                            {t('cart.emptyMessage')}
                                        </p>
                                        <button
                                            onClick={() => { setIsCartOpen(false); router.push('/publications/all-books'); }}
                                            className="px-8 py-3 bg-gray-900 text-white hover:bg-amber-900 transition-all duration-300 font-inter text-xs tracking-[0.2em] uppercase"
                                        >
                                            {t('cart.continueExploring')}
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {cartItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex gap-4 group"
                                            >
                                                <div className="relative w-20 h-28 flex-shrink-0 bg-gray-50 border border-gray-100 overflow-hidden shadow-sm">
                                                    {item.image ? (
                                                        <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <span className="text-gray-300 font-inter text-[10px] uppercase">No Image</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-1 flex flex-col justify-between py-1">
                                                    <div>
                                                        <h3 className="font-playfair text-base text-gray-900 line-clamp-2 leading-tight group-hover:text-amber-800 transition-colors">
                                                            {item.title}
                                                        </h3>
                                                        <p className="font-inter text-xs text-amber-800 font-medium mt-1">
                                                            {isLocationLoading ? '...' : getPriceDisplay(item)}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-4">
                                                        <div className="flex items-center border border-gray-100 rounded-sm">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-amber-800 hover:bg-gray-50 transition-colors"
                                                            >
                                                                <FiMinus className="w-3 h-3" />
                                                            </button>
                                                            <span className="font-inter text-xs text-gray-600 w-8 text-center border-x border-gray-50">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-amber-800 hover:bg-gray-50 transition-colors"
                                                            >
                                                                <FiPlus className="w-3 h-3" />
                                                            </button>
                                                        </div>

                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-gray-300 hover:text-red-500 transition-colors p-1"
                                                            title="Remove item"
                                                        >
                                                            <FiTrash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {cartItems.length > 0 && (
                                <div className="border-t border-gray-100 p-8 space-y-6 bg-gray-50/50 relative z-10">
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-gray-400">{t('cart.subtotal')}</span>
                                        <span className="font-playfair text-2xl text-gray-900">
                                            {isLocationLoading ? '...' : getTotalDisplay()}
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        <button
                                            className="w-full py-4 bg-gray-900 text-white hover:bg-amber-900 transition-all duration-300 font-inter text-xs tracking-[0.2em] uppercase shadow-lg shadow-gray-200"
                                            onClick={handleCheckout}
                                        >
                                            {t('cart.checkout')}
                                        </button>
                                        <button
                                            className="w-full py-4 border border-gray-200 text-gray-600 hover:border-amber-800 hover:text-amber-800 transition-all duration-300 font-inter text-xs tracking-[0.2em] uppercase bg-white"
                                            onClick={handleGoToCart}
                                        >
                                            {t('cart.viewFullCart')}
                                        </button>
                                        <button
                                            className="w-full py-2 text-gray-400 hover:text-gray-600 transition-colors font-inter text-[10px] tracking-widest uppercase"
                                            onClick={clearCart}
                                        >
                                            {t('cart.clearSelection')}
                                        </button>
                                    </div>

                                    <p className="text-[9px] text-gray-400 text-center font-inter tracking-wider leading-relaxed">
                                        {t('cart.shippingNote')}<br />
                                        {t('cart.archivalNote')}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default PublicationsCartSidebar;
