import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Network, SearchCheck, LockKeyhole, GraduationCap, Siren } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const cyberServices = [
  {
    icon: SearchCheck,
    title: 'Security Risk Assessments',
    description: 'Identify security gaps, assess business risks, and receive a practical roadmap for improving your security posture.',
  },
  {
    icon: Network,
    title: 'Network & Endpoint Protection',
    description: 'Secure networks, computers, and connected devices against malware, unauthorized access, and emerging attacks.',
  },
  {
    icon: LockKeyhole,
    title: 'Data Protection & Access Control',
    description: 'Protect sensitive business and customer information with secure access controls, backups, and data safeguards.',
  },
  {
    icon: ShieldCheck,
    title: 'Vulnerability Assessments',
    description: 'Discover and prioritize weaknesses in websites, applications, systems, and infrastructure before attackers exploit them.',
  },
  {
    icon: GraduationCap,
    title: 'Security Awareness Training',
    description: 'Equip employees to recognize phishing, social engineering, unsafe practices, and other common cyber threats.',
  },
  {
    icon: Siren,
    title: 'Incident Response Support',
    description: 'Respond quickly to security incidents, contain damage, restore operations, and reduce the risk of recurrence.',
  },
];

const CyberSecurity: React.FC = () => {
  return (
    <>
      <title>Cyber Security Services — Paradise Global Leisures</title>

      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-gold-400">Home</Link><span>/</span>
            <Link to="/services" className="hover:text-gold-400">Services</Link><span>/</span>
            <span className="text-gold-400">Cyber Security</span>
          </nav>
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Protect Your Digital Business</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Cyber Security Services</h1>
          <div className="gold-divider-left" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl">
            Practical cyber security solutions that protect your systems, data, customers, and business operations from evolving digital threats.
          </p>
        </div>
      </div>

      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Digital Protection"
            title="Security Built Around Your Business"
            subtitle="From proactive risk reduction to incident recovery, we help your organization operate securely and confidently."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {cyberServices.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white border border-beige-200 rounded-sm p-7 shadow-card card-hover">
                <div className="w-12 h-12 rounded-md bg-gold-50 border border-gold-200 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-gold-600" />
                </div>
                <h3 className="font-serif font-semibold text-navy-900 text-xl mb-3">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary inline-flex">
              Request a Security Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default CyberSecurity;
