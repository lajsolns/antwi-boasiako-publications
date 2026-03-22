'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import PublicationsHeader from '@/components/PublicationsHeader';
import PublicationsFooter from '@/components/PublicationsFooter';

export default function AuthorPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { t } = useLanguage();

  const author = {
    name: "Dr. Albert Antwi-Boasiako",
    title: "Director-General, Cyber Security Authority, Ghana",
    bio: "Dr. Albert Antwi-Boasiako is Ghana's foremost cybersecurity expert and the visionary leader behind the nation's digital security transformation. With over 15 years of experience in cybersecurity governance, policy development, and digital transformation, he has positioned Ghana as a leader in African cybersecurity.",
    image: "/image/CEO.png",
    backgroundImage: "/image/homepage_bg.jpg",
    email: "director@csa.gov.gh",
    social: { twitter: "#", linkedin: "#", website: "#" }
  };

  const rotatingQuotes = [
    { text: '"Transforming cybersecurity education across Africa through innovative research and practical implementation"', link: '#publications' },
    { text: '"Building the next generation of cybersecurity professionals with cutting-edge knowledge and skills"', link: '#events' },
    { text: '"Pioneering digital security solutions for a safer, more connected world"', link: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 56);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PublicationsHeader
        scrolled={scrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentQuoteIndex={currentQuoteIndex}
        setCurrentQuoteIndex={setCurrentQuoteIndex}
        rotatingQuotes={rotatingQuotes}
      />

      <section className="relative min-h-[90vh] bg-[#111111] py-32 flex items-center">
        <div className="absolute inset-0">
          {author.backgroundImage && (
            <Image
              src={author.backgroundImage}
              alt="Background"
              fill
              className="object-cover opacity-20 filter grayscale"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block font-inter text-xs tracking-[0.2em] text-amber-700 uppercase mb-4">
                  {author.title}
                </span>
                <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-8 tracking-tight whitespace-nowrap">
                  {author.name}
                </h1>
                <div className="w-16 h-[1px] bg-amber-800 mb-8"></div>
                <p className="font-inter text-lg text-gray-300 leading-relaxed font-light mb-12 max-w-xl">
                  {author.bio}
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <a
                    href="/"
                    className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-900 border border-white font-inter text-sm tracking-widest uppercase hover:bg-transparent hover:text-white transition-all duration-300"
                  >
                    {t('author.home')}
                  </a>
                  <a
                    href={`mailto:${author.email}`}
                    className="inline-flex justify-center items-center px-8 py-4 bg-transparent text-white border border-white/40 font-inter text-sm tracking-widest uppercase hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
                  >
                    {t('author.contact')}
                  </a>
                  <div className="flex gap-4 ml-2">
                    {author.social.twitter && (
                      <a href={author.social.twitter} className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300" aria-label="Twitter">
                        <FiTwitter className="w-5 h-5" />
                      </a>
                    )}
                    {author.social.linkedin && (
                      <a href={author.social.linkedin} className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300" aria-label="LinkedIn">
                        <FiLinkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-72 h-[28rem] lg:w-96 lg:h-[36rem] group">
                  <div className="absolute -inset-4 border border-white/10 z-0 hidden lg:block transition-all duration-700 group-hover:-inset-2 group-hover:border-amber-800/50"></div>
                  {author.image && (
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover relative z-10 filter grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PublicationsFooter />
    </div>
  );
}
