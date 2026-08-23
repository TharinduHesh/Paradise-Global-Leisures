import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle, Clock } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const serviceOptions = [
  'Select a Service',
  'Plan Approvals',
  'Real Estate — Buy',
  'Real Estate — Sell',
  'Property Management',
  'Legal Consultation',
  'Architectural Support',
  'Construction',
  'General Enquiry',
];

const locationOptions = [
  'Select Location',
  'Galle',
  'Unawatuna',
  'Weligama',
  'Mirissa',
  'Hiriketiya',
  'Tangalle',
  'Matara',
  'Dikwella',
  'Other / Not Sure',
];

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', propertyLocation: '', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <title>Contact Us — Paradise Global Leisures</title>

      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')` }} />
        <div className="relative container-custom text-center">
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="gold-divider" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl mx-auto">
            Whether you're buying, selling, building, or looking for expert advice — our team is here to help you take the next step.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Contact Information"
                title="Let's Start a Conversation"
              />

              <div className="space-y-5 mt-6">
                {/* Address */}
                <div className="flex gap-4 bg-white p-5 rounded-sm shadow-card border border-beige-200">
                  <div className="w-10 h-10 rounded-sm bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm mb-1">Our Office</p>
                    <p className="text-navy-500 text-sm leading-relaxed">
                      Paradise Global Leisures (PVT) LTD<br />
                      Habaraduwa, Koggala<br />
                      Southern Province, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 bg-white p-5 rounded-sm shadow-card border border-beige-200">
                  <div className="w-10 h-10 rounded-sm bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm mb-1">Phone</p>
                    <a href="tel:+94770000000" className="text-navy-500 text-sm block hover:text-gold-600 transition-colors">+94 77 000 0000</a>
                    <a href="tel:+94912000000" className="text-navy-500 text-sm block hover:text-gold-600 transition-colors">+94 91 200 0000</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 bg-white p-5 rounded-sm shadow-card border border-beige-200">
                  <div className="w-10 h-10 rounded-sm bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm mb-1">Email</p>
                    <a href="mailto:info@paradisegloballeisures.com" className="text-navy-500 text-sm hover:text-gold-600 transition-colors">info@paradisegloballeisures.com</a>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/94770000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 bg-green-50 p-5 rounded-sm shadow-card border border-green-200 hover:border-green-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-sm bg-green-100 border border-green-300 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-800 text-sm mb-1">WhatsApp</p>
                    <p className="text-green-600 text-sm group-hover:underline">Chat with us instantly</p>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex gap-4 bg-white p-5 rounded-sm shadow-card border border-beige-200">
                  <div className="w-10 h-10 rounded-sm bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm mb-1">Office Hours</p>
                    <p className="text-navy-500 text-sm">Mon–Fri: 9:00 AM – 6:00 PM</p>
                    <p className="text-navy-500 text-sm">Sat: 9:00 AM – 1:00 PM</p>
                    <p className="text-navy-400 text-xs mt-1">Sri Lanka Time (IST+0:30)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-sm shadow-card border border-beige-200 p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="font-serif text-navy-900 text-2xl font-bold mb-3">Thank You!</h3>
                    <p className="text-navy-500 text-base max-w-md mb-8">
                      Your enquiry has been received. A member of our team will be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', propertyLocation: '', message: '' }); }}
                      className="btn-primary"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-navy-900 text-2xl font-bold mb-2">Send Us an Enquiry</h3>
                    <p className="text-navy-500 text-sm mb-6">Fill in the form below and we'll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-navy-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                          <input
                            required
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm text-navy-800 placeholder-navy-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-navy-600 mb-1.5 uppercase tracking-wide">Email Address *</label>
                          <input
                            required
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm text-navy-800 placeholder-navy-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-navy-600 mb-1.5 uppercase tracking-wide">Phone / WhatsApp</label>
                          <input
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+44 7700 000000"
                            className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm text-navy-800 placeholder-navy-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-navy-600 mb-1.5 uppercase tracking-wide">Service Required</label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm text-navy-800 bg-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                          >
                            {serviceOptions.map(o => <option key={o}>{o}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-navy-600 mb-1.5 uppercase tracking-wide">Property Location of Interest</label>
                        <select
                          name="propertyLocation"
                          value={form.propertyLocation}
                          onChange={handleChange}
                          className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm text-navy-800 bg-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                        >
                          {locationOptions.map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-navy-600 mb-1.5 uppercase tracking-wide">Message *</label>
                        <textarea
                          required
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements, timeline, and any specific questions you have..."
                          className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm text-navy-800 placeholder-navy-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors resize-none"
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                        <Send size={18} /> Send Enquiry
                      </button>

                      <p className="text-navy-400 text-xs text-center">
                        By submitting this form, you agree to our privacy policy. We'll never share your details.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12">
            <div className="bg-white rounded-sm shadow-card border border-beige-200 overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-beige-100 to-beige-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={50} className="text-gold-400 mx-auto mb-3" />
                  <p className="font-serif text-navy-800 text-xl font-semibold">Habaraduwa, Koggala</p>
                  <p className="text-navy-500 text-sm mt-1">Southern Province, Sri Lanka</p>
                  <a
                    href="https://maps.google.com/?q=Habaraduwa+Koggala+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 btn-primary inline-flex text-sm"
                  >
                    <MapPin size={14} /> View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
