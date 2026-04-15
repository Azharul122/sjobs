"use client";

import React from "react";
import StatCards from "../dashboardContent/overview/StatCards";

const Content = () => {
  return (
    <div className="font-poppins">
      <div className="">
        <h1 className="text-[#333] text-[26px] font-semibold mb-[3px]">
          Hello, Esther Howard
        </h1>
        <p className="text-base text-[#6B6B6B]">
          Here is your daily activities and job alerts
        </p>
      </div>
      <div className="mt-7">
        <StatCards />
      </div>
    </div>
  );
};

export default Content;
