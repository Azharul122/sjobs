"use client";

import { MapPin, Calendar, Briefcase, Users, ChevronLeft } from "lucide-react";

import { FaWallet } from "react-icons/fa";

import companyImage from "@/assets/images/find job/ray-white.png";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { HiShoppingBag } from "react-icons/hi2";

import ispahani from "@/assets/images/find job/ispahani.png";
import ray from "@/assets/images/find job/ray-white.png";
import JobCard from "./JobCard";
import { InterviewAccordion } from "./InterviewAccordion";
import { interviewQuestions } from "@/constance/JobDetilsFAQs";

const JobDetils = () => {
  const jobs = [
    {
      id: "1",
      title: "UI/UX Designer (Expert)",
      company: "Ray white",
      requirements:
        "Requirements (Education Bachelor/Honors Bachelor's degree in Graphic Design, Computer Science, Human-Computer Interaction, or a related field) Experience (1 to 3 years) in...",
      location: "Dhaka 1205 Tejgaon",
      education: "Master of Business Administration (MBA) in Accounting",
      deadline: "23 Apr 2025",
      tags: ["Easy apply", "On-site", "3 years of experience", "Full time"],
      logoUrl: ray,
    },
    {
      id: "2",
      title: "UI/UX Designer (Expert)",
      company: "Ray white",
      requirements:
        "Requirements (Education Bachelor/Honors Bachelor's degree in Graphic Design, Computer Science, Human-Computer Interaction, or a related field) Experience (1 to 3 years) in...",
      location: "Dhaka 1205 Tejgaon",
      education: "Master of Business Administration (MBA) in Accounting",
      deadline: "23 Apr 2025",
      tags: ["Easy apply", "On-site", "3 years of experience", "Full time"],
      logoUrl: ispahani,
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto overflow-hidden">
        {/* Header */}
        <header className=" py-3">
          <div className=" px-4 md:px-6">
            <div className="flex items-center">
              <div className="mr-auto">
                <Image
                  src={companyImage}
                  alt="company"
                  className="md:w-[125px] w-[80px]"
                />
              </div>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to job search
              </a>
            </div>
          </div>

          {/* Job Title Section */}
          <div className="mt-6 px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex md:items-center gap-2 mb-1">
                  <h1 className="md:text-[text-[28px] text-[21px] md:leading-[1.14] font-semibold font-montserrat text-[#18191C]">
                    Sr. Software/Hardware: Mobile and IoT
                  </h1>
                  <span className="bg-[#0054B5] text-white text-xs md:px-4 px-2 py-1.5  rounded-full flex-shrink-0 h-max">
                    Mid level
                  </span>
                </div>
                <p className="text-[#6B6B6B] text-[20px] mt-[20px]">
                  Dekko Foods Limited
                </p>
              </div>
              {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md">
                Apply now
              </button> */}
              <div className="flex items-center gap-1  mt-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M10.75 2C15.3065 2 19 5.69353 19 10.25C19 14.8065 15.3065 18.5 10.75 18.5C6.19353 18.5 2.5 14.8065 2.5 10.25C2.5 5.69353 6.19353 2 10.75 2ZM10.75 3.65C8.99957 3.65 7.32084 4.34536 6.0831 5.5831C4.84536 6.82084 4.15 8.49957 4.15 10.25C4.15 12.0004 4.84536 13.6792 6.0831 14.9169C7.32084 16.1546 8.99957 16.85 10.75 16.85C12.5004 16.85 14.1792 16.1546 15.4169 14.9169C16.6546 13.6792 17.35 12.0004 17.35 10.25C17.35 8.49957 16.6546 6.82084 15.4169 5.5831C14.1792 4.34536 12.5004 3.65 10.75 3.65ZM10.75 5.3C10.9521 5.30003 11.1471 5.37421 11.2981 5.50849C11.4491 5.64277 11.5456 5.82779 11.5692 6.02847L11.575 6.125V9.90845L13.8083 12.1417C13.9562 12.2902 14.0421 12.4894 14.0485 12.6989C14.0549 12.9084 13.9813 13.1125 13.8427 13.2697C13.7041 13.4269 13.5108 13.5255 13.3022 13.5454C13.0935 13.5653 12.8851 13.505 12.7193 13.3767L12.6417 13.3083L10.1667 10.8333C10.0385 10.7049 9.95615 10.5379 9.93242 10.3581L9.925 10.25V6.125C9.925 5.9062 10.0119 5.69635 10.1666 5.54164C10.3214 5.38692 10.5312 5.3 10.75 5.3Z"
                    fill="#383838"
                  />
                </svg>
                <p className="text-[#6B6B6B] text-[18px] font-medium md:leading-[1.24] leading-[1.01]">
                  Posted on: <span className="font-normal">23 Apr 2025</span>
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className=" mt-10">
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* Left Column - Job Details */}
            <div className="lg:w-2/3">
              {/* Position summary */}
              <div className="bg-white rounded px-6 py-5 mb-6">
                <h4 className="text-[#07090A] text-[20px] md:leading-[1.4] font-semibold font-montserrat ">
                  Position summary
                </h4>
                <p className="text-[#7D7F80] text-[16px] font-poppins md:leading-[1.5] mt-3 font-normal">
                  We are looking for some candidates for the position of Sr.
                  Welder/Welder (Mechanical)
                </p>
              </div>

              {/* Job Description */}
              <div className="bg-white rounded px-6 py-5 mb-6">
                <h2 className="text-[#07090A] text-[20px] md:leading-[1.4] font-semibold font-montserrat">
                  Job Description
                </h2>
                <p className="text-textBlack2 text-[16px] font-poppins md:leading-[1.64] mt-3 font-normal">
                  We are looking for a Senior Software/Hardware Engineer with
                  expertise in mobile and IoT development to join our growing
                  team. The ideal candidate will have strong experience in
                  developing embedded systems and mobile applications, and be
                  comfortable working with modern hardware and software
                  technologies. You will be responsible for designing,
                  developing, and maintaining high-quality solutions that meet
                  our business requirements and user needs.
                </p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded px-6 py-5 mb-6">
                <h2 className="text-[#07090A] text-[20px] md:leading-[1.4] font-semibold font-montserrat">
                  Responsibilities
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-textBlack2 text-[16px] font-poppins md:leading-[1.64] mt-3 font-normal">
                  <li>Design and develop embedded systems for IoT devices</li>
                  <li>
                    Create mobile applications that interface with hardware
                    components
                  </li>
                  <li>
                    Ensure the performance, quality, and reliability of systems
                  </li>
                  <li>
                    Collaborate with cross-functional teams to define and
                    implement new features
                  </li>
                  <li>Troubleshoot and resolve complex technical issues</li>
                  <li>
                    Contribute to technical documentation and knowledge sharing
                  </li>
                </ul>
              </div>
              {/* Responsibilities */}
              <div className="bg-white rounded px-6 py-5 mb-6">
                <h2 className="text-[#07090A] text-[20px] md:leading-[1.4] font-semibold font-montserrat">
                  Educational qualification
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-textBlack2 text-[16px] font-poppins md:leading-[1.64] mt-3 font-normal">
                  <li>Secondary School Certificate (SSC) in Any Discipline</li>
                  <li>BSC in Computer Science and Engineering</li>
                </ul>
              </div>

              {/* Required Qualifications */}
              <div className="bg-white rounded px-6 py-5 mb-6">
                <h2 className="text-[#07090A] text-[20px] md:leading-[1.4] font-semibold font-montserrat">
                  Required qualifications
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-textBlack2 text-[16px] font-poppins md:leading-[1.64] mt-3 font-normal">
                  <li>
                    Bachelor&apos;s degree in Computer Science, Electrical
                    Engineering, or related field
                  </li>
                  <li>
                    5+ years of experience in embedded systems development
                  </li>
                  <li>
                    Strong knowledge of C/C++ programming for microcontrollers
                  </li>
                  <li>
                    Experience with mobile app development (iOS and/or Android)
                  </li>
                  <li>
                    Familiarity with wireless communication protocols (BLE,
                    WiFi, Zigbee)
                  </li>
                  <li>
                    Understanding of hardware design principles and electronics
                  </li>
                </ul>
              </div>

              {/* Additional Qualifications */}
              <div className="bg-white rounded px-6 py-5 mb-6">
                <h2 className="text-[#07090A] text-[20px] md:leading-[1.4] font-semibold font-montserrat">
                  Additional qualifications
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-textBlack2 text-[16px] font-poppins md:leading-[1.64] mt-3 font-normal">
                  <li>Experience with RTOS and bare-metal programming</li>
                  <li>Knowledge of PCB design and electronic components</li>
                  <li>Familiarity with cloud services for IoT applications</li>
                  <li>
                    Experience with sensor integration and signal processing
                  </li>
                </ul>
              </div>

              {/* Job Details */}
              <div className="bg-white rounded px-6 py-5 mb-6">
                <h2 className="text-[#07090A] text-[20px] md:leading-[1.4] font-semibold font-montserrat">
                  Job details
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-textBlack2 text-[16px] font-poppins md:leading-[1.64] mt-3 font-normal">
                  <li>Full-time position</li>
                  <li>Competitive salary and benefits package</li>
                  <li>Opportunity to work on cutting-edge IoT products</li>
                  <li>Collaborative and innovative work environment</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Job Summary */}
            <div className="lg:w-1/3 bg-white rounded h-max py-6">
              {/*  */}
              <div className="flex flex-col justify-center items-center pt-6 pb-7 gap-2">
                <div className="flex items-center gap-2">
                  <div className="bg-[#E4E4E4] w-[52px] h-[48px] rounded flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_338_546)">
                        <path
                          d="M16.4674 1.77441H2.97192C1.51678 1.77441 0.333252 2.95794 0.333252 4.41309V16.2393C0.333252 16.7993 0.96667 17.1151 1.41379 16.7957L5.17218 14.1142C5.48755 13.8895 5.85851 13.7706 6.24588 13.7706H14.5124C15.9675 13.7706 17.151 12.587 17.151 11.1319V2.45801C17.151 2.08066 16.8448 1.77441 16.4674 1.77441ZM13.147 10.0555H5.24875C4.8714 10.0555 4.56515 9.74967 4.56515 9.37187C4.56515 8.99453 4.8714 8.68828 5.24875 8.68828H13.147C13.5243 8.68828 13.8306 8.99453 13.8306 9.37187C13.8306 9.74967 13.5243 10.0555 13.147 10.0555ZM13.147 6.86536H5.24875C4.8714 6.86536 4.56515 6.55957 4.56515 6.18177C4.56515 5.80443 4.8714 5.49818 5.24875 5.49818H13.147C13.5243 5.49818 13.8306 5.80443 13.8306 6.18177C13.8306 6.55957 13.5243 6.86536 13.147 6.86536Z"
                          fill="black"
                        />
                        <path
                          d="M23.6667 9.7153V21.541C23.6667 22.0973 23.0364 22.4191 22.5861 22.0975L18.8277 19.4164C18.5124 19.1917 18.1414 19.0728 17.754 19.0728H9.48755C8.03241 19.0728 6.84888 17.8888 6.84888 16.4337V15.1376H14.5124C16.7213 15.1376 18.5183 13.3406 18.5183 11.1317V7.07617H21.028C22.4831 7.07617 23.6667 8.26016 23.6667 9.7153Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_338_546">
                          <rect
                            width="23.3333"
                            height="23.3333"
                            fill="white"
                            transform="translate(0.333252 0.333252)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <Button className="!py-3 !px-6 ">Apply Now</Button>
                </div>

                <p className="mt-4 text-[#7D7F80] text-[18px] font-medium font-poppins md:leading-[1.11] laeding-[1.01]">
                  Job expire in:{" "}
                  <span className="text-error"> June 30, 2021</span>
                </p>
              </div>

              {/*  */}
              <div className=" rounded-lg p-5 ">
                <h2 className="text-[#07090A] text-[20px] md:leading-[1.4] font-semibold font-montserrat mb-6">
                  Job Summary
                </h2>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 grid-cols-1 md:pb-6 pb-3 md:gap-0 gap-3">
                    <div className=" items-start gap-3">
                      <FaWallet className="w-5 h-5  mt-0.5 mb-3 text-primary" />
                      <div>
                        <h3 className="text-[#7D7F80] font-normal text-[14px] font-poppins  md:leading-[1.28] mb-1">
                          Salary
                        </h3>
                        <p className="text-[#07090A] text-[16px] font-medium md:leading-[1.25]">
                          10k{" "}
                          <span className="text-[#464646] font-normal">
                            {" "}
                            /month
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className=" items-start gap-3">
                      <HiShoppingBag className="w-5 h-5 text-primary mt-0.5 mb-3" />
                      <div>
                        <h3 className="text-[#7D7F80] font-normal text-[14px] font-poppins  md:leading-[1.28] mb-1 mt-3">
                          Job type
                        </h3>
                        <p className="text-[#07090A] text-[16px] font-medium md:leading-[1.25]">
                          Full-time
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 md:pb-6 pb-3 md:gap-0 gap-3">
                    <div className=" items-start gap-3">
                      <MapPin className="w-5 h-5  mt-0.5 mb-3 text-primary" />
                      <div>
                        <h3 className="text-[#7D7F80] font-normal text-[14px] font-poppins  md:leading-[1.28] mb-1">
                          Location
                        </h3>
                        <p className="text-[#07090A] text-[16px] font-medium md:leading-[1.25]">
                          San Francisco, CA
                        </p>
                      </div>
                    </div>

                    <div className=" items-start gap-3">
                      <Calendar className="w-5 h-5  mt-0.5 mb-3 text-primary" />
                      <div>
                        <h3 className="text-[#7D7F80] font-normal text-[14px] font-poppins  md:leading-[1.28] mb-1">
                          Vacencies
                        </h3>
                        <p className="text-[#07090A] text-[16px] font-medium md:leading-[1.25]">
                          4
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 md:pb-6 pb-3 md:gap-0 gap-3">
                    <div className=" items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-0.5 mb-3" />
                      <div>
                        <h3 className="text-[#7D7F80] font-normal text-[14px] font-poppins  md:leading-[1.28] mb-1">
                          Experience
                        </h3>
                        <p className="text-[#07090A] text-[16px] font-medium md:leading-[1.25]">
                          5+ years
                        </p>
                      </div>
                    </div>

                    <div className=" items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-0.5 mb-3" />
                      <div>
                        <h3 className="text-[#7D7F80] font-normal text-[14px] font-poppins  md:leading-[1.28] mb-1">
                          Team
                        </h3>
                        <p className="text-[#07090A] text-[16px] font-medium md:leading-[1.25]">
                          Hardware & IoT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <section className="container mx-auto mt-10 lg:mt-24">
        <div className="flex justify-between items-center mb-7">
          <h1 className="md:text-[32px] text-[24px] font-semibold md:leading-[1.5] laeding-[1.1] font-montserrat text-[#07090A]">
            Related Jobs
          </h1>
          <Button className="bg-white border text-primary">
            See More{" "}
            <span className="ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="#004D6E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#004D6E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </section>

      <section className="container mx-auto ">
        <InterviewAccordion
          title="Common Job Interview Questions"
          questions={interviewQuestions}
        />
      </section>
    </div>
  );
};

export default JobDetils;
