
import './App.css';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import HomePage from './components/Home';
import RentPropertySection from './components/RentPropertiesSection';
import SalesPropertySection from "./components/SalesPropertySection";
import Services from './components/Services';
import Testimonials from './components/Testiminials';
// import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
// import Home from './components/Home'

// sk - w3mzBwsYTda1E0kTVNWET3BlbkFJltpEjVNqaE1vTBKvlXPH;

function App() {
  return (
    <div>
      {/* <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rent">Rent Property</Link>
          </li>
          <li>
            <Link to="/sale">Sales Property</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/rent" Component={RentPropertySection}/>
          <Route exact path="/" Component={HomePage}/>
           
          <Route path="/sale" Component={SalesPropertySection}/>
            
          <Route path="/services" Component={Services} />
        </Routes>
      </Router> */}
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
