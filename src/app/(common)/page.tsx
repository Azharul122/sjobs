import Banner from "@/components/pages/home/Banner/Banner";
import JobPlatform from "@/components/pages/home/JobPlatform/JobPlatform";
import PopularCategory from "@/components/pages/home/PopularCategory/PopularCategory";
import OurClientSay from "@/components/pages/home/OurClinetSay/OurClientSay";
import WhoWeAre from "@/components/pages/home/WhoWeAre/WhoWeAre";
import React from "react";

const Page = () => {
  return (
    <div>
      <Banner />
      <JobPlatform />
      <PopularCategory />
      <WhoWeAre />
      <OurClientSay/>
    </div>
  );
};

export default Page;
