import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import About from './components/About';
import Coding from './components/Coding';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define your components/pages outside of the App component
// For example, let's say you have a Home component

function App() {
  return (
    <Router>
      <div className="App h-full bg-[#DFDBD9]">
        <Navbar />
        <Profile/>
        <About/>
        <Coding/>
        <Projects/>
        <Contact/>
        <Footer/>
        <Routes>
        <Route exact path="#home"  />
        <Route exact path="#about"  />
        <Route exact path="#coding"  />
        <Route exact path="#project"  />
        <Route exact path="#contact"  />
        

        </Routes>
      </div>
    </Router>
  );
}

export default App;
