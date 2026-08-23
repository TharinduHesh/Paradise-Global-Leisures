import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Plan Approvals', href: '/services/plan-approvals' },
      { label: 'Real Estate', href: '/properties' },
      { label: 'Property Management', href: '/services/property-management' },
      { label: 'Legal Consultation', href: '/services/legal-consultation' },
      { label: 'Architectural Support', href: '/services/architectural-support' },
      { label: 'Construction', href: '/services/construction' },
    ],
  },
  { label: 'Properties', href: '/properties' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navBg = isScrolled || !isHome
    ? 'bg-navy-900 shadow-navy'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Paradise Global Leisures"
              className="h-12 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="leading-tight">
              <div className="text-white font-serif font-bold text-lg tracking-wide">PARADISE</div>
              <div className="text-gold-400 text-xs tracking-widest font-medium uppercase">Global Leisures</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-white/90 hover:text-gold-400 px-4 py-2 text-sm font-medium transition-colors duration-200">
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className={`absolute top-full left-0 w-56 bg-navy-900 border border-navy-800 shadow-xl rounded-sm transition-all duration-200 ${activeDropdown === link.label ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className={({ isActive }) =>
                          `block px-4 py-3 text-sm transition-colors duration-200 border-b border-navy-800 last:border-0 ${isActive ? 'text-gold-400 bg-navy-800' : 'text-white/80 hover:text-gold-400 hover:bg-navy-800'}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-gold-400' : 'text-white/90 hover:text-gold-400'}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+94XXXXXXXXX"
              className="hidden md:flex items-center gap-2 text-gold-400 text-sm font-medium hover:text-gold-300 transition-colors"
            >
              <Phone size={15} />
              <span>+94 77 000 0000</span>
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              Get Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white hover:text-gold-400 transition-colors p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-navy-950 transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="container-custom py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  className="flex items-center justify-between w-full text-white/90 px-4 py-3 text-sm font-medium"
                  onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === link.label && (
                  <div className="ml-4 border-l-2 border-gold-500/30 pl-4">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className={({ isActive }) =>
                          `block py-2.5 text-sm transition-colors ${isActive ? 'text-gold-400' : 'text-white/70 hover:text-gold-400'}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'text-gold-400' : 'text-white/90 hover:text-gold-400'}`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
          <div className="pt-4 pb-2 flex flex-col gap-3">
            <a href="tel:+94XXXXXXXXX" className="flex items-center gap-2 text-gold-400 text-sm px-4">
              <Phone size={15} />
              +94 77 000 0000
            </a>
            <Link to="/contact" className="btn-primary mx-4 text-center justify-center">
              Get Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
