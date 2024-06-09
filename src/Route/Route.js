import React from 'react';
import Navbar from '.././Components/Navbar/Navbar';
import Home from '.././Pages/Home/Home';
import About from '.././Pages/About/About';
import Skill from '.././Pages/Skill/Skill';
import Project from '.././Pages/Project/Project';
import Contact from '.././Pages/Contact/Contact';




function Route() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    </>
  )
}

export default Route