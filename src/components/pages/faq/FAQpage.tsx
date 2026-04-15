"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LiaTimesSolid } from "react-icons/lia";

export default function FAQPage() {
  const [expandedItem, setExpandedItem] = useState<number | null>(1);

  const generalQuestions = [
    {
      id: 1,
      question: "What is this platform about?",
      answer:
        "This platform connects job seekers with employers, offering tools to streamline the hiring process. We provide a space for professionals to showcase their skills and for companies to find qualified candidates for their available positions.",
    },
    {
      id: 2,
      question: "Related Candidates?",
      answer:
        "Our matching algorithm suggests candidates based on job requirements, skills, experience, and preferences to help employers find the most suitable applicants for their positions.",
    },
    {
      id: 3,
      question: "Is this platform free to use?",
      answer:
        "Basic features are free for all users. Job seekers can create profiles and apply for jobs at no cost. Employers may access premium features through our subscription plans.",
    },
    {
      id: 4,
      question: "How do I create an account?",
      answer:
        "Click the 'Sign Up' button in the top right corner, enter your email address, create a password, and follow the prompts to complete your profile information.",
    },
  ];

  const jobSeekerQuestions = [
    {
      id: 5,
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@example.com or through the 'Help' section in your account dashboard. We typically respond within 24 hours.",
    },
    {
      id: 6,
      question: "How do I apply for a job?",
      answer:
        "Browse job listings, click on a position that interests you, and click the 'Apply Now' button. You'll be prompted to submit your profile and any additional information requested by the employer.",
    },
    {
      id: 7,
      question: "Can employers see my full profile?",
      answer:
        "Employers can only see the information you've marked as public in your privacy settings. You can control exactly what details are visible to potential employers.",
    },
    {
      id: 8,
      question: "How do I update my profile?",
      answer:
        "Log into your account, navigate to 'Profile Settings', and click 'Edit Profile'. Make your changes and click 'Save' to update your information.",
    },
    {
      id: 9,
      question: "What happens after I apply for a job?",
      answer:
        "After applying, employers review applications and may contact you for interviews. You can track your application status in the 'Applications' section of your dashboard.",
    },
  ];

  const jobPosterQuestions = [
    {
      id: 10,
      question: "Can I delete my account?",
      answer:
        "Yes, you can delete your account by going to 'Account Settings' and selecting 'Delete Account'. Please note that this action is permanent and all your data will be removed.",
    },
    {
      id: 11,
      question: "How do I post a job?",
      answer:
        "Log in, navigate to your dashboard, click 'Post a Job', fill out the job details form, review the information, and click 'Publish' to make your job listing live.",
    },
    {
      id: 12,
      question: "How do I view candidate applications?",
      answer:
        "Go to your dashboard, select 'My Jobs', click on a specific job posting, and then select 'View Applications' to see all candidates who have applied.",
    },
    {
      id: 13,
      question: "Can I search for candidates without posting a job?",
      answer:
        "Yes, with a premium subscription, you can access our candidate database and search for potential employees based on skills, experience, location, and other criteria.",
    },
    {
      id: 14,
      question: "How can I edit or remove a job posting?",
      answer:
        "From your dashboard, go to 'My Jobs', find the listing you want to modify, and click 'Edit' or 'Remove'. Changes will be reflected immediately on the platform.",
    },
  ];

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const renderQuestion = (
    item: { id: number; question: string; answer: string },
    index: number
  ) => {
    const isExpanded = expandedItem === item.id;
    const isEven = index % 2 === 0;
    console.log(isEven);

    return (
      <div
        key={item.id}
        className={` mb-3 last:mb-0  rounded-xl  shadow-lg border py-5 md:px-14  ${
          isExpanded ? "bg-[#EAF0F3]" : "bg-white"
        }`}
      >
        <motion.div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => toggleItem(item.id)}
          initial={false}
          animate={{
            backgroundColor: isExpanded ? "#EAF0F3" : "",
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center">
            <span className="text-[#77B4CE] font-bold mr-3 md:text-[48px] sm:text-[36px] text-[24px] leading-[1.2] ">
              {item.id.toString().padStart(2, "0")}
            </span>
            <span className="text-gray-700">{item.question}</span>
          </div>
          <div
            className={`ml-2 md:size-12 size-7 rounded-full transition-all duration-500 flex items-center justify-center flex-shrink-0 ${
              isExpanded
                ? "bg-[#004D6E] text-white"
                : "bg-secondary text-textBlack"
            }`}
          >
            {isExpanded ? <LiaTimesSolid size={16} /> : <Plus size={16} />}
          </div>
        </motion.div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key={`answer-${item.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.3, delay: 0.1 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                },
              }}
              className="overflow-hidden"
            >
              <div
                className={`md:px-12 sm:px-4 px-3 pb-4 pt-1 text-[#7D7F80] ${
                  isExpanded ? "bg-[#EAF0F3] md:pl-5" : ""
                }`}
              >
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="container mx-auto  p-6 rounded-lg">
      {/*  */}
      <div className="pb-12 pt-6">
        <h2 className="text-[#07090A] md:text-[40px] text-[24px] leading-[1.1] md:leading-[1.5]  font-semibold font-montserrat text-center">
          Frequently Asked Questions (FAQ)
        </h2>
      </div>

      {/*  */}
      <div className="mb-6">
        <h2 className="text-lg font-medium text-black  bg-[#EDF2F4] p-5 rounded w-max mb-5">
          General Questions
        </h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          {generalQuestions.map((item, index) => renderQuestion(item, index))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium text-black  bg-[#EDF2F4] p-5 rounded w-max mb-5">
          For Job Seekers
        </h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          {jobSeekerQuestions.map((item, index) => renderQuestion(item, index))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium text-black  bg-[#EDF2F4] p-5 rounded w-max mb-5">
          For Job Posters
        </h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          {jobPosterQuestions.map((item, index) => renderQuestion(item, index))}
        </div>
      </div>
    </div>
  );
}
