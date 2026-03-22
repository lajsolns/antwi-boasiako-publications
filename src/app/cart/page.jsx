"use client";
import React from 'react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const total = cartItems?.reduce((sum, item) => sum + (item.price * item.quantity), 0) || 0;

  return (
    <div className="min-h-screen bg-[#1C1917] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

        {!cartItems || cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-stone-400 mb-4">Your cart is empty</p>
            <Link
              href="/books/gallery"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#67CB93] text-[#1C1917] rounded-lg font-medium hover:bg-[#67CB93]/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#2A2522] rounded-lg p-4 flex gap-4"
                >
                  <div className="w-24 h-24 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-stone-400 text-sm mb-2">GH₵{item.price}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center border border-stone-600 rounded-lg text-white hover:bg-stone-800"
                        >
                          -
                        </button>
                        <span className="text-white w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-stone-600 rounded-lg text-white hover:bg-stone-800"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">GH₵{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#2A2522] rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-stone-400">
                    <span>Subtotal</span>
                    <span>GH₵{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-stone-600 my-4"></div>
                  <div className="flex justify-between text-white font-medium">
                    <span>Total</span>
                    <span>GH₵{total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full px-6 py-3 bg-[#67CB93] text-[#1C1917] rounded-lg font-medium hover:bg-[#67CB93]/90 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage; 