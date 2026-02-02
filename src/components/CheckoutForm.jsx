"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { FaTruck, FaStore, FaInfoCircle, FaGlobe } from "react-icons/fa";
import { setManualLocation } from '@/services/locationService';
import AirtelTigo from "../../public/image/payments/airteltigo_mobile_money.svg";
import Visa from "../../public/image/payments/visa.svg";
import MasterCard from "../../public/image/payments/master_card.svg";
import MTNMomo from "../../public/image/payments/mtn_mobile_money.svg";
import ShippingPolicyModal from "./ShippingPolicyModal";

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
  },
  // {
  //   id: 3,
  //   name: 'Kumasi Branch',
  //   address: '789 High Street, Kumasi',
  //   phone: '+233 20 345 6789'
  // }
];

const CheckoutForm = () => {
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
  const [phoneCountryCode, setPhoneCountryCode] = useState('gh');
  const [currentStep, setCurrentStep] = useState('details'); // 'details' or 'summary'
  const [isProcessing, setIsProcessing] = useState(false);
  const [paystackInstance, setPaystackInstance] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState('ship'); // 'ship' or 'pickup'
  const [isShippingPolicyOpen, setIsShippingPolicyOpen] = useState(false);
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

  // Form validation state
  const [formErrors, setFormErrors] = useState({});

  // Update selected country based on detected location
  // useEffect(() => {
  //   if (userLocation && !isLocationLoading) {
  //     if (userLocation.pricing === 'ghana') {
  //       setSelectedCountry('Ghana');
  //     } else {
  //       setSelectedCountry(userLocation.country || 'International');
  //     }
  //   }
  // }, [userLocation, isLocationLoading]);

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
    if (!userLocation || isLocationLoading) {
      return cartItems.reduce((total, item) => total + (item.internationalPrice * item.quantity), 0);
    }
    
    return cartItems.reduce((total, item) => total + (getItemPrice(item) * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.065; // 6.5% tax
  };

  const calculateTotal = () => {
    // Base total is the products subtotal
    const baseTotal = calculateSubtotal();
    // Add flat delivery cost for Ghana checkout
    if (userLocation && !isLocationLoading && userLocation.pricing === 'ghana') {
      return baseTotal + 40;
    }
    return baseTotal;
  };

  const formatPrice = (price) => {
    if (!userLocation || isLocationLoading) {
      return `$ ${price.toFixed(2)}`;
    }
    
    if (userLocation.pricing === 'ghana') {
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

  const handleLocationChange = (location) => {
    setManualLocation(location);
    setShowLocationDropdown(false);
    // Reload to apply new pricing
    window.location.reload();
  };

  const getLocationDisplay = () => {
    if (!userLocation) return 'Location';
    const symbols = {
      ghana: 'GHS',
      international: '$',
      africa: '$'
    };
    return `${userLocation.country} (${symbols[userLocation.region]})`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLocationDropdown && !event.target.closest('.location-dropdown')) {
        setShowLocationDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLocationDropdown]);

  // Update phone country code based on location
  useEffect(() => {
    if (userLocation && !isLocationLoading) {
      if (userLocation.pricing === 'ghana') {
        setPhoneCountryCode('gh');
      } else {
        setPhoneCountryCode('us'); // Use US as fallback but clear the input
        setPhoneNumber(''); // Clear phone number when switching to international
      }
    }
  }, [userLocation, isLocationLoading]);

  useEffect(() => {
    const initializePaystack = async () => {
      try {
        // Only initialize Paystack if we have a valid email and are on the summary step
        if (!formData.email || !formData.email.includes('@') || currentStep !== 'summary') {
          return;
        }

        // Check if Paystack script is already loaded
        if (window.PaystackPop) {
          // Script already loaded, initialize directly
          initializePaystackConfig();
          return;
        }

        // console.log('Loading Paystack...');
        
        // Load Paystack script
        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        document.body.appendChild(script);

        script.onerror = (error) => {
          console.error('Error loading Paystack script:', error);
          setIsProcessing(false);
        };

        script.onload = () => {
          initializePaystackConfig();
        };
      } catch (error) {
        console.error('Error initializing Paystack:', error);
        setIsProcessing(false);
      }
    };

    const initializePaystackConfig = () => {
      try {
        // console.log('Paystack script loaded successfully');
        
        // Convert amount based on detected location, not selected country
        let amount;
        if (!userLocation || isLocationLoading) {
          // Default to international pricing
          amount = calculateTotal() * 12.5 * 100; // Convert USD to GHS
        } else if (userLocation.pricing === 'ghana') {
          amount = calculateTotal() * 100; // Convert to pesewas
        } else {
          // Africa or international pricing
          amount = calculateTotal() * 12.5 * 100; // Convert USD to GHS
        }

        // console.log('Payment amount:', amount);
        // console.log('Detected location:', userLocation);
        // console.log('Email:', formData.email);
        // console.log('Public Key:', process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY);

        if (!process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY) {
          console.error('Paystack public key is not defined');
          setIsProcessing(false);
          return;
        }

        // Validate email format
        if (!formData.email || !formData.email.includes('@')) {
          console.error('Invalid email format for Paystack');
          setIsProcessing(false);
          return;
        }

        // Validate amount
        if (!amount || amount <= 0) {
          console.error('Invalid amount for Paystack:', amount);
          setIsProcessing(false);
          return;
        }

        const config = {
          key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
          email: formData.email,
          amount: Math.round(amount),
          currency: 'GHS',
          ref: `${Date.now()}`,
          metadata: {
            custom_fields: [
              {
                display_name: "Customer Name",
                variable_name: "customer_name",
                value: `${formData.firstName} ${formData.lastName}`
              },
              {
                display_name: "Phone Number",
                variable_name: "phone_number",
                value: phoneNumber
              },
              {
                display_name: "Shipping Address",
                variable_name: "shipping_address",
                value: `${formData.address}, ${formData.city}, ${formData.state}`
              },
              {
                display_name: "Original Currency",
                variable_name: "original_currency",
                value: userLocation?.pricing === 'ghana' ? 'GHS' : 'USD'
              },
              {
                display_name: "Original Amount",
                variable_name: "original_amount",
                value: calculateTotal().toString()
              }
            ]
          },
          callback: function(response) {
            (async () => {
              console.log('Payment successful! Reference:', response);
              try {
                // Store payment reference in localStorage
                localStorage.setItem('paymentReference', response.reference);
                // console.log('Payment reference stored in localStorage');
                
                // Send order confirmation email
                const emailData = {
                  orderData: {
                    id: response.reference,
                    date: new Date().toISOString(),
                    status: 'paid'
                  },
                  customerInfo: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phoneNumber: phoneNumber,
                    country: selectedCountry
                  },
                  deliveryInfo: {
                    method: deliveryMethod,
                    address: formData.address,
                    city: formData.city,
                    state: formData.state,
                    postalCode: formData.postalCode,
                    landmark: formData.landmark,
                    country: selectedCountry,
                    pickupLocation: deliveryMethod === 'pickup' 
                      ? storeLocations.find(loc => loc.id === formData.pickupLocation)
                      : null
                  },
                  orderItems: cartItems.map(item => ({
                    title: item.title,
                    quantity: item.quantity,
                    price: getItemPrice(item)
                  })),
                  paymentInfo: {
                    reference: response.reference,
                    currency: userLocation?.pricing === 'ghana' ? 'GHS' : '$',
                    subtotal: calculateSubtotal(),
                    total: calculateTotal()
                  }
                };
  
                try {
                  const emailResponse = await fetch('/api/order-confirmation', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(emailData)
                  });
  
                  if (emailResponse.ok) {
                    // console.log('Order confirmation email sent successfully');
                  } else {
                    console.error('Failed to send order confirmation email');
                  }
                } catch (emailError) {
                  console.error('Error sending order confirmation email:', emailError);
                }
                
                // Clear cart and close modal
                clearCart();
                // console.log('Cart cleared');
                
                // Use Next.js router for navigation
                // console.log('Navigating to success page...');
                router.push('/success');
              } catch (error) {
                console.error('Error in success handler:', error);
                setIsProcessing(false);
              }
            })();
          },
          onClose: () => {
            // console.log('Payment cancelled');
            setIsProcessing(false);
            localStorage.removeItem('paymentReference');
          }
        };

        // console.log('Creating Paystack instance with config:', config);
        const paystack = window.PaystackPop.setup(config);
        // console.log('Paystack instance created successfully');
        setPaystackInstance(paystack);
      } catch (error) {
        console.error('Error setting up Paystack:', error);
        setIsProcessing(false);
      }
    };

    initializePaystack();

    // Cleanup function
    return () => {
      const script = document.querySelector('script[src="https://js.paystack.co/v1/inline.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [formData, phoneNumber, userLocation, isLocationLoading, calculateSubtotal, calculateTotal, cartItems, clearCart, deliveryMethod, getItemPrice, router, selectedCountry, currentStep]);

  const handlePayment = () => {
    if (!paystackInstance) {
      console.error('Paystack instance not available');
      setIsProcessing(false);
      return;
    }

    // console.log('Initializing payment...');
    setIsProcessing(true);
    
    try {
      // console.log('Calling Paystack payment...');
      // console.log('Paystack instance:', paystackInstance);
      paystackInstance.openIframe();
      // console.log('Payment initialization successful');
    } catch (error) {
      console.error('Payment initialization failed:', error);
      setIsProcessing(false);
    }
  };

  return (
    <>
      <ShippingPolicyModal
        isOpen={isShippingPolicyOpen}
        onClose={() => setIsShippingPolicyOpen(false)}
      />
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-7xl mx-auto min-h-screen border border-stone-700 rounded-lg"
    >
      <div className="w-full flex md:flex-row flex-col">
        <div className="w-full md:w-3/5 p-4 md:p-4 p-3 border-r border-[#464646] overflow-y-auto">
          {currentStep === 'details' ? (
            <>
              <div className="max-w-2xl mx-auto">
                <h2 className="text-lg text-white mb-6">Contact</h2>
                
                {/* Location Selector */}
                <div className="mb-6 p-4 bg-[#1C1917] rounded-lg border border-stone-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FaGlobe className="h-5 w-5 text-stone-400" />
                      <span className="text-stone-400 text-sm">Pricing Region:</span>
                      <span className="text-white font-medium">{getLocationDisplay()}</span>
                    </div>
                    <div className="relative location-dropdown">
                      <button
                        onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                        className="px-3 py-1 bg-stone-700 hover:bg-stone-600 text-white text-sm rounded transition-colors"
                      >
                        Change
                      </button>
                      
                      {showLocationDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-[#1C1917] border border-stone-600 rounded-lg shadow-lg z-50">
                          <div className="py-2">
                            <button
                              onClick={() => handleLocationChange({
                                country: 'Ghana',
                                countryCode: 'GH',
                                region: 'ghana',
                                pricing: 'ghana'
                              })}
                              className="block w-full px-4 py-2 text-left text-white hover:bg-stone-600 text-sm"
                            >
                              Ghana (GHS)
                            </button>
                            <button
                              onClick={() => handleLocationChange({
                                country: 'International',
                                countryCode: null,
                                region: 'international',
                                pricing: 'international'
                              })}
                              className="block w-full px-4 py-2 text-left text-white hover:bg-stone-600 text-sm"
                            >
                              International ($)
                            </button>
                            <button
                              onClick={() => handleLocationChange({
                                country: 'Africa',
                                countryCode: null,
                                region: 'africa',
                                pricing: 'africa'
                              })}
                              className="block w-full px-4 py-2 text-left text-white hover:bg-stone-600 text-sm"
                            >
                              Africa ($)
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-stone-500 text-xs mt-2">
                    Select your region to see the correct pricing
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-400 mb-2 text-sm md:text-base">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                          formErrors.firstName ? 'border-red-500' : 'border-stone-600'
                        } focus:border-white focus:outline-none text-sm md:text-base`}
                        required
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-stone-400 mb-2 text-sm md:text-base">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                          formErrors.lastName ? 'border-red-500' : 'border-stone-600'
                        } focus:border-white focus:outline-none text-sm md:text-base`}
                        required
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-stone-400 mb-2 text-sm md:text-base">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                          formErrors.email ? 'border-red-500' : 'border-stone-600'
                        } focus:border-white focus:outline-none text-sm md:text-base`}
                        required
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-stone-400 mb-2 text-sm md:text-base">Phone Number</label>
                      {userLocation?.pricing === 'ghana' ? (
                        <PhoneInput
                          country="gh"
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          inputClass={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                            formErrors.phone ? 'border-red-500' : 'border-stone-600'
                          } focus:border-white focus:outline-none text-sm md:text-base`}
                          containerClass="w-full"
                          buttonClass="bg-[#1C1917] border-stone-600"
                          dropdownClass="bg-[#1C1917] text-white"
                          inputProps={{
                            placeholder: "e.g., +233 20 123 4567",
                            required: true
                          }}
                          specialLabel=""
                          enableSearch={true}
                          preferredCountries={["gh", "ng", "ci"]}
                        />
                      ) : (
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                            formErrors.phone ? 'border-red-500' : 'border-stone-600'
                          } focus:border-white focus:outline-none text-sm md:text-base`}
                          placeholder="e.g., +1 555 123 4567"
                          required
                        />
                      )}
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-lg text-white mb-4">Delivery Method</h2>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6">
                      <div className="flex flex-col items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setDeliveryMethod('ship');
                            // Clear pickup location when switching to shipping
                            setFormData(prev => ({ ...prev, pickupLocation: '' }));
                          }}
                          className={`flex items-center justify-center gap-2 px-6 py-4 md:py-3 rounded-lg transition-colors text-sm md:text-base w-full ${
                            deliveryMethod === 'ship'
                              ? 'bg-white text-[#1C1917]'
                              : 'bg-[#1C1917] text-white border border-stone-600'
                          }`}
                        >
                          <FaTruck />
                          Ship
                        </button>
                        <div className="flex items-center justify-center gap-1 w-full">
                          <FaInfoCircle className="text-xs text-stone-400" />
                          <button
                            type="button"
                            onClick={() => setIsShippingPolicyOpen(true)}
                            className="text-xs text-stone-400 hover:text-white transition-colors text-center underline decoration-stone-400 hover:decoration-white"
                          >
                            View our Shipping Policy
                          </button>
                        </div>
                      </div>
                      {/* <button
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
                        className={`flex items-center justify-center gap-2 px-6 py-4 md:py-3 rounded-lg transition-colors text-sm md:text-base ${
                          deliveryMethod === 'pickup'
                            ? 'bg-white text-[#1C1917]'
                            : 'bg-[#1C1917] text-white border border-stone-600'
                        }`}
                      >
                        <FaStore />
                        Pickup in Store
                      </button> */}
                    </div>
                    {formErrors.deliveryMethod && (
                      <p className="text-red-500 text-sm mt-1 mb-4">{formErrors.deliveryMethod}</p>
                    )}

                    {deliveryMethod === 'ship' ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <label className="block text-stone-400 mb-2 text-sm md:text-base">Country</label>
                            <select
                              value={selectedCountry}
                              onChange={(e) => setSelectedCountry(e.target.value)}
                              className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                                formErrors.country ? 'border-red-500' : 'border-stone-600'
                              } focus:border-white focus:outline-none text-sm md:text-base`}
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
                            <label className="block text-stone-400 mb-2 text-sm md:text-base">Address</label>
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                                formErrors.address ? 'border-red-500' : 'border-stone-600'
                              } focus:border-white focus:outline-none text-sm md:text-base`}
                              required
                            />
                            {formErrors.address && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-stone-400 mb-2 text-sm md:text-base">City</label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                                formErrors.city ? 'border-red-500' : 'border-stone-600'
                              } focus:border-white focus:outline-none text-sm md:text-base`}
                              required
                            />
                            {formErrors.city && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-stone-400 mb-2 text-sm md:text-base">State/Region</label>
                            <input
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                                formErrors.state ? 'border-red-500' : 'border-stone-600'
                              } focus:border-white focus:outline-none text-sm md:text-base`}
                              required
                            />
                            {formErrors.state && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-stone-400 mb-2 text-sm md:text-base">Postal Code</label>
                            <input
                              type="text"
                              name="postalCode"
                              value={formData.postalCode}
                              onChange={handleInputChange}
                              className={`w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border ${
                                formErrors.postalCode ? 'border-red-500' : 'border-stone-600'
                              } focus:border-white focus:outline-none text-sm md:text-base`}
                              placeholder="Optional"
                            />
                            {formErrors.postalCode && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.postalCode}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-stone-400 mb-2 text-sm md:text-base">Famous Landmark</label>
                            <input
                              type="text"
                              name="landmark"
                              value={formData.landmark}
                              onChange={handleInputChange}
                              className="w-full bg-[#1C1917] text-white rounded-lg px-4 py-3 md:py-2 border border-stone-600 focus:border-white focus:outline-none text-sm md:text-base"
                              placeholder="Optional"
                            />
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-white/10 border border-white rounded-lg">
                          <p className="text-white text-sm">
                            {userLocation?.pricing === 'ghana'
                              ? 'Currently, delivery is available exclusively within Accra, Ghana for all online purchases through our trusted delivery partner.'
                              : 'We will contact you within 24 hours to arrange delivery and confirm the shipping cost, which will be covered by you based on your preferred delivery option.'}
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
                                ? 'border-white bg-white/10'
                                : 'border-stone-600 hover:border-white'
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
                    <div className="mb-6 px-4 py-3 bg-[#2A2522] rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#09a4da]"></div>
                        <p className="text-white text-sm">Paystack</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src={MasterCard} alt="Mastercard" height={20} style={{ objectFit: 'contain', width: 'auto' }} />
                        <Image src={Visa} alt="Visa" height={20} style={{ objectFit: 'contain', width: 'auto' }} />
                        <Image src={MTNMomo} alt="MTN Mobile Money" height={20} style={{ objectFit: 'contain', width: 'auto' }} />
                        <Image src={AirtelTigo} alt="AirtelTigo Money" height={20} style={{ objectFit: 'contain', width: 'auto' }} />
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={handleContinue}
                      className="h-[50px] md:h-[45px] w-full bg-white text-center text-sm md:text-base rounded-lg font-medium hover:bg-stone-100 transition-colors"
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
                    <div className="mb-6 px-4 py-3 bg-[#2A2522] rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#09a4da]"></div>
                        <p className="text-white text-sm">Paystack</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image src={MasterCard} alt="Mastercard" height={20} style={{ objectFit: 'contain', width: 'auto' }} />
                        <Image src={Visa} alt="Visa" height={20} style={{ objectFit: 'contain', width: 'auto' }} />
                        <Image src={MTNMomo} alt="MTN Mobile Money" height={20} style={{ objectFit: 'contain', width: 'auto' }} />
                        <Image src={AirtelTigo} alt="AirtelTigo Money" height={20} style={{ objectFit: 'contain', width: 'auto' }} />
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={handleBack}
                      className="h-[50px] md:h-[45px] w-full bg-stone-700 text-white text-center text-sm md:text-base rounded-lg font-medium hover:bg-stone-600 transition-colors"
                    >
                      Back to Details
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Show order summary only on desktop */}
        <div className="hidden md:block md:w-2/5 p-4 overflow-y-auto">
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
                          {isLocationLoading ? 'Loading...' : getPriceDisplay(item)}
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
                          {isLocationLoading ? 'Loading...' : formatPrice(getItemPrice(item) * item.quantity)}
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
                  {isLocationLoading ? 'Loading...' : formatPrice(calculateSubtotal())}
                </h3>
              </div>
              {userLocation?.pricing === 'ghana' ? (
                <div className="w-full py-2 px-1 flex items-center justify-between">
                  <h3 className="text-sm text-stone-400">Delivery Cost</h3>
                  <h3 className="text-sm font-medium text-white">GHS 40.00</h3>
                </div>
              ) : (
                <div className="w-full py-2 px-1 flex items-center justify-between">
                  <h3 className="text-sm text-stone-400">Delivery Method</h3>
                  <h3 className="text-sm font-medium text-white">
                    {deliveryMethod === 'ship' ? 'Shipping' : 'Store Pickup'}
                  </h3>
                </div>
              )}
              <div className="w-full py-2 px-1 flex items-center justify-between border-t border-stone-700 pt-3">
                <h3 className="text-base font-medium text-white">Total due</h3>
                <h3 className="text-base font-medium text-white">
                  {isLocationLoading ? 'Loading...' : formatPrice(calculateTotal())}
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
              onClick={handlePayment}
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </div>

        {/* Show order summary on mobile only when in summary step */}
        {currentStep === 'summary' && (
          <div className="md:hidden w-full p-3 md:p-4 overflow-y-auto">
            <h2 className="text-lg text-white mb-4">Order Summary</h2>
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col gap-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 md:gap-4 p-3 bg-stone-800/50 rounded-lg">
                    <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h1 className="text-sm font-medium text-white mb-2 line-clamp-2">
                        {item.title}
                      </h1>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs text-stone-400">Price</h4>
                          <h4 className="text-xs font-medium text-white">
                            {isLocationLoading ? 'Loading...' : getPriceDisplay(item)}
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
                            {isLocationLoading ? 'Loading...' : formatPrice(getItemPrice(item) * item.quantity)}
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
                    {isLocationLoading ? 'Loading...' : formatPrice(calculateSubtotal())}
                  </h3>
                </div>
              {userLocation?.pricing === 'ghana' ? (
                <div className="w-full py-2 px-1 flex items-center justify-between">
                  <h3 className="text-sm text-stone-400">Delivery Cost</h3>
                  <h3 className="text-sm font-medium text-white">GHS 40.00</h3>
                </div>
              ) : (
                <div className="w-full py-2 px-1 flex items-center justify-between">
                  <h3 className="text-sm text-stone-400">Delivery Method</h3>
                  <h3 className="text-sm font-medium text-white">
                    {deliveryMethod === 'ship' ? 'Shipping' : 'Store Pickup'}
                  </h3>
                </div>
              )}
                <div className="w-full py-2 px-1 flex items-center justify-between border-t border-stone-700 pt-3">
                  <h3 className="text-base font-medium text-white">Total due</h3>
                  <h3 className="text-base font-medium text-white">
                    {isLocationLoading ? 'Loading...' : formatPrice(calculateTotal())}
                  </h3>
                </div>
              </div>
              <button 
                className={`h-[50px] md:h-[45px] w-full text-center text-sm md:text-base rounded-lg mt-6 font-medium ${
                  currentStep === 'summary' 
                    ? 'bg-white hover:bg-stone-100 transition-colors cursor-pointer' 
                    : 'bg-stone-700 text-stone-400 cursor-not-allowed'
                }`}
                disabled={currentStep !== 'summary' || isProcessing || !paystackInstance}
                onClick={handlePayment}
              >
                {isProcessing ? 'Processing...' : 'Pay Now'}
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
    </>
  );
};

export default CheckoutForm;