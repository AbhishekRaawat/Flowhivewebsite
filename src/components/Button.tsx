import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300';
  
  const variants = {
    primary: 'bg-purple-light text-white hover:bg-purple-light/90 shadow-neon hover:shadow-neon-hover',
    secondary: 'bg-purple-overlay/50 text-white hover:bg-purple-overlay/70 border border-purple-light/30',
    outline: 'border-2 border-purple-light/50 text-purple-light hover:border-purple-light hover:bg-purple-light/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;