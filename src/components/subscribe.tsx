import React from "react";
import subscribeBG from "../assets/images/subscribeBG.jpg";

const Subscribe = () => {
  return (
    <div 
      className="w-full h-40 bg-cover bg-no-repeat bg-center flex items-center justify-around flex-col md:flex-row px-4 py-6" 
      style={{ backgroundImage: `url(${subscribeBG})` }}
    >
      <div className="text-white text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-xl md:text-2xl font-bold">Subscribe to our newsletter</h1>
        <p className="text-sm md:text-base">
        Subscribe to stay informed on cutting-edge tech solutions and insights designed to drive your business forward.
        </p>
      </div>
      <div className="flex items-center w-full md:w-auto justify-center md:justify-end">
        <input
          type="text"
          placeholder="Email Address..."
          className="p-2 rounded-full mr-3 text-black w-full md:w-[21rem] placeholder-black pl-4"
        />
        <button 
          style={{ backgroundColor: "#d1d3ff" }} 
          className="py-1 px-3 rounded-2xl"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
