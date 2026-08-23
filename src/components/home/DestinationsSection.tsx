import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { destinations } from '../../data/destinations';

const DestinationsSection: React.FC = () => {
  const featured = destinations.slice(0, 6);

  return (
    <section className="section-padding bg-navy-900">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Where We Operate"
          title="Discover Sri Lanka's South Coast"
          subtitle="We specialize in Sri Lanka's most beautiful and in-demand coastal locations, each with unique character and outstanding investment potential."
          centered
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featured.map((dest, i) => (
            <Link
              key={dest.id}
              to="/destinations"
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5 text-gold-400 text-xs mb-2 uppercase tracking-widest">
                    <MapPin size={12} />
                    {dest.district} District
                  </div>
                  <h3 className="font-serif text-white text-2xl font-bold mb-1 group-hover:text-gold-400 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-3">
                    {dest.description.slice(0, 90)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs px-2.5 py-1 rounded-sm">
                      {dest.propertyCount} Properties
                    </span>
                    <span className="flex items-center gap-1 text-white/60 text-xs group-hover:text-gold-400 transition-colors">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/destinations" className="btn-primary inline-flex">
            View All Destinations <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
