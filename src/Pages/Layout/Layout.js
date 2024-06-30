import React from 'react';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Project from '../../Pages/Project/Project';
import Contact from '../../Pages/Contact/Contact';
import Skill from '../../Pages/Skill/Skill';
import Navbar from '../../Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function Layout(){

    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
    )
}