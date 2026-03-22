"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const ProductImageSlider = ({ images, productDetails }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [thumbnailScroll, setThumbnailScroll] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleThumbnailScroll = (direction) => {
    const container = document.getElementById('thumbnail-container');
    if (!container) return;

    const scrollAmount = 100; // Adjust this value to control scroll distance
    const newScroll = direction === 'up' 
      ? Math.max(0, thumbnailScroll - scrollAmount)
      : Math.min(container.scrollHeight - container.clientHeight, thumbnailScroll + scrollAmount);
    
    container.scrollTo({
      top: newScroll,
      behavior: 'smooth'
    });
    setThumbnailScroll(newScroll);
  };

  const getCursorStyle = () => {
    if (!isHovered) return 'default';
    return 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><circle cx=\'11\' cy=\'11\' r=\'8\'/><line x1=\'21\' y1=\'21\' x2=\'16.65\' y2=\'16.65\'/><line x1=\'11\' y1=\'8\' x2=\'11\' y2=\'14\'/><line x1=\'8\' y1=\'11\' x2=\'14\' y2=\'11\'/></svg>") 12 12, auto';
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnails - Hidden on mobile */}
        <div className="hidden md:flex flex-col gap-2 w-[80px]">
          {/* Up Arrow */}
          <button
            onClick={() => handleThumbnailScroll('up')}
            className="w-full h-6 flex items-center justify-center text-stone-400 hover:text-stone-300 transition-colors"
            aria-label="Scroll thumbnails up"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>

          {/* Thumbnails Container */}
          <div 
            id="thumbnail-container"
            className="flex flex-col gap-2 overflow-y-auto scrollbar-hide"
            style={{ maxHeight: '400px' }}
          >
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  selectedImage === index
                    ? "border-stone-900 opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {selectedImage === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-stone-900" />
                )}
              </button>
            ))}
          </div>

          {/* Down Arrow */}
          <button
            onClick={() => handleThumbnailScroll('down')}
            className="w-full h-6 flex items-center justify-center text-stone-400 hover:text-stone-300 transition-colors"
            aria-label="Scroll thumbnails down"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>

        {/* Main Image Container */}
        <div className="flex-1 flex flex-col gap-2 max-h-[500px]">
          <div 
            className="relative aspect-square w-full overflow-hidden rounded-lg bg-stone-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePosition({ x: 50, y: 50 });
            }}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: getCursorStyle() }}
          >
            <Image
              src={images[selectedImage]}
              alt="Product image"
              fill
              className="object-contain transition-transform duration-200"
              style={{
                transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              }}
              priority
            />

            {/* Navigation Arrows - Always visible on mobile */}
            <div className={cn(
              "absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-200",
              "md:opacity-0 md:hover:opacity-100",
              "opacity-100"
            )}>
              <button
                onClick={handlePrevious}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-stone-900 transition-colors duration-200"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-stone-900 transition-colors duration-200"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  selectedImage === index 
                    ? "w-8 bg-white" 
                    : "w-2 bg-stone-300 hover:bg-stone-400"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col gap-4">
        {productDetails}
      </div>
    </div>
  );
};

export default ProductImageSlider; 