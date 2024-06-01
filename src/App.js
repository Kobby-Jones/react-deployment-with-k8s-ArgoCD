import "./App.css";
import ContactUs from "./components/contactUs/Contact";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import RentPropertySection from "./components/rent/RentPropertiesSection";
import SalesPropertySection from "./components/sales/SalesPropertySection";
import Services from "./components/services/Services";
import Sliders from './components/Sliders'
import 'animate.css'
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import forSale from "./components/sales/saleProperties";
import forRent from "./components/rent/RentProperties";
import TestimonialCard from "./components/testimonials/TestimonialCard";

// sk - w3mzBwsYTda1E0kTVNWET3BlbkFJltpEjVNqaE1vTBKvlXPH;

function App() {
  let topSales = [];
  for(let i = 0; i<6; i++){
   topSales.push(forSale[i]);
  }
  let topRent = [];
  for(let i = 0; i < 6; i++){
    topRent.push(forRent[i])
  }
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in milliseconds
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <HomePage />
      <Sliders />
      <TestimonialCard />
      <SalesPropertySection  type={topSales} heading={"Top Sales Properties"}/>
      <RentPropertySection type={topRent} heading={"Top Rent Properties"} />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
