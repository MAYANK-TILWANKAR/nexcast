import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BrandDealsOutreach = () => {
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
              Brand Deals Outreach
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
                  <span className="text-white font-semibold">Brand Deals Outreach</span>
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
                <span className="text-white font-[&apos;masiku&apos;]">Brand Outreach</span> Service
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed max-w-2xl lg:max-w-none mx-auto">
                Let us handle your brand partnerships while you focus on creating amazing content. Our team of outreach specialists will connect you with relevant brands and secure paid collaborations on your behalf.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="/images/media-kit.png"
                  alt="Brand Outreach"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover relative z-1"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-20 pt-20">
            <h2 className="text-4xl font-bold text-white">What&apos;s Included</h2>
            <div className="h-1 w-32 bg-blue-600 mx-auto mt-4"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Our comprehensive brand outreach service includes everything you need to secure more paid collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/20">
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">100 Monthly Outreach Messages</h3>
              <p className="text-gray-300 leading-relaxed">
                We send 100 personalized cold emails and DMs to relevant brands in your niche every month.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/20">
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Custom Pitching Strategy</h3>
              <p className="text-gray-300 leading-relaxed">
                Tailored outreach approach based on your niche, audience, and brand preferences.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/20">
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Tracking & Reporting</h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive tracking sheet and monthly reports showing outreach performance and responses.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-500/20">
              <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Automated Follow-ups</h3>
              <p className="text-gray-300 leading-relaxed">
                Strategic follow-up sequence to maximize response rates and secure more deals.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-gray-50 p-12 border-t-4 border-l-4 border-r-4 border-b-4 rounded-3xl border-blue-800">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Brand Outreach Service?</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Securing brand deals can be time-consuming and challenging. Our experienced team handles everything from identifying potential partners to negotiating deals, allowing you to focus on content creation. With our proven outreach strategies and extensive brand network, we help influencers like you land more paid collaborations and grow their business.
            </p>
          </div>

          <div className="mt-20 text-center bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Get Started with Brand Outreach</h2>
            <p className="text-xl mb-8 text-gray-700">
              Fill out the form below to learn more about our brand outreach service and how we can help you secure more paid collaborations.
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
                  placeholder="Tell us about your content and goals for brand collaborations"
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

export default BrandDealsOutreach;
