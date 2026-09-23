import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  MapPin,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    projectType: 'Agentic AI / LLM System',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.emailOrPhone.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields to continue.');
      return;
    }

    setFormError('');
    setSubmitted(true);

    // Build mailto link with encoded parameters
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Farheen,\n\nName: ${formData.name}\nContact: ${formData.emailOrPhone}\nProject Interest: ${formData.projectType}\n\nProject Details:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    // Trigger user mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050811] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-tech">
            Start a Conversation
          </h2>
          <p className="text-base text-slate-400">
            Available for full-time agentic engineering roles, AI automation contracts, and production voice agent deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Hub Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#080d19] border border-slate-800 space-y-2 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-2 text-sky-400 font-semibold">
                  <Mail className="w-4 h-4" />
                  <span>Direct Email</span>
                </span>
                <span className="text-[11px]">Primary</span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-medium text-white hover:text-sky-300 transition-colors truncate font-tech"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp / Phone Card */}
            <div className="p-5 rounded-2xl bg-[#080d19] border border-slate-800 space-y-2 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp & Phone</span>
                </span>
                <span className="text-[11px]">Direct Chat</span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-1">
                <div>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm sm:text-base font-medium text-white hover:text-emerald-300 transition-colors block font-tech"
                  >
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                  <span className="text-[11px] text-slate-400 font-mono">Local: {PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="px-3 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5 transition-colors font-tech"
                  >
                    <span>Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Accounts Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-4 rounded-2xl bg-[#080d19] border border-slate-800 hover:border-sky-500/50 hover:bg-[#0a1122] transition-all flex flex-col justify-between space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <Linkedin className="w-5 h-5 text-sky-400" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-300 transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors font-tech">
                    LinkedIn
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono truncate">
                    farheen-rafiq
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-4 rounded-2xl bg-[#080d19] border border-slate-800 hover:border-slate-700 hover:bg-[#0a1122] transition-all flex flex-col justify-between space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <Github className="w-5 h-5 text-slate-200" />
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors font-tech">
                    GitHub
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono truncate">
                    farheenrafiq20056-svg
                  </div>
                </div>
              </a>
            </div>

            {/* Base Location Note */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-850 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Based in Lahore, Pakistan · Remote Worldwide Availability (UTC+5)</span>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#080d19] border border-slate-800/90 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-tech">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>Send a Direct Project Message</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your project requirements below. Submitting will pre-fill your email client directly to Farheen Rafiq.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white font-tech">Draft Prepared & Mail Client Opened!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, {formData.name}. If your email app did not open automatically, you can send an email directly to{' '}
                    <strong className="text-white font-mono">{PERSONAL_INFO.email}</strong> or message on WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors font-tech"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-slate-300 font-tech">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Salman Khan / Ali Raza"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-400 focus:outline-none text-xs text-white placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="emailOrPhone" className="text-xs font-medium text-slate-300 font-tech">
                        Email or WhatsApp Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="emailOrPhone"
                        type="text"
                        required
                        value={formData.emailOrPhone}
                        onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                        placeholder="e.g. name@company.com or +92..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-400 focus:outline-none text-xs text-white placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="text-xs font-medium text-slate-300 font-tech">
                      Project or Role Domain
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-400 focus:outline-none text-xs text-white transition-colors cursor-pointer font-sans"
                    >
                      <option value="Agentic AI / LLM System">Agentic AI / LLM System</option>
                      <option value="VAPI Voice Telephony Agent">VAPI Voice Telephony Agent</option>
                      <option value="Browser & Selenium Automation (Multi-Profile)">
                        Browser & Selenium Automation (Multi-Profile)
                      </option>
                      <option value="n8n / WhatsApp Business Workflow">
                        n8n / WhatsApp Business Workflow
                      </option>
                      <option value="Full-Stack AI Web Application (Next.js + Python)">
                        Full-Stack AI Web Application (Next.js + Python)
                      </option>
                      <option value="Full-Time Developer Hiring Inquiry">
                        Full-Time Developer Hiring Inquiry
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300 font-tech">
                      Project Scope & Goals <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're looking to automate or build..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-400 focus:outline-none text-xs text-white placeholder:text-slate-600 transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-sky-400 hover:bg-sky-300 active:scale-98 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition-all cursor-pointer font-tech"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message & Launch Draft</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
