import React, { useEffect, useRef } from "react";

import Navbar from "./Navbar";

import gsap from "gsap";

const Landing = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
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
      textRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      }
    );
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col relative overflow-hidden border-[10px] border-white" style={{ backgroundImage: "url('/images/homebg4.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />

        {/* Main Section */}
        <main className="px-4 md:px-14 flex-grow flex flex-col justify-center md:justify-end relative">
          <div ref={imageRef} className="hidden md:block relative md:absolute right-0 md:right-[15%] top-0 md:top-[62%] transform md:-translate-y-1/2 w-full md:w-auto flex justify-center md:block mt-8 md:mt-0">
            <video
              src="/images/home.mp4"
              alt="Nexcast"
              width={450}
              height={450}
              autoPlay
              muted
              loop
              playsInline
              className="w-[200px] sm:w-[250px] md:w-[450px] object-cover mix-blend-multiply"
            />
          </div>
          
          <div className="hidden md:block absolute bg-[#9FE612] rotate-[-36.2deg] h-80 top-[82%] w-[7rem] right-[41%] transform -translate-y-1/2" />
          <div className="hidden md:block absolute bg-[#ffffff] rotate-[-35.3deg] h-72 top-[80%] w-[19px] right-[39.5%] transform -translate-y-1/2" />

          <div ref={textRef} className="flex justify-center items-center mb-10 sm:mb-20 md:mb-32 mt-8 md:mt-auto">
            <h1 className="text-5xl xs:text-3xl sm:text-4xl md:text-7xl font-bold mb-1 md:mb-6 uppercase text-[#000000] font-[masiku] text-center">
              Nex<span className="bg-[#AFFE14] border-2 md:border-4 border-[#000000] rounded-lg md:rounded-xl text-[#010101] px-1 md:px-2 mx-1 md:mx-2 hover:scale-110 transition-transform">cast</span>
            </h1>
          </div>

          <div className="mb-14">
            <h2 className="text-gray-950 text-base sm:text-lg md:text-lg mb-4 uppercase font-bold animate-fadeIn">
              Creative content marketing solutions{" "}
            </h2>
            <div className="max-w-3xl">
            <h2 className="text-gray-900 text-xl sm:text-2xl md:text-[43px] uppercase font-bold leading-tight tracking-[-2%] mb-2 ">
            Helping Influencers Get Their</h2>
            <h2 className="text-gray-900 text-xl sm:text-2xl md:text-[43px] uppercase font-bold leading-tight tracking-[-2%]">
            First Brand Deal & Grow Faster</h2>
           </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Landing;
