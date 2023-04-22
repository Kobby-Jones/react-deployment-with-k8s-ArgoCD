import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import CustomNavbar from './Navbar'
import ServicesPageWithFooter from './ServicesPageWithFooter';
import ContactPageWithFooter from './ContactPageWithFooter';
import App from '../App';
import SalesPageWithFooter from './SalesPageWithFooter';
import RentPageWithFooter from './RentPageWithFooter';
import RentDetails from './RentDetails';
import SalesDetails from './SalesDetails';
function Routers() {
    return (
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<ServicesPageWithFooter />} />
          <Route path="/contact" element={<ContactPageWithFooter />} />
          <Route path="/sales" element={<SalesPageWithFooter />} />
          <Route path="/rent" element={<RentPageWithFooter />} />
          <Route path="/rent-details/:id" element={<RentDetails />} />
          <Route path="/sales-details/:id" element={<SalesDetails />} />
          
        </Routes>
      </div>
    );
}
export default Routers;