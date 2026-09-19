import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Lock, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  fullColorMode: boolean;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  fullColorMode,
  index = 0
}) => {
  const getBadgeStyle = (type: Project['statusType']) => {
    switch (type) {
      case 'shipped':
        return 'bg-[#E9FFE3] text-[#1C450E] border-[#81AE64]/50';
      case 'handoff':
        return 'bg-[#FFF2D6] text-[#7A4B00] border-[#E6B925]/50';
      case 'award':
        return 'bg-[#FAE8AC] text-black border-black font-bold';
      case 'concept':
      default:
        return 'bg-white text-neutral-800 border-black/10 font-semibold';
    }
  };

  const bgColors = ['bg-[#FFF8DE]', 'bg-[#E9FFE3]', 'bg-[#EBF3FF]', 'bg-[#FAE8AC]'];
  const shadowColors = ['shadow-[6px_6px_0px_0px_#FDD657]', 'shadow-[6px_6px_0px_0px_#81AE64]', 'shadow-[6px_6px_0px_0px_#98B5FF]', 'shadow-[6px_6px_0px_0px_#FDD657]'];
  const colorIdx = index % bgColors.length;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={() => onSelect(project)}
      className={`group cursor-pointer rounded-3xl border-2 border-black overflow-hidden flex flex-col transition-all duration-300 ${bgColors[colorIdx]} ${shadowColors[colorIdx]}`}
    >
      {/* Visual Cover Asset */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b-2 border-black flex items-center justify-center">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        )}

        {/* NDA or Award Floating Badge */}
        {project.underNda && (
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1.5 rounded-full border border-black/20 flex items-center gap-1.5 shadow-sm">
            <Lock className="w-3 h-3 text-[#FDD657]" />
            <span>Under NDA</span>
          </div>
        )}

        {project.externalUrl && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-neutral-800 p-2 rounded-full border border-black/10 shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Header row: Company / Role & Status Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs uppercase tracking-wider font-bold text-neutral-800">
              {project.company}
            </span>

            <span
              className={`text-[11px] px-3 py-1 rounded-full font-bold border-2 ${getBadgeStyle(
                project.statusType
              )}`}
            >
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-black leading-snug tracking-tight font-sans">
            {project.title}
          </h3>

          {/* Subtitle / Summary */}
          <p className="text-sm text-neutral-700 font-medium mt-2 line-clamp-2 leading-relaxed">
            {project.subtitle || project.summary}
          </p>
        </div>

        {/* Footer: Tags & Explore Action */}
        <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white border border-black/10 text-neutral-800 font-bold"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="font-semibold text-black flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>Read Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
