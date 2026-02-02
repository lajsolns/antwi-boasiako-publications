import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { FaPlay } from "react-icons/fa";

const EmblaCarousel = (props) => {
  const { slides, options, onEmblaApi } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi && onEmblaApi) {
      onEmblaApi(emblaApi);
    }
  }, [emblaApi, onEmblaApi]);

  const data = [

        {
      poster: "/image/documentary_book.png",
      video:
        "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1732422376/10cmd_compressed_iv0pge.mp4",
        // title: "THE 10 COMMANDMENTS FOR SUSTAINABLE",
        // title2: " NATIONAL CYBERSECURITY DEVELOPMENT",
        // subTitle: "AFRICA IN CONTEXT:",
        // subTitle2: "PRACTICAL LESSONS & GOOD PRACTICES",
        // title: "",
        // title2: "",
        // subTitle: "",
        // subTitle2: ""
    },
    
    {
      poster: "/image/documentary_book.png",
      video:
        "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1732422376/10cmd_compressed_iv0pge.mp4",
        // title: "THE 10 COMMANDMENTS FOR SUSTAINABLE",
        // title2: " NATIONAL CYBERSECURITY DEVELOPMENT",
        // subTitle: "AFRICA IN CONTEXT:",
        // subTitle2: "PRACTICAL LESSONS & GOOD PRACTICES",
        // title: "",
        // title2: "",
        // subTitle: "",
        // subTitle2: ""
    },
    {
      poster: "/image/isaka_awards.png",
      video:
        "https://res.cloudinary.com/dnkvwgxxn/video/upload/v1738054435/isaca_seminar_compressed_twequw.mp4",
        title: "",
        title2: "",
        subTitle: "",
        subTitle2: ""

    //     title: "Highlights from my address at the ISACA Seminar on 'Cybersecurity in Ghana: The Present & The Future'.",
    //     title2: "",
    //     subTitle: "ISACA SEMINAR",
    //     subTitle2: "PRACTICAL LESSONS & GOOD PRACTICES",
    // 
    },
    {
      poster: "/image/book_launch.png",
      video:
        "https://firebasestorage.googleapis.com/v0/b/image-hub-cbcb2.appspot.com/o/booklaunch%20(1).mp4?alt=media&token=ffa2122d-c332-4678-b76a-796092bf7c1f",
        // title: "THE 10 COMMANDMENTS FOR SUSTAINABLE",
        // title2: "NATIONAL CYBERSECURITY DEVELOPMENT",
        // subTitle: "AFRICA IN CONTEXT:",
        // subTitle2: "PRACTICAL LESSONS & GOOD PRACTICES"
    }
  ];

  return (
    <>
      {/* <div className="w-full md:w-4/5 flex flex-col items-start justify-start mb-5">
        <h1 className="md:text-lg text-base font-semibold text-stone-200">
          VIDEO PUBLICATIONS
        </h1>
        <hr className="md:w-[5%] w-[10%] my-3 " />
      </div> */}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.map((item, index) => (
              <div
                className="embla__slide embla__class-names aspect-video relative"
                key={index}
              >
                <video
                  width="100%"
                  height="100%"
                  controls={true}
                  loop={true}
                  preload="auto"
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                  poster={item.poster}
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div>
                  <h1 className="text-lg font-semibold text-white leading-none">
                    {item.title}
                  </h1>  <h1 className="text-lg font-semibold text-white">
                    {item.title2}
                  </h1>
                  <p className="text-xs text-[#A8A29E] pt-1">{item.subTitle}</p>
                  <p className="text-xs  text-[#A8A29E]">{item.subTitle2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;