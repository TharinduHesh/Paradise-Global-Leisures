import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, ArrowRight, Waves, MessageCircle } from 'lucide-react';
import type { Property } from '../../types';
import Badge from '../ui/Badge';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [imgError, setImgError] = useState(false);

  const formatPrice = (property: Property): string => {
    if (property.priceUnit === 'USD') {
      return property.priceType === 'rent'
        ? `$${property.price.toLocaleString()}/${property.rentPeriod}`
        : `$${property.price.toLocaleString()}`;
    }
    if (property.priceUnit === 'LKR') {
      if (property.price >= 1000000) {
        return `LKR ${(property.price / 1000000).toFixed(1)}M`;
      }
      return `LKR ${property.price.toLocaleString()}`;
    }
    return `${property.price}`;
  };

  const fallbackImage = `https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80`;

  return (
    <div className="group bg-white rounded-sm shadow-card card-hover overflow-hidden border border-beige-200">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={imgError ? fallbackImage : property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <Badge variant={property.priceType === 'sale' ? 'navy' : 'gold'}>
            For {property.priceType === 'sale' ? 'Sale' : 'Rent'}
          </Badge>
          {property.isBeachfront && (
            <Badge variant="green">
              <Waves size={10} className="mr-1" /> Beachfront
            </Badge>
          )}
        </div>
        {/* Property Type */}
        <div className="absolute top-3 right-3">
          <Badge variant="beige">{property.propertyType}</Badge>
        </div>
        {/* Status overlay for sold/rented */}
        {property.status !== 'available' && (
          <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center">
            <span className="text-white font-bold text-xl uppercase tracking-widest">
              {property.status}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-gold-600 font-bold text-xl font-serif">{formatPrice(property)}</p>
          </div>
        </div>

        {/* Name */}
        <h3 className="font-serif font-semibold text-navy-900 text-lg mb-1.5 line-clamp-1 group-hover:text-gold-600 transition-colors">
          {property.name}
        </h3>

        {/* Location */}
        <p className="flex items-center gap-1.5 text-navy-500 text-sm mb-4">
          <MapPin size={13} className="text-gold-500 flex-shrink-0" />
          {property.location}{property.district !== property.location ? `, ${property.district}` : ''}
        </p>

        {/* Stats */}
        {(property.bedrooms > 0 || property.landSize > 0) && (
          <div className="flex items-center gap-4 text-sm text-navy-600 pb-4 border-b border-beige-200 mb-4">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1.5">
                <Bed size={14} className="text-gold-500" />
                {property.bedrooms} Bed{property.bedrooms > 1 ? 's' : ''}
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center gap-1.5">
                <Bath size={14} className="text-gold-500" />
                {property.bathrooms} Bath{property.bathrooms > 1 ? 's' : ''}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Square size={14} className="text-gold-500" />
              {property.landSize} {property.landUnit}
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            to={`/properties/${property.slug}`}
            className="flex-1 btn-navy text-sm py-2.5 justify-center"
          >
            View Details <ArrowRight size={14} />
          </Link>
          <a
            href={`https://wa.me/94770000000?text=I'm interested in ${encodeURIComponent(property.name)} in ${property.location}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-md hover:bg-green-600 transition-colors"
            title="Enquire on WhatsApp"
          >
            <MessageCircle size={14} />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
