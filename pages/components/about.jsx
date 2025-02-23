import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-20 bg-[#240141] text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">
              Transforming Ideas into
              <span className="text-[#AFFE14]"> Digital Reality</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We&apos;re not just another digital agency. With over a decade of experience,
              we&apos;ve mastered the art of turning complex challenges into elegant solutions.
              Our team of passionate innovators works tirelessly to push the boundaries
              of what&apos;s possible in the digital realm.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-[#AFFE14] pl-4">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="border-l-4 border-[#AFFE14] pl-4">
                <h3 className="text-3xl font-bold">200+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about-image.jpg"
              alt="Our workspace"
              fill
              className="object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#240141] via-transparent to-transparent opacity-40"></div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-[#3a0268] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-[#AFFE14] mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-400">Skilled professionals with diverse expertise</p>
          </div>
          
          <div className="bg-[#3a0268] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-[#AFFE14] mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.732-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.374.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.732 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.374-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-400">Cutting-edge solutions for modern challenges</p>
          </div>
          
          <div className="bg-[#3a0268] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-[#AFFE14] mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
            <p className="text-gray-400">Dedicated to exceeding expectations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
