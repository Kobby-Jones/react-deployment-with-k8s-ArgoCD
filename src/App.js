
import './App.css';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import HomePage from './components/Home';
import RentPropertySection from './components/RentPropertiesSection';
import SalesPropertySection from "./components/SalesPropertySection";
import Services from './components/Services';
import Testimonials from './components/Testiminials';

// sk - w3mzBwsYTda1E0kTVNWET3BlbkFJltpEjVNqaE1vTBKvlXPH;

function App() {
  return (
    <div>
      <HomePage />
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
