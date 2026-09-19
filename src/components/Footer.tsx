import React from 'react';
import { Mail, Linkedin, ArrowUp, Github } from 'lucide-react';
import { DoodleHeart, DoodleStar, DoodleSparkle } from './DoodleDecorations';
import { USER_INFO } from '../data/portfolioData';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  return (
    <footer className="mt-40 mx-4 sm:mx-8 mb-8 relative group">
      {/* Peeking Cartoon Avatar */}
      <div className="absolute -top-20 sm:-top-24 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-12 z-0 group-hover:-translate-y-12 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col items-center">
        {/* Name Tag */}
        <div className="mb-1 bg-white px-4 py-1.5 rounded-xl border-2 border-black font-doodle text-sm font-bold shadow-[4px_4px_0px_#000] -rotate-3 group-hover:rotate-3 transition-transform duration-500">
          Hey, I'm {USER_INFO.name.split(' ')[0]}! 👋
        </div>
        {/* Cartoon Avatar Box */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-black overflow-hidden bg-[#FDD657] shadow-[4px_4px_0px_#000]">
          {/* Using local avatar image */}
          <img 
            src="/avatar.png"
            alt="Avanish Avatar" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Heavy Doodle Background Block */}
      <div className="absolute inset-0 bg-[#EBF3FF] rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] -rotate-1 group-hover:rotate-0 transition-transform duration-500 z-10" />
      
      <div className="relative py-12 px-6 sm:px-12 flex flex-col xl:flex-row items-center justify-between gap-8 overflow-hidden rounded-3xl z-20">
        
        {/* Background Doodles */}
        <div className="absolute top-4 left-10 opacity-30 animate-pulse hidden sm:block">
          <DoodleStar className="w-12 h-12 text-[#98B5FF]" />
        </div>
        <div className="absolute bottom-4 right-1/4 opacity-40 doodle-swing hidden md:block">
          <DoodleSparkle className="w-10 h-10 text-[#FDD657]" />
        </div>

        {/* Signature Branding */}
        <div className="flex flex-col items-center xl:items-start gap-2 relative z-20 text-center xl:text-left">
          <p className="font-doodle text-2xl sm:text-3xl text-black font-extrabold flex flex-wrap items-center justify-center xl:justify-start gap-2">
            <span>Doodled &amp; coded with passion</span>
            <span className="hidden sm:inline">@</span>
            <span>{USER_INFO.name} 2026</span>
            <DoodleHeart className="w-6 h-6 sm:w-8 sm:h-8 text-[#E95755] animate-bounce" />
          </p>
        </div>

        {/* Links & Contact (Chunky Buttons) */}
        <div className="flex flex-wrap items-center justify-center xl:justify-end gap-3 sm:gap-4 relative z-20">
          <a
            href={USER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-white rounded-xl border-2 border-black font-bold text-black hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_#000] transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href={`mailto:${USER_INFO.email}`}
            className="px-4 py-2.5 bg-white rounded-xl border-2 border-black font-bold text-black hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_#000] transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Email</span>
          </a>

          <a
            href={USER_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-white rounded-xl border-2 border-black font-bold text-black hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_#000] transition-all flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          {/* Back to top (Big Button) */}
          <button
            onClick={onBackToTop}
            className="p-3 sm:p-4 ml-0 sm:ml-2 bg-[#FDD657] rounded-full border-2 border-black hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_#000] transition-all text-black"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </button>
        </div>
      </div>
    </footer>
  );
};
