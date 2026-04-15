"use client";

import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { CarouselRef } from "antd/es/carousel";
import user from "@/assets/images/home/user1.png";

import qoute from "@/assets/images/home/qoute.png";
import ctitle from "@/assets/images/home/client-title.png";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";

export default function ClientReview() {
  const carouselRef = useRef<CarouselRef | null>(null);

  const reviews: {
    id: number;
    role: string;
    description: React.ReactNode;
    title: string;
    image?: StaticImageData;
  }[] = [
    {
      id: 1,
      title: "Sarah L.",
      role: " Employer",
      description: (
        <div>
          <p>
            Finding the right candidates has never been this efficient. The
            filtering options and messaging system saved me so much time.
          </p>{" "}
          <br />{" "}
          <p>
            A fantastic platform with a user-friendly interface. We&lsquo;ve
            hired some of our best employees through this site.
          </p>
        </div>
      ),
      image: user,
    },
    {
      id: 2,
      title: "Sarah L.",
      role: " Employer",
      description: (
        <div>
          <p>
            Finding the right candidates has never been this efficient. The
            filtering options and messaging system saved me so much time.
          </p>{" "}
          <br />{" "}
          <p>
            A fantastic platform with a user-friendly interface. We&lsquo;ve
            hired some of our best employees through this site.
          </p>
        </div>
      ),
      image: user,
    },
    {
      id: 3,
      title: "Sarah L.",
      role: " Employer",
      description: (
        <div>
          <p>
            Finding the right candidates has never been this efficient. The
            filtering options and messaging system saved me so much time.
          </p>{" "}
          <br />{" "}
          <p>
            A fantastic platform with a user-friendly interface. We&apos;ve
            hired some of our best employees through this site.
          </p>
        </div>
      ),
      image: user,
    },
    {
      id: 4,
      title: "Sarah L.",
      role: " Employer",
      description: (
        <div>
          <p>
            Finding the right candidates has never been this efficient. The
            filtering options and messaging system saved me so much time.
          </p>{" "}
          <br />{" "}
          <p>
            A fantastic platform with a user-friendly interface. We&apos;ve
            hired some of our best employees through this site.
          </p>
        </div>
      ),
      image: user,
    },
    {
      id: 5,
      title: "Sarah L.",
      role: " Employer",
      description: (
        <div>
          <p>
            Finding the right candidates has never been this efficient. The
            filtering options and messaging system saved me so much time.
          </p>{" "}
          <br />{" "}
          <p>
            A fantastic platform with a user-friendly interface. We&apos;ve
            hired some of our best employees through this site.
          </p>
        </div>
      ),
      image: user,
    },
  ];

  const next = () => {
    carouselRef.current?.next();
  };

  const previous = () => {
    carouselRef.current?.prev();
  };

  return (
    <section className="rounded-xl bg-[#F5F5F5] max-sm:mt-10 sm:my-14 max-sm:pt-16 sm:py-16 sm:mx-5">
      <div className="mx-auto container relative overflow-hidden">
        {/* Header Section */}
        {/* <div className="">
          <div className="flex items-center gap-2 justify-center mb-3">
            <Image src={ctitle} alt="ctitle" />
            <p className="text-[#333] leading-[1.1] md:leading-[1.5] font-normal text-[18px]">
              Client Review
            </p>
          </div>
          <h2 className="text-[32px] laeding-[1.1] md:leading-[1.5] font-semibold text-center mb-3 ">
            Real Experiences, Real Success
          </h2>
          <p className="mt-6 md:mt-10 mb-3 !block text-center max-w-[800px] mx-auto md:tracking-wide">
            Discover how our platform has helped job seekers land their dream
            roles and employers find top talent. Our users love the seamless
            job-matching process, easy navigation, and reliable support that
            make hiring and job searching stress-free. See why professionals
            trust us for their career and recruitment needs.
          </p>
        </div> */}

        <SectionHeader
          icon={ctitle}
          description="  Discover how our platform has helped job seekers land their dream
            roles and employers find top talent. Our users love the seamless
            job-matching process, easy navigation, and reliable support that
            make hiring and job searching stress-free. See why professionals
            trust us for their career and recruitment needs."
          subtitle="  Client Review"
          title=" Real Experiences, Real Success"
        />

        {/* Carousel Section */}
        <div className="relative mt-10">
          <Carousel
            ref={carouselRef}
            slidesToShow={2}
            dots={{ className: "custom-dots" }}
            infinite={true}
            responsive={[
              { breakpoint: 1700, settings: { slidesToShow: 2 } },
              { breakpoint: 1350, settings: { slidesToShow: 2 } },
              { breakpoint: 1000, settings: { slidesToShow: 1 } },
            ]}
            className="gap-6 relative  "
          >
            {reviews?.map((video) => (
              <div key={video.id} className="">
                <div className=" relative  rounded-[30px] overflow-hidden bg-white border border-white/40  h-full  py-5 mb-16 px-6 md:mx-3">
                  <div className="flex  gap-2 justify-stretch  w-max items-center">
                    <Image
                      src={video.image || ""}
                      width={64}
                      height={64}
                      alt="thumbnail"
                      className="mx-auto  h-[64px] md:h-[64px] md:w-16 object-contain rounded-full relative z-10"
                    />
                    <div className="">
                      <h5 className="text-[24px] md:leading-[1.5] leading-[1.1] font-semibold text-[#07090A]">
                        {video.title}
                      </h5>
                      <p className="text-[#07090A] text-[18px] font-medium">
                        {video.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 text-lg  font-poppins text-textBlack1">
                    {video.description}
                  </div>

                  <div className="absolute right-6 top-6">
                    <Image src={qoute} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          {/* Navigation Controls Container */}
          <div className="flex items-center justify-center mt-6 relative h-12">
            {/* Custom Navigation Buttons and Dots Container */}

            {/* Left Button */}
            <button
              onClick={previous}
              className="absolute bottom-16 md:right-16 right-12 rounded-xl p-2 md:p-3 w-9 h-9 md:size-12 flex items-center justify-center bg-white hover:border-white/40  transition"
              aria-label="Previous slide"
            >
              <LeftOutlined className="text-sm md:text-lg font-extrabold" />
            </button>

            {/* Dots - will be injected here by AntD */}

            {/* Right Button */}
            <button
              onClick={next}
              className=" absolute bottom-16 right-0 rounded-xl p-2 md:p-3 w-9 h-9 md:size-12 flex items-center justify-center bg-secondary text-white hover:border-white/40   transition"
              aria-label="Next slide"
            >
              <RightOutlined className="text-sm md:text-lg font-extrabold" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Custom dots styling */
        .custom-dots {
          position: static !important;
          display: flex !important;
          justify-content: flex-start !important; /* Left align on all screens */
          align-items: center !important;
          margin: 0 !important;
          padding-left: 16px !important; /* Add left padding for mobile */
          list-style: none !important;
          height: 12px !important;
          gap: 8px !important;
          width: 100% !important; /* Ensure full width */
        }
        :where(.css-dev-only-do-not-override-1d4w9r2).ant-carousel
          .slick-dots
          li.slick-active::after {
          transform: translateY(-5) !important;
        }

        @media (min-width: 768px) {
          .custom-dots {
            justify-content: center !important; /* Center on larger screens */
            padding-left: 0 !important; /* Remove left padding */
          }
        }

        .custom-dots li {
          margin: 0 !important;
          width: 12px !important;
          height: 12px !important;
        }

        .custom-dots li button {
          width: 12px !important;
          height: 12px !important;
          padding: 0 !important;
          border-radius: 50% !important;
          background: #77b4ce !important;
          border: none !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }

        .custom-dots li.slick-active button {
          background: #004d6e !important;
        }

        /* Remove default Ant Design styles */
        .ant-carousel .slick-dots-bottom {
          bottom: unset !important;
          position: static !important;
        }

        .ant-carousel .slick-dots li {
          width: auto !important;
          height: auto !important;
        }
      `}</style>
    </section>
  );
}
