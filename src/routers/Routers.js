import React from 'react';
import {Route, Routes} from "react-router-dom";
import Register from "../pages/Register";
import Otp from "../pages/Otp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SinglePage from "../pages/SinglePage";
import OfferPage from "../pages/OfferPage";
import CategoryPage from "../pages/CategoryPage";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/single-page" element={<SinglePage/>}/>
            <Route path="/category-page" element={<CategoryPage/>}/>
            <Route path="/offer-page" element={<OfferPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/otp" element={<Otp/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
};

export default Routers;