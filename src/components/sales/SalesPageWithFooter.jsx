import React from 'react';
import Footer from '../Footer';
import SalesPropertySection from './SalesPropertySection';
import { useEffect } from "react";

function SalesPageWithFooter() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return ( 
        <div>
            <SalesPropertySection />
            <Footer />
        </div>
     );
}

export default SalesPageWithFooter;