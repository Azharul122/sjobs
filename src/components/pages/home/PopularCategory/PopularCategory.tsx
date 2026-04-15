import Image from "next/image";
import { Zap } from "lucide-react";
import Image1 from "@/assets/category/Group (4).png";
import Image2 from "@/assets/category/Group (5).png";
import Image3 from "@/assets/category/Group (6).png";
import Image4 from "@/assets/category/Frame (3).png";
import Image5 from "@/assets/category/Group (7).png";
import Image6 from "@/assets/category/Frame (4).png";
import Button from "@/components/ui/Button/Button";
import { FiArrowRight } from "react-icons/fi";

interface PopularCategory {
  id: string;
  title: string;
  openPositions: number;
  icon: string;
}

export default function PopularCategory() {
  const categories: PopularCategory[] = [
    {
      id: "manufacturing-production",
      title: "Manufacturing & Production",
      openPositions: 357,
      icon: Image1.src,
    },
    {
      id: "mechanical-engineering",
      title: "Mechanical Engineering",
      openPositions: 167,
      icon: Image2.src,
    },
    {
      id: "civil-structural-engineering",
      title: "Civil & Structural Engineering",
      openPositions: 297,
      icon: Image3.src,
    },
    {
      id: "social-engineering",
      title: "Quality Assurance & Control",
      openPositions: 57,
      icon: Image4.src,
    },
    {
      id: "music-audio",
      title: " Automation & Robotics",
      openPositions: 204,
      icon: Image5.src,
    },
    {
      id: "software-development",
      title: " Maintenance & Repair",
      openPositions: 312,
      icon: Image6.src,
    }
  ];

  return (
    <main className="my-10 md:my-20 bg-[#F5F5F5] py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="inline-flex border  items-center justify-center gap-2 bg-white rounded-md px-2 py-2 mb-6">
            <div className="w-7 h-7 rounded-full bg-[#77B4CE] flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 fill-black text-transparent" />
            </div>
            <span className="text-gray-800 font-medium">Popular category</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Trending Career Fields
          </h1>

          <p className="max-w-[950px] mx-auto text-lg text-textBlack1 mb-12">
            Explore the most in-demand job categories, featuring opportunities
            across various industries. From technology and healthcare to finance
            and marketing, find the perfect career path that matches your skills
            and passion. Discover trending roles and take the next step in your
            professional journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg p-3 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#EDF2F4] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src={category.icon || "/placeholder.svg"}
                    alt={category.title}
                    width={35}
                    height={35}
                    className="w-7"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {category.openPositions} Open position
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button size="large" className="mt-10 flex items-center mx-auto gap-2">
          Find Work <FiArrowRight />
        </Button>
      </div>
    </main>
  );
}
