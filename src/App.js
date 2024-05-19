import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/LandingPage/LandingPage'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Layout/>}/>
            </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;