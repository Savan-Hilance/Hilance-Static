import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/homePage";
import Outlets from "../outlet/outlet";
import AboutusPage from "../views/aboutUs";
import ContactUs from "../views/contactUs";
import PortfolioPage from "../views/portfolioPage";
import RecentBlogs from "../views/blogsPage/recentBlogs";
import OurServicesPage from "../views/ourServicesPage";
import CaseStudies from "../views/caseStudies";
import Products from "../views/products";
import UIUXDesigning from "../views/ourServicesPage/services/uiUxDesigning";
import TeamMember from "../views/aboutUs/teamMember";
import PrivacyPolicy from "../views/footer/privacyPolicy";
import TermsOfUse from "../views/footer/termsOfUse";
import MobileAppDevelopment from "../views/ourServicesPage/services/mobileAppDevelopment";
import WebsiteDevelopment from "../views/ourServicesPage/services/websiteDevelopment";

export default function Navigations() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Outlets />}>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/aboutus" element={<AboutusPage />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/caseStudies" element={<CaseStudies />}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/services" element={<OurServicesPage />} />
          {/* <Route path="/blogs" element={<BlogsPage />} /> */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/recentBlogs" element={<RecentBlogs />} />
          <Route path="/uiuxdesigning" element={<UIUXDesigning />} />
          <Route path="/mobiledevelopment" element={<MobileAppDevelopment/> } />
          <Route path="/websitedevelopment" element={<WebsiteDevelopment/> } />
          <Route path="/allteammember" element={<TeamMember/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="termsofuse" element={<TermsOfUse/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
