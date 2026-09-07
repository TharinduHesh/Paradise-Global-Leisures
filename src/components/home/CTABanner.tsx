import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-navy-900/85" />

      {/* Gold line decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-60" />

      <div className="relative container-custom text-center">
        <p className="text-gold-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Start Your Journey Today
        </p>
        <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          Ready to Find Your Perfect Property in Sri Lanka?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Speak with our expert team today. Whether you're buying, selling, building, or looking to maximise your investment — we're here to guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/properties" className="btn-primary text-base px-8 py-4">
            Explore Properties <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn-outline text-base px-8 py-4">
            Get a Consultation <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/94770000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors text-base"
          >
            <Phone size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
