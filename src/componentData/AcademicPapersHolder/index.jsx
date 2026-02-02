import React from "react";
import { motion } from 'framer-motion';
import { Geist } from 'next/font/google';
import Link from 'next/link';

const geist = Geist({
    subsets: ['latin'],
    display: 'swap',
});

const data = [
  {
    id: 1,
    title: "Multi-Sector Workshop on Countering Technology",
    Publication: "[Panelist]",
    CoAuthors: "April 2025",
    desc: "Assisted and Enabled Terrorism in West Africa; Global Internet Forum to Counter Terrorism (GIFCT) and International Institute for Justice and the Rule of Law(IIJ), Valletta, Malta.",
    desc2: ""
  },
  {
    id: 2,
    title: "Prague Cyber Security Conference ",
    Publication: "[Keynote Speaker]",
    CoAuthors: "March 2025",
    desc: "Keynote Address under the theme 'Invisible Frontlines', Prague, Czech Republic.",
    desc2: ""
  },

  {
    id: 3,
    title: "Cybersecurity Forum",
    Publication: "[Keynote Speaker]",
    CoAuthors: "February 2025",
    desc: "Keynote Address and Pannel Session on Strengthening Africa's Digital Resilience: AI, Trusted Cloud, and Federated Cloud as Strategic Catalysts, Rabat, Morrocco ",
    desc2: ""
  },

  {
    id: 4,
    title: "ISACA Accra Chapter Seminar",
    Publication: "[Keynote Speaker]",
    CoAuthors: "January 2025",
    desc: "Cybersecurity in Ghana: The Present and the Future, Accra, Ghana",
    desc2: ""
  },

  {
    id: 5,
    title: "14th Edition of the Tech-in-Ghana Conference, Accra, Ghana.",
    Publication: "[Speaker]",
    CoAuthors: "November 2024",
    desc: "",
    desc2: ""
  },

  {
    id: 6,
    title: "RUSI Inaugural Conference on Securing Cyberspace 2024",
    Publication: "[Speaker]",
    CoAuthors: "October 2024",
    desc: "An incident Responder Perspective on responsible state behaviour; London, United Kingdom",
    desc2: ""
  },

  {
    id: 7,
    title: "Guest Speaker at the Graduation Ceremony of University of Trento, Trento, Italy",
    Publication: "[Speaker]",
    CoAuthors: "October 2024",
    desc: "",
    desc2: ""
  },


  {
    id: 8,
    title: "DOT Cyber Summit: Pannel Session on National Cyber, Amman, Jordan",
    Publication: "[Speaker]",
    CoAuthors: "September 2024",
    desc: "",
    desc2: ""
  },

  {
    id: 9,
    title: "Wilton Park Dialogue on Cyber Skills and competencies capacity",
    Publication: "[Speaker]",
    CoAuthors: "September 2024",
    desc: "Building a sustainable cyber workforce, Wiston House, West Sussex, United Kingdom",
    desc2: ""
  },

  {
    id: 10,
    title: "GITEX AFRICA: Global Dialogue : Architecting Regional Cyber Resilience",
    Publication: "[Speaker]",
    CoAuthors: "May 2024",
    desc: "A Collaborative Blueprint, Marrakech, Morrocco",
    desc2: ""
  },

  {
    id: 11,
    title: "Digital Rights & Inclusion (DRIF) 2024",
    Publication: "[Speaker]",
    CoAuthors: "April 2024",
    desc: "Fostering Rights and Inclusion in the Digital Age, Accra, Ghana",
    desc2: ""
  },

  {
    id: 12,
    title: "Joy News & Youth Bridge Foundation's National Dialogue on Cybersecurity, Accra, Ghana",
    Publication: "[Speaker]",
    CoAuthors: "March 2024",
    desc: "",
    desc2: ""
  },

  {
    id: 13,
    title: "Octopus Conference;",
    Publication: "[Speaker]",
    CoAuthors: "December 2023",
    desc: "1. Why should African countries consider the Convention on Cybercrime and its Protocols?",
    desc2: "2.  Capacity building as a game changer: what makes a difference?  Council of Europe, Bucharest, Romania."
  },

  {
    id: 14,
    title: "Paris Peace Forum; Protecting Populations from Critical Harm to the Public Core of Internet. Paris, France",
    Publication: "[Speaker]",
    CoAuthors: "November 2023",
    desc: "",
    desc2: ""
  },

  {
    id: 15,
    title: "GITEX Global, 2023 - CYBER LEADERS OF AFRICA",
    Publication: "[Panelist]",
    CoAuthors: "October 2023",
    desc: "Empowering Cybersecurity for Economic Development in Africa and Beyond, Dubai, United Arab Emirates (UAE)",
    desc2: ""
  },

  {
    id: 16,
    title: "Internet Governance Forum – UNICEF Session on Safe Digital Futures for Children",
    Publication: "[Panelist]",
    CoAuthors: "October 2023",
    desc: "Aligning Global Agendas; Kyoto, Japan",
    desc2: ""
  },

  {
    id: 17,
    title: "Cybertech Africa 2023",
    Publication: "[Panelist]",
    CoAuthors: "October 2023",
    desc: "Great Cyber Challenges for Africa with Heads of Cyber of African and Leading Countries, Kigali, Rwanda.",
    desc2: ""
  },

  {
    id: 18,
    title: "Global Cybersecurity Forum; Riyadh, Kingdom of Saudi Arabia.",
    Publication: "[Panelist]",
    CoAuthors: "November 2022",
    desc: "",
    desc2: ""
  },

  {
    id: 19,
    title: "International Workshop on Conducting Criminal Investigations of Ransomware Attacks, Eurojust & Council of Europe, The Hague, Netherlands;",
    Publication: "[Speaker]",
    CoAuthors: "November 2022",
    desc: "",
    desc2: ""
  },

  {
    id: 20,
    title: "World Economic Forum Annual Meeting on Cybersecurity. Geneva, Switzerland.",
    Publication: "[Speaker/Contributor]",
    CoAuthors: "November 2022",
    desc: "",
    desc2: ""
  },

  {
    id: 21,
    title: "Summit on Digital Diplomacy and Governance; Malta;",
    Publication: "[Discussant/Contributor]",
    CoAuthors: "November 2022",
    desc: "DiploFoundation, Maltese Ministry for Foreign and European Affairs, Valetta, Malta.",
    desc2: ""
  },

  {
    id: 22,
    title: "UN-Singapore Cyber Fellowship Programme 2022",
    Publication: "[Fellow]",
    CoAuthors: "August 2022",
    desc: "United Nations Office for Disarmament Affairs and Cyber Security Agency of Singapore, Singapore.",
    desc2: ""
  },


  {
    id: 23,
    title: "African School on Internet Governance (AfriSIG) 2022",
    Publication: "[Panelist]",
    CoAuthors: "July 2022",
    desc: "AfriSIG & Global Partners Digital, Lilongwe, Malawi.",
    desc2: ""
  },

  {
    id: 24,
    title: "GIFCT Global Summit 2022; Global Internet Forum to Counter Terrorism (GIFCT), California, United States.",
    Publication: "[Contributor]",
    CoAuthors: "July 2022",
    desc: "",
    desc2: ""
  },

  {
    id: 25,
    title: 'U.S.-Africa Business Summit Program "Building Forward Together"',
    Publication: "[Panelist]",
    CoAuthors: "July 2022",
    desc: "Panel on Cybersecurity: Securing Africa's Economic Relaunch; Corporate Council on Africa. Marrakech, Morrocco.",
    desc2: ""
  },

  {
    id: 26,
    title: "7th Singapore International Cyber Week (SICW)",
    Publication: "[Speaker]",
    CoAuthors: "October 2022",
    desc: "Singapore; Cyber Security Agency of Singapore",
    desc2: ""
  },

  {
    id: 27,
    title: "WeProtect Global Alliance Summit, Brussels, Belgium, WeProtect Global Alliance",
    Publication: "[Speaker]",
    CoAuthors: "June 2022",
    desc: "",
    desc2: ""
  },

  {
    id: 28,
    title: "Cyber Security Summit, Lomé, Panel session",
    Publication: "[Panelist]",
    CoAuthors: "March 2022",
    desc: "Identify and Implement the Key Factors for Success to Strengthen Regional Collaboration on Cybersecurity",
    desc2: ""
  },

  {
    id: 29,
    title: "ECOWAS Cybersecurity Symposium, Abidjan",
    Publication: "[Contributor]",
    CoAuthors: "September 2021",
    desc: "Masterclass session - The UN: An International Rules Based System, International Law & Norms in Cyberspace",
    desc2: ""
  },

  {
    id: 30,
    title: "Launch of the Digital Inclusion Benchmark",
    Publication: "[Speaker]",
    CoAuthors: "December 2020 ",
    desc: "Ranking the 100 most Influential Tech Companies on Digital Inclusion: 2020 Results – World Benchmarking Alliance (WBA), the United Nations Foundation and the Office of the Special Adviser; Virtual Event",
    desc2: ""
  },

  {
    id: 31,
    title: "2020 Internet Governance Forum (IGF) - Panel Session",
    Publication: "[Panelist]",
    CoAuthors: "November 2020",
    desc: "An Open Discussion about Tackling Terrorist and Violent Extremist Content - Global Internet Forum to Counter Terrorism (GIFCT); Virtual Event ",
    desc2: ""
  },

  {
    id: 32,
    title: "European Union (EU) Cyber Forum",
    Publication: "[Panelist]",
    CoAuthors: "September 2020",
    desc: "European Union Institute for Security Studies (EUISS), German Marshall Fund of the United States and the Stiftung Neue Verantwortung and other partners; Virtual Event ",
    desc2: ""
  },

  {
    id: 33,
    title: "8th Annual Freedom Online Conference",
    Publication: "[Speaker]",
    CoAuthors: "February 2020 ",
    desc: "Achieving a Common Vision for Internet Freedom, Government of Ghana and Freedom Online Coalition, Accra, Ghana",
    desc2: ""
  },

  {
    id: 34,
    title: "GLACY+ Advisory Mission on Cybercrime Legislation in Sierra Leone, Freetown, Sierra Leone.",
    Publication: "[Trainer/Speaker]",
    CoAuthors: "December 2018 ",
    desc: "",
    desc2: ""
  },

  {
    id: 35,
    title: "African Forum on Cybercrime, African Union/Council of Europe/ European Union, INTERPOL, UNODC, US State Department, UK Government, the Commonwealth Secretariat and World Bank, Addis Ababa, Ethiopia",
    Publication: "[Speaker]",
    CoAuthors: "October 2018",
    desc: "",
    desc2: ""
  },

  {
    id: 36,
    title: "Council of Europe - International Conference on Judicial Cooperation in Cybercrime Matters, Netherlands",
    Publication: "[Speaker]",
    CoAuthors: "March 2018 ",
    desc: "",
    desc2: ""
  },

  {
    id: 37,
    title: "Council of Europe - Introductory Cybercrime and Electronic Evidence Training of Trainers Course for the Pacific Region, Nuku'alofa, Tonga.",
    Publication: "[Trainer/Facilitator]",
    CoAuthors: "September 2017",
    desc: "",
    desc2: ""
  },

  {
    id: 38,
    title: "Council of Europe -East Africa Regional Conference on Cybercrime and Electronic Evidence, Mauritius.",
    Publication: "[Trainer/Facilitator]",
    CoAuthors: "July 2017",
    desc: "",
    desc2: ""
  },

  {
    id: 39,
    title: "Trainer/Expert for Council of Europe, CoE",
    Publication: "[Trainer/Expert]",
    CoAuthors: "May 2016",
    desc: "ECOWAS Improving International Cooperation on Cybercrime & Electronic Evidence in West Africa, Dakar, Senegal.",
    desc2: ""
  },

  {
    id: 40,
    title: "UNCTAD Meeting, Geneva, Switzerland",
    Publication: "[Speaker on Data Protection]",
    CoAuthors: "April 2016",
    desc: "",
    desc2: ""
  },

  {
    id: 41,
    title: "Octopus Conference 2015 – Council of Europe, Strasbourg, France.",
    Publication: "[Session Moderator]",
    CoAuthors: "June 2015",
    desc: "",
    desc2: ""
  },

  {
    id: 42,
    title: "United Nations Conference on Trade & Development (UNCTAD) – Geneva, Switzerland.",
    Publication: "[Speaker]",
    CoAuthors: "March 2015",
    desc: "Intergovernmental Expert Meeting on Cyberlaws and Regulations for Enhancing e- Commerce including Case Studies and Lessons Learned",
    desc2: ""
  },

  {
    id: 43,
    title: "Global Commission on Internet Governance",
    Publication: "[Speaker]",
    CoAuthors: "February 2015",
    desc: "The Royal Institute of International Affairs (Chatham House), London, United Kingdom.",
    desc2: ""
  },


  {
    id: 44,
    title: "Harmonising Cyber legislation in ECOWAS",
    Publication: "[Convenor/Speaker]",
    CoAuthors: "March 2014",
    desc: "Council of Europe & UNCTAD, Accra, Ghana.",
    desc2: ""
  },


  {
    id: 45,
    title: "International MEDays 2014 – Amadeus Institute, Rabat, Morocco.",
    Publication: "[Speaker/Panelist]",
    CoAuthors: "2014",
    desc: "",
    desc2: ""
  },

  {
    id: 46,
    title: "West African Workshop on Computer Forensics and Intellectual Property and Other White-Collar Crimes",
    Publication: "[Observer/Facilitator]",
    CoAuthors: "June 2012",
    desc: "United States Department of Justice, Accra, Ghana",
    desc2: ""
  },

  {
    id: 47,
    title: "International MEDays 2012 – Amadeus Institute, Rabat, Morocco.",
    Publication: "[Speaker/Panelist]",
    CoAuthors: "2012",
    desc: "",
    desc2: ""
  },


  {
    id: 48,
    title: "AITEC Banking & Mobile Money West Africa, AITEC Africa, Accra, Ghana ",
    Publication: "[Speaker]",
    CoAuthors: "May 2012",
    desc: "",
    desc2: ""
  },

  {
    id: 49,
    title: " The 2nd Annual South African Cyber Crime Conference, African Center for Cyberlaw & Cybercrime Prevention (ACCP), Cape Town, South Africa",
    Publication: "[International Guest Speaker]",
    CoAuthors: "April 2012",
    desc: "",
    desc2: ""
  },


  {
    id: 50,
    title: " West Africa Computer Forensics Conference, Computer Forensics Institute of Nigeria (CFIN), Abuja, Nigeria",
    Publication: "[International Guest Speaker]",
    CoAuthors: "April 2012",
    desc: "",
    desc2: ""
  },


  {
    id: 51,
    title: " Forensic Conference for Africa, Eastern Africa Chambers of Commerce & O'Sullivan Associates International, Nairobi, Kenya",
    Publication: "[International Guest Speaker]",
    CoAuthors: "March 2012",
    desc: "",
    desc2: ""
  },


  {
    id: 52,
    title: "The East Africa Economic & High-Tech Crime Forum, Kampala, Uganda",
    Publication: "[Trainer/Facilitator]",
    CoAuthors: "July 2011 ",
    desc: "",
    desc2: ""
  },

  {
    id: 53,
    title: "CEIC Digital Investigations Conference, Guidance Software, Florida, United States of America",
    Publication: "[Facilitator/Technology Provider]",
    CoAuthors: "May 2011",
    desc: "",
    desc2: ""
  },


]

