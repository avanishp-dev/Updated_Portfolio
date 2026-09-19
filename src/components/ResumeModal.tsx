import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Github, Linkedin, Briefcase, GraduationCap, Award, Wrench } from 'lucide-react';
import { EXPERIENCES, COMMUNITY_ITEMS, USER_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-4xl bg-[#FAFAFA] bg-notebook-dots rounded-3xl border-2 border-black shadow-[8px_8px_0px_#000] p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full border border-black/15 flex items-center justify-center hover:bg-neutral-100 text-neutral-700"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Resume Header */}
          <div className="border-b border-neutral-200 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-black font-sans">
                  {USER_INFO.name}
                </h2>
                <p className="font-doodle text-lg text-neutral-700 font-semibold">
                  {USER_INFO.title}
                </p>
                <p className="text-xs text-neutral-500 mt-1 flex flex-wrap items-center gap-2">
                  <span>{USER_INFO.location}</span>
                  <span>•</span>
                  <span>{USER_INFO.email}</span>
                  <span>•</span>
                  <span>{USER_INFO.phone}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${USER_INFO.email}`}
                  className="px-4 py-2 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Avanish</span>
                </a>
                <a
                  href={USER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-black/15 hover:bg-neutral-100 text-neutral-700"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={USER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-black/15 hover:bg-neutral-100 text-neutral-700"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 mb-6">
            <h3 className="text-xs uppercase tracking-wider font-bold text-neutral-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-black" />
              <span>Education</span>
            </h3>
            <div className="p-5 rounded-2xl bg-[#EBF3FF] border-2 border-black shadow-[4px_4px_0px_#000] space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-black font-sans">{USER_INFO.university}</h4>
                  <span className="text-xs text-neutral-800 font-bold bg-white px-2 py-0.5 rounded-full border border-black/10">2025 - 2029</span>
                </div>
                <p className="text-xs text-neutral-800 mt-1 font-semibold">
                  {USER_INFO.degree}
                </p>
                <p className="text-xs text-neutral-700 mt-1">
                  Core Subjects: Data Structures &amp; Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems, Operating Systems, Web Technologies.
                </p>
              </div>

              <div className="pt-3 border-t border-black/10">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-black">{USER_INFO.highSchool}</h4>
                  <span className="text-[10px] uppercase font-bold text-neutral-500">Science Stream</span>
                </div>
                <p className="text-xs text-neutral-700 mt-0.5">Schooling: {USER_INFO.school}</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4 mb-6">
            <h3 className="text-xs uppercase tracking-wider font-bold text-neutral-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-black" />
              <span>Work Experience &amp; Internships</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {EXPERIENCES.map((exp, i) => {
                const bgColors = ['bg-[#FFF8DE]', 'bg-[#E9FFE3]', 'bg-[#FAE8AC]', 'bg-[#FF9F9F]/30'];
                const shadowColors = ['shadow-[4px_4px_0px_#FDD657]', 'shadow-[4px_4px_0px_#81AE64]', 'shadow-[4px_4px_0px_#FDD657]', 'shadow-[4px_4px_0px_#E95755]'];
                const colorIdx = i % bgColors.length;
                return (
                  <div key={i} className={`p-5 rounded-2xl border-2 border-black ${bgColors[colorIdx]} ${shadowColors[colorIdx]}`}>
                    <div className="flex flex-col gap-1 mb-2">
                      <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-1.5">
                        <h4 className="font-bold text-sm text-black font-sans leading-snug">{exp.company}</h4>
                        <span className="text-[9px] font-bold text-black uppercase bg-white px-2 py-0.5 rounded border border-black/10 w-fit shrink-0">{exp.period}</span>
                      </div>
                      <span className="text-xs font-semibold text-neutral-800">{exp.role}</span>
                    </div>
                    <p className="text-xs text-neutral-800 mt-2 leading-relaxed">
                      {exp.highlight}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="space-y-3 mb-6">
            <h3 className="text-xs uppercase tracking-wider font-bold text-neutral-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-black" />
              <span>Honors, Certifications &amp; Leadership</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {COMMUNITY_ITEMS.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_#000] text-xs transition-transform hover:-translate-y-1">
                  <p className="font-bold text-black text-sm mb-1">{item.organization}</p>
                  <p className="text-neutral-700 font-medium">{item.role}</p>
                  <p className="text-neutral-500 mt-1">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Toolkit */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-neutral-400 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-black" />
              <span>Technical Skills &amp; Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Java (J2EE / Jakarta EE)',
                'Python & Django',
                'JavaScript (ES6+)',
                'TypeScript',
                'React.js & Next.js',
                'Node.js & Express',
                'Tailwind CSS',
                'Hibernate / JPA',
                'Oracle Database & SQL',
                'SQLite & PostgreSQL',
                'Docker & Containers',
                'Railway Deployment',
                'Agentic AI & n8n',
                'Groq LLM Inference',
                'NASA NeoWs API',
                'RESTful API Design',
                'SEO & AEO Architecture',
                'Git & GitHub Workflows'
              ].map((skill, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-white text-black font-semibold border-2 border-black shadow-[2px_2px_0px_#000] hover:translate-y-[-2px] transition-transform">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
