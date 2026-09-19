import React, { useState } from 'react';
import { Mail, Linkedin, Palette, FileText, Menu, X, Sparkles, Github } from 'lucide-react';
import { DoodleSmiley } from './DoodleDecorations';
import { USER_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeTab: 'home' | 'work' | 'about' | 'stats';
  setActiveTab: (tab: 'home' | 'work' | 'about' | 'stats') => void;
  fullColorMode: boolean;
  setFullColorMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  fullColorMode,
  setFullColorMode,
  onOpenResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  interface NavLinkItem {
    id: 'home' | 'work' | 'about' | 'stats';
    label: string;
    badge?: string;
  }

  const navLinks: NavLinkItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'stats', label: 'Dev Stats', badge: 'Live!' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-black/5 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand & Identity */}
        <button
          onClick={() => setActiveTab('home')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-black/10 shadow-sm transition-transform group-hover:scale-105 group-hover:rotate-3">
            <img
              src="/avatar.jpg"
              alt="Avanish Padhy Avatar"
              className="w-10 h-10 object-cover rounded-xl"
            />
            {fullColorMode && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FDD657] border border-black rounded-full animate-ping" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-doodle text-xl tracking-tight text-black font-bold">
                {USER_INFO.name}
              </span>
              <DoodleSmiley className="w-4 h-4" />
            </div>
            <p className="text-[12px] font-doodle font-bold tracking-wide text-neutral-500 mt-0.5">
              Full-Stack Developer
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 p-1.5 rounded-full border border-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-black text-white shadow-sm'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-100/70'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isActive ? 'bg-[#FDD657] text-black' : 'bg-[#FAE8AC] text-neutral-800'
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FDD657] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Socials */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Color Mode Interactive Switch */}
          <button
            onClick={() => setFullColorMode((prev) => !prev)}
            title="Toggle Full Color Doodle Mode"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              fullColorMode
                ? 'bg-[#FDD657] text-black border-black shadow-[2px_2px_0px_#000]'
                : 'bg-white text-neutral-600 border-black/10 hover:border-black/30'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="font-doodle text-sm">
              {fullColorMode ? 'Color ON ~' : 'Color Mode'}
            </span>
          </button>

          {/* Resume */}
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-700 bg-white hover:bg-neutral-50 border border-black/10 transition-colors flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-500" />
            <span>Resume</span>
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-1 border-l border-black/10 pl-2">
            <a
              href={USER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors"
              title="Avanish's GitHub (@avanishp-dev)"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${USER_INFO.email}`}
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors"
              title={`Email Avanish (${USER_INFO.email})`}
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={USER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-black transition-colors"
              title="Avanish's LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setFullColorMode((prev) => !prev)}
            className="p-2 rounded-lg bg-neutral-100 text-neutral-700"
            title="Toggle Color"
          >
            <Sparkles className={`w-4 h-4 ${fullColorMode ? 'text-amber-500 fill-amber-400' : ''}`} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-black/10 text-neutral-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-black/10 px-6 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-left text-sm font-medium ${
                  activeTab === link.id
                    ? 'bg-black text-white'
                    : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-semibold px-3 py-2 rounded-lg border border-black/10 flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </button>
            <div className="flex items-center gap-2">
              <a
                href={USER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 text-neutral-700"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${USER_INFO.email}`}
                className="p-2 rounded-full bg-neutral-100 text-neutral-700"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={USER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 text-neutral-700"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
