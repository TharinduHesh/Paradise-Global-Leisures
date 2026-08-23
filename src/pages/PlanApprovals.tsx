import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ProcessStep from '../components/ui/ProcessStep';
import CTABanner from '../components/home/CTABanner';
import { services } from '../data/services';

const service = services.find(s => s.slug === 'plan-approvals')!;

const authorities = [
  { name: 'Local Authority (LA)', desc: 'Municipal / Pradeshiya Sabha approvals' },
  { name: 'UDA', desc: 'Urban Development Authority' },
  { name: 'NHDA', desc: 'National Housing Development Authority' },
  { name: 'CZM', desc: 'Coastal Zone Management Authority' },
  { name: 'CEA', desc: 'Central Environmental Authority' },
  { name: 'BOI', desc: 'Board of Investment (for larger projects)' },
];

const PlanApprovals: React.FC = () => {
  return (
    <>
      <title>Plan Approvals — Paradise Global Leisures</title>

      {/* Header */}
      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')` }} />
        <div className="relative container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-gold-400">Services</Link>
            <span>/</span>
            <span className="text-gold-400">Plan Approvals</span>
          </nav>
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Plan Approvals</h1>
          <div className="gold-divider-left" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl">
            Navigating Sri Lanka's planning approval process can be complex. Our specialists manage every step so your project starts on solid legal ground.
          </p>
        </div>
      </div>

      {/* Process */}
      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Approach"
            title="The Plan Approval Process"
            subtitle="We handle every step of the approval journey with expert knowledge and established authority relationships."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">
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

      {/* Authorities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Expertise"
                title="Authorities We Work With"
                subtitle="We have established working relationships with all relevant planning and regulatory authorities in Sri Lanka."
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {authorities.map(({ name, desc }) => (
                  <div key={name} className="flex items-start gap-3 p-4 bg-beige-50 rounded-sm border border-beige-200">
                    <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">{name}</p>
                      <p className="text-navy-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                eyebrow="What We Handle"
                title="Our Plan Approval Services"
              />
              <div className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <p className="text-navy-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary inline-flex">
                  Get Started Today <ArrowRight size={16} />
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

export default PlanApprovals;
