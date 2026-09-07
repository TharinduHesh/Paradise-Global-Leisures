import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Home, Building2, Scale, PenTool, HardHat, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: 'Plan Approvals',
    short: 'Authority approvals handled end-to-end',
    href: '/services/plan-approvals',
  },
  {
    icon: Home,
    title: 'Real Estate',
    short: 'Buy, sell & invest in coastal properties',
    href: '/properties',
  },
  {
    icon: Building2,
    title: 'Property Management',
    short: 'Full holiday rental management service',
    href: '/services/property-management',
  },
  {
    icon: Scale,
    title: 'Legal Consultation',
    short: 'Title deeds, ownership & compliance',
    href: '/services/legal-consultation',
  },
  {
    icon: PenTool,
    title: 'Architectural Support',
    short: 'Design, drawings & 3D visualization',
    href: '/services/architectural-support',
  },
  {
    icon: HardHat,
    title: 'Construction',
    short: 'Villas, renovations & project builds',
    href: '/services/construction',
  },
];

const ServicesStrip: React.FC = () => {
  return (
    <section className="bg-navy-950 border-t border-white/10">
      {/* Label bar */}
      <div className="border-b border-white/10 py-3">
        <div className="container-custom flex items-center justify-between">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em]">
            Our 6 Core Services
          </p>
          <Link
            to="/services"
            className="flex items-center gap-1.5 text-white/50 text-xs hover:text-gold-400 transition-colors"
          >
            View all <ArrowRight size={11} />
          </Link>
        </div>
      </div>

      {/* 6 service tiles */}
      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-white/10">
          {services.map(({ icon: Icon, title, short, href }) => (
            <Link
              key={title}
              to={href}
              className="group flex flex-col items-center text-center gap-3 px-4 py-6 border border-transparent transition-all duration-300 hover:border-gold-400 hover:bg-gold-900/20"
            >
              <div className="w-12 h-12 rounded-full border border-gold-400/40 text-gold-400 flex items-center justify-center transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-500/10 group-hover:scale-110">
                <Icon size={22} />
              </div>
              <div>
                <p className="font-semibold text-sm text-white group-hover:text-gold-400 transition-colors leading-tight mb-1">
                  {title}
                </p>
                <p className="text-white/40 text-xs leading-tight group-hover:text-white/60 transition-colors">
                  {short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesStrip;
