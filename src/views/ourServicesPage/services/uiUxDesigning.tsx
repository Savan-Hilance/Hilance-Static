import React, { useState } from "react";
import Contact from "../../../components/contact";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Typography } from "@mui/material";
import MaskGroup3 from "../../../assets/images/Mask group (3).png";
import panoramaBanner from "../../../assets/images/panorama-banner.png";
import Empolyee from "../../../assets/images/employee-planning.png";
import { useNavigate } from "react-router-dom";

const UIUXDesigning: React.FC = () => {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState<string>(""); 
  const links = [
    { path: "/uiuxdesigning", label: "UI/UX Designing" },
    { path: "/mobileDevelopment", label: "Mobile App Development" },
    { path: "/websiteDevelopment", label: "Website Development" },
    { path: "/websiteDevelopment", label: "Website Development" },
    { path: "/websiteDevelopment", label: "Website Development" },
  ];
  const handleLinkClick = (path: string, label: string) => {
    setActiveLink(label);
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-full">
      <div
        className="flex items-center h-[28rem] w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${Empolyee})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-44 md:space-y-2">
          <p className="text-white text-3xl md:text-5xl font-bold">
            UI/UX Designing
          </p>
          <h1 className="text-white font-normal text-sm md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. 
          </h1>
        </div>
      </div>

      <Contact />

      <div className="flex flex-col md:flex-row justify-center px-4 md:px-6 mt-14 xl:mb-12 xl:gap-12 2xl:gap-12">
      <div className="flex flex-col space-y-5">
          <div className="w-full xl:w-[25rem] 2xl-w-[33rem] bg-gray-200 mb-4 p-4">
            {links.map((link, index) => (
              <div
              key={index}
              className={`w-full xl:h-14 h-9 mb-1 text-sm p-2 xl:p-4 ${
                activeLink === link.label
                  ? "bg-bglburegistrationbanner text-white"
                  : "bg-white text-black hover:bg-bglburegistrationbanner hover:text-white"
              }`}
              onClick={() => handleLinkClick(link.path, link.label)}
              >
                {link.label}
              </div>
            ))}
          </div>

          <div className="w-full xl:w-[25rem] 2xl-w-[33rem] mb-4 ">
            <img src={panoramaBanner} className="w-full" alt="Banner" />
          </div>
        </div>

        <div className="mt-6 md:mt-0 w-full md:w-[23rem] lg:w-[28rem] xl:w-[65rem]">
          <img src={MaskGroup3} className="w-full h-60 xl:h-80" alt="UI/UX Design" />
          <h1 className="text-xl font-bold text-black mt-6 xl:text-2xl">
            Lorem ipsum is simply dummy text
          </h1>
          <p className="text-sm py-3 xl:text-lg" style={{ color: "#605e5e" }}>
          Lorem Ipsum is simply dummy text of the printing.
          </p>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <TaskAltIcon
                  className="text-bglburegistrationbanner"
                  style={{ fontSize: "17px" }}
                />
                <Typography sx={{ ml: 2, fontSize: "17px", color: "#605e5e" }}>
                  Lorem Ipsum is simply dummy text of the printing.
                </Typography>
              </Box>
            ))}

          <h1 className="text-xl font-bold mt-5 xl:text-2xl">
            Lorem ipsum is simply dummy text
          </h1>
          <p className="text-sm py-3 xl:text-lg" style={{ color: "#605e5e" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting
          </p>
          <h1 className="text-xl font-bold mt-3 xl:text-2xl">
            Lorem ipsum is simply dummy text
          </h1>
          <p className="text-sm py-3  xl:text-lg text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum is simply dummy text of the
            printing and typesetting
          </p>
          <p className="text-sm py-3 xl:text-lg" style={{ color: "#605e5e" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy Lorem Ipsum is simply
            dummy text  simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy Lorem Ipsum is simply
            dummy text 
          </p>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesigning;
