import React from "react";
import Contact from "../../components/contact";
import maximizingTeamwork from "../../assets/images/maximizing-teamwork.png";

const Services: React.FC = () => {
  return (
    <div>
      <div
        className="flex items-center h-[28rem] w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${maximizingTeamwork})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-44 md:space-y-2">
          <p className="text-white text-3xl md:text-5xl font-bold">
            OUR SERVICES
          </p>
          <h1 className="text-white font-normal text-sm md:text-lg">
          Hillance empowers businesses with tailored digital solutions, from mobile, web, and desktop apps to AI-driven innovations and engaging UI/UX design. Our expertise helps you drive growth, enhance operations, and achieve success.
          </h1>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Services;
