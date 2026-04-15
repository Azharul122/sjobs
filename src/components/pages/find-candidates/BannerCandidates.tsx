"use client";
import Image from "next/image";
import Ellipse from "@/assets/images/find-candidate/image.png";
import Heading from "@/components/ui/Heading/Heading";
import { useState } from "react";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Button from "@/components/ui/Button/Button";
import StatsCardCandidate from "./StatsCardCandidates";
import BgImage from "@/assets/images/a72a8bbce19966ef3fef7b16e43f84e9_11zon.jpg";
import { useRouter } from "next/navigation";

interface CandidatesSearchFormData {
  keyword: string;
  jobType: string;
}

function BannerCandidates() {
  const [formData, setFormData] = useState({
    keyword: "",
    jobType: "",
  });

  const jobTypeOptions = [
    { label: "Full-Time", value: "full-time" },
    { label: "Part-Time", value: "part-time" },
    { label: "Contract", value: "contract" },
    { label: "Freelance", value: "freelance" },
  ];

  const handleChange = (
    field: keyof CandidatesSearchFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const [reqErr, setReqErr] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = () => {
    if (formData.keyword === "") {
      setReqErr("Please enter a Job Title or keyword.");
      return;
    }
    setReqErr(null);

    console.log("Search criteria:", formData);
    router.push(
      `/find-candidates/search-results?keyword=${formData.keyword}&jobType=${formData.jobType}`
    );
    // Here you would typically trigger a search with these parameters
  };

  return (
    <div>
      <div className="w-full bg-primary text-white py-20 lg:py-40 sm:px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <Image
          src={BgImage}
          className="absolute inset-0 object-cover w-full h-full opacity-30"
          alt="Background image"
          fill
          priority
        />
        {/* Background circles */}
        <div className="absolute top-12 right-1/3 w-12 h-12 rounded-full bg-[#FFF5E01F] "></div>
        <div className="absolute bottom-12 left-1/4 w-8 h-8 rounded-full bg-[#FFF5E01F] "></div>

        <div className="container relative mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute -top-5 -left-1 w-20 h-20 rounded-full bg-[#FFF5E01F] "></div>
          <div className="lg:max-w-2xl space-y-10">
            <Heading className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Find the Right Talent for Your Business
            </Heading>
            <p className="text-lg max-w-[620px] opacity-90 mb-8">
              Access a pool of skilled professionals and hire the best
              candidates for your team. Post jobs, review profiles, and connect
              with top talent effortlessly.
            </p>

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

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full   flex-shrink-0">
            <div className="bg-[#FFF5E01F] absolute -top-5 -left-2 w-64 h-64 md:w-80 md:h-80 rounded-full mb-10"></div>
            <Image
              src={Ellipse}
              alt="Business professionals in a meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <StatsCardCandidate />
      </div>
    </div>
  );
}

export default BannerCandidates;
