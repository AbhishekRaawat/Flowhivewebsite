import React from 'react';
import Card from '../components/Card';
import HeroImage from '../components/HeroImage';
import MissionCards from '../components/about/MissionCards';
import Certifications from '../components/about/Certifications';
import ScrollReveal from '../components/animations/ScrollReveal';
import ParallaxSection from '../components/animations/ParallaxSection';
import Card3D from '../components/animations/Card3D';
import AboutFloatingOverlay from '../components/animations/AboutFloatingOverlay';

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Previous sections remain unchanged */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <HeroImage
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
            alt="AI Team"
            className="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/90 via-purple/70 to-transparent"></div>
        </div>
        <AboutFloatingOverlay />
        <div className="container mx-auto px-4 relative z-10">
          <ParallaxSection speed={0.2} className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Pioneering the Future of AI Automation
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-white/90">
                We're a team of AI experts, engineers, and innovators dedicated to
                transforming businesses through intelligent automation.
              </p>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Driving innovation and excellence in AI automation
            </p>
          </ScrollReveal>
          <MissionCards />
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technology Partners & Expertise</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver exceptional results
            </p>
          </ScrollReveal>
          <Certifications />
        </div>
      </section>

      {/* AI Showcase Images - Updated with new images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology in Action</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Witness the power of our AI solutions
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Card3D>
                <Card className="overflow-hidden">
                  <HeroImage
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
                    alt="Neural Network Visualization"
                    className="h-64"
                  />
                </Card>
              </Card3D>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card3D>
                <Card className="overflow-hidden">
                  <HeroImage
                    src="https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80"
                    alt="Data Analysis"
                    className="h-64"
                  />
                </Card>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;