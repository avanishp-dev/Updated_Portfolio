import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Compass, Cpu, Palette, Code2, ExternalLink, Mail, Linkedin, Github } from 'lucide-react';
import { TIMELINE_STORIES, EXPERIENCES, COMMUNITY_ITEMS, COMMUNITY_PHOTOS, USER_INFO } from '../data/portfolioData';
import { DoodleUnderline, DoodleSmiley, DoodleSparkle, DoodleSquiggle, DoodlePlanet, DoodleHeart, DoodleCrown } from './DoodleDecorations';

interface AboutViewProps {
  fullColorMode: boolean;
}

export const AboutView: React.FC<AboutViewProps> = ({ fullColorMode }) => {
  const getTimelineIcon = (iconType: string) => {
    switch (iconType) {
      case 'craft':
        return <Palette className="w-5 h-5 text-amber-600" />;
      case 'lego':
        return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'bridge':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'product':
        return <Heart className="w-5 h-5 text-rose-600" />;
      case 'code':
      default:
        return <Code2 className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      <div className="absolute top-20 -left-10 z-0 pointer-events-none hidden md:block">
        <DoodlePlanet className="w-20 h-20 opacity-30" color="#8A63F2" />
      </div>
      <div className="absolute top-[40%] -right-10 z-0 pointer-events-none hidden md:block">
        <DoodleHeart className="w-16 h-16 opacity-30" color="#E95755" />
      </div>
      <div className="absolute bottom-40 -left-5 z-0 pointer-events-none hidden md:block">
        <DoodleCrown className="w-14 h-14 opacity-30 rotate-12" color="#FDD657" />
      </div>

      {/* Intro Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-semibold">
          <DoodleSmiley className="w-4 h-4" />
          <span>About Avanish</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 font-sans leading-[1.2]">
          Hi again! I&apos;m{' '}
          <span className="relative inline-block font-doodle font-bold">
            Avanish
            <span className="absolute -bottom-2 left-0 w-full">
              <DoodleUnderline className="w-full h-3" color="#FDD657" />
            </span>
          </span>
          . I love building scalable applications, exploring agentic AI systems, and solving real-world challenges.
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans max-w-2xl">
          Pursuing B.Tech in Computer Science &amp; Engineering at Siksha &apos;O&apos; Anusandhan University, Bhubaneswar. Passionate about Full-Stack Development, AI/ML, and Open Source.
        </p>
      </div>

      {/* "My Story" Chronological Journey */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black font-doodle">
            My Story
          </h2>
          <DoodleSquiggle className="w-20 h-4 text-[#81AE64]" />
        </div>

        <div className="relative border-l-2 border-dashed border-black/20 pl-6 sm:pl-8 ml-3 space-y-8">
          {TIMELINE_STORIES.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div
                style={{ backgroundColor: story.badgeColor }}
                className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full border-2 border-black flex items-center justify-center shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-black" />
              </div>

              {/* Story Content Box */}
              <div className="p-6 rounded-2xl bg-white border border-black/10 hover:border-black hover:shadow-[4px_4px_0px_#000] transition-all duration-200">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-doodle text-sm font-bold text-neutral-500 uppercase tracking-wide">
                    {story.age} • {story.phase}
                  </span>
                  <div className="p-1.5 rounded-lg bg-neutral-100">
                    {getTimelineIcon(story.iconType)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black font-sans mb-2">
                  {story.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reflection Quote Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF9E6] border border-[#E6B925] text-neutral-800 relative overflow-hidden">
          <DoodleSparkle className="absolute top-4 right-4 w-8 h-8 text-[#FDD657] opacity-60" />
          <p className="font-doodle text-lg sm:text-xl font-semibold leading-relaxed">
            &ldquo;I am committed to continuous learning, exploring emerging technologies, and applying my knowledge to projects that make a difference. My goal is to bridge creativity with technology — crafting solutions that are both functional, scalable, and innovative.&rdquo;
          </p>
        </div>
      </div>

      {/* Experiences & Community Grid */}
      <div className="grid md:grid-cols-2 gap-8 pt-6">
        {/* Industry Experiences */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black font-doodle flex items-center gap-2">
            <span>Experiences</span>
            <DoodleSparkle className="w-5 h-5 text-[#81AE64]" />
          </h3>

          <div className="space-y-3">
            {EXPERIENCES.map((exp, idx) => {
              const bgColors = ['bg-[#FFF8DE]', 'bg-[#E9FFE3]', 'bg-[#EBF3FF]', 'bg-[#FAE8AC]'];
              const shadowColors = ['shadow-[4px_4px_0px_#FDD657]', 'shadow-[4px_4px_0px_#81AE64]', 'shadow-[4px_4px_0px_#98B5FF]', 'shadow-[4px_4px_0px_#FDD657]'];
              const colorIdx = idx % bgColors.length;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border-2 border-black transition-transform hover:-translate-y-1 ${bgColors[colorIdx]} ${shadowColors[colorIdx]}`}
                >
                  <div className="flex flex-col 2xl:flex-row 2xl:items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-lg text-black font-sans">
                      {exp.company}
                    </h4>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded border border-black/10 bg-white uppercase w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-neutral-800">
                    {exp.role}
                  </p>
                  {exp.highlight && (
                    <p className="text-xs text-neutral-800 mt-3 leading-relaxed">
                      {exp.highlight}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Community & Campus Leadership */}
        <div className="flex flex-col h-full space-y-4">
          <h3 className="text-2xl font-bold text-black font-doodle flex items-center gap-2 shrink-0">
            <span>Community</span>
            <DoodleSparkle className="w-5 h-5 text-[#E95755]" />
          </h3>

          <div className="space-y-2.5 shrink-0">
            {COMMUNITY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_#000] flex flex-col sm:flex-row sm:items-center justify-between text-xs transition-transform hover:-translate-y-1 gap-2"
              >
                <div>
                  <p className="font-bold text-black text-sm">{item.organization}</p>
                  <p className="text-neutral-700 font-medium mt-0.5">{item.role}</p>
                </div>
                <span className="text-neutral-500 font-bold shrink-0">
                  {item.period}
                </span>
              </div>
            ))}
          </div>

          {/* Creative Avatar Filler */}
          <div className="flex-1 flex flex-col items-center justify-end pt-12 pb-4">
            <div className="relative group w-full max-w-sm cursor-default">
              <div className="absolute inset-0 bg-[#E9FFE3] rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] rotate-2 group-hover:-rotate-1 transition-transform duration-500" />
              <div className="relative z-10 p-6 flex flex-col items-center text-center">
                {/* Floating Decorative Elements */}
                <DoodleSparkle className="absolute top-4 left-4 w-6 h-6 text-[#FDD657] opacity-80 doodle-swing" />
                <DoodleSmiley className="absolute bottom-4 right-4 w-8 h-8 text-[#E95755] opacity-80 hover:rotate-12 transition-transform" />

                <div className="w-28 h-28 rounded-full border-4 border-black overflow-hidden bg-white mb-4 shadow-[4px_4px_0px_#000] -rotate-3 group-hover:rotate-3 transition-transform duration-300 relative z-20">
                  <img src="/avatar.png" alt={USER_INFO.name} className="w-full h-full object-cover" />
                </div>
                
                <h4 className="font-doodle text-xl font-bold text-black mb-1">
                  Hi, I'm {USER_INFO.name.split(' ')[0]}!
                </h4>
                <p className="text-sm font-semibold text-neutral-700 leading-snug">
                  Always doodling, coding, and building cool things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fond Memories with My Community Polaroid Section */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-black font-doodle">
            Fond memories with my community :-)
          </h3>
          <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
            Bhubaneswar &amp; Beyond
          </span>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {COMMUNITY_PHOTOS.map((photo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.06 }}
              style={{ rotate: `${photo.rotation}deg` }}
              className="p-5 sm:p-6 bg-white rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_#000] transition-transform duration-300 flex flex-col"
            >
              <div className="aspect-square sm:aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 mb-4 border border-black/10">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="font-doodle text-lg sm:text-xl font-bold text-black mb-1">
                {photo.title}
              </h4>
              <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Let's Connect Call to Action */}
      <div className="p-8 rounded-3xl bg-white border-2 border-black shadow-[6px_6px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-doodle text-2xl font-bold text-black">
            Want to chat or collaborate?
          </h3>
          <p className="text-sm text-neutral-600 mt-1">
            Always open to tech conversations, software development roles, open source, or hackathons.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:avanishpadhy25@gmail.com"
            className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>avanishpadhy25@gmail.com</span>
          </a>
          <a
            href="https://github.com/avanishp-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
            title="GitHub (@avanishp-dev)"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/avanishpadhy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
