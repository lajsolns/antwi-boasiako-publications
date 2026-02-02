"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { RiCloseLine } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import Menu from "../../../public/image/menu.svg"
import Close from "../../../public/image/close.svg"
import CartButton from '@/components/ui/cart-button';

const Navigation = ({ scrolled = false }) => {
  // Add a local state to handle scroll
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Combine props and local state for scroll effect
  const shouldShowScrolledStyle = scrolled || isScrolled;
  const [isSideBar, setIsSideBar] = useState(false);
  const [showPublications, setShowPublications] = useState(false);
  const [showProfessionalEngagements, setShowProfessionalEngagements] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);

  const params = usePathname();
  const isCheckoutPage = params === '/checkout';

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
  const modalVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.8 }
  };

  return (
    <div className={`w-full sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowScrolledStyle 
        ? 'bg-black/90 backdrop-blur-sm shadow-md' 
        : 'bg-[#0d0b0a]'
    }`}>
      <div className="w-full mx-auto container px-6">
        <motion.div
          initial={{ transform: "translateX(-30px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring", duration: 1 }}
          className={`text-xl text-stone-300 w-full flex items-center ${isCheckoutPage ? 'justify-center' : 'md:justify-center justify-between'} pt-4`}
        >
          {!isCheckoutPage && (
            <>
              {isSideBar ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
                  <h1
                    className="text-stone-200"
                    onClick={() => setIsSideBar(false)}
                  >
                    <Image
                      src={Close}
                      alt="alt"
                      width={16}
                      height={16}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </h1>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 2 }}
                  onClick={() => {
                    setIsSideBar(true);
                  }}
                  className="md:hidden text-stone-300"
                >
                  <Image
                    src={Menu}
                    alt="alt"
                    width={20}
                    height={20}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </motion.div>
              )}
            </>
          )}
          <Link href="/" alt="logo">
            <motion.div
              className="md:w-[120px] md:h-[120px] w-[70px] h-[70px] object-cover"
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Image
                src="/image/logo_silver.png"
                alt="alt"
                width={500}
                height={500}
                className="w-full h-full object-cover cursor-pointer"
              />
            </motion.div>
          </Link>
          {!isCheckoutPage && (
            <div className="flex items-center gap-2 md:hidden">
              <CartButton />
            </div>
          )}
        </motion.div>
      </div>
      {!isCheckoutPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-auto flex items-center justify-between gap-4 container mx-auto py-3"
          onMouseLeave={() => {
            setShowPublications(false);
            setShowImages(false);
            setShowProfessionalEngagements(false);
            setShowPolicies(false);
          }}
        >
          <div></div>

          <ul className="hidden md:flex items-center gap-4 relative">
            <motion.li
              variants={item}
              className={`text-base text-stone-300 hover:text-stone-100 relative group ${
                params === "/" ? "border-b border-stone-400" : ""
              } `}
            >
              <Link href="/" className={`relative ${params === "/" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Home</Link>
            </motion.li>
            <li
              className={`text-base text-stone-300 hover:text-stone-100 relative group ${
                params === "/about" ? "border-b border-stone-400" : ""
              } `}
            >
              <Link href="/about" className={`relative ${params === "/about" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>About</Link>
            </li>


            <div
              onMouseEnter={() => {
                setShowProfessionalEngagements(true);
                setShowImages(false);
              }}
            >
              <li className="text-base text-stone-300 is_hover_box hover:text-stone-100 hover:border-b border-stone-400 cursor-pointer flex items-center justify-center">
                <span className="pr-1">Professional Engagements</span>
                <ChevronDown
                  size={16}
                  className={`${showProfessionalEngagements ? "rotate-180" : ""}`}
                />
              </li>
              {showProfessionalEngagements && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  id="isShowBox"
                  className="w-fit h-auto z-50 absolute top-7 p-2 bg-[#525252] rounded-sm"
                >
                  <ul className="flex flex-col gap-2 w-fit">
                    <li
                      className={`text-sm text-stone-200 hover:text-stone-100 cursor-pointer inline-block w-fit relative group`}
                    >
                      <Link href="/conference-workshops" className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full">Conferences and workshops</Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>


            <div
              onMouseEnter={() => {
                setShowPublications(true);
                setShowImages(false);
                setShowProfessionalEngagements(false);
                setShowPolicies(false);
              }}
            >
              <li className="text-base text-stone-300 is_hover_box hover:text-stone-100 hover:border-b border-stone-400 cursor-pointer flex items-center justify-center">
                <span className="pr-1">Publications</span>
                <ChevronDown
                  size={16}
                  className={`${showPublications ? "rotate-180" : ""}`}
                />
              </li>
              {showPublications && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  id="isShowBox"
                  className="w-fit h-auto z-50 absolute top-7 p-2 bg-[#525252] rounded-sm"
                >
                  <ul className="flex flex-col gap-2 w-fit">
                    <li
                      className={`text-base text-stone-200 hover:text-stone-100 cursor-pointer inline-block w-fit relative group`}
                    >
                      <Link href="/books/gallery" className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full">Published books</Link>
                    </li>
                    <li
                      className={`text-base text-stone-200 hover:text-stone-100 cursor-pointer inline-block w-fit relative group`}
                    >
                      <Link href="/publications" className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full">Antwi-Boasiako Publications</Link>
                    </li>
                    <li
                      className={`text-base text-stone-200 hover:text-stone-100 cursor-pointer inline-block w-fit relative group`}
                    >
                      <Link href="/academic" className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full">Academic papers</Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>

            <div
              onMouseEnter={() => {
                setShowPolicies(true);
                setShowPublications(false);
                setShowProfessionalEngagements(false);
                setShowImages(false);
              }}
            >
              <li className="text-base text-stone-300 is_hover_box hover:text-stone-100 hover:border-b border-stone-400 cursor-pointer flex items-center justify-center">
                <span className="pr-1">Policies</span>
                <ChevronDown
                  size={16}
                  className={`${showPolicies ? "rotate-180" : ""}`}
                />
              </li>
              {showPolicies && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  id="isShowBox"
                  className="w-fit h-auto z-50 absolute top-7 p-2 bg-[#525252] rounded-sm"
                >
                  <ul className="flex flex-col gap-2 w-fit">
                    <li
                      className={`text-base text-stone-200 hover:text-stone-100 cursor-pointer inline-block w-fit relative group`}
                    >
                      <Link href="/shipping-policy" className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full">Shipping policies</Link>
                    </li>
                        <li
                      className={`text-base text-stone-200 hover:text-stone-100 cursor-pointer inline-block w-fit relative group`}
                    >
                      <Link href="/privacy-policy" className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full">Privacy policies</Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>

            <div
              onMouseEnter={() => {
                setShowImages(true);
                setShowPublications(false);
                setShowProfessionalEngagements(false);
                setShowPolicies(false);
              }}
            >
              <li
                className={`text-base text-stone-300 flex items-center gap-1 hover:text-stone-100 hover:border-b border-stone-400 ${
                  params === "/gallery" && "border-b border-stone-400"
                } `}
              >
                <Link href="/gallery">Gallery</Link>
                <ChevronDown
                  size={16}
                  className={`${showImages ? "rotate-180" : ""}`}
                />
              </li>
              {showImages && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  id="isShowBox"
                  className="w-fit h-auto z-50 absolute top-7 p-2 bg-[#525252] rounded-sm"
                >
                  <motion.ul className="flex flex-col gap-2 w-fit">
                    <motion.li
                      variants={itemVariants}
                      className={`text-base text-stone-200 hover:text-stone-100 cursor-pointer inline-block w-fit relative group`}
                    >
                      <Link href="/images" className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full">Images</Link>
                    </motion.li>

                    <motion.li
                      variants={itemVariants}
                      className={`text-base text-stone-200 hover:text-stone-100 cursor-pointer inline-block w-fit relative group`}
                    >
                      <Link href="/gallery" className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full">Videos</Link>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              )}
            </div>

            
            <li
              className={`text-base text-stone-300 hover:text-stone-100 relative group ${
                params === "/csr" ? "border-b border-stone-400" : ""
              } `}
            >
              <Link href="/csr" className={`relative ${params === "/csr" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>CSR</Link>
            </li>

            <li
              className={`text-base text-stone-300 hover:text-stone-100 relative group ${
                params === "/press" ? "border-b border-stone-400" : ""
              } `}
            >
              <Link href="/press" className={`relative ${params === "/press" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Press</Link>
            </li>
            <li
              className={`text-base text-stone-300 hover:text-stone-100 relative group ${
                params === "/contact" ? "border-b border-stone-400" : ""
              } `}
            >
              <Link href="/contact" className={`relative ${params === "/contact" ? "" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"}`}>Contact Us</Link>
            </li>

       
          
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <CartButton />
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative w-fit h-[40px] py-1 px-3 rounded-lg text-sm text-stone-300 transition-all ease-out delay-100 hover:text-stone-900 font-semibold group"
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-stone-600 via-white to-stone-600 animate-border-rotate"></span>
              <span className="absolute inset-[1.5px] rounded-lg bg-stone-950 group-hover:bg-stone-200 transition-colors"></span>
              <Link href="/books/gallery" className="relative">
                Purchase a book
              </Link>
            </motion.button>
          </div>
        </motion.div>
      )}
      {/* <motion.hr className="w-full h-[1px] bg-stone-400 my-6" /> */}

      <AnimatePresence mode="wait">
        {isSideBar && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.8 }}
            className="w-full h-[89vh] fixed left-0 bottom-0 right-0 z-50 flex items-end justify-end bg-[#0000009c] "
          >
            <motion.nav
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6 }}
              className="w-full h-full bg-[#0C0A09] relative"
            >
              <nav className="w-full h-[89vh] bg-[#0C0A09] fixed rounded-md p-6 ">
                <h1 className="text-xl font-mono font-bold my-4 text-stone-300">
                  {" "}
                  MENU
                </h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full flex items-center justify-center "
                >
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full flex flex-col gap-6 "
                  >
                    <motion.li
                      variants={item}
                      className={`text-xl text-[#A8A29E]  flex items-center justify-between w-fit`}
                    >
                      <Link href="/" className="text-lg w-fit">
                        Home
                      </Link>
                      {/* <MdKeyboardArrowRight
                      size={20}
                      className="text-stone-600"
                    /> */}
                    </motion.li>
                    <li
                      className={`text-xl text-[#A8A29E] w-fit flex items-center justify-between`}
                    >
                      <Link href="/about" className="text-lg w-fit">
                        About
                      </Link>
                      {/* <MdKeyboardArrowRight
                      size={20}
                      className="text-stone-600"
                    /> */}
                    </li>

                  <Accordion className="flex flex-col gap-4" type="single" collapsible>

                  <AccordionItem  value="item-1">
                        <AccordionTrigger className="text-lg text-[#A8A29E] hover:text-stone-10 pb-1">
                          Professional Engagements
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-4 ml-3 pt-1">
                            <li
                              className={`text-base text-[#A8A29E] hover:text-stone-100 cursor-pointer w-fit relative group ${
                                params === "/conference-workshops" ? "border-b border-stone-400" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"
                              }`}
                            >
                              <Link href="/conference-workshops">Conferences and workshops</Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg text-[#A8A29E] hover:text-stone-10 pb-0">
                          Publications
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-4 ml-3 pt-3">
                            <li
                              className={`text-base text-[#A8A29E] hover:text-stone-100 cursor-pointer w-fit relative group ${
                                params === "/books/gallery" ? "border-b border-stone-400" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"
                              }`}
                            >
                              <Link href="/books/gallery">Published books</Link>
                            </li>
                            <li
                              className={`text-base text-[#A8A29E] hover:text-stone-100 cursor-pointer w-fit relative group ${
                                params === "/publications" ? "border-b border-stone-400" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"
                              }`}
                            >
                              <Link href="/publications">Antwi-Boasiako Publications</Link>
                            </li>
                            <li
                              className={`text-base text-[#A8A29E] hover:text-stone-100 cursor-pointer w-fit relative group ${
                                params === "/academic" ? "border-b border-stone-400" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"
                              }`}
                            >
                              <Link href="/academic">Academic papers</Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg text-[#A8A29E] hover:text-stone-10 pb-0">
                          Policies
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-4 ml-3 pt-3">
                            <li
                              className={`text-base text-[#A8A29E] hover:text-stone-100 cursor-pointer w-fit relative group ${
                                params === "/shipping-policy" ? "border-b border-stone-400" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"
                              }`}
                            >
                              <Link href="/shipping-policy">Shipping policies</Link>
                            </li>

                                 <li
                              className={`text-base text-[#A8A29E] hover:text-stone-100 cursor-pointer w-fit relative group ${
                                params === "/privacy-policy" ? "border-b border-stone-400" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"
                              }`}
                            >
                              <Link href="/privacy-policy">Privacy policies</Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                  </Accordion>

                  <Accordion className="flex flex-col gap-4" type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg text-[#A8A29E] hover:text-stone-10 w-fit pb-0">
                          Gallery
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-4 ml-3 pt-2">
                            <li
                              className={`text-base text-[#A8A29E] hover:text-stone-100 cursor-pointer w-fit relative group ${
                                params === "/images" ? "border-b border-stone-400" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"
                              }`}
                            >
                              <Link href="/images">Images</Link>
                            </li>
                            <li
                              className={`text-base text-[#A8A29E] hover:text-stone-100 cursor-pointer w-fit relative group ${
                                params === "/gallery" ? "border-b border-stone-400" : "after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-stone-400 after:left-0 after:-bottom-[1px] after:transition-all after:duration-300 group-hover:after:w-full"
                              }`}
                            >
                              <Link href="/gallery">Videos</Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <li
                      className={`text-lg text-[#A8A29E]  flex items-center justify-between w-fit`}
                    >
                      <Link href="/" className="text-lg w-fit">
                        CSR
                      </Link>
                    </li>
                    <li
                      className={`text-xl text-[#A8A29E]  w-fit flex items-center justify-between `}
                    >
                      <Link href="/press" className="text-lg w-fit">
                        Press
                      </Link>
                    </li>
                  
                    <li
                      className={`text-xl text-[#A8A29E]  flex items-center justify-between w-fit`}
                    >
                      <Link href="/contact" className="text-lg w-fit">
                        Contact Us
                      </Link>
                    </li>
            

               
                  </motion.ul>
                </motion.div>
                <div className="full-width">
                  <button
                    // initial={{ opacity: 0 }}
                    // whileInView={{ opacity: 1 }}
                    className="relative w-fit h-[40px] hidden md:block py-1 px-3 rounded-lg text-sm text-stone-300 transition-all ease-out delay-100 hover:text-stone-900 font-semibold group mb-8"
                  >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-stone-600 via-white to-stone-600 animate-border-rotate"></span>
                    <span className="absolute inset-[1.5px] rounded-lg bg-stone-950 group-hover:bg-stone-200 transition-colors"></span>
                    <Link href="/books/gallery" className="relative">
                    Purchase a book
                    </Link>
                  </button>
                </div>
                <div className="w-full absolute bottom-3 flex items-start gap-5 mb-8">
                  <Link href="https://www.linkedin.com/in/dr-albert-antwi-boasiako-5a605422/">
                    <FaLinkedin className="text-xl text-stone-200 cursor-pointer" />
                  </Link>

                  <Link href="https://x.com/aantwi_boasiako">
                    {" "}
                    <RiTwitterXFill className="text-xl text-stone-200 cursor-pointer" />
                  </Link>
                </div>
              </nav>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
