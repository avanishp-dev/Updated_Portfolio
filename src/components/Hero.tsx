import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { DoodleSparkle, DoodleArrow, DoodleUnderline, DoodleSmiley, DoodleHeart, DoodleWeb, DoodleLightning, DoodlePlanet, DoodleCrown } from './DoodleDecorations';

interface HeroProps {
  fullColorMode: boolean;
  setFullColorMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  fullColorMode,
  setFullColorMode,
  onExploreWork
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isColorActive = fullColorMode || isHovered;

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background playful doodle accents */}
      <div className="absolute top-0 right-[2%] sm:right-[8%] z-20 pointer-events-none origin-top doodle-swing">
        <img src="/spidey-transparent.png" alt="Hanging Spiderman" className="w-32 h-auto md:w-48 drop-shadow-[4px_4px_0px_#000]" />
      </div>
      <div className="absolute top-8 left-6 text-black/10 select-none pointer-events-none hidden lg:block">
        <DoodleSparkle className="w-12 h-12 text-[#FDD657]" />
      </div>
      <div className="absolute top-16 right-10 select-none pointer-events-none hidden md:block">
        <DoodleHeart className="w-9 h-9" color="#FF9F9F" />
      </div>
      <div className="absolute top-4 left-4 select-none pointer-events-none hidden md:block opacity-50 rotate-[-15deg]">
        <DoodleWeb className="w-16 h-16" />
      </div>
      <div className="absolute bottom-10 left-[10%] select-none pointer-events-none hidden sm:block">
        <DoodleArrow className="w-12 h-12 rotate-[120deg] text-[#E95755]" />
      </div>
      <div className="absolute top-1/2 right-[5%] select-none pointer-events-none hidden lg:block opacity-70">
        <DoodleSparkle className="w-10 h-10 text-[#8A63F2] animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-[15%] select-none pointer-events-none hidden md:block">
        <DoodleLightning className="w-12 h-12 rotate-12" color="#FDD657" />
      </div>
      <div className="absolute top-[20%] left-[10%] select-none pointer-events-none hidden lg:block">
        <DoodlePlanet className="w-16 h-16 opacity-60" color="#4B7CF8" />
      </div>
      <div className="absolute bottom-5 left-[30%] select-none pointer-events-none hidden sm:block">
        <DoodleCrown className="w-8 h-8 rotate-[-20deg]" color="#81AE64" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Profile Pill & Greeting */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#81AE64] animate-pulse" />
            <span className="text-xs font-semibold text-neutral-800 tracking-wide">
              Bhubaneswar, Odisha · SOA University B.Tech CSE
            </span>
          </div>

          <a
            href="https://github.com/avanishp-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:inline-flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-black transition-colors"
          >
            <span>Ex-Intern @ Paradip Port Authority</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Hero Headline */}
        <div className="relative mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.18] text-neutral-950 font-sans">
            Hi there! I&apos;m{' '}
            <span className="relative inline-block font-doodle font-bold text-black group">
              Avanish
              <span className="absolute -bottom-2.5 left-0 w-full">
                <DoodleUnderline
                  className="w-full h-3"
                  color={isColorActive ? '#FDD657' : '#111111'}
                />
              </span>
            </span>
            , a full-stack developer who helps build{' '}
            <span
              className={`transition-all duration-300 rounded-md px-1.5 py-0.5 ${
                isColorActive
                  ? 'bg-[#FDD657] text-black shadow-xs'
                  : 'bg-neutral-100 text-neutral-900'
              }`}
            >
              scalable
            </span>{' '}
            and{' '}
            <span
              className={`transition-all duration-300 rounded-md px-1.5 py-0.5 ${
                isColorActive
                  ? 'bg-[#E9FFE3] text-[#245412] underline decoration-[#81AE64] decoration-2'
                  : 'bg-neutral-100 text-neutral-900'
              }`}
            >
              intelligent
            </span>{' '}
            web &amp; AI systems.
          </h1>
        </div>

        {/* The Signature Interactive Stage: "Hover to see the world in full color ~" */}
        <div className="relative mt-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-doodle text-lg sm:text-xl text-neutral-800 font-semibold flex items-center gap-1.5">
              <span>Hover to see the world in full color ~</span>
              <DoodleSmiley className="w-5 h-5" />
            </span>
            <DoodleArrow className="w-10 h-8 -rotate-12 text-black/60 hidden sm:inline-block" />
          </div>

          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setFullColorMode((prev) => !prev)}
            whileHover={{ scale: 1.01 }}
            className={`cursor-pointer relative rounded-2xl p-6 sm:p-8 transition-all duration-500 border overflow-hidden ${
              isColorActive
                ? 'bg-gradient-to-br from-[#FFF8DE] via-[#F3FAEB] to-[#EBF3FF] border-black shadow-[6px_8px_0px_0px_#000]'
                : 'bg-white border-black/15 shadow-[3px_4px_0px_0px_rgba(0,0,0,0.06)]'
            }`}
          >
            {/* Background floating doodles when colored */}
            {isColorActive && (
              <>
                <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#FDD657]/30 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#81AE64]/20 rounded-full blur-xl pointer-events-none" />
              </>
            )}

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    isColorActive
                      ? 'bg-white border-black shadow-[3px_3px_0px_0px_#000] rotate-3'
                      : 'bg-neutral-100 border-black/10'
                  }`}
                >
                  <img
                    src="https://framerusercontent.com/images/naJEApQkWUv4AJUYlmV8mk5FY.svg"
                    alt="Avanish Doodle"
                    className="w-12 h-12 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-doodle text-2xl font-bold text-black">
                      {isColorActive ? '✨ Full Color World Activated!' : 'Avanish’s Sketchbook Canvas'}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 mt-0.5 max-w-md">
                    {isColorActive
                      ? 'Full-stack development, NASA space APIs, multi-agent AI ecosystems, and open source.'
                      : 'Move your cursor over this card (or tap) to bring doodles and interactive modes to life.'}
                  </p>
                </div>
              </div>

              {/* Floating badges that illuminate */}
              <div className="flex flex-wrap gap-2">
                <span
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-all duration-300 ${
                    isColorActive
                      ? 'bg-[#FAE8AC] border-black text-black shadow-xs rotate-[-1deg]'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                  }`}
                >
                  ✦ Top 45 in SIH-26
                </span>
                <span
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-all duration-300 ${
                    isColorActive
                      ? 'bg-[#98B5FF]/50 border-black text-black shadow-xs rotate-[1deg]'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                  }`}
                >
                  ✦ Ex-Intern at Paradip Port Authority(PPA)
                </span>
                <span
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-all duration-300 ${
                    isColorActive
                      ? 'bg-[#E9FFE3] border-black text-[#1C450E] shadow-xs rotate-[-1deg]'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                  }`}
                >
                  ✦ Intern at Elixios
                </span>
                <span
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-all duration-300 ${
                    isColorActive
                      ? 'bg-[#FF9F9F]/60 border-black text-black shadow-xs rotate-[2deg]'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                  }`}
                >
                  ✦ 2nd Prize at Agentic AI Hackathon
                </span>
                <span
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-all duration-300 ${
                    isColorActive
                      ? 'bg-[#FAE8AC] border-black text-black shadow-xs rotate-[-2deg]'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                  }`}
                >
                  ✦ GSSoC &amp; SSoC&apos;26 Contributor
                </span>
              </div>
            </div>

            {/* Quick interactive hint bar */}
            <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Tip: Click card to toggle persistent color mode</span>
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onExploreWork();
                }}
                className="font-medium text-black hover:underline flex items-center gap-1"
              >
                <span>Jump to Projects</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
