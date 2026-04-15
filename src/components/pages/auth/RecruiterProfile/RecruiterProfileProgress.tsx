"use client";

import React, { useState } from "react";
import { Tabs, Progress, ConfigProvider } from "antd";

import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";
import ProfileCreateSuccess from "../../profile/ProfileCreateSuccess";
import CompanyInfo from "./CompanyInfo";
import ContactInfo from "./ContactInfo";


type TabKey = "1" | "2" | "3"; // Only need 2 tabs + completion state

const RecruiterProfileProgress = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("1");
  const [completedTabs, setCompletedTabs] = useState<TabKey[]>(["1"]);

  // Progress levels for each tab
  const tabProgress = {
    "1": 0,
    "2": 50,
    "3": 100, // Completion state
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

  const tabItems = [
    {
      key: "1",
      label: (
        <div className="custom-tab-label flex items-center gap-2 text-[20px]">
          <HiOutlineOfficeBuilding /> Company Info
        </div>
      ),
      children: <CompanyInfo onComplete={() => markTabAsComplete("1")} />,
      disabled: false, // First tab always enabled
    },
    {
      key: "2",
      label: (
        <div className="custom-tab-label flex items-center gap-2 text-[20px]">
          <MdContactMail /> Contact Info
        </div>
      ),
      children: <ContactInfo onComplete={() => markTabAsComplete("2")} />,
      disabled: !completedTabs.includes("1"), // Disabled if previous tab not completed
    },
  ];

  const getTabTitle = (tabKey: TabKey): string => {
    switch (tabKey) {
      case "1": return "Company Information";
      case "2": return "Contact Information";
      default: return "Profile Complete";
    }
  };

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
        {activeTab === "3" ? (
          <ProfileCreateSuccess />
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="m-0">Profile Completion</h2>
              <div
                className="flex items-center gap-2 text-base font-medium"
                style={{
                  color: activeTab === "2" ? "#FFAE00" : "#004D6E",
                }}
              >
                {tabProgress[activeTab]}% Completed
              </div>
            </div>

            <Progress
              percent={tabProgress[activeTab]}
              showInfo={false}
              status={activeTab === "2" ? "success" : "active"}
              strokeColor={{
                "0%": "#004D6E",
                "100%": "#FFAE00",
              }}
              className="mb-6"
            />

            <div className="bg-white shadow-md rounded-lg px-10 py-10 mt-10">
              <h3 className="text-2xl font-medium pb-4">
                {getTabTitle(activeTab)}
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

export default RecruiterProfileProgress;