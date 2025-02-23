import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Ourresults = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate title section
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate cards with stagger
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className="bg-[#000000] text-white py-24 pt-16 h-screen ">
      <div className="lg:max-w-[1300px] mx-auto px-10 border-4 border-[#AFFE14] rounded-3xl   ">
        <div className="grid gap-8 max-w-[1300px]  mx-auto lg:max-w-[1300px] py-14 px-12  ">
          <div ref={titleRef} className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase mb-4 md:mb-6">
              Our Results
            </h2>
            <div className="h-1 w-20 bg-[#AFFE14] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-lg">
              For our clients, we have helped them gain traction on their channels and
              get conversions for their business.
            </p>
          </div>

          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div ref={el => cardsRef.current[0] = el} className="bg-[#3a0268] p-6 md:p-8 rounded-2xl border-2 border-[#ffffff] ">
              <div className="text-center">
                <h3 className="text-teal-400 text-3xl md:text-4xl font-bold mb-4">
                  <CountUp end={120} suffix="M+" enableScrollSpy scrollSpyOnce />
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Total Views on Social Media
                </p>
              </div>
            </div>
            
            <div ref={el => cardsRef.current[1] = el} className="bg-[#3a0268] p-6 md:p-8 rounded-2xl border-2 border-[#ffffff] ">
              <div className="text-center">
                <h3 className="text-red-400 text-3xl md:text-4xl font-bold mb-4">
                  <CountUp end={1000} prefix=">" enableScrollSpy scrollSpyOnce />
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Paid Search Campaigns
                </p>
              </div>
            </div>
            
            <div ref={el => cardsRef.current[2] = el} className="bg-[#3a0268] p-6 md:p-8 rounded-2xl border-2 border-[#ffffff] ">
              <div className="text-center">
                <h3 className="text-green-400 text-3xl md:text-4xl font-bold mb-4">
                  <CountUp end={25} suffix="+" enableScrollSpy scrollSpyOnce />
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  GEOs Covered
                </p>
              </div>
            </div>
            
            <div ref={el => cardsRef.current[3] = el} className="bg-[#3a0268] p-6 md:p-8 rounded-2xl border-2 border-[#ffffff]">
              <div className="text-center">
                <h3 className="text-purple-400 text-3xl md:text-4xl font-bold mb-4">
                  <CountUp end={15.5} suffix="M" decimals={1} enableScrollSpy scrollSpyOnce />
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Client Engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourresults;
