import React from "react";
import products from "../../assets/images/products.jpg";

function OurProducts() {
  return (
    <div
      className="flex items-center h-[28rem] w-full relative"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(16, 15, 14, 0.71) 0%, rgba(115, 115, 115, 0) 100%), url(${products})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-start w-full max-w-60 md:max-w-md mx-4 md:mx-12 lg:mx-44 md:space-y-2">
        <p className="text-white text-3xl md:text-5xl font-bold">
          OUR PRODUCTS
        </p>
        <h1 className="text-white font-normal text-sm md:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
        </h1>
      </div>
    </div>
  );
}

export default OurProducts;
