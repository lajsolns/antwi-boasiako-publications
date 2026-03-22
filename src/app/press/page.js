"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/componentData/Footer";
import Navigation from "@/componentData/NavBar";
import Image from "next/image";
const Pic1 = "/image/oval_office.jpg";
const TrentoMedia = "/image/media_interview.jpg";
const MediaSpeech = "/image/media_speech.png";
const SigningMemorandum = "/image/signing.png";
const TrentoStudentSpeech = "/image/speech.jpg";
const BookPresentation = "/image/barbados_present.jpg";
const AwardPic = "/image/award.jpg";
const OvalSitting = "/image/oval_sitting.jpg";
const GC3BSpeech = "/image/GC3B_Speech.jpg";
const Bookpresenting = "/image/book_presentation.png";
const compress6 = "/compressed/6.png";
const AncAdoption = "/image/adoption_anca.jpg";
import Aos from "aos";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Press from "@/componentData/Press";

const ImagePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const data = [
    {
      image: TrentoMedia,
      details:
        "Returning to Trento - Dr Antwi-Boasiako being interviewed by Journalist at Trento, Italy",
    },
    {
      image: SigningMemorandum,
      details:
        "Signing of a Memorandum of Understanding between Ghana and Rwanda on Cybersecurity Cooperation",
    },
    {
      image: TrentoStudentSpeech,
      details:
        "Dr Albert Antwi-Boasiako delivering a speech to Graduating Students at the University of Trento, Italy",
    },
    {
      image: AwardPic,
      details:
        "Dr Antwi-Boasiako with the Rector of the University of Trento, Italy after a Bilateral Meeting",
    },
    {
      image: BookPresentation,
      details:
        "Dr Antwi-Boasiako presenting a copy of his book to H.E. Juliette Bynoe-Sutherland, Barbados High Commissioner to Ghana",
    },
    {
      image:Bookpresenting ,
      details:
        "Dr Antwi-Boasiako presenting a copy of his Book to the Rwandan High Commissioner to Ghana, H.E. Rosemary Mbabazi",
    },
    {
      image: OvalSitting,
      details:
        "Dr Antwi-Boasiako with President of the World Economic Forum and Other Cyber Chiefs at a Meeting in Geneva, Switzerland",
    },
    {
      image: GC3BSpeech,
      details:
        "Dr Antwi-Boasiako speaking at the inaugural GC3B conference hosted in Accra, Ghana",
    },
    {
      image: compress6,
      details: "Dr Antwi-Boasiako addressing the Press",
    },
    {
      image: Pic1,
      details: "Dr. Albert Antwi-Boasiako with the former US Secretary of State, Antony Blinken",
    },

    {
      image: AncAdoption,
      details: "Dr Albert Antwi-Boasiako with Mr. Lacina Kone (CEO, Smart Africa Alliance) and General El Mostafa Rabii (Director, DGSSI - Kingdom of Morocco): Official adoption of African Network of Cybersecurity Authorities (ANCA) constitution and 5-year strategy at the 5TH ANCA Meeting held on the sidelines of the African Cybersecurity Forum at Rabat, Morocco",
    },
  ];

  // Convert data array to lightbox format
  const slides = data.map((item) => ({
    src: item.image.src,
    alt: item.details,
  }));

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="w-svw h-full font-[family-name:var(--font-geist-sans)] rounded-md">
      <main className="w-full h-full rounded-md shadow-sm">
        <nav className="w-full rounded-md sticky top-0 left-0 z-50">
          <Navigation />
        </nav>
        {/* <div className="w-full md:h-[10vh] h-[20vh] bg-stone-950 p-3 ">
          <div className="w-full h-full flex flex-col justify-center container mx-auto">
            <h1 className="text-stone-200 md:text-4xl text-2xl font-bold serif_font">
              Press 
            </h1>
          </div>
        </div> */}
        <Press />
      </main>
      <Footer />
    </div>
  );
};

export default ImagePage;