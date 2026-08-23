import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Shield, FileText, Users } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const legalServices = [
  {
    icon: FileText,
    title: 'Title Deed Verification',
    description: 'Comprehensive due diligence on property title to identify any encumbrances, disputes, or irregularities before purchase.',
  },
  {
    icon: Scale,
    title: 'Sale & Purchase Agreements',
    description: 'Professionally drafted sale and purchase agreements that protect your interests and ensure legal compliance.',
  },
  {
    icon: Shield,
    title: 'Foreign Ownership Advisory',
    description: 'Expert guidance on legal structures for foreign ownership, including company registration and lease arrangements.',
  },
  {
    icon: Users,
    title: 'Lease Agreement Drafting',
    description: 'Comprehensive long-term lease agreements for foreign buyers and investors wanting secure occupation rights.',
  },
];

const faqs = [
  {
    q: 'Can foreigners buy property in Sri Lanka?',
    a: 'Foreign nationals cannot directly own freehold land in Sri Lanka under the Land (Restrictions on Alienation) Act, but can own apartments above ground floor. There are several legal structures available, including company ownership (60%+ Sri Lankan shareholding required) and long-term leases up to 99 years. We provide expert guidance on the best structure for your situation.',
  },
  {
    q: 'What is a land deed and why is title verification important?',
    a: 'A land deed (title deed) is the legal document establishing ownership. Title verification is critical to ensure the property has clear, undisputed ownership with no encumbrances, mortgages, or caveats. We conduct thorough searches at the Land Registry on your behalf.',
  },
  {
    q: 'How long does a property transaction typically take?',
    a: 'Depending on the complexity of the title and whether it\'s a cash or financed purchase, most property transactions in Sri Lanka take 4–12 weeks from agreement to completion.',
  },
  {
    q: 'What taxes and fees apply to property transactions?',
    a: 'Stamp duty (typically 4% for freehold transfers), notary fees, land registration fees, and capital gains tax may apply. We provide a full cost breakdown before any commitment is made.',
  },
];

const LegalConsultation: React.FC = () => {
  return (
    <>
      <title>Legal Consultation — Paradise Global Leisures</title>

      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')` }} />
        <div className="relative container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-gold-400">Home</Link><span>/</span>
            <Link to="/services" className="hover:text-gold-400">Services</Link><span>/</span>
            <span className="text-gold-400">Legal Consultation</span>
          </nav>
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Legal Advice & Consultation</h1>
          <div className="gold-divider-left" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl">
            Property law in Sri Lanka can be complex — especially for foreign buyers. Our legal team ensures your investment is fully protected.
          </p>
        </div>
      </div>

      {/* Legal Services */}
      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Legal Services"
            title="Protecting Your Property Investment"
            subtitle="From due diligence to final completion, our legal experts safeguard your interests at every step."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {legalServices.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white border border-beige-200 rounded-sm p-7 shadow-card card-hover">
                <Icon size={30} className="text-gold-500 mb-4" />
                <h3 className="font-serif font-semibold text-navy-900 text-xl mb-3">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            eyebrow="Common Questions"
            title="Legal FAQs for Property Buyers"
            subtitle="Answers to the most common legal questions we receive from property buyers in Sri Lanka."
            centered
          />
          <div className="mt-10 space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-beige-50 border border-beige-200 rounded-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-navy-900 font-semibold text-sm">
                  {q}
                  <span className="text-gold-500 text-xl group-open:rotate-45 transition-transform ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-navy-600 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary inline-flex">
              Speak to Our Legal Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default LegalConsultation;
