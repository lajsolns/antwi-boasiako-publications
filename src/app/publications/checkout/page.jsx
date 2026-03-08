"use client";

import React, { useState, useEffect } from "react";
import PublicationsCheckoutForm from "@/components/PublicationsCheckoutForm";
import PublicationsHeader from "@/components/PublicationsHeader";
import PublicationsFooter from "@/components/PublicationsFooter";

const PublicationsCheckoutPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 56);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rotatingQuotes = [
        { text: '"Seamless checkout for archival quality publications"', link: '#' },
        { text: '"Secure handling of intellectual property"', link: '#' }
    ];

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

            <main className="w-full relative">
                <PublicationsCheckoutForm />
            </main>

            <PublicationsFooter />
        </div>
    );
};

export default PublicationsCheckoutPage;
