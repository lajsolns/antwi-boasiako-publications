'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, FileText } from "lucide-react";

export default function FullPageModal({ onClose }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0, daysLabel: 'Days'
  });

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
        className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4 backdrop-blur-sm"
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
            <div className="relative h-80 md:h-full md:col-span-3">
              <Image
                src="/image/events/book_launch.jpeg"
                alt="Book Launch: THE REPUBLIC"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            <div className="flex flex-col justify-center md:col-span-2">
              <h2 className="text-3xl font-bold mb-4">THE REPUBLIC</h2>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                A Professional Journey, Ghana&apos;s Cybersecurity & the Making of a Role Model Country
              </p>
              
              <div className="grid grid-cols-4 gap-3 mb-6">
                {Object.entries(timeLeft).filter(([unit]) => unit !== 'daysLabel').map(([unit, value]) => (
                  <div key={unit} className="bg-gray-100 p-2.5 rounded-lg text-center">
                    <div className="text-xl font-bold">{value}</div>
                    <div className="text-xs text-gray-500">
                      {unit === 'days' ? timeLeft.daysLabel : unit}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium">Date: </span>November 25, 2025
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Location: </span>British Council, Ridge Accra
                </p>
             
                <div className="space-y-3">
                  <button
                    onClick={onClose}
                    className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Get your copy
                  </button>
                  
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
