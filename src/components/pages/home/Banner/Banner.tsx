"use client";
// import { ContextProvider } from '@/lib/MyContextProvider';
import React from "react";
import JobSearch from "./JobSearch";

const Banner = () => {
  // const context = useContext(ContextProvider);
  // const windowWidth = context ? context.windowWidth : 0;
  // const isSmallScreen = windowWidth < 500;
  return (
    <div>
      <JobSearch />
    </div>
  );
};

export default Banner;
