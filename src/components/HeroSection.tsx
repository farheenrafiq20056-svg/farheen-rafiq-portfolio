import React, { useState } from 'react';
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Terminal,
  MapPin,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Agentic3DCore } from './Agentic3DCore';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative pt-32 sm:pt-40 pb-20 overflow-hidden bg-radial-vignette">
      {/* Background ambient lighting effects */}
      <div
        className="absolute top-20 left-1/4 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-48 right-10 w-[450px] h-[320px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Requested Exact Headline, Subheadline & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Exact Kicker requested: OPEN TO AGENTIC AI & AUTOMATION ROLES · LAHORE, PK */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono font-semibold text-sky-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>OPEN TO AGENTIC AI & AUTOMATION ROLES · LAHORE, PK</span>
            </div>

            {/* Exact Headline requested: "I build AI agents that actually ship." */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance font-tech">
                I build AI agents that actually ship.
              </h1>

              {/* Exact Subheadline requested: "Multi-agent systems, production voice agents, and automation pipelines that connect LLMs to real business workflows — designed, built, and deployed end to end." */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance max-w-2xl">
                Multi-agent systems, production voice agents, and automation pipelines that connect LLMs to real business workflows — designed, built, and deployed end to end.
              </p>
            </div>

            {/* Bio & Academic Profile Context */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-sky-400 font-tech font-semibold">
                <span>Farheen Rafiq</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-300 font-normal font-sans">BSCS Student at Virtual University of Pakistan</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-300 font-normal font-sans">Self-Taught AI Automation Specialist</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-sans">
                Hands-on builder focusing on autonomous agentic execution, low-latency VAPI voice agents, and high-volume browser automation pipelines in Python.
              </p>
            </div>

            {/* Exact CTAs requested: "View projects" & "Start a conversation" */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 active:scale-95 rounded-xl shadow-lg shadow-sky-500/25 transition-all font-tech cursor-pointer"
              >
                <span>View projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 hover:text-sky-300 border border-slate-700/80 rounded-xl transition-all font-tech cursor-pointer"
              >
                <span>Start a conversation</span>
                <MessageSquare className="w-4 h-4 text-sky-400" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-3.5 text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 rounded-xl transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Tech capability tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
              <span className="text-sky-400">Active Ecosystem:</span>
              <span>Python</span>
              <span className="text-slate-600">·</span>
              <span>VAPI Voice</span>
              <span className="text-slate-600">·</span>
              <span>Gemini 2.5</span>
              <span className="text-slate-600">·</span>
              <span>n8n</span>
              <span className="text-slate-600">·</span>
              <span>Selenium</span>
              <span className="text-slate-600">·</span>
              <span>Next.js</span>
              <span className="text-slate-600">·</span>
              <span>FastAPI</span>
            </div>
          </div>

          {/* Right Column: Motion 3D Style Agentic Core Visualizer (NO PERSON IMAGE) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <Agentic3DCore />
          </div>
        </div>

        {/* Bottom Metrics Banner */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                {metric.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums tracking-tight">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
