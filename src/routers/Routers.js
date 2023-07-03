import React from 'react';
import {Route, Routes} from "react-router-dom";
import Register from "../pages/Register";
import Otp from "../pages/Otp";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/otp" element={<Otp/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
};

export default Routers;