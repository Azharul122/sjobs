"use client";

import { Typography } from "antd";

import CandidatePrtofileCard from "./CandidatePrtofileCard";

const { Title } = Typography;

// import one from "@/assets/images/find-candidate/Ellipse 807 (1).png";
// import two from "@/assets/images/find-candidate/Ellipse 807 (2).png";
// import three from "@/assets/images/find-candidate/Ellipse 807.png";
import Pagination from "@/components/shared/Pagination/Pagination";
import { StaticImageData } from "next/image";

// Profile data for 10 different cards
interface Profile {
  id: number;
  name: string;
  role: string;
  location: string;
  experience: string;
  jobType: string;
  description: string;
  initials: string;
  image: string | StaticImageData;
}

const Candidates = ({ profiles }: { profiles: Profile[] }) => {
  // const profiles = [
  //   {
  //     id: 1,
  //     name: "Russell Ahmed",
  //     role: "UI/UX Designer",
  //     location: "Dhaka",
  //     experience: "2 years of experience",
  //     jobType: "Full-time",
  //     description:
  //       "I am excited to apply for the UI/UX Designer position at [Company Name]. With a strong background in user-centered design...",
  //     initials: "RA",
  //     image: one,
  //   },
  //   {
  //     id: 2,
  //     name: "Sarah Johnson",
  //     role: "Frontend Developer",
  //     location: "New York",
  //     experience: "4 years of experience",
  //     jobType: "Remote",
  //     description:
  //       "Passionate frontend developer with expertise in React and modern JavaScript frameworks. Looking for challenging projects...",
  //     initials: "SJ",
  //     image: two,
  //   },
  //   {
  //     id: 3,
  //     name: "Michael Chen",
  //     role: "Product Manager",
  //     location: "San Francisco",
  //     experience: "6 years of experience",
  //     jobType: "Full-time",
  //     description:
  //       "Strategic product manager with a track record of launching successful digital products. Skilled in user research and agile methodologies...",
  //     initials: "MC",
  //     image: three,
  //   },
  //   {
  //     id: 4,
  //     name: "Priya Patel",
  //     role: "Backend Engineer",
  //     location: "Bangalore",
  //     experience: "3 years of experience",
  //     jobType: "Contract",
  //     description:
  //       "Backend developer specializing in Node.js and database optimization. Experienced in building scalable microservices...",
  //     initials: "PP",
  //     image: two,
  //   },
  //   {
  //     id: 5,
  //     name: "David Wilson",
  //     role: "Data Scientist",
  //     location: "London",
  //     experience: "5 years of experience",
  //     jobType: "Hybrid",
  //     description:
  //       "Data scientist with expertise in machine learning and predictive modeling. Passionate about turning data into actionable insights...",
  //     initials: "DW",
  //     image: one,
  //   },
  //   {
  //     id: 6,
  //     name: "Emma Rodriguez",
  //     role: "UX Researcher",
  //     location: "Berlin",
  //     experience: "2 years of experience",
  //     jobType: "Part-time",
  //     description:
  //       "UX researcher focused on creating user-centered products through qualitative and quantitative research methods...",
  //     initials: "ER",
  //     image: three,
  //   },
  //   {
  //     id: 7,
  //     name: "Jamal Thompson",
  //     role: "DevOps Engineer",
  //     location: "Toronto",
  //     experience: "7 years of experience",
  //     jobType: "Full-time",
  //     description:
  //       "DevOps engineer specializing in CI/CD pipelines and cloud infrastructure. Experienced in AWS and Kubernetes...",
  //     initials: "JT",
  //     image: one,
  //   },
  //   {
  //     id: 8,
  //     name: "Aisha Khan",
  //     role: "Mobile Developer",
  //     location: "Dubai",
  //     experience: "4 years of experience",
  //     jobType: "Remote",
  //     description:
  //       "Mobile developer with expertise in React Native and Flutter. Passionate about creating seamless mobile experiences...",
  //     initials: "AK",
  //     image: two,
  //   },
  //   {
  //     id: 9,
  //     name: "Lucas Silva",
  //     role: "Graphic Designer",
  //     location: "São Paulo",
  //     experience: "3 years of experience",
  //     jobType: "Freelance",
  //     description:
  //       "Creative graphic designer with a strong portfolio in branding and digital media. Skilled in Adobe Creative Suite...",
  //     initials: "LS",
  //     image: three,
  //   },
  //   {
  //     id: 10,
  //     name: "Mei Lin",
  //     role: "Project Manager",
  //     location: "Singapore",
  //     experience: "8 years of experience",
  //     jobType: "Full-time",
  //     description:
  //       "Experienced project manager with a proven track record of delivering complex projects on time and within budget...",
  //     initials: "ML",
  //     image: one,
  //   },
  // ];
  return (
    <div className="container mx-auto">
      <Title level={2}>Professional Profiles</Title>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {profiles.map((profile) => (
          <div className="" key={profile.id}>
            <CandidatePrtofileCard profile={profile} />
          </div>
        ))}
      </div>

      <Pagination className="pt-10 pb-10" />
    </div>
  );
};

export default Candidates;
