import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';
import Skill from './Pages/Skill/Skill';
import Navbar from './Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function App() {
  return (
   <>
  <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
   </>
  );
}

export default App;
