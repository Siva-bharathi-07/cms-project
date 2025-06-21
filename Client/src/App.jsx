import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Developer from "./Pages/Developer";
import Home from "./Pages/Home";
import Assessment from "./Pages/Assessment";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Ass from "./Pages/Ass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/assessment" element={<Assessment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/ass" element={<Ass />} />

        <Route path="/Assessment" element={<Assessment />} />
        <Route path="/Login" element={<Home />} />
        <Route path="/Ass" element={<Ass />} />
        <Route path="/Developer" element={<Developer />} />
      </Routes>
    </Router>
  );
}
export default App;
