import React from "react";
import GroupPhone from "../../assets/images/Group 9394.png";
import futureMobile from "../../assets/images/future-mobile-technology.png";
import Group93942 from "../../assets/images/Group 9394 (2).png";
import Group93941 from "../../assets/images/Group 9394 (1).png";
import Group93943 from "../../assets/images/Group 9394 (3).png";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/buy-now");
  };

  const portfolioItems = [
    {
      image: GroupPhone,
      title: "Mobile App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      price: "$200",
    },
    {
      image: futureMobile,
      title: "Mobile App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      price: "$200",
    },
    {
      image: Group93941,
      title: "Mobile App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      price: "$200",
    },
    {
      image: Group93942,
      title: "Mobile App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      price: "$200",
    },
    {
      image: GroupPhone,
      title: "Mobile App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      price: "$200",
    },
    {
      image: Group93943,
      title: "Mobile App",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      price: "$200",
    },
  ];

  return (
    <div>
      <div className="text-center mt-6">
        <h6 className="text-bglburegistrationbanner text-md mb-2">
          Our Portfolio
        </h6>
        <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mb-7">
          Our white-label applications
        </h3>
      </div>
      <div className="flex justify-center py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-x-14 gap-y-10">
          {portfolioItems.map((data, index) => (
            <div
              key={index}
              className="w-[21rem] rounded-lg bg-white shadow-sm shadow-zinc-400 text-center"
            >
              <img
                className="w-[21rem] h-52 rounded-t-lg"
                src={data.image}
                alt="missing"
              />
              <div className="px-3">
                <div className="flex justify-between items-center py-3">
                  <p className="pt-2 text-xl font-semibold text-[#1A1A1A]">
                    {data.title}
                  </p>
                </div>
                <p className="text-start" style={{ color: "#605e5e" }}>
                  {data.description}
                </p>
                <div className="flex justify-between items-center pt-4 pb-2">
                  <p className="text-lg text-bglburegistrationbanner font-semibold">
                    {data.price}
                  </p>
                  <button
                    className="text-sm text-bglburegistrationbanner space-x-1.5 flex items-center"
                    onClick={() => handlePurchase}
                  >
                    <p className="font-semibold">Purchase Now</p>
                    <EastIcon sx={{ mt: 0.5 }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button
          className="bg-bglburegistrationbanner text-white py-2 px-5 rounded-3xl mt-4"
          onClick={() => {
            navigate("/products");
            window.scrollTo(0, 0);
          }}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
