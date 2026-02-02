"use client";
import React, { useEffect } from "react";
import AboutHero from "@/componentData/AboutHero";
import Navigation from "@/componentData/NavBar";
import Image from "next/image";
import Footer from "@/componentData/Footer";
import Aos from "aos";
const AboutPic = "/image/CEO 1 1.png";
const AwardPic = "/image/award.jpg";
const MediaInteraction = "/image/media_speech.png"
const compress6 = "/compressed/6.png"
const compress1 = "/compressed/1.png"
const GC3B = "/image/GC3B_Speech.jpg"
const BookPresentation = "/image/barbados_present.jpg";


const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="w-svw h-full font-[family-name:var(--font-geist-sans)] rounded-md">
      <main className="w-full h-full rounded-md shadow-sm">
        <nav className="w-full rounded-md sticky top-0 left-0 z-50">
          <Navigation />
        </nav>
        <AboutHero />
        <section className="w-full h-full background relative">
        <div 
                className="absolute inset-0 bg-[url('/image/icons_bg.png')] opacity-10"
                style={{ 
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center'
                }}
            />
            
        <section className="w-full h-full  bg-stone-900 p-3">
          <div className="w-full h-full container mx-auto md:py-[50px] md:flex items-center justify-around gap-10">
            <div className="w-full h-auto md:flex hidden items-end justify-end">
              <div className="w-[350px] h-[400px] aspect-square rounded-sm overflow-hidden">
                <Image
                  src={AboutPic}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-sm"
                  alt="user"
                />
              </div>
            </div>
            <div className="w-full h-auto">
              <div className="mb-3">
                <h1 className="md:text-4xl text-2xl font-semibold text-stone-200 serif_font">
                  About me
                </h1>
                <hr className="w-[10%] my-2" />
              </div>
              <div className="my-1">
                <p className="md:text-sm text-stone-200 md:text-justify">
                  Dr. Albert Antwi-Boasiako is a cybersecurity expert and author who served as the first Director-General of the Cyber Security Authority
                  (CSA) of Ghana. Prior to his appointment into public office, he founded the e-Crime Bureau in 2011, the first cybersecurity
                  and digital forensics firm with a dedicated digital forensics lab to be established and operate in West Africa.
                </p>



                <br ></br>

                <p className="md:text-sm text-stone-200 md:text-justify">

                  He graduated from the University of Trento in Italy for his undergraduate programme and
                  the University of Portsmouth in the United Kingdom for his postgraduate programme,
                  receiving cum laude and distinction respectively.
                Dr Antwi-Boasiako completed his PhD studies at the University of Pretoria, introducing the <span className="italic text-md serif_font pr-2">Harmonised Model for Digital Evidence Admissibility Assessment (HM-DEAA) </span> as a ground-breaking contribution to digital forensics standardisation. 


                </p>

               

              </div>
              <div className="my-1">
              <div className="my-5">

<p className="md:text-sm text-stone-200 md:text-justify">
  Dr. Albert Antwi-Boasiako led the institutionalisation and development of Ghana&apos;s cybersecurity which progressed from 32.6% in 2017 when he was first appointed to 99.27% in 2024, as reported in the ITU&apos;s GCI, ranking Ghana in Tier-1, a role model country for cybersecurity development globally.
</p>
<br />


