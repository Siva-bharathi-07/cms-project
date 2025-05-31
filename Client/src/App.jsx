import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Assessment from "./Pages/assessment";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Assessment" element={<Assessment />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
