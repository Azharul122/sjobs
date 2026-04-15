/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Tabs, Progress, ConfigProvider, message } from "antd";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import SocialLinks from "./SocialLinks";
import AccountSettings from "./AccountSettings";
import { LiaUserAltSolid, LiaUserCircleSolid } from "react-icons/lia";
import { CiGlobe, CiSettings } from "react-icons/ci";
import ProfileCreateSuccess from "./ProfileCreateSuccess";

import { useCreateJobSeekerProfileMutation } from "@/redux/features/jobseeker/jobseekerApi";
import { resetProfile } from "@/redux/features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

type TabKey = "1" | "2" | "3" | "4" | "5";

const ProfileProgress = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("1");
  const [completedTabs, setCompletedTabs] = useState<TabKey[]>(["1"]);
  const dispatch = useAppDispatch();
  const profileData = useAppSelector((state: any) => state.profile);
  const [createJobSeekerProfile] =
    useCreateJobSeekerProfileMutation();

  const tabProgress = {
    "1": 0,
    "2": 33,
    "3": 67,
    "4": 100,
    "5": 100,
  };

  const handleTabChange = (key: string) => {
    if (completedTabs.includes(key as TabKey)) {
      setActiveTab(key as TabKey);
    }
  };

  const markTabAsComplete = (tabKey: TabKey) => {
    if (!completedTabs.includes(tabKey)) {
      setCompletedTabs([...completedTabs, tabKey]);
    }
    const nextTab = String(Number(tabKey) + 1) as TabKey;
    if (!completedTabs.includes(nextTab)) {
      setCompletedTabs([...completedTabs, nextTab]);
    }
    setActiveTab(nextTab);
  };

  const handleFinalSubmit = async () => {
    try {
      if (!profileData.personalInfo || !profileData.accountSettings) {
        message.error("Please complete all sections");
        return;
      }

      const profilePayload = {
        ...profileData.personalInfo,
        education: profileData.education,
        socialLinks: profileData.socialLinks,
        ...profileData.accountSettings,
      };

      console.log("Submitting profile data:", profilePayload);

      await createJobSeekerProfile(profilePayload).unwrap();
      markTabAsComplete("4");
      dispatch(resetProfile());
      message.success("Profile created successfully!");
    } catch (error) {
      console.error("Failed to create profile:", error);
      message.error("Failed to create profile. Please try again.");
    }
  };

  const tabItems = [
    {
      key: "1",
      label: (
        <div className="custom-tab-label flex items-center gap-2 text-[20px]">
          <LiaUserAltSolid /> Personal Info
        </div>
      ),
      children: <PersonalInfo onComplete={() => markTabAsComplete("1")} />,
      disabled: false,
    },
    {
      key: "2",
      label: (
        <div className="custom-tab-label flex items-center gap-2 text-[20px]">
          <LiaUserCircleSolid /> Education
        </div>
      ),
      children: <Education onComplete={() => markTabAsComplete("2")} />,
      disabled: !completedTabs.includes("1"),
    },
    {
      key: "3",
      label: (
        <div className="custom-tab-label flex items-center gap-2 text-[20px]">
          <CiGlobe /> Social Links
        </div>
      ),
      children: <SocialLinks onComplete={() => markTabAsComplete("3")} />,
      disabled: !completedTabs.includes("2"),
    },
    {
      key: "4",
      label: (
        <div className="custom-tab-label flex items-center gap-2 text-[20px]">
          <CiSettings /> Account Settings
        </div>
      ),
      children: <AccountSettings onComplete={handleFinalSubmit} />,
      disabled: !completedTabs.includes("3"),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemActiveColor: "#004D6E",
            itemSelectedColor: "",
            inkBarColor: "#004D6E",
          },
        },
      }}
    >
      <div className="container mx-auto pt-10 min-h-screen">
        {activeTab === "5" ? (
          <ProfileCreateSuccess />
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="m-0">Profile Completion</h2>
              <div
                className="flex items-center gap-2 text-base font-medium"
                style={{ color: activeTab === "4" ? "#FFAE00" : "#004D6E" }}
              >
                {tabProgress[activeTab]}% Completed
              </div>
            </div>

            <Progress
              percent={tabProgress[activeTab]}
              showInfo={false}
              status={activeTab === "4" ? "success" : "active"}
              strokeColor={{
                "0%": "#004D6E",
                "100%": "#FFAE00",
              }}
              className="mb-6"
            />

            <div className="bg-white shadow-md rounded-lg px-10 py-10 mt-5">
              <h3 className="text-2xl font-medium pb-4">
                {activeTab === "1"
                  ? "Personal Info"
                  : activeTab === "2"
                  ? "Education"
                  : activeTab === "3"
                  ? "Social Links"
                  : "Account Settings"}
              </h3>
              <Tabs
                activeKey={activeTab}
                onChange={handleTabChange}
                items={tabItems}
                className="borderless-tabs !mb-5"
              />
            </div>
          </>
        )}

        <style jsx global>{`
          .borderless-tabs .ant-tabs-ink-bar {
            display: none !important;
          }
          .borderless-tabs .ant-tabs-nav {
            margin-bottom: 0;
            border-bottom: none !important;
          }
          .borderless-tabs .ant-tabs-tab {
            border: none !important;
            margin: 0 20px 0 0 !important;
            background: none !important;
            transition: all 0.3s ease;
          }
          .borderless-tabs .ant-tabs-tab-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .borderless-tabs .ant-tabs-tab-active {
            color: #004d6e !important;
          }
          .custom-tab-label {
            font-weight: 500;
          }
        `}</style>
      </div>
    </ConfigProvider>
  );
};

export default ProfileProgress;
