import React from "react";

import Navbar from "./Navbar";

const PitchhmeLanding = () => {

  return (
    <div className="text-white h-screen flex flex-col relative overflow-hidden border-[8px] rounded-[20px] md:rounded-[40px]" style={{ backgroundImage: "url('/images/homebg2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
  
      {/* <div ref={containerRef} className="absolute inset-0" /> */}
      <div className="flex flex-col h-screen relative z-10">
        <Navbar />

        {/* Main Section */}
        <main className="px-4 md:px-14 flex-grow flex flex-col justify-end">
          <div className="flex justify-center mb-16">
            <h1 className="text-4xl sm:text-4xl md:text-7xl font-bold mb-6 uppercase text-[#ffffff]">
              Nex<span className="bg-[#AFFE14] border-2 md:border-4 border-[#000000] rounded-lg md:rounded-xl text-[#010101] px-1 md:px-2 mx-1 md:mx-2 hover:scale-110 transition-transform">cast</span>
            </h1>
          </div>

          <div className="mb-14">
            <div className="text-gray-300 text-base sm:text-lg md:text-lg mb-4 uppercase font-bold animate-fadeIn">
              Creative content marketing solutions{" "}
            </div>
            <h1 className="text-xl sm:text-2xl md:text-[40px] uppercase font-semibold leading-tight tracking-[-2%] mb-6 animate-slideIn">
              Your brand deserves more than just a one-night click!
            </h1>
            <p className="text-sm sm:text-base md:text-base text-gray-100 animate-fadeIn">
              Craft smarter, faster, and measurable marketing strategies{" "}
              <br className="hidden md:inline" /> that bring next-level results
              — truly badhiya.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PitchhmeLanding;