</div>



              </div>
            </div>

            <div
              data-aos="fade-up"
              className="w-full h-auto flex items-center justify-center mt-5 md:hidden"
            >
              <div className="md:w-[400px] w-[300px] h-[350px] md:h-[400px] aspect-square rounded-sm overflow-hidden">
                <Image
                  src={AboutPic}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-sm"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="w-full h-full bg-stone-950 p-3">
          <div className="container w-full h-full mx-auto py-[50px] flex items-center justify-center">
            <div className="w-full md:w-2/3">
              <div className="my-5">

                <p className="md:text-sm text-stone-200 md:text-justify">
                  Dr. Albert Antwi-Boasiako led the institutionalisation and development of Ghana's cybersecurity which progressed from 32.6% in 2017 when he was first appointed to 99.27% in 2024, as reported in the ITU's GCI, ranking Ghana in Tier-1, a role model country for cybersecurity development globally.
                </p>
                <br />
                <p className="md:text-sm text-stone-200 md:text-justify">
                  He has conducted cybersecurity related consulting and assignments for international and local organisations including the UNODC, UNCTAD, the EU, Commonwealth Cybercrime Initiative (CCI) of the Commonwealth Secretariat, Global Commission on Internet Governance (GCIG)/Royal Institute of International Affairs (Chatham House) and the Inter-Governmental Action Group against Money Laundering in West Africa (GIABA), among others.
                </p>
                <br ></br>
                <p className="md:text-sm text-stone-200 md:text-justify">
                  He has received numerous local and international recognitions and awards for his contribution to cybersecurity development. In June 2021, he was recognised as the world's 20th Most Influential Security Executive in the Cybersecurity Category by IFSEC Global.
                  In 2022, he was honoured with the Top 20 Tech Leaders Award by the Ghana Information Technology & Telecom Awards and Most Outstanding Personality Award by the Internet Society, Ghana Chapter.

                </p>
                <p className="md:text-sm text-stone-200 md:text-justify">
                </p>

              </div>
              <div className="my-5">
                <p className="md:text-sm text-stone-200 md:text-justify">
                  In January 2025, he received a Trailblazer Award from ISACA - Accra Chapter, for his pioneering role in national and continental cybersecurity leadership and development. SMART Africa Alliance and the Kingdom of Morocco in February 2025 honoured him with Cybersecurity Excellence and Partnership Award in recognition of Dr Antwi-Boasiako's exceptional leadership and significant contributions to the African cybersecurity development.
                </p>
                <br></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                  Through his work, Dr. Antwi-Boasiako has featured as a speaker in more than 100 international and domestic conferences, workshops and forums. He has also delivered training and capacity building programmes in several counties in Africa, Asia, Europe, Latin America, the Pacific, among others.
                </p>
                <br ></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                  He has engaged with several international organisations and development partners on cybersecurity development activities. These organisations and development partners include the World Bank, the World Economic Forum (WEF), International Telecommunications Union (ITU), Global Forum for Cybersecurity Expertise (GFCE), United Nations (UN), UNICEF, Security Governance Initiative (SGI), and Freedom Online Coalition (FOC), among others.
                </p>
              </div>
              <div className="my-5">
                <p className="md:text-sm text-stone-200 md:text-justify">
                  Dr. Antwi-Boasiako previously served on the Independent Advisory Committee (IAC) of the Global Internet Forum to Counter Terrorism (GIFCT) and served as a

                  Bureau Members of the Cybercrime Convention Committee (T-CY) of the Council of Europe. He is also a member of the World Economic Forum's Global Coalition for Digital Safety
                </p>
                <br className="md:hidden"></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="w-full h-auto mt-4 md:mt-0 flex items-center justify-center"
              >
                <div className="md:w-[400px] md:hidden w-[350px] h-[250px] md:h-[400px] object-cover aspect-square rounded-sm">
                  <Image
                    src={GC3B}
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-sm"
                    alt="user"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="w-full h-full  bg-stone-900 p-3">
          <div className="w-full h-full container mx-auto  md:flex items-center gap-3">
            <div className="w-full h-auto">
              <div className="my-1">
            

                <p className="md:text-sm text-stone-200 md:text-justify">

                </p>

                <br></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                </p>
              </div>
              <div className="my-1">
              <p className="md:text-sm text-stone-200 md:text-justify">
  He has conducted cybersecurity related consulting and assignments for international and local organisations including the UNODC, UNCTAD, the EU, Commonwealth Cybercrime Initiative (CCI) of the Commonwealth Secretariat, Global Commission on Internet Governance (GCIG)/Royal Institute of International Affairs (Chatham House) and the Inter-Governmental Action Group against Money Laundering in West Africa (GIABA), among others.
</p>
<br ></br>
<p className="md:text-sm text-stone-200 md:text-justify">
  He has received numerous local and international recognitions and awards for his contribution to cybersecurity development. In June 2021, he was recognised as the world&apos;s 20th Most Influential Security Executive in the Cybersecurity Category by IFSEC Global.
  In 2022, he was honoured with the Top 20 Tech Leaders Award by the Ghana Information Technology & Telecom Awards and Most Outstanding Personality Award by the Internet Society, Ghana Chapter.

</p>
<p className="md:text-sm text-stone-200 md:text-justify">
</p>
                <br></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                  In January 2025, he received a Trailblazer Award from ISACA - Accra Chapter, for his pioneering role in national and continental cybersecurity leadership and development. SMART Africa Alliance and the Kingdom of Morocco in February 2025 honoured him with Cybersecurity Excellence and Partnership Award in recognition of Dr Antwi-Boasiako&apos;s exceptional leadership and significant contributions to the African cybersecurity development.
                </p>
                <br></br>
                {/* <p className="md:text-sm text-stone-200 md:text-justify">
                  The Author currently chairs the Joint
                  Cybersecurity Committee (JCC), an interagency cybersecurity
                  coordinating committee in Ghana. In June 2021, he was
                  recognised as the world's 20th most Influential Security
                  Executive in the Cybersecurity Category by IFSEC Global. He
                  has also received a number of industry awards both in Ghana
                  and abroad including Top 20 Tech Leaders Awards 2022 by the
                  Ghana Information Technology & Telecom Awards and Most
                  Outstanding Personality Award by the Internet Society, Ghana
                  Chapter.
                </p> */}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-auto mt-4 md:mt-0 flex items-center justify-center"
            >
              <div className="md:w-[420px] w-[350px] h-[300px] md:h-[400px] aspect-square rounded-sm overflow-hidden">
                <Image
                  src={AwardPic}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-sm"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </section>


