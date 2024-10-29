import React from "react";
import photoImg from "../../assets/images/pexels-photo.webp";
import businessMen from "../../assets/images/businessMen.jpg";
import work5 from "../../assets/images/work5.jpg";
import work6 from "../../assets/images/work6.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const DedicatedTeam = () => {
  const navigate = useNavigate();

  const Dedicated = [
    { member: work5 },
    { member: work6 },
    { member: work6 },
    { member: work6 },
  ];

  return (
    <div className="mt-20 mb-10">
      <h3 className="text-center text-bglburegistrationbanner tracking-widest">
        Dedicated Team
      </h3>
      <p className="text-center py-2 font-semibold text-2xl">
        Meet Our Dedicated Member
      </p>
      <div className="flex flex-wrap justify-center space-x-3.5 mt-5">
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
              className={`mt-auto bg-white text-bglburegistrationbanner shadow-black shadow-sm p-2.5 rounded-full flex mx-auto`}
            >
              <IoShareSocialOutline className="text-xl" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-16">
        <button
          className="bg-bglburegistrationbanner rounded-full px-8 py-2.5 text-white text-sm"
          onClick={() => {
            navigate("/allteammember");
            window.scrollTo(0, 0);
          }}
        >
          All Member
        </button>
      </div>
    </div>
  );
};

export default DedicatedTeam;
