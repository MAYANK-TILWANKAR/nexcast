import React from "react";
import Image from "next/image";

const Dservice = (props) => {
  const services = [props.s1, props.s2, props.s3, props.s4, props.s5].filter(
    Boolean
  ); // Filter out any undefined or null values

  return (
    <section className="py-10 sm:py-10 md:py-16">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-3xl sm:text-3xl font-semibold mb-4">
              {props.title}
            </h3>
            <p className="text-gray-900 mb-6">{props.description}</p>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="text-gray-900 bg-gray-100 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-2 lg:mt-0">
            <div className="relative w-full h-0 pb-[60%] sm:pb-[56.25%] bg-gray-400">
              {/* <Image
                src="/images/p3.png"
                alt="Social Media Illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dservice;