{/* to be edited */}
        <section className="w-full h-full  bg-stone-900 p-3">
          <div className="w-full h-full container mx-auto md:py-[50px] md:flex items-center justify-around gap-3">
            <div className="w-full h-auto md:flex  items-end justify-end">
            <div
              data-aos="fade-up"
              className="w-full h-auto mt-4 md:mt-0 flex items-center justify-center"
            >
              <div className="md:w-[490px] w-[250px] h-[250px] md:h-[370px] aspect-square rounded-sm hidden md:block overflow-hidden">
                <Image
                  src={GC3B}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-sm"
                  alt="user"
                />
              </div>
            </div>
            </div>
            <div className="w-full h-auto">
              <div className="mb-3">
           

                <p className="md:text-sm text-stone-200 md:text-justify">
                  Through his work, Dr. Antwi-Boasiako has featured as a speaker in more than 100 international and domestic conferences, workshops and forums. He has also delivered training and capacity building programmes in several counties in Africa, Asia, Europe, Latin America, the Pacific, among others.
                </p>
                <br ></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                  He has engaged with several international organisations and development partners on cybersecurity development activities. These organisations and development partners include the World Bank, the World Economic Forum (WEF), International Telecommunications Union (ITU), Global Forum for Cybersecurity Expertise (GFCE), United Nations (UN), UNICEF, Security Governance Initiative (SGI), and Freedom Online Coalition (FOC), among others.
                </p>

                <br   ></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                  Dr. Antwi-Boasiako previously served on the Independent Advisory Committee (IAC) of the Global Internet Forum to Counter Terrorism (GIFCT) and served as a Bureau Members of the Cybercrime Convention Committee (T-CY) of the Council of Europe. He is also a member of the World Economic Forum&apos;s Global Coalition for Digital Safety
                </p>
                <br className="md:hidden"></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                </p>
                <br ></br>



              </div>
            </div>

            <div
              data-aos="fade-up"
              className="w-full h-auto flex items-center justify-center mt-5 md:hidden"
            >
              <div className="md:w-[500px] w-[350px] h-[300px] md:h-[400px] aspect-square rounded-sm overflow-hidden">
                <Image
                  src={GC3B}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-sm"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full h-full bg-stone-950 p-3">
          <div className="container w-full h-full mx-auto py-[50px] flex items-center justify-center">
            <div className="w-full md:w-2/3">
              <div className="my-5">
                <p className="md:text-sm text-stone-200 md:text-justify">
                  Dr Antwi-Boasiako continues to lecture at a number of academic
                  institutions and research centres, including the Kofi Annan
                  International Peacekeeping Training Centre (KAIPTC) and the
                  Kwame Nkrumah University of Science and Technology (KNUST),
                  both in Ghana. Dr Antwi-Boasiako has several publications
                  covering information technology, cybersecurity, cybercrimes,
                  data protection and digital forensics to his credit.
                </p>
              </div>
              <div className="my-5">
                <p className="md:text-sm text-stone-200 md:text-justify">
                  The Author has also founded the Education for Development
                  (E4D) Foundation, a non-profit and nongovernmental
                  organisation established to support the education of the
                  underprivileged in Ghana. The establishment of the E4D
                  Foundation is premised on what Plato, an ancient Greek
                  philosopher rightly indicated in The Republic - "the direction
                  in which education starts a man will determine his future in
                  life". The Foundation has been established purposely to
                  support this journey of the underprivileged to change their
                  narratives.
                </p>
              </div>
              <div className="my-5">
                <p className="text-sm text-stone-400"></p>
              </div>
            </div>
          </div>
        </section> */}

