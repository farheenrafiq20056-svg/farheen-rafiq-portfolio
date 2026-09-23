import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { AutomationSection } from './components/AutomationSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080d17] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 flex flex-col font-sans">
      {/* Sticky Top Bar (Zone 1 - Zone 2 - Zone 3) */}
      <Navbar onContactClick={handleScrollToContact} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* About / Hero */}
        <HeroSection />

        {/* Skills & Technical Competencies */}
        <SkillsSection />

        {/* Featured Projects (AdKit, CarePen AI, Dental Voice Agent, LeadShield CRM, SparkFix) */}
        <ProjectsSection />

        {/* Live Interactive Architecture Sandbox (CarePen Multilingual Triage + VAPI Voice Simulator) */}
        <InteractiveShowcase />

        {/* Automation Work (KDP/IngramSpark 50+ Profiles, n8n, WhatsApp Bots) */}
        <AutomationSection />

        {/* Formal Certificates (Agentic AI - Ideowersity Arfa Tower, AI Seekho - UMT) */}
        <CertificatesSection />

        {/* Contact & Inquiry Hub (Get in touch) */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
