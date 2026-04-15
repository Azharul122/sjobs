import BannerCandidates from "@/components/pages/find-candidates/BannerCandidates";
import FeaturedCandidates from "@/components/pages/find-candidates/FeaturedCandidates";
import HowItWorks from "@/components/pages/find-candidates/HowItWorks";
import WhyChooseUs from "@/components/pages/find-candidates/WhyChooseUs";
import React from "react";
import OurClientSay from "@/components/pages/home/OurClinetSay/OurClientSay";
// import Candidates from "@/components/pages/find-candidates/Candidates";

const FindCandidates = () => {
  return (
    <div>
      <BannerCandidates />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedCandidates />
      <OurClientSay />
    </div>
  );
};

export default FindCandidates;
