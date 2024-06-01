import "./App.css";
import ContactUs from "./components/contactUs/Contact";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import RentPropertySection from "./components/rent/RentPropertiesSection";
import SalesPropertySection from "./components/sales/SalesPropertySection";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testiminials";
import Sliders from './components/Sliders'
import 'animate.css'
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

// sk - w3mzBwsYTda1E0kTVNWET3BlbkFJltpEjVNqaE1vTBKvlXPH;

function App() {
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
      <Testimonials />
      <SalesPropertySection />
      <RentPropertySection />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
