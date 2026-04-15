"use client";

import Pagination from "@/components/shared/Pagination/Pagination";
import Button from "@/components/ui/Button/Button";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
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

const CandidateListView = ({ profiles }: { profiles: Profile[] }) => {
  const router = useRouter();
  return (
    <div className="pt-10">
      <div className="grid grid-cols-1  gap-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="p-4 border rounded-lg ">
            <div className="flex justify-between items-center">
              <div className="">
                <h3 className="text-[18px] font-montserrat font-medium leading-[1.1] md:leading-[1.55] text-[#18191C] mb-[14px]">
                  {profile.name}
                </h3>
                <div className="flex gap-2 items-center mb-2">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_142_1550)">
                        <path
                          d="M19.25 9.1665C19.25 15.5832 11 21.0832 11 21.0832C11 21.0832 2.75 15.5832 2.75 9.1665C2.75 6.97847 3.61919 4.88005 5.16637 3.33287C6.71354 1.7857 8.81196 0.916504 11 0.916504C13.188 0.916504 15.2865 1.7857 16.8336 3.33287C18.3808 4.88005 19.25 6.97847 19.25 9.1665Z"
                          stroke="#E74C3C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11 11.9165C12.5188 11.9165 13.75 10.6853 13.75 9.1665C13.75 7.64772 12.5188 6.4165 11 6.4165C9.48122 6.4165 8.25 7.64772 8.25 9.1665C8.25 10.6853 9.48122 11.9165 11 11.9165Z"
                          stroke="#E74C3C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_142_1550">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>{profile.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.5 20.5C19.025 11.167 4.975 11.167 4.5 20.5M15 7.5C15 8.29565 14.6839 9.05871 14.1213 9.62132C13.5587 10.1839 12.7956 10.5 12 10.5C11.2044 10.5 10.4413 10.1839 9.87868 9.62132C9.31607 9.05871 9 8.29565 9 7.5C9 6.70435 9.31607 5.94129 9.87868 5.37868C10.4413 4.81607 11.2044 4.5 12 4.5C12.7956 4.5 13.5587 4.81607 14.1213 5.37868C14.6839 5.94129 15 6.70435 15 7.5Z"
                        stroke="#D3D5D6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>{profile.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_142_1561)">
                        <path
                          d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                          stroke="#D3D5D6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 2.25V5.25"
                          stroke="#D3D5D6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 2.25V5.25"
                          stroke="#D3D5D6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.75 8.25H20.25"
                          stroke="#D3D5D6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_142_1561">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>4 Days Remaining</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z"
                      stroke="#7D7F80"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <Button
                  onClick={() => router.push(`/find-candidates/${profile.id}`)}
                  className="!text-white !bg-primary"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination className="py-10" />
    </div>
  );
};

export default CandidateListView;
