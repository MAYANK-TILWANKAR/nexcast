import React from "react";
import Marquee from "react-fast-marquee";
const banner = () => {
    const promises = [
        {
          title: "Clear Communication and Reporting",
          description: "Regular updates and transparent reporting on campaign performance",
         
        },
        {
          title: "Tailored Strategies", 
          description: "Customized solutions aligned with your business goals",
          
        },
        {
          title: "Guaranteed Views",
          description: "Proven track record of delivering targeted audience reach",
        
        },
        {
          title: "High Production Value",
          description: "Premium quality content that elevates your brand",
        
        },
        {
          title: "Customer Satisfaction", 
          description: "Committed to exceeding client expectations",
  
        },
        {
          title: "Long Term Partnership",
          description: "Building lasting relationships through consistent results",
      
        },
      ];
  return (
    <div>
      <Marquee
        gradient={false}
        speed={40}
        className="bg-[#AFFE14] py-5 mb-2 "
      >
        <div className="flex space-x-16 mx-8">
          {promises.map((promise, index) => (
            <span
              key={index}
              className="text-[#240141] text-lg font-bold whitespace-nowrap"
            >
              {promise.title}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default banner;
