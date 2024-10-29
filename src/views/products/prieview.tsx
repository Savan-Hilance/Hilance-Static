import { Dialog } from "@mui/material";
import React from "react";
import productPrieview from "../../assets/images/productPrieview.png";
import CloseIcon from "@mui/icons-material/Close";

interface priviews {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Prieview: React.FC<priviews> = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        sx={{ width: { xs: "95%", sm: "90%", md: "80%" }, margin: "auto" }}
      >
        <div className="relative w-full overflow-x-hidden hide-scrollbar" style={{ overflowY: "scroll" }}>
          <img className="w-full h-auto" src={productPrieview} alt="missing" />
          <div
            className="absolute top-2 right-2 cursor-pointer border border-white bg-gray-600 p-1 rounded-full text-white"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </div>
          <div className="px-8 py-7 space-y-3.5">
            <p className="font-semibold text-lg">Description</p>
            <p className="text-sm">
              This UI Kit is designed with modern design trends.
            </p>
            <p className="text-sm">Modifying the template is quite simple.</p>
            <p className="text-sm">
              We Continue to add new things to make our template more beautiful
              and strong every day. you will be free to use all our updates.
            </p>
            <p className="text-sm">
              The photographs you see in the design are for presentation
              purposes only. It is not included in the design file.
            </p>
            <p className="font-semibold text-lg">Main Features</p>
            <ul style={{ listStyleType: "disc" }} className="px-5 md:px-10">
              <li>Sketch, Figma, Adobe XD and Adobe Photoshop</li>
              <li>Pixel perfect UI Elements</li>
              <li>Customizable Layers, Fonts & Colors </li>
              <li>Well Layered & Organized</li>
              <li>High Quality Screens</li>
              <li>Free Fonts & Icons </li>
              <li>100% Customizable Vector Shape</li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Prieview;