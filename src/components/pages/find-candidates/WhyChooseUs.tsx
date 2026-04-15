import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import RecruitmentFeatures from "./RecruitmentFeatures";
import Button from "@/components/ui/Button/Button";

const WhyChooseUs = () => {
  return (
    <div className="md:pb-20 pb-10">
      <div className="container">
        <SectionHeader
          subtitle={"Why Choose Us?"}
          title={"Hire the right candidates, faster"}
          description={
            "Discover why our platform is the best place to find top candidate"
          }
        />
      </div>
      <RecruitmentFeatures />
      <div className="md:mt-20 mt-10 flex justify-center">
        <Button className="mx-auto" variant="secondary">
          Start hiring smarter today!
        </Button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
