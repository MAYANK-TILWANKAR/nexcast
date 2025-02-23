import React from "react";
import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of Social Media Marketing",
      excerpt:
        "Discover emerging trends and strategies that will shape social media marketing in the coming years.",
      date: "June 15, 2023",
      category: "Social Media",
      image: "/images/blog1.jpg",
    },
    {
      title: "Effective Content Creation Strategies",
      excerpt:
        "Learn how to create engaging content that resonates with your target audience and drives results.",
      date: "June 10, 2023",
      category: "Content Marketing",
      image: "/images/blog2.jpg",
    },
    {
      title: "Maximizing ROI with Performance Marketing",
      excerpt:
        "Expert tips on optimizing your performance marketing campaigns for better return on investment.",
      date: "June 5, 2023",
      category: "Paid Social",
      image: "/images/blog3.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Knowledge Hub
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and strategies in
              digital marketing
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-purple-600 font-semibold">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-purple-600 font-semibold hover:text-purple-700">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blogs;
