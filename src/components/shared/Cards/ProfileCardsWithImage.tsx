import { FaFacebook } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

// Define the type for a single profile
interface Profile {
  id: number;
  name: string;
  skill: string;
  description: string;
  imageSrc: StaticImageData;
  socialLinks: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

// Define the props for the ProfileCards component
interface ProfileCardsProps {
  profiles: Profile[];
}

export default function ProfileCardsWithImage({ profiles }: ProfileCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full container">
      {profiles.map((profile) => (
        <div key={profile.id} className="flex flex-col items-center">
          {/* Card with image and skill badge */}
          <div className=" w-full rounded-3xl overflow-hidden max-w-[350px] border border-gray-200 bg-white shadow-sm">
            <div className="relative  aspect-square">
              <Image
                src={profile.imageSrc || "/placeholder.svg"}
                alt={profile.name}
                fill
                className="object-contain object-top w-[150px]"
              />
              {/* Skill badge */}
              <div className="absolute bottom-4 left-5 transform">
                <div className="bg-[#4FC553] text-white px-4 py-2 rounded-full text-sm">
                  {profile.skill}
                </div>
              </div>
            </div>
          </div>

          {/* Name */}
          <h3 className="mt-4 text-xl font-semibold text-[#272727]">
            {profile.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-center text-[#656565] text-sm max-w-xs">
            {profile.description}
          </p>

          {/* Social links */}
          <div className="flex space-x-4 mt-4">
            <a
              href={profile.socialLinks.twitter}
              className="text-[#626262] hover:text-[#626262]/80 transition-colors"
            >
              <BsTwitter size={20} />
            </a>
            <a
              href={profile.socialLinks.facebook}
              className="text-[#626262] hover:text-[#626262]/80 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href={profile.socialLinks.instagram}
              className="text-[#626262] hover:text-[#626262]/80 transition-colors"
            >
              <AiFillInstagram size={22} />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              className="text-[#626262] hover:text-[#626262]/80 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
