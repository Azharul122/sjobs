"use client";
import React from "react";
import UserStatCards from "./UserStatCards";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import imageIcon from "@/assets/images/Human.png";
import { useGetMeQuery } from "@/redux/features/auth/authApi";

const UserContent = () => {
  const { data: userData } = useGetMeQuery(undefined);

  return (
    <div className="font-poppins">
      <div className="">
        <h1 className="text-[#333] text-[26px] font-semibold mb-[3px]">
          Hello, {userData?.data?.fullName} 👋
        </h1>
        <p className="text-base text-[#6B6B6B]">
          Here is your daily activities and job alerts
        </p>
      </div>
      <div className="mt-7">
        <UserStatCards />
      </div>
      <div className="bg-[#E9EFF2] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg flex flex-col md:flex-row items-center justify-between mt-5 sm:mt-6 md:mt-7 2xl:mr-5 gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
          <div className="relative w-14 h-14 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0">
            <Image
              src={imageIcon}
              alt="Profile picture"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 min-w-0 ">
            <h3 className="font-medium text-[#313131] text-lg lg:text-xl text-center sm:text-start">
              Your profile editing is not completed.
            </h3>
            <p className="text-sm lg:text-base text-[#5D5D5D] mt-1 text-center sm:text-start">
              Complete your profile editing & build your custom Resume
            </p>
          </div>
          {/* "Your profile is now complete! If you wish to update or view your
          profile, you can do so at any time." */}
        </div>
        <Link
          href="/profile"
          className="w-full md:w-auto text-center bg-[#004D6E] text-white text-sm sm:text-base px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-3.5 rounded flex items-center justify-center gap-2 hover:bg-[#004D6E]/90 transition-colors mt-1"
        >
          View Profile
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default UserContent;
