import React from 'react';
import HeroImage from '../components/HeroImage';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ScrollReveal from '../components/animations/ScrollReveal';
import ParallaxSection from '../components/animations/ParallaxSection';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <HeroImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/90 via-purple/70 to-transparent"></div>
        </div>
        <ParallaxSection className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Ready to transform your business with AI? We're here to help you get started.
            </p>
          </ScrollReveal>
        </ParallaxSection>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ContactInfo />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Our Response Commitment</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We aim to respond to all inquiries within 24 hours during business days.
              For urgent matters, please call our support line.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;