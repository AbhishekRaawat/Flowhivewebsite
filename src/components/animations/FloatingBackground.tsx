import React from 'react';

const FloatingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] transform-gpu animate-float">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80')] bg-no-repeat bg-cover opacity-10 transform rotate-12 scale-150" />
        <div className="absolute inset-0 bg-gradient-radial from-purple-light/20 to-transparent" />
      </div>
    </div>
  );
};

export default FloatingBackground;