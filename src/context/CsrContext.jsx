"use client";

import { createContext, useState, useEffect, useContext } from "react";
const BarbadosPresent = "/image/barbados_present.jpg";
const BarbadosPresent2 = "/image/aboutpics.png";

const CsrContext = createContext();

export const CsrProvider = ({ children }) => {
  const data = [
    {
      id: 1,
      title:
        "Promoting green cybersecurity – Dr. Antwi-Boasiako Leads by example.",
      desc: "Environmental Development under the E4D framework emphasizes sustainable practices in the digital realm, addressing the environmental impact of technology. Dr. Antwi-Boasiako advocates for eco-friendly cybersecurity operations, such as adopting energy-efficient data centers and reducing e-waste in Ghana’s tech sector. Through partnerships with local organizations, he has supported initiatives like tree-planting drives to offset carbon emissions from digital infrastructure.",
      images: [BarbadosPresent, BarbadosPresent2]
    },
    {
      id: 2,
      title: "Building trust through ethical governance",
      desc: "Ethical Development focuses on integrity, transparency, and fairness in all operations, ensuring that cybersecurity initiatives benefit all stakeholders equitably. Dr. Antwi-Boasiako champions ethical data governance, advocating for policies that protect user privacy and promote trust in digital systems. His leadership at the National Cybersecurity Authority emphasizes inclusive decision-making, ensuring that marginalized communities are not left behind in Ghana’s digital journey.",
      images: [BarbadosPresent2, BarbadosPresent]
    },
    {
      id: 3,
      title: "Educating for a secure future",
      desc: "Educational Development is a key pillar of E4D, focusing on empowering communities through knowledge and skills development. Dr. Antwi-Boasiako has prioritized cybersecurity education, launching programs that train students, professionals, and public sector employees in digital safety. In 2024, he partnered with local schools to introduce cybersecurity curricula, benefiting over 5,000 students in rural areas.",
      images: [BarbadosPresent, BarbadosPresent2]
    },
    {
      id: 4,
      title: "Empowering economic growth through secure innovation",
      desc: "Economic Development through E4D aims to create shared prosperity by leveraging cybersecurity to drive economic growth. Dr. Antwi-Boasiako has spearheaded initiatives that support local tech startups, providing mentorship, funding, and access to secure digital tools to foster innovation. His efforts have led to the creation of over 2,000 jobs in Ghana’s tech sector since 2023, empowering young entrepreneurs to contribute to the national economy.",
      images: [BarbadosPresent, BarbadosPresent2]
    }
  ];

  const handleFilter = (id) => {
    return data.find((item) => item.id === id);
  };

  const value = {
    data,
    handleFilter
  };
  return <CsrContext.Provider value={value}>{children}</CsrContext.Provider>;
};

export const useCsr = () => useContext(CsrContext);
