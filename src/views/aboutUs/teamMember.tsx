import React from "react";
import Contact from "../../components/contact";
import teamMember from "../../assets/images/teamMember.jpg";
import work5 from "../../assets/images/work5.jpg";
import work6 from "../../assets/images/work6.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import Testimonials from "./testimonials";

function TeamMember() {
  const Dedicated = [
    { member: work5 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
  ];
  return (
    <div>
      <div
        className="flex items-center h-[28rem] w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${teamMember})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-md mx-4 md:mx-12 lg:mx-44">
          <p className="text-white text-2xl md:text-4xl font-bold">Team Member</p>
          <h1 className="text-white font-bold text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            voluptatum.
          </h1>
        </div>
      </div>

      <Contact />

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-3 gap-y-5 mt-16">
          {Dedicated.map((data, index) => (
            <div
              key={index}
              className={`relative w-[17.3rem] bg-[#e6e6e6] hover:bg-bglburegistrationbanner text-black hover:text-white text-center mb-6 mx-2 flex flex-col justify-between`}
            >
              <img
                className="w-full h-[17rem] object-cover"
                src={data.member}
                alt="missing"
              />
              <div>
                <p className="pt-2 text-lg">Connie Diaz</p>
                <p className="text-sm">CEO & Founder</p>
              </div>
              {data?.member === work5 && (
                <div className="flex items-center justify-evenly px-14 pt-3 pb-3">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaXTwitter />
                  <IoLogoYoutube />
                </div>
              )}
              <button
                className={`mt-auto ${
                  data?.member === work5
                    ? "bg-white text-bglburegistrationbanner"
                    : "bg-bglburegistrationbanner text-white"
                } shadow-black shadow-sm p-2.5 rounded-full flex mx-auto`}
              >
                <IoShareSocialOutline className="text-xl" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </div>
  );
}

export default TeamMember;
