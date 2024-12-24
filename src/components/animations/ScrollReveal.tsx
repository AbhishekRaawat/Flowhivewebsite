import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  transform?: string;
};

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 700,
  transform = 'translateY(30px)'
}: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`transition-all will-change-transform ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : transform,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;