import React from 'react';
import BannerHome from './BannerHome'
import Chefs from './Chefs';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <main>
            <BannerHome></BannerHome>
            <Chefs></Chefs>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </main>
    );
};

export default Home;