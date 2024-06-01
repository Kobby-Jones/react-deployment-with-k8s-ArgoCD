import React from 'react';
import Footer from '../Footer';
import SalesPropertySection from './SalesPropertySection';
import { useEffect } from "react";
import forSale from './saleProperties';

function SalesPageWithFooter() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return ( 
        <div>
            <SalesPropertySection type={forSale} heading={"Properties For Sale"} />
            <Footer />
        </div>
     );
}

export default SalesPageWithFooter;