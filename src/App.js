// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import HomePage from './components/Home';
import CustomNavbar from './components/Navbar';
import RentPropertySection from './components/RentPropertiesSection';
import SalesPropertySection from "./components/SalesPropertySection";
import Testimonials from './components/Testiminials';

// sk - w3mzBwsYTda1E0kTVNWET3BlbkFJltpEjVNqaE1vTBKvlXPH;

function App() {
  return (
    <div>
      <CustomNavbar />
      <HomePage />
      <Testimonials />
      <SalesPropertySection />
      <RentPropertySection />
      <About />
    </div>
  );
}

export default App;
