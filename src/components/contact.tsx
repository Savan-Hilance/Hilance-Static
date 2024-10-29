import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { updateContact } from "../redux/HomePageSlice";
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const contact = useSelector((state: RootState) => state.home.contact);

  const handleUpdateContact = () => {
    dispatch(updateContact("New contact information here..."));
    navigate("/contactus");
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-bglburegistrationbanner py-5 md:py-20 px-3 md:px-0 text-white mb-2">
      <div className="flex flex-col md:flex-row md:justify-around items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-medium">{contact}</h1>
        </div>
        
        <div className="text-center">
          <button
            style={{ backgroundColor: "#d1d3ff" }}
            className="py-4 px-9 text-sm rounded-full text-bglburegistrationbanner mr-5"
            onClick={handleUpdateContact}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
