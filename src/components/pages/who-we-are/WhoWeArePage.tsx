import Image from "next/image";
import React from "react";

import Image1 from "@/assets/images/about/2989105 1.png";
import Image2 from "@/assets/images/about/52233 1.png";
import wwd from "@/assets/images/about/2534028 1.png";
import values from "@/assets/images/about/50427 1.png";
import wcu from "@/assets/images/about/53582-removebg-preview 1.png";

const WhoWeArePage = () => {
  const sections = [
    {
      id: 1,
      title: "Who We Are",
      content: (
        <div>
          At <strong> Mach Maker</strong>, we are passionate about bridging the
          gap between talented job seekers and forward-thinking employers. Our
          platform is designed to create meaningful connections, simplify the
          hiring process, and empower job seekers to take the next step in their
          careers.
        </div>
      ),
      image: Image1,
      imageAlt: "Team members with digital profiles",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Our Mission",
      content:
        "Our mission is to create a dynamic and user-friendly platform that facilitates seamless connections between job seekers and employers. We aim to enhance career opportunities for individuals while helping businesses find the best talent to drive their success. By providing essential tools for both job seekers and employers, we help foster growth, development, and long-term relationships.",
      image: Image2,
      imageAlt: "Person with digital interface",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "What We Do",
      content: (
        <div className="space-y-4">
          <p>
            We offer a comprehensive suite of features tailored to both job
            seekers and employers:
          </p>
          <p>
            Job Seekers can search for job listings, apply to roles, and manage
            their profiles with privacy features that protect their personal
            data.
          </p>
          <p>
            Employers can post job openings, view candidate applications, search
            for potential hires, and manage their accounts with easy-to-use
            tools.
          </p>
        </div>
      ),
      image: wwd,
      imageAlt: "Person working with digital profiles",
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Our Values",
      content: (
        <div className="space-y-4">
          <p>
            Integrity: We believe in building trust with our users by
            maintaining transparency, honesty, and fairness in every aspect of
            our platform.
          </p>
          <p>
            Innovation: We are committed to continuously improving and evolving
            our platform to meet the ever-changing needs of the job market.
          </p>
          <p>
            Empowerment: We aim to empower job seekers to achieve their career
            goals and employers to find the talent that will drive their
            success.
          </p>
        </div>
      ),
      image: values,
      imageAlt: "Person with digital interface",
      imagePosition: "right",
    },
    {
      id: 5,
      title: "Why Choose Us?",
      content: (
        <div className="space-y-4">
          <p>
            Tailored Job Matching: Our platform uses advanced search features to
            help job seekers find the best-fit opportunities and employers
            discover qualified candidates.
          </p>
          <p>
            User-Friendly Interface: Both job seekers and employers enjoy a
            smooth, intuitive experience with easy access to essential tools and
            resources.
          </p>
          <p>
            Privacy & Security: We prioritize your privacy, ensuring that
            candidate profiles are only visible to employers after explicit
            approval.
          </p>
        </div>
      ),
      image: wcu,
      imageAlt: "Team collaboration with digital interface",
      imagePosition: "left",
    },
  ];

  return (
    <div>
      <div className="container max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat mb-4">
            Who We Are
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            we connect job seekers with employers through a user-friendly
            platform that promotes transparency, security, and seamless
            recruitment. Our mission is to empower individuals and businesses to
            grow and succeed in a dynamic job market.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`flex flex-col ${
                section.imagePosition === "right"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } gap-8 md:gap-12 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div
                className={`w-full md:w-1/2 flex ${
                  section.imagePosition === "right"
                    ? "justify-start"
                    : "justify-end"
                } `}
              >
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 font-montserrat mb-4">
                  {section.title}
                </h3>
                <div className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeArePage;
