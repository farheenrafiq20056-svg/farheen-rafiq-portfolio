import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  ArrowUpRight,
  Sparkles,
  Bot,
  Database,
  Phone,
  Code2,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai-agents' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'carepen-ai':
        return <Bot className="w-5 h-5 text-sky-400" />;
      case 'adkit':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'dental-voice-agent':
        return <Phone className="w-5 h-5 text-sky-400" />;
      case 'leadshield-crm':
        return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      case 'sparkfix':
        return <Wrench className="w-5 h-5 text-sky-400" />;
      default:
        return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#050811] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Production AI Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-tech">
              Featured Systems & Applications
            </h2>
            <p className="text-base text-slate-400 text-balance">
              Autonomous agents, production voice systems, and resilient web platforms built with Python, Next.js, and leading LLM APIs.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all font-tech ${
                filter === 'all'
                  ? 'bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('ai-agents')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all font-tech ${
                filter === 'ai-agents'
                  ? 'bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI & Agents
            </button>
            <button
              type="button"
              onClick={() => setFilter('fullstack')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all font-tech ${
                filter === 'fullstack'
                  ? 'bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full-Stack Apps
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#091122] to-[#070b18] hover:from-[#0c162d] hover:to-[#091024] border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-sky-500/10"
            >
              <div className="space-y-4">
                {/* Header line: unboxed category metadata with separator */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-sky-400/50 transition-colors">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-sky-400 font-medium">{project.categoryLabel}</span>
                    </div>
                  </div>

                  {project.badge && (
                    <span className="text-[11px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight font-tech">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300 font-mono">
                    {project.techStack.map((tech, idx) => (
                      <React.Fragment key={idx}>
                        <span className="hover:text-sky-300 transition-colors">{tech}</span>
                        {idx < project.techStack.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer font-tech"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 hover:text-white text-xs font-semibold transition-all font-tech"
                      title="Open Live Preview"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-dive Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
