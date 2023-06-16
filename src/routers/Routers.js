import React from 'react';
import {Route, Routes} from "react-router-dom";
import Register from "../pages/Register";
import Otp from "../pages/Otp";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/otp" element={<Otp/>}/>
    </Routes>
};

export default Routers;