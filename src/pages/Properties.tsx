import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import PropertyCard from '../components/properties/PropertyCard';
import PropertyFilters from '../components/properties/PropertyFilters';
import { properties } from '../data/properties';
import type { PropertyFilters as FiltersType } from '../types';

const defaultFilters: FiltersType = {
  priceType: 'all',
  location: '',
  propertyType: '',
  minPrice: 0,
  maxPrice: 9999999,
  bedrooms: '',
  isBeachfront: false,
};

const Properties: React.FC = () => {
  const [filters, setFilters] = useState<FiltersType>(defaultFilters);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.priceType !== 'all' && p.priceType !== filters.priceType) return false;
      if (filters.location && !p.location.toLowerCase().includes(filters.location.toLowerCase()) && !p.district.toLowerCase().includes(filters.location.toLowerCase())) return false;
      if (filters.propertyType && p.propertyType !== filters.propertyType) return false;
      if (filters.isBeachfront && !p.isBeachfront) return false;
      if (filters.bedrooms) {
        const min = filters.bedrooms === '5+' ? 5 : Number(filters.bedrooms);
        if (filters.bedrooms === '5+' ? p.bedrooms < 5 : p.bedrooms !== min) return false;
      }
      // Price filter (only for USD properties)
      if (p.priceUnit === 'USD' && p.price > filters.maxPrice) return false;
      return true;
    });
  }, [filters]);

  return (
    <>
      <title>Properties — Paradise Global Leisures</title>

      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')` }} />
        <div className="relative container-custom">
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Discover</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Properties for Sale & Rent</h1>
          <div className="gold-divider-left" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl">
            Browse our curated selection of luxury villas, houses, and land across Sri Lanka's most beautiful coastal destinations.
          </p>
        </div>
      </div>

      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          <PropertyFilters
            filters={filters}
            onChange={setFilters}
            onReset={() => setFilters(defaultFilters)}
          />

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-navy-600 text-sm">
              Showing <span className="font-semibold text-navy-900">{filtered.length}</span> of{' '}
              <span className="font-semibold text-navy-900">{properties.length}</span> properties
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search size={48} className="text-beige-400 mx-auto mb-4" />
              <h3 className="font-serif text-navy-700 text-xl mb-2">No properties found</h3>
              <p className="text-navy-500 text-sm mb-6">Try adjusting your filters to find more properties.</p>
              <button
                onClick={() => setFilters(defaultFilters)}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Properties;
