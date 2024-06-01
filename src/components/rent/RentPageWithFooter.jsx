import React from "react";
import Footer from "../Footer";
import RentPropertySection from './RentPropertiesSection';
import { useEffect } from "react";
import forRent from "./RentProperties";

function RentPageWithFooter() {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <RentPropertySection type={forRent} heading={"Properties For Rent"} />
      <Footer />
    </div>
  );
}

export default RentPageWithFooter;
