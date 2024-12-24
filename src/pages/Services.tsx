import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import TechnicalInfo from '../components/services/TechnicalInfo';

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesGrid />
      <TechnicalInfo />
    </div>
  );
};

export default Services;