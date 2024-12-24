import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';
import ScrollReveal from '../animations/ScrollReveal';

const ServicesGrid = () => {
  return (
    <section className="py-20 relative bg-purple-dark/95">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={index}
                delay={index * 100}
              >
                <ServiceCard
                  icon={<Icon className="h-12 w-12 text-white" />}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  features={service.features}
                  details={service.details}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;