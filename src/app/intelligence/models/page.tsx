'use client'

import React from 'react'
import {
  Brain, ShieldCheck, AlertTriangle, Clock,
  Heart, Wheat, UtensilsCrossed, Building2, Dna, Cpu,
  CheckCircle2, XCircle
} from 'lucide-react'

const models = [
  {
    id: 'ai-1',
    name: 'KPJ Radiology AI — Chest X-ray Screening',
    guild: 'Healthcare',
    guildColor: '#E11D48',
    version: 'v2.3.1',
    accuracy: 94.2,
    status: 'certified',
    trustMark: true,
    framework: 'AI Verify + WHO Health AI',
    description: 'AI-assisted screening of chest X-rays for tuberculosis and pneumonia detection in tropical populations.',
    lastAssessed: '12 Mar 2026',
    icon: Heart,
  },
  {
    id: 'ai-2',
    name: 'JPG Plantation Yield Predictor',
    guild: 'Agrifood',
    guildColor: '#22C55E',
    version: 'v1.8.0',
    accuracy: 87.6,
    status: 'certified',
    trustMark: true,
    framework: 'AI Verify',
    description: 'Predicts palm oil yield per hectare using satellite imagery, weather data, and historical yield records.',
    lastAssessed: '28 Feb 2026',
    icon: Wheat,
  },
  {
    id: 'ai-3',
    name: 'QSR Demand Forecasting Engine',
    guild: 'Food Services',
    guildColor: '#F97316',
    version: 'v3.1.0',
    accuracy: 91.3,
    status: 'certified',
    trustMark: true,
    framework: 'AI Verify + JAKIM Halal',
    description: 'Outlet-level demand forecasting with menu optimisation for 340+ QSR outlets across Southeast Asia.',
    lastAssessed: '5 Mar 2026',
    icon: UtensilsCrossed,
  },
  {
    id: 'ai-4',
    name: 'JLG Smart Building Energy Optimizer',
    guild: 'Proptech',
    guildColor: '#3B82F6',
    version: 'v2.0.0',
    accuracy: 89.1,
    status: 'in_review',
    trustMark: false,
    framework: 'AI Verify + TCFD/ISSB ESG',
    description: 'Optimises HVAC and lighting across smart buildings using occupancy data and weather forecasts.',
    lastAssessed: '—',
    icon: Building2,
  },
  {
    id: 'ai-5',
    name: 'Tropical Disease Biomarker Detection',
    guild: 'Life Sciences',
    guildColor: '#EC4899',
    version: 'v0.9.2',
    accuracy: 82.4,
    status: 'in_review',
    trustMark: false,
    framework: 'AI Verify + WHO',
    description: 'Identifies tropical disease biomarkers from blood panel data for early diagnosis.',
    lastAssessed: '—',
    icon: Dna,
  },
  {
    id: 'ai-6',
    name: 'Wafer Defect Detection AI',
    guild: 'Semiconductor',
    guildColor: '#6366F1',
    version: 'v1.2.0',
    accuracy: 96.8,
    status: 'in_review',
    trustMark: false,
    framework: 'AI Verify',
    description: 'Computer vision model detecting defects in semiconductor wafers during quality inspection.',
    lastAssessed: '—',
    icon: Cpu,
  },
  {
    id: 'ai-7',
    name: 'Halal Supply Chain Verifier',
    guild: 'Cross-Vertical',
    guildColor: '#A855F7',
    version: 'v1.0.0',
    accuracy: 88.5,
    status: 'certified',
    trustMark: true,
    framework: 'AI Verify + JAKIM',
    description: 'AI-powered traceability and verification for end-to-end Halal integrity from farm to fork.',
    lastAssessed: '20 Mar 2026',
    icon: ShieldCheck,
  },
  {
    id: 'ai-8',
    name: 'Farm-to-Fork Waste Reducer',
    guild: 'Cross-Vertical',
    guildColor: '#A855F7',
    version: 'v0.7.0',
    accuracy: 79.2,
    status: 'not_assessed',
    trustMark: false,
    framework: '—',
    description: 'Links supply chain data to outlet demand for waste reduction and menu optimisation.',
    lastAssessed: '—',
    icon: Wheat,
  },
]

const statusConfig: Record<string, { label: string; color: string; icon: typeof CheckCircle2 }> = {
  certified: { label: 'Certified', color: '#22C55E', icon: CheckCircle2 },
  in_review: { label: 'In Review', color: '#F59E0B', icon: Clock },
  not_assessed: { label: 'Not Assessed', color: '#6B7280', icon: XCircle },
}

export default function ModelsPage() {
  const certified = models.filter(m => m.status === 'certified').length
  const inReview = models.filter(m => m.status === 'in_review').length
  const notAssessed = models.filter(m => m.status === 'not_assessed').length
  const total = models.length

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary" />
          AI Model Marketplace
        </h1>
        <p className="text-text-secondary text-sm mt-1">
          {total} models across {6} guilds — with IDEAS Trust Mark certification
        </p>
      </div>

      {/* Compliance Overview */}
      <div className="flex items-center gap-6 bg-surface border border-border rounded-lg p-4">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#1E3A5F" strokeWidth="2.5" />
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#22C55E" strokeWidth="2.5"
              strokeDasharray={`${(certified / total) * 100} ${100 - (certified / total) * 100}`}
              strokeDashoffset="0" />
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#F59E0B" strokeWidth="2.5"
              strokeDasharray={`${(inReview / total) * 100} ${100 - (inReview / total) * 100}`}
              strokeDashoffset={`${-(certified / total) * 100}`} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-text-primary">{total}</span>
            <span className="text-[9px] text-text-secondary">Models</span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{certified}</div>
            <div className="text-xs text-text-secondary">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">{inReview}</div>
            <div className="text-xs text-text-secondary">In Review</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">{notAssessed}</div>
            <div className="text-xs text-text-secondary">Not Assessed</div>
          </div>
        </div>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {models.map((model) => {
          const config = statusConfig[model.status]
          const StatusIcon = config.icon
          return (
            <div key={model.id} className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ backgroundColor: model.guildColor }} />
              <div className="flex items-start gap-3 mt-1">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${model.guildColor}15` }}>
                  <model.icon className="w-5 h-5" style={{ color: model.guildColor }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-text-primary">{model.name}</h3>
                    {model.trustMark && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/30 flex items-center gap-0.5">
                        <ShieldCheck className="w-2.5 h-2.5" /> Trust Mark
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: `${model.guildColor}15`, color: model.guildColor }}>{model.guild}</span>
                    <span className="text-[10px] text-text-secondary font-mono">{model.version}</span>
                    <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: `${config.color}15`, color: config.color }}>
                      <StatusIcon className="w-2.5 h-2.5" /> {config.label}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mb-2">{model.description}</p>
                  <div className="flex items-center gap-4 text-[10px] text-text-secondary">
                    <span>Accuracy: <strong className="text-text-primary">{model.accuracy}%</strong></span>
                    <span>Framework: {model.framework}</span>
                    {model.lastAssessed !== '—' && <span>Assessed: {model.lastAssessed}</span>}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
