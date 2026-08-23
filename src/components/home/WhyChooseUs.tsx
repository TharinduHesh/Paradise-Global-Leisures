import React from 'react';
import { Shield, Star, Clock, Users, Award, TrendingUp } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const reasons = [
  {
    icon: Shield,
    title: 'Trusted & Transparent',
    description: 'Full transparency throughout every transaction. We act in your best interest, always, with clear communication and honest advice.',
  },
  {
    icon: Star,
    title: 'Premium Local Expertise',
    description: 'Deep knowledge of Sri Lanka\'s Southern Coast property market, regulations, and opportunities that only comes from years on the ground.',
  },
  {
    icon: Clock,
    title: 'End-to-End Service',
    description: 'We manage every stage of your property journey, so you don\'t have to coordinate between multiple service providers.',
  },
  {
    icon: Users,
    title: 'International Standards',
    description: 'Our team brings international best practices to every project, ensuring quality and professionalism that exceeds expectations.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Over a decade of successfully completed projects, satisfied clients, and properties delivering exceptional returns.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Intelligence',
    description: 'We provide data-driven market insights to help you identify and capitalise on the best investment opportunities.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding bg-beige-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Paradise Global Leisures Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-card-hover rounded-sm p-6 max-w-[200px]">
              <p className="font-serif text-4xl font-bold text-gold-500">10+</p>
              <p className="text-navy-700 font-semibold text-sm mt-1">Years Serving the Southern Coast</p>
            </div>
            {/* Gold accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold-400 rounded-sm opacity-40" />
          </div>

          {/* Right: Content */}
          <div>
            <SectionHeader
              eyebrow="Why Paradise Global Leisures"
              title="Your Trusted Property Partner in Sri Lanka"
              subtitle="We combine local expertise with international standards to deliver an unparalleled property service experience on Sri Lanka's magnificent Southern Coast."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
              {reasons.map(({ icon: Icon, title, description }) => (
                <div key={title} className="group flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-sm bg-gold-50 border border-gold-200 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
                    <Icon size={20} className="text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">{title}</h4>
                    <p className="text-navy-500 text-xs leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
