import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { FaRegCheckCircle } from "react-icons/fa";
import won from "../../assets/svg/won.svg";
import project from "../../assets/svg/project.svg";
import clients from "../../assets/svg/clients.svg";
import partner from "../../assets/svg/partner.svg";
import aboutUs from "../../assets/images/aboutUs.jpg";
import work1 from "../../assets/images/work1.jpg";
import work2 from "../../assets/images/work2.jpg";
import work3 from "../../assets/images/work3.jpg";
import work4 from "../../assets/images/work4.jpg";
import Contact from "../../components/contact";
import { Divider } from "@mui/material";

const Abouting = () => {
  const Followers = [
    {
      icon: <img src={project} alt="Not Found" className="w-9 md:w-20" />,
      rate: "426k",
      type: "Completed Projects",
    },
    {
      icon: <img src={clients} alt="Not Found" className="w-9 md:w-20" />,
      rate: "1425k",
      type: "Happy Clients",
    },
    {
      icon: <img src={partner} alt="Not Found" className="w-9 md:w-20" />,
      rate: "750+",
      type: "Business Partners",
    },
    {
      icon: <img src={won} alt="Not Found" className="w-9 md:w-16" />,
      rate: "884k",
      type: "Awards Won",
    },
  ];

  return (
    <div>
      <div
        className="flex items-center h-[28rem] w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${aboutUs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-40 md:space-y-2">
          <p className="text-white text-2xl md:text-3xl font-bold py-1">
            ABOUT US
          </p>
          <p className="text-white font-normal text-sm md:text-[17px] py-3">
            Hillance is a UAE-based leader in mobile and web app development,
            specializing in custom, high-quality solutions that drive
            productivity and growth. Our expert team delivers innovative,
            user-centered applications to support business success. We empower
            our clients to thrive in the digital age.
          </p>
          <p className="text-white font-normal text-sm md:text-[17 px]">
            Looking for a specialized application, captivating UI/UX design, or
            a comprehensive digital strategy? Hilance is dedicated to delivering
            results-driven solutions crafted to meet your unique needs. Let’s
            connect to discuss how we can help your business succeed.
          </p>
        </div>
      </div>

      <Contact />

      <div className="flex flex-col md:flex-row justify-evenly px-2 md:px-2 lg:px-2 xl:px-20 mt-14">
        <div className="flex space-x-3 md:space-y-8 space-y-8 lg:space-y-14 xl:space-y-20">
          <div className="space-y-6">
            <div>
              <img
                className="w-full md:w-40 lg:w-56 xl:w-72 h-64 md:h-72 lg:h-[22rem] xl:h-[30rem]"
                src={work1}
                alt="missing"
              ></img>
            </div>
            <div className="bg-bglburegistrationbanner xl:px-3 lg:px-3 md:px-1 px-0 flex justify-center items-center space-x-1 md:space-x-2 py-2 rounded-full text-white text-start">
              <div>
                <FaRegCheckCircle className="xl:text-4xl lg:text-3xl md:text-2xl" />
              </div>
              <div>
                <p className="xl:text-2xl lg:text-2xl md:text-lg text-sm font-bold">
                  1283k+
                </p>
                <p className="md:text-xs xl:text-base lg:text-base text-sm">
                  Complete Project
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <img
                className="w-full xl:w-60 lg:w-48 md:w-36 h-36 md:h-36 lg:h-48 xl:h-60"
                src={work2}
                alt="missing"
              ></img>
            </div>
            <div>
              <img
                className="w-full xl:w-60 lg:w-48 md:w-36 h-36 md:h-36 lg:h-48 xl:h-60"
                src={work3}
                alt="missing"
              ></img>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 w-full md:w-[23rem] lg:w-[28rem] xl:w-[31rem]">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            Driving Success Through Digital Innovation
          </h1>
          <p className="text-[#605E5E] leading-7 text-base">
            At Hilance, we empower businesses with digital solutions that work.
            Our team delivers impactful applications, intuitive designs, and
            strategic guidance tailored to your needs. Partner with us to unlock
            growth and stay ahead in a competitive market.
          </p>
          <div className="mt-3 flex items-center">
            <h1 className="text-base text-[#1a1a1a]">
              <span className="text-black font-bold">
                Custom-Built Applications:{" "}
              </span>
              <span className="ml-2 text-base text-[#605E5E]">
                Tailored solutions crafted to meet the unique demands of your
                business
              </span>
            </h1>
          </div>
          <div className="mt-2 flex items-center">
            <h1 className="text-base text-[#1a1a1a]">
              <span className="text-black font-bold">
                Intuitive UI/UX Design :{" "}
              </span>
              <span className="ml-2 text-base text-[#605E5E]">
                User-friendly interfaces that enhance engagement and
                satisfaction.
              </span>
            </h1>
          </div>
          <div className="mt-2 flex items-center">
            <h1 className="text-base text-[#1a1a1a]">
              <span className="text-black font-bold">
                Scalable Digital Strategy :{" "}
              </span>
              <span className="ml-2 text-base text-[#605E5E]">
                Growth-focused strategies designed to evolve with your business.
              </span>
            </h1>
          </div>
          <div className="mt-2 flex items-center">
            <h1 className="text-base text-[#1a1a1a]">
              <span className="text-black font-bold">
                Reliable IT Solutions :{" "}
              </span>
              <span className="ml-2 text-base text-[#605E5E]">
                Robust technology infrastructure that ensures seamless
                operations.
              </span>
            </h1>
          </div>
          <div className="mt-2 flex items-center">
            <h1 className="text-base text-[#1a1a1a]">
              <span className="text-black font-bold">
                Data-Driven Insights :
              </span>
              <span className="ml-2 text-base text-[#605E5E]">
                Strategic guidance backed by analytics to maximize impact.
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className="flex items-center bg-[#605E5E14] my-16 flex-col md:flex-row"
        style={{ backgroundColor: "rgb(240, 240, 240)" }}
      >
        <div className="w-full md:w-1/2 px-4 md:px-16 md:pl-5 lg:pl-16 xl:pl-56">
          <p className="text-bglburegistrationbanner tracking-widest">
            What We Do
          </p>
          <p className="font-semibold text-2xl md:text-3xl py-2 text-[#1A1A1A]">
            Flexible, Results-Driven IT Solutions for Modern Businesses
          </p>
          <p className="text-sm text-[#605E5E] md:text-base mb-3 md:mb-0 md:w-80 lg:w-[26rem] xl:w-[27rem] tracking-widest">
            At Hilance, we deliver adaptable IT solutions tailored to the unique
            needs of each client. Our comprehensive services—from custom
            application development across iOS, web, and desktop platforms to
            engaging UI/UX design and strategic digital consulting—are designed
            to help your business scale, improve productivity, and stay
            competitive. Partner with us to leverage technology that drives
            measurable results and empowers growth.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-96 md:h-[28rem] lg-[32rem] xl:h-[32rem] object-cover"
            src={work4}
            alt="Illustration of IT services"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row pl-12 justify-center md:justify-evenly my-0 md:my-24 px-4 md:px-14">
          {Followers.map((data, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-row items-center space-x-2 mb-4 md:space-x-4">
                <div className="text-xs md:text-base">{data.icon}</div>
                <div className="text-xs md:text-base">
                  <p className="text-bglburegistrationbanner text-lg md:text-2xl font-medium">
                    {data.rate}
                  </p>
                  <p>{data.type}</p>
                </div>
              </div>
              {index < Followers.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  className="hidden md:block"
                  style={{ backgroundColor: "rgb(240, 240, 240)" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Abouting;
