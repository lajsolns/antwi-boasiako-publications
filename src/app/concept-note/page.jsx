"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from "@/componentData/NavBar";
import Footer from '@/componentData/Footer';

const ConceptNotePage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const pdfContainerRef = useRef(null);
  
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      const pdfViewer = pdfContainerRef.current;
      if (pdfViewer.requestFullscreen) {
        pdfViewer.requestFullscreen().catch(err => {
          console.error('Error attempting to enable fullscreen:', err);
        });
      } else if (pdfViewer.webkitRequestFullscreen) {
        pdfViewer.webkitRequestFullscreen();
      } else if (pdfViewer.msRequestFullscreen) {
        pdfViewer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Set launch date to November 25, 2025 at 6:00 PM GMT
    const launchDate = new Date("2025-11-25T18:00:00+00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      
      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000))
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0b0a] text-stone-200">
      <nav className="w-full sticky top-0 z-50 bg-[#0d0b0a] shadow-md shadow-black/20">
        <Navigation />
      </nav>
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="text-stone-400 hover:text-stone-200 mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold mb-4">THE REPUBLIC</h1>
            <p className="text-lg text-stone-400 mb-6">A Professional Journey, Ghana&apos;s Cybersecurity & the Making of a Role Model Country</p>
            
            {/* Countdown Timer */}
            {/* <div className="grid grid-cols-4 gap-3 max-w-xl mx-auto mb-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-[#292524] p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-xs uppercase tracking-wider text-stone-400">{unit}</div>
                </div>
              ))}
            </div>
             */}
            {/* <div className="space-y-1 text-stone-300 text-base">
              <p>
                <span className="font-medium">Date:</span> November 25, 2025 at 6:00 PM
              </p>
              <p>
                <span className="font-medium">Location:</span> British Council, Ridge Accra
              </p>
            </div> */}
          </div>

          {/* PDF Viewer Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              {/* <h2 className="text-xl sm:text-2xl font-semibold">Concept Note</h2> */}
              <button 
                onClick={toggleFullscreen}
                className="md:hidden px-4 py-2 bg-stone-700 text-stone-200 rounded-md text-sm hover:bg-stone-600 transition-colors flex items-center gap-2"
              >
                {isFullscreen ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Exit Fullscreen
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    Fullscreen
                  </>
                )}
              </button>
            </div>
            <div 
              ref={pdfContainerRef}
              className="bg-[#1c1917] rounded-lg overflow-hidden pdf-viewer-container relative"
            >
              {isFullscreen && (
                <button 
                  onClick={toggleFullscreen}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/70 text-white rounded-full hover:bg-black transition-colors"
                  aria-label="Exit fullscreen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <div className="w-full h-[70vh] lg:h-[85vh] xl:h-[90vh] max-w-6xl mx-auto">
                <iframe 
                  src="/documents/BACK_COVER_INFORMATION.pdf" 
                  className="w-full h-full"
                  title="Concept Note - Book Launch of THE REPUBLIC"
                />
              </div>
              <p className="sr-only">
                Your browser does not support PDFs. 
                <a href="/documents/BACK_COVER_INFORMATION.pdf">
                  Download the synopsis
                </a>.
              </p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <a 
                href="/documents/BACK_COVER_INFORMATION.pdf" 
                download
                className="px-6 py-3 bg-[#292524] text-stone-200 rounded-lg hover:bg-[#3a3634] transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download synopsis (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConceptNotePage;
