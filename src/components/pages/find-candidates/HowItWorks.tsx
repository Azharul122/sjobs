import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Image from "next/image";
import React from "react";
import SideImage from "@/assets/images/find-candidate/Group 1000001779 (1).png";
import HiringProcess from "./HiringProcess";

const HowItWorks = () => {
  return (
    <div className="bg-white  py-10 md:py-20">
      <div className="container">
        <div className="flex border-b pb-10 flex-col-reverse justify-center items-center md:flex-row gap-10 lg:gap-20">
          <div>
            <Image
              src={SideImage}
              alt="Business professionals in a meeting"
              width={SideImage.width}
              height={SideImage.height}
              className="object-cover"
            />
          </div>
          <div className="max-w-xl">
            <SectionHeader
              isLeft
              subtitle={"How it works?"}
              title={"Hiring the right candidate is just a few steps away:"}
              description={
                "Finding the right candidate has never been easier! Follow these simple steps to connect with top talent and grow your team efficiently."
              }
            />
          </div>
        </div>
      </div>
      <HiringProcess />
    </div>
  );
};

export default HowItWorks;
