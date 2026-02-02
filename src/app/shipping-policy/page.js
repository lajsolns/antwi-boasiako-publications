"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Navigation from "@/componentData/NavBar";
import Footer from "@/componentData/Footer";
import ShippingPolicyContent from '@/components/ShippingPolicyContent';

const ShippingPolicy = () => {
  const [activeSection, setActiveSection] = useState('delivery-coverage');

  const sections = useMemo(() => ([
    { id: 'delivery-coverage', title: '1. Delivery Coverage' },
    { id: 'delivery-timeframes', title: '2. Delivery Timeframes' },
    { id: 'delivery-process', title: '3. Delivery Process' },
    { id: 'delivery-requirements', title: '4. Delivery Requirements' },
    { id: 'partner-policies', title: '5. Delivery Partner Policies' },
    { id: 'important-conditions', title: '6. Important Conditions' },
    { id: 'delivery-fees', title: '7. Delivery Fees' },
    { id: 'contact-info', title: '8. Contact Information' }
  ]), []);

  // Effect to handle scroll and update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -75% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <div className="min-h-screen bg-[#0d0b0a] font-[family-name:var(--font-geist-sans)] text-stone-300">
      <nav className="w-full sticky top-0 z-50 bg-[#0d0b0a] shadow-md shadow-black/20">
        <Navigation />
      </nav>
      
      <section className="relative">
        <div
            className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
            style={{
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center'
            }}
        />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-left md:text-center mb-16">
              <h1 className="serif_font text-4xl font-bold text-stone-100 mb-3">Shipping Policy</h1>
              <p className="text-md text-stone-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar Navigation */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="sticky top-28">
                  <div className="bg-[#1c1917] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-stone-100 mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {sections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveSection(section.id);
                          }}
                          className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeSection === section.id
                              ? 'bg-stone-700 text-stone-100'
                              : 'text-stone-400 hover:bg-stone-800 hover:text-stone-100'
                          }`}
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                    <hr className="my-6 border-stone-700" />
                    <div className="space-y-3">
                      <button 
                        onClick={() => window.history.back()}
                        className="w-full text-center px-3 py-2 text-sm font-medium text-stone-300 hover:bg-stone-800 hover:text-stone-100 rounded-md transition-colors"
                      >
                        Go back
                      </button>
                      <button 
                        onClick={() => window.print()}
                        className="w-full text-center px-3 py-2 text-sm font-medium text-stone-100 bg-stone-700 hover:bg-stone-600 rounded-md transition-colors"
                      >
                        Print this page
                      </button>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <main className="flex-1 bg-[#1c1917] rounded-lg pb-96">
                <div className="p-8 md:p-12">
                  <ShippingPolicyContent />
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
