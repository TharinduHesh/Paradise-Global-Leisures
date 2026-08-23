import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessStep from '../components/ui/ProcessStep';
import CTABanner from '../components/home/CTABanner';
import { services } from '../data/services';

const service = services.find(s => s.slug === 'construction')!;

const constructionTypes = [
  {
    title: 'Luxury Villa Construction',
    description: 'Bespoke villa builds from foundation to final handover. Premium finishes, quality materials, and meticulous attention to detail.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
  },
  {
    title: 'Commercial Construction',
    description: 'Hotels, guesthouses, restaurants, and commercial spaces built to hospitality industry standards.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    title: 'Renovation & Extension',
    description: 'Sensitive renovation of heritage properties and modern extensions to existing homes, blending old and new seamlessly.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
  },
];

const Construction: React.FC = () => {
  return (
    <>
      <title>Construction — Paradise Global Leisures</title>

      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')` }} />
        <div className="relative container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-gold-400">Home</Link><span>/</span>
            <Link to="/services" className="hover:text-gold-400">Services</Link><span>/</span>
            <span className="text-gold-400">Construction</span>
          </nav>
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Construction Services</h1>
          <div className="gold-divider-left" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl">
            From foundations to final handover, we deliver premium construction projects that stand the test of time — on budget and on schedule.
          </p>
        </div>
      </div>

      {/* Construction Process */}
      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Process"
            title="Building Your Dream, Step by Step"
            subtitle="A rigorous 7-stage construction process ensures your project is delivered to the highest standards."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-14">
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
      </section>

      {/* Construction Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What We Build"
            title="Construction Expertise"
            subtitle="We have extensive experience across residential, commercial, and heritage construction projects."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {constructionTypes.map(({ title, description, image }) => (
              <div key={title} className="group rounded-sm overflow-hidden shadow-card card-hover">
                <div className="h-52 overflow-hidden">
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

      {/* Features + CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Build With Us"
                title="Construction You Can Trust"
                subtitle="Our experienced construction team delivers exceptional quality, working with skilled local craftspeople and premium materials."
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
              <div className="mt-8 flex gap-4">
                <Link to="/contact" className="btn-primary inline-flex">
                  Start Your Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '100%', label: 'Client Satisfaction' },
                { value: '10+', label: 'Years Experience' },
                { value: '0', label: 'Projects Over Budget' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-sm p-6 text-center">
                  <p className="font-serif text-gold-400 text-4xl font-bold">{value}</p>
                  <p className="text-white/60 text-sm mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Construction;
