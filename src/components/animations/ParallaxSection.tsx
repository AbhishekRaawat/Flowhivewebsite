import React, { useEffect, useRef } from 'react';

type ParallaxSectionProps = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
};

const ParallaxSection = ({ children, speed = 0.5, className = '' }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Only animate when the section is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const distance = (scrollPosition * speed);
        sectionRef.current.style.transform = `translate3d(0, ${distance}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxSection;