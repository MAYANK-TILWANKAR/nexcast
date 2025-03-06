import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-400">Comprehensive solutions to accelerate your influencer journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Media Kit Creation Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-[#AFFE14] transition-all duration-300">
            <div className="bg-[#AFFE14] rounded-xl p-3 w-12 h-12 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Media Kit Creation</h3>
            <p className="text-gray-400 mb-4">FREE for First 10 Influencers</p>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Cover Page Design</li>
              <li>✓ About Me Section</li>
              <li>✓ Engagement Analytics</li>
              <li>✓ Past Collaborations</li>
              <li>✓ Services Overview</li>
              <li>✓ Contact Information</li>
            </ul>
          </div>

          {/* Brand Deals Outreach Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-[#AFFE14] transition-all duration-300">
            <div className="bg-[#AFFE14] rounded-xl p-3 w-12 h-12 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Brand Deals Outreach</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ 100 Monthly Outreach Emails</li>
              <li>✓ Custom Pitch Strategy</li>
              <li>✓ Tracking System</li>
              <li>✓ Automated Follow-ups</li>
              <li>✓ Monthly Reports</li>
            </ul>
          </div>

          {/* PR + Verification Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-[#AFFE14] transition-all duration-300">
            <div className="bg-[#AFFE14] rounded-xl p-3 w-12 h-12 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">PR + Verification</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ 5 PR Articles</li>
              <li>✓ Content Writing</li>
              <li>✓ Google News Indexing</li>
              <li>✓ Verification Support</li>
            </ul>
          </div>

          {/* UGC Portfolio Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-[#AFFE14] transition-all duration-300">
            <div className="bg-[#AFFE14] rounded-xl p-3 w-12 h-12 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">UGC Portfolio</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ 10 UGC Videos</li>
              <li>✓ Script Writing</li>
              <li>✓ Video Editing</li>
              <li>✓ Brand Pitching</li>
            </ul>
          </div>

          {/* Growth Package Card - Featured */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[#AFFE14]/20 to-purple-900/20 backdrop-blur-lg rounded-2xl p-8 border border-[#AFFE14] hover:border-white/20 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Monthly Influencer Growth Package</h3>
              <p className="text-2xl font-bold text-[#AFFE14]">₹25,000/month</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3 text-gray-300">
                <h4 className="text-white font-semibold mb-2">Brand Outreach</h4>
                <p>✓ 40 Monthly Outreach Campaigns</p>
                <p>✓ Personalized Strategy</p>
              </div>
              <div className="space-y-3 text-gray-300">
                <h4 className="text-white font-semibold mb-2">Content & PR</h4>
                <p>✓ Custom Media Kit</p>
                <p>✓ PR Articles</p>
                <p>✓ UGC Portfolio</p>
              </div>
              <div className="space-y-3 text-gray-300">
                <h4 className="text-white font-semibold mb-2">Growth Support</h4>
                <p>✓ Verification Consultation</p>
                <p>✓ Monthly Strategy Call</p>
                <p>✓ Performance Reports</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link href="/components/Contact" className="inline-block bg-[#AFFE14] text-black font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
