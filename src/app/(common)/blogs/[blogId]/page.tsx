import BlogDetails from "@/components/pages/blogs/BlogDetails";
import Breadcrumb from "@/components/shared/breadcrumb";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <BlogDetails />
    </div>
  );
};

export default page;
