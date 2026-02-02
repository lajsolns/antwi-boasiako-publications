"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/componentData/Footer";
import Navigation from "@/componentData/NavBar";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

import Aos from "aos";
import thumbnailUrl from "../../../public/image/thumbnail.png";

const VideoModal = ({ video, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl mx-4"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <IoClose size={32} />
        </button>
        <video
          src={video}
          controls
          autoPlay
          className="w-full aspect-video"
        />
      </motion.div>
    </motion.div>
  );
};

const GallaryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setShowModal(true);
  };

  return (
    <div className="w-svw h-full font-[family-name:var(--font-geist-sans)] rounded-md">
      <main className="w-full h-full rounded-md shadow-sm">
        <nav className="w-full rounded-md sticky top-0 left-0 z-50">
          <Navigation />
        </nav>
        <div className="w-full md:h-[30vh] h-[20vh] bg-stone-950 p-3">
          <div className="w-full h-full flex flex-col justify-center container mx-auto">
            <h1 className="text-stone-200 md:text-4xl text-2xl font-bold serif_font">
              Video Gallery
            </h1>
          </div>
        </div>
        <section className="w-full min-h-screen md:py-[30px] bg-stone-900 px-2 pt-5 pb-6 relative z-10">
          <div 
            className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10 z-0 pointer-events-none"
            style={{ 
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center'
            }}
          ></div>
          {/* Desktop Grid View */}
          <div className="w-full container mx-auto hidden md:grid grid-cols-3 gap-5 relative z-10">
            <div
              data-aos="fade-up"
              className="w-full h-auto object-cover overflow-hidden bg-stone-950"
            >
              <div 
                className="w-full h-[27vh] aspect-video relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(0)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => handleVideoClick("https://res.cloudinary.com/lajsolns-gmail-com/video/upload/v1765181489/rux3qgjvoxg6gb8kfikl.mp4")}
              >
                <video
                  width="100%"
                  height="100%"
                  controls={true}
                  preload="auto"
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                  poster="/image/events/book_highlights.png"
                >
                  <source
                    src="https://res.cloudinary.com/lajsolns-gmail-com/video/upload/v1765181489/rux3qgjvoxg6gb8kfikl.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: isHovered === 0 ? 1 : 0.8, opacity: isHovered === 0 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
                  >
                    <FaPlay className="text-black text-lg md:text-xl ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="w-full py-3">
                <h1 className="text-stone-300 text-sm font-normal p-2">
                  <strong>BOOK LAUNCH HIGHLIGHTS: </strong> THE REPUBLIC: A Professional Journey, Ghana&apos;s Cybersecurity & the Making of a Role Model Country
                </h1>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-auto object-cover overflow-hidden bg-stone-950"
            >
              <div 
                className="w-full h-[27vh] aspect-video relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(1)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => handleVideoClick("https://res.cloudinary.com/dnkvwgxxn/video/upload/v1738054435/isaca_seminar_compressed_twequw.mp4")}
              >
                <video
                  width="100%"
                  height="100%"
                  controls={true}
                  preload="auto"
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                  poster="/image/isaka_awards.png"
                >
                  <source
                    src="https://res.cloudinary.com/dnkvwgxxn/video/upload/v1738054435/isaca_seminar_compressed_twequw.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: isHovered === 1 ? 1 : 0.8, opacity: isHovered === 1 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
                  >
                    <FaPlay className="text-black text-lg md:text-xl ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="w-full py-3">
                <h1 className="text-stone-300 text-sm font-normal p-2">
                  <strong>ISACA SEMINAR: </strong>Highlights from my address at
                  the ISACA Seminar on &apos;Cybersecurity in Ghana: The Present
                  & The Future&apos;.
                </h1>
              </div>  
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-auto object-cover overflow-hidden bg-stone-950"
            >
              <div 
                className="w-full h-[27vh] aspect-video relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(2)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => handleVideoClick("https://res.cloudinary.com/dnkvwgxxn/video/upload/v1732422376/10cmd_compressed_iv0pge.mp4")}
              >
                <video
                  width="100%"
                  height="100%"
                  controls={true}
                  preload="auto"
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                  poster="/image/documentary.png"
                >
                  <source
                    src="https://res.cloudinary.com/dnkvwgxxn/video/upload/v1732422376/10cmd_compressed_iv0pge.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: isHovered === 2 ? 1 : 0.8, opacity: isHovered === 2 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
                  >
                    <FaPlay className="text-black text-lg md:text-xl ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="w-full py-3">
                <h1 className="text-stone-300 text-sm font-normal p-2">
                  <strong>DOCUMENTARY:</strong> The 10 Commandments for
                  Sustainable National Cybersecurity Development
                </h1>
              </div>
            </div>
            {/* <div
              data-aos="fade-up"
              className="w-full h-auto object-cover overflow-hidden bg-stone-950"
            >
              <div 
                className="w-full h-[27vh] aspect-video relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(3)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => handleVideoClick("https://firebasestorage.googleapis.com/v0/b/image-hub-cbcb2.appspot.com/o/booklaunch%20(1).mp4?alt=media&token=ffa2122d-c332-4678-b76a-796092bf7c1f")}
              >
                <video
                  width="100%"
                  height="100%"
                  controls={true}
                  preload="auto"
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                  poster="/image/book_launch.png"
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/image-hub-cbcb2.appspot.com/o/booklaunch%20(1).mp4?alt=media&token=ffa2122d-c332-4678-b76a-796092bf7c1f"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: isHovered === 3 ? 1 : 0.8, opacity: isHovered === 3 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
                  >
                    <FaPlay className="text-black text-lg md:text-xl ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="w-full py-3">
                <h1 className="text-stone-300 text-sm font-normal p-2">
                  <strong>BOOK LAUNCH HIGHLIGHTS: </strong> THE REPUBLIC: A Professional Journey, Ghana&apos;s Cybersecurity & the Making of a Role Model Country
                </h1>
              </div>
            </div> */}
          </div>

          {/* Mobile List View */}
          <div className="w-full container mx-auto md:hidden flex flex-col gap-4 relative z-10">
            <div
              data-aos="fade-up"
              className="w-full border-b border-stone-700 pb-4"
            >
              <div 
                className="relative group cursor-pointer flex flex-row gap-4 items-center"
                onMouseEnter={() => setIsHovered(0)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => handleVideoClick("https://res.cloudinary.com/lajsolns-gmail-com/video/upload/v1765181489/rux3qgjvoxg6gb8kfikl.mp4")}
              >
                <div className="relative aspect-[16/9] overflow-hidden w-1/3 flex-shrink-0">
                  <Image 
                    src="/image/events/book_highlights.png" 
                    alt="Book Launch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 300px"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: isHovered === 0 ? 1 : 0.8, opacity: isHovered === 0 ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
                    >
                      <FaPlay className="text-black text-lg ml-1" />
                    </motion.div>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-semibold text-stone-200 leading-tight group-hover:text-stone-100 transition-colors duration-200">
                    BOOK LAUNCH HIGHLIGHTS
                  </h3>
                  <p className="text-stone-400 text-sm">
                    THE REPUBLIC: A Professional Journey, Ghana&apos;s Cybersecurity & the Making of a Role Model Country
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="w-full border-b border-stone-700 pb-4"
            >
              <div 
                className="relative group cursor-pointer flex flex-row gap-4 items-center"
                onMouseEnter={() => setIsHovered(1)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => handleVideoClick("https://res.cloudinary.com/dnkvwgxxn/video/upload/v1738054435/isaca_seminar_compressed_twequw.mp4")}
              >
                <div className="relative aspect-[16/9] overflow-hidden w-1/3 flex-shrink-0">
                  <Image 
                    src="/image/isaka_awards.png" 
                    alt="ISACA Seminar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 300px"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: isHovered === 1 ? 1 : 0.8, opacity: isHovered === 1 ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
                    >
                      <FaPlay className="text-black text-lg ml-1" />
                    </motion.div>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-semibold text-stone-200 leading-tight group-hover:text-stone-100 transition-colors duration-200">
                    ISACA SEMINAR: Cybersecurity in Ghana
                  </h3>
                  <p className="text-stone-400 text-sm">
                    Highlights from my address at the ISACA Seminar
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="w-full border-b border-stone-700 pb-4"
            >
              <div 
                className="relative group cursor-pointer flex flex-row gap-4 items-center"
                onMouseEnter={() => setIsHovered(2)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => handleVideoClick("https://res.cloudinary.com/dnkvwgxxn/video/upload/v1732422376/10cmd_compressed_iv0pge.mp4")}
              >
                <div className="relative aspect-[16/9] w-1/3 flex-shrink-0">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/image/documentary.png" 
                      alt="Documentary"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 300px"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: isHovered === 2 ? 1 : 0.8, opacity: isHovered === 2 ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
                    >
                      <FaPlay className="text-black text-lg ml-1" />
                    </motion.div>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-semibold text-stone-200 leading-tight group-hover:text-stone-100 transition-colors duration-200">
                    DOCUMENTARY: The 10 Commandments
                  </h3>
                  <p className="text-stone-400 text-sm">
                    Sustainable National Cybersecurity Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AnimatePresence>
          {showModal && (
            <VideoModal
              video={selectedVideo}
              onClose={() => setShowModal(false)}
            />
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default GallaryPage;
