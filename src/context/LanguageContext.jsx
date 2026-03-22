'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

const locales = { en, fr };

const LanguageContext = createContext({
    locale: 'en',
    setLocale: () => { },
    t: (key) => key,
});

export function LanguageProvider({ children }) {
    const [locale, setLocaleState] = useState('en');

    // Hydrate from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('lang');
        if (saved && locales[saved]) {
            setLocaleState(saved);
        }
    }, []);

    const setLocale = (lang) => {
        if (!locales[lang]) return;
        setLocaleState(lang);
        localStorage.setItem('lang', lang);
    };

    // Dot-notation key resolver: t('cart.title') → "Your Selection"
    // Also supports array values: t('shippingPolicy.standardOrders') → ["...", "..."]
    const t = useCallback((key, vars = {}) => {
        const keys = key.split('.');
        let value = locales[locale];
        for (const k of keys) {
            if (value === undefined) return key;
            value = value[k];
        }
        // Return arrays as-is (for list items)
        if (Array.isArray(value)) return value;
        if (typeof value !== 'string') return key;
        // Replace {{var}} placeholders
        return value.replace(/\{\{(\w+)\}\}/g, (_, varName) =>
            vars[varName] !== undefined ? vars[varName] : `{{${varName}}}`
        );
    }, [locale]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

// Convenience alias
export const useT = useLanguage;
