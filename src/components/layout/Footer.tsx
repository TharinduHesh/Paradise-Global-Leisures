import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, ArrowRight, Heart,
  ExternalLink, Globe, MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Paradise Global Leisures" className="h-14 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
              <div>
                <div className="font-serif font-bold text-xl text-white">PARADISE</div>
                <div className="text-gold-400 text-xs tracking-widest">Global Leisures</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your complete property partner in Southern Sri Lanka. From plan approvals to construction, real estate, and management — we guide your entire property journey.
            </p>
            <div className="flex gap-3">
              {[
                { icon: ExternalLink, href: '#', label: 'LinkedIn' },
                { icon: Globe, href: '#', label: 'Website' },
                { icon: MessageCircle, href: 'https://wa.me/94770000000', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-white font-semibold text-lg mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Plan Approvals', href: '/services/plan-approvals' },
                { label: 'Real Estate', href: '/properties' },
                { label: 'Property Management', href: '/services/property-management' },
                { label: 'Legal Consultation', href: '/services/legal-consultation' },
                { label: 'Architectural Support', href: '/services/architectural-support' },
                { label: 'Construction', href: '/services/construction' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="flex items-center gap-2 text-white/60 text-sm hover:text-gold-400 transition-colors duration-200 group"
                  >
                    <ArrowRight size={12} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-serif text-white font-semibold text-lg mb-5">Destinations</h4>
            <ul className="space-y-2.5">
              {[
                'Galle', 'Unawatuna', 'Weligama', 'Mirissa',
                'Hiriketiya', 'Tangalle', 'Matara', 'Dikwella'
              ].map((dest) => (
                <li key={dest}>
                  <Link
                    to={`/destinations`}
                    className="flex items-center gap-2 text-white/60 text-sm hover:text-gold-400 transition-colors duration-200 group"
                  >
                    <MapPin size={12} className="text-gold-500" />
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white font-semibold text-lg mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Paradise Global Leisures (PVT) LTD<br />
                  Habaraduwa, Koggala,<br />
                  Southern Province, Sri Lanka
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="tel:+94770000000" className="text-white/60 hover:text-gold-400 transition-colors block">+94 77 000 0000</a>
                  <a href="tel:+94912000000" className="text-white/60 hover:text-gold-400 transition-colors block">+94 91 200 0000</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@paradisegloballeiures.com" className="text-white/60 text-sm hover:text-gold-400 transition-colors">
                  info@paradisegloballeisures.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary text-sm px-5 py-2.5 w-full justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Bottom Bar */}
      <div className="container-custom py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-sm">
          <p>© {currentYear} Paradise Global Leisures (PVT) LTD. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={12} className="text-gold-400 mx-1 fill-current" />
            <span>in Sri Lanka</span>
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
