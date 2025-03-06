import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

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
    <section className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="lg:max-w-[1300px] mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 ">Our Impact</h2>
          <div className="h-1 w-20 bg-[#AFFE14] rounded-full mx-auto"></div>
        </div>

        {/* Projects Swiper */}
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
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
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full transform hover:scale-[1.02] transition-all duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-lg font-bold tracking-wider">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
                      <span className="text-sm text-purple-700 font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 text-gray-900 hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <h3 className="text-xl text-gray-700 mb-4 font-medium">
                      {project.client}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-bold text-xl mb-4 text-gray-900">
                        Key Results
                      </h4>
                      <ul className="space-y-3">
                        {project.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-300">
                            <span className="mr-3">•</span>
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
    </section>
  );
};

export default Work;
