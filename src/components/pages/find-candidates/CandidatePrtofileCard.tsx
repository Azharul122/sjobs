"use client";

import { Card } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

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

const CandidatePrtofileCard = ({ profile }: { profile: Profile }) => {
  const router = useRouter();
  return (
    <Card
      style={{
        width: "100%",
        borderRadius: 8,
      }}
      className=""
    >
      <div className="size-full flex lg:flex-row flex-col items-start gap-6">
        <Image className="size-32 " src={profile?.image} alt="" />
        <div className=" border-l border-gray-300   lg:h-[137px] md:w-0    h-[2px] w-[137px]    lg:rotate-0 rotate-90  origin-left  "></div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <h3
                className="text-[#07090A] text-[20px] font-medium font-montserrat leading-[1.2]"
                style={{ margin: 0 }}
              >
                {profile.name}
              </h3>
              <p className="text-[#7D7F80] text-[16px] font-normal font-poppins leading-[1.25]">
                {profile.role}
              </p>
            </div>
            <div>
              <p className="text-[#565656] text-[16px] font-normal font-poppins leading-[1.25]">
                <EnvironmentOutlined style={{ marginRight: 4, fontSize: 12 }} />
                {profile.location}
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap max-w-full gap-2 mt-4 mb-4">
            {/* <Tag color="#515151" className="!bg-[#E4E4E4]" style={{ borderRadius: 16, marginRight: 8 }}>
              
            </Tag> */}
            <div className="bg-[#E4E4E4] px-4 py-1.5 rounded-lg">
              <p className="text-[16px] font-normal text-[#515151] leading-[1.24] w-max">
                {profile.experience}
              </p>
            </div>
            <div className="bg-[#E4E4E4] px-4 py-1.5 rounded-lg">
              <p className="text-[16px] font-normal text-[#515151] leading-[1.24] w-max">
                {profile.jobType}
              </p>
            </div>
            {/* <Tag color="default" style={{ borderRadius: 16 }}>
              {profile.jobType}
            </Tag> */}
          </div>

          <p className="text-[#7D7F80] text-[16px] font-normal font-poppins leading-[1.25]">
            {profile.description}
          </p>

          <button
            onClick={() => router.push(`/find-candidates/${profile.id}`)}
            className="border-primary border !text-primary px-6 py-1.5 rounded-full mt-4"
          >
            View Details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CandidatePrtofileCard;
