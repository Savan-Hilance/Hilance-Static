import React from "react";
import studies1 from "../../assets/images/studies1.jpg";
import studie2 from "../../assets/images/studie2.png";
import studies3 from "../../assets/images/studie3.jpg";
import project from "../../assets/svg/project.svg";
import clients from "../../assets/svg/clients.svg";
import partner from "../../assets/svg/partner.svg";
import won from "../../assets/svg/won.svg";
import Contact from "../../components/contact";
import caseStudies from "../../assets/images/caseStudies.jpg";
import case1 from "../../assets/images/case1.jpg";
import case2 from "../../assets/images/case2.jpg";
import case3 from "../../assets/images/case3.png";
import { Divider } from "@mui/material";

const CaseStudies = () => {
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
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${caseStudies})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-44 md:space-y-2">
          <p className="text-white text-3xl md:text-5xl font-bold">
            CASE STUDIES
          </p>
          <h1 className="text-white font-normal text-sm md:text-lg">
            Explore how Hilance has helped businesses achieve their goals
            through innovative digital solutions. Our case studies highlight
            real-world examples of our expertise in mobile app development, web
            design, AI applications, and more, showcasing measurable results and
            client success.
          </h1>
        </div>
      </div>

      <Contact />

      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 lg:space-x-16 mt-20 md:px-4  px-4 lg:px-5">
        <div className="w-full xl:w-[36rem]">
          <img
            className="w-full max-w-md h-80 md:h-[26rem]"
            src={studies1}
            alt="missing"
          ></img>
        </div>
        <div className="px-4 md:pr-16 mt-8 md:mt-0 xl:w-[40rem]">
          <p className="text-2xl font-semibold text-[#1A1A1A] pb-2.5">
            Our Journey
          </p>
          <p className="w-full text-[#605e5e] max-w-lg text-lg md:text-sm xl:text-base lg:text-base leading-9">
            Since our inception, Hilance has been on a mission to redefine
            digital productivity through innovative solutions. Guided by a
            commitment to excellence, we’ve grown from a small team of tech
            enthusiasts to a leading provider of mobile, web, and AI-powered
            applications. Each project has been a stepping stone in our journey,
            allowing us to shape digital experiences, empower businesses, and
            inspire progress. Join us as we continue to push the boundaries of
            technology and deliver impactful solutions worldwide.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-32 mt-20 px-4">
        <div className="w-full xl:w-[40rem] md:w-[30rem]">
          <p className="text-2xl font-semibold text-[#1A1A1A] pb-2">
            Why Choose Hilance?
          </p>
          <p className="text-[#605e5e] text-base leading-relaxed md:text-sm">
            Hillance combines expertise, innovation, and a commitment to
            excellence to deliver results-driven digital solutions. With a focus
            on mobile, web, and AI-powered applications, we empower businesses
            to scale, enhance productivity, and drive success.
          </p>
          <div className="my-2 space-y-4 md:text-sm">
            <div>
              <p>
                <span className="font-bold">Cutting-Edge Expertise: </span>
                <span className="text-[#605e5e]">
                  Leveraging the latest in mobile, web, and AI technology, our
                  team brings innovative solutions that set your business apart
                  from the competition.
                </span>
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">
                  Tailored Solutions for Impact:{" "}
                </span>
                <span className="text-[#605e5e]">
                  Every project is uniquely crafted to meet your specific goals,
                  delivering solutions that drive growth, improve efficiency,
                  and create lasting value.
                </span>
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Comprehensive Partnership: </span>
                <span className="text-[#605e5e]">
                  We’re with you every step of the way—from ideation to
                  implementation—providing guidance, support, and insights to
                  ensure your project’s success.
                </span>
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Results-Driven Approach: </span>
                <span className="text-[#605e5e]">
                  Our solutions are designed with measurable outcomes in mind,
                  focusing on real, tangible results that support your
                  business’s long-term success.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center space-y-6">
          <img
            className="w-full max-w-lg h-80 md:h-[26rem] mt-5 md:mt-0"
            src={studie2}
            alt="missing"
          />
          <div className="space-y-4 md:space-y-4 absolute xl:top-16 xl:right-64 md:top-16 md:right-24 top-12 right-32">
            <div className="flex items-center space-x-3 bg-[#E5E7FF] rounded-md px-5 w-64 py-3">
              <img src={case1} alt="Not Found" />
              <div>
                <p>Lorem Ipsum is</p>
                <p className="text-xs">Lorem Ipsum dolor sit ament</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-[#E5E7FF] rounded-md px-5 w-64 py-3 md:ml-10 ml:10">
              <img src={case2} alt="Not Found" />
              <div>
                <p>Lorem Ipsum is</p>
                <p className="text-xs">Lorem Ipsum dolor sit ament</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-[#E5E7FF] rounded-md px-5 w-64 py-3">
              <img src={case3} alt="Not Found" />
              <div>
                <p>Lorem Ipsum is</p>
                <p className="text-xs">Lorem Ipsum dolor sit ament</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row pl-12 justify-center items-center md:justify-between xl:w-[80%] xl:m-auto mt-7 xl:my-20 md:my-24 md:px-14">
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
                  className="hidden lg:block"
                  style={{ backgroundColor: "rgb(240, 240, 240)" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 lg:space-x-16 my-20">
        <div className="px-4 md:pr-16 mt-8 md:mt-0 xl:w-[40rem]">
          <p className="text-2xl font-semibold text-[#1A1A1A] pb-2.5">
            Achieving New Heights Together
          </p>
          <p className="w-full max-w-lg pt-1 text-lg md:text-sm xl:text-base lg:text-base text-[#605e5e] leading-9">
            At Hilance, we believe in empowering businesses to reach their
            fullest potential. Our results-driven digital solutions are designed
            to support your growth, increase efficiency, and ensure sustainable
            success. With a commitment to excellence and innovation, we help you
            climb new heights in today’s competitive landscape.
          </p>
        </div>
        <div className="w-full xl:w-[36rem]">
          <img
            className="w-full max-w-lg h-80 md:h-[26rem] xl:ml-14 pl-8"
            src={studies3}
            alt="missing"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
