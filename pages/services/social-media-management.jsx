import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SocialMediaManagement = () => {
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
          style={{ backgroundImage: "url('/images/social-media-management.png')" }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-10 ">
            <h3 className="text-3xl text-center lg:text-5xl text-white relative z-0 mx-auto font-bold font-lora tracking-wider">
              Social Media Management
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
                  <span className="text-white font-semibold">Social Media Management</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="lg:max-w-[1300px] mx-auto px-4 py-20 ">
          <div className="flex flex-col lg:flex-row items-center gap-32 mt-10 ">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white font-[&apos;masiku&apos;]">
                Professional <br className="hidden lg:block" />
                <span className="text-white font-[&apos;masiku&apos;]">Social Media</span> Management
              </h2>
              <p className="text-lg text-gray-100 leading-relaxed max-w-2xl lg:max-w-none mx-auto">
                Take your social media presence to the next level with our professional management services. We handle everything from content creation to engagement strategies, helping you grow your audience and increase your influence.
              </p>
              <div className="mt-6 bg-green-100 p-4 rounded-lg border-2 border-green-500 inline-block">
                <p className="text-green-900 font-bold">20% off first month for new clients!</p>
              </div>
            </div>
            <div className="lg:w-1/2 ">
              <div className="relative">
                <div className="absolute "></div>
                <Image
                  src="/images/social-management.png"
                  alt="Social Media Management"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover relative z-1"
                />
              </div>
            </div>
          </div>

          <div className="text-left mb-20 pt-20">
            <h2 className="text-4xl font-bold text-white">Our Services</h2>
            <div className="h-1 w-32 bg-blue-600 mx-left mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Content Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional content creation tailored to your brand voice and target audience, including photos, videos, and engaging captions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Engagement Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Active community management including responding to comments, DMs, and fostering meaningful interactions with your audience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Analytics & Reporting</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed monthly reports on account growth, engagement rates, and content performance with actionable insights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Content Calendar</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic content planning and scheduling to maintain consistent posting and maximize reach across all platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Growth Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Customized growth strategies including hashtag research, competitor analysis, and trending content optimization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Brand Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">
                Assistance in securing and managing brand collaborations, including outreach, negotiation, and campaign execution.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-gray-50 p-12 border-t-4 border-l-4 border-r-4 border-b-4 rounded-3xl border-blue-800">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Social Media Management</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              In today&apos;s digital landscape, maintaining a strong social media presence is crucial for success. Our expert team combines creative content creation with data-driven strategies to grow your following, increase engagement, and establish your brand as an industry leader. We handle the day-to-day management of your social media accounts, allowing you to focus on creating amazing content while we take care of the rest.
            </p>
          </div>

          <div className="mt-20 text-center bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
            <p className="text-xl mb-8 text-gray-700">
              Ready to transform your social media presence? Fill out the form below to get started with our professional management services!
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
                  placeholder="Tell us about your social media goals"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SocialMediaManagement;
