import React from "react";
import Image from "next/image";

const FiveServices = () => {
  const services = [
    {
      title: "Social Media Management",
      description:
        "Optimize your social presence and engage audiences effectively across platforms.",
      bgColor: "bg-gradient-to-br from-green-400 to-green-600",
      image: "/images/social.png",
    },
    {
      title: "Content Creation",
      description:
        "Craft tailored content that speaks to your audience and drives engagement.",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      image: "/images/content.png",
    },
    {
      title: "Graphic Design",
      description:
        "Deliver stunning visuals and creative designs that stand out.",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      image: "/images/graphic.png",
    },
    {
      title: "Video Production and Editing",
      description:
        "Create impactful videos from concept to completion for any purpose.",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      image: "/images/video.png",
    },
    {
      title: "Meme Marketing",
      description:
        "Tap into trends and create viral meme campaigns that resonate with your audience.",
      bgColor: "bg-gradient-to-br from-red-400 to-red-600",
      image: "/images/meme.png",
    },
    {
      title: "Localized Campaigns",
      description:
        "Develop targeted strategies for specific regions to maximize impact.",
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      image: "/images/local.png",
    },
  ];

  const industries = [
    "HEALTH TECH",
    "FINTECH",
    "CRYPTO",
    "E-COMMERCE",
    "RETAIL",
    "NGOs",
    "SAAS",
    "PUBLIC SERVICE",
    "TRAVEL",
    "HOSPITALITY",
    "NON - PROFIT",
    "ENTERTAINMENT",
  ];

  return (
    <>
      <div className="text-center pt-10 md:pt-32">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Expertise You Can Trust
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto px-4">
          Delivering exceptional digital solutions across industries
        </p>
      </div>

      <div className="px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-white ${service.bgColor} hover:scale-105`}>
            <div className="relative w-full h-72 mb-6 overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-base opacity-90">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-[90%] lg:max-w-[1300px] mx-auto px-4 py-16 md:py-32 bg-gray-50 rounded-3xl my-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-10 md:mb-20">
          Industries We Serve
        </h2>
        <Image
          className="my-5 w-full opacity-60"
          src="/svgs/bigline.svg"
          alt="Line"
          width={1200}
          height={1200}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-4 md:p-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="text-center mx-auto p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-sm md:text-base font-semibold text-gray-700">
                {industry}
              </p>
            </div>
          ))}
        </div>
        <Image
          className="my-5 md:my-10 w-full opacity-60"
          src="/svgs/bigline.svg"
          alt="Line"
          width={1200}
          height={1200}
        />
      </div>
    </>
  );
};

export default FiveServices;
