import React from 'react';
import Card from '../Card';
import ScrollReveal from '../animations/ScrollReveal';
import Card3D from '../animations/Card3D';

const Certifications = () => {
  const partners = [
    {
      category: 'Automation Platforms',
      tools: ['Make.com', 'Zapier', 'n8n', 'Pably'],
    },
    {
      category: 'AI & Machine Learning',
      tools: ['OpenAI', 'Claude', 'Perplexity', 'PyTorch'],
    },
    {
      category: 'Development & Integration',
      tools: ['Python', 'Relevance AI', 'REST APIs', 'GraphQL'],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {partners.map((section, index) => (
        <ScrollReveal key={index} delay={index * 100}>
          <Card3D>
            <Card className="p-6 h-full">
              <h3 className="text-xl font-bold mb-4 text-secondary">{section.category}</h3>
              <ul className="space-y-3">
                {section.tools.map((tool, toolIndex) => (
                  <li key={toolIndex} className="flex items-center text-secondary/70">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </Card>
          </Card3D>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default Certifications;