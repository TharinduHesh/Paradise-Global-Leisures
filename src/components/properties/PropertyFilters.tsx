import React from 'react';
import { SlidersHorizontal, X, Waves } from 'lucide-react';
import type { PropertyFilters as FiltersType } from '../../types';

interface PropertyFiltersProps {
  filters: FiltersType;
  onChange: (filters: FiltersType) => void;
  onReset: () => void;
}

const locations = ['All Locations', 'Galle', 'Unawatuna', 'Weligama', 'Mirissa', 'Hiriketiya', 'Tangalle', 'Matara', 'Dikwella'];
const propertyTypes = ['All Types', 'Villa', 'House', 'Land', 'Apartment', 'Commercial', 'Hotel'];
const bedroomOptions = ['Any', '1', '2', '3', '4', '5+'];

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ filters, onChange, onReset }) => {
  const update = (key: keyof FiltersType, value: FiltersType[keyof FiltersType]) => {
    onChange({ ...filters, [key]: value });
  };

  const hasActiveFilters =
    filters.priceType !== 'all' ||
    filters.location !== '' ||
    filters.propertyType !== '' ||
    filters.bedrooms !== '' ||
    filters.isBeachfront;

  return (
    <div className="bg-white border border-beige-200 rounded-sm shadow-card p-5 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-navy-900 font-semibold">
          <SlidersHorizontal size={18} className="text-gold-500" />
          Filter Properties
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 transition-colors"
          >
            <X size={14} /> Clear Filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Buy / Rent */}
        <div>
          <label className="block text-xs font-medium text-navy-500 mb-1.5 uppercase tracking-wide">Type</label>
          <div className="flex rounded-sm overflow-hidden border border-beige-300">
            {(['all', 'sale', 'rent'] as const).map((type) => (
              <button
                key={type}
                onClick={() => update('priceType', type)}
                className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${filters.priceType === type ? 'bg-navy-900 text-white' : 'bg-white text-navy-500 hover:bg-beige-100'}`}
              >
                {type === 'all' ? 'All' : type === 'sale' ? 'Buy' : 'Rent'}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-medium text-navy-500 mb-1.5 uppercase tracking-wide">Location</label>
          <select
            value={filters.location}
            onChange={(e) => update('location', e.target.value === 'All Locations' ? '' : e.target.value)}
            className="w-full border border-beige-300 rounded-sm px-3 py-2.5 text-sm text-navy-800 bg-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc === 'All Locations' ? '' : loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-xs font-medium text-navy-500 mb-1.5 uppercase tracking-wide">Property Type</label>
          <select
            value={filters.propertyType}
            onChange={(e) => update('propertyType', e.target.value === 'All Types' ? '' : e.target.value)}
            className="w-full border border-beige-300 rounded-sm px-3 py-2.5 text-sm text-navy-800 bg-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type === 'All Types' ? '' : type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-xs font-medium text-navy-500 mb-1.5 uppercase tracking-wide">Max Price (USD)</label>
          <select
            value={filters.maxPrice}
            onChange={(e) => update('maxPrice', Number(e.target.value))}
            className="w-full border border-beige-300 rounded-sm px-3 py-2.5 text-sm text-navy-800 bg-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
          >
            <option value={9999999}>Any Price</option>
            <option value={100000}>Under $100K</option>
            <option value={200000}>Under $200K</option>
            <option value={350000}>Under $350K</option>
            <option value={500000}>Under $500K</option>
            <option value={1000000}>Under $1M</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-xs font-medium text-navy-500 mb-1.5 uppercase tracking-wide">Bedrooms</label>
          <select
            value={filters.bedrooms}
            onChange={(e) => update('bedrooms', e.target.value)}
            className="w-full border border-beige-300 rounded-sm px-3 py-2.5 text-sm text-navy-800 bg-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
          >
            {bedroomOptions.map((opt) => (
              <option key={opt} value={opt === 'Any' ? '' : opt}>{opt === 'Any' ? 'Any Bedrooms' : `${opt} Bed`}</option>
            ))}
          </select>
        </div>

        {/* Beachfront toggle */}
        <div>
          <label className="block text-xs font-medium text-navy-500 mb-1.5 uppercase tracking-wide">Beachfront</label>
          <button
            onClick={() => update('isBeachfront', !filters.isBeachfront)}
            className={`w-full flex items-center justify-center gap-2 py-2.5 border rounded-sm text-sm font-semibold transition-colors ${filters.isBeachfront ? 'border-gold-500 bg-gold-50 text-gold-700' : 'border-beige-300 bg-white text-navy-500 hover:border-gold-300'}`}
          >
            <Waves size={14} />
            {filters.isBeachfront ? 'Beachfront ✓' : 'Beachfront'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
