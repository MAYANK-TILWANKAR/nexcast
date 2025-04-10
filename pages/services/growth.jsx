import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GrowthPackage = () => {
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
              Monthly Growth Package
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
                  <span className="text-white font-semibold">Growth Package</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="lg:max-w-[1300px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-32 mt-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white font-[&apos;masiku&apos;]">
                All-in-One <br className="hidden lg:block" />
                <span className="text-white font-[&apos;masiku&apos;]">Growth</span> Package
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed max-w-2xl lg:max-w-none mx-auto">
                Accelerate your influencer career with our comprehensive monthly growth package. We handle everything from brand outreach to verification consultation, letting you focus on creating amazing content.
              </p>
              <div className="mt-6 bg-green-100 p-4 rounded-lg border-2 border-green-500 inline-block">
                <p className="text-green-900 font-bold">₹25,000/month - Complete Growth Solution</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute"></div>
                <Image
                  src="/images/media-kit.png"
                  alt="Growth Package"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Brand Outreach</h3>
              <p className="text-gray-600 leading-relaxed">
                10 personalized outreach emails and DMs sent to relevant brands weekly to secure paid collaborations and partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Custom Media Kit</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional media kit design that showcases your brand value, audience demographics, and previous collaborations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">PR Articles</h3>
              <p className="text-gray-600 leading-relaxed">
                Get featured in online publications with Google News indexing to boost your credibility and online presence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">UGC Portfolio</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional UGC portfolio setup to showcase your content creation abilities and attract brand partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Verification Help</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert consultation on Instagram verification process and requirements to increase your chances of getting verified.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Monthly Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed monthly report and strategy call to review progress and adjust growth tactics for optimal results.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-gray-50 p-12 border-t-4 border-l-4 border-r-4 border-b-4 rounded-3xl border-blue-800">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Growth Package</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our comprehensive growth package takes the hassle out of influencer marketing. Instead of managing multiple services separately, you get everything you need to grow and monetize your influence in one solution. We handle the outreach, documentation, and strategy while you focus on what you do best - creating amazing content. With our proven approach, you&apos;ll see increased brand deals, stronger professional presence, and sustainable growth.
            </p>
          </div>

          <div className="mt-20 text-center bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Apply for the Growth Package</h2>
            <p className="text-xl mb-8 text-gray-700">
              Ready to take your influencer career to the next level? Fill out the form below to get started with our complete growth solution.
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
                    placeholder="Social Media Handle"
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
                  placeholder="Tell us about your content and growth goals"
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

export default GrowthPackage;
