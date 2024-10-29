import React from "react";
import phone1 from "../../assets/images/phone1.jpg";
import phone2 from "../../assets/images/phone2.jpg";
import phone3 from "../../assets/images/phone3.jpg";
import phone4 from "../../assets/images/phone4.jpg";
import { ImageListItem } from "@mui/material";

const PortfolioCards: React.FC = () => {
  const itemData = [
    {
      img: phone1,
      title: "Breakfast",
    },
    {
      img: phone2,
      title: "Burger",
    },
    {
      img: phone3,
      title: "Camera",
    },
    {
      img: phone4,
      title: "Coffee",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-14 px-3 md:px-0 my-10">
        {itemData.map((item, index) => (
          <div
            className="w-full md:w-80 lg:w-[28rem] xl:w-[28rem]" 
            key={index}
          >
            <ImageListItem>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                className="rounded-lg w-full h-auto"
              />
            </ImageListItem>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCards;
