import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20">
          <h2 className="text-5xl font-bold text-white mb-2 text-center">Let&apos;s Create Together</h2>
          <p className="text-gray-400 text-center mb-12">Tell us about your project and Let&apos;s start something amazing</p>
          
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="Enter 10 digit number"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide">
                  Business Email
                </label>
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="you@company.com"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide">
                  Website URL
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide">
                  Industry
                </label>
                <input
                  type="text"
                  placeholder="e.g. Technology, Healthcare"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide">
                How did you hear about us?
              </label>
              <select className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white">
                <option value="" className="bg-gray-900">Select...</option>
                <option value="search" className="bg-gray-900">Search Engine</option>
                <option value="social" className="bg-gray-900">Social Media</option>
                <option value="referral" className="bg-gray-900">Referral</option>
                <option value="advertisement" className="bg-gray-900">Advertisement</option>
                <option value="other" className="bg-gray-900">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#AFFE14] mb-2 tracking-wide">
                Monthly Marketing Budget
              </label>
              <select className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#AFFE14] focus:border-transparent transition-all duration-300 text-white">
                <option value="" className="bg-gray-900">Select Budget Range...</option>
                <option value="under25k" className="bg-gray-900">Under ₹25,000</option>
                <option value="25to50k" className="bg-gray-900">₹25,000 - ₹50,000</option>
                <option value="50to1lakh" className="bg-gray-900">₹50,000 - ₹1,00,000</option>
                <option value="above1lakh" className="bg-gray-900">Above ₹1,00,000</option>
              </select>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="px-12 py-4 bg-[#AFFE14] text-black font-bold rounded-xl hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#AFFE14] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">
                Let&apos;s Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
