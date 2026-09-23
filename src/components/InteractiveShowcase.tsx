import React, { useState } from 'react';
import {
  Stethoscope,
  PhoneCall,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Clock,
  Send,
  Calendar,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface ClinicalScenario {
  id: string;
  name: string;
  patient: string;
  age: string;
  rawConversation: string;
  triagePriority: 'Red - Urgent' | 'Yellow - Moderate' | 'Green - Routine';
  chiefComplaint: string;
  soapNotes: {
    subjective: string;
    objective: string;
    assessment: string;
    plan: string;
  };
  referralSummary: string;
  flags: string[];
}

const CLINICAL_SCENARIOS: ClinicalScenario[] = [
  {
    id: 'pediatric-respiratory',
    name: 'Pediatric Acute Respiratory Distress',
    patient: 'Zainab Bibi (Mother) with 3yo Child',
    age: '3 yrs',
    rawConversation:
      'Doctor sahab bache ko kal raat se shadeed tez bukhar hai (103°F). Saans lene me bohot zyada dushwari ho rahi hai aur pasliyan chal rahi hain. Kuch kha pee nahi raha aur bar bar so jata hai. Humne ghar me Panadol drop di thi par asar nahi hua.',
    triagePriority: 'Red - Urgent',
    chiefComplaint: 'High-grade fever (103°F) & severe acute dyspnea with subcostal retractions (3 days)',
    soapNotes: {
      subjective:
        '3-year-old presenting with 24-hr history of spiking high-grade pyrexia (103°F unresponsive to home paracetamol). Mother reports noticeable respiratory distress, marked lethargy, and poor oral fluid intake.',
      objective:
        'Visible tachypnea and marked chest indrawing/subcostal retractions noted in patient description. Temp: 103°F. High risk for lower respiratory tract infection / severe bronchiolitis.',
      assessment: 'Acute Bronchiolitis vs. Severe Community-Acquired Pneumonia with Respiratory Compromise.',
      plan: 'Immediate oxygen saturation monitoring via pulse oximetry, humidified O2 if SpO2 < 92%, urgent nebulization with bronchodilator, pediatric hospital emergency transfer.',
    },
    referralSummary:
      'Urgent Pediatric Emergency Referral: Suspected Severe Pneumonia/Bronchiolitis with chest indrawing. Immediate tertiary care transfer required.',
    flags: ['Subcostal Retractions (Pasliyan)', 'Spiking Pyrexia 103°F', 'Dehydration / Lethargy Risk'],
  },
  {
    id: 'gastro-dehydration',
    name: 'Acute Gastroenteritis & Hypotension',
    patient: 'Kamran Tariq',
    age: '38 yrs',
    rawConversation:
      'Assalam o alaikum doc, pichle 2 din se severe vomiting aur water jese watery loose motions hain. Paani bhi piyo toh ulti ajati hai. Sar bohot ghoom raha hai aur kharay honay par chakkar ate hain, shadeed kamzori hai.',
    triagePriority: 'Yellow - Moderate',
    chiefComplaint: 'Intractable vomiting and watery diarrhea for 48 hours with postural dizziness',
    soapNotes: {
      subjective:
        '38-year-old male with 2-day acute gastrointestinal symptoms. Complete oral intolerance due to continuous emesis. Reports symptomatic orthostatic lightheadedness and dry mouth.',
      objective:
        'Clinical signs of moderate to severe dehydration. Tachycardia and postural hypotension suspected based on symptomatology.',
      assessment: 'Acute Gastroenteritis with moderate dehydration and hemodynamic instability.',
      plan: 'IV Cannulation with immediate 1000ml Ringer Lactate fluid resuscitation. IV Ondansetron 4mg for anti-emetic control. Stool R/E and Serum Electrolytes profile.',
    },
    referralSummary:
      'Daycare IV Fluid Protocol: Urgent rehydration with antiemetics and electrolyte replenishment to prevent acute pre-renal azotemia.',
    flags: ['Oral Fluid Intolerance', 'Postural Dizziness', 'Severe Electrolyte Depletion Risk'],
  },
  {
    id: 'diabetic-neuropathy',
    name: 'Uncontrolled Diabetes with Neuropathy',
    patient: 'Nasreen Akhtar',
    age: '54 yrs',
    rawConversation:
      'Doctor sahab mera sugar level subah fasting 210 aya tha. Pichle 2 hafton se dono paon k talwo me aag jesi jalan aur suian chubhti hain. Raat ko neend nahi aati dard ki wajah se.',
    triagePriority: 'Green - Routine',
    chiefComplaint: 'Poorly controlled Type-2 Diabetes with bilateral burning plantar dysesthesia',
    soapNotes: {
      subjective:
        '54-year-old female known diabetic. Reports fasting hyperglycemia (210 mg/dL). Bilateral lower extremity paresthesias described as burning needle sensations, worsening nocturnally.',
      objective:
        'Consistent with symptomatic Diabetic Peripheral Neuropathy. Foot examination required to rule out sensory loss or early ulceration.',
      assessment: 'Sub-optimally managed Type 2 Diabetes Mellitus with Distal Symmetric Sensorimotor Polyneuropathy.',
      plan: 'Order HbA1c, Fasting Lipid Profile, Urine Albumin-to-Creatinine Ratio. Titrate oral hypoglycemic agents. Consider Pregabalin 75mg nocte for neuropathic pain control. Diabetic foot care counseling.',
    },
    referralSummary:
      'Endocrinology & Diabetic Foot Clinic Review: Glycemic optimization and formal monofilament sensory threshold testing.',
    flags: ['Fasting Glucose > 200 mg/dL', 'Nocturnal Paresthesia', 'Diabetic Foot Surveillance'],
  },
];

export const InteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'carepen' | 'voiceAgent'>('carepen');
  const [selectedScenario, setSelectedScenario] = useState<ClinicalScenario>(CLINICAL_SCENARIOS[0]);
  const [customInput, setCustomInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeVoiceStep, setActiveVoiceStep] = useState(0);

  const voiceSteps = [
    {
      speaker: 'Caller (Patient)',
      message: 'Hello! I need to book a dental checkup and teeth scaling this Thursday around 4 PM.',
      timestamp: '00:03',
      type: 'user',
    },
    {
      speaker: 'VAPI Voice Agent (Farheen)',
      message: 'Hello! I would be happy to help with that. Let me quickly check Dr. Arshad’s schedule for this Thursday at 4:00 PM.',
      timestamp: '00:06',
      type: 'agent',
      toolExecution: 'Function Call: check_calendar_availability({ date: "2026-09-24", service: "Scaling & Exam" })',
    },
    {
      speaker: 'System Webhook Response',
      message: 'API Status 200: Slot 4:00 PM is booked, but 4:30 PM and 5:15 PM are open.',
      timestamp: '00:07',
      type: 'system',
    },
    {
      speaker: 'VAPI Voice Agent',
      message: 'It looks like the 4:00 PM slot is currently taken, but Dr. Arshad has an opening at 4:30 PM or 5:15 PM. Would 4:30 PM work for you?',
      timestamp: '00:10',
      type: 'agent',
    },
    {
      speaker: 'Caller',
      message: 'Yes, 4:30 PM works great. My name is Hamza Malik and phone number is 0300-1234567.',
      timestamp: '00:14',
      type: 'user',
    },
    {
      speaker: 'VAPI Voice Agent',
      message: 'Perfect, Mr. Hamza. I have scheduled your dental scaling for Thursday at 4:30 PM. I am dispatching a confirmation SMS with clinic directions right now.',
      timestamp: '00:18',
      type: 'agent',
      toolExecution: 'Webhook Dispatched: create_appointment() & send_twilio_sms({ to: "+923001234567" })',
    },
  ];

  const handleRunCarePen = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 450);
  };

  return (
    <section id="interactive-demo" className="py-24 bg-[#050811] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Interactive Engineering Sandboxes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-tech">
            Test Farheen's AI Architecture In Action
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-sans">
            Test the multilingual Urdu/English clinical triage pipeline in <strong>CarePen AI</strong>, or step through the conversational decision tree of the <strong>VAPI Voice Telephony Agent</strong>.
          </p>

          {/* Interactive Switcher Controls */}
          <div className="flex items-center gap-2 mt-6 p-1 bg-slate-900/90 border border-slate-800 rounded-xl w-fit">
            <button
              type="button"
              onClick={() => setActiveTab('carepen')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'carepen'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>CarePen AI (Multilingual Scribe)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('voiceAgent')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'voiceAgent'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>VAPI Dental Voice Agent Flow</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CarePen AI Multilingual Medical Triage */}
        {activeTab === 'carepen' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Input & Consultation Selector */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-sky-400" />
                    <span>Select Multilingual Patient Interaction</span>
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">Urdu / Roman Urdu</span>
                </div>

                <div className="space-y-2">
                  {CLINICAL_SCENARIOS.map((sc) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => {
                        setSelectedScenario(sc);
                        setCustomInput('');
                      }}
                      className={`w-full text-left p-3 rounded-xl border transition-all text-xs ${
                        selectedScenario.id === sc.id && !customInput
                          ? 'bg-sky-500/10 border-sky-500/50 text-white shadow-sm'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-white">{sc.name}</span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            sc.triagePriority.startsWith('Red')
                              ? 'bg-rose-500/20 text-rose-300'
                              : sc.triagePriority.startsWith('Yellow')
                              ? 'bg-amber-500/20 text-amber-300'
                              : 'bg-emerald-500/20 text-emerald-300'
                          }`}
                        >
                          {sc.triagePriority.split(' - ')[0]}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {sc.patient} · Age: {sc.age}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Patient Speech Input Box */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                    <span>Patient Consultation Transcript:</span>
                    <span className="text-[11px] text-sky-400">Colloquial Pakistani Dialogue</span>
                  </label>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed font-sans min-h-[90px]">
                    "{customInput || selectedScenario.rawConversation}"
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleRunCarePen}
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 active:scale-98 rounded-xl shadow-md shadow-sky-500/20 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isProcessing ? 'Normalizing & Triaging via Gemini API...' : 'Run CarePen Clinical Triage Pipeline'}</span>
                </button>
              </div>

              {/* Architecture Info Callout */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/60 text-xs text-slate-400 space-y-2">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>How Farheen Engineered CarePen:</span>
                </div>
                <p className="leading-relaxed">
                  CarePen leverages a two-stage prompting chain in Gemini API. First, it extracts colloquial Urdu idioms ("pasliyan chalna" → tachypnea / subcostal retraction). Then it executes clinical entity resolution into standard ICD-10 compatible SOAP summaries for Pakistani clinics.
                </p>
              </div>
            </div>

            {/* Right: AI Output Display */}
            <div className="lg:col-span-7">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                {/* Triage Priority Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400">Triage Urgency Score</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`h-3 w-3 rounded-full ${
                          selectedScenario.triagePriority.startsWith('Red')
                            ? 'bg-rose-500 animate-pulse'
                            : selectedScenario.triagePriority.startsWith('Yellow')
                            ? 'bg-amber-400'
                            : 'bg-emerald-400'
                        }`}
                      />
                      <span className="text-sm font-bold text-white font-mono">
                        {selectedScenario.triagePriority}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] font-mono uppercase text-slate-400">Chief Complaint</div>
                    <div className="text-xs text-slate-200 font-medium max-w-xs mt-0.5 truncate">
                      {selectedScenario.chiefComplaint}
                    </div>
                  </div>
                </div>

                {/* Urgency Red Flags */}
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Detected Clinical Red Flags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedScenario.flags.map((flag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200"
                      >
                        {flag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Structured SOAP Clinical Notes */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-sky-400" />
                      <span>Standardized English SOAP Notes</span>
                    </h4>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Gemini 2.5 Structured Output</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <span className="font-mono text-sky-400 font-semibold">[S] Subjective:</span>
                      <p className="text-slate-300 leading-relaxed">{selectedScenario.soapNotes.subjective}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <span className="font-mono text-sky-400 font-semibold">[O] Objective:</span>
                      <p className="text-slate-300 leading-relaxed">{selectedScenario.soapNotes.objective}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <span className="font-mono text-sky-400 font-semibold">[A] Assessment:</span>
                      <p className="text-slate-300 leading-relaxed">{selectedScenario.soapNotes.assessment}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                      <span className="font-mono text-sky-400 font-semibold">[P] Plan / Rx:</span>
                      <p className="text-slate-300 leading-relaxed">{selectedScenario.soapNotes.plan}</p>
                    </div>
                  </div>
                </div>

                {/* Referral Slip summary */}
                <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 text-xs space-y-1">
                  <div className="font-semibold text-sky-300 flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5" />
                    <span>Auto-Generated Tertiary Referral Slip:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{selectedScenario.referralSummary}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VAPI Dental Clinic Voice Agent Flow */}
        {activeTab === 'voiceAgent' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <h3 className="text-base font-bold text-white">Dental Clinic VAPI Autonomous Telephony</h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Live simulation of telephony turn-taking, calendar conflict detection, and automated SMS confirmation dispatch.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Latency: ~480ms
                </span>
                <span className="px-2.5 py-1 rounded bg-sky-950/50 text-sky-300 border border-sky-500/30">
                  Voice Model: Deepgram + VAPI
                </span>
              </div>
            </div>

            {/* Simulated Audio Call Stream */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {voiceSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border text-xs space-y-2 transition-all ${
                    step.type === 'agent'
                      ? 'bg-slate-950/80 border-sky-500/40 ml-4 sm:ml-8'
                      : step.type === 'system'
                      ? 'bg-emerald-950/30 border-emerald-500/30 mx-2 sm:mx-6 font-mono'
                      : 'bg-slate-950/40 border-slate-800 mr-4 sm:mr-8'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span
                      className={`font-semibold ${
                        step.type === 'agent'
                          ? 'text-sky-400'
                          : step.type === 'system'
                          ? 'text-emerald-400'
                          : 'text-slate-300'
                      }`}
                    >
                      {step.speaker}
                    </span>
                    <span className="text-slate-500 font-mono">{step.timestamp}</span>
                  </div>

                  <p className="text-slate-200 leading-relaxed text-sm">{step.message}</p>

                  {step.toolExecution && (
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{step.toolExecution}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                Integrated with Python FastAPI backend, Google Calendar API for atomic slot locking, and Twilio Messaging service for appointment slips.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
