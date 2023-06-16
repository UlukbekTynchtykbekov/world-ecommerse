import React from 'react';
import {Route, Routes} from "react-router-dom";
import Register from "../pages/Register";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Register/>}/>
    </Routes>
};

export default Routers;