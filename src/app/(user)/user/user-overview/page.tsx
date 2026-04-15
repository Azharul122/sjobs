import RecentlyAppliedJob from "@/components/pages/userDashboard/appliedjob/RecentlyAppliedJob";
import UserContent from "@/components/pages/userDashboard/userOverview/UserContent";
import React from "react";

const Page = () => {
  return (
    <div>
      <UserContent />
      <RecentlyAppliedJob />
    </div>
  );
};

export default Page;
