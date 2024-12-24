import React from 'react';

const AboutFloatingOverlay = () => {
  return (
    <div className="absolute inset-0 h-[70vh] overflow-hidden pointer-events-none">
      {/* Main floating layer with AI-themed background */}
      <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] transform-gpu animate-float">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] 
          bg-no-repeat bg-cover opacity-10 transform rotate-12 scale-150"
        />
      </div>
      
      {/* Floating orbs for depth */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-light/10 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '-5s' }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-dark/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '-10s' }} 
        />
      </div>
    </div>
  );
};

export default AboutFloatingOverlay;