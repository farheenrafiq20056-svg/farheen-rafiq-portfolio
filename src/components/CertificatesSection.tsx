import React from 'react';
import { Award, CheckCircle2, Building2, MapPin, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-24 bg-[#050811] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Formal Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-tech">
            Certifications & Training
          </h2>
          <p className="text-base text-slate-400">
            Specialized accreditations in Agentic AI frameworks and applied machine learning engineering from premier tech institutes in Lahore.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-[#080d19] border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 hover:bg-[#0a1122] transition-all shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{cert.date}</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-tech">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 group-hover:border-sky-500/40 transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-850 space-y-1 text-xs">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5 font-tech">
                    <Building2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="text-slate-400 flex items-center gap-1.5 pl-5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{cert.location}</span>
                  </div>
                  <div className="text-sky-300 font-mono text-[11px] pl-5 pt-0.5">
                    Focus: {cert.focus}
                  </div>
                </div>

                {/* Curriculum / Skills Learned */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                    Core Specializations Mastered:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {cert.skillsLearned.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-400 font-mono">›</span>
                        <span className="leading-snug font-sans">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Credential Verification footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Credential Confirmed</span>
                <span className="text-sky-400 font-medium">Farheen.Rafiq</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
