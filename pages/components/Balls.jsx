import React from "react";
import Ballpit from "./Bg";
import Link from "next/link";

const Balls = () => {
  return (
    <div>
      <section className="bg-[#1a1a1a] h-screen  text-white overflow-hidden relative overflow-x-hidden ">
        <div className=" absolute top-0 left-0 right-0 w-full h-full ">
          <Ballpit count={100} gravity={1} friction={0.8} wallBounce={1} />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 relative z-10  ">
          <div className="text-center mt-20">
            <h2 className="text-6xl md:text-8xl font-semibold mb-8">
              Express <span className="italic">who</span>
              <br />
              <span className="text-[#FF6B6B]">you are!</span>
            </h2>
            <Link href="/components/Contact">
              <button className="relative overflow-hidden group px-8 py-3 rounded-full text-lg font-semibold">
                <span className="absolute inset-0 bg-[#AFFE14] transform transition-transform duration-300 group-hover:scale-x-0"></span>
                <span className="absolute inset-0 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                <span className="relative text-black group-hover:text-[#1a1a1a] transition-colors duration-300">
                  Contact Us
                </span>
                <span className="absolute inset-0 border-2 border-[#AFFE14] rounded-full transform scale-105 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Balls;
