import React from 'react';
import "../../styles/offer-page.scss"
import Features from "../../components/Features/Features";
import Banners from "../../components/Banners/Banners";
import Helmet from "../../layout/Helmet";
import OfferProduct from "../../components/OfferProduct/OfferProduct";

const OfferPage = () => {
    return (
        <Helmet title="Offer-Page">
            <OfferProduct />
            <Features title="Related Products"/>
            <Banners />
        </Helmet>
    );
};

export default OfferPage;