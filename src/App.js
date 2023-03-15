import './App.css';
import HomePage from './components/Home';
import CustomNavbar from './components/Navbar';
import Testimonials from './components/Testiminials';


function App() {
  return (
    <div>
      <CustomNavbar />
      <HomePage />
      <Testimonials />
    </div>
  );
}

export default App;
