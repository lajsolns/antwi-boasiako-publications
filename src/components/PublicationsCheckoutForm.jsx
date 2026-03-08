"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { FiTruck, FiMapPin, FiInfo, FiGlobe, FiChevronLeft, FiCheckCircle, FiLock } from "react-icons/fi";
import { setManualLocation } from '@/services/locationService';

const AirtelTigo = "/image/payments/airteltigo_mobile_money.svg";
const Visa = "/image/payments/visa.svg";
const MasterCard = "/image/payments/master_card.svg";
const MTNMomo = "/image/payments/mtn_mobile_money.svg";

const storeLocations = [
    {
        id: 1,
        name: 'Antwi-Boasiako Publications',
        address: 'Anum Tessa Ave, Accra',
        phone: '+233 302 986 816'
    },
    {
        id: 2,
        name: 'Kingdom Books & Stationery',
        address: 'Okodan Rd, Ako-Adjei Junction Accra',
        phone: '+233 55 394 6541'
    }
];

const PublicationsCheckoutForm = () => {
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

    const [phoneNumber, setPhoneNumber] = useState('');
    const [currentStep, setCurrentStep] = useState('details'); // 'details' or 'summary'
    const [isProcessing, setIsProcessing] = useState(false);
    const [paystackInstance, setPaystackInstance] = useState(null);
    const [deliveryMethod, setDeliveryMethod] = useState('ship'); // 'ship' or 'pickup'
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

    useEffect(() => {
        const initializePaystack = async () => {
            try {
                if (!formData.email || !formData.email.includes('@') || currentStep !== 'summary') {
                    return;
                }

                if (window.PaystackPop) {
                    initializePaystackConfig();
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://js.paystack.co/v1/inline.js';
                script.async = true;
                document.body.appendChild(script);

                script.onload = () => {
                    initializePaystackConfig();
                };
            } catch (error) {
                console.error('Error initializing Paystack:', error);
                setIsProcessing(false);
            }
        };

        const initializePaystackConfig = () => {
            // Paystack config logic similar to original but with publications success path
            // Simplified for brevity in this step, but re-implementing core logic
            const amount = userLocation?.pricing === 'ghana' ? calculateTotal() * 100 : calculateTotal() * 12.5 * 100;

            const config = {
                key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
                email: formData.email,
                amount: Math.round(amount),
                currency: 'GHS',
                ref: `${Date.now()}`,
                callback: function (response) {
                    console.log('Payment successful');
                    clearCart();
                    router.push('/success');
                },
                onClose: () => setIsProcessing(false)
            };
            if (window.PaystackPop) {
                const paystack = window.PaystackPop.setup(config);
                setPaystackInstance(paystack);
            }
        };

        initializePaystack();
    }, [formData.email, currentStep, cartItems]);

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (getItemPrice(item) * item.quantity), 0);
    };

    const calculateTotal = () => {
        const baseTotal = calculateSubtotal();
        if (userLocation?.pricing === 'ghana' && deliveryMethod === 'ship') {
            return baseTotal + 40; // Delivery fee
        }
        return baseTotal;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName.trim()) errors.firstName = 'Required';
        if (!formData.lastName.trim()) errors.lastName = 'Required';
        if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email required';
        if (!phoneNumber) errors.phone = 'Required';
        if (deliveryMethod === 'ship' && !formData.address.trim()) errors.address = 'Required';
        if (deliveryMethod === 'pickup' && !formData.pickupLocation) errors.pickupLocation = 'Select a location';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePayment = () => {
        if (paystackInstance) {
            setIsProcessing(true);
            paystackInstance.openIframe();
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Form */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="font-playfair text-4xl text-gray-900 mb-2">Checkout</h1>
                            <p className="font-inter text-xs tracking-[0.2em] uppercase text-amber-800">
                                Archival Delivery Information
                            </p>
                        </div>

                        {currentStep === 'details' ? (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                {/* Contact Section */}
                                <section className="space-y-6">
                                    <h2 className="font-playfair text-xl text-gray-900 border-b border-gray-100 pb-4">Contact Details</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className={`w-full p-4 border ${formErrors.firstName ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light`}
                                                placeholder="Dr."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className={`w-full p-4 border ${formErrors.lastName ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light`}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full p-4 border ${formErrors.email ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light`}
                                        />
                                    </div>
                                    <div className="space-y-2 checkout-form">
                                        <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">Phone Number</label>
                                        <PhoneInput
                                            country={'gh'}
                                            value={phoneNumber}
                                            onChange={setPhoneNumber}
                                            containerClass="w-full !font-inter"
                                            inputClass="!w-full !p-4 !h-[54px] !border !border-gray-100 !bg-gray-50/50 !focus:bg-white !focus:border-amber-800 !rounded-none !font-light !text-sm"
                                            buttonClass="!border !border-gray-100 !bg-gray-50/50 !rounded-none"
                                        />
                                    </div>
                                </section>

                                {/* Delivery Method */}
                                <section className="space-y-6">
                                    <h2 className="font-playfair text-xl text-gray-900 border-b border-gray-100 pb-4">Delivery Method</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setDeliveryMethod('ship')}
                                            className={`flex items-center justify-between p-6 border transition-all ${deliveryMethod === 'ship' ? 'border-amber-800 bg-amber-50/10' : 'border-gray-100 bg-gray-50/30'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <FiTruck className={`${deliveryMethod === 'ship' ? 'text-amber-800' : 'text-gray-400'}`} />
                                                <span className="font-inter text-sm text-gray-700">Archival Shipping</span>
                                            </div>
                                            {deliveryMethod === 'ship' && <FiCheckCircle className="text-amber-800 w-4 h-4" />}
                                        </button>
                                        <button
                                            onClick={() => setDeliveryMethod('pickup')}
                                            className={`flex items-center justify-between p-6 border transition-all ${deliveryMethod === 'pickup' ? 'border-amber-800 bg-amber-50/10' : 'border-gray-100 bg-gray-50/30'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <FiMapPin className={`${deliveryMethod === 'pickup' ? 'text-amber-800' : 'text-gray-400'}`} />
                                                <span className="font-inter text-sm text-gray-700">Self Collection</span>
                                            </div>
                                            {deliveryMethod === 'pickup' && <FiCheckCircle className="text-amber-800 w-4 h-4" />}
                                        </button>
                                    </div>

                                    {deliveryMethod === 'ship' ? (
                                        <div className="space-y-4 animate-in slide-in-from-top-2 duration-500">
                                            <div className="space-y-2">
                                                <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">Delivery Address</label>
                                                <textarea
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    className={`w-full p-4 border ${formErrors.address ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light h-32`}
                                                    placeholder="House No, Street Name, etc."
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-4 animate-in slide-in-from-top-2 duration-500">
                                            <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">Select Collection Point</label>
                                            <select
                                                name="pickupLocation"
                                                value={formData.pickupLocation}
                                                onChange={handleInputChange}
                                                className="w-full p-4 border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light appearance-none"
                                            >
                                                <option value="">Choose a location...</option>
                                                {storeLocations.map(loc => (
                                                    <option key={loc.id} value={loc.id}>{loc.name} — {loc.address}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                </section>

                                <button
                                    onClick={() => validateForm() && setCurrentStep('summary')}
                                    className="w-full py-5 bg-gray-900 text-white hover:bg-amber-900 transition-all duration-500 font-inter text-xs tracking-[0.3em] uppercase shadow-lg shadow-gray-100 mt-8"
                                >
                                    Review Order Order Summary
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <button
                                    onClick={() => setCurrentStep('details')}
                                    className="flex items-center text-gray-400 hover:text-amber-800 transition-colors font-inter text-[10px] tracking-widest uppercase mb-6"
                                >
                                    <FiChevronLeft className="mr-1" /> Back to details
                                </button>

                                <div className="bg-gray-50/50 border border-gray-100 p-8 space-y-6">
                                    <h2 className="font-playfair text-xl text-gray-900 border-b border-gray-200 pb-4">Verification</h2>
                                    <div className="space-y-4 font-inter text-sm font-light text-gray-600">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400 uppercase text-[10px] tracking-[0.2em]">Recipient</span>
                                            <span>{formData.firstName} {formData.lastName}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400 uppercase text-[10px] tracking-[0.2em]">Contact</span>
                                            <span>{formData.email}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400 uppercase text-[10px] tracking-[0.2em]">Method</span>
                                            <span>{deliveryMethod === 'ship' ? 'Shipping' : 'Pickup'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h2 className="font-playfair text-xl text-gray-900 border-b border-gray-100 pb-4">Payment Methods</h2>
                                    <div className="flex gap-6 items-center flex-wrap grayscale opacity-50">
                                        <Image src={Visa} alt="Visa" width={40} height={25} />
                                        <Image src={MasterCard} alt="Mastercard" width={40} height={25} />
                                        <Image src={MTNMomo} alt="MTN Mobile Money" width={40} height={25} />
                                        <Image src={AirtelTigo} alt="AirtelTigo" width={50} height={25} />
                                    </div>

                                    <button
                                        onClick={handlePayment}
                                        disabled={isProcessing}
                                        className="w-full py-5 bg-amber-800 text-white hover:bg-amber-900 disabled:bg-gray-200 transition-all duration-500 font-inter text-xs tracking-[0.3em] uppercase shadow-xl flex items-center justify-center gap-4"
                                    >
                                        {isProcessing ? 'Processing Transaction...' : (
                                            <>
                                                <FiLock className="w-4 h-4" />
                                                Finalize Payment — {isLocationLoading ? '...' : getTotalDisplay()}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:sticky lg:top-40">
                        <div className="bg-white p-10 border border-gray-100 shadow-xl shadow-gray-100/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-[1px] bg-amber-800"></div>
                            <div className="absolute top-0 right-0 w-[1px] h-8 bg-amber-800"></div>

                            <h2 className="font-playfair text-2xl text-gray-900 mb-8 border-b border-gray-50 pb-4">Your Selection</h2>

                            <div className="space-y-8 mb-10 max-h-[400px] overflow-y-auto no-scrollbar">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-16 h-20 bg-gray-50 border border-gray-100 flex-shrink-0">
                                            {item.image && <Image src={item.image} alt={item.title} fill className="object-cover" />}
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <h4 className="font-playfair text-sm text-gray-900 leading-tight line-clamp-2">{item.title}</h4>
                                            <p className="font-inter text-[10px] text-gray-400 tracking-widest uppercase">Qty: {item.quantity}</p>
                                            <p className="font-inter text-xs text-amber-800 font-medium">
                                                {isLocationLoading ? '...' : getPriceDisplay(item)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-8 border-t border-gray-100">
                                <div className="flex justify-between items-center">
                                    <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-gray-400">Subtotal</span>
                                    <span className="font-inter text-sm text-gray-900">{isLocationLoading ? '...' : getTotalDisplay()}</span>
                                </div>
                                {deliveryMethod === 'ship' && userLocation?.pricing === 'ghana' && (
                                    <div className="flex justify-between items-center">
                                        <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-gray-400">Shipping</span>
                                        <span className="font-inter text-sm text-gray-900">GHS 40.00</span>
                                    </div>
                                )}
                                <div className="pt-6 flex justify-between items-baseline">
                                    <span className="font-inter text-xs tracking-widest uppercase text-gray-900 font-bold">Total Amount</span>
                                    <span className="font-playfair text-3xl text-amber-800">
                                        {isLocationLoading ? '...' : formatCurrency(calculateTotal())}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-3 p-4 bg-gray-50/50 border border-gray-100">
                                <FiInfo className="text-amber-800 w-4 h-4 flex-shrink-0" />
                                <p className="font-inter text-[9px] text-gray-500 leading-relaxed uppercase tracking-wider">
                                    Our intellectual property transactions are handled with the highest archival standards of security.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simplified currency formatter for checkout
const formatCurrency = (amount) => {
    return `GHS ${amount.toFixed(2)}`;
};

export default PublicationsCheckoutForm;
