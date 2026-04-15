"use client";

import { useState } from "react";
import { Input, Select, Button } from "antd";
import {
  SearchOutlined,
  EnvironmentOutlined,
  // BankOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

// Define types for our form data
interface JobSearchFormData {
  keyword: string;
  location: string;
  jobType: string;
  workMode: string;
}

export default function JobSearchFilter({
  width = "normal",
}: {
  width?: "big" | "normal";
}) {
  // State to track form values
  const [formData, setFormData] = useState<JobSearchFormData>({
    keyword: "",
    location: "",
    jobType: "",
    workMode: "",
  });
  const [reqErr, setReqErr] = useState<string | null>(null);
  const router = useRouter();
  // Handle form submission
  const handleSubmit = () => {
    if (formData.keyword === "") {
      setReqErr("Please enter a Job Title or keyword.");
      return;
    }
    setReqErr(null);

    console.log("Search criteria:", formData);
    router.push(
      `/find-job?keyword=${formData.keyword}&location=${formData.location}&jobType=${formData.jobType}&workMode=${formData.workMode}`
    );

    // Here you would typically trigger a search with these parameters
  };

  // Handle input changes
  const handleChange = (field: keyof JobSearchFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Job type options
  const jobTypeOptions = [
    { value: "full-time", label: "Full Time" },
    { value: "part-time", label: "Part Time" },
    { value: "contract", label: "Contract" },
    { value: "internship", label: "Internship" },
  ];

  // Work mode options
  const workModeOptions = [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "on-site", label: "On-site" },
  ];

  // Industry options
  // const industryOptions = [
  //   { value: "technology", label: "Technology" },
  //   { value: "healthcare", label: "Healthcare" },
  //   { value: "finance", label: "Finance" },
  //   { value: "education", label: "Education" },
  //   { value: "retail", label: "Retail" },
  // ];

  return (
    <div
      className={`w-fit md:w-full ${
        width === "normal" ? "max-w-[940px]" : "max-w-7xl"
      } mx-auto p-4`}
    >
      <div className="bg-white relative flex items-center md:flex-row flex-col gap-4 rounded-2xl shadow-lg shadow-[#0077B526] p-4">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Keyword Search */}
            <div className="md:col-span-1 flex items-center after:hidden md:after:inline-block  after:content-[''] after:w-[1px] after:bg-[#004D6E52] after:h-8 ">
              <div>
                <Input
                  required
                  size="large"
                  style={{ outline: "none" }}
                  className="w-full  outline-none !text-xl focus-within:shadow-none focus-within:!border-none focus:!border-none hover:border-none border-none focus-visible:!border-none"
                  placeholder="Job title, Keyword..."
                  prefix={
                    <div className="flex items-center mr-2 bg-primary rounded-full p-2">
                      <SearchOutlined className="text-sm text-white" />
                    </div>
                  }
                  value={formData.keyword}
                  onChange={(e) => handleChange("keyword", e.target.value)}
                />
                {reqErr && <div className="text-red-500 text-xs">{reqErr}</div>}
              </div>
            </div>

            {/* Location */}
            <div className="md:col-span-1 flex items-center after:hidden md:after:inline-block  after:content-[''] after:w-[1px] after:bg-[#004D6E52] after:h-8">
              <Input
                size="large"
                placeholder="Your Location"
                prefix={
                  <div className="flex items-center mr-2 bg-primary rounded-full p-2">
                    <EnvironmentOutlined className="text-sm text-white" />
                  </div>
                }
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                style={{ outline: "none" }}
                className="w-full !text-xl outline-none focus-within:shadow-none focus-within:!border-none focus:!border-none hover:border-none border-none focus-visible:!border-none"
              />
            </div>

            {/* Job Type */}
            <div className="md:col-span-1">
              <Select
                prefix={
                  <div className="flex text-xl items-center mr-2 bg-primary rounded-full p-2">
                    <SearchOutlined className="text-sm text-white" />
                  </div>
                }
                size="large"
                placeholder={
                  <div className="flex !text-xl  items-center">
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
          <div className="w-full h-px opacity-0 md:opacity-100 bg-border my-2 md:my-3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Work Mode */}
            <div className="md:col-span-1 flex items-center after:hidden md:after:inline-block  after:content-[''] after:w-[1px] after:bg-[#004D6E52] after:h-8">
              <Select
                prefix={
                  <div className="flex items-center mr-2 bg-primary rounded-full p-2">
                    <TeamOutlined className=" text-sm text-white" />
                  </div>
                }
                size="large"
                placeholder={
                  <div className="flex text-xl items-center">
                    <span>Work Mode</span>
                  </div>
                }
                value={formData.workMode || undefined}
                onChange={(value) => handleChange("workMode", value)}
                options={workModeOptions}
                style={{ outline: "none", border: "none" }}
                className="w-full outline-none focus-within:shadow-none focus-within:!border-none focus:!border-none hover:border-none border-none focus-visible:!border-none"
                suffixIcon={<span className="text-placeholder">▼</span>}
              />
            </div>

            {/* Industry */}
            {/* <div className="md:col-span-1">
              <Select
                prefix={
                  <div className="flex items-center mr-2 bg-primary rounded-full p-2">
                    <BankOutlined className="text-sm text-white" />
                  </div>
                }
                size="large"
                placeholder={
                  <div className="flex text-xl items-center">
                    <span>Industry</span>
                  </div>
                }
                value={formData.industry || undefined}
                onChange={(value) => handleChange("industry", value)}
                options={industryOptions}
                className="w-full"
                suffixIcon={<span className="text-placeholder">▼</span>}
              />
            </div> */}
          </div>
        </div>

        {/* Find Work Button - Positioned to the right on larger screens */}
        <div className="flex justify-center w-full md:w-fit items-center">
          <Button
            type="primary"
            size="large"
            onClick={handleSubmit}
            style={{ padding: "10px 20px" }}
            className="bg-secondary hover:!bg-orange-400 w-full border-secondary !text-black font-medium "
          >
            Find Work
          </Button>
        </div>
      </div>
    </div>
  );
}
