import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UGCPortfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialHandle: "",
    phone: "",
    niche: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black">
        <div className="bg-cover h-[200px] lg:h-[450px] mt-10 lg:mt-0 flex items-center bg-center object-cover justify-center flex-col relative"
          style={{ backgroundImage: "url('/images/media-kit-creation.png')" }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-10 ">
            <h3 className="text-3xl text-center lg:text-5xl text-white relative z-0 mx-auto font-bold font-lora tracking-wider">
              UGC Portfolio Setup
            </h3>
            <nav className="bg-gray-200/20 rounded-full px-6 mt-4 z-0 py-2">
              <ol className="flex text-center justify-center">
                <li>
                  <Link href="/" className="text-white">Home</Link>
                </li>
                <li>
                  <span className="mx-2 text-white font-semibold">&gt;</span>
                </li>
                <li>
                  <span className="text-white font-semibold">UGC Portfolio</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="lg:max-w-[1300px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-32 mt-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white font-[&apos;masiku&apos;]">
                Professional <br className="hidden lg:block" />
                <span className="text-white font-[&apos;masiku&apos;]">UGC</span> Creation
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed max-w-2xl lg:max-w-none mx-auto">
                Create professional brand content without posting on your personal profile. Our UGC portfolio setup helps you break into the lucrative world of content creation for brands, with everything you need to start landing clients.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute"></div>
                <Image
                  src="/images/media-kit.png"
                  alt="UGC Portfolio Example"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover relative z-1"
                />
              </div>
            </div>
          </div>

          <div className="text-left mb-20 pt-20">
            <h2 className="text-4xl font-bold text-white">What&apos;s Included</h2>
            <div className="h-1 w-32 bg-[#AFFE14] mx-left mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            <div className="bg-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#AFFE14]">
              <div className="bg-[#AFFE14]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#AFFE14]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">10 UGC Videos (Reels Style)</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional creation of 10 high-quality, engaging video content pieces in the popular Reels format that brands are looking for.
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#AFFE14]">
              <div className="bg-[#AFFE14]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#AFFE14]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Product Unboxing + Review Scripts</h3>
              <p className="text-gray-300 leading-relaxed">
                Professionally written scripts for product unboxings and reviews that highlight key features while maintaining authenticity.
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#AFFE14]">
              <div className="bg-[#AFFE14]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#AFFE14]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Video Editing + Delivery</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional editing of your content including music, transitions, and effects, delivered in formats optimized for each platform.
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#AFFE14]">
              <div className="bg-[#AFFE14]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#AFFE14]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Pitching UGC Services</h3>
              <p className="text-gray-300 leading-relaxed">
                Learn how to effectively pitch your UGC services to brands, including templates and strategies for securing ongoing partnerships.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-black p-12 border-2 rounded-3xl border-[#AFFE14]">
            <h2 className="text-3xl font-bold mb-6 text-white">Start Your UGC Journey Today</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Break into the world of professional content creation with our comprehensive UGC portfolio setup. Whether you&apos;re an established influencer looking to diversify your income or just starting out, our service provides everything you need to start creating and selling content to brands.
            </p>
          </div>

          <div className="mt-20 text-center bg-black p-12 rounded-2xl border-2 border-[#AFFE14]">
            <h2 className="text-3xl font-bold mb-6 text-white">Apply Now</h2>
            <p className="text-xl mb-8 text-gray-300">
              Ready to start your UGC journey? Fill out the form below and we&apos;ll get back to you within 24 hours!
            </p>

            <form onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-[#AFFE14] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#AFFE14]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-[#AFFE14] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#AFFE14]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="socialHandle"
                    value={formData.socialHandle}
                    onChange={handleChange}
                    placeholder="Social Media Handle"
                    className="w-full px-4 py-3 rounded-lg border border-[#AFFE14] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#AFFE14]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-[#AFFE14] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#AFFE14]"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    placeholder="Your Content Niche (Beauty, Fitness, Travel, etc.)"
                    className="w-full px-4 py-3 rounded-lg border border-[#AFFE14] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#AFFE14]"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your content creation experience"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-[#AFFE14] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#AFFE14]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 bg-[#AFFE14] text-black px-8 py-3 rounded-lg hover:bg-[#8FDE04] transition-colors duration-300 font-bold"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UGCPortfolio;
