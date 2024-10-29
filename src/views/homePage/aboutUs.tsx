// import React from "react";
// import FrameImg from "../../assets/images/Frame 9481.png";
// import TaskAltIcon from "@mui/icons-material/TaskAlt";
// import { Button, Box, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import MaskGroup4 from "../../assets/images/Mask group (4).png";
// import MobileApp from "../../assets/images/mobile-application.png";
// import operationprocess from "../../assets/images/operation-process.png";

// const AboutUs: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col md:flex-row justify-center gap-5 md:px-4 xl:gap-16 px-12">
//       <div className="xl:w-[40%] h-[680px] md:w-[42rem] items-center justify-center">
//         <div className="flex space-x-3">
//           <div className="bg-bglburegistrationbanner xl:py-9 md:py-5 py-6 text-white xl:w-48 xl:h-48 lg:w-40 lg:h-32 md:w-32 md:h-28 w-36 h-36 rounded-lg text-center">
//             <h1 className="text-xl xl:text-2xl font-bold">10+</h1>
//             <p className="xl:text-2xl lg:text-lg">
//               Years of <br></br> Experience
//             </p>
//           </div>
//           <div className="xl:w-[28rem] lg:w-[24rem] md:w-64">
//             <img
//               className="rounded-lg w-full xl:h-[27rem] lg:h-[24rem] md:h-72"
//               src={operationprocess}
//               alt="Operation Process"
//             />
//           </div>
//         </div>
//         <div className="flex space-x-3 space-y-3">
//           <div className="relative rounded-md xl:-top-[14rem] lg:-top-[15rem] md:-top-40 -top-[20rem] xl:w-[28rem] lg:w-[24rem] md:w-64">
//             <img
//               className="rounded-lg w-full xl:h-[26.5rem] lg:h-full md:h-72"
//               src={MaskGroup4}
//               alt="Mask Group"
//             />
//           </div>
//           <div className="xl:w-48 xl:h-48 lg:w-40 lg:h-32 md:w-32 md:h-28  w-36 h-36">
//             <img className="rounded-lg" src={MobileApp} alt="Mobile App" />
//           </div>
//         </div>
//       </div>

//       <div
//         className="w-full lg:w-[28rem] xl:w-[40%] md:w-[37rem]"
//       >
//         <p className="text-bglburegistrationbanner xl:text-2xl">About Us</p>
//         <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-5">
//           Ensuring Your Success with Trusted IT Services
//         </h1>
//         <p className="text-[#605E5E] xl:text-lg md:text-[15px]">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged.
//         </p>
//         <div className="my-3 flex items-center ">
//           <span className="ml-2 text-sm text-[#605E5E] xl:text-lg">
//             Lorem Ipsum is simply dummy text of the printing
//           </span>
//         </div>
//         {Array(3)
//           .fill(null)
//           .map((_, index) => (
//             <div className="mb-3 flex items-center" key={index}>
//               <TaskAltIcon className="text-bglburegistrationbanner" />
//               <span className="ml-2 text-sm text-[#605E5E] xl:text-lg">
//                 Lorem Ipsum is simply dummy text of the printing
//               </span>
//             </div>
//           ))}
//         <div className="mb-5">
//           <button
//             className="bg-bglburegistrationbanner text-white py-2 px-5 rounded-3xl mt-4"
//             onClick={() => {
//               navigate("/aboutus");
//               window.scrollTo(0, 0);
//             }}
//           >
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import FrameImg from "../../assets/images/Frame 9481.png";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useNavigate } from "react-router-dom";

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-center px-2 md:px-2 mt-14 xl:mb-12 xl:gap-24 md:gap-5 items-center">
      <div className="flex space-x-3 md:space-y-8 space-y-8 lg:space-y-14 xl:space-y-14">
        <div className="space-y-6">
          <img
            className="lg:w-48 md:w-96 md:h-[30rem] lg:h-48 xl:h-full xl:w-[40rem] mt-6 md:mt-0 w-full h-full"
            src={FrameImg}
            alt="missing"
          ></img>
        </div>
      </div>
      <div className="mt-6 md:mt-0 w-full md:h-full md:w-[23rem] lg:w-[28rem] xl:w-[40rem]">
        <p className="text-bglburegistrationbanner xl:text-2xl">About Us</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
          Ensuring Your Success Trusted IT Services Source
        </h1>
        <p className="text-[#605E5E] xl:text-lg">
          Hilance is a leading mobile application development company that
          specializes in creating high-quality apps for both iOS and Android
          platforms, as well as web applications. Our team of skilled developers
          can build custom mobile apps that can be sold as white-label solutions
          or published on the App Store and Google Play for subscription-based
          models.
        </p>
        <h1 className="text-2xl  font-bold text-gray-900 my-5">
          We Provide the Solutions You Need to Succeed
        </h1>
        <p className="text-[#605E5E] xl:text-lg">
          At Hilance, we are dedicated to empowering businesses with innovative
          IT solutions designed to streamline processes, boost productivity, and
          drive growth. Our team combines technical expertise with a commitment
          to understanding your unique challenges, ensuring that every project
          we complete brings tangible value to your organization.
        </p>
        <div className="mb-5">
          <button
            className="bg-bglburegistrationbanner text-white py-2 px-5 rounded-3xl mt-4"
            onClick={() => {
              navigate("/aboutus");
              window.scrollTo(0, 0);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
