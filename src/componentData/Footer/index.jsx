"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


const Footer = () => {
  const [showPublications, setShowPublications] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const params = usePathname();
  const handleCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="w-full h-auto md:p-3 px-6 bg-black">
      <div className="container mx-auto py-[30px] w-full flex flex-col gap-3 items-center justify-center">
        <div className="w-full grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="w-full flex items-center justify-center">
            <Link href="/" alt="logo">
              <Image
                src="/image/logo_silver.png"
                alt="alt"
                width={180}
                height={180}
                className="md:w-[180px] md:h-[120px] w-[150px] h-[100px] cursor-pointer"
              // className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-ful mb-6">
            <ul className="flex flex-col gap-4 relative">
              <motion.li
                variants={item}
                className={`text-sm text-[#A8A29E] hover:text-stone-100 relative group w-fit ${
                  params === "/" ? "border-b border-stone-400" : ""
                }`}
              >
                <Link href="/" className={`relative ${params === "/" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Home</Link>
              </motion.li>
              <li
                className={`text-sm text-[#A8A29E] hover:text-stone-100 relative group w-fit ${
                  params === "/about" ? "border-b border-stone-400" : ""
                }`}
              >
                <Link href="/about" className={`relative ${params === "/about" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>About</Link>
              </li>
              <li
                className={`text-sm text-[#A8A29E] hover:text-stone-100 relative group w-fit ${
                  params === "/contact" ? "border-b border-stone-400" : ""
                }`}
              >
                <Link href="/contact" className={`relative ${params === "/contact" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-6">
            <ul className="flex flex-col gap-4 relative">
              <li
                variants={item}
                className={`text-sm text-[#A8A29E] hover:text-stone-100 relative group w-fit ${
                  params === "/publications" ? "border-b border-stone-400" : ""
                }`}
              >
                <Link href="/" className={`relative ${params === "/publications" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Publications</Link>
              </li>
              <li
                className={`text-sm text-[#A8A29E] hover:text-stone-100 relative group w-fit ${
                  params === "/gallery" ? "border-b border-stone-400" : ""
                }`}
              >
                <Link href="/gallery" className={`relative ${params === "/gallery" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Gallery</Link>
              </li>
              <li
                className={`text-sm text-[#A8A29E] hover:text-stone-100 relative group w-fit ${
                  params === "/csr" ? "border-b border-stone-400" : ""
                }`}
              >
                <Link href="/csr" className={`relative ${params === "/csr" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Corporate social responsibilities</Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-6">
            <ul className="flex flex-col gap-4 relative">
              <li
                variants={item}
                className={`text-sm text-[#A8A29E] hover:text-stone-100 relative group w-fit ${
                  params === "/press" ? "border-b border-stone-400" : ""
                }`}
              >
                <Link href="/press" className={`relative ${params === "/press" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Press</Link>
              </li>
              <li
                className={`text-sm text-[#A8A29E] hover:text-stone-100 relative group w-fit ${
                  params === "/conference-workshops" ? "border-b border-stone-400" : ""
                }`}
              >
                <Link href="/conference-workshops" className={`relative ${params === "/conference-workshops" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Professional engagements</Link>
              </li>
                 <li
                className={`text-sm text-[#A8A29E] hover:text-stone-100 relative group w-fit ${
                  params === "/conference-workshops" ? "border-b border-stone-400" : ""
                }`}
              >
                <Link href="/privacy-policy" className={`relative ${params === "/conference-workshops" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Privacy policies</Link>
              </li>
            </ul>
          </div>
          <div className="w-full mb-4">
            <div className="flex items-center gap-3">
              <Link  href="https://www.linkedin.com/in/dr-albert-antwi-boasiako-5a605422/">
                <FaLinkedin className="text-xl text-stone-200 cursor-pointer" />
              </Link>

              <Link href="https://x.com/aantwi_boasiako">
                {" "}
                <RiTwitterXFill className="text-xl text-stone-200 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-full border-[#464646]" />
        <p className="text-sm text-[#A8A29E] mt-5" suppressHydrationWarning>
          © {handleCurrentYear()} All rights reserved | The Official Website of
          Dr Albert Antwi-Boasiako
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
