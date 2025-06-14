import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Assessment from "./Pages/assessment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Assessment" element={<Assessment />} />
        <Route path="/Login" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
