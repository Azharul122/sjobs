"use client";
import Image from "next/image";
import { Clock, Facebook, Linkedin } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
// import sd from "@/assets/images/blogs/shared.png";
import card1 from "@/assets/images/blogs/card1.png";
import card2 from "@/assets/images/blogs/card2.png";
import author from "@/assets/images/blogs/author.png";
import sbi from "@/assets/images/blogs/single-blog-image.png";
import { useState } from "react";

const BlogDetails = () => {
  const [activeItem, setActiveItem] = useState(1);

  const items = [
    { id: 1, title: "Job Search & Interview Tips" },
    { id: 2, title: "Workplace & Productivity" },
    { id: 3, title: "Employer & Hiring Insights" },
    { id: 4, title: "Understand Your Readers" },
  ];
  return (
    <div>
      <div className="container mx-auto px-4 py-10 ">
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="relative rounded-lg overflow-hidden mb-8">
              <Image
                src={sbi}
                alt="Person typing on keyboard with ideas"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="bg-yellow-400 text-xs font-semibold px-2 py-1 rounded text-black">
                  CAREER GROWTH
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-white mt-2">
                  Helping job seekers grow their skills and land better
                  opportunities.
                </h1>
                <div className="flex items-center mt-2 text-white/80 text-sm">
                  <span>Oct 19</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to Our Blog
              </h2>
              <p className="text-gray-600 mb-6">
                Stay informed with the latest job market trends, career advice,
                and hiring insights. Whether you&apos;re a job seeker looking to
                advance your career or an employer seeking top talent, our blog
                provides valuable resources to help you succeed.
              </p>

              {/* Blog Posts */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Top Resume Mistakes & How to Avoid Them – Tips to craft a
                      resume that stands out.
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      How to Write a Cover Letter That Gets Noticed – Key
                      strategies to make a strong impression.
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      The Best Skills to Learn in 2025 for Career Growth –
                      High-demand skills for the modern job market.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Section */}
            <div
              className="rounded-lg"
              style={{
                backgroundImage: `url(${card2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
            >
              <div className="flex items-center backdrop-blur-sm bg-white/30 p-4 rounded-lg h-[70px] justify-between">
                <span className="text-white font-medium text-[16px]">
                  Like what you see? Share with a friend.
                </span>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Facebook className="size-6 text-blue-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <RiTwitterXFill className="size-6 text-blue-400" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="size-6 text-blue-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 width on desktop */}
          <div className="lg:col-span-1">
            {/* Author Card */}
            <div
              className=" text-white p-6 rounded-lg mb-6 "
              style={{
                backgroundImage: `url(${card1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
            >
              <div className="flex items-end gap-4 mb-5">
                <Image
                  src={author}
                  alt="Author"
                  width={80}
                  height={80}
                  className="rounded-md"
                />

                <div className="mt-2">
                  <Linkedin className="size-6" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[20px] mb-2">
                  Tamás Hám-Szabó
                </h3>
                <p className="text-white/80 text-[16px] font-normal">
                  Founder of SAAS Firm - the Real AI and Data-Driven Customer
                  Engagement Tool
                </p>
              </div>
              <p className="text-white/80 text-[16px] font-normal mt-7">
                With 11 years in SaaS, I&apos;ve built MicroInfluencer and SAAS
                Firm. Passionate about SaaS, data, and AI. Let&apos;s connect!
              </p>
            </div>

            {/* Share Card */}
            <div
              className=" text-white p-6 rounded-lg mb-6"
              style={{
                backgroundImage: `url(${card2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
            >
              <h3 className="font-semibold mb-3">Share with your community!</h3>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <Facebook className="size-6 text-blue-600" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <RiTwitterXFill className="size-6 text-blue-400" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="size-6 text-blue-700" />
                </a>
              </div>
            </div>

            {/* Categories */}
            <div className="  mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                In this article
              </h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveItem(item.id);
                      }}
                      className={`block py-3  transition-colors ${
                        activeItem === item.id
                          ? "text-primary hover:text-primary-hover border-l-4 border-primary  pl-3 "
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogDetails;
