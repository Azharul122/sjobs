import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import user from "@/assets/images/home/user1.png";
import user2 from "@/assets/images/home/user2.png";
import user3 from "@/assets/images/home/user3.png";
import journy from "@/assets/images/home/WhoWeAre/journy.png";
import mission from "@/assets/images/home/WhoWeAre/mission.png";
import team from "@/assets/images/home/WhoWeAre/team.png";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import ctitle from "@/assets/images/home/client-title.png";

const WhoWeAre = () => {
  return (
    <div className="container mx-auto">
      <SectionHeader
        icon={ctitle}
        description=" Founded with the vision of transforming the job market, our platform was created to connect job seekers with the right opportunities and help employers find top talent effortlessly. Our mission is to simplify and streamline the hiring process through innovation, accessibility, and user-friendly technology."
        subtitle="About US"
        title=" Who we are & what we do"
      />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 lg:gap-16  mt-20 ">
        {/* Left Column - Visual Elements */}
        <div className="sm:p-6 p-4">
          <div className="relative flex-1 w-full flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] ">
            {/* Percentage Circle */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56  wa-circle">
              <div className="absolute inset-0 rounded-full "></div>

              <div className="absolute inset-0">
                <svg className="w-full h-full rotate-180" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#E9EFF2"
                    strokeWidth="4.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#27AE60"
                    strokeWidth="7"
                    strokeDasharray="282.7"
                    strokeDashoffset="70.7"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="md:text-4xl text-2xl sm:text-5xl font-bold text-[#27AE60]">
                  75%
                </span>
                <span className="text-xs sm:text-sm text-gray-600 mt-1">
                  Our Candidates
                </span>
              </div>
            </div>

            {/* User Avatars */}
            <div className="absolute top-0 left-1/3 -translate-x-1/2 ">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                <Image
                  src={user2}
                  alt="User avatar"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute top-1/4 right-0 ">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                <Image
                  src={user3}
                  alt="User avatar"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-1/3 -translate-x-1/2 ">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
                <Image
                  src={user}
                  alt="User avatar"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info Cards */}
            <div className=" absolute top-0 right-1/4 translate-x-1/2  bg-white p-2 sm:p-3 rounded-lg shadow-md sm:flex hidden items-center gap-2 max-w-[160px] sm:max-w-[200px]">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium">
                  Karen: Trusted by Professionals
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">2hrs ago</p>
              </div>
            </div>

            <div className="absolute bottom-10 right-0 bg-white p-2 sm:p-3 rounded-lg shadow-md sm:flex hidden items-center gap-2 max-w-[160px] sm:max-w-[200px]">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 text-[10px] sm:text-xs font-bold">
                  A
                </span>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium">
                  Andrew: Successful Matches
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  20min ago
                </p>
              </div>
            </div>

            <div className="absolute bottom-1/4 sm:left-5 left-2 lg:-translate-x-1/3 -translate-x-1/4 bg-white p-2 sm:p-3 rounded-lg shadow-md sm:flex hidden sm:flex-row flex-col items-center gap-2 max-w-[120px] sm:max-w-[200px]">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-[10px] sm:text-xs font-bold">
                  K
                </span>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium">
                  Karen: Reliable & User-Friendly
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">1hr ago</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column - Content */}
        <div className="flex-1 max-w-xl flex flex-col gap-6 sm:gap-6 lg:pl-8 ">
          {/* Mission & Vision */}
          <div className="flex p-2 shadow-md rounded-lg shadow-black/5 gap-3 sm:gap-4 items-start max-sm:mt-5 sm:p-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#23286914] flex items-center justify-center flex-shrink-0">
              {/* <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#23286914]0" /> */}
              <Image src={mission} alt="mission" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                Mission & Vision
              </h3>
              <p className="text-base text-gray-500">
                Many desktop publishing packages and web page editors now use
                for them.
              </p>
            </div>
          </div>

          {/* Our Team */}
          <div className="flex p-2 shadow-md rounded-lg shadow-black/5 gap-3 sm:gap-4 items-start max-sm:mt-5 sm:p-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#23286914] flex items-center justify-center flex-shrink-0">
              {/* <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#23286914]0" /> */}
              <Image src={team} alt="mission" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                Our Team
              </h3>
              <p className="text-base text-gray-500">
                Many desktop publishing packages and web page editors now use
                for them.
              </p>
            </div>
          </div>

          {/* Our Journey */}
          <div className="flex p-2 shadow-md rounded-lg shadow-black/5 gap-3 sm:gap-4 items-start max-sm:mt-5 sm:p-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#23286914] flex items-center justify-center flex-shrink-0">
              <Image src={journy} alt="mission" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                Our Journey
              </h3>
              <p className="text-base text-gray-500">
                Many desktop publishing packages and web page editors now use
                for them.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Read More button */}
      <div className="mt-2 sm:mt-4 flex justify-center pt-10">
        <button className="bg-secondary font-medium hover:bg-amber-500 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg flex items-center gap-2 transition-colors text-sm sm:text-base">
          Read More
          <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default WhoWeAre;
