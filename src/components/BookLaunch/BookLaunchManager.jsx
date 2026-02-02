'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// Simple loading component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

// Import components with dynamic imports
const FullPageModal = dynamic(
  () => import('./FullPageModal').then(mod => mod.default || mod),
  { 
    ssr: false,
    loading: () => <LoadingSpinner />
  }
);

const StickyBanner = dynamic(
  () => import('./StickyBanner').then(mod => mod.default || mod).catch(err => {
    console.error('Failed to load StickyBanner:', err);
    return () => null; // Return empty component on error
  }),
  { 
    ssr: false,
    loading: () => <div className="h-16 bg-blue-600 text-white flex items-center justify-center">Loading banner...</div>
  }
);

export default function BookLaunchManager() {
  const [showFullModal, setShowFullModal] = useState(true);
  const [showStickyBanner, setShowStickyBanner] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle route changes
  useEffect(() => {
    const isBookPage = pathname.startsWith('/books/') || pathname === '/books/gallery';
    const isCheckoutPage = pathname.startsWith('/checkout');
    const isPublicationsPage = pathname.startsWith('/publications');
    
    if (pathname === '/concept-note' || pathname === '/gallery' || isBookPage || isCheckoutPage || isPublicationsPage) {
      setShowFullModal(false);
      setShowStickyBanner(false);
    } else if (!pathname.includes('concept-note') && !pathname.includes('gallery') && !isBookPage && !isCheckoutPage && !isPublicationsPage && !showFullModal && !showStickyBanner) {
      // Only show the sticky banner if we're not on the concept-note, gallery, book, checkout, or publications pages
      // and neither modal nor banner is currently shown
      setShowStickyBanner(true);
    }
  }, [pathname, showFullModal, showStickyBanner]);

  const handleModalClose = () => {
    setShowFullModal(false);
    setShowStickyBanner(true);
  };

  const handleStickyBannerClick = () => {
    setShowFullModal(true);
    setShowStickyBanner(false);
  };

  // Only render on client-side
  if (!isClient) return null;

  return (
    <>
      {showFullModal && (
        <FullPageModal 
          onClose={handleModalClose}
        />
      )}
      
      {showStickyBanner && (
        <StickyBanner 
          onLearnMore={handleStickyBannerClick}
        />
      )}
      

    </>
  );
}
