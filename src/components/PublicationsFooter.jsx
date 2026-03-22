'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function PublicationsFooter() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t('nav.home'), href: '/publications' },
    { label: t('nav.allBooks'), href: '/publications/all-books' },
    { label: t('nav.events'), href: '/publications/events' },
    { label: t('nav.gallery'), href: '/publications/gallery' },
    { label: t('footer.aboutAuthor'), href: '/publications/author' },
    { label: t('nav.contact'), href: '/publications/contact' },
  ];

  const moreLinks = [
    { label: t('nav.about'), href: '/publications/about' },
    { label: t('nav.csr'), href: '/publications/csr' },
    { label: t('footer.privacyPolicy'), href: '/publications/privacy-policy' },
    { label: 'Shipping Policy', href: '/publications/shipping-policy' },
    { label: t('footer.cartLink'), href: '/publications/cart' },
  ];

  return (
    <footer className="bg-[#111111] text-white py-24 px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="mb-4 flex justify-center">
              <Image
                src="/image/logo_silver.png"
                alt="Antwi-Boasiako Publications"
                width={500}
                height={500}
                className="w-30 h-30 object-contain"
                style={{ width: '200px', height: '200px' }}
              />
            </div>
            <div className="flex space-x-4 flex md:justify-center">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-playfair text-2xl font-normal text-gray-100 mb-6 relative inline-block">
              {t('footer.navigate')}
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-gray-700"></span>
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-playfair text-2xl font-normal text-gray-100 mb-6 relative inline-block">
              {t('footer.more')}
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-gray-700"></span>
            </h3>
            <ul className="space-y-2">
              {moreLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="font-inter text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-2xl font-normal text-gray-100 mb-6 relative inline-block">
              {t('footer.stayConnected')}
              <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-gray-700"></span>
            </h3>
            <p className="font-inter text-gray-400 text-sm mb-6 leading-relaxed font-light">
              {t('footer.newsletterText')}
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-3 bg-transparent border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 font-inter text-sm transition-colors"
              />
              <button className="w-full px-4 py-3 bg-transparent border border-gray-700 text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300 font-inter text-xs tracking-[0.2em] font-medium uppercase group">
                {t('footer.subscribe')} <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-inter text-gray-400 text-sm">
                {t('footer.copyright')}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/publications/privacy-policy" className="font-inter text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {t('footer.privacyPolicy')}
              </Link>
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {t('footer.termsOfService')}
              </a>
              <a href="#" className="font-inter text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {t('footer.cookiePolicy')}
              </a>
              <Link href="/publications/contact" className="font-inter text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                {t('footer.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
