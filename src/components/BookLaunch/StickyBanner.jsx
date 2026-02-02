'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, BookOpen } from "lucide-react";

export default function StickyBanner({ onLearnMore }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar
    const startDate = new Date("2025-10-25").getTime();
    const endDate = new Date("2025-11-25").getTime();
    const updateProgress = () => {
      const now = new Date().getTime();
      const totalDuration = endDate - startDate;
      const elapsed = now - startDate;
      const newProgress = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
      setProgress(newProgress);
    };
    
    updateProgress();
    const progressInterval = setInterval(updateProgress, 60000);
    
    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };
  
  const handleLearnMore = (e) => {
    e.preventDefault();
    onLearnMore();
  };

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-black/10">
                <BookOpen className="h-6 w-6" />
              </span>
              <p className="ml-3 font-medium truncate">
                <span className="md:hidden">OUT NOW!: THE REPUBLIC </span>
                <span className="hidden md:inline">
                  OUT NOW!: THE REPUBLIC - A Professional Journey, Ghana&apos;s Cybersecurity & the Making of a Role Model Country
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                onClick={handleLearnMore}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                onClick={handleClose}
                className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
          <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </motion.div>

    </>
  );
}
