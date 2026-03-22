"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { FaTruck, FaStore, FaTimes } from "react-icons/fa";
import ShippingPolicyModal from './ShippingPolicyModal';
import AirtelTigo from "public/image/payments/airteltigo_mobile_money.svg";
import Visa from "public/image/payments/visa.svg";
import MasterCard from "public/image/payments/master_card.svg";
import MTNMomo from "public/image/payments/mtn_mobile_money.svg";

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
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderNotes, setOrderNotes] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // Format price based on user location
  const formatPrice = (price) => {
    if (!userLocation || isLocationLoading) {
      return `$ ${price.toFixed(2)}`;
    }
    
    if (userLocation.pricing === 'ghana') {
      return `GHS ${price.toFixed(2)}`;
    }
    
    return `$ ${price.toFixed(2)}`;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setCurrentStep('summary');
      window.scrollTo(0, 0);
    } else {
      setFormErrors(errors);
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (deliveryMethod === 'ship') {
      if (!formData.address.trim()) {
        errors.address = 'Address is required';
      }
      
      if (!formData.city.trim()) {
        errors.city = 'City is required';
      }
      
      if (!formData.state.trim()) {
        errors.state = 'State/Region is required';
      }
      
      if (!formData.postalCode.trim()) {
        errors.postalCode = 'Postal code is required';
      }
    } else {
      if (!formData.pickupLocation) {
        errors.pickupLocation = 'Please select a pickup location';
      }
    }
    
    if (!phoneNumber) {
      errors.phone = 'Phone number is required';
    }
    
    return errors;
  };

  // Handle payment
  const handlePayment = () => {
    setIsProcessing(true);
    
    // Payment processing logic here
    // ...
  };

  // Effect to handle component mount
  useEffect(() => {
    setIsMounted(true);
    
    // Cleanup function
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Render the component
  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="max-w-6xl mx-auto bg-stone-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main content */}
          <div className="flex flex-col md:flex-row">
            {/* Left side - Form */}
            <div className="w-full md:w-3/5 p-4 md:p-8 border-r border-stone-700">
              {currentStep === 'details' ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <form onSubmit={handleSubmit}>
                    {/* Form fields will go here */}
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Continue to Shipping
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Order Summary</h2>
                  {/* Order summary will go here */}
                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className={`w-full py-3 px-4 rounded-md ${
                      isProcessing
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700'
                    } text-white transition-colors`}
                  >
                    {isProcessing ? 'Processing...' : 'Complete Order'}
                  </button>
                </div>
              )}
            </div>

            {/* Right side - Order Summary */}
            <div className="w-full md:w-2/5 p-4 md:p-8 bg-stone-900">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              {/* Order items will go here */}
              <div className="mt-6 pt-4 border-t border-stone-700">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                <div className="text-sm text-stone-400">
                  Shipping and taxes calculated at checkout
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Shipping Policy Modal */}
      <ShippingPolicyModal
        isOpen={showShippingPolicy}
        onClose={() => setShowShippingPolicy(false)}
      />
    </div>
  );
};

export default CheckoutForm;
