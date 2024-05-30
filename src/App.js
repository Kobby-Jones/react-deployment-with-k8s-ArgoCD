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

// sk - w3mzBwsYTda1E0kTVNWET3BlbkFJltpEjVNqaE1vTBKvlXPH;

function App() {
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
