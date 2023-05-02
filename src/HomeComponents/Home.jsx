import React from 'react';
import BannerHome from './BannerHome'
import Chefs from './Chefs';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <main>
            <BannerHome></BannerHome>
            <Chefs></Chefs>
            <ContactUs></ContactUs>
        </main>
    );
};

export default Home;