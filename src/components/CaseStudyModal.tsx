import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Lock, CheckCircle2, ChevronRight, Mail, Sparkles, Github } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS, USER_INFO } from '../data/portfolioData';
import { DoodleUnderline, DoodleSparkle } from './DoodleDecorations';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  fullColorMode: boolean;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  fullColorMode
}) => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const otherProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  const sections = [
    { id: 'overview', label: 'Overview' },
    ...(project.context ? [{ id: 'context', label: 'Context' }] : []),
    ...(project.keyInsights ? [{ id: 'insights', label: 'Insights' }] : []),
    ...(project.problem ? [{ id: 'problem', label: 'Problem' }] : []),
    ...(project.solutions ? [{ id: 'solutions', label: 'Solutions' }] : []),
    ...(project.outcome ? [{ id: 'outcome', label: 'Outcome' }] : [])
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#FAFAFA] overflow-y-auto bg-notebook-dots"
      >
        {/* Sticky Top Header Bar */}
        <div className="sticky top-0 z-30 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-black/10 px-4 sm:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-sm font-semibold hover:border-black hover:shadow-[2px_2px_0px_#000] transition-all"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back Home</span>
          </button>

          {/* Floating Section Pills */}
          <nav className="hidden md:flex items-center gap-1 bg-white p-1 rounded-full border border-black/10 text-xs font-medium">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeSection === sec.id
                    ? 'bg-black text-white font-semibold'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black text-white hover:bg-neutral-800 transition-colors"
              >
                {project.externalUrl.includes('github.com') ? (
                  <>
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                  </>
                ) : (
                  <>
                    <span>Live Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </>
                )}
              </a>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-600"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Case Study Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
          {/* Hero Header */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              <span>{project.company}</span>
              <span>•</span>
              <span className="text-black">{project.role}</span>
              <span>•</span>
              <span className="text-[#81AE64]">{project.status}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-[1.15] font-sans">
              {project.title}
            </h1>

            {project.hookQuestion && (
              <p className="font-doodle text-xl sm:text-2xl text-neutral-700 mt-4 leading-relaxed font-semibold">
                &ldquo;{project.hookQuestion}&rdquo;
              </p>
            )}
          </div>

          {/* Metadata Block (Matching Framer Portfolio Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-900 text-white border-2 border-black shadow-[6px_6px_0px_#FDD657]">
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">Timeline</p>
              <p className="text-sm font-semibold text-white mt-1">{project.timeline}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">Role</p>
              <p className="text-sm font-semibold text-white mt-1">{project.role}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">Status</p>
              <p className="text-sm font-semibold text-white mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#81AE64]" />
                {project.status}
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">Team</p>
              <p className="text-sm font-semibold text-white mt-1">{project.team[0]}</p>
            </div>
          </div>

          {/* Tools List */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-bold text-neutral-400 mr-2">Tools:</span>
            {project.tools.map((t, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-white border border-black/10 text-neutral-700 font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Main Cover Visual */}
          <div className="rounded-2xl border border-black/10 bg-neutral-950 overflow-hidden shadow-xs">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                autoPlay
                muted
                loop
                controls
                className="w-full h-auto max-h-[600px] object-cover mx-auto"
              />
            ) : (
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-auto max-h-[600px] object-cover mx-auto"
                referrerPolicy="no-referrer"
              />
            )}
          </div>

          {/* NDA Banner If Under NDA */}
          {project.underNda && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF8DE] border border-[#E6B925] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-bold text-black uppercase tracking-wider">
                  <Lock className="w-4 h-4 text-amber-700" />
                  <span>Under NDA</span>
                </div>
                <p className="text-sm text-neutral-800 max-w-xl">
                  {project.ndaMessage ||
                    "This project is still in development or internal, so detailed proprietary screens are confidential for now. I'm always happy to talk through my process on a call!"}
                </p>
              </div>

              <a
                href={`mailto:${USER_INFO.email}?subject=Inquiring about ${project.title}`}
                className="px-4 py-2 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Shoot me an email</span>
              </a>
            </div>
          )}

          {/* Overview Section */}
          <div id="overview" className="space-y-4 pt-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-black font-doodle">Overview</h2>
              <DoodleSparkle className="w-5 h-5 text-[#FDD657]" />
            </div>
            <p className="text-lg sm:text-xl text-neutral-800 leading-relaxed font-sans">
              {project.overview}
            </p>
          </div>

          {/* Context Section */}
          {project.context && (
            <div id="context" className="space-y-4 pt-6 border-t border-neutral-200">
              <h2 className="text-2xl font-bold text-black font-doodle">Context</h2>
              <h3 className="text-lg font-bold text-neutral-900 font-sans">
                {project.context.headline}
              </h3>
              <div className="space-y-3 text-neutral-700 leading-relaxed">
                {project.context.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {/* Market Analysis / Competitors */}
          {project.marketAnalysis && (
            <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-3">
              <h3 className="text-base font-bold text-black uppercase tracking-wider">
                {project.marketAnalysis.headline}
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {project.marketAnalysis.body}
              </p>
              {project.marketAnalysis.points && (
                <div className="grid sm:grid-cols-3 gap-3 pt-2">
                  {project.marketAnalysis.points.map((pt, i) => (
                    <div key={i} className="p-3 rounded-xl bg-neutral-50 border border-black/5 text-xs text-neutral-700">
                      {pt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Key Insights */}
          {project.keyInsights && (
            <div id="insights" className="space-y-4 pt-6 border-t border-neutral-200">
              <h2 className="text-2xl font-bold text-black font-doodle">Key Insights</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.keyInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border-2 border-black relative overflow-hidden shadow-[4px_4px_0px_#000] ${
                      idx % 2 === 0 ? 'bg-[#FFF8DE]' : 'bg-[#EBF3FF]'
                    }`}
                  >
                    <span className="font-doodle text-xl font-bold text-neutral-900 block mb-2">
                      {insight.title}
                    </span>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem Statement */}
          {project.problem && (
            <div id="problem" className="space-y-4 pt-6 border-t border-neutral-200">
              <h2 className="text-2xl font-bold text-black font-doodle">Problem Statement</h2>
              <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_#000]">
                <p className="text-lg sm:text-xl font-semibold text-neutral-900 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </div>
          )}

          {/* Solutions Section */}
          {project.solutions && (
            <div id="solutions" className="space-y-6 pt-6 border-t border-neutral-200">
              <h2 className="text-2xl font-bold text-black font-doodle">Solutions & Craft</h2>
              <div className="space-y-6">
                {project.solutions.map((sol, idx) => {
                  const colors = ['bg-[#FFF8DE]', 'bg-[#E9FFE3]', 'bg-[#FAE8AC]', 'bg-[#FF9F9F]/30'];
                  const bgColor = colors[idx % colors.length];
                  return (
                    <div
                      key={idx}
                      className={`p-6 sm:p-8 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] space-y-3 ${bgColor}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-black">{sol.title}</h3>
                      </div>
                    <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                      {sol.description}
                    </p>
                      {sol.points && (
                        <ul className="space-y-1.5 pt-2 text-sm text-neutral-800 font-medium">
                          {sol.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Outcome Section */}
          {project.outcome && (
            <div id="outcome" className="space-y-4 pt-6 border-t border-neutral-200">
              <h2 className="text-2xl font-bold text-black font-doodle">Outcome & Reflections</h2>
              <div className="p-6 sm:p-8 rounded-2xl bg-black text-white border-2 border-black shadow-[6px_6px_0px_#FF9F9F] space-y-3">
                <h3 className="text-lg font-bold text-[#FDD657]">
                  {project.outcome.headline}
                </h3>
                {project.outcome.body.map((b, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                    {b}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Next / Other Works Showcase */}
          <div className="pt-12 border-t border-neutral-200 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-doodle text-2xl font-bold text-black">
                  Check out my other works!
                </h3>
                <p className="text-xs text-neutral-500">More explorations from campus to industry</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProject(p);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer p-4 rounded-xl bg-white border border-black/10 hover:border-black hover:shadow-[3px_3px_0px_#000] transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400">
                      {p.company}
                    </span>
                    <h4 className="font-bold text-sm text-neutral-900 group-hover:text-black line-clamp-2 mt-1">
                      {p.title}
                    </h4>
                  </div>
                  <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600 font-medium">
                    <span>{p.status}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
