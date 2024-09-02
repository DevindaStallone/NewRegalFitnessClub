import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Teams from './Components/Pages/Teams';
import AboutUs from './Components/Pages/AboutUs';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Scrollbutton from './Components/ScrollButton/Scrollbutton';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      <Scrollbutton />
    </Router>
  );
}

export default App;
