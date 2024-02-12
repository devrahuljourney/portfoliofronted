import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import About from './components/About';
import Coding from './components/Coding';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './Admin/Login';
import Home from './components/Home';
import ManagePortfolio from './Admin/ManagePortfolio';


// Define your components/pages outside of the App component
// For example, let's say you have a Home component

function App() {
  const [user,setUser] = useState('false');
  return (
    <Router>
      <div className="App h-full bg-[#DFDBD9]">
        
        <Routes>
        <Route exact path ='/' element = { <Home/> } />
        <Route exact path="/admin/login" element = { <Login setUser = {setUser} /> }  />
        <Route exact path ='/admin/manage-portfolio' element = { <ManagePortfolio/> } />
        

        </Routes>
      </div>
    </Router>
  );
}

export default App;