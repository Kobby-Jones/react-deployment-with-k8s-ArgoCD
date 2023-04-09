import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import CustomNavbar from './Navbar'
import ServicesPageWithFooter from './ServicesPageWithFooter';
import ContactPageWithFooter from './ContactPageWithFooter';
import App from '../App';
import RentPropertySection from './RentPropertiesSection';
import SalesPageWithFooter from './SalesPageWithFooter';

function Routers() {
    return (
        <div>
            <CustomNavbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<ServicesPageWithFooter />} />
          <Route path="contact" element={<ContactPageWithFooter />} />
          <Route path="rent" element={<RentPropertySection />} />
          <Route path="sales" element={<SalesPageWithFooter />} />
        </Routes>
      </div>
    );
}
export default Routers;