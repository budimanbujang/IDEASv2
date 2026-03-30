'use client'

import React, { useState } from 'react'
import {
  Sparkles, Zap, Clock, ChevronRight, Users, CheckCircle2,
  Target, ArrowRight, Brain, AlertTriangle
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Match = {
  provider: string
  emoji: string
  score: number
  reasoning: string[]
  description: string
}

type Challenge = {
  id: string
  title: string
  description: string
  seeker: string
  seekerFlag: string
  guilds: { name: string; color: string }[]
  requiredCapabilities: string[]
  urgency: 'high' | 'medium' | 'low'
  posted: string
  matches: Match[]
}

const challenges: Challenge[] = [
  {
    id: 'swiss-pharma',
    title: 'Tropical Clinical Trial Infrastructure for Rare Disease Programme',
    description: 'Swiss pharmaceutical company seeking end-to-end clinical trial infrastructure with access to diverse tropical patient cohorts for Phase II/III rare disease trials. Requires biobank access, regulatory fast-track, and GMP manufacturing for personalised therapies.',
    seeker: 'Roche (Switzerland)',
    seekerFlag: '🇨🇭',
    guilds: [
      { name: 'Healthcare', color: '#E11D48' },
      { name: 'Life Sciences', color: '#EC4899' },
    ],
    requiredCapabilities: ['Clinical Trial Infra', 'Biobank', 'GMP Manufacturing', 'Regulatory Support'],
    urgency: 'high',
    posted: '2 days ago',
    matches: [
      { provider: 'KPJ Healthcare', emoji: '🏥', score: 94, reasoning: ['Clinical trial infrastructure', 'Biobank 120K samples', 'Diverse patient cohorts'], description: 'Anchor tenant with full hospital network and tropical disease research capability.' },
      { provider: 'BioNexus Therapeutics', emoji: '🧬', score: 87, reasoning: ['GMP manufacturing', 'Regulatory expertise', 'Drug formulation'], description: 'Resident biotech firm specialised in personalised medicine manufacturing.' },
      { provider: 'IBTEC Life Sciences Guild', emoji: '🔬', score: 82, reasoning: ['Guild coordination', 'Lab access', 'Talent pool'], description: 'Cross-guild coordination for multi-discipline clinical programmes.' },
      { provider: 'TropMed Research Institute', emoji: '🌿', score: 76, reasoning: ['Tropical disease data', 'Patient recruitment', 'Ethics approval'], description: 'Research institute with 15-year tropical disease dataset and ethics fast-track.' },
      { provider: 'MedLogistics Asia', emoji: '📦', score: 71, reasoning: ['Cold chain logistics', 'Sample transport', 'Compliance'], description: 'Specialised in temperature-controlled pharmaceutical logistics across ASEAN.' },
    ],
  },
  {
    id: 'korean-battery',
    title: 'GMP Manufacturing & Testing Facility for Next-Gen Battery Cells',
    description: 'Korean battery startup seeking GMP-grade manufacturing bay and testing facility for solid-state battery cell prototyping. Requires cleanroom access, quality testing equipment, and proximity to semiconductor supply chain.',
    seeker: 'SolidPower Korea',
    seekerFlag: '🇰🇷',
    guilds: [
      { name: 'Semiconductor', color: '#6366F1' },
      { name: 'Manufacturing', color: '#F59E0B' },
    ],
    requiredCapabilities: ['GMP Manufacturing', 'Cleanroom Access', 'Testing Equipment', 'Supply Chain'],
    urgency: 'medium',
    posted: '5 days ago',
    matches: [
      { provider: 'SinoGreen Energy', emoji: '🔋', score: 87, reasoning: ['Battery testing capability', 'Energy R&D', 'Manufacturing scale'], description: 'Resident cleantech company with battery testing lab and energy storage expertise.' },
      { provider: 'IBTEC Semiconductor Guild', emoji: '💎', score: 82, reasoning: ['Cleanroom access', 'Wafer testing', 'Supply chain links'], description: 'Guild-managed semiconductor cleanroom with shared testing equipment.' },
      { provider: 'PrecisionTest Sdn Bhd', emoji: '🔧', score: 76, reasoning: ['Quality testing', 'Parametric analysis', 'Certification'], description: 'Testing and certification partner with automotive-grade quality systems.' },
      { provider: 'IBTEC Core Facilities', emoji: '🏭', score: 71, reasoning: ['GMP bay availability', 'Utilities', 'Safety systems'], description: 'Campus-wide GMP manufacturing bays with shared utilities infrastructure.' },
      { provider: 'AsiaChip Supply Network', emoji: '🌏', score: 65, reasoning: ['Supply chain access', 'Component sourcing', 'Logistics'], description: 'Supply chain integrator connecting to Penang and Singapore semiconductor ecosystems.' },
    ],
  },
  {
    id: 'singapore-ai',
    title: 'Tropical Crop Datasets & IoT Sensor Access for Precision Agriculture AI',
    description: 'Singapore-based AI company seeking large-scale tropical crop datasets with paired IoT sensor data for training precision agriculture models. Need access to plantation-scale ground truth data and edge deployment infrastructure.',
    seeker: 'AgriVision AI (Singapore)',
    seekerFlag: '🇸🇬',
    guilds: [
      { name: 'Agrifood', color: '#22C55E' },
      { name: 'AI', color: '#A855F7' },
    ],
    requiredCapabilities: ['Tropical Crop Data', 'IoT Sensors', 'Edge Compute', 'Plantation Access'],
    urgency: 'high',
    posted: '1 day ago',
    matches: [
      { provider: 'JPG / Kulim Plantations', emoji: '🌴', score: 91, reasoning: ['890K crop records', '200K hectares', 'Ground truth data'], description: 'Anchor tenant with the largest tropical crop dataset in the ecosystem.' },
      { provider: 'IBTEC IoT Network', emoji: '📡', score: 85, reasoning: ['2,400 IoT sensors', 'Edge nodes', 'Real-time feeds'], description: 'Campus-wide and plantation IoT sensor network with edge computing infrastructure.' },
      { provider: 'AgroSense Analytics', emoji: '📊', score: 79, reasoning: ['Satellite imagery', 'Drone data', 'Yield prediction'], description: 'Resident agritech providing multi-spectral satellite and drone imagery analytics.' },
      { provider: 'IBTEC 5G Infrastructure', emoji: '📶', score: 73, reasoning: ['5G URLLC slice', 'Low latency', 'Edge deployment'], description: '5G network slice for ultra-low-latency edge AI model deployment in field conditions.' },
      { provider: 'TropicalAI Research Lab', emoji: '🧪', score: 68, reasoning: ['Model validation', 'Tropical expertise', 'Academic network'], description: 'Research lab specialised in tropical agriculture AI model validation and benchmarking.' },
    ],
  },
  {
    id: 'sf-analytics',
    title: 'Equatorial Agricultural AI Deployment & Data Partnership',
    description: 'San Francisco analytics firm seeking equatorial agricultural datasets and IoT deployment infrastructure for training and validating climate-resilient crop prediction models. Interested in long-term data partnership.',
    seeker: 'ClimateYield Inc. (San Francisco)',
    seekerFlag: '🇺🇸',
    guilds: [
      { name: 'Agrifood', color: '#22C55E' },
      { name: 'Sustainability', color: '#14B8A6' },
    ],
    requiredCapabilities: ['Agricultural Data', 'IoT Infrastructure', 'Climate Sensors', 'Data Partnership'],
    urgency: 'medium',
    posted: '1 week ago',
    matches: [
      { provider: 'JPG / Kulim Datasets', emoji: '🌾', score: 82, reasoning: ['Equatorial crop data', 'Multi-year records', 'Climate variables'], description: 'Comprehensive equatorial agricultural dataset with 10+ years of historical data.' },
      { provider: 'IBTEC Environmental Sensors', emoji: '🌡️', score: 78, reasoning: ['850 climate sensors', 'Microclimate data', 'Real-time feeds'], description: 'Environmental sensor network with tropical microclimate and weather data.' },
      { provider: 'Carbon Credits Registry', emoji: '🌍', score: 73, reasoning: ['Carbon metrics', 'Sustainability data', 'MRV integration'], description: 'Carbon measurement and verification data linked to agricultural operations.' },
      { provider: 'Plantation Analytics Platform', emoji: '📈', score: 68, reasoning: ['Analytics platform', 'Data APIs', 'Visualisation'], description: 'Existing analytics platform that can host and serve processed agricultural data.' },
      { provider: 'IBTEC Data Fabric', emoji: '🔗', score: 64, reasoning: ['Federated access', 'Data governance', 'API integration'], description: 'Cross-vertical data mesh with privacy-preserving data sharing framework.' },
    ],
  },
  {
    id: 'pharma-halal',
    title: 'Halal Pharmaceutical Certification & Manufacturing Partnership',
    description: 'Middle Eastern pharmaceutical conglomerate seeking halal-certified manufacturing capabilities and certification lab access for launching halal pharmaceutical products in Southeast Asian markets.',
    seeker: 'Gulf Pharma Group (UAE)',
    seekerFlag: '🇦🇪',
    guilds: [
      { name: 'Healthcare', color: '#E11D48' },
      { name: 'Food Services', color: '#F97316' },
    ],
    requiredCapabilities: ['Halal Certification', 'GMP Manufacturing', 'Regulatory Support', 'Market Access'],
    urgency: 'medium',
    posted: '3 days ago',
    matches: [
      { provider: 'Halal Certification Lab', emoji: '🏷️', score: 89, reasoning: ['JAKIM accredited', 'DNA analysis', 'Supply chain audit'], description: 'Premier halal testing and certification facility with international recognition.' },
      { provider: 'KPJ Healthcare', emoji: '🏥', score: 83, reasoning: ['GMP manufacturing', 'Pharma expertise', 'Distribution network'], description: 'Hospital group with pharmaceutical manufacturing arm and regional distribution.' },
      { provider: 'Food Services Guild', emoji: '🍽️', score: 77, reasoning: ['Halal supply chain', 'Certification network', 'Market knowledge'], description: 'Guild coordination for halal ecosystem across food and pharmaceutical sectors.' },
      { provider: 'ASEAN Regulatory Partners', emoji: '📋', score: 72, reasoning: ['Regulatory fast-track', 'Multi-market registration', 'Compliance'], description: 'Regulatory consulting network covering ASEAN pharmaceutical approvals.' },
      { provider: 'IBTEC Core Facilities', emoji: '🏭', score: 66, reasoning: ['Manufacturing bay', 'Lab space', 'Quality systems'], description: 'Campus manufacturing infrastructure with halal-compatible production lines.' },
    ],
  },
  {
    id: 'indian-medtech',
    title: 'AI Radiology Model Validation with Southeast Asian Patient Data',
    description: 'Indian medtech company seeking access to diverse Southeast Asian radiology datasets to validate and fine-tune their AI diagnostic models for regional deployment. Need regulatory sandbox access.',
    seeker: 'RadAI Technologies (India)',
    seekerFlag: '🇮🇳',
    guilds: [
      { name: 'Healthcare', color: '#E11D48' },
      { name: 'AI', color: '#A855F7' },
    ],
    requiredCapabilities: ['Radiology Data', 'AI Sandbox', 'Regulatory Sandbox', 'Clinical Validation'],
    urgency: 'low',
    posted: '2 weeks ago',
    matches: [
      { provider: 'KPJ Healthcare', emoji: '🏥', score: 86, reasoning: ['Radiology dataset', 'Clinical validation', 'Patient diversity'], description: 'Hospital network with 500K+ radiology images across diverse Southeast Asian populations.' },
      { provider: 'AI Radiology Models', emoji: '🧠', score: 80, reasoning: ['14 pre-trained models', 'Benchmarking', 'Transfer learning'], description: 'Existing AI radiology model suite for comparative benchmarking and transfer learning.' },
      { provider: 'IBTEC Regulatory Sandbox', emoji: '🧪', score: 75, reasoning: ['Sandbox environment', 'Fast-track approval', 'Testing framework'], description: 'Controlled sandbox for medical AI testing with regulatory fast-track pathway.' },
      { provider: 'IBTEC AI Infrastructure', emoji: '💻', score: 70, reasoning: ['GPU compute', 'Model hosting', 'Edge deployment'], description: 'AI compute infrastructure for model training, validation, and edge deployment.' },
      { provider: 'Clinical Data Governance', emoji: '🔒', score: 65, reasoning: ['Data anonymisation', 'Ethics compliance', 'Consent framework'], description: 'Data governance team ensuring PDPA and clinical ethics compliance for AI training data.' },
    ],
  },
]

const urgencyConfig = {
  high: { label: 'Urgent', color: '#EF4444', icon: AlertTriangle },
  medium: { label: 'Standard', color: '#F59E0B', icon: Clock },
  low: { label: 'Exploratory', color: '#3B82F6', icon: Target },
}

function MatchScoreCircle({ score }: { score: number }) {
  const r = 20
  const circumference = 2 * Math.PI * r
  const offset = circumference - (score / 100) * circumference
  const color = score >= 85 ? '#22C55E' : score >= 70 ? '#F59E0B' : '#3B82F6'

  return (
    <div className="relative w-12 h-12 shrink-0">
      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={r} fill="none" stroke="#1E3A5F" strokeWidth="3" />
        <circle
          cx="24" cy="24" r={r} fill="none"
          stroke={color} strokeWidth="3"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-bold" style={{ color }}>{score}%</span>
      </div>
    </div>
  )
}

export default function MatchmakingPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<string>(challenges[0].id)

  const activeChallenge = challenges.find(c => c.id === selectedChallenge)

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Target className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Matchmaking Engine</h1>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl">
          AI-powered matchmaking that connects global seekers with the right IBTEC ecosystem capabilities,
          providers, and partners based on requirements, availability, and compatibility scoring.
        </p>
      </div>

      {/* AI Insight Banner */}
      <div className="bg-surface border border-primary/30 rounded-lg p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-text-primary font-medium">Matchmaking powered by IDEAS Intelligence</p>
          <p className="text-xs text-text-secondary mt-0.5">
            Analysing {challenges.length} active challenges against 47 data sources, 15 capability providers, and 34 cross-guild projects
            to find optimal matches.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs text-primary font-medium">AI Active</span>
        </div>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        {/* Left: Active Challenges (60%) */}
        <div className="xl:col-span-3 space-y-3">
          <h3 className="text-sm font-semibold text-text-primary flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            Active Challenges
            <span className="text-[10px] text-text-secondary font-normal ml-1">{challenges.length} open</span>
          </h3>

          {challenges.map((challenge) => {
            const urgency = urgencyConfig[challenge.urgency]
            const UrgencyIcon = urgency.icon
            const isSelected = selectedChallenge === challenge.id

            return (
              <button
                key={challenge.id}
                onClick={() => setSelectedChallenge(challenge.id)}
                className={cn(
                  'w-full text-left bg-surface border rounded-lg p-4 transition-all',
                  isSelected
                    ? 'border-primary/50 ring-1 ring-primary/20'
                    : 'border-border hover:border-primary/30'
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xs font-semibold text-text-primary leading-snug pr-4 flex-1">
                    {challenge.title}
                  </h4>
                  <div className="flex items-center gap-1 shrink-0">
                    <UrgencyIcon className="w-3 h-3" style={{ color: urgency.color }} />
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded" style={{ color: urgency.color, backgroundColor: `${urgency.color}15`, border: `1px solid ${urgency.color}30` }}>
                      {urgency.label}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] text-text-secondary">{challenge.seekerFlag}</span>
                  <span className="text-[11px] text-text-primary font-medium">{challenge.seeker}</span>
                  <span className="text-[10px] text-text-secondary">&#183; {challenge.posted}</span>
                </div>

                <p className="text-[11px] text-text-secondary leading-relaxed mb-3 line-clamp-2">
                  {challenge.description}
                </p>

                {/* Guild Badges */}
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {challenge.guilds.map((guild) => (
                    <span
                      key={guild.name}
                      className="text-[9px] font-medium px-2 py-0.5 rounded-full border"
                      style={{ color: guild.color, borderColor: `${guild.color}30`, backgroundColor: `${guild.color}10` }}
                    >
                      {guild.name}
                    </span>
                  ))}
                </div>

                {/* Required Capabilities */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {challenge.requiredCapabilities.map((cap) => (
                    <span key={cap} className="text-[9px] px-1.5 py-0.5 rounded bg-surface-elevated text-text-secondary border border-border">
                      {cap}
                    </span>
                  ))}
                </div>

                {isSelected && (
                  <div className="mt-3 pt-2 border-t border-border flex items-center gap-1 text-primary">
                    <span className="text-[10px] font-medium">Viewing matches</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Right: Recommended Matches (40%) */}
        <div className="xl:col-span-2">
          <h3 className="text-sm font-semibold text-text-primary flex items-center gap-2 mb-3">
            <Users className="w-4 h-4 text-primary" />
            Recommended Matches
          </h3>

          {activeChallenge ? (
            <div className="space-y-3">
              <div className="bg-surface border border-primary/20 rounded-lg p-3">
                <p className="text-[11px] text-text-secondary">
                  <span className="text-primary font-medium">Matching for: </span>
                  {activeChallenge.title}
                </p>
              </div>

              {activeChallenge.matches.map((match, i) => (
                <div key={i} className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3">
                    <MatchScoreCircle score={match.score} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">{match.emoji}</span>
                        <h4 className="text-xs font-semibold text-text-primary">{match.provider}</h4>
                      </div>
                      <p className="text-[10px] text-text-secondary leading-relaxed mb-2">
                        {match.description}
                      </p>

                      {/* Reasoning Tags */}
                      <div className="flex items-center gap-1.5 flex-wrap mb-3">
                        {match.reasoning.map((reason) => (
                          <span key={reason} className="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                            {reason}
                          </span>
                        ))}
                      </div>

                      <button className="text-[11px] font-medium px-3 py-1.5 rounded-lg bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-all flex items-center gap-1.5">
                        <ArrowRight className="w-3 h-3" />
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-border rounded-lg p-8 text-center">
              <Target className="w-8 h-8 text-text-secondary mx-auto mb-3" />
              <p className="text-xs text-text-secondary">Select a challenge to view recommended matches</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
