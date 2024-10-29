import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import humansrobots from "../assets/images/humans-robots.png";
import rectangle from "../assets/images/Rectangle.png";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <div  className="w-full relative py-16"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${humansrobots})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      > */}
      <div
        className="w-full relative py-16"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${rectangle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "revert",
        }}
      >
        <div className="px-4 md:px-8 lg:px-16 xl:px-44 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-7">
          <div>
            <h1 className="md:text-6xl text-4xl font-bold mb-4">Hilance</h1>
            <p className="text-sm mb-6">
              Leading the way in mobile and web app development, Hilance
              combines innovation with user-centered design to empower
              businesses worldwide. Connect with us to stay updated on our
              latest projects and industry insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Hilance-Incorporated/61567188335690/?mibextid=LQQJ4d&rdid=x7qKTiwZmhUzVq0X&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FdVgJbvbgg4TZBjig%2F%3Fmibextid%3DLQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="cursor-pointer text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/hilance.app/?igsh=MWIydm4yb3hmb213dQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="cursor-pointer text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-4">Our Services</h1>
            <ul>
              <li className="mb-2 text-base font-light">
                <div
                  className="cursor-pointer text-base xl:text-base lg:text-sm sm:text-xs font-light"
                  onClick={() => {
                    navigate("/uiuxdesigning");
                    window.scrollTo(0, 0);
                  }}
                >
                  -UI/UX Designing
                </div>
              </li>
              <li className="mb-2 text-base font-light">
                <div
                  onClick={() => {
                    navigate("/mobileDevelopment");
                    window.scrollTo(0, 0);
                  }}
                >
                  -Mobile App Development
                </div>
              </li>
              <li className="mb-2 text-base font-light">
                <div
                  className="cursor-pointer text-base xl:text-base lg:text-sm sm:text-xs font-light"
                  onClick={() => {
                    navigate("/websiteDevelopment");
                    window.scrollTo(0, 0);
                  }}
                >
                  -Website Development
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-4">Important Links</h1>
            <ul>
              <li className="mb-2 text-sm">
                <div
                  className="cursor-pointer text-base xl:text-base lg:text-sm sm:text-xs font-light"
                  onClick={() => {
                    navigate("/aboutus");
                    window.scrollTo(0, 0);
                  }}
                >
                  About us
                </div>
              </li>
              <li className="mb-2 text-sm">
                <div
                  className="cursor-pointer text-base xl:text-base lg:text-sm sm:text-xs font-light"
                  onClick={() => {
                    navigate("/services");
                    window.scrollTo(0, 0);
                  }}
                >
                  Our Services
                </div>
              </li>
              <li className="mb-2 text-sm">
                <div
                  className="cursor-pointer text-base xl:text-base lg:text-sm sm:text-xs font-light"
                  onClick={() => {
                    navigate("/portfolio");
                    window.scrollTo(0, 0);
                  }}
                >
                  Portfolio
                </div>
              </li>
              {/* <li className="mb-2 text-sm">
                <Link
                  to="/blogs"
                  className="cursor-pointer text-base xl:text-base lg:text-sm sm:text-xs font-light"
                >
                  Blogs
                </Link>
              </li> */}
              <li className="text-sm">
                <div
                  className="cursor-pointer text-base xl:text-base lg:text-sm sm:text-xs font-light"
                  onClick={() => {
                    navigate("/contactus");
                    window.scrollTo(0, 0);
                  }}
                >
                  Contact Us
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
            <div className="flex items-start mb-4">
              <div className=" flex items-center">
                <CallIcon className="mr-2" />
                <p className="text-base font-light">
                  +964 786 278 9084 <br />
                  +971 50 943 7956
                </p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <EmailIcon className="mr-2" />
              <p className="text-base font-light">info@hilance.app</p>
            </div>
            <div className="flex items-start">
              <LocationOnIcon className="mr-2" />
              <p className="text-base font-light">
                1395 UAE, Suite 800, FL 33131
              </p>
            </div>
          </div>
        </div>
        <hr className="w-[82%] m-auto mt-16"></hr>
        <div className="w-full  py-4 xl:px-28">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 px-4 lg:px-16">
            <p>&copy; Hilance. All rights reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0 pr-14 xl:pr-32 2xl:pr-32">
              <p>Disclaimer</p>
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate("/privacypolicy");
                  window.scrollTo(0, 0);
                }}
              >
                Privacy Policy
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate("/termsofuse");
                  window.scrollTo(0, 0);
                }}
              >
                Terms of Use
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
