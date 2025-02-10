import React from "react";
import Image from "next/image";
import Navbar from "./components/subC/Navbar";
import Footer from "./components/subC/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/images/team1.jpg",
      description: "Digital marketing veteran with 15+ years of experience",
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "/images/team2.jpg",
      description: "Award-winning designer and brand strategist",
    },
    {
      name: "Jessica Patel",
      role: "Head of Strategy",
      image: "/images/team3.jpg",
      description: "Former Google strategist specializing in growth",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We&apos;re a team of passionate digital marketers dedicated to
              helping brands thrive in the digital age
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To empower businesses with innovative digital solutions that drive
              real growth and create meaningful connections with their audience.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We stay ahead of digital trends to deliver cutting-edge
                solutions
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We&apos;re committed to delivering exceptional results for every
                client
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                We build trust through transparency and honest communication
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Talented professionals dedicated to your success
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
