import React from "react";
import { BlogCard } from "./BlogCard";

import one from "@/assets/images/blogs/1.png";
import two from "@/assets/images/blogs/2.png";
import three from "@/assets/images/blogs/3.png";
import four from "@/assets/images/blogs/4.png";
import RecentBlog from "./RecentBlog";

const BlogPage = () => {
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
  return (
    <div>
      {/* blogs */}
      <main className="container mx-auto  py-12">
        <h1 className="text-3xl font-semibold text-center mb-12 text-[#333232] md:text-[40px] text-[24px] font-montserrat md:leading-[1.24]">Featured Blog Articles</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogPosts.map((post) => (
            <div className="h-[450px]" key={post.id}>

                <BlogCard  post={post} />
            </div>
          ))}
        </div>
      </main>

      {/* Recent blog */}
      <section className=" bg-white py-12 ">
        <div className="container mx-auto ">
          <RecentBlog />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
