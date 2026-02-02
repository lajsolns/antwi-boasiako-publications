"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { RiCloseLine } from 'react-icons/ri';
import { Button } from './button';
import Link from 'next/link';
import CheckOutModal from '@/componentData/Book/CheckOutModal';
import { useRouter } from 'next/navigation';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getTotalDisplay,
    getPriceDisplay,
    userLocation,
    isLocationLoading,
    clearCart
  } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const router = useRouter();

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push('/checkout');
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
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-[#1C1917] shadow-xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-stone-700">
                <h2 className="text-xl font-semibold text-white">Shopping Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-stone-800 rounded-full transition-colors"
                >
                  <RiCloseLine className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Location Indicator */}
              {/* {!isLocationLoading && userLocation && (
                <div className="px-4 py-2 bg-stone-800/50 border-b border-stone-700">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400 text-sm">Pricing for:</span>
                    <span className="text-white text-sm font-medium">
                      {userLocation.country}
                    </span>
                  </div>
                </div>
              )} */}

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-stone-400">
                    <p className="text-lg mb-4">Your cart is empty</p>
                    <Link href="/books/gallery" onClick={() => setIsCartOpen(false)}>
                      <Button
                        variant="outline"
                        className="text-white border-stone-600 bg-stone-80"
                      >
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-stone-800/50 rounded-lg"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          ) : (
                            <div className="w-full h-full bg-stone-700 rounded-md flex items-center justify-center">
                              <span className="text-stone-400 text-xs">No Image</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-stone-400 text-sm mt-1">
                            {isLocationLoading ? 'Loading...' : getPriceDisplay(item)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center rounded-full border border-stone-600 text-white hover:bg-stone-700"
                            >
                              -
                            </button>
                            <span className="text-white w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center rounded-full border border-stone-600 text-white hover:bg-stone-700"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-400 hover:text-white transition-colors"
                        >
                          <RiCloseLine className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-stone-700 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-white font-medium">
                      {isLocationLoading ? 'Loading...' : getTotalDisplay()}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-white text-stone-900 hover:bg-stone-100"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-stone-800 text-white border-stone-60"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckOutModal setCheckOut={setShowCheckout} />
      )}
    </>
  );
};

export default CartDrawer; 