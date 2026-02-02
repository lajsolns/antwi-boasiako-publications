"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Aos from "aos";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import { Geist } from 'next/font/google'

const geist = Geist({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const data = [
  {
    poster: "/image/documentary_book.png",
    video:
      "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1732422376/10cmd_compressed_iv0pge.mp4",
    title:
      "THE 10 COMMANDMENTS FOR SUSTAINABLE NATIONAL CYBERSECURITY DEVELOPMENT",
    subTitle: "AFRICA IN CONTEXT:",
    subTitle2: "PRACTICAL LESSONS & GOOD PRACTICES"
  },
  {
    poster: "/image/isaka_awards.png",
    video:
      "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1738054435/isaca_seminar_compressed_twequw.mp4",
    title: "National Cyber Security Month",
    subTitle: "2022 Media launch expressed their dedication and need to",
    subTitle2: "ensure a secure and resilient digital Ghana."
  },
  {
    poster: "/image/book_launch.png",
    video:
      "https://firebasestorage.googleapis.com/v0/b/image-hub-cbcb2.appspot.com/o/booklaunch%20(1).mp4?alt=media&token=ffa2122d-c332-4678-b76a-796092bf7c1f",
    title: "National Cyber Security Month",
    subTitle: "2022 Media launch expressed their dedication and need to",
    subTitle2: "ensure a secure and resilient digital Ghana."
  }
];

const Customers = () => {
  const [emblaApi, setEmblaApi] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const handlePrevClick = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const handleNextClick = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  return (
    <div className="w-full h-auto bg-[#0d0b0a] p-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full py-[40px] container mx-auto flex flex-col gap-10 items-center "
      >
        <div data-aos="fade-up" className="w-full h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" w-full "
          >
            <div className="w-full flex flex-col items-start justify-start ">
              <div className="w-full flex items-center justify-between">
                <div>
                  <h1 className={`${geist.variable} md:text-2xl text-2xl font-semibold text-stone-200  border-[#464646] pb-1 inline-block`}>
                    Video <span className=" serif_font md:text-2xl text-2xl"> Publications</span>
                  </h1>
                  <hr className="md:w-[20%] w-[20%]" />
                </div>
                <div className="hidden md:flex gap-4 ">
                  <motion.div
                    animate={{}}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <button
                      onClick={handlePrevClick}
                      className="w-[40px] h-[40px] rounded-full border border-[#fff] hover:bg-white text-stone-100 hover:text-stone-950 flex items-center justify-center"
                    >
                      <MdKeyboardArrowLeft />
                    </button>
                  </motion.div>
                  <motion.div
                    animate={{}}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <button
                      onClick={handleNextClick}
                      className="w-[40px] h-[40px] rounded-full border border-[#fff] hover:bg-white text-stone-100 hover:text-stone-950 flex items-center justify-center"
                    >
                      <MdKeyboardArrowRight />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div data-aos="fade-up" className="w-full h-full">
          <EmblaCarousel 
            slides={SLIDES} 
            options={OPTIONS} 
            onEmblaApi={setEmblaApi}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Customers;
