import React from "react";
import Image from "next/image";

const PromisesSection = () => {
  const promises = [
    {
      title: "Clear Communication and Reporting",
      description:
        "Regular updates and transparent reporting on campaign performance",
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
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-16 md:py-16 px-4 md:px-8 bg-gray-50">
      {/* Promises Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-[48px] font-bold mt-2 font-['Satoshi_Variable'] leading-tight tracking-[-0.02em]">
          What Sets Us Apart
        </h2>
        <p className="mt-4 text-base md:text-[20px] font-['Inter'] text-gray-600">
          We don&apos;t just make promises, we deliver results
        </p>
      </div>

      {/* Promises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {promises.map((promise, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={promise.image}
                alt={promise.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {promise.title}
            </h3>
            <p className="text-gray-600">{promise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromisesSection;
