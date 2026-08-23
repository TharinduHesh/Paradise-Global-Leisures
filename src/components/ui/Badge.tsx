import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'green' | 'red' | 'beige';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'sm',
  className = '',
}) => {
  const variantClasses = {
    gold: 'bg-gold-100 text-gold-700 border border-gold-200',
    navy: 'bg-navy-900 text-white',
    green: 'bg-green-100 text-green-700 border border-green-200',
    red: 'bg-red-100 text-red-700 border border-red-200',
    beige: 'bg-beige-200 text-navy-700 border border-beige-300',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`inline-flex items-center rounded-sm font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
