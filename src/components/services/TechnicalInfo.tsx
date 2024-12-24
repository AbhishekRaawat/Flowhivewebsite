import React from 'react';
import Card from '../Card';
import ScrollReveal from '../animations/ScrollReveal';
import Card3D from '../animations/Card3D';

const TechnicalInfo = () => {
  const sections = [
    {
      title: 'Supported Technologies',
      items: [
        'Python, TensorFlow, PyTorch',
        'AWS, Azure, Google Cloud',
        'REST APIs, GraphQL',
        'Docker, Kubernetes',
      ],
    },
    {
      title: 'Integration Options',
      items: [
        'API-first integration approach',
        'Custom connectors for legacy systems',
        'Webhook support',
        'SSO and security integration',
      ],
    },
  ];

  return (
    <section className="py-20 bg-purple-light/95">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Technical Capabilities & Integration
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card3D>
                <Card className="p-8 relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/50 to-purple-light/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                  <h3 className="text-xl font-bold mb-6 relative z-10">{section.title}</h3>
                  <ul className="space-y-4 relative z-10">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalInfo;