import React from 'react';
import {
  Bot,
  Cpu,
  Layers,
  Sparkles,
  BarChart3,
  Terminal,
  Workflow,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'AI & Agents':
        return <Bot className="w-5 h-5 text-sky-400" />;
      case 'Automation & Orchestration':
        return <Workflow className="w-5 h-5 text-emerald-400" />;
      case 'Development & Backends':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'AI-Assisted Full-Stack':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Machine Learning & Data':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#050811] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-tech">
            Skills & Engineering Toolchain
          </h2>
          <p className="text-base text-slate-400">
            Specialized in autonomous multi-agent pipelines, production Python automation, modern web backends, and data science foundations.
          </p>
        </div>

        {/* 5 Grouped Categories Grid with 3D Hover Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const isFeatured = category.title === 'AI & Agents';
            return (
              <div
                key={idx}
                className={`group rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 ${
                  isFeatured
                    ? 'lg:col-span-2 bg-gradient-to-br from-[#091124] to-[#070b18] border border-sky-500/30 hover:border-sky-400/60 shadow-xl shadow-sky-500/5'
                    : 'bg-[#080d19] border border-slate-800/80 hover:border-slate-700 hover:bg-[#0a1122]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-sky-500/40 transition-colors">
                      {getCategoryIcon(category.title)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight font-tech">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                    </div>
                  </div>

                  <div
                    className={`grid ${
                      isFeatured ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                    } gap-3 pt-1`}
                  >
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-850/80 space-y-1 hover:border-slate-700/80 transition-all group-hover:bg-slate-950"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-white font-tech">{skill.name}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                        {skill.detail && (
                          <p className="text-[11px] text-slate-400 leading-snug font-mono">
                            {skill.detail}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom footer tag */}
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                  <span>Verified Proficiency</span>
                  <span className="text-sky-400">Farheen.Rafiq</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
