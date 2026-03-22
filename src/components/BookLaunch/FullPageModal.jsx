'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, FileText, Play } from "lucide-react";

export default function FullPageModal({ onClose }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0, daysLabel: 'Days'
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set launch date to November 25, 2025 at 6:00 PM GMT
    const launchDate = new Date("2025-11-25T18:00:00+00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      
      const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
      setTimeLeft({
        days: days,
        daysLabel: days === 1 ? 'Day' : 'Days',
        hours: Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000))
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        className="fixed inset-0 bg-black/70 z-30 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <div className="relative bg-white rounded-xl max-w-4xl w-full overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
          
          <div className="grid md:grid-cols-5 gap-8 p-8">
            <div className="relative min-h-[480px] md:h-full md:col-span-3">
              <Image
                src="/image/events/book_launch.jpeg"
                alt="Book Launch: THE REPUBLIC"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            <div className="flex flex-col justify-center md:col-span-2">
              <div className="space-y-4 text-sm">
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-3">MTN MOMO PAYMENT DETAILS</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-medium">Momo Name:</span> Dr. Albert Antwi-Boasiako</p>
                      <p><span className="font-medium">Momo Number:</span> <a href="tel:+233553212028" className="text-blue-600 hover:text-blue-800 hover:underline">0553212028</a></p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-3">FOR ENQUIRIES, CONTACT</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-medium">Telephone:</span> <a href="tel:+233553212028" className="text-blue-600 hover:text-blue-800 hover:underline">+233 55321 2028</a></p>
                      <p><span className="font-medium">Email:</span> <a href="mailto:info@antwi-boasiako.com" className="text-blue-600 hover:text-blue-800 hover:underline">info@antwi-boasiako.com</a></p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link
                    href="/books/gallery"
                    className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      window.gtag?.('event', 'continue_to_website_click', {
                        event_category: 'engagement',
                        event_label: 'continue_to_books_gallery'
                      });
                      onClose();
                      // Navigate after the modal has started closing
                      setTimeout(() => {
                        window.location.href = '/books/gallery';
                      }, 300);
                    }}
                  >
                    Get your copy
                  </Link>
                  
                  <Link
                    href="/concept-note"
                    className="flex items-center justify-center gap-2 w-full border border-gray-300 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      window.gtag?.('event', 'concept_note_click', {
                        event_category: 'engagement',
                        event_label: 'view_concept_note'
                      });
                      onClose();
                      // Navigate after the modal has started closing
                      setTimeout(() => {
                        window.location.href = '/concept-note';
                      }, 300);
                    }}
                  >
                    <Play size={18} />
                    Watch Concept Note Video
                  </Link>
                  
                  <Link
                    href="/concept-note"
                    className="flex items-center justify-center gap-2 w-full border border-gray-300 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      window.gtag?.('event', 'synopsis_click', {
                        event_category: 'engagement',
                        event_label: 'read_synopsis'
                      });
                      onClose();
                      // Navigate after the modal has started closing
                      setTimeout(() => {
                        window.location.href = '/concept-note';
                      }, 300);
                    }}
                  >
                    <FileText size={18} />
                    Read Synopsis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
