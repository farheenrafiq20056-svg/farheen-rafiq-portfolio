export interface Project {
  id: string;
  title: string;
  category: 'ai-agents' | 'fullstack' | 'automation';
  categoryLabel: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  architecture: string;
  demoUrl?: string;
  githubUrl?: string;
  badge?: string;
  image?: string;
}

export interface AutomationWork {
  id: string;
  title: string;
  clientType: string;
  scale: string;
  description: string;
  tools: string[];
  workflow: string[];
  outcome: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; detail?: string }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  location: string;
  focus: string;
  date: string;
  skillsLearned: string[];
}

export const PERSONAL_INFO = {
  name: 'Farheen Rafiq',
  title: 'Agentic AI & Python Developer',
  location: 'Lahore, Pakistan',
  status: 'Open to Roles & High-Impact Automation Contracts',
  headline: 'Farheen Rafiq — Agentic AI & Python Developer',
  subheadline:
    'Builds AI agents, automation systems, and full-stack AI-powered products — from voice agents to multi-tool automation workflows to AI-assisted web apps.',
  bio: 'BSCS student at Virtual University of Pakistan and self-taught AI automation specialist. I specialize in designing autonomous multi-agent pipelines, production VAPI voice agents, and robust Python automation infrastructure that bridges modern LLMs with real business workflows.',
  email: 'farheenrafiq20056@gmail.com',
  phone: '03034183416',
  phoneFormatted: '+92 303 4183416',
  whatsappUrl: 'https://wa.me/923034183416?text=Hi%20Farheen%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  linkedin: 'https://linkedin.com/in/farheen-rafiq-682316281',
  linkedinDisplay: 'linkedin.com/in/farheen-rafiq-682316281',
  github: 'https://github.com/farheenrafiq20056-svg',
  githubDisplay: 'github.com/farheenrafiq20056-svg',
  metrics: [
    { label: 'Deployed AI Systems', value: '5+' },
    { label: 'Browser Profiles Automated', value: '50+' },
    { label: 'LLM Architectures', value: 'Claude · OpenAI · Gemini · Qwen' },
    { label: 'Core Base', value: 'Lahore, PK' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'carepen-ai',
    title: 'CarePen AI',
    category: 'ai-agents',
    categoryLabel: 'Agentic AI & Healthcare',
    subtitle: 'Multilingual Clinical Scribe & Triage Web App',
    description:
      'Gemini-powered clinical scribe and triage web app for doctors in Pakistan; ingests unstructured multilingual consultations (Urdu, Roman Urdu, English) and generates structured clinical notes, urgency triage flags, and referral slips.',
    longDescription:
      'CarePen AI addresses the critical documentation bottlenecks faced by healthcare practitioners in South Asia. Typical patient interactions in Pakistan flow across mixed Urdu, Roman Urdu, and colloquial English phrases. CarePen AI uses structured Gemini reasoning with specialized medical ontologies to transcribe, detect acute clinical symptoms, assign triage priority codes (Green/Yellow/Red), and generate standard SOAP notes along with doctor referral slips.',
    techStack: ['Next.js', 'Supabase Auth', 'Gemini API', 'TypeScript', 'Tailwind CSS', 'FastAPI'],
    features: [
      'Multilingual parsing of Urdu, Roman Urdu, and English medical vernacular',
      'Instant clinical SOAP notes generation with ICD-10 compatible summary',
      'Real-time urgency triage scoring with acute symptom red flags',
      'Automated referral slip generation and patient discharge briefing',
      'Secure Supabase authentication and session data privacy',
    ],
    architecture:
      'Speech/Text Audio Stream → Urdu/Roman Urdu LLM Normalizer (Gemini API) → Medical Entity Triage Extractor → Structured JSON Output → Next.js Patient Dashboard & PDF Referral Generator.',
    demoUrl: 'https://carepen-ai.vercel.app',
    githubUrl: 'https://github.com/farheenrafiq20056-svg/carepen-ai',
    badge: 'Featured HealthTech',
  },
  {
    id: 'adkit',
    title: 'AdKit',
    category: 'ai-agents',
    categoryLabel: 'AI Generative Tool',
    subtitle: 'AI-Powered Script Engine for Short-Form UGC Video Ads',
    description:
      'AI-powered tool that generates high-converting scripts for short-form UGC ad videos (TikTok, Reels, Shorts). Built with Next.js frontend, Python backend, and Supabase database.',
    longDescription:
      'Engineered for marketing teams and UGC creators to generate high-retention video ad concepts in seconds. AdKit breaks scripts down into 3-second hook variations, pain-point agitation, product demonstration cues, emotional payoff, and high-converting calls-to-action with synchronized visual B-roll prompts.',
    techStack: ['Next.js', 'Python', 'Supabase', 'FastAPI', 'Claude & OpenAI APIs', 'Tailwind CSS'],
    features: [
      'Multi-angle 3-second hook generator optimized for TikTok & Reels retention',
      'Split-format script outputs: Visual Action cues vs. Voiceover narration',
      'Audience persona targeting with tone customization (casual, witty, authoritative)',
      'Supabase database for saving brand kits, saved hooks, and export histories',
    ],
    architecture:
      'Next.js UI → FastAPI Python Microservice → Hook & Retention Strategy Engine → Prompt Chain Orchestrator → Supabase PostgreSQL Store.',
    demoUrl: 'https://adkit-ai.vercel.app',
    githubUrl: 'https://github.com/farheenrafiq20056-svg/adkit',
  },
  {
    id: 'dental-voice-agent',
    title: 'Dental Clinic Voice Agent',
    category: 'ai-agents',
    categoryLabel: 'Production Voice AI',
    subtitle: 'VAPI-Based Autonomous Phone Appointment Scheduler',
    description:
      'A production VAPI-based AI voice agent that handles live inbound & outbound appointment booking calls for a dental clinic, syncing with real-time calendars and sending SMS confirmations.',
    longDescription:
      'Deployed for a high-traffic dental clinic to resolve after-hours inquiries and reduce receptionist telephone burdens. The agent maintains natural conversational cadence, understands appointment rescheduling requests, queries dentist availability slots, captures patient details, and triggers instant confirmation webhooks.',
    techStack: ['VAPI Voice AI', 'Python', 'FastAPI', 'Twilio Webhooks', 'Google Calendar API', 'Make/n8n'],
    features: [
      'Ultra-low-latency voice conversation with human-like turn-taking',
      'Dynamic appointment slot lookup and automatic calendar double-booking prevention',
      'Insurance provider inquiry triage and clinic pricing guidance',
      'Automated confirmation SMS with cancellation & reschedule link generation',
    ],
    architecture:
      'Inbound Telephony (Twilio) → VAPI Voice Processing Engine (Speech-to-Text → LLM reasoning → Text-to-Speech) → FastAPI Webhook Router → Calendar Integration & SMS Trigger.',
    demoUrl: 'https://vapi.ai',
    githubUrl: 'https://github.com/farheenrafiq20056-svg/dental-clinic-voice-agent',
    badge: 'Live Production',
  },
  {
    id: 'leadshield-crm',
    title: 'LeadShield CRM',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Enterprise',
    subtitle: 'Role-Based Lead Management System with Granular Access',
    description:
      'Role-based CRM application built with Next.js and FastAPI, providing strict admin, manager, and sales agent access control tiers alongside lead lifecycle auditing.',
    longDescription:
      'Designed to prevent customer data leakages in fast-moving sales environments. Features token-authenticated JWT sessions, role-based database policies, automated lead assignment algorithms, activity audit logs, and analytics dashboards for team performance tracking.',
    techStack: ['Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'JWT Auth', 'Tailwind CSS'],
    features: [
      'Granular Role-Based Access Control (Admin, Sales Manager, Account Rep)',
      'Lead assignment round-robin engine with status lifecycle pipelines',
      'Real-time activity audit logging for customer data security',
      'Interactive pipeline view with stage conversions and conversion metrics',
    ],
    architecture:
      'Next.js 14 Client → FastAPI REST Backend with Pydantic Schema Validation → PostgreSQL with Row-Level Security Policies → JWT Auth Pipeline.',
    demoUrl: 'https://leadshield-crm.vercel.app',
    githubUrl: 'https://github.com/farheenrafiq20056-svg/leadshield-crm',
  },
  {
    id: 'sparkfix',
    title: 'SparkFix',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Platform',
    subtitle: 'Home-Service Escrow Booking & Verified Trades Marketplace',
    description:
      'Home-service escrow booking platform with FastAPI, PostgreSQL, and Next.js, featuring license-verified trades providers and milestone-released payment escrow.',
    longDescription:
      'Provides peace of mind for residential service hiring (electricians, plumbing, HVAC). SparkFix holds booking deposits in an escrow ledger until the customer confirms verified job completion. Includes provider license verification workflows, real-time booking dispatch, and rating reviews.',
    techStack: ['FastAPI', 'PostgreSQL', 'Next.js', 'Python', 'SQLAlchemy', 'Tailwind CSS'],
    features: [
      'Milestone escrow hold & release transaction engine',
      'Contractor credential and trade license verification portal',
      'Interactive service booking scheduler with location dispatch',
      'Dispute resolution workflow and customer review verification',
    ],
    architecture:
      'Next.js App Router UI → FastAPI Service API → PostgreSQL Database with SQLAlchemy ORM → Stripe/Escrow Ledger Engine.',
    demoUrl: 'https://sparkfix.vercel.app',
    githubUrl: 'https://github.com/farheenrafiq20056-svg/sparkfix',
  },
];

export const AUTOMATION_WORKS: AutomationWork[] = [
  {
    id: 'book-publishing-automation',
    title: 'Multi-Profile Book Publishing Automation (KDP & IngramSpark)',
    clientType: 'Freelance Publishing Agency Client',
    scale: '50+ Isolated Browser Profiles / 100s of Book Submissions',
    description:
      'Engineered an enterprise-grade Python & Selenium automation suite to orchestrate high-volume book listing and manuscript submissions across Amazon KDP and IngramSpark. Overcame platform captchas, session tracking, and tedious manual form fill by managing 50+ isolated fingerprint profiles.',
    tools: ['Python', 'Selenium WebDriver', 'Anti-Detect Browser Profiles', 'Undetected ChromeDriver', 'Pandas', 'Dynamic Proxies'],
    workflow: [
      'CSV metadata batch ingest & cover/interior PDF verification',
      'Dynamic session initialization across 50+ isolated browser profiles with residential proxy routing',
      'Automated form submission across title, description, categories, pricing, and tax declarations',
      'Error catching, automated screenshot capture on validation failure, and completion report generation',
    ],
    outcome:
      'Reduced manual cataloging time from 45 minutes per title down to under 3.5 minutes, allowing client to publish hundreds of titles error-free with zero profile cross-contamination.',
  },
  {
    id: 'n8n-lead-qualification',
    title: 'Multi-Channel Inbound Lead Qualification & CRM Sync',
    clientType: 'Real Estate & Property Development Firm',
    scale: 'Thousands of monthly inbound ad inquiries',
    description:
      'Built autonomous n8n workflows that listen to Facebook Lead Ads, Google Forms, and website webhooks. Uses LLM-based categorization to evaluate lead budget, timeframe, and intent, instantly routing VIP buyers to senior brokers via WhatsApp and email notifications.',
    tools: ['n8n', 'Webhook APIs', 'OpenAI API', 'WhatsApp Business API', 'Google Sheets', 'HubSpot'],
    workflow: [
      'Webhook listener triggers on ad inquiry or landing form submission',
      'OpenAI prompt evaluates lead readiness and scores urgency (High/Medium/Low)',
      'Automated contact record creation & pipeline assignment in CRM',
      'Instant customized WhatsApp confirmation message dispatched to lead within 15 seconds',
    ],
    outcome:
      'Lead response time dropped from 3 hours to under 20 seconds; qualified broker conversion rate surged by 38%.',
  },
  {
    id: 'manychat-whatsapp-bots',
    title: 'Conversational WhatsApp & ManyChat Booking Automation',
    clientType: 'Salon, Wellness & E-Commerce Businesses',
    scale: '24/7 autonomous booking & abandoned cart recovery',
    description:
      'Configured conversational AI flows on WhatsApp and ManyChat for appointment scheduling, FAQ assistance, and abandoned cart follow-ups with intelligent human agent handover triggers.',
    tools: ['ManyChat', 'WhatsApp Cloud API', 'Python Webhooks', 'Google Calendar', 'Make.com'],
    workflow: [
      'Customer sends message via Instagram Direct or WhatsApp',
      'Natural language flow confirms desired service and available staff slots',
      'Booking reserved in calendar with automated reminder notification sent 2 hours prior',
      'Post-appointment review request workflow triggered 24 hours later',
    ],
    outcome:
      'Cut salon front-desk call load by 60% and recovered over 22% of abandoned e-commerce checkout inquiries.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Agents',
    description: 'Autonomous agents, multi-model LLM orchestration, and voice systems',
    skills: [
      { name: 'LLM Integration', detail: 'Claude 3.7, OpenAI GPT-4o, Gemini 2.5, Qwen' },
      { name: 'Agentic Workflows', detail: 'Tool-use, self-reflection, plan & execute' },
      { name: 'VAPI Voice Agents', detail: 'Telephony, low-latency speech, appointment booking' },
      { name: 'Prompt & Agent Design', detail: 'Few-shot prompting, system instructions, JSON mode' },
    ],
  },
  {
    title: 'Automation & Orchestration',
    description: 'End-to-end workflow automation, browser control, and webhooks',
    skills: [
      { name: 'n8n Workflows', detail: 'Self-hosted & cloud workflow orchestration' },
      { name: 'ManyChat & WhatsApp Bots', detail: 'Conversational marketing, booking bots' },
      { name: 'Selenium & Browser Automation', detail: '50+ isolated profiles, form automation, KDP' },
      { name: 'Webhook & API Integrations', detail: 'RESTful sync, event-driven triggers' },
    ],
  },
  {
    title: 'Development & Backends',
    description: 'Full-stack engineering with Python, Next.js, and modern databases',
    skills: [
      { name: 'Python', detail: 'FastAPI, scripting, asynchronous pipelines, data processing' },
      { name: 'Next.js & React', detail: 'App router, TypeScript, server actions, clean UI' },
      { name: 'Express & Node.js', detail: 'Microservices, REST APIs, middleware' },
      { name: 'Databases & Storage', detail: 'Supabase, PostgreSQL, MongoDB' },
      { name: 'REST APIs', detail: 'Pydantic schemas, JWT authentication, rate limiting' },
    ],
  },
  {
    title: 'AI-Assisted Full-Stack',
    description: 'Rapid product engineering and prototyping leveraging modern AI tooling',
    skills: [
      { name: 'Rapid Product Building', detail: 'From concept to live deploy within days' },
      { name: 'Next.js + Python + Supabase', detail: 'Production-ready full-stack architecture' },
      { name: 'Agent-Driven Development', detail: 'Test-first iteration, modular component systems' },
    ],
  },
  {
    title: 'Machine Learning & Data',
    description: 'Data analysis, visualization, and foundational neural network models',
    skills: [
      { name: 'Core Data Libraries', detail: 'pandas, numpy, Matplotlib, Seaborn' },
      { name: 'Neural Architectures', detail: 'CNN (Computer Vision), RNN (Sequential data)' },
      { name: 'Data Prototyping', detail: 'Streamlit dashboards, interactive analytics' },
      { name: 'Kaggle Analysis', detail: 'Exploratory data analysis & model benchmarking' },
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'agentic-ai-ideo',
    title: 'Agentic AI Specialization',
    issuer: 'Ideowersity Training Institute',
    location: 'Arfa Tower, Lahore, Pakistan',
    focus: 'Autonomous Agents, LLM Function Calling & Multi-Agent Architecture',
    date: 'Certified',
    skillsLearned: [
      'Multi-agent coordination patterns & task delegation',
      'Advanced function calling & external tool integration',
      'Memory management & RAG architecture',
      'Production deployment of autonomous AI pipelines',
    ],
  },
  {
    id: 'ai-seekho-umt',
    title: 'AI Seekho Program',
    issuer: 'UMT (University of Management and Technology)',
    location: 'Lahore, Pakistan',
    focus: 'Applied AI, Machine Learning Foundations & Industry Automation',
    date: 'Certified',
    skillsLearned: [
      'Foundational Machine Learning models & data preprocessing',
      'Practical computer vision & NLP applications',
      'Python data engineering with pandas and numpy',
      'Real-world problem solving with AI algorithms',
    ],
  },
];
