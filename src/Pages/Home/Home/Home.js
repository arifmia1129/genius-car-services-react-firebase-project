import React from 'react';
import Services from "../../Home/Services/Services";
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import PageTitle from "../../Shared/PageTitle/PageTitle";
const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;