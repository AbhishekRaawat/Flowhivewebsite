import React from 'react';
import { Brain } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <Brain className="h-8 w-8 text-white transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white leading-none">Flowhive</span>
        <span className="text-sm text-white/80 leading-none">AI Solutions</span>
      </div>
    </div>
  );
};

export default Logo;