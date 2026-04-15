"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { BiLogoFacebook } from "react-icons/bi";
import { LiaInstagram } from "react-icons/lia";
import { LiaDiscord } from "react-icons/lia";
import { useState } from "react";
// import { Button } from "antd";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+1012 3456 789",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="container mx-auto pt-14">
      <div className="flex flex-col md:flex-row   overflow-hidden">
        {/* Left Column - Contact Information */}
        <div className="bg-[#004D6E] text-white p-8 md:w-2/5 space-y-6 rounded-lg">
          <div className="space-y-6 mb-10">
            <h2 className="text-[#F7F9FA] font-poppins font-semibold md:text-[28px] text-[24px] mb-2">
              Contact Information
            </h2>
            <p className="text-[#F7F9FA] text-[18px] font-normal font-poppins">
              Say something to start a live chat!
            </p>
          </div>

          <div className="space-y-6 mt-10">
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-white flex-shrink-0" />
              <span className="text-[#F7F9FA] text-[18px] font-normal font-poppins">
                +1012 3456 789
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-white" flex-shrink-0 />
              <span className="text-[#F7F9FA] text-[18px] font-normal font-poppins">
                demo@gmail.com
              </span>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-5 w-5 text-white mt-1 flex-shrink-0" />
              <span className="text-[#F7F9FA] text-[18px] font-normal font-poppins">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 pt-16">
            <div className="w-10 h-10 bg-[#77B4CE] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
              <BiLogoFacebook className=""/>
            </div>
            <div className="w-10 h-10 bg-[#77B4CE] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
              <LiaInstagram className=""/>
            </div>
            <div className="w-10 h-10 bg-[#77B4CE] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
              <LiaDiscord className=""/>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className=" p-8 md:w-3/5">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-[18px] font-normal leading-[1.11] text-[#07090A] mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-blue-500 focus:ring-0 bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-[18px] font-normal leading-[1.11] text-[#07090A] mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-blue-500 focus:ring-0 bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[18px] font-normal leading-[1.11] text-[#07090A] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-blue-500 focus:ring-0 bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[18px] font-normal leading-[1.11] text-[#07090A] mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-blue-500 focus:ring-0 bg-transparent"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-[18px] font-normal leading-[1.11] text-[#07090A] mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border-0 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-blue-500 focus:ring-0 bg-transparent"
              ></textarea>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary/80 text-[#252525] font-poppins font-medium py-2 px-6 rounded-md transition duration-300 text-[20px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
