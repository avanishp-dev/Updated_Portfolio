import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkView } from './components/WorkView';
import { AboutView } from './components/AboutView';
import { DevStatsView } from './components/DevStatsView';
import { ProjectCard } from './components/ProjectCard';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { DoodleUnderline, DoodleSparkle, DoodleSmiley, DoodleHeart } from './components/DoodleDecorations';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'work' | 'about' | 'stats'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [fullColorMode, setFullColorMode] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Sync hash with tabs
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'work', 'about', 'stats'].includes(hash)) {
        setActiveTab(hash as any);
      } else if (hash.startsWith('project-')) {
        const slug = hash.replace('project-', '');
        const p = PROJECTS.find((proj) => proj.slug === slug);
        if (p) setSelectedProject(p);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab: 'home' | 'work' | 'about' | 'stats') => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `project-${project.slug}`;
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.location.hash = activeTab;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans flex flex-col justify-between bg-notebook-dots ${
        fullColorMode
          ? 'bg-[#FCFCFA] text-[#0F172A]'
          : 'bg-[#FAFAFA] text-[#111111]'
      }`}
    >
      <div>
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          fullColorMode={fullColorMode}
          setFullColorMode={setFullColorMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Tab 1: HOME */}
        {activeTab === 'home' && (
          <main>
            {/* Hero Section */}
            <Hero
              fullColorMode={fullColorMode}
              setFullColorMode={setFullColorMode}
              onExploreWork={() => {
                const el = document.getElementById('featured-projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Featured Projects Grid on Home */}
            <section id="featured-projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDD657]" />
                    <span>Selected Works</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight font-sans">
                    Projects
                  </h2>
                </div>

                <button
                  onClick={() => handleTabChange('work')}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-black"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {PROJECTS.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={handleSelectProject}
                    fullColorMode={fullColorMode}
                    index={index}
                  />
                ))}
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => handleTabChange('work')}
                  className="px-6 py-3 rounded-full bg-white border border-black/15 text-sm font-bold hover:border-black hover:shadow-[3px_3px_0px_#000] transition-all"
                >
                  Explore Complete Case Studies &rarr;
                </button>
              </div>
            </section>

            {/* About Teaser Banner on Home */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12 overflow-hidden">
              {/* Fun Stats Marquee */}
              <div className="relative w-full overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="animate-marquee flex gap-4 pr-4">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-4">
                      {[
                        { value: '3+', label: 'years coding' },
                        { value: '15+', label: 'projects built' },
                        { value: '3', label: 'internships' },
                        { value: 'Top 45', label: 'in SIH \'26' },
                        { value: '∞', label: 'curious questions', highlight: true }
                      ].map((stat, idx) => {
                        const rotations = ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-3'];
                        const rot = rotations[idx % rotations.length];
                        return (
                          <div
                            key={`${i}-${idx}`}
                            className={`w-40 h-36 flex flex-col justify-end p-6 rounded-3xl shrink-0 border-2 border-black transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-0 hover:z-20 cursor-default ${rot} ${
                              stat.highlight
                                ? 'bg-[#E95755] text-white shadow-[6px_6px_0px_0px_#000]'
                                : 'bg-white text-black shadow-[6px_6px_0px_0px_#000]'
                            }`}
                          >
                            <span className="font-sans font-extrabold text-4xl tracking-tight leading-none mb-1">
                              {stat.value}
                            </span>
                            <span className={`text-sm ${stat.highlight ? 'text-white font-bold' : 'text-neutral-700 font-bold'}`}>
                              {stat.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
                {/* Gradient Fades for marquee */}
                <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
              </div>

              <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-[5px_5px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="font-doodle text-xl font-bold text-neutral-900 block">
                    Curious about the engineer behind the code? :-)
                  </span>
                  <p className="text-sm text-neutral-600 max-w-lg">
                    From early logic puzzles to optimizing national port software at Paradip Port, building NASA asteroid tracking platforms, and exploring agentic AI.
                  </p>
                </div>

                <button
                  onClick={() => handleTabChange('about')}
                  className="px-5 py-2.5 rounded-full bg-[#FDD657] text-black font-doodle text-base font-bold border border-black shadow-[2px_2px_0px_#000] hover:bg-[#E6B925] transition-colors shrink-0"
                >
                  Read My Story ~
                </button>
              </div>
            </section>
          </main>
        )}

        {/* Tab 2: WORK */}
        {activeTab === 'work' && (
          <main>
            <WorkView
              onSelectProject={handleSelectProject}
              fullColorMode={fullColorMode}
            />
          </main>
        )}

        {/* Tab 3: ABOUT */}
        {activeTab === 'about' && (
          <main>
            <AboutView fullColorMode={fullColorMode} />
          </main>
        )}

        {/* Tab 4: STATS */}
        {activeTab === 'stats' && (
          <main>
            <DevStatsView />
          </main>
        )}
      </div>

      {/* Footer */}
      <Footer onBackToTop={scrollToTop} />

      {/* Case Study Full Modal View */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={handleCloseProject}
          onSelectProject={handleSelectProject}
          fullColorMode={fullColorMode}
        />
      )}

      {/* Resume Popover Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

