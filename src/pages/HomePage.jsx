import React from 'react';
import Header from '../components/Header';
import MainSlider from '../components/MainSlider';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import About from '../components/About';
import Funfacts from '../components/Funfacts';
import Countries from '../components/Countries';
import Features from '../components/Features';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';

import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="page-wrapper">
            <div className="preloader" style={{ display: 'none' }}></div>
            <Header />
            <MainSlider />
            <Welcome />
            <Services />
            <About />
            <Funfacts />
            <Countries />
            <Features />
            <VideoSection />
            <FAQ />

            <Footer />
        </div>
    );
};

export default HomePage;
