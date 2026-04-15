"use client";
// components/JobSearch.tsx
import React from "react";
import { Typography } from "antd";

import BannerBackground from "@/assets/images/001a50768f2f82544075b6b552245474.jpg"; // Adjust the path as necessary
import JobSearchFilter from "./Filter";
import Heading from "@/components/ui/Heading/Heading";
import StatsCard from "./StatsCard";

const { Paragraph } = Typography;

const JobSearch: React.FC = () => {
  const rolles = [
    "Mechanical Engineer",
    "Manufacturing Engineer",
    "Industrial Engineer",
    "Maintenance Technician",
    "Quality Control Inspector",
    "Civil Engineer",
    " Electrical Engineer",
  ];
  return (
    <div>
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${BannerBackground.src})` }}
      >
        {/* <Image
        alt="Banner Background"
        src={BannerBackground}
        height={BannerBackground.height}
        width={BannerBackground.width}
        className="object-cover max-h-[741px]"
      /> */}
        <div className="flex flex-col items-center  py-[132px] justify-center bg-[#004D6EAD]  p-4">
          <Heading align="center" className="text-white">
            Hire the Best. Get Hired by the Best
          </Heading>

          <Paragraph
            className="text-white !max-w-4xl"
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginBottom: "40px",
            }}
          >
            Bridging the gap between talented professionals and top employers,
            our platform simplifies the hiring process with seamless job
            matching.
          </Paragraph>
          {/* Job search filter here */}
          <JobSearchFilter />
          <div className="flex flex-wrap max-w-4xl justify-center items-center gap-4 mt-8">
            {rolles.map((data, index) => (
              <div key={index}>
                <div className="flex flex-col text-base font-light items-center justify-center bg-[#E6E6E642] text-white backdrop-blur-sm rounded-lg shadow-md px-3 py-2">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>{data}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <StatsCard />
    </div>
  );
};

export default JobSearch;
