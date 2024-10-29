import React from "react";
import Contact from "../../components/contact";
import laptopWith from "../../assets/images/laptop-with.png";

const Portfolio: React.FC = () => {
  return (
    <div>
      <div
        className="flex items-center h-[28rem] w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${laptopWith})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-44 md:space-y-2">
          <p className="text-white text-3xl md:text-5xl font-bold">
          PORTFOLIO
          </p>
          <h1 className="text-white font-normal text-sm md:text-lg">
          Discover our diverse range of projects that showcase our expertise in digital solutions. From custom mobile applications and innovative AI-powered platforms to engaging UI/UX designs, our portfolio highlights the impact we’ve made for clients across various industries.
          </h1>
        </div>
      </div>
      <Contact />
    </div>
  );
};
export default Portfolio;
