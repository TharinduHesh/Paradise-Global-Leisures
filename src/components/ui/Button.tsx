import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'navy' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-gold-500 text-white hover:bg-gold-600 hover:shadow-gold hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy-900',
    navy: 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-navy hover:-translate-y-0.5',
    ghost: 'text-navy-900 hover:text-gold-600 hover:bg-gold-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    className,
  ].filter(Boolean).join(' ');

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;
