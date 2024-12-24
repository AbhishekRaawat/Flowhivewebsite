import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
};

const Card = ({ children, className = '', glowEffect = false }: CardProps) => {
  return (
    <div 
      className={`
        relative overflow-hidden
        bg-gradient-card backdrop-blur-lg
        border border-purple-light/20
        rounded-lg
        ${glowEffect ? 'shadow-neon hover:shadow-neon-hover' : 'shadow-lg'}
        hover:border-purple-light/30
        transition-all duration-500
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-glow opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;