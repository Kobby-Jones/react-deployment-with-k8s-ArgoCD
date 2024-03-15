import React from "react";
import Footer from "../Footer";
import RentPropertySection from './RentPropertiesSection';
import { useEffect } from "react";

function RentPageWithFooter() {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <RentPropertySection />
      <Footer />
    </div>
  );
}

export default RentPageWithFooter;
