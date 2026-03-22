'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const InstagramModal = ({ isOpen, onClose, posts, currentPostIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(currentPostIndex);

  // Update currentIndex when currentPostIndex prop changes
  useEffect(() => {
    setCurrentIndex(currentPostIndex);
  }, [currentPostIndex]);

  if (!isOpen) return null;

  const currentPost = posts[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Previous post"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Next post"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Modal Content */}
      <div 
        className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side - Media */}
        <div className="flex-1 relative bg-black">
          <div className="relative w-full h-full min-h-[500px]">
            <Image
              src={currentPost.image}
              alt={currentPost.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-[400px] flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-300">
              <img 
                src="/image/logo_silver.png" 
                alt="Antwi-Boasiako Publications"
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  e.target.src = '/image/logo_silver-old.png';
                }}
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">antwibosiakopublications</p>
            </div>
          </div>

          {/* Caption */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-sm mr-2">antwibosiakopublications</span>
                <span className="text-sm text-gray-800 leading-relaxed">
                  {currentPost.caption}
                </span>
              </div>
              
              {currentPost.hashtags && (
                <div className="text-sm text-blue-600">
                  {currentPost.hashtags}
                </div>
              )}
              
              <div className="text-xs text-gray-500 mt-4">
                {currentPost.date}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m9.032 4.026A9.001 9.001 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramModal;
