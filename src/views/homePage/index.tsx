import React from "react";
import AboutUs from "./aboutUs";
import Services from "./services";
import Portfolio from "./portfolio";
import Home from "./home";
import DownloadApp from "./downloadApp";
import Testimonials from "../aboutUs/testimonials";

const HomePage: React.FC = () => {
  
  return (
    <div className="mt-6">
      <Home />
      <AboutUs />
      <Services />
      <DownloadApp />
      <Portfolio/>
      <Testimonials />
      {/* <Blogs /> */}
    </div>
  );
};

export default HomePage;
