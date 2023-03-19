import './App.css';
import HomePage from './components/Home';
import CustomNavbar from './components/Navbar';
import SalesPropertySection from "./components/SalesPropertySection";
import Testimonials from './components/Testiminials';


function App() {
  return (
    <div>
      <CustomNavbar />
      <HomePage />
      <Testimonials />
      <SalesPropertySection />
    </div>
  );
}

export default App;
