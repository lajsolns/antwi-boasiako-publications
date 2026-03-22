"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';
import { FiShoppingBag } from 'react-icons/fi';

const CartButton = () => {
  const { setIsCartOpen, getCartCount } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-white hover:bg-stone-800 rounded-full transition-colors"
      aria-label="Open cart"
    >
      <FiShoppingBag className="w-6 h-6" />
      {getCartCount() > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-stone-900 text-xs font-medium rounded-full flex items-center justify-center">
          {getCartCount()}
        </span>
      )}
    </button>
  );
};

export default CartButton; 