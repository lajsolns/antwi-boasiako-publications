"use client";
import { useCsr } from "@/context/CsrContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CsrItems = () => {
  const { data } = useCsr();

  return (
    <div className="w-full h-auto bg-[#0d0b0a] md:p-5 p-3">
      <div className="w-full container mx-auto py-10">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <h1 className="text-2xl text-stone-200">
            The E4D <span className="serif_font">Framework</span>
          </h1>
          <p className="text-sm text-stone-400 text-center">
            As the Director-General of the National Cybersecurity Authority, Dr.
            Antwi-Boasiako <br />
            leverages this holistic framework to address pressing societal
            challenges while advancing
            <br /> Ghana&apos;s digital transformation. Below, explore how E4D shapes
            impactful CSR initiatives
            <br /> that align with national development goals and global best
            practices
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {data?.map((item, index) => (
            <div key={index} className="w-full bg-[#1C1917] mt-3">
              <div className="w-full h-[40vh] aspect-square">
                <Image
                  src={item?.images?.[0]}
                  alt="csr image"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full p-3 flex flex-col justify-between gap-6">
                <div>
                  <h1 className="text-lg font-semibold text-stone-200">
                    {item?.title}
                  </h1>
                  <p className="text-sm text-stone-400">{item.desc}</p>
                </div>
                <Link href={`/csr/${item?.id}`}>
                  <button className="w-[102px] h-[39px] border border-stone-400 text-sm text-stone-200 rounded-md hover:bg-stone-800 transition-colors">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CsrItems;
