import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

const Contactus = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover h-[300px] lg:h-[550px] mt-0 lg:mt-0 flex items-center bg-center object-cover justify-center bg-black flex-col relative border-b-4 border-white"
        style={{
          backgroundImage: "url('/images/contactbanner.png')",
          objectFit: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] "></div>
        <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-10">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl text-white relative z-0 mx-auto font-bold font-lora tracking-wider text-center px-4">
            Contact Us
          </h3>
          <nav className="bg-gray-200/20 backdrop-blur-sm rounded-full px-4 sm:px-6 mt-4 z-0 py-2">
            <ol className="flex text-center justify-center">
              <li>
                <a
                  className="text-white hover:text-[#AFFE14] transition-colors text-sm sm:text-base"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2 text-white font-semibold">&gt;</span>
              </li>
              <li>
                <span className="text-[#AFFE14] font-semibold text-sm sm:text-base">
                  Contact
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="bg-black">
        <div className="lg:max-w-[1300px] mx-auto py-16 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
            <h2 className="text-3xl lg:text-[37px] font-bold text-center lg:text-left bg-gradient-to-r from-white to-[#AFFE14] bg-clip-text text-transparent lg:pl-48 px-4">
              Let&apos;s Create Together 
            </h2>
            <p className="text-gray-100 text-center lg:text-left text-lg lg:pr-24">
              Tell us about your project and let&apos;s start something amazing
            </p>
            <div className="relative h-[400px] lg:h-[600px] w-auto overflow-hidden border-b mx-4 lg:mx-0">
              <video
                src="/images/contactside.mp4"
                alt="Contact Us"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="backdrop-blur-xl rounded-3xl shadow-2xl px-4 lg:px-12 py-8 lg:py-12 border border-white mx-4 lg:mx-0">
              <form className="space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                  <div className="group relative">
                    <input
                      type="text"
                      className="w-full p-3 lg:p-4 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:border-[#AFFE14]/50 backdrop-blur-sm"
                      placeholder="Name"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#AFFE14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  <div className="group relative">
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="Phone Number"
                      className="w-full p-3 lg:p-4 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:border-[#AFFE14]/50 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#AFFE14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                  <div className="group relative">
                    <input
                      type="text"
                      className="w-full p-3 lg:p-4 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:border-[#AFFE14]/50 backdrop-blur-sm"
                      placeholder="Company Name"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#AFFE14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  <div className="group relative">
                    <input
                      type="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      placeholder="Business Email"
                      className="w-full p-3 lg:p-4 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:border-[#AFFE14]/50 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#AFFE14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                  <div className="group relative">
                    <input
                      type="url"
                      placeholder="Website URL"
                      className="w-full p-3 lg:p-4 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:border-[#AFFE14]/50 backdrop-blur-sm"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#AFFE14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  <div className="group relative">
                    <input
                      type="text"
                      placeholder="Industry"
                      className="w-full p-3 lg:p-4 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:border-[#AFFE14]/50 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#AFFE14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="group relative">
                  <select className="w-full p-3 lg:p-4 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white hover:border-[#AFFE14]/50 backdrop-blur-sm appearance-none cursor-pointer">
                    <option value="" className="bg-[#1a1a1a]">
                      How did you hear about us?
                    </option>
                    <option value="search" className="bg-[#1a1a1a]">
                      Search Engine
                    </option>
                    <option value="social" className="bg-[#1a1a1a]">
                      Social Media
                    </option>
                    <option value="referral" className="bg-[#1a1a1a]">
                      Referral
                    </option>
                    <option value="advertisement" className="bg-[#1a1a1a]">
                      Advertisement
                    </option>
                    <option value="other" className="bg-[#1a1a1a]">
                      Other
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#AFFE14]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="group relative">
                  <select className="w-full p-3 lg:p-4 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white hover:border-[#AFFE14]/50 backdrop-blur-sm appearance-none cursor-pointer">
                    <option value="" className="bg-[#1a1a1a]">
                      Monthly Marketing Budget
                    </option>
                    <option value="under25k" className="bg-[#1a1a1a]">
                      Under ₹25,000
                    </option>
                    <option value="25to50k" className="bg-[#1a1a1a]">
                      ₹25,000 - ₹50,000
                    </option>
                    <option value="50to1lakh" className="bg-[#1a1a1a]">
                      ₹50,000 - ₹1,00,000
                    </option>
                    <option value="above1lakh" className="bg-[#1a1a1a]">
                      Above ₹1,00,000
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#AFFE14]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-center pt-6 lg:pt-8">
                  <button
                    type="submit"
                    className="group relative px-8 lg:px-12 py-3 lg:py-4 bg-gradient-to-r from-[#AFFE14] to-[#8BFF14] text-black font-bold rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#AFFE14] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#AFFE14]/20 overflow-hidden w-full lg:w-auto"
                  >
                    <span className="relative z-10">
                      Let&apos;s Get Started
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;
