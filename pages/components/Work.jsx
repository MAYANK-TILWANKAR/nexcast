import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Work = () => {
  const projects = [
    {
      title: "Scam 2003",
      client: "SonyLIV",
      category: "Social Media Campaign",
      image: "/images/scam2003.avif",
      description:
        "Comprehensive digital marketing campaign for the launch of Scam 2003 web series, driving massive viewer engagement",
      results: [
        "50M+ social media impressions",
        "2M+ website visits",
        "500K+ new subscribers",
      ],
    },
    {
      title: "Just Mughal Things",
      client: "Historical Entertainment",
      category: "Content Marketing",
      image: "/images/mughal.avif",
      description:
        "Viral social media content strategy celebrating Mughal history and culture through engaging storytelling",
      results: [
        "1M+ followers growth",
        "85% engagement rate",
        "Featured in major publications",
      ],
    },
    {
      title: "Undekhi",
      client: "SonyLIV",
      category: "Launch Campaign",
      image: "/images/undekhi.avif",
      description:
        "Multi-platform marketing campaign for crime thriller series Undekhi focusing on suspense and intrigue",
      results: ["10M+ reach", "3M+ streams", "Trending #1 on launch"],
    },
    {
      title: "Hack Crimes Online",
      client: "Cyber Security Awareness",
      category: "Educational Campaign",
      image: "/images/crime.jpg",
      description:
        "Digital awareness campaign about cyber security and online crimes prevention",
      results: [
        "2M+ video views",
        "100K+ app downloads",
        "30% rise in awareness",
      ],
    },
  ];

  return (
    <>
      <div className="bg-black">
        {/* Hero Section */}
        <h2 className="text-center text-5xl font-bold text-white py-10">Our Impact</h2>
        {/* Projects Swiper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="py-4">
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="relative h-72 overflow-hidden border-white">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="object-cover border-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 border-2">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-semibold">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 transform transition-transform duration-500 ">
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-purple-600 font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <h3 className="text-lg text-gray-700 mb-3">
                      {project.client}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2 text-gray-900">
                        Key Results:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {project.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="hover:text-purple-600 transition-colors duration-300">
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Work;
