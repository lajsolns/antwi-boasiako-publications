'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher({ className = '' }) {
    const { locale, setLocale } = useLanguage();

    return (
        <div className={`flex items-center gap-0.5 ${className}`}>
            <button
                onClick={() => setLocale('en')}
                aria-label="Switch to English"
                className={`font-inter text-[10px] tracking-widest uppercase px-2 py-1 transition-all duration-200 ${locale === 'en'
                        ? 'text-gray-900 font-semibold border-b border-gray-900'
                        : 'text-gray-400 hover:text-gray-700'
                    }`}
            >
                EN
            </button>
            <span className="text-gray-300 text-xs select-none">|</span>
            <button
                onClick={() => setLocale('fr')}
                aria-label="Passer en français"
                className={`font-inter text-[10px] tracking-widest uppercase px-2 py-1 transition-all duration-200 ${locale === 'fr'
                        ? 'text-gray-900 font-semibold border-b border-gray-900'
                        : 'text-gray-400 hover:text-gray-700'
                    }`}
            >
                FR
            </button>
        </div>
    );
}
