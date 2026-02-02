"use client";
import React from "react";
import CheckoutForm from "@/components/CheckoutForm";
import Navigation from "@/componentData/NavBar";

const CheckoutPage = () => {
  return (
    <div className="w-full min-h-screen bg-stone-950 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full rounded-md shadow-sm">
        <nav className="w-full rounded-md sticky top-0 left-0 z-50">
          <Navigation />
        </nav>
        <div className="w-full min-h-screen bg-[#0d0b0a] relative">
          <div 
            className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
            style={{ 
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10">
            <CheckoutForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage; 