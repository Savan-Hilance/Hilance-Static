import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LuMonitorStop } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import mobiledevelopment from "../../assets/images/mobile-development_7075373.png";
import websitedevelopment from "../../assets/images/website_13417381.png";

const serviceData = [
  {
    id: 1,
    title: "UI/UX Designing",
    description:
      "Crafting engaging and user-friendly designs that elevate user experience across mobile, web, and desktop platforms.",
    route: "/uiuxdesigning",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Developing high-performance mobile applications for iOS and Android to meet the needs of modern businesses.",
    route: "/mobiledevelopment",
  },
  {
    id: 3,
    title: "Website Development",
    description:
      "Building responsive, functional, and visually appealing websites tailored to your brand and goals.",
    route: "/websitedevelopment",
  },
  {
    id: 2,
    title: "Desktop Application Development",
    description:
      "Delivering robust desktop applications designed to enhance productivity and streamline operations.",
    route: "/mobiledevelopment",
  },
  {
    id: 3,
    title: "Custom AI Applications ",
    description:
      "Leveraging artificial intelligence to create smart applications that automate tasks, improve decision-making, and drive innovation.",
    route: "/websitedevelopment",
  },
];

const ServicesCards: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredServiceId, setHoveredServiceId] = useState<number | null>(null);

  return (
    <div className="px-4 py-7 md:px-16 lg:px-24 xl:px-40 2xl:px-60">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9 xl:gap-12">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="shadow-md rounded-lg p-6 transition-all bg-white hover:bg-bglburegistrationbanner hover:text-white mt-6"
            onMouseEnter={() => setHoveredServiceId(service.id)}
            onMouseLeave={() => setHoveredServiceId(null)}
          >
            <div className="flex justify-center -mt-16">
              <div
                className={`p-2 rounded-full ${
                  hoveredServiceId === service.id
                    ? "bg-white"
                    : "bg-bglburegistrationbanner"
                }`}
              >
                <div
                  style={{
                    border: "2px dotted",
                    borderRadius: "100%",
                    padding: "12px",
                    color:
                      hoveredServiceId === service.id ? "#5054A4" : "white",
                    borderColor:
                      hoveredServiceId === service.id ? "#5054A4" : "white",
                  }}
                >
                  {service.id === 1 && (
                    <LuMonitorStop
                      size={67}
                      color={
                        hoveredServiceId === service.id ? "#5054A4" : "white"
                      }
                    />
                  )}
                  {service.id === 2 && (
                    <div
                      style={{
                        width: "67px",
                        height: "67px",
                        backgroundImage: `url(${mobiledevelopment})`,
                        backgroundSize: "cover",
                        filter:
                          hoveredServiceId === service.id
                            ? "brightness(0) saturate(100%) invert(38%) sepia(51%) saturate(552%) hue-rotate(196deg) brightness(100%) contrast(91%)"
                            : "none",
                        transition: "filter 0.3s ease",
                      }}
                    ></div>
                  )}
                  {service.id === 3 && (
                    <div
                      style={{
                        width: "67px",
                        height: "67px",
                        backgroundImage: `url(${websitedevelopment})`,
                        backgroundSize: "cover",
                        filter:
                          hoveredServiceId === service.id
                            ? "brightness(0) saturate(100%) invert(38%) sepia(51%) saturate(552%) hue-rotate(196deg) brightness(100%) contrast(91%)"
                            : "none",
                        transition: "filter 0.3s ease",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
            <h2 className="text-lg md:text-xl xl:text-2xl text-center font-semibold mb-4 xl:mt-7">
              {service.title}
            </h2>
            <p className="mb-5 px-2 text-sm xl:text-lg">
              {service.description}
            </p>
            <div
              className="flex items-center text-sm xl:text-md font-semibold cursor-pointer transition-all"
              onClick={() => {
                navigate(service.route);
                window.scrollTo(0, 0);
              }}
            >
              Read More
              <ArrowForwardIcon className="ml-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