{/* to be edited */}
{/* <section className="w-full h-full bg-stone-950 p-3">
          <div className="container w-full h-full mx-auto py-[50px] flex items-center justify-center">
            <div className="w-full md:w-2/3">
              <div className="my-5">

                <p className="md:text-sm text-stone-200 md:text-justify">
                  Dr. Albert Antwi-Boasiako led the institutionalisation and development of Ghana's cybersecurity which progressed from 32.6% in 2017 when he was first appointed to 99.27% in 2024, as reported in the ITU's GCI, ranking Ghana in Tier-1, a role model country for cybersecurity development globally.
                </p>
                <br />
                <p className="md:text-sm text-stone-200 md:text-justify">
                  He has conducted cybersecurity related consulting and assignments for international and local organisations including the UNODC, UNCTAD, the EU, Commonwealth Cybercrime Initiative (CCI) of the Commonwealth Secretariat, Global Commission on Internet Governance (GCIG)/Royal Institute of International Affairs (Chatham House) and the Inter-Governmental Action Group against Money Laundering in West Africa (GIABA), among others.
                </p>
                <br ></br>
                <p className="md:text-sm text-stone-200 md:text-justify">
                  He has received numerous local and international recognitions and awards for his contribution to cybersecurity development. In June 2021, he was recognised as the world's 20th Most Influential Security Executive in the Cybersecurity Category by IFSEC Global.
                  In 2022, he was honoured with the Top 20 Tech Leaders Award by the Ghana Information Technology & Telecom Awards and Most Outstanding Personality Award by the Internet Society, Ghana Chapter.

                </p>
                <p className="md:text-sm text-stone-200 md:text-justify">
                </p>

              </div>
              <div className="my-5">
                <p className="md:text-sm text-stone-200 md:text-justify">
                  In January 2025, he received a Trailblazer Award from ISACA - Accra Chapter, for his pioneering role in national and continental cybersecurity leadership and development. SMART Africa Alliance and the Kingdom of Morocco in February 2025 honoured him with Cybersecurity Excellence and Partnership Award in recognition of Dr Antwi-Boasiako's exceptional leadership and significant contributions to the African cybersecurity development.
                </p>
                <br></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                  Through his work, Dr. Antwi-Boasiako has featured as a speaker in more than 100 international and domestic conferences, workshops and forums. He has also delivered training and capacity building programmes in several counties in Africa, Asia, Europe, Latin America, the Pacific, among others.
                </p>
                <br ></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                  He has engaged with several international organisations and development partners on cybersecurity development activities. These organisations and development partners include the World Bank, the World Economic Forum (WEF), International Telecommunications Union (ITU), Global Forum for Cybersecurity Expertise (GFCE), United Nations (UN), UNICEF, Security Governance Initiative (SGI), and Freedom Online Coalition (FOC), among others.
                </p>
              </div>
              <div className="my-5">
                <p className="md:text-sm text-stone-200 md:text-justify">
                  Dr. Antwi-Boasiako previously served on the Independent Advisory Committee (IAC) of the Global Internet Forum to Counter Terrorism (GIFCT) and served as a

                  Bureau Members of the Cybercrime Convention Committee (T-CY) of the Council of Europe. He is also a member of the World Economic Forum's Global Coalition for Digital Safety
                </p>
                <br className="md:hidden"></br>

                <p className="md:text-sm text-stone-200 md:text-justify">
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="w-full h-auto mt-4 md:mt-0 flex items-center justify-center"
              >
                <div className="md:w-[400px] md:hidden w-[350px] h-[250px] md:h-[400px] object-cover aspect-square rounded-sm">
                  <Image
                    src={GC3B}
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-sm"
                    alt="user"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}





        {/* to continue */}

        <section className="w-full h-full  bg-stone-900 p-3">
          <div className="w-full h-full container mx-auto  md:flex items-center gap-3">
            <div className="w-full h-auto">
      
              <div className="my-5">
               

                <p className="md:text-sm text-stone-200 md:text-justify">
                  Dr. Antwi-Boasiako recently published a book, <span className="italic text-md serif_font pr-2">The 10 Commandments for Sustainable National Cybersecurity Development – Africa in Context: Practical Lessons and Good Practices.</span>

                  The book – currently available in English and French, highlights the practical
                  imperatives that nations – which are currently building their cybersecurity systems, must implement to develop a sustainable cybersecurity ecosystem, drawing experiences from the African continent and global best practices.

                </p>
                <br ></br>

          
                <p className="md:text-sm text-stone-200 md:text-justify">

                Dr Antwi-Boasiako also has publications covering information technology, cybersecurity, cybercrimes, data protection and digital forensics.

Dr. Antwi-Boasiako is also the founder of the Education for Development (E4D) Foundation, a not-for-profit organisation established to support the education of the underprivileged in his home District of Ghana.
                 
                     </p>
                <br className="md:hidden"></br>


              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-auto mt-4 md:mt-0 flex items-center justify-center"
            >
              <div className="md:w-[500px] w-[350px] h-[300px] md:h-[400px] aspect-square rounded-sm overflow-hidden">
                <Image
                  src={BookPresentation}
                  width={1000}
                  height={1000}
                  className="object-contain rounded-sm"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </section>



        </section>


      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
