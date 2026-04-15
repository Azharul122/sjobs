"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { toast } from "sonner";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  requirements: string;
  location: string;
  education: string;
  deadline: string;
  tags: string[];
  logoUrl: string | StaticImageData;
  onBookmark?: (id: string) => void;
}

export default function JobCard({
  id,
  title,
  company,
  requirements,
  location,
  education,
  deadline,
  tags,
  logoUrl,
  onBookmark,
}: JobCardProps) {
  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor behavior
    e.stopPropagation(); // Stop event from bubbling up to the Link
    if (onBookmark) {
      onBookmark(id);
    }
    toast.success(id);
  };

  return (
    <div className="mx-auto max-w-7xl md:px-4">
      <Link href={`/find-job/${id}`} passHref>
        <div className="bg-white  rounded-lg shadow-sm border border-gray-100 p-5 mb-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex justify-between">
            <div className="flex-1 max-w-[800px] pr-4">
              <div className="flex justify-between">
                <div>
                  <h2 className="md:text-[24px] text-[21px] font-semibold leading-[100%] text-[#18191C] font-montserrat ">
                    {title}
                  </h2>
                  <p className="text-[#484848] md:text-[20px] text-[18px] font-medium  font-poppins mt-2">
                    {company}
                  </p>
                </div>
                <div className="flex space-x-2 md:hidden">
                  <button
                    className="text-gray-400 hover:text-gray-600 md:size-10 size-5 flex justify-center items-center"
                    onClick={handleBookmarkClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.59163 15.5032 3.99623 13.7769 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.4084 8.49679 20.0038 10.2231 20 12C20 16.42 16.42 20 12 20Z"
                        fill="#767F8C"
                      />
                    </svg>
                  </button>
                  <button
                    className="text-gray-400 hover:text-gray-600 md:size-10 size-5 flex justify-center items-center"
                    onClick={handleBookmarkClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z"
                        stroke="#767F8C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <p className=" text-[#4D4D4D] mt-5 mb-4 font-normal md:text-[18px] text-[16px] font-poppins md:leading-[1.5] laeding-[1.1]">
                {requirements}
              </p>

              <div className="space-y-2">
                <div className="flex items-center text-[#4D4D4D] mt-5 mb-3 font-normal md:text-[18px] text-[16px] font-poppins md:leading-[1.24] laeding-[1.1] gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M8 0C3.6 0 0 3.6 0 8C0 13.4 7 19.5 7.3 19.8C7.5 19.9 7.8 20 8 20C8.2 20 8.5 19.9 8.7 19.8C9 19.5 16 13.4 16 8C16 3.6 12.4 0 8 0ZM8 17.7C5.9 15.7 2 11.4 2 8C2 4.7 4.7 2 8 2C11.3 2 14 4.7 14 8C14 11.3 10.1 15.7 8 17.7ZM8 4C5.8 4 4 5.8 4 8C4 10.2 5.8 12 8 12C10.2 12 12 10.2 12 8C12 5.8 10.2 4 8 4ZM8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10Z"
                      fill="#383838"
                    />
                  </svg>
                  <span>{location}</span>
                </div>
                <div className="flex items-center text-[#4D4D4D] mt-5 mb-4 font-normal md:text-[18px] text-[16px] font-poppins md:leading-[1.24] laeding-[1.1] gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <g clipPath="url(#clip0_327_535)">
                      <path
                        d="M9.49997 1L-0.888916 6.66667L2.88886 8.72556V14.3922L9.49997 18L16.1111 14.3922V8.72556L18 7.69611V14.2222H19.8889V6.66667L9.49997 1ZM15.9411 6.66667L9.49997 10.18L3.05886 6.66667L9.49997 3.15333L15.9411 6.66667ZM14.2222 13.2778L9.49997 15.8467L4.77775 13.2778V9.755L9.49997 12.3333L14.2222 9.755V13.2778Z"
                        fill="#383838"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_327_535">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{education}</span>
                </div>
                <div className="flex items-center text-[#4D4D4D] mt-5 mb-4 font-normal md:text-[18px] text-[16px] font-poppins md:leading-[1.24] laeding-[1.1] gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M10.25 2C14.8065 2 18.5 5.69353 18.5 10.25C18.5 14.8065 14.8065 18.5 10.25 18.5C5.69353 18.5 2 14.8065 2 10.25C2 5.69353 5.69353 2 10.25 2ZM10.25 3.65C8.49957 3.65 6.82084 4.34536 5.5831 5.5831C4.34536 6.82084 3.65 8.49957 3.65 10.25C3.65 12.0004 4.34536 13.6792 5.5831 14.9169C6.82084 16.1546 8.49957 16.85 10.25 16.85C12.0004 16.85 13.6792 16.1546 14.9169 14.9169C16.1546 13.6792 16.85 12.0004 16.85 10.25C16.85 8.49957 16.1546 6.82084 14.9169 5.5831C13.6792 4.34536 12.0004 3.65 10.25 3.65ZM10.25 5.3C10.4521 5.30003 10.6471 5.37421 10.7981 5.50849C10.9491 5.64277 11.0456 5.82779 11.0692 6.02847L11.075 6.125V9.90845L13.3083 12.1417C13.4562 12.2902 13.5421 12.4894 13.5485 12.6989C13.5549 12.9084 13.4813 13.1125 13.3427 13.2697C13.2041 13.4269 13.0108 13.5255 12.8022 13.5454C12.5935 13.5653 12.3851 13.505 12.2193 13.3767L12.1417 13.3083L9.66673 10.8333C9.5385 10.7049 9.45615 10.5379 9.43242 10.3581L9.425 10.25V6.125C9.425 5.9062 9.51192 5.69635 9.66664 5.54164C9.82135 5.38692 10.0312 5.3 10.25 5.3Z"
                      fill="#383838"
                    />
                  </svg>
                  <span>Deadline: {deadline}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, index) => {
                  let bgColor = "bg-blue-50 text-blue-600";

                  if (tag.toLowerCase().includes("on-site")) {
                    bgColor = "bg-gray-100 text-gray-600";
                  } else if (tag.toLowerCase().includes("experience")) {
                    bgColor = "bg-yellow-50 text-yellow-600";
                  } else if (tag.toLowerCase().includes("full time")) {
                    bgColor = "bg-purple-50 text-purple-600";
                  }

                  return (
                    <span
                      key={index}
                      className={`text-xs px-3 py-1 rounded-full ${bgColor}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div className="flex space-x-2 mb-4">
                <button
                  className="text-gray-400 hover:text-gray-600 md:size-10 size-5 flex justify-center items-center"
                  onClick={handleBookmarkClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.59163 15.5032 3.99623 13.7769 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.4084 8.49679 20.0038 10.2231 20 12C20 16.42 16.42 20 12 20Z"
                      fill="#767F8C"
                    />
                  </svg>
                </button>
                <button
                  className="text-gray-400 hover:text-gray-600 md:size-10 size-5 flex justify-center items-center"
                  onClick={handleBookmarkClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z"
                      stroke="#767F8C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="h-full flex justify-center items-center">
                <Image
                  src={logoUrl || "/placeholder.svg"}
                  alt={`${company} logo`}
                  width={96}
                  height={96}
                  className="object-contain h-24 w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
