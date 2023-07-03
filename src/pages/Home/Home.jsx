import React from 'react';
import Helmet from "../../layout/Helmet";
import Slider from "../../components/Slider";
import Brands from "../../components/Brands/Brands";
import Trending from "../../components/Trending/Trending";

const Home = () => {
    return (
        <Helmet title="Home">
            <Slider />
            <Brands />
            <Trending/>
        </Helmet>
    );
};

export default Home;