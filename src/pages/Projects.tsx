import React, { useState } from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import Badge from '../components/ui/Badge';
import CTABanner from '../components/home/CTABanner';
import { projects } from '../data/services';
import type { Project } from '../types';

type FilterType = 'all' | 'completed' | 'ongoing' | 'upcoming';

const statusBadge: Record<string, 'gold' | 'green' | 'beige'> = {
  completed: 'green',
  ongoing: 'gold',
  upcoming: 'beige',
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = filter === 'all' ? projects : projects.filter(p => p.status === filter);

  return (
    <>
      <title>Projects — Paradise Global Leisures</title>

      <div className="relative pt-32 pb-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')` }} />
        <div className="relative container-custom text-center">
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-3">Our Work</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4">Portfolio & Projects</h1>
          <div className="gold-divider" />
          <p className="text-white/70 text-lg mt-5 max-w-2xl mx-auto">
            A showcase of our completed, ongoing, and upcoming projects across Sri Lanka's Southern Coast.
          </p>
        </div>
      </div>

      <section className="section-padding bg-beige-50">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {(['all', 'completed', 'ongoing', 'upcoming'] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-sm text-sm font-semibold capitalize transition-all ${filter === f ? 'bg-navy-900 text-white shadow-navy' : 'bg-white border border-beige-200 text-navy-600 hover:border-gold-300'}`}
              >
                {f === 'all' ? 'All Projects' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project: Project) => (
              <div key={project.id} className="group bg-white rounded-sm shadow-card card-hover overflow-hidden border border-beige-200">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant={statusBadge[project.status]} size="md">
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gold-600 text-xs uppercase tracking-widest font-medium mb-2">{project.type}</p>
                  <h3 className="font-serif font-semibold text-navy-900 text-xl mb-2 group-hover:text-gold-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-navy-500 text-xs mb-3">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-gold-500" />{project.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-gold-500" />{project.year}</span>
                  </div>
                  <p className="text-navy-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  {project.area && (
                    <div className="flex items-center gap-2 text-sm text-navy-600 pt-4 border-t border-beige-200">
                      <CheckCircle size={14} className="text-gold-500" />
                      <span>{project.area}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Projects;
