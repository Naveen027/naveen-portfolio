
import './App.css';
import { Route, Routes } from "react-router-dom";
import Nabar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/projects';


function App() {
  return (
    <div>
      <Nabar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
