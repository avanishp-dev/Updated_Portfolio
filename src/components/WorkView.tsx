import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { DoodleUnderline, DoodleSparkle, DoodleArrow, DoodleWeb, DoodleLightning } from './DoodleDecorations';

interface WorkViewProps {
  onSelectProject: (project: Project) => void;
  fullColorMode: boolean;
}

export const WorkView: React.FC<WorkViewProps> = ({
  onSelectProject,
  fullColorMode
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'full-stack', label: 'Full-Stack & APIs' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'agentic-ai', label: 'AI & Automation' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <div className="absolute top-10 right-0 z-0 pointer-events-none hidden md:block">
        <DoodleWeb className="w-24 h-24 opacity-30 rotate-12" />
      </div>
      <div className="absolute top-1/3 -left-10 z-0 pointer-events-none hidden md:block">
        <DoodleArrow className="w-16 h-16 opacity-40 rotate-[160deg] text-[#FDD657]" />
      </div>
      <div className="absolute bottom-20 -right-5 z-0 pointer-events-none hidden md:block">
        <DoodleLightning className="w-14 h-14 opacity-40 -rotate-12" color="#8A63F2" />
      </div>

      {/* Work Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-semibold mb-3">
            <DoodleSparkle className="w-3.5 h-3.5 text-[#81AE64]" />
            <span>Selected Engineering Works</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black font-sans tracking-tight">
            Building with{' '}
            <span className="relative inline-block font-doodle font-bold">
              Precision &amp; Scale
              <span className="absolute -bottom-2 left-0 w-full">
                <DoodleUnderline className="w-full h-3" color="#FDD657" />
              </span>
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-xl font-sans leading-relaxed">
            In-depth projects covering NASA NeoWs live telemetry, autonomous agentic AI governance, enterprise J2EE port systems, client SaaS, and open source.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white border border-black/10 shadow-xs">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-black text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
            fullColorMode={fullColorMode}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
