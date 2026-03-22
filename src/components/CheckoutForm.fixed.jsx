"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { FaTruck, FaStore, FaTimes } from "react-icons/fa";
import ShippingPolicyModal from './ShippingPolicyModal';
import AirtelTigo from "../../public/image/payments/airteltigo_mobile_money.svg";
import Visa from "../../public/image/payments/visa.svg";
import MasterCard from "../../public/image/payments/master_card.svg";
import MTNMomo from "../../public/image/payments/mtn_mobile_money.svg";

const CheckoutForm = () => {
  // State management
  const [showShippingPolicy, setShowShippingPolicy] = useState(false);
  const router = useRouter();
  const { 
    cartItems, 
    getCartTotal, 
    clearCart, 
    userLocation, 
    isLocationLoading,
    getItemPrice,
    getPriceDisplay,
    getTotalDisplay
  } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('Ghana');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentStep, setCurrentStep] = useState('details');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paystackInstance, setPaystackInstance] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState('ship');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    landmark: '',
    pickupLocation: ''
  });

  // Rest of your component code...
  
  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="max-w-6xl mx-auto bg-stone-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Your form content here */}
          
          <ShippingPolicyModal 
            isOpen={showShippingPolicy} 
            onClose={() => setShowShippingPolicy(false)} 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutForm;
