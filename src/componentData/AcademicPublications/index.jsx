import React from "react";

const data = [
  {
    id: 1,
    title: " 1st ISACA Accra Chapter Seminar - Cybersecurity in Ghana: The Present and the Future ",
    Publication: "Journal of African Cybersecurity, Vol. 12, Issue 3, 2023",
    CoAuthors: "Dr. Kwame Owusu, Prof. Amina Bello",
    desc: "This paper explores actionable cybersecurity frameworks tailored for developing nations, focusing on Ghana’s national strategy. It provides insights into policy implementation, technological adoption, and capacity building for sustainable digital security."
  },
  {
    id: 2,
    title: "The Role of AI in Enhancing National Cybersecurity",
    Publication: "Journal of African Cybersecurity, Vol. 12, Issue 3, 2023",
    CoAuthors: "Dr. Kwame Owusu, Prof. Amina Bello",
    desc: "This study examines the integration of artificial intelligence in national cybersecurity strategies, with a case study on Ghana’s National Cybersecurity Authority. It highlights AI’s potential to detect threats, improve response times, and foster innovation in digital governance."
  },
  {
    id: 3,
    title: "The Role of AI in Enhancing National Cybersecurity",
    Publication: "Journal of African Cybersecurity, Vol. 12, Issue 3, 2023",
    CoAuthors: "Dr. Kwame Owusu, Prof. Amina Bello",
    desc: "This study examines the integration of artificial intelligence in national cybersecurity strategies, with a case study on Ghana’s National Cybersecurity Authority. It highlights AI’s potential to detect threats, improve response times, and foster innovation in digital governance."
  }
];
const AcademicPublications = () => {
  return (
    <div className="w-full my-10">
      <div className="container mx-auto p-3">
        <div className="w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="md:text-3xl text-xl font-semibold text-white">
               Explore Dr. Antwi-Boasiako’s workshop / Conference{" "}
              <span className="serif_font">Contributions</span>
            </h1>
            <p className="text-sm text-white text-center">
              Dr. Albert Antwi-Boasiako has Attendended or Participated  <br />  in a number of Conferences and Workshops  as Speaker / Panelist / Moderator <br />
              
              
            </p>
          </div>
        </div>
        <div className="w-full  mt-10 flex flex-col items-center justify-center gap-6">
          {data?.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-3/4 bg-[#1C1917] hover:shadow cursor-pointer p-3 rounded-md flex md:flex-row flex-col gap-3"
            >
              <div>
                <div className="w-[40px] h-[40px] bg-[#000000] rounded-md flex items-center justify-center">
                  <h1 className="text-2xl text-[#fff]">{item.id}</h1>
                </div>
              </div>
              <div className="w-full md:p-3">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-xl font-semibold text-[#fff]">
                      {item.title}
                    </h1>
                    <div>
                      <p className="text-sm text-white">
                        Publication: <strong>{item.Publication}</strong>
                      </p>
                      <p className="text-sm text-white">
                        Co-Authors: <strong>{item.CoAuthors}</strong>
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-white">{item.desc}</p>
                  <div className="flex items-center gap-4">
                    <button className="w-[109px] h-[39px] rounded-md text-sm text-white border border-[#fff]">
                      Read paper
                    </button>
                    <button className="w-[109px] h-[39px] rounded-md text-sm text-white">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicPublications;
