import React from "react";
import { Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface chekout {
  checkOut: boolean;
  setCheckOut: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChekOut: React.FC<chekout> = ({ checkOut, setCheckOut }) => {
  return (
    <div>
      <Dialog
        open={checkOut}
        onClose={() => setCheckOut(false)}
        maxWidth="md"
        fullWidth
        sx={{ width: { xs: "95%", sm: "40%" }, margin: "auto" }}
      >
        <div className="w-full">
          <div
            className=" flex justify-end cursor-pointer mr-3 mt-3"
            onClick={() => setCheckOut(false)}
          >
            <CloseIcon
              fontSize="large"
              className="border border-white bg-gray-600 p-2 rounded-full text-white"
            />
          </div>
          <div>
            <p className="text-center text-2xl font-semibold pt-10 pb-24">
              Coming Soon...
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ChekOut;
