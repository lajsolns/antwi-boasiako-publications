// components/ClientSection.jsx
'use client'; // Since we'll use React hooks for the accordion functionality

import { useState } from 'react';
import Image from 'next/image';

const clients = [
  {
    name: 'Client 1',
    description: 'Description about Client 1 and the work done for them.',
    logo: 'https://framerusercontent.com/images/vTdhEIWyiGpHwynVxmYRyLROtnQ.png',
  },
  {
    name: 'Client 2',
    description: 'Description about Client 2 and the work done for them.',
    logo: 'https://framerusercontent.com/images/FWTbj7W3whsDJVeBcFb7WWhauZM.png?scale-down-to=1024',
  },
  // Add more clients as needed
];

export default function ClientSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
      <div className="space-y-4">
        {clients.map((client, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Image 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-lg font-semibold">{client.name}</span>
              </div>
              <span className="text-xl">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 p-4' : 'max-h-0 p-0'
              } overflow-hidden bg-white`}
            >
              <p>{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}