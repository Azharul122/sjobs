"use client";
import { Input, Select } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Button from "@/components/ui/Button/Button";

import one from "@/assets/images/find-candidate/Ellipse 807 (1).png";
import two from "@/assets/images/find-candidate/Ellipse 807 (2).png";
import three from "@/assets/images/find-candidate/Ellipse 807.png";
import Candidates from "./Candidates";
import CandidateListView from "./CandidateListView";

interface CandidatesSearchFormData {
  keyword: string;
  jobType: string;
}

const SearchResults = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [formData, setFormData] = useState({
    keyword: "",
    jobType: "",
  });

  const handleChange = (
    field: keyof CandidatesSearchFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const jobTypeOptions = [
    { label: "Full-Time", value: "full-time" },
    { label: "Part-Time", value: "part-time" },
    { label: "Contract", value: "contract" },
    { label: "Freelance", value: "freelance" },
  ];
  const [reqErr, setReqErr] = useState<string | null>(null);

  const handleSubmit = () => {
    if (formData.keyword === "") {
      setReqErr("Please enter a Job Title or keyword.");
      return;
    }
    setReqErr(null);

    console.log("Search criteria:", formData);
  };

  //

  const profiles = [
    {
      id: 1,
      name: "Russell Ahmed",
      role: "Electrical Engineer",
      location: "Dhaka",
      experience: "2 years of experience",
      jobType: "Full-time",
      description:
        "I am excited to apply for the Electrical Engineer position at [Company Name]. With a strong background in user-centered design...",
      initials: "RA",
      image: one,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Civil Engineer",
      location: "New York",
      experience: "4 years of experience",
      jobType: "Remote",
      description:
        "Passionate Civil Engineer with expertise in React and modern JavaScript frameworks. Looking for challenging projects...",
      initials: "SJ",
      image: two,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Quality Control Inspector",
      location: "San Francisco",
      experience: "6 years of experience",
      jobType: "Full-time",
      description:
        "Strategic Quality Control Inspector with a track record of launching successful digital products. Skilled in user research and agile methodologies...",
      initials: "MC",
      image: three,
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Industrial Engineer",
      location: "Bangalore",
      experience: "3 years of experience",
      jobType: "Contract",
      description:
        "Backend developer specializing in Node.js and database optimization. Experienced in building scalable microservices...",
      initials: "PP",
      image: two,
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Mechanical Engineer",
      location: "London",
      experience: "5 years of experience",
      jobType: "Hybrid",
      description:
        "Mechanical Engineer with expertise in machine learning and predictive modeling. Passionate about turning data into actionable insights...",
      initials: "DW",
      image: one,
    },
    {
      id: 6,
      name: "Emma Rodriguez",
      role: "CNC Machine Operator",
      location: "Berlin",
      experience: "2 years of experience",
      jobType: "Part-time",
      description:
        "CNC Machine Operator focused on creating user-centered products through qualitative and quantitative research methods...",
      initials: "ER",
      image: three,
    },
    {
      id: 7,
      name: "Jamal Thompson",
      role: "CNC Machine Operator",
      location: "Toronto",
      experience: "7 years of experience",
      jobType: "Full-time",
      description:
        "CNC Machine Operator specializing in CI/CD pipelines and cloud infrastructure. Experienced in AWS and Kubernetes...",
      initials: "JT",
      image: one,
    },
    {
      id: 8,
      name: "Aisha Khan",
      role: "Industrial Engineer",
      location: "Dubai",
      experience: "4 years of experience",
      jobType: "Remote",
      description:
        "Industrial Engineer with expertise in React Native and Flutter. Passionate about creating seamless mobile experiences...",
      initials: "AK",
      image: two,
    },
    
  ];

  return (
    <div>
      {/* Search bar */}
      <div className="container mx-auto">
        <div className="flex items-center gap-5 max-w-[700px] mx-auto pt-10 mb-5">
          {isGridView ? (
            <button
              className="!py-4 outline-none"
              onClick={() => setIsGridView(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M9.5 20H22.5V16H9.5V20ZM2.5 8H7.5V4H2.5V8ZM2.5 14H7.5V10H2.5V14ZM2.5 20H7.5V16H2.5V20ZM9.5 14H22.5V10H9.5V14ZM9.5 8H22.5V4H9.5V8Z"
                  fill="#0077B5"
                />
              </svg>
            </button>
          ) : (
            <button
              className="!py-4 outline-none"
              onClick={() => setIsGridView(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.27271 2.18164H12V14.1816H3.27271V2.18164ZM13.0909 2.18164H21.8182V8.7271H13.0909V2.18164ZM3.27271 15.2726H12V21.818H3.27271V15.2726ZM13.0909 9.818H21.8182V21.818H13.0909V9.818Z"
                  fill="#004D6E"
                />
              </svg>
            </button>
          )}
          <div className="flex md:bg-white flex-col rounded-lg items-center md:flex-row w-full gap-2">
            <form className="relative flex-grow">
              <div className="flex items-center max-w-[400px] after:hidden md:after:inline-block  after:content-[''] after:w-[1px] after:bg-[#004D6E52] after:h-8 ">
                <div>
                  <Input
                    size="large"
                    style={{ outline: "none" }}
                    className="w-full py-1 px-2 outline-none !text-xl focus-within:shadow-none focus-within:!border-none focus:!border-none hover:border-none border-none focus-visible:!border-none"
                    placeholder="Job title, Keyword..."
                    prefix={
                      <div className="flex items-center mr-2 bg-primary rounded-full p-2">
                        <SearchOutlined className="text-sm text-white" />
                      </div>
                    }
                    value={formData.keyword}
                    onChange={(e) => handleChange("keyword", e.target.value)}
                  />
                  {reqErr && (
                    <div className="text-red-500 mx-3 text-xs">{reqErr}</div>
                  )}
                </div>
              </div>
            </form>
            <div className="relative max-md:w-full max-w-[284px] flex-grow">
              <div className="col-span-1">
                <Select
                  prefix={
                    <div className="flex wfu text-xl items-center mr-2 bg-primary rounded-full p-2">
                      <SearchOutlined className="text-sm text-white" />
                    </div>
                  }
                  size="large"
                  placeholder={
                    <div className="flex !text-xl items-center">
                      <span>Job Type</span>
                    </div>
                  }
                  value={formData.jobType || undefined}
                  onChange={(value) => handleChange("jobType", value)}
                  options={jobTypeOptions}
                  style={{ outline: "none", fontSize: "20px" }}
                  className="w-full outline-none focus-within:shadow-none focus-within:!border-none focus:!border-none hover:border-none border-none focus-visible:!border-none"
                  suffixIcon={<span className="text-placeholder">▼</span>}
                />
              </div>
            </div>
            <Button
              className="max-md:w-full max-md:max-w-[284px] md:!py-4 outline-none"
              onClick={handleSubmit}
            >
              Find Candidate
            </Button>
          </div>
        </div>
      </div>

      {/* Display Candiadtes */}
      <div className="container mx-auto">
        {isGridView ? (
          <Candidates profiles={profiles} />
        ) : (
          <CandidateListView profiles={profiles} />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
