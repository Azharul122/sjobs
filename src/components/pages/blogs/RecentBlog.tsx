"use client";

// import Image from "next/image";
import React, { useRef } from "react";
import { LiaArrowLeftSolid, LiaArrowRightSolid } from "react-icons/lia";

import one from "@/assets/images/blogs/1.png";
import two from "@/assets/images/blogs/2.png";
import three from "@/assets/images/blogs/3.png";
import four from "@/assets/images/blogs/4.png";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { BlogCard } from "./BlogCard";

const RecentBlog = () => {
  const carouselRef = useRef<CarouselRef | null>(null);
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Tailwind CSS",
      excerpt:
        "Learn how to set up and use Tailwind CSS in your next project with these simple steps.",
      date: "April 1, 2025",
      author: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Development",
      imageUrl: one,
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Flexbox",
      excerpt:
        "Discover how to create flexible and responsive layouts using CSS Flexbox techniques.",
      date: "March 28, 2025",
      author: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Design",
      imageUrl: two,
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Modern JavaScript Features You Should Know",
      excerpt:
        "Explore the latest JavaScript features that can help you write cleaner and more efficient code.",
      date: "March 25, 2025",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "JavaScript",
      imageUrl: three,
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Creating Accessible Web Applications",
      excerpt:
        "Learn best practices for building web applications that are accessible to all users.",
      date: "March 22, 2025",
      author: {
        name: "Sam Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Accessibility",
      imageUrl: four,
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Introduction to Server Components in React",
      excerpt:
        "Understand how Server Components work in React and when to use them in your applications.",
      date: "March 19, 2025",
      author: {
        name: "Taylor Reed",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "React",
      imageUrl: two,
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "Optimizing Images for the Web",
      excerpt:
        "Discover techniques to optimize your images for better web performance and user experience.",
      date: "March 16, 2025",
      author: {
        name: "Morgan Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Performance",
      imageUrl: one,
      readTime: "4 min read",
    },
  ];

  const next = () => {
    carouselRef.current?.next();
  };

  const previous = () => {
    carouselRef.current?.prev();
  };
  return (
    <div>
      <div className="flex justify-between items-start mb-10">
        <div className="">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20.6555 7.74495C20.5627 7.68761 20.4568 7.65493 20.3478 7.65003C20.2388 7.64513 20.1304 7.66817 20.0328 7.71695L12.3528 11.5569C12.2465 11.6101 12.1571 11.6918 12.0946 11.793C12.0322 11.8941 11.9991 12.0106 11.9991 12.1294V21.0894C11.9991 21.2591 12.0666 21.4219 12.1866 21.5419C12.3066 21.6619 12.4693 21.7293 12.6391 21.7294C12.7369 21.7294 12.8349 21.707 12.9253 21.6618L20.6053 17.8218C20.7116 17.7687 20.801 17.687 20.8635 17.5859C20.926 17.4848 20.9591 17.3683 20.9591 17.2494V8.28943C20.9591 8.18033 20.9312 8.07304 20.8781 7.97775C20.8249 7.88246 20.7483 7.80232 20.6555 7.74495ZM19.6791 16.8539L13.2791 20.0539V12.525L19.6791 9.32503V16.8539ZM20.3187 6.34799C20.3145 6.22469 20.2749 6.1052 20.2044 6.00392C20.134 5.90264 20.0358 5.82387 19.9216 5.77711L11.9536 2.51311C11.8739 2.48049 11.7885 2.46428 11.7024 2.46545C11.6163 2.46662 11.5313 2.48514 11.4525 2.51991L4.0605 5.78391C3.95053 5.8325 3.85647 5.91109 3.78909 6.01066C3.72171 6.11024 3.68374 6.22677 3.67953 6.34693C3.67531 6.46708 3.70502 6.586 3.76525 6.69005C3.82549 6.7941 3.91381 6.87909 4.0201 6.93527L11.4121 10.8393C11.5013 10.8864 11.6004 10.9117 11.7013 10.9132C11.8022 10.9148 11.902 10.8924 11.9926 10.8481L19.9606 6.94407C20.0714 6.88983 20.1642 6.8047 20.2277 6.69894C20.2912 6.59318 20.3228 6.4713 20.3187 6.34799ZM11.7219 9.55535L5.78698 6.42087L11.7205 3.80087L18.1181 6.42159L11.7219 9.55535ZM11.0255 11.5675L3.98554 7.72751C3.88807 7.67434 3.77843 7.64744 3.66742 7.64946C3.5564 7.65148 3.44782 7.68235 3.35234 7.73903C3.25686 7.79572 3.17778 7.87627 3.12285 7.97277C3.06792 8.06926 3.03905 8.17839 3.03906 8.28943V17.2494C3.03906 17.3644 3.07004 17.4772 3.12872 17.5761C3.18741 17.675 3.27165 17.7562 3.37258 17.8113L10.4126 21.6513C10.5101 21.7044 10.6197 21.7313 10.7307 21.7292C10.8417 21.7272 10.9503 21.6964 11.0458 21.6397C11.1412 21.5831 11.2203 21.5025 11.2753 21.406C11.3302 21.3096 11.3591 21.2005 11.3591 21.0894V12.1294C11.3591 12.0144 11.3281 11.9016 11.2694 11.8027C11.2107 11.7038 11.1265 11.6226 11.0255 11.5675ZM4.87362 17.172L10.0791 13.3862V15.12L6.23586 17.915L4.87362 17.172ZM4.31906 14.259L8.16234 11.4638L9.5245 12.2069L4.31906 15.9926V14.259ZM6.91882 10.7856L4.31906 12.6763V9.36751L6.91882 10.7856ZM7.47938 18.5933L10.0791 16.7026V20.0113L7.47938 18.5933Z"
                fill="#4F46E5"
              />
            </svg>
            <h4 className="text-[#4F46E5] text-[18px] leading-[1.2] font-poppins font-medium">
              Our blogs
            </h4>
          </div>
          <h2 className="font-montserrat font-semibold text-[24px] md:text-[40px] leading-[1.4] text-black mt-2 ">
            Recent Post
          </h2>
        </div>
        {/* arrows */}
        <div className="flex items-center gap-2">
          <div
            onClick={previous}
            className="size-14 flex justify-center items-center rounded-lg cursor-pointer"
          >
            <LiaArrowLeftSolid className="size-6" />
          </div>
          <div
            onClick={next}
            className="size-14 flex justify-center items-center rounded-lg bg-[#036] text-white cursor-pointer"
          >
            <LiaArrowRightSolid className="size-6" />
          </div>
        </div>
      </div>

      <Carousel
        ref={carouselRef}
        slidesToShow={3}
        dots={false}
        infinite={true}
        responsive={[
          { breakpoint: 1700, settings: { slidesToShow: 3 } },
          { breakpoint: 1350, settings: { slidesToShow: 3 } },
          { breakpoint: 950, settings: { slidesToShow: 2 } },
          { breakpoint: 550, settings: { slidesToShow: 1 } },
        ]}
        className="-mx-[14px] gap-4"
      >
        {blogPosts?.map((post) => (
          <div key={post.id} className="px-2">
            {" "}
            {/* Add padding here for gap */}
            <div className="h-[450px]">
              {" "}
              {/* Ensure full height */}
              <BlogCard post={post} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecentBlog;
