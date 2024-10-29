import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import {
  FaAt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Layer1 from "../../assets/images/Layer_1.png";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="xl:px-44 lg:px-20 md:px-10 my-4 md:my-8">
      <div className="hidden md:flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row md:space-x-5 lg:space-x-9 xl:space-x-9 space-y-3 md:space-y-0 px-3 md:px-0">
          <div className="flex items-center">
            <IoMdCall className="bg-[#5054A4] hover:bg-[#5b60b8] rounded-xl text-white text-3xl md:text-2xl p-2 md:p-1 mr-1" />
            <span className="text-xl xl:text-base lg:text-sm md:text-sm text-[#605E5E]">
              +964 770 783 8768 The contact details:
            </span>
          </div>
          <div className="flex items-center">
            <IoMdCall className="bg-[#5054A4] hover:bg-[#5b60b8] rounded-xl text-white text-3xl md:text-2xl p-2 md:p-1 mr-1" />
            <span className="text-xl xl:text-base lg:text-sm md:text-sm text-[#605E5E]">
              +971 50 699 7120
            </span>
          </div>
          <div className="flex items-center">
            <FaAt className="bg-[#5054A4] hover:bg-[#5b60b8] rounded-xl text-white text-3xl md:text-2xl p-2 md:p-1 mr-1" />
            <span className="header-icon xl:text-base lg:text-sm md:text-sm text-xl text-[#605E5E]">
              <a
                href="https://info@hilance.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@hilance.app
              </a>
            </span>
          </div>
        </div>
        <div className="flex justify-center md:justify-between items-center mt-3 md:mt-0">
          <div className="flex items-center space-x-3 md:space-x-2">
            <a
              href="https://www.facebook.com/people/Hilance-Incorporated/61567188335690/?mibextid=LQQJ4d&rdid=x7qKTiwZmhUzVq0X&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FdVgJbvbgg4TZBjig%2F%3Fmibextid%3DLQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="bg-[#5054A4] hover:bg-[#5b60b8] rounded-xl text-white text-3xl md:text-2xl p-2 md:p-1" />
            </a>
            <a
              href="https://www.instagram.com/hilance.app/?igsh=MWIydm4yb3hmb213dQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="bg-[#5054A4] hover:bg-[#5b60b8] rounded-xl text-white text-3xl md:text-2xl p-2 md:p-1" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="bg-[#5054A4] hover:bg-[#5b60b8] rounded-xl text-white text-3xl md:text-2xl p-2 md:p-1" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="bg-[#5054A4] hover:bg-[#5b60b8] rounded-xl text-white text-3xl md:text-2xl p-2 md:p-1" />
            </a>
          </div>
        </div>
      </div>

      <hr className="md:border-1 md:border-[#605E5E] md:my-5 md:w-full" />

      <div className="flex md:justify-between flex-wrap items-center px-4 md:px-0">
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="text-xl">☰</span>
          </button>
        </div>
        <div onClick={() => navigate("/")} className="ml-10 md:ml-0">
          <img
            className="w-36 md:w-28 lg:w-44 xl:w-56 hover:cursor-pointer"
            src={Layer1}
            alt="missing"
          />
        </div>
        <div
          className={`md:flex md:items-center md:space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:w-auto`}
        >
          <ul className="flex md:items-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 lg:space-x-5 xl:space-x-9 mt-4 md:mt-0 text-[#605E5E]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer text-sm xl:text-base lg:text-sm md:text-xs ${
                  isActive ? "text-bglburegistrationbanner" : "text-[#605E5E]"
                } hover:text-bglburegistrationbanner`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `cursor-pointer text-sm xl:text-base lg:text-sm md:text-xs ${
                  isActive ? "text-bglburegistrationbanner" : "text-[#605E5E]"
                } hover:text-bglburegistrationbanner`
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `cursor-pointer text-sm xl:text-base lg:text-sm md:text-xs ${
                  isActive ? "text-bglburegistrationbanner" : "text-[#605E5E]"
                } hover:text-bglburegistrationbanner`
              }
            >
              Our Services
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `cursor-pointer text-sm xl:text-base lg:text-sm md:text-xs ${
                  isActive ? "text-bglburegistrationbanner" : "text-[#605E5E]"
                } hover:text-bglburegistrationbanner`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/caseStudies"
              className={({ isActive }) =>
                `cursor-pointer text-sm xl:text-base lg:text-sm md:text-xs ${
                  isActive ? "text-bglburegistrationbanner" : "text-[#605E5E]"
                } hover:text-bglburegistrationbanner`
              }
            >
              Case Studies
            </NavLink>
            {/* <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `cursor-pointer text-sm xl:text-base lg:text-sm md:text-xs ${
                  isActive ? "text-bglburegistrationbanner" : "text-[#605E5E]"
                } hover:text-bglburegistrationbanner`
              }
            >
              Blogs
            </NavLink> */}
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `cursor-pointer text-sm xl:text-base lg:text-sm md:text-xs ${
                  isActive ? "text-bglburegistrationbanner" : "text-[#605E5E]"
                } hover:text-bglburegistrationbanner`
              }
            >
              Portfolio
            </NavLink>
            <button
              className="bg-[#5054A4] hover:bg-[#5b60b8] text-white font-light py-1 md:py-3 w-20 md:w-28 text-xs xl:text-base lg:text-sm rounded-full"
              onClick={() => navigate("/contactus")}
            >
              Contact Us
            </button>
          </ul>

          <hr className="md:hidden border-1 border-[#605E5E] my-3 w-full" />
          <div className="md:hidden space-y-2">
            <div className="flex items-center space-x-1">
              <IoMdCall className="bg-bglburegistrationbanner rounded-xl text-white text-2xl p-1.5 mr-1" />
              <span className="text-base text-[#605E5E]">+971 50 699 7120</span>
            </div>
            <div className="flex items-center space-x-1">
              <IoMdCall className="bg-bglburegistrationbanner rounded-xl text-white text-2xl p-1.5 mr-1" />
              <span className="text-base text-[#605E5E]">
                +964 770 783 8768
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <FaAt className="bg-bglburegistrationbanner rounded-xl text-white text-2xl p-1.5 mr-1" />
              <span className="text-base text-[#605E5E]">info@hilance.app</span>
            </div>
            <hr className="md:hidden border-1 border-[#605E5E] my-5 w-full" />
            <div className="flex justify-center items-center space-x-3 md:space-x-2">
              <a
                href="https://www.facebook.com/people/Hilance-Incorporated/61567188335690/?mibextid=LQQJ4d&rdid=mYI1RLgXJ1wTXHRo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FdVgJbvbgg4TZBjig%2F%3Fmibextid%3DLQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="bg-bglburegistrationbanner rounded-xl text-white text-2xl p-1.5" />
              </a>
              <a
                href="https://www.instagram.com/hilance.app/?igsh=MWIydm4yb3hmb213dQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="bg-bglburegistrationbanner rounded-xl text-white text-2xl p-1.5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="bg-bglburegistrationbanner rounded-xl text-white text-2xl p-1.5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="bg-bglburegistrationbanner rounded-xl text-white text-2xl p-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
