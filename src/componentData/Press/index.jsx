"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Geist } from 'next/font/google';
import Link from 'next/link';
import TrentoMedia from "../../../public/image/media_interview.jpg";
import GC3BSpeech from "../../../public/image/GC3B_Speech.jpg";
import DailyGuide from "../../../public/image/press/daily_guide.jpg"
import GhanaCyber from "../../../public/image/press/ghana_cyber.webp"
import DrAndAwuah from "../../../public/image/press/Dr_Antwi_Boasiako_right_and_Mr_Awuah.webp"
import GraphicBookLaunch from "../../../public/image/press/graphic.jpg"
import CSANCPS from "../../../public/image/press/csa_ghana.png"
import IllegalLendingApp from "../../../public/image/press/illegal_lending.jpeg"
import CyberSecurityWeek from "../../../public/image/press/cybersecurity_week.jpg"
import GC3B from "../../../public/image/press/gc3b.png"
import SharedDetermination from "../../../public/image/press/shared_determination.png"
import ExecutiveChairman from "../../../public/image/press/executive_chairman_e_crime.jpeg"
import chroniclingGhana from "../../../public/image/press/chronicling_ghana.jpeg"


const geist = Geist({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const pressData = [
   {
    id: 10,
    title: "Former Cyber Security Authority Boss appointed Executive Chairman of e-Crime Bureau",
    description: "Dr. Albert Antwi-Boasiako, the former Director-General of the Cyber Security Authority (CSA), has been appointed as the Executive Chairman of e-Crime Bureau, following his selection by the newly inaugurated Board of Directors",
    date: "December 15, 2025",
    image: ExecutiveChairman,
    // link: "/press/digital-security-challenges",
    link: "https://www.myjoyonline.com/former-cyber-security-authority-boss-appointed-executive-chairman-of-e-crime-bureau/",
    content: {
      mainImage: ExecutiveChairman,
      gallery: [ExecutiveChairman],
      video: null,
      fullText:"",
      quotes: [
        // {
        //   text: "Digital security challenges require a multi-faceted approach. We need to work together across sectors and borders.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["Africa Defence Forum", "Cybersecurity", "National Cyber Security Authority"]
    }
  },

    {
    id: 11,
    title: "Former President Akufo-Addo launches ‘The Republic’ chronicling Ghana’s cybersecurity journey",
    description: "Former President Nana Addo Dankwa Akufo-Addo has launched a new book that documents Ghana’s transformation from a country grappling with digital threats to one recognised globally as a role model in cybersecurity",
    date: "November 26, 2025",
    image: chroniclingGhana,
    // link: "/press/digital-security-challenges",
    link: "https://www.gbcghanaonline.com/general/republic-akufo-addo/2025/",
    content: {
      mainImage: chroniclingGhana,
      gallery: [chroniclingGhana],
      video: null,
      fullText:"",
      quotes: [
        // {
        //   text: "Digital security challenges require a multi-faceted approach. We need to work together across sectors and borders.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["Africa Defence Forum", "Cybersecurity", "National Cyber Security Authority"]
    }
  },
   
  {
    id: 9,
    title: "A Shared Determination",
    description: "A conversation with Dr. Albert Antwi-Boasiako, former Director-General of Ghana’s Cyber Security Authority.",
    date: "August 6, 2025",
    image: SharedDetermination,
    // link: "/press/digital-security-challenges",
    link: "https://adf-magazine.com/2025/08/a-shared-determination/",
    content: {
      mainImage: SharedDetermination,
      gallery: [SharedDetermination],
      video: null,
      fullText:"",
      quotes: [
        // {
        //   text: "Digital security challenges require a multi-faceted approach. We need to work together across sectors and borders.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["Africa Defence Forum", "Cybersecurity", "National Cyber Security Authority"]
    }
  },
  {
    id: 4,
    title: "Cyber Security Authority boss launches book",
    description: "A book that seeks to provide a blueprint for countries looking to develop and enhance their cybersecurity infrastructure has been launched in Accra.",
    date: "December 11, 2024",
    image: GraphicBookLaunch,
    // link: "/press/digital-security-challenges",
    link: "https://www.graphic.com.gh/news/general-news/ghana-news-cyber-security-authority-boss-launches-book.html",
    content: {
      mainImage: GraphicBookLaunch,
      gallery: [GraphicBookLaunch],
      video: null,
      fullText:
        `Titled, "The Ten Commandments for Sustaining National Cybersecurity Development: Africa in Context, Practical Lessons and Good Practices," the book was authored by the Director-General of the National Cyber Security Authority, Dr Albert Antwi-Boasiako.


The 11-chapter book, which highlights the importance of leadership, vision and commitment at all levels ranging from government, private sector and civil society, was written from the perspectives of the man whose leadership role helped to develop the country's cybersecurity landscape from its formative years into a tier 1 status on the International Telecommunications

Union Global Cybersecurity index with a score of 99.27 per cent.

Other thematic areas featured in the book include awareness creation, capacity-building and sustainable funding for cyber security, among others. 

Author
Dr Antwi-Boasiako explained that the book is the outcome of his experiences working as a trainer on the continent and engaging with various stakeholders in the sector. 

"The book is basically a representation of the various interactions, and experience that I have gathered around the continent; in the private sector, government sector, as well as international partners that I have engaged with," he said.

Reflecting on his journey in the field of cybersecurity, Dr Antwi-Boasiako recounted his early experiences establishing the E-Crime Bureau and how his forensic laboratory became a vital resource for both state and private sector institutions in the region, adding that the decision to write the book was birthed about 15 years ago in the industry.

The Ten Commandments, he said, served as a guide for nations looking to enhance their cybersecurity infrastructure.

Dr Antwi-Boasiako called on all stakeholders to work collaboratively to develop robust cybersecurity policies and practices, stressing that a comprehensive approach was critical to safeguarding national interests in the digital age.

Timely
The Chief Director of the Ministry of National Security, Sena Siaw-Boateng, described Dr Antwi-Boasiako's book as a practical masterpiece. She recommended the book to policymakers, practitioners and stakeholders to help prioritise and sustain eﬀorts in securing the country's digital spaces.

She said that the release of the book was timely. "This book could not have come at a better time. As we navigate an era defined by digital transformation, the security of our cyberspace has become not just a national priority but a developmental imperative," she said.

For his part, the Commissioner-General, Ghana Boundary Commission, Maj. Gen. Dr Emmanuel Wekem Kotia, who received the book, said the revelations in the book were generally relevant to provide insight for countries developing cyber security strategies in the African context.

"The book can serve as a manual and a call to action for government to prioritise cyber security as a fundamental component of national security and sustainable development as the digital revolution continues to redefine society," he said.`,
      quotes: [
        // {
        //   text: "Digital security challenges require a multi-faceted approach. We need to work together across sectors and borders.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["Ghana Boundary Commission", "Cybersecurity", "National Cyber Security Authority"]
    }
  },

  {
    id: 5,
    title: "Ghana Launches National Cybersecurity Policy and Strategy",
    description: "Expert insights on navigating the complex landscape of cybersecurity in an increasingly digital world.",
    date: "October 1, 2024",
    image: CSANCPS,
    // link: "/press/cybersecurity-digital-age",
    link: "https://www.csa.gov.gh/ghana-launches-national-cybersecurity-policy-and-strategy.php",
    content: {
      mainImage: CSANCPS,
      gallery: [CSANCPS],
      video: null,
      fullText:
        `The government has launched Ghana's National Cybersecurity Policy and Strategy (NCPS) aimed at addressing the increasing cybersecurity threats arising from the nation's rapid digital transformation.

The revised policy represents a strategic response to both existing and anticipated cyber threats that could undermine Ghana's gains in digitalisation provides clear focus and direction to guide the development of Ghana's cybersecurity over the next five years.

Unveiling the policy at the official opening of the 2024 National Cybersecurity Awareness Month (NCSAM) in Accra with the top brass of the Ghana Armed Forces and cybersecurity stakeholders in attendance, the Communications and Digitalisation Minister, Hon. Mrs Ursula Owusu-Ekuful, described the policy as a landmark achievement critical to Ghana's cybersecurity development.

    The policy is hinged across five critical pillars – Legal Measures, Technical Measures, Organisational Measures, Capacity Building, and Cooperation. It is consistent with the International Telecommunication Union's Global Cybersecurity Agenda guideline for cybersecurity development aimed at enhancing confidence, trust, and security in the ICT architecture of ITU member countries including Ghana.

    It further serves as an implementation tool to articulate the purpose of the policy statements which are to Build a Resilient Digital Ecosystem, Secure Digital Infrastructure, Develop National Capacity, Deter Cybercrime, and Strengthen Cooperation. These provide clear strategic objectives and initiatives with their corresponding descriptions, timelines and relevant stakeholders required to implement the strategic imperatives for a secure and resilient digital Ghana.

    Addressing the invited dignitaries, the minister underscored the fact that cyber threats were global in nature and their manifestations localised with Ghana not immune to such threats.

    She added that the existential dangers posed by cyber-attacks have led to the recognition of the need for a national strategy to prevent potential attacks whenever possible and to prepare for eventual incidents should they occur.

    "Our world today has changed, with digitalisation presenting both opportunities and risks to individuals, businesses, societies, and nations. The growing dependency on networks and digital systems for socio-economic development has attracted the attention of malicious actors, who seek to undermine the confidentiality, integrity, and availability of these infrastructures," Mrs. Ursula Owusu-stated.

On that score the minister averred that the adoption of the NCPS itself represented a strategic response to both existing and anticipated cyber threats that could undermine Ghana's gains in digitalisation.

She indicated that the Cyber Security Authority (CSA), as the national agency responsible for cybersecurity matters in the country, acknowledges its lead role in implementing the NCPS but added that the multi-dimensional nature of cybersecurity required a multi-sectoral response.

She added that the collective responsibility needed to implement the national strategy was enshrined in the Cybersecurity Act, 2020 (Act 1038). She cited the role of public sector institutions through the Joint Cybersecurity Committee (JCC) and the creation of the Industry Forum, serving as essential vehicles for the collaboration of all stakeholders.

"Our goal of preventing cyber-attacks against Ghana's digital infrastructure is shared; we each have differentiated responsibilities reflective of our mandates as public sector agencies and private sector actors," the minister emphasised.

The Director-General of the CSA, Dr. Albert Antwi-Boasiako, whose office superintended over the successful review of the NCPS, intimated that government served as an enabler for cybersecurity development adding that the policy represented a vital intervention to guide the actions and thinking of all stakeholders as they worked to minimise risks and secure the benefits of a trusted digital environment for businesses, children and the state.

"As the CSA looks forward to collaborating with implementing partners, the vision remains clear: to achieve a secure and resilient digital ecosystem for the benefit of everyone," he added.
`,
      quotes: [
        // {
        //   text: "Cybersecurity is a dynamic field. We need to stay ahead of the curve to protect our digital assets.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["Cybersecurity", "Digital Age", "Expert Perspectives", "Insights"]
    }
  },

  {
    id: 2,
    title: "Ghana Official to Head Africa's New Cybersecurity Authority",
    description: "Ghana's Cyber Security Authority will lead the newly launched African Network of Cybersecurity Authorities (ANCA), a body established to improve cybersecurity coordination across the continent.",
    date: "December 11, 2023",
    image: GhanaCyber,
    // link: "/press/ghana-cybersecurity-landscape",
    link: "https://www.darkreading.com/cybersecurity-operations/african-cybersecurity-authority-body-announces-inaugural-chair",
    content: {
      mainImage: GhanaCyber,
      gallery: [GhanaCyber],
      video: null,
      fullText: `Ghana's Cyber Security Authority will lead the newly launched African Network of Cybersecurity Authorities (ANCA), a body established to improve cybersecurity coordination across the continent.
      
      
      Dr. Albert Antwi-Boasiako will serve as the inaugural chair of ANCA and head up initiatives including setting up a platform for operational exchanges and practical cooperation among members; growing the membership of the network; and articulating Africa's voice in cybersecurity matters in global discussions. Antwi-Boasiako also will remain in his role as director-general of Ghana's Cyber Security Authority.
      
      
      ANCA comprises the 17 African countries that have established dedicated National Cybersecurity Authorities, although that is fewer than half of Africa's 54 nations.`,
      quotes: [
        // {
        //   text: "Ghana's digital security landscape is evolving rapidly. We need to be proactive in building robust cybersecurity infrastructure.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["African Network of Cybersecurity Authorities (ANCA)"]
    }
  },

  {
    id: 8,
    title: " Global Conference on Cyber Capacity Building results in action framework for Cyber Resilient Development",
    description: "The Ministry of Communications will begin their National Cyber Security Week 2017 from 23rd – 27th October 2017.",
    date: "November 29, 2023",
    image: GC3B,
    // link: "/press/resilient-cybersecurity-infrastructure",
    link: "https://www.csa.gov.gh/resources/GC3B%20Press%20release%20-%20Accra.pdf",
    content: {
      mainImage: GC3B,
      gallery: [GC3B],
      video: null,
      fullText: `
    
    `,
      quotes: [
        // {
        //   text: "Cybersecurity infrastructure development requires a comprehensive and coordinated approach.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["Global Conference on Cyber Capacity Building (GC3B)"]
    }
  },

  {
    id: 6,
    title: "Over 400 persons arrested in illegal lending apps raid",
    description: "Some 422 suspects have been arrested during a raid on illegal lending apps at three separate locations in Accra.",
    date: "July 13, 2023",
    image: IllegalLendingApp,
    // link: "/press/resilient-cybersecurity-infrastructure",
    link: "https://thebftonline.com/2023/07/13/over-400-persons-arrested-in-illegal-lending-apps-raid/",
    content: {
      mainImage: IllegalLendingApp,
      gallery: [IllegalLendingApp],
      video: null,
      fullText: `Some 422 suspects have been arrested during a raid on illegal lending apps at three separate locations in Accra.

    The raid by a joint technical task force comprising the Economic and Organised Crime Office (EOCO), Bank of Ghana (BoG) and Cyber Security Authority (CSA) follows painstaking investigations into some 270 cases of cyberbullying, fraud, extortion and abuse of customer data.
    
    Investigations led by the CSA identified 150 unlicenced digital loan application platforms whose owners or administrators resort to the use of death-threats and non-consensual distribution of private messages, images and videos – mainly accessed through authorised permissions granted by unsuspecting victims who patronise those digital platforms.
    
    In an attempt to curb these activities, the task force on Monday, July 10, 2023, with support from the Ghana Police Service, conducted swoops in three different suburbs in the capital where a total of 419 Ghanaians and the three foreign nationals – Chinese, Indian and Pakistani – were arrested.
    
    Addressing journalists in Accra, Director General-CSA, Dr. Albert Antwi-Boasiako, attributed the raid's success to continuous collaboration among members of the Joint Cybersecurity Committee (JCC).
    
    The committee was set up pursuant to Section 13 of the Cybersecurity Act 2020 (Act 1038) to collaborate with the Authority and the sectors or institutions represented on the Committee or beyond, for the implementation of relevant cybersecurity measures.
    
    "This is a story of action taken by a number of institutions," Dr. Antwi-Boasiako said, adding: "Information and intelligence gathered from separate investigations conducted by the CSA, BoG and EOCO were shared among members to deepen their understanding of the modus operandi of these illegal digital lending apps, which was to intimidate borrowers ahead of their loan payment dates".
    
    Additionally, Dr. Antwi-Boasiako said, the investigations uncovered that these illegal lending apps accessed personal data such as messages, contact details, images and videos from the devices of borrowers – which were then used to blackmail them.
    
    "Borrowers were threatened with having their identities published by owners of these lending apps. Such actions are infringements on the protected rights of individuals enshrined in the 1992 Constitution, and equally violate data protection principles provided under section 13 of Ghana's data protection Act," he said.
    
    Items retrieved
    
    Some 654 mobile phones, 22 laptop computers and about 800 SIM cards were also retrieved during the exercise, disclosed Executive Director-EOCO, COP Maame Yaa Tiwaa Addo.
    
    Reiterating EOCO's commitment to aggressively monitor and investigate economic and organised crimes committed in the country – and prosecute those offences to recover the proceeds of crime, she said the suspects are currently on bail assisting investigations.
    
    Director of Financial Stability at the BoG, Dr. Joseph France, thanked the task force for working closely to clamp down on "the inimical practices of these illegal lenders – intimidating and abusing defaulting borrowers by sending defaming messages to contacts on the borrowers' phones, which has caused suicidal tendencies among some of the borrowers".
    
    He expressed the central bank's determination to build a robust, resilient and safe digital financial service industry, trusted by both local and international stakeholders. "Together with the EOCO, Cyber Security Authority, Police Service and all other relevant state actors, the Bank of Ghana is determined to rid the space of all illegal service providers," he stated.
    
    Dr. France added that the BoG has started engaging international platform service providers on the matter: "We are collaborating on a solution to prevent the hosting of unapproved credit apps targetted at the Ghanaian market".`,
      quotes: [
        {
          text: "Cybersecurity infrastructure development requires a comprehensive and coordinated approach.",
          author: "Dr. Albert Antwi-Boasiako"
        }
      ],
      tags: ["Cybersecurity", "Infrastructure", "National Priority", "Strategic Approach"]
    }
  },

  {
    id: 3,
    title: "CSA, GAB resolve to ensure resilient digital ecosystem …for financial sector",
    description: "The Cyber Security Authority (CSA) and the Ghana Association of Banks (GAB) have had high level engagements on the role of banks in ensuring a secure and resilient digital ecosystem for the financial sector.",
    date: "April 26, 2022",
    image: DrAndAwuah,
    // link: "/press/csa-gab-resolve-to-ensure-resilient-digital-ecosystem-for-financial-sector",
    link: "https://ghanaiantimes.com.gh/csa-gab-resolve-to-ensure-resilient-digital-ecosystem-for-financial-sector",
    content: {
      mainImage: DrAndAwuah,
      gallery: [DrAndAwuah],
      video: null,
      fullText:
        `The Cyber Security Authority (CSA) and the Ghana Association of Banks (GAB) have had high level engagements on the role of banks in ensuring a secure and resilient digital ecosystem for the financial sector.

The parties have stressed the need to strengthen cyber security, introduce practical strategies for the implementation of the Cyber security Act 2020 (Act 1038), and make a possible revision of the Bank of Ghana's (BoG) Cyber and Information Security Directive.

This was contained in a statement issued and signed by Dr Albert Antwi-Boasiako, Acting Director-General, CSA, and Mr John Awuah, Chief Executive Officer (CEO), GBA, and copied to the Ghanaian Times last Saturday.

The statement said the parties recognised the importance of securing the banking sector, especially critical systems as they have been designated as Critical Information Infrastructure (CII) pursuant to Section 35 of the Cyber security Act, 2020.

They agreed that security in the banking sector could be improved if there was effective collaboration and partnerships with other institutions such as the Financial Intelligence Centre (FIC), the Economic Organised Crime Office (EOCO), the Criminal Investigations Department (CID), and the CSA.

The CSA and the GBA, therefore, resolved to collaborate with the BoG to review the existing financial sector cybersecurity directive based on the current cyber risk profile of the financial sector and to align with the cybersecurity Act 2020 (Act 1038).

They also signed a Memorandum of Understanding on capacity building and awareness creation on cyber risks in the banking sector and resolved to sensitise the public on the latest trends in cyber threats and ways they could protect themselves.

The statement said they again adopted a multi-stakeholder approach through partnerships and joint activities to increase stakeholder knowledge, understanding and compliance of the cybersecurity Act, 2020 and to promote collaboration with other agencies to improve cybersecurity in the financial sector.

It said they would collaborate and contribute to the establishment of the Industry Forum pursuant to Section 81 of Act 1038.

Both the CSA and GAB resolved to work closely with the BoG and other relevant agencies to ensure alignment of the various regulatory responsibilities of Banks to facilitate effective cybersecurity development in the banking sector," the statement added.

Present at the meeting were representatives from the Information Security Office of the Bank of Ghana (BoG).

BY TIMES REPORTER`,
      quotes: [
        // {
        //   text: "A unified cybersecurity strategy is essential for the collective security of African nations.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["Cyber Security Authority (CSA)", "Ghana Association of Banks (GAB)", "Financial Intelligence Centre (FIC)", "Economic Organised Crime Office (EOCO)", "Criminal Investigations Department (CID)"]
    }
  },

  {
    id: 1,
    title: "Ghana To Serve On Internet Counter Terrorism Committee",
    description: "Ghana has been appointed as a member of the Independent Advisory Committee (IAC) of the Global Internet Forum to Counter Terrorism (GIFTC).",
    date: "June 15, 2020",
    image: DailyGuide,
    link: "https://dailyguidenetwork.com/ghana-to-serve-on-internet-counter-terrorism-committee/",
    // link: "/press/ghana-to-serve-on-internet-counter-terrorism-committee",
    content: {
      mainImage: DailyGuide,
      gallery: [DailyGuide],
      video: null,
      fullText: `Ghana has been appointed as a member of the Independent Advisory Committee (IAC) of the Global Internet Forum to Counter Terrorism (GIFTC).

A statement from the Ministry of Communications said "this nomination is due to Ghana's political commitment and human right-centric approach to developing its cybersecurity, as well as its active engagement at the regional and international level to promote responsible use of the Internet."

According to the statement, Dr. Albert Antwi-Boasiako, the current head of the National Cyber Security Centre (NCSC), will represent Ghana on the committee.

The NCSC was established in 2018 under the Ministry of Communications to coordinate cybersecurity response in government and the private sector.

Within the past three years, the Ministry of Communications headed by Ursula Owusu-Ekuful, through the NCSC, has improved Ghana's international cooperation efforts in the fight against cybercrime.

In December 2018, Ghana formally acceded to the Convention on Cybercrime, also known as the Budapest Convention and ratified the African Union Convention on Cyber Security and Personal Data Protection, known as the Malabo Convention, becoming the 5th country on the continent to ratify the treaty.

In 2019, Ghana chaired the Freedom Online Coalition, an inter-governmental body which promotes digital rights, and during this period, the Government of Ghana collaborated with the German Government to draft a Digital Inclusion Statement which has been adopted by all FOC members.

The Ministry of Communications has also been actively involved in the United Nations Open-Ended Working Group (OEWG), whose activities are aimed at improving international response to cybercrimes.

Due to Ghana's commitment to ensure an efficient cybersecurity, the ECOWAS Commission has requested that Ghana lead cybersecurity efforts in the sub-region.

The GIFCT was established in July 2017 by a group of companies dedicated to disrupting terrorists' abuse and misuse of member platforms. The original forum was led by a rotating chair drawn from the four founding companies — Facebook, Microsoft, Twitter, and YouTube.

The GIFCT facilitates knowledge-sharing, technical collaboration and sponsored research towards preventing the use of digital platforms, including social media for terrorist-related activities such as the March 2019 Christchurch attack which killed about 51 people and left many injured.

The IAC is part of the GIFCT and will serve as a consultative body dedicated to maximizing the effectiveness of the GIFCT and establishing engagements among government, civil society, and industry, the statement said.

"Ghana's membership of the Independent Advisory Committee of the Global Internet Forum to Counter Terrorism is further recognition of our leadership role in improving cybersecurity in the world," the statement added.

By Ernest Kofi Adu
`,
      quotes: [
        // {
        //   text: "The future of Africa's digital security depends on our ability to build resilient infrastructure while developing local expertise.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["Independent Advisory Committee (IAC) ", "Global Internet Forum to Counter Terrorism (GIFTC)", "National Cyber Security Centre (NCSC)", "ECOWAS"]
    }
  },

  {
    id: 7,
    title: "Ministry Of Communication Begins National Cybersecurity Week On 23rd October, 2017",
    description: "The Ministry of Communications will begin their National Cyber Security Week 2017 from 23rd – 27th October 2017.",
    date: "October 23, 2017",
    image: CyberSecurityWeek,
    // link: "/press/resilient-cybersecurity-infrastructure",
    link: "https://techlabari.com/ministry-communication-begins-national-cybersecurity-week-23rd-october-2017/",
    content: {
      mainImage: CyberSecurityWeek,
      gallery: [CyberSecurityWeek],
      video: null,
      fullText: `The Ministry of Communications will begin their National Cyber Security Week 2017 from 23rd – 27th October 2017.

The celebration, themed "Securing Ghana's Digital Journey" will feature an informative and engaging programme of activities including thought leadership sessions, panel discussions, lectures, demonstrations, exhibitions and training sessions.

The aim of the National Cyber Security Week is to share ideas and best practices as well as raise awareness of cybersecurity and digital citizenship.

The event will take place at the Accra International Conference Center and will host various stakeholders including GSMA, World Vision, ISACA, UNDP and NITA.

Speakers For the Event will include the President, Nana Akufo Addo, Mr Alex Oppong (e-Crime Burea), Hon. Ursula Owusu (Minister Of Communication), Patricia Adusei-Poku (Executive Director of the Data Protection Commission) and many others.

Apart from a host of speakers and panels, there will also be workshops including an Ethical Hacking workshop, Cybersecurity Awareness and Network Forensics and Incident Handling.

If you're into cybersecurity, this event is definitely up your alley.
    
    `,
      quotes: [
        // {
        //   text: "Cybersecurity infrastructure development requires a comprehensive and coordinated approach.",
        //   author: "Dr. Albert Antwi-Boasiako"
        // }
      ],
      tags: ["ISACA", "UNDP", "NITA", "World Vision", "GSMA"]
    }
  },
];

const PressCard = ({ item }) => {
  return (
    <Link href={item.link}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden md:bg-[#1C1917] shadow-md md:rounded-lg"
      >
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="relative h-[250px] w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
          </div>
          <div className="p-6">
            <h3 className={`${geist.variable} text-lg font-semibold text-stone-200 line-clamp-2 mb-2`}>
              {item.title}
            </h3>
            <p className="text-sm text-stone-400 line-clamp-3 mb-2">
              {item.description}
            </p>
            <p className="text-sm text-stone-500">{item.date}</p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden pb-4 border-b border-stone-700">
          <div className="relative group cursor-pointer flex flex-row gap-4 items-center">
            <div className="relative aspect-[16/9] overflow-hidden w-1/3 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-30" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-normal text-stone-200 leading-tight group-hover:text-stone-100 transition-colors duration-200 upp">
                {item.title}
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const PressHolder = () => {
  return (
    <section className="w-full bg-[#0d0b0a] py-16 relative">
      <div
        className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
        style={{
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className={`serif_font text-3xl font-bold text-stone-200 mb-4`}>
            Press & Media Engagement
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {pressData.map((item) => (
            <PressCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressHolder;
