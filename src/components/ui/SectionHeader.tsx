import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className = '',
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {centered ? (
        <div className="gold-divider" />
      ) : (
        <div className="gold-divider-left" />
      )}
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-navy-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
