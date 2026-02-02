"use client";
import { useCsr } from "@/context/CsrContext";
import Image from "next/image";
import React from "react";
import { Geist } from "next/font/google";

const geist = Geist({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap"
});

const DetailsHolder = ({ id }) => {
  const { handleFilter } = useCsr();
  const num = id;
  const csrData = handleFilter(num);
  return (
    <div className="w-full h-full">
      <div className="w-full h-[40vh] aspect-square relative">
        <Image
          src={csrData?.images?.[0]}
          alt="Text images"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-stone-50/0 to-stone-950/55 flex flex-col items-end justify-end">
          <div className="w-full">
            <h1 className="text-2xl text-stone-200 text-center">
              {csrData?.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full container mx-auto my-10">
        <div className="w-full">
          <div className="w-full flex flex-col items-start justify-start ">
            <h1
              className={`${geist.variable} md:text-2xl text-lg font-bold text-stone-200`}
            >
              About the{" "}
              <span className=" serif_font text-lg md:text-2xl ">
                {" "}
                Foundation
              </span>
            </h1>
            <hr className="md:w-[5%] w-[10%] my-1 border-stone-700" />
          </div>
          <div className="w-full my-3 flex flex-col gap-5">
            <p className="text-sm text-stone-400">{csrData?.desc}</p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-8 my-10">
            {csrData?.images.map((item, index) => (
              <div
                key={index}
                className="w-full h-[50vh] aspect-square rounded-sm"
              >
                <Image
                  src={item}
                  width={500}
                  height={500}
                  alt="Item"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="w-full my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="w-full bg-[#1C1917] p-3">
              <h2 className="text-lg font-semibold text-stone-200">Our mission</h2>
              <p className="text-sm text-stone-400 mt-3">
                The mission of the E4D Foundation is to empower the
                underprivileged for community-based development through
                education and we achieve this through collaboration with local
                stakeholders, national actors & our international partners.
              </p>
            </div>
            <div className="w-full bg-[#1C1917] p-3">
              <h2 className="text-lg font-semibold text-stone-200">Our vision</h2>
              <p className="text-sm text-stone-400 mt-3">
                E4D Foundation envisions a community-based development achieved
                through education.
              </p>
            </div>
            <div className="w-full bg-[#1C1917] p-3">
              <h2 className="text-lg font-semibold text-stone-200">Core values</h2>
              <p className="text-sm text-stone-400 mt-3">
                At the E4D Foundation, values are an important part of our
                activities. Our cardinal core values are:
              </p>
              <ul className="mt-3">
                <li className="text-sm text-stone-400">Community-focused</li>
                <li className="text-sm text-stone-400">Development-oriented</li>
                <li className="text-sm text-stone-400">Partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHolder;
