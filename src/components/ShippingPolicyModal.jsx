"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShippingPolicyContent from './ShippingPolicyContent';

const ShippingPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#1c1917] rounded-lg shadow-xl overflow-hidden mt-16 md:mt-20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 md:p-12 h-[80vh] overflow-y-auto">
            <div className="text-center mb-8">
              <h1 className="serif_font text-3xl font-bold text-stone-100 mb-2">Shipping Policy</h1>
              <p className="text-md text-stone-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <ShippingPolicyContent />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ShippingPolicyModal;
