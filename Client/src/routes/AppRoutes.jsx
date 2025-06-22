import React from "react";
import { Routes, Route } from "react-router-dom";

import "../App.css";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import BasicLayouts from "../layouts/BasicLayouts";
import NotFound from "../Pages/Notfound";
import DashboardLayouts from "../layouts/DashboardLayouts";
import About from "../Pages/dashboard/About";
import Assessment from "../Pages/dashboard/Assessment";
import Ass from "../Pages/dashboard/Ass";
import Course from "../Pages/dashboard/Course";
import Developer from "../Pages/dashboard/Developer";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayouts />}>
        <Route index element={<About />} />

        <Route path="about" element={<About />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="ass" element={<Ass />} />
        <Route path="course" element={<Course />} />
        <Route path="developer" element={<Developer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
