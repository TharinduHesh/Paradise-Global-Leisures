import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Globe, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/home/CTABanner';

const teamMembers = [
  {
    name: 'Managing Director',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0dc05888d69a?w=400&q=80',
    bio: 'Over 15 years in Sri Lankan property development and international real estate investment.',
  },
  {
    name: 'Head of Real Estate',
    role: 'Senior Property Consultant',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    bio: 'Specialist in coastal property acquisitions with an extensive network across Southern Sri Lanka.',
  },
  {
    name: 'Chief Architect',
    role: 'Lead Architect & Designer',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400&q=80',
    bio: 'Chartered architect with expertise in tropical luxury design and sustainable construction.',
  },
  {
    name: 'Legal Director',
    role: 'Property Law Specialist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    bio: 'Attorney-at-law with 12+ years specialising in property law, title deeds, and foreign investment.',
  },
];

const values = [
  { icon: Award, title: 'Excellence', description: 'We pursue excellence in every project, holding ourselves to the highest standards of quality and professionalism.' },
  { icon: Globe, title: 'Global Perspective', description: 'International thinking combined with deep local expertise — the best of both worlds for our clients.' },
  { icon: Users, title: 'Client-First', description: 'Your success is our success. We build long-term relationships built on trust, transparency, and results.' },
  { icon: TrendingUp, title: 'Innovation', description: 'We continuously evolve our services and technology to stay ahead in the market for your benefit.' },
];

const About: React.FC = () => {
  return (
    <>
      <title>About Us — Paradise Global Leisures</title>

      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526089828737-46cdda0c2d4f?w=1920&q=80')` }} />
        <div className="relative container-custom text-center">
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Paradise Global Leisures</h1>
          <div className="gold-divider" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl mx-auto">
            Sri Lanka's most trusted full-service property partner, serving clients from around the world.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="Building Dreams on Sri Lanka's Southern Coast"
                subtitle="Founded over a decade ago, Paradise Global Leisures was born from a passion for Sri Lanka's extraordinary coastal beauty and a vision to make property ownership accessible, transparent, and rewarding for international and local clients alike."
              />
              <div className="mt-8 space-y-4">
                {[
                  'Pioneering transparent, end-to-end property services in Southern Sri Lanka',
                  'Successfully completed 150+ property transactions and development projects',
                  'Managing a portfolio of premium holiday rental properties across 8 destinations',
                  'Trusted by clients from 25+ countries to manage their Sri Lankan investments',
                ].map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <p className="text-navy-600 text-sm">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <Link to="/services" className="btn-primary">Our Services <ArrowRight size={16} /></Link>
                <Link to="/contact" className="btn-navy">Contact Us</Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Sri Lanka coastal property"
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white rounded-sm p-6 shadow-xl">
                <p className="font-serif text-4xl font-bold text-gold-400">2014</p>
                <p className="text-white/70 text-sm">Established in Galle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="What Drives Us"
            title="Our Core Values"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white p-6 rounded-sm shadow-card border border-beige-200 text-center group hover:border-gold-300 transition-colors">
                <div className="w-14 h-14 rounded-full bg-gold-50 border-2 border-gold-200 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-100 transition-colors">
                  <Icon size={24} className="text-gold-600" />
                </div>
                <h3 className="font-serif font-semibold text-navy-900 text-lg mb-3">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our People"
            title="Meet the Expert Team"
            subtitle="Our diverse team of property professionals brings together decades of combined expertise in real estate, law, architecture, and construction."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative overflow-hidden rounded-sm mb-4 shadow-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-serif font-semibold text-navy-900 text-lg">{member.name}</h3>
                <p className="text-gold-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-navy-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '150+', label: 'Properties Managed' },
              { value: '$50M+', label: 'Transactions Completed' },
              { value: '25+', label: 'Countries Served' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-gold-400 text-4xl md:text-5xl font-bold">{value}</p>
                <p className="text-white/60 text-sm mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default About;
