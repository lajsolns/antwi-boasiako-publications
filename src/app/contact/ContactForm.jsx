// src/components/ContactForm.jsx
"use client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  // ... rest of the countries
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ phone: "" });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value, countryData) => {
    setFormData(prev => ({ ...prev, phoneNumber: value }));
    // Add any phone number validation here if needed
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, country: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Your existing form submission logic
      const response = await axios.post("/api/send-email", formData);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error Sending Email",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium text-stone-200">
            First Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="bg-stone-800 border-stone-700 text-stone-200"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-stone-200">
            Last Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="bg-stone-800 border-stone-700 text-stone-200"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-stone-200">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-stone-800 border-stone-700 text-stone-200"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-stone-200">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            country={'gh'}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            inputClass="w-full bg-stone-800 border-stone-700 text-stone-200 rounded-md"
            containerClass="phone-input-container"
            inputStyle={{ 
              width: '100%', 
              height: '40px',
              backgroundColor: '#1c1917',
              borderColor: '#44403c',
              color: '#e7e5e4'
            }}
            buttonStyle={{
              backgroundColor: '#1c1917',
              borderColor: '#44403c'
            }}
            dropdownStyle={{
              backgroundColor: '#1c1917',
              color: '#e7e5e4'
            }}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="country" className="block text-sm font-medium text-stone-200">
            Country/Region <span className="text-red-500">*</span>
          </label>
          <Select onValueChange={handleSelectChange} value={formData.country} required>
            <SelectTrigger className="bg-stone-800 border-stone-700 text-stone-200">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent className="bg-stone-800 border-stone-700 text-stone-200">
              {countries.map((country) => (
                <SelectItem 
                  key={country} 
                  value={country}
                  className="hover:bg-stone-700 focus:bg-stone-700"
                >
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-stone-200">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[150px] bg-stone-800 border-stone-700 text-stone-200"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <CgSpinner className="animate-spin mr-2" />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}