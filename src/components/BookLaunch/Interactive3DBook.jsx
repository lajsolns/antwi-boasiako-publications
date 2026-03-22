'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

export default function Interactive3DBook() {
  const [isOpen, setIsOpen] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const hasSeen = sessionStorage.getItem('seen3DBook');
    if (hasSeen) {
      setIsOpen(false);
    } else {
      sessionStorage.setItem('seen3DBook', 'true');
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      >
        <div className="relative w-full max-w-4xl h-[80vh] md:h-[70vh]">
          <button
            onClick={handleClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <div className="perspective-1000 w-full h-full">
            <motion.div
              className="book-3d"
              animate={{ 
                rotateY: isFlipped ? 180 : 0,
                scale: isMobile ? 0.9 : 1
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.4, 0.03, 0.2, 1] 
              }}
            >
              {/* Front Cover */}
              <div 
                className="book-cover"
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/image/events/book_launch.jpeg)'
                }}
                onClick={() => setIsFlipped(true)}
              >
                <div className="mt-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">THE REPUBLIC</h2>
                  <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                    A professional journey, Ghana&apos;s Cybersecurity & the Making of a role model country
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium whitespace-nowrap">
                      Coming November 25, 2025
                    </span>
                    <button 
                      className="text-white hover:underline text-left"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFlipped(true);
                      }}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>

              {/* Back Cover */}
              <div className="book-back">
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">About the Book</h3>
                  <p className="text-gray-700 mb-6 flex-grow text-justify">
                    This groundbreaking book takes you through the remarkable journey of Ghana&apos;s 
                    cybersecurity evolution and the visionary leadership that made it possible. 
                    A must-read for professionals, policymakers, and anyone interested in 
                    digital transformation and national development.
                  </p>
                  
                  <div className="space-y-4 bg-white/50 p-4 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Event Details</h4>
                      <p className="text-gray-700">📅 November 25, 2025</p>
                      <p className="text-gray-700">📍 British Council Ridge, Accra</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-4">
                        Organized by <span className="font-medium">Antwi-Boasiako Publications</span>
                      </p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://example.com/reserve', '_blank');
                        }}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-md transition-all transform hover:scale-[1.02] active:scale-95 shadow-md"
                      >
                        Reserve Your Copy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
