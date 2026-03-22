"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import Aos from "aos";
import { Geist } from 'next/font/google';
import Link from "next/link";

const geist = Geist({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const data = [
  {
    poster: "/image/events/book_highlights.png",
    video:
      "https://res.cloudinary.com/lajsolns-gmail-com/video/upload/v1765181489/rux3qgjvoxg6gb8kfikl.mp4",
    title: "BOOK LAUNCH HIGHLIGHTS:",
    subTitle: "THE REPUBLIC: A Professional Journey, Ghana's Cybersecurity & the Making of a Role Model Country",
    subTitle2: "",
    date: ""
  },
  {
    poster: "/image/the_republic.png",
    video:
      "https://res.cloudinary.com/lajsolns-gmail-com/video/upload/v1764056467/ycvkv0ov3owpy8hbfmaa.mp4",
    title: "BOOK LAUNCH ALERT:",
    subTitle: "THE REPUBLIC: A Professional Journey, Ghana's Cybersecurity & the Making of a Role Model Country",
    subTitle2: "",
    date: ""

  },
  {
    poster: "/image/documentary_book.png",
    video:
      "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1732422376/10cmd_compressed_iv0pge.mp4",
    title:
      "DOCUMENTARY: The 10 Commandments",
    subTitle: "AFRICA IN CONTEXT:",
    subTitle2: "PRACTICAL LESSONS & GOOD PRACTICES",
    date: "Sustainable National Cybersecurity Development"

  },
  // {
  //   poster: "/image/isaka_awards.png",
  //   video:
  //     "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1738054435/isaca_seminar_compressed_twequw.mp4",
  //   title: "ISACA SEMINAR: Cybersecurity in Ghana",
  //   subTitle: "Highlights from my address at the ISACA Seminar on 'Cybersecurity in Ghana: The Present & The Future'.",
  //   subTitle2: "Ensure a secure and resilient digital Ghana.",
  //   date: "Highlights from my address at the ISACA Seminar"
  // },
  // {
  //   poster: "/image/book_launch.png",
  //   video:
  //     "https://firebasestorage.googleapis.com/v0/b/image-hub-cbcb2.appspot.com/o/booklaunch%20(1).mp4?alt=media&token=ffa2122d-c332-4678-b76a-796092bf7c1f",
  //   title: "BOOK LAUNCH ALERT:",
  //   subTitle: "The 10 Commandments for Sustainable National Cybersecurity Development",
  //   subTitle2: "",
  //   date: "The 10 Commandments forSustainable National Cybersecurity Development"

  // }
];

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

const VideoCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="relative group cursor-pointer flex flex-row md:flex-col gap-4 items-center md:items-start"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
      >
        <div className="relative aspect-[16/9] overflow-hidden w-1/3 flex-shrink-0 md:w-full md:flex-shrink">
          <Image 
            src={item.poster} 
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 33vw, 100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center"
            >
              <FaPlay className="text-black text-lg md:text-xl ml-1" />
            </motion.div>
          </div>
        </div>
        <div className="flex-1 space-y-1 md:pl-0 md:mt-4">
          <h3 className={`${geist.variable} text-sm md:text-xl font-semibold text-stone-200 leading-tight group-hover:text-stone-100 transition-colors duration-200`}>
            {item.title}
          </h3>
       
          <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-200 hidden md:block">
            {item.subTitle} {item.subTitle2}
          </p>
          <p className="text-stone-400 text-sm md:hidden">
            {item.date}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <VideoModal
            video={item.video}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Customers = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="w-full h-auto bg-[#0d0b0a] p-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full py-[40px] container mx-auto flex flex-col gap-10"
      >
        <div data-aos="fade-up" className="w-full">
          <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full flex items-center justify-between border-b border-stone-700  md:border-none ">
              <motion.h1
                className={`${geist.variable} md:text-2xl text-2xl font-semibold text-stone-200 border-[#464646] inline-block`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.7 }}
              >
                Video <span className="serif_font text-2xl">publications</span>
              </motion.h1>
              <Link 
                href="/gallery" 
                className="text-stone-200 hover:text-stone-100 hover:underline transition-colors duration-200 text-sm font-medium flex items-center group"
              >
                  <span>View all</span>
                 <MdKeyboardArrowRight size={25} />
                </Link>
            </div>
            <hr className="md:w-[3%] " />
          </div>
        </div>

        <div data-aos="fade-up" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {data.map((item, index) => (
              <div key={index} className="w-full border-b border-stone-700 pb-4 md:border-none md:pb-0">
                <VideoCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Customers;
