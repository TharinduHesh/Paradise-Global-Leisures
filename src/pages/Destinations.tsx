import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, ArrowRight } from 'lucide-react';
import CTABanner from '../components/home/CTABanner';
import { destinations } from '../data/destinations';

const Destinations: React.FC = () => {
  return (
    <>
      <title>Destinations — Paradise Global Leisures</title>

      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=1920&q=80')` }} />
        <div className="relative container-custom text-center">
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Where We Operate</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Sri Lanka's Finest Destinations</h1>
          <div className="gold-divider" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl mx-auto">
            We specialise in Sri Lanka's most beautiful and in-demand coastal locations, each with its own unique character and investment appeal.
          </p>
        </div>
      </div>

      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {destinations.map((dest, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={dest.id} className="bg-white rounded-sm shadow-card overflow-hidden border border-beige-200">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-80 lg:h-auto overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-gold-500/90 text-white text-sm font-bold px-3 py-1.5 rounded-sm">
                          {dest.propertyCount} Properties Available
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-10 ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-2 text-gold-500 text-xs uppercase tracking-widest font-medium mb-3">
                        <MapPin size={12} />
                        {dest.district} District
                      </div>
                      <h2 className="font-serif text-navy-900 text-3xl font-bold mb-4">{dest.name}</h2>
                      <p className="text-navy-600 leading-relaxed mb-6">{dest.description}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <p className="text-navy-800 font-semibold text-sm mb-3">Key Highlights</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {dest.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                              <span className="text-navy-600 text-sm">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link to="/properties" className="btn-primary inline-flex">
                        <Home size={15} /> View {dest.name} Properties <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Destinations;
