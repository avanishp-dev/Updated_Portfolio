import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code2, Trophy, Flame, ChevronRight, Activity, CalendarDays, Hash, Github, Users, FolderDot, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { DoodleSparkle, DoodleSmiley, DoodleCode, DoodleSquiggle } from './DoodleDecorations';
import { USER_INFO } from '../data/portfolioData';

interface LeetCodeProfile {
  profile: {
    realName: string;
    ranking: number;
    userAvatar: string;
    skillTags: string[];
    aboutMe: string;
  };
  submitStats: {
    acSubmissionNum: {
      difficulty: string;
      count: number;
      submissions: number;
    }[];
  };
}

interface LeetCodeSubmission {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
  langName: string;
  memory: string;
  runtime: string;
  frontendId: number;
}

interface GithubProfile {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  login: string;
  recent_repos?: {
    id: number;
    name: string;
    description: string;
    language: string;
    html_url: string;
    stargazers_count: number;
  }[];
}

export const DevStatsView: React.FC = () => {
  const [lcProfile, setLcProfile] = useState<LeetCodeProfile | null>(null);
  const [lcSubmissions, setLcSubmissions] = useState<LeetCodeSubmission[]>([]);
  const [ghProfile, setGhProfile] = useState<GithubProfile | null>(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const username = 'avanish_codz';
        const ghUsername = 'avanishp-dev';
        
        const [profileRes, submissionsRes, ghRes, ghReposRes] = await Promise.all([
          fetch(`https://leetcode-api-pied.vercel.app/user/${username}`),
          fetch(`https://leetcode-api-pied.vercel.app/user/${username}/submissions?limit=6`),
          fetch(`https://api.github.com/users/${ghUsername}`),
          fetch(`https://api.github.com/users/${ghUsername}/repos?sort=updated&per_page=3`)
        ]);

        if (!profileRes.ok || !submissionsRes.ok || !ghRes.ok || !ghReposRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const profileData = await profileRes.json();
        const submissionsData = await submissionsRes.json();
        const ghData = await ghRes.json();
        const ghReposData = await ghReposRes.json();

        setLcProfile(profileData);
        setLcSubmissions(submissionsData);
        setGhProfile({ ...ghData, recent_repos: ghReposData });
      } catch (err) {
        setError("Oops! Couldn't load all stats right now.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <DoodleSparkle className="w-16 h-16 text-[#FDD657] animate-spin-slow doodle-swing" />
        <h2 className="font-doodle text-2xl font-bold animate-pulse text-black">
          Brewing Dev Stats...
        </h2>
      </div>
    );
  }

  if (error || !lcProfile || !ghProfile) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <DoodleSmiley className="w-16 h-16 text-[#E95755] opacity-50" />
        <h2 className="font-doodle text-xl font-bold text-black">{error}</h2>
      </div>
    );
  }

  const allStats = lcProfile.submitStats?.acSubmissionNum.find(s => s.difficulty === 'All')?.count || 0;
  const easyStats = lcProfile.submitStats?.acSubmissionNum.find(s => s.difficulty === 'Easy')?.count || 0;
  const mediumStats = lcProfile.submitStats?.acSubmissionNum.find(s => s.difficulty === 'Medium')?.count || 0;
  const hardStats = lcProfile.submitStats?.acSubmissionNum.find(s => s.difficulty === 'Hard')?.count || 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black font-sans tracking-tight flex items-center justify-center gap-4">
          <Code2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#4B7CF8]" />
          Dev Stats
          <Github className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-medium">
          A live look into my coding journey, open-source contributions, and external profiles.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* LeetCode Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b-4 border-black pb-2 max-w-max">
            <Code2 className="w-8 h-8 text-[#E95755]" />
            <h2 className="font-doodle text-3xl font-bold text-black">LeetCode Arcade</h2>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-[#EBF3FF] rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] rotate-1 group-hover:rotate-0 transition-transform duration-300" />
            <div className="relative p-8 rounded-3xl bg-white border-4 border-black shadow-[6px_6px_0px_#000] -rotate-1 group-hover:rotate-0 transition-transform duration-300 z-10 flex flex-col items-center text-center">
              <DoodleSparkle className="absolute top-4 right-4 w-8 h-8 text-[#FDD657] doodle-swing" />
              <img 
                src={lcProfile.profile.userAvatar} 
                alt="LeetCode Avatar" 
                className="w-24 h-24 rounded-full border-4 border-black shadow-[4px_4px_0px_#000] mb-4"
              />
              <h3 className="font-doodle text-2xl font-bold mb-1">@{lcProfile.profile.realName}</h3>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-xs font-bold rounded-full mb-6 shadow-sm">
                <Trophy className="w-3.5 h-3.5 text-[#FDD657]" />
                Rank: {lcProfile.profile.ranking?.toLocaleString() || 'N/A'}
              </div>

              <div className="w-full grid grid-cols-2 gap-4">
                <div className="bg-[#FAFAFA] border-2 border-black/10 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                  <span className="text-4xl font-extrabold text-black">{allStats}</span>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Total Solved</span>
                </div>
                <div className="bg-[#FAFAFA] border-2 border-black/10 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                  <span className="text-3xl font-extrabold text-[#E95755] flex items-center gap-1">
                    <Flame className="w-6 h-6 fill-[#E95755]" />
                    {lcProfile.submitStats?.acSubmissionNum.find(s => s.difficulty === 'All')?.submissions || 0}
                  </span>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Submissions</span>
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="w-full grid grid-cols-3 gap-3 mt-4">
                <div className="p-3 rounded-2xl bg-[#E9FFE3] border-2 border-black shadow-[2px_2px_0px_#000] flex flex-col items-center text-center">
                  <span className="text-xs font-bold text-green-700 uppercase mb-1">Easy</span>
                  <span className="text-2xl font-extrabold text-black">{easyStats}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF8DE] border-2 border-black shadow-[2px_2px_0px_#000] flex flex-col items-center text-center">
                  <span className="text-xs font-bold text-amber-600 uppercase mb-1">Med</span>
                  <span className="text-2xl font-extrabold text-black">{mediumStats}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFE4E4] border-2 border-black shadow-[2px_2px_0px_#000] flex flex-col items-center text-center">
                  <span className="text-xs font-bold text-red-600 uppercase mb-1">Hard</span>
                  <span className="text-2xl font-extrabold text-black">{hardStats}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Funny Hello World Illustration */}
          <div className="relative group mt-8">
            <div className="absolute inset-0 bg-[#FFFCE3] rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] rotate-2 group-hover:rotate-0 transition-transform duration-300" />
            <div className="relative p-6 rounded-3xl bg-white border-4 border-black shadow-[6px_6px_0px_#000] -rotate-1 group-hover:rotate-0 transition-transform duration-300 z-10 flex flex-col items-center">
              <DoodleSmiley className="absolute -top-3 -right-3 w-10 h-10 text-[#E95755]" fill="#FFFFFF" />
              <DoodleSquiggle className="absolute -bottom-3 -left-3 w-12 h-6 text-[#4B7CF8] rotate-45" />
              
              <h3 className="font-doodle text-xl font-bold text-black mb-4 flex items-center gap-2">
                <span>The Eternal Struggle</span>
                <span className="text-2xl">☕ vs 🐍</span>
              </h3>
              
              <div className="w-full flex flex-col gap-4">
                <div className="w-full bg-[#FAFAFA] border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black uppercase text-amber-600 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300">Java</span>
                    <span className="text-xs">😭</span>
                  </div>
                  <pre className="text-[11px] sm:text-xs font-mono text-neutral-800 overflow-x-auto">
                    <code>
{`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`}
                    </code>
                  </pre>
                </div>

                <div className="w-full bg-[#FAFAFA] border-2 border-black rounded-xl p-3 shadow-[2px_2px_0px_#000]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md border border-blue-300">Python</span>
                    <span className="text-xs">😎</span>
                  </div>
                  <pre className="text-[11px] sm:text-xs font-mono text-neutral-800 overflow-x-auto">
                    <code>
{`print("Hello World")`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub & Other Links Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b-4 border-black pb-2 max-w-max">
            <Github className="w-8 h-8 text-[#8A63F2]" />
            <h2 className="font-doodle text-3xl font-bold text-black">GitHub Base</h2>
          </div>
          
          {/* GitHub Stats Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#E8E1FF] rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
            <div className="relative p-8 rounded-3xl bg-white border-4 border-black shadow-[6px_6px_0px_#000] rotate-1 group-hover:rotate-0 transition-transform duration-300 z-10">
              <DoodleCode className="absolute top-4 right-4 w-10 h-10 text-neutral-200" />
              
              <div className="flex items-center gap-4 mb-8">
                <img src={ghProfile.avatar_url} alt="GitHub" className="w-16 h-16 rounded-full border-4 border-black shadow-[4px_4px_0px_#000]" />
                <div>
                  <h3 className="font-bold text-2xl text-black">@{ghProfile.login}</h3>
                  <a href={USER_INFO.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#8A63F2] hover:underline inline-flex items-center gap-1">
                    View Profile <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAFAFA] border-2 border-black/10 rounded-2xl flex flex-col items-center text-center gap-2">
                  <div className="p-3 bg-[#E8E1FF] rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
                    <FolderDot className="w-6 h-6 text-[#8A63F2]" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-black">{ghProfile.public_repos}</div>
                    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Repositories</div>
                  </div>
                </div>

                <div className="p-4 bg-[#FAFAFA] border-2 border-black/10 rounded-2xl flex flex-col items-center text-center gap-2">
                  <div className="p-3 bg-[#FFF8DE] rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
                    <Users className="w-6 h-6 text-[#FDD657]" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-black">{ghProfile.followers}</div>
                    <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Followers</div>
                  </div>
                </div>
              </div>

              {/* Latest Repositories Natively Built */}
              <div className="mt-6 space-y-3">
                <h4 className="font-bold text-neutral-500 text-xs uppercase tracking-wider text-left">Latest Repositories</h4>
                {ghProfile.recent_repos?.map(repo => (
                  <a 
                    key={repo.id} 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/repo block p-4 bg-[#FAFAFA] border-2 border-black/10 hover:border-black rounded-xl transition-all hover:shadow-[4px_4px_0px_#8A63F2] hover:-translate-y-1 text-left"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-bold text-black text-sm group-hover/repo:text-[#8A63F2] transition-colors line-clamp-1">{repo.name}</h5>
                        {repo.description && (
                          <p className="text-xs text-neutral-500 line-clamp-1 mt-1">{repo.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold bg-[#E8E1FF] text-[#8A63F2] px-2 py-0.5 rounded-md shrink-0 border border-black/5">
                        <FolderDot className="w-3 h-3" /> {repo.language || 'Code'}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Other Dimensions (Links) */}
          <div className="relative group mt-8">
            <div className="absolute inset-0 bg-[#FFECEC] rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] rotate-2 group-hover:rotate-0 transition-transform duration-300" />
            <div className="relative p-6 rounded-3xl bg-white border-4 border-black shadow-[6px_6px_0px_#000] -rotate-1 group-hover:rotate-0 transition-transform duration-300 z-10">
              <div className="flex items-center gap-3 mb-4">
                <LinkIcon className="w-6 h-6 text-[#E95755]" />
                <h3 className="font-doodle text-xl font-bold text-black">Other Dimensions</h3>
              </div>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://codolio.com/profile/avanish-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full p-4 bg-[#111111] text-white rounded-xl border-4 border-black flex items-center justify-between group/btn hover:-translate-y-1 hover:shadow-[4px_4px_0px_#E95755] transition-all"
                >
                  <span className="font-bold text-lg font-doodle tracking-wide">Codolio Profile</span>
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full p-4 bg-white text-black rounded-xl border-4 border-black flex items-center justify-between group/btn hover:-translate-y-1 hover:shadow-[4px_4px_0px_#4B7CF8] transition-all"
                >
                  <span className="font-bold text-lg font-doodle tracking-wide">Resume</span>
                  <ExternalLink className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Recent LeetCode Submissions Bottom Row */}
      <div className="space-y-6 pt-8 border-t-4 border-black/10">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Activity className="w-6 h-6 text-black" />
          <h2 className="text-3xl font-bold font-doodle text-black">Recent Submissions</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lcSubmissions.map((sub, idx) => (
            <a 
              key={sub.id}
              href={`https://leetcode.com/problems/${sub.titleSlug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-[#FAFAFA] rounded-2xl translate-x-[4px] translate-y-[4px] border-2 border-black group-hover:translate-x-[6px] group-hover:translate-y-[6px] transition-transform duration-200" />
                
                <div className="relative h-full p-5 bg-white border-4 border-black rounded-2xl flex flex-col justify-between gap-4 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-200 z-10 shadow-sm">
                  
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-black text-lg group-hover:text-[#4B7CF8] transition-colors leading-tight line-clamp-2">
                        {sub.title}
                      </h4>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase rounded-md border-2 border-green-300 shrink-0">
                        {sub.statusDisplay}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-500">
                      <Hash className="w-3 h-3" /> Problem {sub.frontendId}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t-2 border-neutral-100">
                    <div className="flex items-center gap-3 text-xs font-bold text-neutral-600">
                      <span className="flex items-center gap-1 bg-neutral-100 px-2 py-1 rounded-md">
                        <Code2 className="w-3.5 h-3.5" />
                        {sub.langName}
                      </span>
                      <span className="flex items-center gap-1">
                        {sub.runtime}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <ChevronRight className="w-4 h-4 text-[#FDD657]" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};
