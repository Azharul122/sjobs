// components/FeatureGrid.tsx
import React from "react";
import {
  FaClock,
  FaUserCheck,
  FaSearch,
  FaProjectDiagram,
} from "react-icons/fa";

const FeatureGrid: React.FC = () => {
  return (
    <div className="relative py-10 md:py-16 px-4 sm:px-6">
      {/* Central vertical line */}
      <div className="absolute max-md:hidden top-0 bottom-0 left-1/2 w-[3px] bg-[#cfdce5] transform -xl:translate-x-1/2" />

      {/* Central horizontal line */}

      <div className="absolute max-md:hidden left-[53%] max-w-[200px] right-0 top-[47%] h-[3px] bg-[#cfdce5] transform -translate-y-1/2" />
      <div className="absolute max-md:hidden right-[53%] top-[57%] h-[3px] bg-[#cfdce5] w-[200px] transform -translate-y-1/2" />

      {/* Grid container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 relative z-10">
        {/* Card 1: Time-Saving Recruitment */}
        <div className="bg-white max-xl:ml-auto max-w-[420px] xl:translate-x-[25%] md:translate-y-5 p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <div className="text-[#004b61] text-3xl">
            <FaClock />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Time-Saving Recruitment</h3>
            <p className="text-gray-600 text-sm mt-1">
              Find qualified candidates quickly without the hassle of
              traditional hiring.
            </p>
          </div>
        </div>

        {/* Card 2: Extensive Talent Pool */}
        <div className="bg-white max-w-[420px] xl:translate-x-[8%] md:-translate-y-5 p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <div className="text-[#004b61] text-3xl">
            <FaSearch />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Extensive Talent Pool</h3>
            <p className="text-gray-600 text-sm mt-1">
              Connect with job seekers across various industries.
            </p>
          </div>
        </div>

        {/* Card 3: Verified Profiles */}
        <div className="bg-white max-w-[420px] max-xl:ml-auto md:translate-y-10 p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <div className="text-[#004b61] text-3xl">
            <FaUserCheck />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Verified Profiles</h3>
            <p className="text-gray-600 text-sm mt-1">
              Access complete resumes, portfolios, and professional credentials.
            </p>
          </div>
        </div>

        {/* Card 4: Smart Matching Algorithm */}
        <div className="bg-white max-w-[420px] xl:translate-x-[30%] md:-translate-y-0 p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <div className="text-[#004b61] text-3xl">
            <FaProjectDiagram />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Smart Matching Algorithm</h3>
            <p className="text-gray-600 text-sm mt-1">
              Get AI-powered candidate recommendations based on job criteria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
