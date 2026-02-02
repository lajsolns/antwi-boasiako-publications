"use client";
import React, { useEffect } from "react";
import Image from "next/image";
const Speech = "/image/speech.jpg";
const MediaSpeech = "/image/media_speech.png";
const Signing = "/image/signing.png";
const Media = "/image/media_interview.jpg";
const OvalSitting = "/image/oval_sitting.jpg";
import Aos from "aos";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const compress1 = "/compressed/1.png"
const compress2 = "/compressed/2.png"
const compress3 = "/compressed/3.png"
const compress4 = "/compressed/4.png"
const compress5 = "/compressed/5.png"
const compress6 = "/compressed/6.png"
const compress7 = "/compressed/7.png"

import { Geist } from 'next/font/google'

const geist = Geist({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const data = [
  {
    image: Speech,
    details:
      "Dr Albert Antwi-Boasiako delivering a speech to Graduating Students at the University of Trento, Italy",
  },
  {
    image: Signing,
    details:
      "Signing of a Memorandum of Understanding between Ghana and Rwanda on Cybersecurity Cooperation",
  },
  {
    image: Media,
    details:
      "Returning to Trento - Dr Antwi-Boasiako being interviewed by Journalist at Trento, Italy",
  },
  {
    image: OvalSitting,
    details:
      "Dr Antwi-Boasiako with President of the World Economic Forum and Other Cyber Chiefs at a Meeting in Geneva, Switzerland",
  },
];


const data5 = [
  {
    image: compress1,
    details:
      "Dr Albert Antwi-Boasiako delivering a speech to Graduating Students at the University of Trento, Italy",
  },
  {
    image: compress2,
    details:
      "Signing of a Memorandum of Understanding between Ghana and Rwanda on Cybersecurity Cooperation",
  },
  {
    image: compress3,
    details:
      "Returning to Trento - Dr Antwi-Boasiako being interviewed by Journalist at Trento, Italy",
  },
  {
    image: compress4,
    details:
      "Dr Antwi-Boasiako with President of the World Economic Forum and Other Cyber Chiefs at a Meeting in Geneva, Switzerland",
  },
];

const Topics = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <section id="media" className="w-full h-auto bg-[#0d0b0a] p-5 md:pt-16 md:pb-16">
      <div data-aos="fade-up" className="w-full h-full container mx-auto flex flex-col gap-9 relative z-10">
        <div 
          className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10 z-0 pointer-events-none"
          style={{ 
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}
        />
        <div className="w-full flex flex-col items-start justify-start border-b border-stone-700 md:border-none  ">
          <div className="w-full flex items-center justify-between">
            <motion.h1
              className={`${geist.variable} md:text-2xl text-2xl font-semibold text-stone-200`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Image <span className="text-2xl serif_font">Gallery</span>
            </motion.h1>
            <Link 
              href="/images" 
              className="text-stone-200 hover:text-stone-100 transition-colors duration-200 text-sm font-medium flex items-center group"
            >
              <span className="hover:underline">View all</span>
              <MdKeyboardArrowRight size={25} />
            </Link>
          </div>
          <hr className="md:w-[3%]  my-1" />
        </div>
        <div className=" w-full  grid md:grid-cols-4 grid-cols-1 gap-4 ">
          {data?.map((item, index) => (
            <motion.div
              key={index}
              className="w-full h-full bg-stone-900 shadow flex flex-col"
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(255,255,255,0.08),0 0 15px rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-full h-[40vh] md:h-[20vh] object-cover aspect-square ">
                <Link href="/images"> <Image
                    src={item.image}
                    alt="user-image"
                    width={1000}
                    height={1000}
                    className="w-full h-full  object-cover cursor-pointer"
                  />
                </Link> 
              </div>
              <div className=" flex flex-col justify-between h-full gap-2 p-2 ">
                <p className="text-sm text-stone-300 md:text-xs">{item.details}</p>
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-fit h-[40px] md:block px-3 bg-stone-800 hover:bg-black cursor-pointer text-sm text-stone-300"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link href="/images">View more</Link>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
