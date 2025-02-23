"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutUs = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate image
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate content
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="relative h-[100vh] bg-black text-white py-24  ">
      <div className="lg:max-w-[1300px] mx-auto px-4 mt-10 border-4 border-[#AFFE14] rounded-3xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-32 items-center mb-6 sm:mb-10">
          <div ref={imageRef} className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/aboutus.png"
              alt="About Us"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div ref={contentRef} className="order-1 md:order-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase mb-2 sm:mb-4 ">
              About Nexcast
            </h1>
            <div className="h-1 sm:h-1.5 w-16 sm:w-20 md:w-28 bg-[#AFFE14] rounded-full mx-0 mb-3 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              We are a creative content marketing agency specializing in social media
              content creation and performance marketing. Our expertise lies in
              crafting engaging content and implementing data-driven strategies
              that help brands connect with their target audience, boost
              engagement, and drive measurable results.
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              Our innovative approach and proven track record of success make us
              the ideal partner for brands looking to elevate their digital
              presence and achieve exceptional marketing outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
