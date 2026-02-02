import React from "react";
import HeroImage from "../../../public/image/csrhero.png";
import Image from "next/image";

const CsrHero = () => {
  return (
    <div className="w-full h-auto bg-[#0d0b0a] md:p-5 p-3">
      <div className="w-full container mx-auto flex md:flex-row flex-col items-center gap-5">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-xl md:text-4xl font-semibold text-stone-200">
            Committed to a Better Tomorrow
          </h1>
          <h2 className="text-stone-200 text-xl md:text-4xl serif_font">
            Dr. Antwi-Boasiako
          </h2>
          <p className="text-base text-stone-400">
            The Education for Development (E4D) Foundation, a non-profit and
            non-governmental organisation founded by Dr Albert Antwi-Boasiako,
            registered by the Registrar-General&apos;s Department of the Republic of
            Ghana under the Companies Act, 2019 (Act 992) and licensed by the
            Department of Social Welfare, to operate as a non-governmental
            organisation, in the Achiase District, Eastern Region.
          </p>
          <button className="w-[106px] h-[39px] border-stone-400 border rounded-md text-sm text-stone-200 hover:bg-stone-800 transition-colors">
            Learn more
          </button>
        </div>
        <div className="w-full h-[40vh] relative aspect-square">
          <Image
            src={HeroImage}
            alt="hero"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-stone-50/0 to-stone-950"></div>
        </div>
      </div>
    </div>
  );
};

export default CsrHero;
