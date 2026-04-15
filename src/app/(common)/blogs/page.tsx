import BlogPage from "@/components/pages/blogs/BlogPage";
import Breadcrumb from "@/components/shared/breadcrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <BlogPage />
    </div>
  );
};

export default page;
