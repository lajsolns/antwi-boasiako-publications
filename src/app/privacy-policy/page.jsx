"use client";
import React from 'react';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';
import Navigation from "@/componentData/NavBar";
import Footer from "@/componentData/Footer";

export default function PrivacyPolicyPage() {
    return (
        <div className="w-full bg-stone-900 min-h-screen">
                <nav className="w-full sticky top-0 z-50 bg-[#0d0b0a] shadow-md shadow-black/20">
        <Navigation />
      </nav>
            <div className="container mx-auto py-12 px-4">
                <PrivacyPolicyContent />
            </div>
      <Footer />

        </div>
    );
}
