import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ChooseUs = () => {
  const headingRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate features with stagger
    gsap.fromTo(
      featuresRef.current.children,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-[#240141] min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={headingRef} className="lg:w-4/5">
            <h1 className="text-3xl text-white font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#AFFE14]">
              Why Choose Us?
            </h1>
            <h2 className="text-4xl text-white font-extrabold mb-6">
              Your Partner in{" "}
              <span className="text-[#AFFE14] relative">
                Influencer Growth.........
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#AFFE14]"></span>
              </span>
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Choose us for comprehensive influencer growth solutions that drive real results. We deliver innovative strategies backed by industry expertise and dedicated support.
            </p>
          </div>

          <div ref={featuresRef} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <span className="flex-shrink-0 p-4 bg-[#AFFE14] rounded-xl shadow-lg">
                  <svg className="w-8 h-8" fill="#000000" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2zm0-8h2v6h-2z"/>
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    100% Remote Services
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Work with us from anywhere in the world. Our digital-first approach means you get professional support and guidance without geographical limitations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <span className="flex-shrink-0 p-4 bg-[#AFFE14] rounded-xl shadow-lg">
                  <svg className="w-8 h-8" fill="#000000" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Guaranteed Instagram Verification
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We specialize in securing the coveted blue tick through legitimate PR strategies and proven verification processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-6">
                <span className="flex-shrink-0 p-4 bg-[#AFFE14] rounded-xl shadow-lg">
                  <svg className="w-8 h-8" fill="#000000" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Dedicated Growth Experts
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Work directly with experienced social media strategists who understand the influencer landscape and provide personalized guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
