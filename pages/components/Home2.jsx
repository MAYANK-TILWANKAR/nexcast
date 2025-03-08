import React from "react";

import Navbar from "./Navbar";

const PitchhmeLanding = () => {
  return (
    <div
      className="text-white h-screen flex flex-col relative overflow-hidden border-[8px] rounded-[20px] md:rounded-[40px]"
      style={{
        backgroundImage: "url('/images/homebg4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div ref={containerRef} className="absolute inset-0" /> */}
      <div className="flex flex-col h-screen relative z-10">
        <Navbar />

        {/* Main Section */}
        <main className="px-4 md:px-14 flex-grow flex flex-col justify-end">
          <div className="flex justify-center mb-44  ">
            <h1 className="text-4xl sm:text-4xl md:text-7xl font-bold mb-6 uppercase text-[#000000] font-[masiku]">
              Nex
              <span className="bg-[#AFFE14] border-2 md:border-4 border-[#000000] rounded-lg md:rounded-xl text-[#010101] px-1 md:px-2 mx-1 md:mx-2 hover:scale-110 transition-transform">
                cast
              </span>
            </h1>
          </div>

          <div className="pb-4 ">
            <h2 className="text-gray-950 text-xs sm:text-lg md:text-lg mb-2 uppercase font-bold ">
              Creative content marketing solutions{" "}
            </h2>
            <div className="">
              <h2 className="text-gray-900 text-2xl sm:text-2xl md:text-[43px] uppercase font-bold leading-tight tracking-[-2%] ">
                Helping Influencers Get Their First Brand Deal & Grow Faster
              </h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PitchhmeLanding;
