"use client";
import React, { useRef } from "react";
import Image from "next/image";
const Profilemovile = "/image/CEO 1 1.png"
const Profile1 = "/image/CEO_mirror.png"
const Profile2 = "/image/IMG_9663 2.png"
const FrontCover = "/image/Front_cover_french.png"
const BookMockupEnglish = "/image/book_mockup_english.png"
const BookMockupFrench = "/image/book_mockup_french.png"
const BookMountRepublic = "/image/books/the_republic.png"
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const ItsOutPic = "/image/itsout.jpeg";
import { EB_Garamond, Geist, Inter } from "next/font/google";
import { Cormorant } from "next/font/google";

// fonts
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

// Initialize Inter with desired weights and subsets
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap', // Ensures text is visible during font loading
});

const HomeHero = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const data = [
    {
      url: Profile1,
      des0: "",
      des1: "Dr Albert Antwi-Boasiako",
      des2: "A Forward-thinking Professional",
      des3: "",
      des4: "",
      cta: "Get in touch",
    },

    {
      url: BookMountRepublic,
      des1: "",
      des2: "",
      des3: "A Professional Journey, Ghana's Cybersecurity &",
      des4: "The Making of a role model country",
      des5: "",
      des6: "THE REPUBLIC",
      cta: "Get your copy",
    },

    {
      url: BookMockupEnglish,
      des1: "Sustainable National ",
      des2: "",
      des3: "AFRICA IN CONTEXT: ",
      des4: "PRACTICAL LESSONS & GOOD PRACTICES",
      des5: "The 10 Commandments for",
      des6: "Cybersecurity Development",
      cta: "Get your copy",
    },

    {
      url: BookMockupFrench,
      des1: "Développement National ",
      des2: "",
      des3: "L'AFRIQUE DANS SON CONTEXTE: ",
      des4: "LEÇONS PRATIQUES ET BONNES PRATIQUES",
      des5: "Les 10 Commandements pour UN",
      des6: "Durable de la Cybersécurité",
      cta: "Obtenir une copie",
    },
  ];
  return (
    <div className="w-full relative h-auto bg-[#000] bg-[url('/image/landingpage.png')] bg-cover bg-center bg-no-repeat ">
      <Swiper
        ref={swiperRef}
        loop={true}
        effect={"fade"}
        fadeEffect={{
          crossFade: true
        }}
        speed={1000}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          resumeOnMouseLeave: true
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet"
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full pb-6 ">
            <div className="w-full  md:w-4/5 h-full relative md:flex block items-center container mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full  hidden md:flex flex-col md:justify-center md:pt-10 text-start relative z-20"
              >
                <p className="md:text-4xl text-2xl serif_font text-stone-200">{item?.des0}</p>

                <h2
                  className={`${inter.className} ${index === 0 ? "" : "mt-7"} text-stone-200 uppercase md:text-lg text-lg font-base pb-2`}
                >
                  {item.des5}{" "}
                </h2>

                <h1
                  className={`${index === 0 ? " md:text-5xl text-2xl serif_font text-stone-200 mb-2 border-b-2 border-stone-400 pb-1 w-fit" : `uppercase  md:text-left ${inter.className}`} leading- text-stone-200  md:text-3xl text-2xl/3 font-semibold `}
                >
                  {item.des1}
                </h1>
                <span className="text-lg md:text-xl font-normal block text-stone-200 serif_font">{item.des2}</span>

                <h1
                  className={`${inter.className} ${index === 0 ? " mb-8" : "border-b uppercase border-[#464646] w-fit pb-5"} leading- text-stone-200  md:text-3xl text-2xl/3 font-semibold`}
                >
                  {item.des6}
                </h1>

                <h2
                  className={`${inter.className} ${index === 0 ? "" : "mt-4"} text-stone-200 uppercase md:text-lg text-lg font-normal`}
                >
                  {item.des3}{" "}
                </h2>
                <h2
                  className={`${index === 0 ? "" : "mb-3"} text-stone-200 text-lg uppercase font-normal `}
                >
                  {item.des4}{" "}
                </h2>

                <Link href={index === 0 ? "/contact" : "/books/gallery"}>
                  <button className={`${index === 0 ? "-mt-4" : "mt-2"} w-auto min-w-[120px] px-4 h-[40px] border border-stone-400 transition-all ease-out delay-100 bg-stone-200 hover:bg-stone-200 text-stone-900 hover:text-stone-900 font-normal rounded-md text-base cursor-pointer relative z-30`}>
                    {item.cta}
                  </button>
                </Link>
              </motion.div>




              {/* mobile view for home slide */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-auto  relative flex items-center justify-center mb-2"
              >
                <div className="w-full h-full flex justify-center md:items-center">
                  <div className={`w-full ${index === 0 ? 'h-[50vh]' : 'h-[45vh]'} md:h-[85vh] lg:h-[85vh] max-h-[600px] lg:max-h-[600px] xl:max-h-[600px] relative rounded-lg md:pt-14 pt-4`}>
                    <Image
                      src={item.url}
                      width={1000}
                      height={1000}
                      alt="user"
                      className="w-full h-full object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full h-[50vh] md:hidden absolute top-0 left-0 md:bg-gradient-to-b from-[#00000000] via-[#00000091] to-[#00000070] flex flex-col items-end justify-end z-20">
            </div>
            <div className="w-full h-full ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full hidden md:flex items-center justify-between px-8"
              >
                <div
                  onClick={handlePrev}
                  className="w-[40px] h-[40px] rounded-full border border-[#fff] hover:bg-white text-stone-100 hover:text-stone-950 flex items-center justify-center"
                >
                  <MdKeyboardArrowLeft className="text-base  cursor-pointer" />
                </div>

                <div
                  onClick={handleNext}
                  className="w-[40px] h-[40px] rounded-full border border-[#fff] hover:bg-white text-stone-100 hover:text-stone-950 flex items-center justify-center"
                >
                  <MdKeyboardArrowRight className="text-base  cursor-pointer" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full flex md:hidden container mx-auto p-5 flex-col justify-end items-endxw text-start gap-2"
              >
                <div className="w-full pb-1 gap-0">

                <h2
                  className={`${inter.className} ${index === 0 ? "" : "mt-7"} text-stone-200 uppercase md:text-xl text-sm font-base pb-2`}
                >
                  {item.des5}{" "}
                </h2>
                  <h1 className={`${index === 0 ? "md:text-5xl text-2xl serif_font text-stone-200 mt-1 border-b-2 border-stone-400 pb-0 w-fit" : "uppercase border-[#464646] text-stone-200 text-xl font-bold"}`}>
                    {item.des1}
                  </h1>
                 

                  <h1 className={`${index === 0 ? "-mt-1" : "uppercase border-[#464646]"} text-stone-200 text-xl font-bold`}>
                    {item.des6}
                  </h1>
                </div>

                <h1 className={`${index === 0 ? "serif_font" : "border-b uppercase border-[#464646]"} text-stone-200 text-base font-normal text-wrap mb-2`}>
                  {item.des2}
                </h1>

                <h2 className={`${inter.className} text-stone-200 text-sm font-normal -mb-2`}>
                  {item.des3}{" "}
                </h2>
                <h2 className={`${inter.className} text-stone-200 text-sm font-normal`}>
                  {item.des4}{" "}
                </h2>

                <Link href={index === 0 ? "/contact" : "/books/gallery"}>
                  <button className={`${index === 0 ? "mt-0" : "mt-2"} w-auto min-w-[120px] px-4 h-[40px] border border-stone-400 transition-all ease-out delay-100 bg-stone-200 text-stone-900 hover:bg-stone-200 hover:text-stone-900 font-normal rounded-md text-base cursor-pointer relative z-30`}>
                    {item.cta}
                  </button>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHero;
