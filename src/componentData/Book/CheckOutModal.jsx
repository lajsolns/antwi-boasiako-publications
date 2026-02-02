"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import { Input } from "@/components/ui/input";
import { RiCloseLine } from "react-icons/ri";
import { FaTruck, FaStore } from "react-icons/fa";
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
const AirtelTigo = "/image/payments/airteltigo_mobile_money.svg"
const Visa = "/image/payments/visa.svg"
const MasterCard = "/image/payments/master_card.svg"
const MTNMomo = "/image/payments/mtn_mobile_money.svg"

const CheckOutModal = ({ setCheckOut }) => {
  const router = useRouter();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('Ghana');
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

  // Form validation state
  const [formErrors, setFormErrors] = useState({});

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt',
    'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
    'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
    'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo',
    'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
    'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
    'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman',
    'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
    'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
    'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
    'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
    'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  // Map of countries to their country codes
  const countryCodes = {
    'Afghanistan': 'af',
    'Albania': 'al',
    'Algeria': 'dz',
    'Andorra': 'ad',
    'Angola': 'ao',
    'Antigua and Barbuda': 'ag',
    'Argentina': 'ar',
    'Armenia': 'am',
    'Australia': 'au',
    'Austria': 'at',
    'Azerbaijan': 'az',
    'Bahamas': 'bs',
    'Bahrain': 'bh',
    'Bangladesh': 'bd',
    'Barbados': 'bb',
    'Belarus': 'by',
    'Belgium': 'be',
    'Belize': 'bz',
    'Benin': 'bj',
    'Bhutan': 'bt',
    'Bolivia': 'bo',
    'Bosnia and Herzegovina': 'ba',
    'Botswana': 'bw',
    'Brazil': 'br',
    'Brunei': 'bn',
    'Bulgaria': 'bg',
    'Burkina Faso': 'bf',
    'Burundi': 'bi',
    'Cabo Verde': 'cv',
    'Cambodia': 'kh',
    'Cameroon': 'cm',
    'Canada': 'ca',
    'Central African Republic': 'cf',
    'Chad': 'td',
    'Chile': 'cl',
    'China': 'cn',
    'Colombia': 'co',
    'Comoros': 'km',
    'Congo': 'cg',
    'Costa Rica': 'cr',
    'Croatia': 'hr',
    'Cuba': 'cu',
    'Cyprus': 'cy',
    'Czech Republic': 'cz',
    'Denmark': 'dk',
    'Djibouti': 'dj',
    'Dominica': 'dm',
    'Dominican Republic': 'do',
    'Ecuador': 'ec',
    'Egypt': 'eg',
    'El Salvador': 'sv',
    'Equatorial Guinea': 'gq',
    'Eritrea': 'er',
    'Estonia': 'ee',
    'Eswatini': 'sz',
    'Ethiopia': 'et',
    'Fiji': 'fj',
    'Finland': 'fi',
    'France': 'fr',
    'Gabon': 'ga',
    'Gambia': 'gm',
    'Georgia': 'ge',
    'Germany': 'de',
    'Ghana': 'gh',
    'Greece': 'gr',
    'Grenada': 'gd',
    'Guatemala': 'gt',
    'Guinea': 'gn',
    'Guinea-Bissau': 'gw',
    'Guyana': 'gy',
    'Haiti': 'ht',
    'Honduras': 'hn',
    'Hungary': 'hu',
    'Iceland': 'is',
    'India': 'in',
    'Indonesia': 'id',
    'Iran': 'ir',
    'Iraq': 'iq',
    'Ireland': 'ie',
    'Israel': 'il',
    'Italy': 'it',
    'Jamaica': 'jm',
    'Japan': 'jp',
    'Jordan': 'jo',
    'Kazakhstan': 'kz',
    'Kenya': 'ke',
    'Kiribati': 'ki',
    'Korea, North': 'kp',
    'Korea, South': 'kr',
    'Kosovo': 'xk',
    'Kuwait': 'kw',
    'Kyrgyzstan': 'kg',
    'Laos': 'la',
    'Latvia': 'lv',
    'Lebanon': 'lb',
    'Lesotho': 'ls',
    'Liberia': 'lr',
    'Libya': 'ly',
    'Liechtenstein': 'li',
    'Lithuania': 'lt',
    'Luxembourg': 'lu',
    'Madagascar': 'mg',
    'Malawi': 'mw',
    'Malaysia': 'my',
    'Maldives': 'mv',
    'Mali': 'ml',
    'Malta': 'mt',
    'Marshall Islands': 'mh',
    'Mauritania': 'mr',
    'Mauritius': 'mu',
    'Mexico': 'mx',
    'Micronesia': 'fm',
    'Moldova': 'md',
    'Monaco': 'mc',
    'Mongolia': 'mn',
    'Montenegro': 'me',
    'Morocco': 'ma',
    'Mozambique': 'mz',
    'Myanmar': 'mm',
    'Namibia': 'na',
    'Nauru': 'nr',
    'Nepal': 'np',
    'Netherlands': 'nl',
    'New Zealand': 'nz',
    'Nicaragua': 'ni',
    'Niger': 'ne',
    'Nigeria': 'ng',
    'North Macedonia': 'mk',
    'Norway': 'no',
    'Oman': 'om',
    'Pakistan': 'pk',
    'Palau': 'pw',
    'Palestine': 'ps',
    'Panama': 'pa',
    'Papua New Guinea': 'pg',
    'Paraguay': 'py',
    'Peru': 'pe',
    'Philippines': 'ph',
    'Poland': 'pl',
    'Portugal': 'pt',
    'Qatar': 'qa',
    'Romania': 'ro',
    'Russia': 'ru',
    'Rwanda': 'rw',
    'Saint Kitts and Nevis': 'kn',
    'Saint Lucia': 'lc',
    'Saint Vincent and the Grenadines': 'vc',
    'Samoa': 'ws',
    'San Marino': 'sm',
    'Sao Tome and Principe': 'st',
    'Saudi Arabia': 'sa',
    'Senegal': 'sn',
    'Serbia': 'rs',
    'Seychelles': 'sc',
    'Sierra Leone': 'sl',
    'Singapore': 'sg',
    'Slovakia': 'sk',
    'Slovenia': 'si',
    'Solomon Islands': 'sb',
    'Somalia': 'so',
    'South Africa': 'za',
    'South Sudan': 'ss',
    'Spain': 'es',
    'Sri Lanka': 'lk',
    'Sudan': 'sd',
    'Suriname': 'sr',
    'Sweden': 'se',
    'Switzerland': 'ch',
    'Syria': 'sy',
    'Taiwan': 'tw',
    'Tajikistan': 'tj',
    'Tanzania': 'tz',
    'Thailand': 'th',
    'Timor-Leste': 'tl',
    'Togo': 'tg',
    'Tonga': 'to',
    'Trinidad and Tobago': 'tt',
    'Tunisia': 'tn',
    'Turkey': 'tr',
    'Turkmenistan': 'tm',
    'Tuvalu': 'tv',
    'Uganda': 'ug',
    'Ukraine': 'ua',
    'United Arab Emirates': 'ae',
    'United Kingdom': 'gb',
    'United States': 'us',
    'Uruguay': 'uy',
    'Uzbekistan': 'uz',
    'Vanuatu': 'vu',
    'Vatican City': 'va',
    'Venezuela': 've',
    'Vietnam': 'vn',
    'Yemen': 'ye',
    'Zambia': 'zm',
    'Zimbabwe': 'zw'
  };

  // Get the country code for the selected country
  const getCountryCode = (country) => {
    return countryCodes[country] || 'gh'; // Default to Ghana if country code not found
  };

  const calculateSubtotal = () => {
    if (selectedCountry === 'Ghana') {
      return cartItems.reduce((total, item) => total + (item.ghanaPrice * item.quantity), 0);
    }
    return getCartTotal();
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.065; // 6.5% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const formatPrice = (price) => {
    if (selectedCountry === 'Ghana') {
      return `GHS ${price.toFixed(2)}`;
    }
    return `$ ${price.toFixed(2)}`;
  };

  const validateForm = () => {
    const errors = {};
    
    // Contact Details Validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s-']+$/.test(formData.firstName.trim())) {
      errors.firstName = 'First name can only contain letters, spaces, hyphens and apostrophes';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s-']+$/.test(formData.lastName.trim())) {
      errors.lastName = 'Last name can only contain letters, spaces, hyphens and apostrophes';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!phoneNumber) {
      errors.phone = 'Phone number is required';
    } else if (phoneNumber.length < 8) {
      errors.phone = 'Phone number must be at least 8 digits';
    } else if (!/^\+?[0-9\s-()]+$/.test(phoneNumber)) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Delivery Method Validation
    if (!deliveryMethod) {
      errors.deliveryMethod = 'Please select a delivery method';
    }

    // Shipping Address Validation (only if shipping is selected)
    if (deliveryMethod === 'ship') {
      if (!selectedCountry) {
        errors.country = 'Country is required';
      }
      
      if (!formData.address.trim()) {
        errors.address = 'Address is required';
      } else if (formData.address.trim().length < 5) {
        errors.address = 'Address must be at least 5 characters';
      }

      if (!formData.city.trim()) {
        errors.city = 'City is required';
      } else if (formData.city.trim().length < 2) {
        errors.city = 'City must be at least 2 characters';
      }

      if (!formData.state.trim()) {
        errors.state = 'State/Region is required';
      } else if (formData.state.trim().length < 2) {
        errors.state = 'State/Region must be at least 2 characters';
      }

      // Postal code is now optional - only validate if provided
      if (formData.postalCode.trim() && !/^[a-zA-Z0-9\s-]+$/.test(formData.postalCode.trim())) {
        errors.postalCode = 'Please enter a valid postal code';
      }
    }

    // Pickup Location Validation (only if pickup is selected)
    if (deliveryMethod === 'pickup') {
      if (!formData.pickupLocation) {
        errors.pickupLocation = 'Please select a pickup location';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Add handler for phone number changes
  const handlePhoneChange = (phone) => {
    setPhoneNumber(phone);
    if (formErrors.phone) {
      setFormErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };

  const handleContinue = () => {
    if (validateForm()) {
      setCurrentStep('summary');
    }
  };

  const handleBack = () => {
    setCurrentStep('details');
  };

  const loadPaystackScript = () => {
    return new Promise((resolve, reject) => {
      if (window.PaystackPop) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Paystack script'));
      document.head.appendChild(script);
    });
  };

  const initializePayment = async () => {
    try {
      await loadPaystackScript();

      const amount = calculateTotal() * 100; // Convert to kobo (smallest currency unit)
      const email = formData.email;
      const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

      if (!publicKey) {
        setError('Payment configuration error. Please contact support.');
        return;
      }

      const config = {
        key: publicKey,
        email: email,
        amount: Math.round(amount),
        currency: 'GHS',
        ref: `TXN_${Date.now()}`,
        callback: function(response) {
          // Store payment reference in localStorage
          localStorage.setItem('paymentReference', response.reference);
          
          // Clear cart
          clearCart();
          
          // Close checkout modal
          setCheckOut(false);
          
          // Navigate to success page
          router.push(`/success?reference=${response.reference}`);
        },
        onClose: function() {
          setError('Payment was cancelled. Please try again.');
        }
      };

      const paystackInstance = window.PaystackPop.setup(config);
      paystackInstance.openIframe();
    } catch (error) {
      setError('Failed to initialize payment. Please try again.');
    }
  };

  const storeLocations = [
    {
      id: 1,
      name: 'Accra Main Branch',
      address: '123 Main Street, Accra',
      phone: '+233 20 123 4567'
    },
    {
      id: 2,
      name: 'Tema Branch',
      address: '456 Industrial Area, Tema',
      phone: '+233 20 234 5678'
    },
    {
      id: 3,
      name: 'Kumasi Branch',
      address: '789 High Street, Kumasi',
      phone: '+233 20 345 6789'
    }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] bottom-0 flex items-center justify-center p-2">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-[#1C1917] backdrop-blur-sm"
        onClick={() => setCheckOut(false)}
      ></div>
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="h-[95vh] overflow-hidden rounded-lg w-full fixed md:w-3/4 bg-[#1C1917] dark:bg-darkLight p-2 md:p-7 z-[1000] relative border border-stone-700"
      >
        <div 
          className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
          style={{ 
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10">
          <div className="w-full p-4 flex items-center justify-between border-b border-[#464646]">
            <h2 className="text-[#fff] text-xl font-semibold">Check out</h2>
            <div className="w-[38px] h-[38px] bg-gray-400 rounded-full flex items-center justify-center">
              <RiCloseLine
                onClick={() => setCheckOut(false)}
                size={20}
                className="text-2xl cursor-pointer text-white"
              />
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col h-[calc(95vh-80px)]">
            <div className="w-full md:w-3/5 h-full p-4 border-r border-[#464646] overflow-y-auto">
              {currentStep === 'details' ? (
                <>
                  <div className="max-w-2xl mx-auto">
                    <h2 className="text-lg text-white mb-6">Contact </h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-stone-400 mb-2">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border ${
                              formErrors.firstName ? 'border-red-500' : 'border-stone-600'
                            } focus:border-[#67CB93] focus:outline-none`}
                            required
                          />
                          {formErrors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-stone-400 mb-2">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border ${
                              formErrors.lastName ? 'border-red-500' : 'border-stone-600'
                            } focus:border-[#67CB93] focus:outline-none`}
                            required
                          />
                          {formErrors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-stone-400 mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border ${
                              formErrors.email ? 'border-red-500' : 'border-stone-600'
                            } focus:border-[#67CB93] focus:outline-none`}
                            required
                          />
                          {formErrors.email && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-stone-400 mb-2">Phone Number</label>
                          <PhoneInput
                            country="gh"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            inputClass={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border ${
                              formErrors.phone ? 'border-red-500' : 'border-stone-600'
                            } focus:border-[#67CB93] focus:outline-none`}
                            containerClass="w-full"
                            buttonClass="bg-[#1C1917] border-stone-600"
                            dropdownClass="bg-[#1C1917] text-white"
                            inputProps={{
                              placeholder: "e.g., +233 20 123 4567",
                              required: true
                            }}
                            specialLabel=""
                            enableSearch={true}
                            preferredCountries={["gh", "us", "gb", "ca", "au"]}
                          />
                          {formErrors.phone && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div className="mt-8">
                        <h2 className="text-lg text-white mb-4">Delivery Method</h2>
                        <div className="flex gap-4 mb-6">
                          <button
                            type="button"
                            onClick={() => {
                              setDeliveryMethod('ship');
                              // Clear pickup location when switching to shipping
                              setFormData(prev => ({ ...prev, pickupLocation: '' }));
                            }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                              deliveryMethod === 'ship'
                                ? 'bg-white text-[#1C1917]'
                                : 'bg-[#1C1917] text-white border border-stone-600'
                            }`}
                          >
                            <FaTruck />
                            Ship
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setDeliveryMethod('pickup');
                              // Clear shipping address when switching to pickup
                              setFormData(prev => ({
                                ...prev,
                                address: '',
                                city: '',
                                state: '',
                                postalCode: '',
                                landmark: ''
                              }));
                            }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                              deliveryMethod === 'pickup'
                                ? 'bg-white text-[#1C1917]'
                                : 'bg-[#1C1917] text-white border border-stone-600'
                            }`}
                          >
                            <FaStore />
                            Pickup in Store
                          </button>
                        </div>
                        {formErrors.deliveryMethod && (
                          <p className="text-red-500 text-sm mt-1 mb-4">{formErrors.deliveryMethod}</p>
                        )}

                        {deliveryMethod === 'ship' ? (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="md:col-span-2">
                                <label className="block text-stone-400 mb-2">Country</label>
                                <select
                                  value={selectedCountry}
                                  onChange={(e) => setSelectedCountry(e.target.value)}
                                  className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border ${
                                    formErrors.country ? 'border-red-500' : 'border-stone-600'
                                  } focus:border-[#67CB93] focus:outline-none`}
                                >
                                  {countries.map((country) => (
                                    <option key={country} value={country}>
                                      {country}
                                    </option>
                                  ))}
                                </select>
                                {formErrors.country && (
                                  <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>
                                )}
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-stone-400 mb-2">Address</label>
                                <input
                                  type="text"
                                  name="address"
                                  value={formData.address}
                                  onChange={handleInputChange}
                                  className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border ${
                                    formErrors.address ? 'border-red-500' : 'border-stone-600'
                                  } focus:border-[#67CB93] focus:outline-none`}
                                  required
                                />
                                {formErrors.address && (
                                  <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
                                )}
                              </div>
                              <div>
                                <label className="block text-stone-400 mb-2">City</label>
                                <input
                                  type="text"
                                  name="city"
                                  value={formData.city}
                                  onChange={handleInputChange}
                                  className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border ${
                                    formErrors.city ? 'border-red-500' : 'border-stone-600'
                                  } focus:border-[#67CB93] focus:outline-none`}
                                  required
                                />
                                {formErrors.city && (
                                  <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
                                )}
                              </div>
                              <div>
                                <label className="block text-stone-400 mb-2">State/Region</label>
                                <input
                                  type="text"
                                  name="state"
                                  value={formData.state}
                                  onChange={handleInputChange}
                                  className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border ${
                                    formErrors.state ? 'border-red-500' : 'border-stone-600'
                                  } focus:border-[#67CB93] focus:outline-none`}
                                  required
                                />
                                {formErrors.state && (
                                  <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>
                                )}
                              </div>
                              <div>
                                <label className="block text-stone-400 mb-2">Postal Code</label>
                                <input
                                  type="text"
                                  name="postalCode"
                                  value={formData.postalCode}
                                  onChange={handleInputChange}
                                  className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border ${
                                    formErrors.postalCode ? 'border-red-500' : 'border-stone-600'
                                  } focus:border-[#67CB93] focus:outline-none`}
                                  placeholder="Optional"
                                />
                                {formErrors.postalCode && (
                                  <p className="text-red-500 text-sm mt-1">{formErrors.postalCode}</p>
                                )}
                              </div>
                              <div>
                                <label className="block text-stone-400 mb-2">Famous Landmark</label>
                                <input
                                  type="text"
                                  name="landmark"
                                  value={formData.landmark}
                                  onChange={handleInputChange}
                                  className="w-full bg-[#1C1917] text-white rounded-lg px-4 py-2 border border-stone-600 focus:border-[#67CB93] focus:outline-none"
                                  placeholder="Optional"
                                />
                              </div>
                            </div>
                            <div className="mt-4 p-4 bg-[#67CB93]/10 border border-[#67CB93] rounded-lg">
                              <p className="text-[#67CB93] text-sm">
                              We will contact you within 24 hours to arrange delivery and confirm the shipping cost, which will be covered by you based on your preferred delivery option.
                              </p>
                            </div>
                          </>
                        ) : (
                          <div className="space-y-4">
                            <h3 className="text-white font-medium mb-4">Select Pickup Location</h3>
                            {storeLocations.map(location => (
                              <div
                                key={location.id}
                                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                                  formData.pickupLocation === location.id
                                    ? 'border-[#67CB93] bg-[#67CB93]/10'
                                    : 'border-stone-600 hover:border-[#67CB93]'
                                }`}
                                onClick={() => setFormData(prev => ({ ...prev, pickupLocation: location.id }))}
                              >
                                <h4 className="text-white font-medium">{location.name}</h4>
                                <p className="text-stone-400 text-sm">{location.address}</p>
                                <p className="text-stone-400 text-sm">{location.phone}</p>
                              </div>
                            ))}
                            {formErrors.pickupLocation && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.pickupLocation}</p>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="pt-4 pb-4">
                        <div className="mb-6 px-4 py-3 bg-[#2A2522] rounded-lg flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-[#67CB93]"></div>
                            <p className="text-white text-sm">Paystack</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Image src={MasterCard} alt="Mastercard" width={30} height={20} objectFit="contain" />
                            <Image src={Visa} alt="Visa" width={30} height={20} objectFit="contain" />
                            <Image src={MTNMomo} alt="MTN Mobile Money" width={30} height={20} objectFit="contain" />
                            <Image src= {AirtelTigo} alt="AirtelTigo Money" width={30} height={20} objectFit="contain" />
                            {/* <Image src="/images/payments/telecel.png" alt="Telecel" width={30} height={20} objectFit="contain" /> */}
                          </div>
                        </div>
                        <button 
                          type="button"
                          onClick={handleContinue}
                          className="h-[45px] w-full bg-white text-center text-sm rounded-lg font-medium hover:bg-stone-100 transition-colors"
                        >
                          Continue to Payment
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <div className="max-w-2xl mx-auto">
                    <h2 className="text-lg text-white mb-6">Contact</h2>
                    <div className="flex flex-col gap-6">
                      <div className="bg-stone-800/50 p-4 rounded-lg">
                        <h3 className="text-white font-medium mb-3">Contact Information</h3>
                        <div className="text-stone-300 text-sm">
                          <p>{formData.firstName} {formData.lastName}</p>
                          <p>{formData.email}</p>
                          <p>{phoneNumber}</p>
                        </div>
                      </div>
                      
                      <div className="bg-stone-800/50 p-4 rounded-lg">
                        <h3 className="text-white font-medium mb-3">
                          {deliveryMethod === 'ship' ? 'Shipping Address' : 'Pickup Location'}
                        </h3>
                        <div className="text-stone-300 text-sm">
                          {deliveryMethod === 'ship' ? (
                            <>
                              <p>{formData.address}</p>
                              <p>{formData.city}, {formData.state} {formData.postalCode}</p>
                              {formData.landmark && <p>Landmark: {formData.landmark}</p>}
                            </>
                          ) : (
                            <>
                              {storeLocations.find(loc => loc.id === formData.pickupLocation) && (
                                <>
                                  <p>{storeLocations.find(loc => loc.id === formData.pickupLocation).name}</p>
                                  <p>{storeLocations.find(loc => loc.id === formData.pickupLocation).address}</p>
                                  <p>{storeLocations.find(loc => loc.id === formData.pickupLocation).phone}</p>
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 pb-4">
                        <button 
                          type="button"
                          onClick={handleBack}
                          className="h-[45px] w-full bg-stone-700 text-white text-center text-sm rounded-lg font-medium hover:bg-stone-600 transition-colors"
                        >
                          Back to Details
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="md:w-2/5 w-full h-full p-4 flex flex-col">
              <h2 className="text-lg text-white mb-4">Order Summary</h2>
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-col gap-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 bg-stone-800/50 rounded-lg">
                      <div className="w-[80px] h-[80px] rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h1 className="text-sm font-medium text-white mb-2">
                          {item.title}
                        </h1>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs text-stone-400">Price</h4>
                            <h4 className="text-xs font-medium text-white">
                              {selectedCountry === 'Ghana' 
                                ? `GHS ${item.ghanaPrice}`
                                : `$ ${item.internationalPrice}`
                              }
                            </h4>
                          </div>
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs text-stone-400">Quantity</h4>
                            <h4 className="text-xs font-medium text-white">
                              {item.quantity}
                            </h4>
                          </div>
                          <div className="flex items-center justify-between pt-1 border-t border-stone-700">
                            <h4 className="text-xs text-stone-400">Subtotal</h4>
                            <h4 className="text-xs font-medium text-white">
                              {selectedCountry === 'Ghana' 
                                ? `GHS ${(item.ghanaPrice * item.quantity).toFixed(2)}`
                                : `$ ${(item.internationalPrice * item.quantity).toFixed(2)}`
                              }
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full space-y-3">
                  <div className="w-full py-2 px-1 flex items-center justify-between">
                    <h3 className="text-sm text-stone-400">Subtotal</h3>
                    <h3 className="text-sm font-medium text-white">
                      {formatPrice(calculateSubtotal())}
                    </h3>
                  </div>
                  <div className="w-full py-2 px-1 flex items-center justify-between">
                    <h3 className="text-sm text-stone-400">
                      Delivery Method
                    </h3>
                    <h3 className="text-sm font-medium text-white">
                      {deliveryMethod === 'ship' ? 'Shipping' : 'Store Pickup'}
                    </h3>
                  </div>
                  <div className="w-full py-2 px-1 flex items-center justify-between border-t border-stone-700 pt-3">
                    <h3 className="text-base font-medium text-white">Total due</h3>
                    <h3 className="text-base font-medium text-white">
                      {formatPrice(calculateTotal())}
                    </h3>
                  </div>
                </div>
                <button 
                  className={`h-[45px] w-full text-center text-sm rounded-lg mt-6 font-medium ${
                    currentStep === 'summary' 
                      ? 'bg-white hover:bg-stone-100 transition-colors cursor-pointer' 
                      : 'bg-stone-700 text-stone-400 cursor-not-allowed'
                  }`}
                  disabled={currentStep !== 'summary' || isProcessing || !paystackInstance}
                  onClick={initializePayment}
                >
                  {isProcessing ? 'Processing...' : 'Pay Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckOutModal;
