import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Subscribe from "../components/subscribe";
import Header from "../components/header/index";

function Outlets(){
    return(
       <>
        <Header />
        <Outlet />
        <Subscribe />
        <Footer/>
       </>
    )
}
export default Outlets;