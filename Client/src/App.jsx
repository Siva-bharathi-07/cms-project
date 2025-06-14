import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Developer from "./Pages/Developer";
 
import Home from "./Pages/Home";
import Assessment from "./Pages/assessment";
import Ass from "./Pages/Ass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Assessment" element={<Assessment />} />
        <Route path="/Login" element={<Home />} />
 
        <Route path="/Developer" element={<Developer />} />
 
      </Routes>
    </Router>
  );
}

export default App; 
