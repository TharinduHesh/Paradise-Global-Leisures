import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessStep from '../components/ui/ProcessStep';
import { services } from '../data/services';

const service = services.find(s => s.slug === 'property-management')!;

const managementFeatures = [
  {
    title: 'Multi-Platform Listing',
    description: 'Your property professionally listed on Airbnb, Booking.com, Vrbo, and our own website for maximum exposure.',
    icon: '🌐',
  },
  {
    title: 'Professional Photography',
    description: 'High-quality photography and virtual tours to make your property stand out from the competition.',
    icon: '📸',
  },
  {
    title: 'Dynamic Pricing',
    description: 'Smart pricing algorithms that maximise your revenue based on seasonality and market demand.',
    icon: '📊',
  },
  {
    title: '24/7 Guest Support',
    description: 'Round-the-clock guest communication and support, ensuring 5-star reviews every time.',
    icon: '⭐',
  },
  {
    title: 'Professional Cleaning',
    description: 'Hotel-standard cleaning and linen service between every guest stay.',
    icon: '✨',
  },
  {
    title: 'Maintenance Management',
    description: 'Proactive property maintenance and rapid response to any issues that arise.',
    icon: '🔧',
  },
];

const PropertyManagement: React.FC = () => {
  return (
    <>
      <title>Property Management — Paradise Global Leisures</title>

      {/* Header */}
      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')` }} />
        <div className="relative container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-gold-400">Services</Link>
            <span>/</span>
            <span className="text-gold-400">Property Management</span>
          </nav>
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Property Management</h1>
          <div className="gold-divider-left" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl">
            Maximise your property's earning potential while we handle every operational aspect — from marketing to guest management and everything in between.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="How It Works"
            title="Our Property Management Process"
            subtitle="A streamlined, professional process designed to maximise your returns and minimise your stress."
            centered
          />
          <div className="relative mt-14">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {service.process?.map((step, idx) => (
                <ProcessStep
                  key={step.step}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isLast={idx === (service.process?.length ?? 0) - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What's Included"
            title="Everything You Need, Nothing You Don't"
            subtitle="Our all-inclusive management service covers every aspect of running a successful holiday rental."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {managementFeatures.map(({ title, description, icon }) => (
              <div key={title} className="bg-beige-50 border border-beige-200 rounded-sm p-6 hover:border-gold-300 transition-colors card-hover">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-serif font-semibold text-navy-900 text-lg mb-3">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us + CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Choose Us"
                title="We Treat Your Property Like Our Own"
                subtitle="With years of experience managing premium holiday properties across Sri Lanka's Southern Coast, we know what it takes to maximise occupancy and earn glowing reviews."
                light
              />
              <div className="mt-8 space-y-3">
                {service.features.map((f) => (
                  <div key={f} className="flex gap-3">
                    <CheckCircle size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/70 text-sm">{f}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-sm p-8">
              <h3 className="font-serif text-white text-xl font-semibold mb-2">Get a Free Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Tell us about your property and we'll create a tailored management proposal.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-400" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-400" />
                <input type="tel" placeholder="Phone / WhatsApp" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-400" />
                <input type="text" placeholder="Property Location" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-400" />
                <button type="submit" className="btn-primary w-full justify-center">
                  Request Free Consultation <ArrowRight size={16} />
                </button>
              </form>
              <div className="flex items-center gap-2 mt-4 justify-center">
                <Phone size={14} className="text-gold-400" />
                <a href="tel:+94770000000" className="text-gold-400 text-sm hover:text-gold-300">+94 77 000 0000</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyManagement;
