"use client";
import { useState } from "react";
import Navigation from "@/componentData/NavBar";
import React from "react";
import Pic1 from "../../../public/image/book_table.jpg";
import Pic2 from "../../../public/image/piled_books.jpg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Book1 from "../../../public/image/book1.jpg";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Footer from "@/componentData/Footer"

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    phone: "",
  });

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const validatePhoneNumber = (number) => {
    // Matches international format, allows optional country code
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    if (!validatePhoneNumber(value)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid phone number",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const { toast } = useToast();

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setCountry("");
    setMessage("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    

    try {
      setLoading(true);
      const response = await axios.post("/api/mail", {
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        message,
      });
      console.log(response);

      toast({
        title: "Email ",
        description: "Email sent successfully",
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });

      resetFields();
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error Sending Email",
        description: "please try again",
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
      setLoading(false);
    }
  };

  return (
    <div className=" w-svw min-h-[100vh] md:fixed bg-stone-950 font-[family-name:var(--font-geist-sans)] rounded-md">
      <main className="w-full h-full rounded-md shadow-sm">
        <nav className="w-full rounded-md sticky top-0 left-0 z-50">
          <Navigation />
        </nav>
        <section className="w-full h-full space-y-2 flex md:flex-row flex-col gap-2 container mx-auto md:pt-12 pt-4">
          <div className="w-full mx-auto flex justify-center  ">
            <div className="w-3/4 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold text-stone-500"></p>
                <h1 className="text-3xl font-bold serif_font text-stone-300">
                  Let&apos;s Connect !
                </h1>
                <p className="md:text-base text-sm text-stone-300">
                  Thank you for your interest in connecting! Whether you have
                  questions, collaboration opportunities, or simply want to
                  share insights, I would be delighted to hear from you
                </p>
              </div>
              <div className="w-full h-auto flex items-center justify-center relative">
                <div className="w-[200px] h-[180px] rounded-md aspect-square object-cover">
                  <Image
                    src={Book1}
                    alt="book"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="md:w-[180px]  md:h-[180px]  w-[90px] h-[90px] rounded-md aspect-square object-cover absolute right-[15px] top-[126px]">
                  <Image
                    src={Pic1}
                    alt="book"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="md:w-[180px]  md:h-[180px]  w-[90px] h-[90px] rounded-md aspect-square object-cover absolute left-[10px] top-[126px]">
                  <Image
                    src={Pic2}
                    alt="book"
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto pb-10 flex  justify-center">
            <div className="w-4/5 h-fit mt-[85px] md:mt-0 flex flex-col gap-3 bg-stone-900 md:p-10 p-3 rounded-md">
              {/* <h3 className="md:text-base text-sm  text-stone-200">
                Fill out form and we will be in touch right away.
              </h3> */}
              <form onSubmit={sendEmail} className="w-full flex flex-col gap-3">
                <div className="w-full flex gap-5">
                  <div className="w-full">
                    <label htmlFor="#" className="md:text-base text-sm  text-stone-200">
                      First name
                    </label>
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full md:text-base text-sm  text-stone-200"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="#" className="md:text-base text-sm  text-stone-200">
                      Last name
                    </label>
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full md:text-base text-sm  text-stone-200"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="#" className="md:text-base text-sm  text-stone-200">
                    Email
                  </label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full md:text-base text-sm  text-stone-200"
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="#" className="md:text-base text-sm text-stone-200">
                    Phone number
                  </label>
                  <PhoneInput
                    country={"gh"}
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    placeholder="+233 XX XXX XXXX"
                    enableSearch={true}
                    inputProps={{
                      required: true,
                      autoFocus: true
                    }}
                    preferredCountries={["gh"]}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      backgroundColor: "transparent",
                      border: "0.5px solid #464646",
                      color: "rgb(229 229 229)",
                      borderRadius: "0.375rem"
                    }}
                    dropdownStyle={{
                      backgroundColor: "rgb(28 25 23)",
                      color: "rgb(229 229 229)"
                    }}
                    buttonStyle={{
                      backgroundColor: "transparent",
                      border: "0.5px solid #464646",
                      borderRight: "none"
                    }}
                    countryCodeEditable={false}
                    containerClass="phone-input"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="#" className="md:text-base text-sm  text-stone-200">
                    Location
                  </label>
                  <Select
                    onValueChange={(value) => setCountry(value)}
                    value={country}
                    required
                  >
                    <SelectTrigger className="w-full text-stone-200 border-[0.5px] border-[#464646]">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem
                          key={country.toLowerCase()}
                          value={country.toLowerCase()}
                        >
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <label htmlFor="#" className="md:text-base text-sm  text-stone-200">
                    How can we help?
                  </label>
                  <Textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-sm text-stone-200 border-[0.5px] border-[#464646]"
                  />
                </div>
                <button className="relative w-full md:text-base rounded-md font-semibold h-[40px] text-stone-200 text-sm flex items-center justify-center group overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-stone-600 via-stone-500 to-stone-600 opacity-90 group-hover:bg-white transition-all"></span>
                  <span className="absolute inset-[1px] bg-stone-950 rounded-md group-hover:bg-white transition-all"></span>
                  <span className="relative group-hover:text-black transition-colors">
                    {loading ? (
                      <CgSpinner
                        className="animate-spin text-stone-200 group-hover:text-black"
                        size={24}
                      />
                    ) : (
                      "Submit"
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default ContactPage;
