import React from "react";
import phone1 from "../../assets/images/phone1.jpg";
import phone2 from "../../assets/images/phone2.jpg";
import Group from "../../assets/images/Group.png";

const DownloadApp: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16 xl:px-24 mt-14 mb-12 gap-8 xl:gap-24">
      <div className="relative">
        <img src={Group} alt="Background Decoration" className="opacity-25 w-96 sm:w-96 md:w-80 lg:w-96 xl:w-[45rem]" />
      
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center space-y-4 px-4 md:px-8 lg:px-12 xl:px-36">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Download Roboti
          </h1>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-xs md:max-w-sm lg:max-w-md">
          Looking for a powerful AI tool to elevate your business? Roboti helps you craft emails, letters, marketing ideas, social media strategies, and more. Get insights and inspiration at your fingertips with our comprehensive app. 
          </p>
        </div>
      </div>

      <div className="flex">
        <img
          className="w-36 md:w-52 lg:w-60 xl:w-72 object-contain"
          src={phone1}
          alt="Phone Frame"
        />
                <img
          className="w-36 md:w-52 lg:w-60 xl:w-72 object-contain"
          src={phone2}
          alt="Phone Frame"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
