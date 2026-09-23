import React, { useState } from 'react';
import {
  Workflow,
  Terminal,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  Cpu,
  RefreshCw,
  GitBranch,
} from 'lucide-react';
import { AUTOMATION_WORKS, AutomationWork } from '../data/portfolioData';

export const AutomationSection: React.FC = () => {
  const [selectedWorkId, setSelectedWorkId] = useState<string>('book-publishing-automation');

  const selectedWork =
    AUTOMATION_WORKS.find((w) => w.id === selectedWorkId) || AUTOMATION_WORKS[0];

  return (
    <section id="automation" className="py-24 bg-[#050811] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>High-Volume Workflow Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-tech">
            Automation Pipelines & Bot Systems
          </h2>
          <p className="text-base text-slate-400">
            From multi-profile Selenium browser automation orchestrating hundreds of listings to autonomous n8n webhook pipelines and conversational WhatsApp bots.
          </p>
        </div>

        {/* 3 Work Switcher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {AUTOMATION_WORKS.map((work) => (
            <button
              key={work.id}
              type="button"
              onClick={() => setSelectedWorkId(work.id)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedWork.id === work.id
                  ? 'bg-gradient-to-b from-[#091122] to-[#070d1e] border-sky-400 shadow-lg shadow-sky-500/10'
                  : 'bg-[#080d19] border-slate-800/80 hover:bg-[#0a1122] hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                <span className="text-sky-400 font-semibold">{work.clientType}</span>
                <span className="text-slate-500 text-[11px]">{work.tools[0]}</span>
              </div>
              <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 font-tech">
                {work.title}
              </h3>
              <p className="text-xs text-emerald-400 mt-2 font-mono">{work.scale}</p>
            </button>
          ))}
        </div>

        {/* Deep Dive Feature Card for Selected Automation Work */}
        <div className="rounded-2xl bg-[#080d19] border border-slate-800/90 p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-sky-400 mb-1">
                {selectedWork.clientType} · {selectedWork.scale}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-tech">
                {selectedWork.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              <span className="text-slate-400 mr-1 text-[11px] uppercase">Tech:</span>
              {selectedWork.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Description & Measurable Outcome */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                  Engineering Scope & Problem Solved
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedWork.description}
                </p>
              </div>

              {/* Concrete Outcome Box */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 font-tech">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Business Impact & Quantified Outcome</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  {selectedWork.outcome}
                </p>
              </div>
            </div>

            {/* Right: Step-by-Step Execution Architecture */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2 font-mono">
                <GitBranch className="w-4 h-4" />
                <span>Execution Pipeline Sequence</span>
              </h4>

              <div className="space-y-2.5">
                {selectedWork.workflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3 text-xs"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-[11px] font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
