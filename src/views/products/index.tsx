import React, { useState } from "react";
import Contact from "../../components/contact";
import OurProducts from "./ourProducts";
import DownloadApp from "./downloadApp";
import AllProducts from "./allProducts";
import Prieview from "./prieview";
import BuyNow from "./buyNow";
import ChekOut from "./chekOut";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [buyNowOpen, setBuyNowOpen] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Mobile App");

  return (
    <div>
      <OurProducts />
      <Contact />
      <DownloadApp
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <AllProducts
        selectedCategory={selectedCategory}
        setBuyNowOpen={setBuyNowOpen}
        setOpen={setOpen}
      />
      <Prieview open={open} setOpen={setOpen} />
      <BuyNow
        buyNowOpen={buyNowOpen}
        setOpen={setOpen}
        setBuyNowOpen={setBuyNowOpen}
        setCheckOut={setCheckOut}
      />
      <ChekOut checkOut={checkOut} setCheckOut={setCheckOut} />
    </div>
  );
};

export default Products;
