import { BriefcaseBusiness, Building2 } from "lucide-react";
import React from "react";

interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatsCardCandidate: React.FC = () => {
  const stats: StatItem[] = [
    { value: "1,75,324", label: "Candidates", icon: <BriefcaseBusiness /> },
    { value: "97,354", label: "Companies", icon: <Building2 /> },
    { value: "7,532", label: "New Jobs", icon: <BriefcaseBusiness /> },
  ];

  return (
    <div className="max-w-5xl shadow-2xl shadow-primary/20 -mt-10 mb-20 bg-white rounded-2xl mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#EEEEEE] rounded-lg  p-6  hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-white p-2 rounded-lg bg-primary text-3xl mr-2">
                <div>{stat.icon}</div>
              </div>
              <div>
                <p className="text-2xl font-montserrat font-bold text-textBlack mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-[#7D7F80]">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCardCandidate;
