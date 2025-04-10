import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const OurResults = () => {
  return (
    <section className="text-center py-10 md:py-5 px-4 md:px-0 bg-gradient-to-b from-[#240141] to-black">
      {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Our Results
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
        For our clients, we have helped them gain traction on their channels and
        get conversions for their business.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h3 className="text-teal-500 text-3xl md:text-4xl font-semibold">
            <CountUp end={120} suffix="M+" enableScrollSpy scrollSpyOnce />
          </h3>
          <p className="text-black text-xs md:text-sm mt-4 md:mt-6 text-left md:ml-16">
            Total Views on Social <br /> Media on all platforms
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-red-500 text-3xl md:text-4xl font-semibold">
            <CountUp end={1000} prefix=">" enableScrollSpy scrollSpyOnce />
          </h3>
          <p className="text-black text-xs md:text-sm mt-4 md:mt-6 text-left md:ml-16">
            Paid Search Campaigns <br /> Launched
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-green-500 text-3xl md:text-4xl font-semibold md:mr-10">
            <CountUp end={25} suffix="+" enableScrollSpy scrollSpyOnce />
          </h3>
          <p className="text-black text-xs md:text-sm mt-4 md:mt-6 text-left md:ml-16">
            GEOs covered in performance marketing
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-purple-500 text-3xl md:text-4xl font-semibold">
            <CountUp
              end={15.5}
              suffix="M"
              decimals={1}
              enableScrollSpy
              scrollSpyOnce
            />
          </h3>
          <p className="text-black text-xs md:text-sm mt-4 md:mt-6 text-left md:ml-16">
            Engagement we provided for our client&apos;s business
          </p>
        </div>
      </div> */}

      <p className="text-gray-50 mt-16 md:mt-24 text-sm md:text-3xl">
        And we&apos;ve spent 3 years doing it with great teams at
      </p>
      <Image
        className="mt-6 md:mt-10 w-full"
        src="/svgs/line1.svg"
        alt="Results"
        width={1000}
        height={1000}
      />
      <div className="max-w-6xl mx-auto mt-6 md:mt-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="py-4">
          {[
            { src: "/images/wingsofcomfort.png", alt: "Wingsofcomfort logo" },
            { src: "/images/applause.png", alt: "Applause logo" },
            { src: "/images/toyota.png", alt: "Toyota logo" },
            { src: "/images/acceptance.png", alt: "Acceptance logo" },
            { src: "/images/dps.jpeg", alt: "DPS logo" },
            { src: "/images/twacha.png", alt: "TVF logo" },
            { src: "/images/sonyliv.png", alt: "Sony Liv logo" },
          ].map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center w-full p-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={150}
                  className="w-32 md:w-40 h-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Image
        src="/svgs/line1.svg"
        alt="Results"
        width={1000}
        height={1000}
        className="w-full mt-6 md:mt-10"
      />
    </section>
  );
};

export default OurResults;
