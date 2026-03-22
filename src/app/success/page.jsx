"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FaTimesCircle } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';

const SuccessPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState('loading'); // 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [errorDetails, setErrorDetails] = useState('');

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get reference from URL query parameter first, then fallback to localStorage
        const reference = searchParams.get('reference') || localStorage.getItem('paymentReference');
        
        if (!reference) {
          console.log('No payment reference found');
          setVerificationStatus('error');
          setErrorMessage('Invalid Payment Session');
          setErrorDetails('No payment reference found. Please try the payment process again.');
          return;
        }

        console.log('Attempting to verify payment with reference:', reference);

        // Add a small delay to ensure the payment is processed
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await axios.post('/api/verify-payment', {
          reference: reference
        });

        console.log('Verification response:', response.data);

        if (response.data.success) {
          setVerificationStatus('success');
          // Clear the payment reference after successful verification
          localStorage.removeItem('paymentReference');
        } else {
          setVerificationStatus('error');
          setErrorMessage(response.data.error || 'Payment verification failed');
          setErrorDetails(response.data.details || 'Please contact support for assistance.');
        }
      } catch (error) {
        // console.error('Payment verification error:', error);
        setVerificationStatus('error');
        
        // Show more specific error message if available
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setErrorMessage(error.response.data?.error || 'Payment verification failed');
          setErrorDetails(error.response.data?.details || error.message);
          // console.log('Error response:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          setErrorMessage('Server not responding');
          setErrorDetails('Please try again or contact support if the problem persists.');
          // console.log('Error request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          setErrorMessage('An unexpected error occurred');
          setErrorDetails(error.message);
          // console.log('Error message:', error.message);
        }
      }
    };

    verifyPayment();
  }, [router, searchParams]);

  if (verificationStatus === 'loading') {
    return (
      <div className="min-h-screen bg-[#1C1917] flex items-center justify-center p-4">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p>Verifying payment...</p>
        </div>
      </div>
    );
  }

  if (verificationStatus === 'error') {
    return (
      <div className="min-h-screen bg-[#1C1917] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-[#2A2522] rounded-lg shadow-xl p-8 md:p-12"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <FaTimesCircle className="text-red-500 text-6xl" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              {errorMessage}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-stone-400 mb-8"
            >
              {errorDetails}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <Link
                href="/books/gallery"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1C1917] rounded-lg font-medium hover:bg-stone-100 transition-colors"
              >
                <MdOutlineShoppingBag className="text-xl" />
                Return to Books
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1C1917] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-[#2A2522] rounded-lg shadow-xl p-8 md:p-12"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <FaCheckCircle className="text-[#67CB93] text-6xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Payment Successful!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-stone-400 mb-8"
          >
            Thank you for your purchase. Your order has been confirmed and will be processed shortly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-stone-800/50 rounded-lg p-6 mb-8"
          >
            <h2 className="text-white font-semibold mb-4">What&apos;s Next?</h2>
            <ul className="text-stone-300 space-y-3 text-left">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#67CB93] rounded-full"></span>
                You will receive an order confirmation email shortly
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#67CB93] rounded-full"></span>
                Our team will process your order within 24-48 hours
              </li>
              {/* <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#67CB93] rounded-full"></span>
                You can track your order status in your account
              </li> */}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link
              href="/books/gallery"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1C1917] rounded-lg font-medium hover:bg-stone-100 transition-colors"
            >
              <MdOutlineShoppingBag className="text-xl" />
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-stone-600 text-white rounded-lg font-medium hover:bg-stone-800/50 transition-colors"
            >
              Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#1C1917] flex items-center justify-center p-4">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    }>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage; 