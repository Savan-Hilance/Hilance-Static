import React from "react";
import { Dialog } from "@mui/material";
import GroupPhone from "../../assets/images/Group 9394.png";
import CloseIcon from "@mui/icons-material/Close";

interface buynows {
  buyNowOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBuyNowOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckOut: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuyNow: React.FC<buynows> = ({ buyNowOpen, setOpen, setBuyNowOpen, setCheckOut }) => {
  return (
    <div>
      <Dialog
        open={buyNowOpen}
        onClose={() => setBuyNowOpen(false)}
        maxWidth="md"
        fullWidth
        sx={{ width: { xs: "95%", sm: "90%", md: "60%" }, margin: "auto" }}
      >
        <div className="w-full">
          <div
            className="flex justify-end cursor-pointer mr-3 mt-3"
            onClick={() => setBuyNowOpen(false)}
          >
            <CloseIcon
              fontSize="large"
              className="border border-white bg-gray-600 p-2 rounded-full text-white"
            />
          </div>
          <p className="text-center font-semibold text-xl pt-1 pb-12">
            See Your Item
          </p>

          <div className="flex flex-col md:flex-row justify-evenly items-center bg-stone-300 py-5 space-y-5 md:space-y-0">
            <div>
              <img className="w-36 h-36" src={GroupPhone} alt="missing" />
            </div>
            <div className="w-4/5 md:w-48 text-center md:text-left">
              <p className="text-lg font-medium">
                Mobile App Name and description
              </p>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                facere nesciunt esse est ipsum, id amet eaque architecto quasi
                dolore, sint beatae odit suscipit qui minus dolorum.
              </p>
            </div>
            <div>
              <p className="font-medium text-center md:text-left">Price</p>
              <p className="text-xl text-bglburegistrationbanner">$200</p>
            </div>
          </div>

          <p className="text-xs text-center mt-3">
            Price is in dollars and excludes tax and handling fees
          </p>

          <div className="flex justify-center space-x-3 my-8">
            <button
              className="text-sm rounded-full bg-blue-600 px-5 py-1 text-white"
              onClick={() => {
                setCheckOut(true);
                setBuyNowOpen(false);
              }}
            >
              Go To Checkout
            </button>
            <button
              className="text-sm rounded-full border border-blue-600 px-5 py-1 text-blue-600"
              onClick={() => {
                setOpen(true);
                setBuyNowOpen(false);
              }}
            >
              Preview
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default BuyNow;
