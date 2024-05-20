import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/LandingPage/LandingPage'
import Login from './Components/Login/Login'
import Sign_Up from './Components/Sign_Up/Sign_Up'
import InstantConsultation from './Components/InstantConsultation/InstantConsultation'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/sign-up" element={<Sign_Up/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
            </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;