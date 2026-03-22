"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
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

    const { t } = useLanguage();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [currentStep, setCurrentStep] = useState('details'); // 'details' or 'summary'
    const [isProcessing, setIsProcessing] = useState(false);
    const [paystackInstance, setPaystackInstance] = useState(null);
    const [deliveryMethod, setDeliveryMethod] = useState('ship'); // 'ship' or 'pickup'
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
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

    const getLocationDisplay = () => {
        if (!userLocation) return 'International ($)';
        const symbols = { ghana: 'GHS', international: '$', africa: '$' };
        return `${userLocation.country} (${symbols[userLocation.pricing] || '$'})`;
    };

    const handleLocationChange = (location) => {
        setManualLocation(location);
        setShowLocationDropdown(false);
        window.location.reload();
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showLocationDropdown && !event.target.closest('.location-dropdown-pub')) {
                setShowLocationDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showLocationDropdown]);

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
                            <h1 className="font-playfair text-4xl text-gray-900 mb-2">{t('checkout.title')}</h1>
                            <p className="font-inter text-xs tracking-[0.2em] uppercase text-amber-800">
                                {t('checkout.subtitle')}
                            </p>
                        </div>

                        {currentStep === 'details' ? (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">

                                {/* Pricing Region Selector */}
                                <section className="space-y-2">
                                    <h2 className="font-playfair text-xl text-gray-900 border-b border-gray-100 pb-4">{t('checkout.pricingRegion')}</h2>
                                    <div className="location-dropdown-pub relative flex items-center justify-between p-5 border border-gray-100 bg-gray-50/40">
                                        <div className="flex items-center gap-3">
                                            <FiGlobe className="text-amber-800 w-4 h-4 flex-shrink-0" />
                                            <div>
                                                <p className="font-inter text-xs text-gray-900 font-medium">
                                                    {isLocationLoading ? t('checkout.detectingLocation') : getLocationDisplay()}
                                                </p>
                                                <p className="font-inter text-[10px] text-gray-400 mt-0.5 tracking-wider">
                                                    {t('checkout.pricingHelper')}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                                            className="font-inter text-[10px] tracking-widest uppercase text-amber-800 border border-amber-800/30 px-4 py-2 hover:bg-amber-50 transition-colors duration-200 flex-shrink-0"
                                        >
                                            {t('checkout.changeRegion')}
                                        </button>

                                        {showLocationDropdown && (
                                            <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-100 shadow-xl z-50">
                                                <div className="p-2 space-y-1">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleLocationChange({ country: 'Ghana', countryCode: 'GH', region: 'ghana', pricing: 'ghana' })}
                                                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left group"
                                                    >
                                                        <span className="font-inter text-sm text-gray-700 group-hover:text-amber-800">{t('checkout.ghana')}</span>
                                                        <span className="font-inter text-xs text-gray-400">GHS</span>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleLocationChange({ country: 'International', countryCode: null, region: 'international', pricing: 'international' })}
                                                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left group"
                                                    >
                                                        <span className="font-inter text-sm text-gray-700 group-hover:text-amber-800">{t('checkout.international')}</span>
                                                        <span className="font-inter text-xs text-gray-400">$</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </section>

                                {/* Contact Section */}
                                <section className="space-y-6">
                                    <h2 className="font-playfair text-xl text-gray-900 border-b border-gray-100 pb-4">{t('checkout.contactDetails')}</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.firstName')}</label>
                                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}
                                                className={`w-full p-4 border ${formErrors.firstName ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light`}
                                                placeholder="Dr."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.lastName')}</label>
                                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}
                                                className={`w-full p-4 border ${formErrors.lastName ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light`}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.email')}</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                                            className={`w-full p-4 border ${formErrors.email ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light`}
                                        />
                                    </div>
                                    <div className="space-y-2 checkout-form">
                                        <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.phone')}</label>
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
                                    <h2 className="font-playfair text-xl text-gray-900 border-b border-gray-100 pb-4">{t('checkout.deliveryMethod')}</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <button onClick={() => setDeliveryMethod('ship')}
                                            className={`flex items-center justify-between p-6 border transition-all ${deliveryMethod === 'ship' ? 'border-amber-800 bg-amber-50/10' : 'border-gray-100 bg-gray-50/30'}`}>
                                            <div className="flex items-center gap-4">
                                                <FiTruck className={`${deliveryMethod === 'ship' ? 'text-amber-800' : 'text-gray-400'}`} />
                                                <span className="font-inter text-sm text-gray-700">{t('checkout.shipping')}</span>
                                            </div>
                                            {deliveryMethod === 'ship' && <FiCheckCircle className="text-amber-800 w-4 h-4" />}
                                        </button>
                                        <button onClick={() => setDeliveryMethod('pickup')}
                                            className={`flex items-center justify-between p-6 border transition-all ${deliveryMethod === 'pickup' ? 'border-amber-800 bg-amber-50/10' : 'border-gray-100 bg-gray-50/30'}`}>
                                            <div className="flex items-center gap-4">
                                                <FiMapPin className={`${deliveryMethod === 'pickup' ? 'text-amber-800' : 'text-gray-400'}`} />
                                                <span className="font-inter text-sm text-gray-700">{t('checkout.selfCollection')}</span>
                                            </div>
                                            {deliveryMethod === 'pickup' && <FiCheckCircle className="text-amber-800 w-4 h-4" />}
                                        </button>
                                    </div>

                                    {deliveryMethod === 'ship' ? (
                                        <div className="space-y-4 animate-in slide-in-from-top-2 duration-500">
                                            <div className="space-y-2">
                                                <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.deliveryAddress')}</label>
                                                <textarea name="address" value={formData.address} onChange={handleInputChange}
                                                    className={`w-full p-4 border ${formErrors.address ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light h-24`}
                                                    placeholder={t('checkout.deliveryAddressPlaceholder')}
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.city')}</label>
                                                    <input type="text" name="city" value={formData.city} onChange={handleInputChange}
                                                        className={`w-full p-4 border ${formErrors.city ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light`}
                                                        placeholder="Accra" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.state')}</label>
                                                    <input type="text" name="state" value={formData.state} onChange={handleInputChange}
                                                        className={`w-full p-4 border ${formErrors.state ? 'border-red-300' : 'border-gray-100'} bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light`}
                                                        placeholder="Greater Accra" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.postalCode')}</label>
                                                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange}
                                                        className="w-full p-4 border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light"
                                                        placeholder="GA-000-0000" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.landmark')} <span className="normal-case text-gray-300">{t('checkout.landmarkOptional')}</span></label>
                                                    <input type="text" name="landmark" value={formData.landmark} onChange={handleInputChange}
                                                        className="w-full p-4 border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light"
                                                        placeholder="Near Accra Mall" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-4 animate-in slide-in-from-top-2 duration-500">
                                            <label className="font-inter text-[10px] tracking-widest uppercase text-gray-400">{t('checkout.selectCollection')}</label>
                                            <select name="pickupLocation" value={formData.pickupLocation} onChange={handleInputChange}
                                                className="w-full p-4 border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-amber-800 transition-all outline-none font-inter text-sm font-light appearance-none">
                                                <option value="">{t('checkout.chooseLocation')}</option>
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
                                    {t('checkout.reviewOrder')}
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <button onClick={() => setCurrentStep('details')}
                                    className="flex items-center text-gray-400 hover:text-amber-800 transition-colors font-inter text-[10px] tracking-widest uppercase mb-6">
                                    <FiChevronLeft className="mr-1" /> {t('checkout.backToDetails')}
                                </button>

                                <div className="bg-gray-50/50 border border-gray-100 p-8 space-y-6">
                                    <h2 className="font-playfair text-xl text-gray-900 border-b border-gray-200 pb-4">{t('checkout.verification')}</h2>
                                    <div className="space-y-4 font-inter text-sm font-light text-gray-600">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400 uppercase text-[10px] tracking-[0.2em]">{t('checkout.recipient')}</span>
                                            <span>{formData.firstName} {formData.lastName}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400 uppercase text-[10px] tracking-[0.2em]">{t('checkout.contact')}</span>
                                            <span>{formData.email}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400 uppercase text-[10px] tracking-[0.2em]">{t('checkout.method')}</span>
                                            <span>{deliveryMethod === 'ship' ? t('checkout.shippingMethod') : t('checkout.pickupMethod')}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h2 className="font-playfair text-xl text-gray-900 border-b border-gray-100 pb-4">{t('checkout.paymentMethods')}</h2>
                                    <div className="flex gap-6 items-center flex-wrap grayscale opacity-50">
                                        <Image src={Visa} alt="Visa" width={40} height={25} />
                                        <Image src={MasterCard} alt="Mastercard" width={40} height={25} />
                                        <Image src={MTNMomo} alt="MTN Mobile Money" width={40} height={25} />
                                        <Image src={AirtelTigo} alt="AirtelTigo" width={50} height={25} />
                                    </div>

                                    <button onClick={handlePayment} disabled={isProcessing}
                                        className="w-full py-5 bg-amber-800 text-white hover:bg-amber-900 disabled:bg-gray-200 transition-all duration-500 font-inter text-xs tracking-[0.3em] uppercase shadow-xl flex items-center justify-center gap-4">
                                        {isProcessing ? t('checkout.processing') : (
                                            <><FiLock className="w-4 h-4" />
                                                {t('checkout.finalizePayment')} — {isLocationLoading ? '...' : getTotalDisplay()}</>
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

                            <h2 className="font-playfair text-2xl text-gray-900 mb-8 border-b border-gray-50 pb-4">{t('checkout.yourSelection')}</h2>

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
                                    <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-gray-400">{t('cart.subtotal')}</span>
                                    <span className="font-inter text-sm text-gray-900">{isLocationLoading ? '...' : getTotalDisplay()}</span>
                                </div>
                                {deliveryMethod === 'ship' && userLocation?.pricing === 'ghana' && (
                                    <div className="flex justify-between items-center">
                                        <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-gray-400">Shipping</span>
                                        <span className="font-inter text-sm text-gray-900">GHS 40.00</span>
                                    </div>
                                )}
                                <div className="pt-6 flex justify-between items-baseline">
                                    <span className="font-inter text-xs tracking-widest uppercase text-gray-900 font-bold">{t('checkout.totalAmount')}</span>
                                    <span className="font-playfair text-3xl text-amber-800">
                                        {isLocationLoading ? '...' : formatCurrency(calculateTotal())}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-3 p-4 bg-gray-50/50 border border-gray-100">
                                <FiInfo className="text-amber-800 w-4 h-4 flex-shrink-0" />
                                <p className="font-inter text-[9px] text-gray-500 leading-relaxed uppercase tracking-wider">
                                    {t('checkout.securityNote')}
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
