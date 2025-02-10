import React from "react";
import Navbar from "./components/subC/Navbar";

const contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-yellow-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-600 mb-2">
                  Number
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-purple-600 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-600 mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-yellow-600 mb-2">
                Who Are You?
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition">
                <option value="">Select...</option>
                <option value="client">Client</option>
                <option value="partner">Partner</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-pink-600 mb-2">
                Budget
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition">
                <option value="">Select Budget Range...</option>
                <option value="under25k">Under ₹25,000</option>
                <option value="25to50k">₹25,000 - ₹50,000</option>
                <option value="50to1lakh">₹50,000 - ₹1,00,000</option>
                <option value="above1lakh">Above ₹1,00,000</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
