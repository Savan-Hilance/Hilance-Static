import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface DownloadAppProps {
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
}

const DownloadApp: React.FC<DownloadAppProps> = ({
  setSelectedCategory,
  selectedCategory,
}) => {
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around items-center md:space-x-36 my-5 p-4">
        <p className="text-lg md:text-xl font-semibold mb-4 md:mb-0 text-[#1A1A1A]">
          Download the Applications
        </p>
        <div className="flex items-center w-full md:w-auto">
          <input
            className="w-full md:w-72 bg-[#e6e6e6] py-2 px-3"
            placeholder="Search Within this Categories"
          />
          <button className="bg-bglburegistrationbanner text-white px-2.5 py-2">
            <SearchIcon fontSize="small" />
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="py-12 w-[70rem] shadow-[0px_4px_10px_rgba(128,128,128,0.3),0px_-4px_10px_rgba(128,128,128,0.2)] px-10">
          <div className="flex justify-between item-center">
            <p className="text-lg md:text-xl font-medium text-[#1A1A1A]">
              All Categories
            </p>
            <button
              className="text-bglburegistrationbanner border border-bglburegistrationbanner px-4 md:px-8 py-2 rounded-full"
              onClick={() => setSelectedCategory("Show All")}
            >
              Show All
            </button>
          </div>

          <hr className="border border-[#1A1A1A] mt-4"></hr>

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-x-4 gap-y-3 mt-8">
            {[
              "E-Commerce App",
              "Mobile App",
              "Food App",
              "Restaurant App",
              "Finance App",
              "Renting App",
            ].map((category) => (
              <button
                key={category}
                className={`text-base py-3 ${
                  selectedCategory === category
                    ? "bg-bglburegistrationbanner text-white"
                    : "bg-[#e6e6e6]"
                } rounded-full`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
