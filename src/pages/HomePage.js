import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage(props) {

    return (
        <div>
            <Navigation />
        <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
        <Carousel />
        <Footer />
        </div>
    );

}

export default HomePage;