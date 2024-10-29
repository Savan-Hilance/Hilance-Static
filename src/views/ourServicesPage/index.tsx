import React from "react";
import Services from "./servicesContent";
import ServicesCards from "./servicesCards";
import Testimonials from "../aboutUs/testimonials";

const OurServicesPage: React.FC = () => {
    return(
        <div>
           <Services />
           <ServicesCards />
           <Testimonials />
        </div>
    )
}

export default OurServicesPage