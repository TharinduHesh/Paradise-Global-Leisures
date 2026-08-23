import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin, Bed, Bath, Square, ArrowLeft, ArrowRight,
  CheckCircle, MessageCircle, Phone, Waves,
  Home, Calendar
} from 'lucide-react';
import { properties } from '../data/properties';
import Badge from '../components/ui/Badge';

const PropertyDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = properties.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige-50">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-navy-900 mb-4">Property Not Found</h2>
          <p className="text-navy-500 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties" className="btn-primary">Back to Properties</Link>
        </div>
      </div>
    );
  }

  const allImages = property.images && property.images.length > 0
    ? property.images
    : [property.image];

  const formatPrice = (): string => {
    if (property.priceUnit === 'USD') {
      return property.priceType === 'rent'
        ? `$${property.price.toLocaleString()} / ${property.rentPeriod}`
        : `$${property.price.toLocaleString()}`;
    }
    if (property.priceUnit === 'LKR') {
      if (property.price >= 1000000) {
        return `LKR ${(property.price / 1000000).toFixed(1)} Million`;
      }
      return `LKR ${property.price.toLocaleString()}`;
    }
    return `${property.price}`;
  };

  const relatedProperties = properties
    .filter((p) => p.district === property.district && p.id !== property.id)
    .slice(0, 3);

  return (
    <>
      <title>{property.name} — Paradise Global Leisures</title>

      {/* Spacer for fixed navbar */}
      <div className="h-20 bg-navy-900" />

      <section className="bg-beige-50 py-4">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-6">
            <Link to="/" className="hover:text-gold-600">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-gold-600">Properties</Link>
            <span>/</span>
            <span className="text-navy-700 font-medium line-clamp-1">{property.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Images + Details */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-sm shadow-card mb-3 h-80 md:h-[450px]">
                <img
                  src={allImages[activeImage]}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant={property.priceType === 'sale' ? 'navy' : 'gold'} size="md">
                    For {property.priceType === 'sale' ? 'Sale' : 'Rent'}
                  </Badge>
                  {property.isBeachfront && (
                    <Badge variant="green" size="md">
                      <Waves size={12} className="mr-1" /> Beachfront
                    </Badge>
                  )}
                </div>
                {/* Nav arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage(Math.max(0, activeImage - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white shadow-md"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      onClick={() => setActiveImage(Math.min(allImages.length - 1, activeImage + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white shadow-md"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {allImages.length > 1 && (
                <div className="flex gap-2 mb-6 overflow-x-auto">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`flex-shrink-0 w-20 h-16 rounded-sm overflow-hidden border-2 transition-colors ${i === activeImage ? 'border-gold-500' : 'border-transparent'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Property Info */}
              <div className="bg-white rounded-sm shadow-card p-6 mb-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="font-serif text-navy-900 text-2xl md:text-3xl font-bold mb-1">{property.name}</h1>
                    <div className="flex items-center gap-1.5 text-navy-500">
                      <MapPin size={14} className="text-gold-500" />
                      {property.location}, {property.district}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-gold-600 text-2xl md:text-3xl font-bold">{formatPrice()}</p>
                    <Badge variant="beige">{property.propertyType}</Badge>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-beige-200 mb-6">
                  {property.bedrooms > 0 && (
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <Bed size={22} className="text-gold-500" />
                      <p className="font-semibold text-navy-900">{property.bedrooms}</p>
                      <p className="text-navy-500 text-xs">Bedrooms</p>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <Bath size={22} className="text-gold-500" />
                      <p className="font-semibold text-navy-900">{property.bathrooms}</p>
                      <p className="text-navy-500 text-xs">Bathrooms</p>
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <Square size={22} className="text-gold-500" />
                    <p className="font-semibold text-navy-900">{property.landSize} {property.landUnit}</p>
                    <p className="text-navy-500 text-xs">Land Size</p>
                  </div>
                  {property.buildingSize && (
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <Home size={22} className="text-gold-500" />
                      <p className="font-semibold text-navy-900">{property.buildingSize.toLocaleString()} sq ft</p>
                      <p className="text-navy-500 text-xs">Build Size</p>
                    </div>
                  )}
                  {property.yearBuilt && (
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <Calendar size={22} className="text-gold-500" />
                      <p className="font-semibold text-navy-900">{property.yearBuilt}</p>
                      <p className="text-navy-500 text-xs">Year Built</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="font-serif font-semibold text-navy-900 text-xl mb-3">About This Property</h2>
                  <p className="text-navy-600 leading-relaxed">{property.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="font-serif font-semibold text-navy-900 text-xl mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5">
                        <CheckCircle size={16} className="text-gold-500 flex-shrink-0" />
                        <span className="text-navy-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-sm shadow-card p-6 mb-6">
                <h2 className="font-serif font-semibold text-navy-900 text-xl mb-4">Location</h2>
                <div className="h-64 bg-beige-100 rounded-sm flex items-center justify-center border border-beige-200">
                  <div className="text-center">
                    <MapPin size={40} className="text-gold-400 mx-auto mb-3" />
                    <p className="text-navy-600 font-medium">{property.location}, {property.district}</p>
                    <p className="text-navy-400 text-sm mt-1">Contact us for exact location details</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-sm shadow-card p-6 sticky top-24">
                <h3 className="font-serif font-semibold text-navy-900 text-xl mb-2">Enquire About This Property</h3>
                <p className="text-gold-600 font-bold text-xl mb-5">{formatPrice()}</p>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp"
                    className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  />
                  <textarea
                    rows={4}
                    placeholder={`I'm interested in ${property.name}. Please contact me with more details.`}
                    className="w-full border border-beige-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 resize-none"
                  />
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Enquiry <ArrowRight size={16} />
                  </button>
                </form>

                <div className="flex gap-3 mt-4">
                  <a
                    href={`https://wa.me/94770000000?text=I'm interested in ${encodeURIComponent(property.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-sm hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                  <a
                    href="tel:+94770000000"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-sm hover:bg-navy-800 transition-colors"
                  >
                    <Phone size={15} /> Call Us
                  </a>
                </div>

                <div className="mt-6 pt-5 border-t border-beige-200">
                  <p className="text-navy-500 text-xs text-center">
                    Listed by Paradise Global Leisures (PVT) LTD
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Properties */}
          {relatedProperties.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-navy-900 text-2xl font-bold mb-6">
                More Properties in {property.district}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProperties.map((p) => (
                  <div key={p.id} className="bg-white rounded-sm shadow-card overflow-hidden card-hover border border-beige-200">
                    <div className="h-44 overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-semibold text-navy-900 mb-1 line-clamp-1">{p.name}</h3>
                      <p className="text-gold-600 font-bold text-lg mb-3">
                        {p.priceUnit === 'USD' ? '$' : 'LKR '}{p.price.toLocaleString()}
                      </p>
                      <Link to={`/properties/${p.slug}`} className="btn-navy text-sm py-2 w-full justify-center">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;
