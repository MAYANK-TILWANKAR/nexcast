import React from "react";
import Image from "next/image";

const FiveServices = () => {
  const services = [
    {
      title: "Social Media Management",
      description:
        "Optimize your social presence and engage audiences effectively across platforms.",
      bgColor: "#3b82f6", // Bright blue
      image: "/images/social.png",
    },
    {
      title: "Content Creation", 
      description:
        "Craft tailored content that speaks to your audience and drives engagement.",
      bgColor: "#f97316", // Bright orange
      image: "/images/content.png",
    },
    {
      title: "Graphic Design",
      description:
        "Deliver stunning visuals and creative designs that stand out.",
      bgColor: "#8b5cf6", // Bright purple
      image: "/images/graphic.png",
    },
    {
      title: "Video Production",
      description:
        "Create impactful videos from concept to completion for any purpose.",
      bgColor: "#06b6d4", // Bright cyan
      image: "/images/video.png",
    },
    {
      title: "Meme Marketing",
      description:
        "Tap into trends and create viral meme campaigns that resonate with your audience.",
      bgColor: "#ef4444", // Bright red
      image: "/images/meme.png",
    },
    {
      title: "Local Campaigns",
      description:
        "Develop targeted strategies for specific regions to maximize impact.",
      bgColor: "#eab308", // Bright yellow
      image: "/images/local.png",
    },
  ];

  return (
    <section className="bg-black px-4 md:px-8 py-12">
      <div className="text-center mx-4 md:mx-40">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase mb-4 md:mb-6">
          Expertise You Can Trust
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8 md:mb-5 text-sm md:text-lg mx-auto">
          Delivering exceptional digital solutions across industries
        </p>
        <div className="h-1 w-20 bg-[#AFFE14] rounded-full mb-6 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 max-w-[1300px] mx-auto">
        {services.map((service, index) => (
          <div key={index} className="group">
            <div 
              className="w-full text-center p-6 md:p-8 rounded-lg border-4 border-white h-[400px] md:h-[500px] flex flex-col justify-center items-center gap-4 md:gap-5 relative overflow-hidden transition-all duration-300"
              style={{ background: service.bgColor }}
            >
              <div className="relative w-full h-48 md:h-64 mb-4 md:mb-6 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  priority={index < 2}
                />
              </div>
              <strong className="block text-lg md:text-xl lg:text-2xl text-white transition-all duration-300">
                {service.title}
              </strong>
              <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black/85 text-white p-6 md:p-8 rounded-lg font-medium text-sm md:text-base lg:text-lg opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FiveServices;
