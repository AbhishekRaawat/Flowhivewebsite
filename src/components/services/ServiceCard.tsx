import React from 'react';
import Card from '../Card';
import Card3D from '../animations/Card3D';
import HeroImage from '../HeroImage';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  features: string[];
  details: string;
};

const ServiceCard = ({ icon, title, description, image, features, details }: ServiceCardProps) => {
  return (
    <Card3D>
      <Card className="h-full overflow-hidden group">
        <div className="relative h-48">
          <HeroImage src={image} alt={title} className="h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/90 to-transparent" />
        </div>
        <div className="p-6">
          <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-white/90 mb-4">{description}</p>
          <p className="text-white/80 mb-6 text-sm">{details}</p>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center text-white/80 text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Card3D>
  );
};

export default ServiceCard;