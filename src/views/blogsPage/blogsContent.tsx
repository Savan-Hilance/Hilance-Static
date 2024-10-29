import React from "react";
import Contact from "../../components/contact";
import laptopWhite from "../../assets/images/laptop-white.png";

const Blogs = () => {
  return (
    <div>
       <div
        className="flex items-center h-96 w-full relative"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${laptopWhite})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-start w-full max-w-md mx-4 md:mx-12 lg:mx-44">
          <p className="text-white text-2xl md:text-4xl font-bold">BLOGS</p>
          <h1 className="text-white font-bold text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            voluptatum.
          </h1>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Blogs;
