import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Assessment from '../Pages/assessment';
import Ass from '../Pages/Ass';
import Developer from '../Pages/Developer';

function Approute(props) {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Assessment" element={<Assessment />} />
                <Route path="/Ass" element={<Ass />} />
                <Route path="/Developer" element={<Developer />} />
            </Routes>

    );
}

export default Approute;