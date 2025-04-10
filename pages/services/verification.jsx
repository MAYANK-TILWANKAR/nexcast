import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Verification = () => {
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
              PR + Verification Setup
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
                  <span className="text-white font-semibold">PR + Verification</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="lg:max-w-[1300px] mx-auto px-4 py-20 ">
          <div className="flex flex-col lg:flex-row items-center gap-32 mt-10 ">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white font-[&apos;masiku&apos;]">
                Get Featured & <br className="hidden lg:block" />
                <span className="text-white font-[&apos;masiku&apos;]">Verified</span> Today
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed max-w-2xl lg:max-w-none mx-auto">
                Boost your credibility and authority with press features on verified websites and get Instagram verification. Our comprehensive service handles everything from article writing to verification submission.
              </p>
            </div>
            <div className="lg:w-1/2 ">
              <div className="relative">
                <div className="absolute "></div>
                <Image
                  src="/images/media-kit.png"
                  alt="Verification Badge"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover relative z-1"
                />
              </div>
            </div>
          </div>

          <div className="text-left mb-20 pt-20">
            <h2 className="text-4xl font-bold text-white">What&apos;s Included</h2>
            <div className="h-1 w-32 bg-blue-600 mx-left mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">PR Articles</h3>
              <p className="text-gray-600 leading-relaxed">
                Get featured in 5 high-quality articles on verified websites across India and international platforms. All articles are professionally written and optimized for Google News indexing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Instagram Verification</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete Instagram verification submission service including preparation of all required documentation and application handling for the coveted blue badge.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-gray-50 p-12 border-t-4 border-l-4 border-r-4 border-b-4 rounded-3xl border-blue-800">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our PR + Verification Service</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Getting verified on Instagram and building media presence are crucial steps in establishing your authority as an influencer. Our service combines both aspects to maximize your chances of verification while building a strong online presence through legitimate press coverage. We handle everything from writing compelling articles to preparing your verification documentation, making the process seamless and professional.
            </p>
          </div>

          <div className="mt-20 text-center bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Apply for PR + Verification Setup</h2>
            <p className="text-xl mb-8 text-gray-700">
              Ready to boost your credibility and get verified? Fill out the form below to get started with your PR and verification journey.
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="socialHandle"
                    value={formData.socialHandle}
                    onChange={handleChange}
                    placeholder="Instagram Handle"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your content and achievements"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
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

export default Verification;
