import React from 'react';
import Footer from '../Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Reviews from './Reviews';
import SpecialOffer from './SpecialOffer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>
            <SpecialOffer></SpecialOffer>
            <BusinessSummary></BusinessSummary>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;