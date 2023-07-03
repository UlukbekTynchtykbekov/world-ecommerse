import React from 'react';
import Helmet from "../../layout/Helmet";
import Slider from "../../components/Slider";

const Home = () => {
    return (
        <Helmet title="Home">
            <Slider />
        </Helmet>
    );
};

export default Home;