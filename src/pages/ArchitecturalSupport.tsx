import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/home/CTABanner';
import { services } from '../data/services';

const service = services.find(s => s.slug === 'architectural-support')!;

const designStyles = [
  {
    title: 'Tropical Modern',
    description: 'Clean contemporary lines integrated with natural materials, open-plan living, and indoor-outdoor flow.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    title: 'Colonial Heritage',
    description: 'Sympathetic restoration and extension of Sri Lanka\'s beautiful Dutch and British colonial buildings.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80',
  },
  {
    title: 'Sustainable Design',
    description: 'Eco-conscious design with solar power, rainwater harvesting, and locally sourced sustainable materials.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
  },
];

const ArchitecturalSupport: React.FC = () => {
  return (
    <>
      <title>Architectural Support — Paradise Global Leisures</title>

      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')` }} />
        <div className="relative container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-gold-400">Home</Link><span>/</span>
            <Link to="/services" className="hover:text-gold-400">Services</Link><span>/</span>
            <span className="text-gold-400">Architectural Support</span>
          </nav>
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Architectural & Support Services</h1>
          <div className="gold-divider-left" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl">
            From concept to completed drawings, our architectural team brings creative vision and technical precision to every project.
          </p>
        </div>
      </div>

      {/* Design Styles */}
      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Design Philosophy"
            title="Architecture That Belongs to Sri Lanka"
            subtitle="We design buildings that respond to the tropical climate, local culture, and the stunning natural beauty of their surroundings."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {designStyles.map(({ title, description, image }) => (
              <div key={title} className="group rounded-sm overflow-hidden shadow-card card-hover">
                <div className="h-56 overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="bg-white p-5 border border-beige-200 border-t-0">
                  <h3 className="font-serif font-semibold text-navy-900 text-lg mb-2">{title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
                alt="Architectural plans"
                className="w-full h-[450px] object-cover rounded-sm shadow-2xl"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="What We Offer"
                title="Full-Spectrum Architectural Services"
                subtitle="From initial sketches to permit-ready technical drawings, our team handles every stage of the design process."
              />
              <div className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <p className="text-navy-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <Link to="/contact" className="btn-primary inline-flex">
                  Start Your Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default ArchitecturalSupport;
