import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import HeroImage from '../components/HeroImage';
import { services } from '../data/services';
import ScrollReveal from '../components/animations/ScrollReveal';
import Card3D from '../components/animations/Card3D';
import ParallaxSection from '../components/animations/ParallaxSection';
import FloatingBackground from '../components/animations/FloatingBackground';
import BookingModal from '../components/BookingModal';

const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleLearnMore = () => {
    const servicesSection = document.querySelector('#services-section');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <HeroImage
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
            alt="AI Technology"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/90 via-purple/70 to-transparent"></div>
        </div>
        <FloatingBackground />
        <div className="container mx-auto px-4 relative z-10">
          <ParallaxSection speed={0.2} className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                Transform Your Business with Intelligent Automation
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Leverage cutting-edge AI solutions to streamline operations, boost efficiency,
                and drive growth for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="primary" 
                  className="hero-button-primary relative group"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hero-button-outline relative group"
                  onClick={handleLearnMore}
                >
                  <span className="relative z-10">
                    Learn More
                  </span>
                </Button>
              </div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our AI Solutions</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card3D>
                    <Card className="h-full">
                      <div className="p-6">
                        <Icon className="h-8 w-8 text-white mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-white/80 mb-4">{service.description}</p>
                        <p className="text-white/70 mb-4">{service.details}</p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-white/80">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a href="/services" className="text-white hover:text-white/80 inline-flex items-center mt-auto hover-lift">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </Card>
                  </Card3D>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our AI solutions can help you achieve your goals.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="hover-lift"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Schedule a Consultation
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;