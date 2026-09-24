import AboutSection from '@/components/home/AboutSection';
import Hero from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import React from 'react';

const HomePage = () => {
    return (
        <>
        <Hero/>
        <AboutSection/>
        <ServicesSection/>
        </>
    );
};

export default HomePage;