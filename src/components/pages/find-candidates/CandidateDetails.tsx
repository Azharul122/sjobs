// import Image from "next/image";
// import { Download } from "lucide-react";
// import { Candal } from "next/font/google";
import CandiadteProfileHeader from "./CandiadteProfileHeader";
import Button from "@/components/ui/Button/Button";
import { Download } from "lucide-react";
import Link from "next/link";

const CandidateDetails = () => {
  return (
    <div>
      <div className="container pb-10 mx-auto pt-10">
        {/* Header */}
        <CandiadteProfileHeader />

        {/* Application Subject */}
        <div className="mb-8">
          <h2 className="text-[20px] text-[#07090A]  font-semibold mb-2 leading-[1.2] font-poppins">
            Subject: Application for UX/UI Designer Position
          </h2>
          <p className="text-gray-700 mb-4">Dear Sir,</p>
          <p className="text-gray-700 mb-4">
            I am writing to express my interest in the UX/UI Designer position
            advertised on your careers page. With a strong background in
            user-centered design and a passion for creating intuitive digital
            experiences, I believe I would be a valuable addition to your team.
          </p>
          <p className="text-gray-700 mb-4">
            As a graduate of the Human-Computer Interaction program at Stanford
            University, I have a thorough understanding of user research
            methodologies, prototyping, and usability testing. My experience at
            Creative Concepts has given me the opportunity to work on diverse
            projects ranging from mobile applications to responsive websites.
          </p>
          <p className="text-gray-700 mb-4">
            I would welcome the opportunity to discuss how my expertise aligns
            with your needs. Please feel free to reach me at the contact
            information provided above.
          </p>
          <p className="text-gray-700 mb-4">
            Best regards,
            <br />
            Russell Ahmad
          </p>
        </div>

        {/* Career Objective */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">
            Career objective
          </h2>
          <p className="text-gray-700">
            Dedicated UX/UI designer with 5+ years of experience aiming to
            leverage my strong user-centered design skills to create intuitive
            and visually appealing digital products. Seeking a challenging role
            that allows me to utilize my expertise in user research,
            wireframing, and prototyping to deliver exceptional user
            experiences.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Design: Figma, Adobe Creative Cloud, Sketch</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>
                UX Research: User Testing, Personas, Surveys, A/B Testing
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Prototyping: InVision, Principle, Framer, Marvel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Frontend: HTML, CSS, JavaScript (basic knowledge)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>
                Collaboration: Jira, Confluence, Slack, Microsoft Teams
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>
                Responsive Design: Mobile-first approach, Cross-platform design
              </span>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">
            Experience
          </h2>
          <div className="mb-4">
            <h3 className="font-medium">
              Senior UX/UI Designer | Creative Concepts | 2020-Present
            </h3>
            <ul className="mt-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>
                  Designed intuitive interfaces for web and mobile applications,
                  improving user engagement by 35%
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>
                  Led a team of 3 designers, mentoring junior staff and
                  coordinating project workflows
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>
                  Collaborated with product managers and developers to ensure
                  seamless implementation of designs
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">
              UX Designer | TechSolutions | 2018-2020
            </h3>
            <ul className="mt-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>
                  Conducted user research and created user personas, journey
                  maps, and wireframes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>
                  Redesigned company website, resulting in 40% increase in
                  conversion rate
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">
            Education
          </h2>
          <div>
            <h3 className="font-medium">Stanford University</h3>
            <p className="text-gray-700">
              Master&apos;s in Human-Computer Interaction | 2016-2018
            </p>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">
            Languages
          </h2>
          <ul className="text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>English (Native)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Spanish (Fluent)</span>
            </li>
          </ul>
        </div>

        {/* Visit Us Online */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">
            Visit Us Online
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-10 max-w-[380px] ">
            <button className="flex items-center gap-2">
              <span className="font-poppins text-[18px] text-[#0872BA] font-medium md:leading-[1.67] leading-[1.1] underline decoration-[#0872BA]">
                <Link href={""}>Portfolio</Link>
              </span>
            </button>
            <button className="flex items-center gap-2">
              <span className="font-poppins text-[18px] text-[#0872BA] font-medium md:leading-[1.67] leading-[1.1] underline decoration-[#0872BA]">
                <Link href={""}>LinkedIn</Link>
              </span>
            </button>
            <button className="flex items-center gap-2">
              <span className="font-poppins text-[18px] text-[#0872BA] font-medium md:leading-[1.67] leading-[1.1] underline decoration-[#0872BA]">
                <Link href={""}>Dribbble</Link>
              </span>
            </button>
            <button className="flex items-center gap-2">
              <span className="font-poppins text-[18px] text-[#0872BA] font-medium md:leading-[1.67] leading-[1.1] underline decoration-[#0872BA]">
                <Link href={""}>Dribbble</Link>
              </span>
            </button>
            <button className="flex items-center gap-2">
              <span className="font-poppins text-[18px] text-[#0872BA] font-medium md:leading-[1.67] leading-[1.1] underline decoration-[#0872BA]">
                <Link href={""}>Portfolio</Link>
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col  items-center justify-between gap-4 pt-4 border-t">
          <p className="text-sm text-gray-500">Last update: 12 January 2024</p>
          <Button className="bg-[#0a66c2] hover:bg-[#084e96]">
            <Download size={16} className="mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
