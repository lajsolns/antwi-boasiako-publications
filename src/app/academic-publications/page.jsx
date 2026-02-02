"use client";
import AcademicPapersHolder from "@/componentData/AcademicPapersHolder";
import Footer from "@/componentData/Footer";
import Navigation from "@/componentData/NavBar";
import React from "react";

const AcademicPapers = () => {
  return (
    <div className="w-full">
      <main className="w-full h-full">
        <nav className="w-full rounded-md sticky top-0 left-0 z-50">
          <Navigation />
        </nav>
        <div className="w-full md:py-10">
          <AcademicPapersHolder />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AcademicPapers;
