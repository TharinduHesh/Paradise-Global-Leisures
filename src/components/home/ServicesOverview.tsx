import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Home, Building2, Scale, PenTool, HardHat, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const services = [
  {
    icon: FileCheck,
    number: '01',
    title: 'Plan Approvals',
    description:
      'Navigating Sri Lanka\'s planning process can be complex. We manage every step — from initial consultation and drawing preparation to liaising with Local Authorities, UDA, NHDA, and Coastal Zone Management on your behalf.',
    bullets: ['Local Authority submissions', 'UDA & NHDA approvals', 'Coastal zone compliance', 'Progress monitoring'],
    href: '/services/plan-approvals',
  },
  {
    icon: Home,
    number: '02',
    title: 'Real Estate',
    description:
      'Premium property sales, acquisitions, and investment advisory across Sri Lanka\'s Southern and Western coastlines. We connect buyers with exceptional properties — villas, land, houses, apartments, and commercial assets.',
    bullets: ['Residential & commercial sales', 'Investment property advisory', 'Property valuations', 'Due diligence & market analysis'],
    href: '/properties',
  },
  {
    icon: Building2,
    number: '03',
    title: 'Property Management',
    description:
      'End-to-end holiday rental management so you earn maximum income with zero hassle. We handle everything from listing setup and dynamic pricing to guest communication, cleaning, maintenance, and monthly financial reports.',
    bullets: ['Airbnb & Booking.com listings', 'Guest management 24/7', 'Professional cleaning & upkeep', 'Monthly income reporting'],
    href: '/services/property-management',
  },
  {
    icon: Scale,
    number: '04',
    title: 'Legal Advice & Consultation',
    description:
      'Property law in Sri Lanka — especially for foreign buyers — requires specialist expertise. Our legal team handles title deed verification, sale agreements, foreign ownership structures, lease drafting, and regulatory compliance.',
    bullets: ['Title deed & due diligence', 'Sale & purchase agreements', 'Foreign ownership advisory', 'Lease agreement drafting'],
    href: '/services/legal-consultation',
  },
  {
    icon: PenTool,
    number: '05',
    title: 'Architectural & Support Services',
    description:
      'From your first sketch to permit-ready drawings, our architectural team brings creative vision and technical precision. We design properties that respond to the tropical climate, local culture, and the stunning Sri Lankan landscape.',
    bullets: ['Concept design & 3D visualisation', 'Detailed architectural drawings', 'Interior & landscape design', 'Structural engineering support'],
    href: '/services/architectural-support',
  },
  {
    icon: HardHat,
    number: '06',
    title: 'Construction',
    description:
      'Full-service construction management from foundation to final handover. Our experienced team delivers high-quality villas, commercial buildings, and renovation projects across Southern Sri Lanka — on time and within budget.',
    bullets: ['New villa & house construction', 'Commercial & hospitality builds', 'Renovation & extension projects', 'Quality assurance & inspections'],
    href: '/services/construction',
  },
  {
    icon: ShieldCheck,
    number: '07',
    title: 'Cyber Security Services',
    description:
      'Protect your business, customer information, and digital operations with practical cyber security solutions designed to reduce risk and strengthen resilience against evolving threats.',
    bullets: ['Security risk assessments', 'Network & endpoint protection', 'Vulnerability assessments', 'Incident response support'],
    href: '/services/cyber-security',
  },
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="section-padding bg-beige-50">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Everything Under One Roof"
          title="Complete Property Services"
          subtitle="From the moment you choose a location to the day you receive your keys — we handle every aspect of your property journey with local expertise and international standards."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map(({ icon: Icon, number, title, description, bullets, href }) => (
            <div
              key={title}
              className="group bg-white rounded-sm shadow-card border border-beige-200 overflow-hidden card-hover flex flex-col"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gold-500" />

              <div className="p-7 flex flex-col flex-1">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-sm border-2 border-gold-200 bg-gold-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={26} className="text-gold-600" />
                  </div>
                  <span className="font-serif text-5xl font-bold text-beige-300 leading-none select-none">
                    {number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-navy-900 text-xl mb-3 group-hover:text-gold-600 transition-colors">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-navy-500 text-sm leading-relaxed mb-5">
                  {description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2 mb-6 flex-1">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-navy-700">
                      <CheckCircle size={14} className="flex-shrink-0 text-gold-600" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={href}
                  className="flex items-center gap-2 text-sm font-semibold text-gold-600 group-hover:gap-3 transition-all duration-200 mt-auto pt-5 border-t border-beige-200"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-navy-900 rounded-sm p-8 md:p-12">
          <p className="text-gold-400 text-sm uppercase tracking-widest font-medium mb-3">One Company. Every Stage.</p>
          <h3 className="font-serif text-white text-2xl md:text-3xl font-bold mb-4">
            We Handle Your Entire Property Journey
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-8">
            No need to coordinate multiple firms. Paradise Global Leisures provides every service you need — from finding the land and getting approvals, to designing, building, and managing your property.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline">
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
