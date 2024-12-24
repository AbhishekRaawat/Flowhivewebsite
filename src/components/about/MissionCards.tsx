import React from 'react';
import { Award, Users, Target } from 'lucide-react';
import Card from '../Card';
import ScrollReveal from '../animations/ScrollReveal';
import Card3D from '../animations/Card3D';

const MissionCards = () => {
  const cards = [
    {
      icon: <Target className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: 'Our Mission',
      description: 'To democratize AI technology and make intelligent automation accessible to businesses of all sizes.',
    },
    {
      icon: <Users className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: 'Our Approach',
      description: 'We combine cutting-edge AI technology with deep industry expertise to deliver practical, results-driven solutions.',
    },
    {
      icon: <Award className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: 'Our Values',
      description: 'Innovation, integrity, and client success drive everything we do.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <ScrollReveal key={index} delay={index * 100}>
          <Card3D>
            <Card className="p-6 text-center h-full">
              {card.icon}
              <h3 className="text-xl font-bold mb-4 text-secondary">{card.title}</h3>
              <p className="text-secondary/70">{card.description}</p>
            </Card>
          </Card3D>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default MissionCards;