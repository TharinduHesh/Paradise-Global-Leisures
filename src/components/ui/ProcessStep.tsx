import React from 'react';
import * as Icons from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
  variant?: 'light' | 'dark';
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  icon,
  isLast = false,
  variant = 'light',
}) => {
  // Dynamically get icon component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = ((Icons as any)[icon] as React.ComponentType<{ size?: number; className?: string }>) || Icons.Circle;

  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector line */}
      {!isLast && (
        <div className={`hidden md:block absolute top-10 left-1/2 w-full h-px ${variant === 'dark' ? 'bg-white/20' : 'bg-gold-200'}`} style={{ left: '60%' }} />
      )}

      {/* Icon Circle */}
      <div className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 ${variant === 'dark' ? 'bg-white/10 text-gold-400 border border-white/20' : 'bg-gold-50 text-gold-600 border-2 border-gold-200 hover:border-gold-400 hover:bg-gold-100'}`}>
        <IconComponent size={28} />
        {/* Step Number */}
        <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${variant === 'dark' ? 'bg-gold-500 text-white' : 'bg-navy-900 text-white'}`}>
          {step}
        </div>
      </div>

      <h4 className={`font-serif font-semibold text-base mb-2 ${variant === 'dark' ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h4>
      <p className={`text-sm leading-relaxed max-w-[140px] ${variant === 'dark' ? 'text-white/60' : 'text-navy-500'}`}>
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;
