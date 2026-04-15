// import JobSearchFilter from "../home/Banner/Filter"
// import JobSearch from "../home/Banner/JobSearch"
// import JobSearch from "../home/Banner/JobSearch"
import Pagination from "@/components/shared/Pagination/Pagination";
import JobSearchFilter from "../home/Banner/Filter";
import JobCard from "./JobCard";

import ispahani from '@/assets/images/find job/ispahani.png'
import ray from '@/assets/images/find job/ray-white.png'

export default function FindJob() {
  const jobs = [
    {
      id: "1",
      title: "Maintenance Technician",
      company: "Ray white",
      requirements:
        "Perform routine maintenance and repairs on factory equipment and machinery. Ensure minimal downtime and maximum efficiency.",
      location: "Dhaka 1205 Tejgaon",
      education: "Master of Business Administration (MBA) in Accounting",
      deadline: "23 Apr 2025",
      tags: ["Easy apply", "On-site", "3 years of experience", "Full time"],
      logoUrl: ray,
    },
    {
      id: "2",
      title: "Mechanical Engineer",
      company: "Ray white",
      requirements:
        "Design, develop, and test mechanical devices and systems. Ensure machines operate efficiently and meet safety standards.",
      location: "Dhaka 1205 Tejgaon",
      education: "Master of Business Administration (MBA) in Accounting",
      deadline: "23 Apr 2025",
      tags: ["Easy apply", "On-site", "3 years of experience", "Full time"],
      logoUrl: ispahani,
    },
    {
      id: "3",
      title: "Manufacturing Engineer",
      company: "Ray white",
      requirements:
        "Optimize manufacturing processes for efficiency, quality, and cost-effectiveness. Improve production line performance using lean principles.",
      location: "Dhaka 1205 Tejgaon",
      education: "Master of Business Administration (MBA) in Accounting",
      deadline: "23 Apr 2025",
      tags: ["Easy apply", "On-site", "3 years of experience", "Full time"],
      logoUrl: ray,
    },
    {
      id: "4",
      title: "Quality Control Inspector",
      company: "Ray white",
      requirements:
        "Inspect materials and finished products for quality standards. Ensure compliance with safety and regulatory guidelines.",
      location: "Dhaka 1205 Tejgaon",
      education: "Master of Business Administration (MBA) in Accounting",
      deadline: "23 Apr 2025",
      tags: ["Easy apply", "On-site", "3 years of experience", "Full time"],
      logoUrl: ispahani,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8 ">
      <JobSearchFilter width="big" />
      <div className="space-y-6 mx-auto w-full mt-12">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
      <Pagination className="mt-10" totalItems={150}/>
    </main>
  );
}
