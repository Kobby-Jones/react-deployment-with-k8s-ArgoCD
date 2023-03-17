import './App.css';
import HomePage from './components/Home';
import CustomNavbar from './components/Navbar';
import PropertySection from './components/PropertySection';
import Testimonials from './components/Testiminials';


function App() {
  return (
    <div>
      <CustomNavbar />
      <HomePage />
      <Testimonials />
      <PropertySection />
    </div>
  );
}

export default App;
