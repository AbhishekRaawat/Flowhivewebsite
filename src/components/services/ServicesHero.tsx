import React from 'react';
import HeroImage from '../HeroImage';
import ScrollReveal from '../animations/ScrollReveal';
import ParallaxSection from '../animations/ParallaxSection';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <HeroImage
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
          alt="AI Services"
          className="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/80 via-purple/60 to-purple-light/40"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <ParallaxSection speed={0.2} className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              AI Solutions for Every Business Need
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Discover our comprehensive range of AI automation services designed to
              transform your business operations and drive growth.
            </p>
          </ScrollReveal>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default ServicesHero;