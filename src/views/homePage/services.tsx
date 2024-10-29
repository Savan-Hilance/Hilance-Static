import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LuMonitorStop } from "react-icons/lu";
import { MdMobileScreenShare } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import mobiledevelopment from "../../assets/images/mobile-development_7075373.png";
import websitedevelopment from "../../assets/images/website_13417381.png";

const serviceData = [
  {
    id: 1,
    title: "UI/UX Designing",
    description:
      "Create seamless and visually engaging interfaces that resonate with users. Our UI/UX design team crafts intuitive designs to enhance user experience, ensuring that every interaction with your app or website feels effortless and enjoyable",
    route: "/uiuxdesigning",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "From concept to launch, we specialize in developing powerful, high-performing mobile applications for iOS and Android. Our team ensures that each app we build is optimized for functionality, user experience, and market success.",
    route: "/mobiledevelopment",
  },
  {
    id: 3,
    title: "Website Development",
    description:
      "Build a compelling digital presence with our expert website development services. We create responsive and interactive websites that are not only visually appealing but also deliver a seamless experience across all devices.",
    route: "/websitedevelopment",
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredServiceId, setHoveredServiceId] = useState<number | null>(null);

  return (
    <div>
      <hr />
      <div className="py-4 bg-gray-100 mt-0">
        <div className="text-center mt-6">
          <h6 className="text-bglburegistrationbanner text-md mb-2">
            Our Services
          </h6>
          <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mb-7">
            Empowering Your Success with Trusted IT Solutions
          </h3>
          <p className="text-[#605E5E] xl:text-lg xl:w-[60%] md:w-[80%] w-full m-auto">
            At Hilance, we deliver reliable and innovative IT services designed
            to drive growth and enhance business performance. Explore our
            tailored solutions crafted to support your success in today’s
            digital landscape.
          </p>
        </div>

        <div className="px-4 py-7 md:px-16 lg:px-24 xl:px-40 2xl:px-60">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 xl:gap-12 2xl:gap-20 mt-10">
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
                            hoveredServiceId === service.id
                              ? "#5054A4"
                              : "white"
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
                <h2 className="text-xl xl:text-2xl text-center font-semibold mb-4 xl:mt-7">
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

        <div className="text-center pt-5">
          <button
            className="bg-bglburegistrationbanner text-white py-2 px-5 xl:px-8 rounded-3xl mt-4 transition-all hover:bg-gray-900"
            onClick={() => {
              navigate("/services");
              window.scrollTo(0, 0);
            }}
          >
            View More
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Services;
