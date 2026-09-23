import React, { useState, useEffect, useRef } from 'react';
import {
  Cpu,
  Bot,
  Terminal,
  Activity,
  Zap,
  Layers,
  Sparkles,
  PhoneCall,
  Workflow,
  ShieldCheck,
  Database,
  CheckCircle2,
} from 'lucide-react';

interface AgentNode {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'synced' | 'ready';
  tools: string;
  icon: string;
  x: number;
  y: number;
  z: number;
  accent: string;
}

const AGENT_NODES: AgentNode[] = [
  {
    id: 'vapi-voice',
    name: 'VAPI Voice Telephony',
    role: 'Real-time Autonomous Voice Scheduler',
    status: 'active',
    tools: 'Twilio · Deepgram · Calendar API',
    icon: 'voice',
    x: -120,
    y: -80,
    z: 25,
    accent: '#38bdf8',
  },
  {
    id: 'gemini-clinical',
    name: 'CarePen Clinical Scribe',
    role: 'Urdu/English Triage & SOAP Generator',
    status: 'synced',
    tools: 'Gemini 2.5 API · Medical Ontologies',
    icon: 'scribe',
    x: 130,
    y: -70,
    z: -15,
    accent: '#10b981',
  },
  {
    id: 'selenium-runner',
    name: 'Selenium Headless Farm',
    role: '50+ Browser Anti-Detect Profiles',
    status: 'active',
    tools: 'Python · Dynamic Residential Proxies',
    icon: 'browser',
    x: 125,
    y: 95,
    z: 30,
    accent: '#f59e0b',
  },
  {
    id: 'n8n-pipeline',
    name: 'n8n Workflow Router',
    role: 'Multi-Channel CRM & Lead Sync',
    status: 'active',
    tools: 'Webhooks · WhatsApp API · HubSpot',
    icon: 'workflow',
    x: -130,
    y: 85,
    z: -20,
    accent: '#a855f7',
  },
];

export const Agentic3DCore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 6, y: -8 });
  const [activeNode, setActiveNode] = useState<AgentNode>(AGENT_NODES[0]);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [packetIndex, setPacketIndex] = useState(0);

  // Smooth mouse tilt parallax for realistic 3D spatial depth
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 14;
    const rotateX = -(y / (rect.height / 2)) * 14;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 4, y: -6 });
  };

  // Continuous subtle 3D orbital animation and data packet cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitAngle((prev) => (prev + 0.5) % 360);
    }, 40);

    const packetTimer = setInterval(() => {
      setPacketIndex((prev) => (prev + 1) % AGENT_NODES.length);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearInterval(packetTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto aspect-square sm:aspect-[4/3.8] flex items-center justify-center select-none perspective-1000 p-2"
    >
      {/* 3D Transform Stage */}
      <div
        className="relative w-full h-full rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#070d1e]/95 to-slate-950/95 border border-sky-500/20 p-6 sm:p-7 shadow-2xl shadow-sky-500/10 flex flex-col justify-between preserve-3d transition-transform duration-200 ease-out overflow-hidden"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(56, 189, 248, 0.15)',
        }}
      >
        {/* Holographic grid texture */}
        <div className="absolute inset-0 bg-grid-tech opacity-40 pointer-events-none" />

        {/* Ambient colored light glow */}
        <div
          className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* 3D Top Telemetry Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-3 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-300 font-semibold">AGENTIC_ORCHESTRATOR</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sky-400">ACTIVE: 4 NODES</span>
            <span className="text-slate-600">·</span>
            <span className="text-emerald-400">LATENCY: 480MS</span>
          </div>
        </div>

        {/* 3D Interactive Spatial Graph Canvas */}
        <div className="relative flex-1 flex items-center justify-center my-3 min-h-[220px]">
          {/* Orbital rings */}
          <div className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-sky-500/15 animate-[spin_30s_linear_infinite] pointer-events-none" />
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-slate-700/40 pointer-events-none" />

          {/* Central Autonomous Core Hub */}
          <div className="relative z-20 flex flex-col items-center justify-center p-4 rounded-2xl bg-[#091124] border-2 border-sky-400/50 shadow-xl shadow-sky-500/30 text-center cursor-pointer group hover:scale-105 transition-all">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/40 mb-2">
              <Bot className="w-6 h-6 animate-pulse" />
              {/* Radial pulse ripple */}
              <div className="absolute inset-0 rounded-xl bg-sky-400/20 animate-ping" />
            </div>
            <div className="font-tech font-bold text-white text-xs tracking-tight">
              Farheen AI Core
            </div>
            <div className="text-[10px] text-sky-400 font-mono mt-0.5">
              Autonomous Hub
            </div>
          </div>

          {/* 4 Orbiting Functional Subagents */}
          {AGENT_NODES.map((node, index) => {
            const isTargeted = activeNode.id === node.id;
            const isStreamingPacket = packetIndex === index;

            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`absolute z-20 p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer backdrop-blur-md ${
                  isTargeted
                    ? 'bg-slate-900 border-sky-400 shadow-lg shadow-sky-500/30 scale-105'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
                style={{
                  transform: `translate(${node.x}px, ${node.y}px)`,
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: node.accent }}
                  />
                  <span className="text-[11px] font-bold text-slate-200 whitespace-nowrap font-tech">
                    {node.name.split(' ')[0]}
                  </span>
                </div>

                <div className="text-[9px] text-slate-400 font-mono mt-0.5">
                  {node.tools.split('·')[0]}
                </div>

                {/* Live active streaming indicator */}
                {isStreamingPacket && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* 3D Bottom Node Inspector Card */}
        <div className="relative z-10 p-3 sm:p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-xs space-y-1.5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="text-sky-300 font-semibold text-[11px] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-sky-400" />
              <span>NODE: {activeNode.name}</span>
            </span>
            <span className="text-[10px] text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>ONLINE</span>
            </span>
          </div>

          <div className="text-slate-300 text-[11px] font-sans leading-tight">
            {activeNode.role}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
            <span>Stack: {activeNode.tools}</span>
            <span className="text-sky-400">Click node to inspect</span>
          </div>
        </div>
      </div>
    </div>
  );
};
