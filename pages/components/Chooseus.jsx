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
    <section>
      <div
        className="bg-fixed bg-center h-[100vh] bg-[#9FE612] "
        style={{
          backgroundSize: "cover",
        }}>
        <div className="w-full h-full pt-10 ">
          <div className="lg:max-w-[1300px] px-6 py-10 sm:px-6 lg:px-8 lg:py-32 mx-auto ">
            <div className="grid md:grid-cols-2 gap-12">
              <div ref={headingRef} className="lg:w-3/4">
                <h1 className="text-3xl text-black italic font-bold mb-2">
                  Why choose us?
                </h1>
                <h2 className="text-3xl text-gray-900 font-extrabold lg:text-4xl">
                  Your Partner in{" "}
                  <span className="text-[#fbfbfb] underline">
                    Influencer Growth
                  </span>
                </h2>
                <p className="mt-3 text-gray-800">
                  Choose us for comprehensive influencer growth solutions that drive real results. We deliver innovative strategies backed by industry expertise and dedicated support.
                </p>
              </div>

              <div ref={featuresRef} className="space-y-6 lg:space-y-10">
                <div className="flex">
                  <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[55px] rounded-full border border-gray-200 bg-white text-gray-800">
                    <svg className="w-8 h-8" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2zm0-8h2v6h-2z"/>
                    </svg>
                  </span>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      100% Remote Services
                    </h3>
                    <p className="mt-1 text-gray-700">
                      Work with us from anywhere in the world. Our digital-first approach means you get professional support and guidance without geographical limitations, all while maintaining peak efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[55px] rounded-full border border-gray-200 bg-white text-gray-800">
                    <svg className="w-8 h-8" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </span>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      Guaranteed Instagram Verification
                    </h3>
                    <p className="mt-1 text-gray-700">
                      We specialize in securing the coveted blue tick for our clients through legitimate PR strategies and proven verification processes. Our track record speaks for itself.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <span className="flex-shrink-0 inline-flex justify-center items-center shadow-md size-[55px] rounded-full border border-gray-200 bg-white text-gray-800">
                    <svg className="w-8 h-8" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </span>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      Dedicated Growth Experts
                    </h3>
                    <p className="mt-1 text-gray-700">
                      Work directly with experienced social media strategists who understand the influencer landscape. Our experts provide personalized guidance to accelerate your growth and success.
                    </p>
                  </div>
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