const AcademicPaperCard = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-[#1C1917] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 relative"
        >
            <div className="absolute top-4 right-4 z-10">
                <div className="w-8 h-8 rounded-full bg-[#292524] flex items-center justify-center border border-stone-600">
                    <span className="text-stone-200 text-sm font-medium">#{item.id}</span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#292524] text-stone-200 text-sm rounded-full">
                        {item.Publication}
                    </span>
                    <span className="text-stone-400 text-sm">{item.CoAuthors}</span>
                </div>
                <h3 className="text-xl font-semibold text-stone-200 mb-2">
                    {item.title}
                </h3>
                {item.desc && (
                    <p className="text-stone-400 text-sm mb-2">
                        {item.desc}
                    </p>
                )}
                {item.desc2 && (
                    <p className="text-stone-400 text-sm mb-4">
                        {item.desc2}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

const AcademicPapersHolder = () => {
    return (
        <section className={`w-full bg-[#0d0b0a] py-16 relative ${geist.className}`}>
            <div 
                className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
                style={{ 
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center'
                }}
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-semibold text-stone-200 mb-4 serif_font">
                        Academic Publications
                    </h1>
                    <p className="text-stone-400 max-w-2xl mx-auto">
                        Dr. Albert Antwi-Boasiako has contributed significantly to academic literature through various publications, research papers, and scholarly articles in the field of cybersecurity and digital governance.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item) => (
                        <AcademicPaperCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicPapersHolder;
