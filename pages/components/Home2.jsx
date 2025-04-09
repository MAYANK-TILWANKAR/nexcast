import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import gsap from "gsap";

const Landing = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        x: -1000,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        x: 1000,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      }
    );

    gsap.fromTo(
      heading1Ref.current,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
      }
    );

    gsap.fromTo(
      heading2Ref.current,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col relative border-[10px] border-white" style={{ backgroundImage: "url('/images/homebg4.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />

        {/* Main Section */}
        <main className="px-4 md:px-14 flex-grow flex flex-col justify-center md:justify-end relative">
          
          <div ref={imageRef} className="relative md:absolute right-0 md:right-[18%] top-0 md:top-[62%] transform md:-translate-y-1/2 w-full md:w-auto flex justify-center mt-4 sm:mt-8 md:mt-10">
            <Image
              src="/images/home2.png"
              alt="Nexcast"
              width={450}
              height={450}
              className="w-[180px] sm:w-[200px] md:w-[380px] object-cover"
            />
          </div>

          <div ref={textRef} className="flex justify-center items-center mb-6 sm:mb-12 md:mb-32 mt-4 sm:mt-6 md:mt-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-1 md:mb-6 uppercase text-[#000000] font-[masiku] text-center">
              Nex<span className="bg-[#AFFE14] border-2 md:border-2 border-[#000000] rounded-lg md:rounded-xl text-[#000000] px-1 md:px-2 mx-1 md:mx-2 hover:scale-110 transition-transform">cast</span>
            </h1>
          </div>

          <div className="mb-8 sm:mb-10 md:mb-14">
            <h2 className="text-gray-950 text-sm sm:text-base md:text-lg mb-2 sm:mb-4 uppercase font-bold animate-fadeIn">
              Creative content marketing solutions{" "}
            </h2>
            <div className="max-w-3xl">
              <h2 ref={heading1Ref} className="text-gray-900 text-lg sm:text-xl md:text-[43px] uppercase font-bold leading-tight tracking-[-2%] mb-1 sm:mb-2">
                Helping Influencers Get Their
              </h2>
              <h2 ref={heading2Ref} className="text-gray-900 text-lg sm:text-xl md:text-[43px] uppercase font-bold leading-tight tracking-[-2%]">
                First Brand Deal & Grow Faster
              </h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Landing;
