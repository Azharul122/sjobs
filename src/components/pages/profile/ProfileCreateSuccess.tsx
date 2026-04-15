"use client";

import Link from "next/link";

export default function ProfileCreateSuccess() {
  return (
    <div className="min-h-[calc(100vh-150px)] flex items-center justify-center ">
      <div className="max-w-[588px] w-full text-center space-y-6">
        {/* Green circle with checkmark */}
        <div className="mx-auto bg-green-600 rounded-full w-24 h-24 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M27.75 15.75L11.25 32.25L3 24.0004"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44.9996 15.75L28.4996 32.25L24.1172 27.8678"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Congratulations message */}
        <h1 className="text-[24px]  font-medium  text-[#333] leading-[1.1] md:leading-[1.33] mb-4">
          🎉 Congratulations, You profile is 100% complete!
        </h1>

        {/* Description text */}
        <p className="text-[16px] text-[#6B6B6B] md:leading-[1.5] leading-[1.1] font-normal mb-4">
          Your job seeker dashboard is now set up—start applying for jobs,
          managing applications, and connecting with employers.
        </p>

        {/* Action buttons */}
        <div className="flex justify-center space-x-4 pt-2">
          <button className="px-6 py-2 bg-[#C9EDFF] text-primary rounded hover:bg-blue-200 transition-colors">
            <Link href={"/dashboard"} className="flex items-center">
              View Dashboard
            </Link>
          </button>
          <button className="px-6 py-2 bg-primary text-white rounded flex items-center hover:bg-primary-hover transition-colors">
            <Link href={"/"} className="flex items-center">
              Home
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
