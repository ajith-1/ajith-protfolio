import React from 'react';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Project from '../../Pages/Project/Project';
import Contact from '../../Pages/Contact/Contact';
import Skill from '../../Pages/Skill/Skill';
import Navbar from '../../Components/Navbar/Navbar';



export default function Layout(){

    return(
        <>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        </>
    )
}