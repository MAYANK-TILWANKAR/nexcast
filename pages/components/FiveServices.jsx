import React from "react";
import Image from "next/image";
import styled from "styled-components";

const FiveServices = () => {
  const services = [
    {
      title: "Social Media Management",
      description:
        "Optimize your social presence and engage audiences effectively across platforms.",
      bgColor: "#3b82f6", // Bright blue
      image: "/images/social.png",
    },
    {
      title: "Content Creation", 
      description:
        "Craft tailored content that speaks to your audience and drives engagement.",
      bgColor: "#f97316", // Bright orange
      image: "/images/content.png",
    },
    {
      title: "Graphic Design",
      description:
        "Deliver stunning visuals and creative designs that stand out.",
      bgColor: "#8b5cf6", // Bright purple
      image: "/images/graphic.png",
    },
    {
      title: "Video Production",
      description:
        "Create impactful videos from concept to completion for any purpose.",
      bgColor: "#06b6d4", // Bright cyan
      image: "/images/video.png",
    },
    {
      title: "Meme Marketing",
      description:
        "Tap into trends and create viral meme campaigns that resonate with your audience.",
      bgColor: "#ef4444", // Bright red
      image: "/images/meme.png",
    },
    {
      title: "Local Campaigns",
      description:
        "Develop targeted strategies for specific regions to maximize impact.",
      bgColor: "#eab308", // Bright yellow
      image: "/images/local.png",
    },
  ];

  return (
    <section className="bg-black px-4 md:px-8 py-12">
      <div className="text-center mx-4 md:mx-40">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase mb-4 md:mb-6">
          Expertise You Can Trust
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8 md:mb-5 text-sm md:text-lg mx-auto">
          Delivering exceptional digital solutions across industries
        </p>
        <div className="h-1 w-20 bg-[#AFFE14] rounded-full mb-6 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 max-w-[1300px] mx-auto">
        {services.map((service, index) => (
          <StyledWrapper key={index} bgColor={service.bgColor}>
            <div className="card border-4 border-white">
              <div className="relative w-full h-48 md:h-64 mb-4 md:mb-6 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  priority={index < 2}
                />
              </div>
              <strong className="text-lg md:text-xl lg:text-2xl">{service.title}</strong>
              <div className="card__description text-sm md:text-base lg:text-lg">{service.description}</div>
            </div>
          </StyledWrapper>
        ))}
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    text-align: center;
    background: ${props => props.bgColor};
    padding: 1.5em;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    color: white;
    height: 400px;
    
    @media (min-width: 768px) {
      padding: 2em;
      padding-block: 2.2em;
      height: 500px;
      gap: 1.2em;
    }
  }

  .card__description {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 1.5em;
    border-radius: 8px;
    font-weight: 500;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);

    @media (min-width: 768px) {
      padding: 2em;
    }
  }

  .card > strong {
    display: block;
    font-size: 1.2rem;
    letter-spacing: -0.035em;
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }

  .card:hover .card__description {
    opacity: 1;
    transform: translateY(0);
  }

  @media (hover: none) {
    .card__description {
      opacity: 1;
      transform: translateY(0);
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;

export default FiveServices;
