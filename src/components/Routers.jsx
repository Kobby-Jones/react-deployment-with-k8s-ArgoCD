import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomNavbar from "./Navbar";
import ServicesPageWithFooter from "./services/ServicesPageWithFooter";
import ContactPageWithFooter from "../components/contactUs/ContactPageWithFooter";
import App from "../App";
import SalesPageWithFooter from "../components/sales/SalesPageWithFooter";
import RentPageWithFooter from "../components/rent/RentPageWithFooter";
import RentDetails from "../components/rent/RentDetails";
import SalesDetails from "../components/sales/SalesDetails";
import Agents from "./agents/Agents";
import BlogPage from "./blog/Blog";
import AgentListing from "./agents/AgentsListing";

function Routers() {
  return (
    <div>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<ServicesPageWithFooter />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/contact" element={<ContactPageWithFooter />} />
        <Route path="/sales" element={<SalesPageWithFooter />} />
        <Route path="/rent" element={<RentPageWithFooter />} />
        <Route path="/rent/rent-details/:id" element={<RentDetails />} />
        <Route path="/sales/sales-details/:id" element={<SalesDetails />} />
        <Route path="/rent-details/:id" element={<RentDetails />} />
        <Route path="/sales-details/:id" element={<SalesDetails />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="agents/agents-listing/:agent_id" element = { <AgentListing/> } />
      </Routes>
    </div>
  );
}
export default Routers;
