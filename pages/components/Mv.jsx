import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PromisesSection = () => {
  const promises = [
    {
      title: "Clear Communication and Reporting",
      description: "Regular updates and transparent reporting on campaign performance",
      image: "/images/1.png",
    },
    {
      title: "Tailored Strategies", 
      description: "Customized solutions aligned with your business goals",
      image: "/images/2.png",
    },
    {
      title: "Guaranteed Views",
      description: "Proven track record of delivering targeted audience reach",
      image: "/images/3.png", 
    },
    {
      title: "High Production Value",
      description: "Premium quality content that elevates your brand",
      image: "/images/4.png",
    },
    {
      title: "Customer Satisfaction", 
      description: "Committed to exceeding client expectations",
      image: "/images/5.png",
    },
    {
      title: "Long Term Partnership",
      description: "Building lasting relationships through consistent results",
      image: "/images/6.png",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center w-full min-h-screen bg-black py-16 md:py-0">
      {/* Marquee Section */}
      {/* <Marquee
        gradient={false}
        speed={40}
        className="bg-[#AFFE14] py-4 mb-16 shadow-lg w-full"
      >
        <div className="flex space-x-16 mx-8">
          {promises.map((promise, index) => (
            <span key={index} className="text-[#240141] text-lg font-bold whitespace-nowrap">
              {promise.title}
            </span>
          ))}
        </div>
      </Marquee> */}

      {/* Promises Heading */}
      <div className="text-left mb-16 md:mb-20 px-4 w-full lg:max-w-[1300px] mx-auto">
        <h2 className="text-4xl md:text-[50px] font-bold leading-tight tracking-tight text-[#ffffff]">
          What Sets Us Apart
        </h2>
        <p className="mt-4 text-lg md:text-lg text-gray-100">
          We don&apos;t just make promises, we deliver results
        </p>
      <div className="w-16 h-1 bg-[#AFFE14] mt-4"></div>
      </div>

      {/* Promises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full mx-auto px-4">
        {promises.map((promise, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
          >
            <div className="relative">
              <div className="relative w-full h-56 mb-6 overflow-hidden rounded-xl">
                <Image
                  src={promise.image}
                  alt={promise.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {promise.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {promise.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromisesSection;
