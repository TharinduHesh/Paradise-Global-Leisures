import React from 'react';
import Hero from '../components/home/Hero';
import ServicesStrip from '../components/home/ServicesStrip';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedProperties from '../components/home/FeaturedProperties';
import DestinationsSection from '../components/home/DestinationsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTABanner from '../components/home/CTABanner';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <ServicesOverview />
      <FeaturedProperties />
      <DestinationsSection />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
};

export default Home;
