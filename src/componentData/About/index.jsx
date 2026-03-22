"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Aos from "aos";
import Link from "next/link";
const Profile1 = "/image/aboutpics.png";
import { Geist } from 'next/font/google'

const geist = Geist({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const About = () => {
  const [isMore, setIsMore] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const handleScroll = (e) => {
    const container = e.target;
    const isAtTop = container.scrollTop === 0;
    const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;

    setShowUpArrow(!isAtTop);
    setShowDownArrow(!isAtBottom);
  };

  const data = [
    // {
    //   title: "4th Ghana Fintech Awards",
    //   description: "Keynote Speaker, 4th Ghana Fintech Awards",
    //   date: "1st March, 2025",
    //   status: "Done",
    //   link: null
    // },
    {
      title: "Book Launch : French Version",
      description: "Les 10 commandements pour un développement national durable de la cybersécurité L'Afrique en contexte : leçons pratiques et bonnes pratiques",
      date: "4th February, 2025",
      status: "Done",
      link: null
    },
    {
      title: "ISACA Seminar",
      description: "Highlights from my address at the ISACA Seminar on 'Cybersecurity in Ghana: The Present & The Future'.",
      date: "24th January, 2025",
      status: "Done",
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7288806687048634369/'
    },
    {
      title: "Tech in Ghana",
      description: "It was encouraging to see a number of young people pursuing different interests in Tech including cybersecurity",
      date: "26th November, 2024",
      status: "Done",
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7267688266072559616/'
    },
    {
      title: "Book Launch: English Version",
      description: "The Ten Commandments for Sustainable National Cybersecurity Development – Africa in Context: Practical Lessons and Good Practices.",
      date: "12th August, 2021",
      status: "Done",
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7266106496181010432/'
    }
  ];

  return (
    <section className="w-full mt-13 h-auto bg-[#0d0b0a] md:p-5 p-3">
      <div data-aos="fade-up" className="w-full h-full md:py-[30px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto w-full block md:flex items-start gap-5  border-b border-[#464646] pb-10"
        >
          <div className="w-full flex flex-col md:flex-row items-center md:gap-[50px] gap-[10px] md:p-5 p-3 rounded-md">
            <div className="w-full h-full md:order-1 order-2">
              <div className="w-full flex flex-col items-start justify-start ">
                <motion.h1
                  className={`${geist.variable} md:text-2xl text-xl font-bold text-stone-200`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  About <span className=" serif_font text-xl md:text-2xl "> Dr. Albert Antwi-Boasiako</span>
                </motion.h1>
                <hr className="md:w-[5%] w-[15%] my-1" />
              </div>
              <div className="flex flex-col items-start mt-3">
                <p className="text-base font-normal text-[#E7E5E4] md:text-justify text-wrap">
                Dr. Albert Antwi-Boasiako is a cybersecurity expert and author and served as the first Director-General of the Cyber Security Authority (CSA) of Ghana.
                </p>
                <p className="text-base font-normal text-[#E7E5E4] md:text-justify text-wrap mt-3">
                Prior to his appointment into public office, he founded the e-Crime Bureau in 2011, the first cybersecurity and digital forensics firm with a dedicated digital forensics lab to be established and operate in West Africa.
                </p>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="w-fit h-[38px] mt-5 md:block py-1 px-3 bg-[#242322]  border-stone-800 hover:border-stone-800 hover:bg-transparent cursor-pointer  text-xs text-stone-300"
                >
                  <Link href="/about" className="md:text-sm text-base font-normal">
                    Read more
                  </Link>
                </motion.button>
              </div>
            </div>
            <div className="w-full h-full mb-4 md:mb-0 mt-5 md:mt-0 flex items-center md:order-2 order-1">
              <div className="md:h-[350px] w-full h-[340px] relative rounded-xl aspect-square object-cover max-w-[562px] overflow-hidden">
                <Image
                  src={Profile1}
                  alt="user"
                  width={1000}
                  height={1000}
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-[#0000003a] rounded-xl"></div>
              </div>
            </div>
          </div>
         
        </motion.div>
      </div>
    </section>
  );
};

export default About;