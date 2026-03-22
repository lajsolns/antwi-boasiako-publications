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
         <div className="w-full md:h-[30vh] h-[20vh] bg-stone-950 p-3 ">
          <div className="w-full h-full flex flex-col justify-center container mx-auto">
            <h1 className="text-stone-200 md:text-4xl text-2xl font-bold serif_font">
              Image Gallery
            </h1>
          </div>
        </div> 
        <section className={`w-full min-h-screen pt-4 bg-stone-900 p-2 transition-all duration-300 ${isOpen ? 'opacity-95' : 'opacity-100'} relative z-10`}>
          <div 
            className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10 z-0"
            style={{ 
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="w-full container mx-auto md:my-5 bg-stone-900 md:columns-3 lg:columns-3 columns-1 md:gap-4 gap-3 relative z-10">
            <div 
              className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
              style={{ 
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center'
              }}
            ></div>
            {data.map((item, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="rounded-md shadow-sm mb-3 break-inside-avoid cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-stone-500/20 hover:-translate-y-1"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <div className="w-full h-auto object-cover relative group">
                  <Image
                    src={item.image}
                    alt="image"
                    className="w-full h-full"
                  />
                  <div className="w-full h-full bg-gradient-to-b from-stone-50/5 to-stone-950/20 flex flex-col justify-end absolute bottom-0 left-0"></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                </div>
                <div className="bg-stone-950 py-2 w-full rounded-b-md">
                  <h3 className="text-sm text-stone-200 px-3">
                    {item.details}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={photoIndex}
          plugins={[Zoom, Fullscreen]}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, 0.7)"
            },
            buttonPrev: {
              left: "20%",
              transform: "translateX(-50%)"
            },
            buttonNext: {
              right: "20%",
              transform: "translateX(50%)"
            }
          }}
          render={{
            container: ({ children }) => (
              <div className="relative">
                {children}
                <div 
                  className="absolute left-0 top-0 h-1/2 w-full cursor-pointer"
                  style={{ zIndex: 9999 }}
                  onClick={() => {
                    if (photoIndex > 0) {
                      setPhotoIndex(photoIndex - 1);
                    }
                  }}
                />
                <div 
                  className="absolute left-0 bottom-0 h-1/2 w-full cursor-pointer"
                  style={{ zIndex: 9999 }}
                  onClick={() => {
                    if (photoIndex < slides.length - 1) {
                      setPhotoIndex(photoIndex + 1);
                    }
                  }}
                />
              </div>
            )
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ImagePage;