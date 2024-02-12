import React from 'react'
import Profile from './Profile';
import Navbar from './Navbar';
import About from './About';
import Coding from './Coding';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
        <Navbar />
        <Profile/>
        <About/>
        <Coding/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}
