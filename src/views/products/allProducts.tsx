import React from "react";
import GroupPhone from "../../assets/images/Group 9394.png";
import futureMobile from "../../assets/images/future-mobile-technology.png";
import Group93942 from "../../assets/images/Group 9394 (2).png";
import Group93941 from "../../assets/images/Group 9394 (1).png";
import Group93943 from "../../assets/images/Group 9394 (3).png";
import EastIcon from "@mui/icons-material/East";

interface allproducts {
  selectedCategory: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBuyNowOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AllProducts: React.FC<allproducts> = ({
  selectedCategory,
  setOpen,
  setBuyNowOpen,
}) => {
    
  const Categories = [
    {
      categoriImg: GroupPhone,
      categorieItem: "Food App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: futureMobile,
      categorieItem: "Mobile App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93941,
      categorieItem: "E-Commerce App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93942,
      categorieItem: "Restaurant App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "Finance App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93943,
      categorieItem: "Food App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "Mobile App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93941,
      categorieItem: "Renting App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: futureMobile,
      categorieItem: "Finance App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "Food App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93942,
      categorieItem: "Renting App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93943,
      categorieItem: "Restaurant App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "E-Commerce App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: futureMobile,
      categorieItem: "Mobile App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93941,
      categorieItem: "Restaurant App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93942,
      categorieItem: "Renting App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "Food App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93943,
      categorieItem: "Finance App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "E-Commerce App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93941,
      categorieItem: "Mobile App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: futureMobile,
      categorieItem: "Restaurant App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "Food App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93942,
      categorieItem: "Finance App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93943,
      categorieItem: "E-Commerce App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "Mobile App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: futureMobile,
      categorieItem: "Renting App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93941,
      categorieItem: "Finance App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93942,
      categorieItem: "Restaurant App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "Mobile App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93943,
      categorieItem: "E-Commerce App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "Renting App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93941,
      categorieItem: "Finance App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: futureMobile,
      categorieItem: "Restaurant App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: GroupPhone,
      categorieItem: "Mobile App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93942,
      categorieItem: "E-Commerce App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
    {
      categoriImg: Group93943,
      categorieItem: "Food App",
      appContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id suscipit et, officiis molestiae",
      Price: "$200",
    },
  ];

  const filteredCategories =
    selectedCategory === "Show All"
      ? Categories
      : Categories.filter((data) => data.categorieItem === selectedCategory);

  return (
    <div className="flex justify-center py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-x-14 gap-y-10">
        {filteredCategories.map((data, index) => (
          <div
            key={index}
            className="w-[21rem] rounded-lg bg-white shadow-sm shadow-zinc-400 text-center"
          >
            <img
              className="w-[21rem] h-52 rounded-t-lg"
              src={data.categoriImg}
              alt="missing"
            />
            <div className="px-3">
              <div className="flex justify-between items-center py-3">
                <p className="pt-2 text-xl font-semibold text-[#1A1A1A]">
                  {data.categorieItem}
                </p>
                <button
                  className="text-sm bg-bglburegistrationbanner px-5 py-1 text-white"
                  onClick={() => {
                    setOpen(true);
                    setBuyNowOpen(false);
                  }}
                >
                  Preview
                </button>
              </div>
              <p className="text-start" style={{ color: "#605e5e" }}>
                {data.appContent}
              </p>
              <div className="flex justify-between items-center pt-4 pb-2">
                <p className="text-lg text-bglburegistrationbanner font-semibold">
                  {data.Price}
                </p>
                <button
                  className="text-sm text-bglburegistrationbanner space-x-1.5 flex items-center"
                  onClick={() => setBuyNowOpen(true)}
                >
                  <p className="font-semibold">Buy Now</p>
                  <EastIcon sx={{ mt: 0.5 }} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
