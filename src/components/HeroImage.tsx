import React from 'react';

type HeroImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const HeroImage = ({ src, alt, className = '' }: HeroImageProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-overlay mix-blend-multiply"></div>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-30"></div>
    </div>
  );
};

export default HeroImage;