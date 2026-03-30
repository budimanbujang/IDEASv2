'use client'

import React, { use, useState } from 'react'
import Link from 'next/link'
import {
  Heart, Building2, Wheat, UtensilsCrossed, Dna, Cpu,
  ChevronRight, ArrowLeft, Users, FolderKanban, Database, TrendingUp,
  Target, Clock, CheckCircle2, AlertCircle, MessageSquare, Lightbulb,
  Beaker, ShieldCheck, Rocket, BarChart3, Zap
} from 'lucide-react'

const guildData: Record<string, {
  id: string; name: string; company: string; icon: any; color: string; phase: number | null;
  description: string; longDescription: string;
  metrics: { label: string; value: string; icon: any }[];
  pipeline: { stage: string; count: number }[];
  useCases: { title: string; description: string; priority: string }[];
  activity: { time: string; event: string; type: string }[];
}> = {
  healthcare: {
    id: 'healthcare', name: 'Healthcare Guild', company: 'KPJ Healthcare', icon: Heart, color: '#E11D48', phase: null,
    description: 'AI-driven diagnostics, telemedicine, and patient journey transformation across KPJ\'s 30+ hospital network.',
    longDescription: 'The Healthcare Guild, anchored by KPJ Healthcare Berhad, drives innovation across diagnostics, telemedicine, clinical workflows, and patient experience. With 30+ hospitals and a vast repository of anonymised patient data, the guild provides a real-world testbed for AI-powered health solutions. Focus areas include radiology AI, remote patient monitoring, and predictive health analytics.',
    metrics: [
      { label: 'Active Projects', value: '8', icon: FolderKanban },
      { label: 'Guild Members', value: '42', icon: Users },
      { label: 'Data Assets', value: '14', icon: Database },
      { label: 'Pipeline Throughput', value: '72%', icon: TrendingUp },
    ],
    pipeline: [
      { stage: 'Ideate', count: 2 },
      { stage: 'Prototype', count: 2 },
      { stage: 'Validate', count: 2 },
      { stage: 'Deploy', count: 1 },
      { stage: 'Scale', count: 1 },
    ],
    useCases: [
      { title: 'AI Radiology Screening', description: 'Automated chest X-ray analysis using deep learning models trained on 500K+ anonymised images.', priority: 'Critical' },
      { title: 'Telemedicine Platform Scale', description: 'Expanding KPJ telehealth to 200K+ monthly consultations with AI triage.', priority: 'High' },
      { title: 'Patient Journey Analytics', description: 'End-to-end patient flow optimisation across admission, treatment, and discharge.', priority: 'High' },
      { title: 'Remote Monitoring IoT', description: 'Wearable-connected RPM for chronic disease management post-discharge.', priority: 'Medium' },
    ],
    activity: [
      { time: '2 hours ago', event: 'AI Radiology model achieved 94.2% sensitivity on validation set', type: 'milestone' },
      { time: '1 day ago', event: 'New data sharing agreement signed with Hospital Sultanah Aminah', type: 'partnership' },
      { time: '2 days ago', event: 'Telemedicine platform sprint review completed — 12 user stories delivered', type: 'progress' },
      { time: '4 days ago', event: 'Dr. Aisha joined as Clinical AI Advisor', type: 'team' },
    ],
  },
  proptech: {
    id: 'proptech', name: 'Proptech Guild', company: 'Johor Land Group', icon: Building2, color: '#3B82F6', phase: null,
    description: 'Smart building analytics, digital twin townships, and property technology innovation for Johor\'s urban transformation.',
    longDescription: 'The Proptech Guild, anchored by Johor Land Group (JLG), transforms how townships and buildings are designed, built, and managed. Leveraging IoT sensor networks, digital twin technology, and AI-driven energy management, the guild creates intelligent urban environments. Key initiatives include the Wellness Township data model, smart building energy optimisation, and predictive maintenance systems.',
    metrics: [
      { label: 'Active Projects', value: '6', icon: FolderKanban },
      { label: 'Guild Members', value: '31', icon: Users },
      { label: 'Data Assets', value: '9', icon: Database },
      { label: 'Pipeline Throughput', value: '65%', icon: TrendingUp },
    ],
    pipeline: [
      { stage: 'Ideate', count: 1 },
      { stage: 'Prototype', count: 2 },
      { stage: 'Validate', count: 2 },
      { stage: 'Deploy', count: 1 },
      { stage: 'Scale', count: 0 },
    ],
    useCases: [
      { title: 'Smart Building Energy Optimizer', description: 'AI-driven HVAC and lighting control reducing energy consumption by 30% across JLG properties.', priority: 'Critical' },
      { title: 'Wellness Township Data Model', description: 'Cross-vertical digital twin integrating health, mobility, and environment data for holistic township planning.', priority: 'High' },
      { title: 'Predictive Maintenance Platform', description: 'IoT-connected facility management predicting equipment failures 2 weeks in advance.', priority: 'Medium' },
    ],
    activity: [
      { time: '5 hours ago', event: 'Smart Building pilot reduced HVAC energy by 28% in Block A', type: 'milestone' },
      { time: '1 day ago', event: 'Digital twin data ingestion pipeline deployed for Township Phase 2', type: 'progress' },
      { time: '3 days ago', event: 'Partnership with SenseIoT for 5,000 additional building sensors', type: 'partnership' },
    ],
  },
  agrifood: {
    id: 'agrifood', name: 'Agrifood Guild', company: 'JPG / Kulim', icon: Wheat, color: '#22C55E', phase: null,
    description: 'Precision agriculture, plantation intelligence, and supply chain optimisation for Malaysia\'s agrifood sector.',
    longDescription: 'The Agrifood Guild, anchored by JPG and Kulim Group, applies AI and IoT to transform Malaysia\'s palm oil, rubber, and food crop industries. The guild focuses on satellite-driven plantation intelligence, precision agriculture tools, and blockchain-enabled supply chain traceability. With access to 250,000+ hectares of managed plantations, the guild provides unique data assets for agritech innovation.',
    metrics: [
      { label: 'Active Projects', value: '5', icon: FolderKanban },
      { label: 'Guild Members', value: '28', icon: Users },
      { label: 'Data Assets', value: '11', icon: Database },
      { label: 'Pipeline Throughput', value: '78%', icon: TrendingUp },
    ],
    pipeline: [
      { stage: 'Ideate', count: 1 },
      { stage: 'Prototype', count: 1 },
      { stage: 'Validate', count: 1 },
      { stage: 'Deploy', count: 1 },
      { stage: 'Scale', count: 1 },
    ],
    useCases: [
      { title: 'Plantation Intelligence Platform', description: 'Satellite + drone imagery analysis for yield prediction across 250K hectares.', priority: 'Critical' },
      { title: 'Farm-to-Fork Traceability', description: 'Blockchain-enabled supply chain tracking from plantation to consumer.', priority: 'High' },
      { title: 'Precision Fertiliser Application', description: 'IoT-driven variable-rate fertiliser application reducing input costs by 20%.', priority: 'Medium' },
    ],
    activity: [
      { time: '3 hours ago', event: 'Plantation Intelligence model accuracy improved to 91% for yield estimation', type: 'milestone' },
      { time: '2 days ago', event: 'Kulim plantation sensor network expanded to 12,000 nodes', type: 'progress' },
      { time: '5 days ago', event: 'RSPO traceability pilot launched with 3 mills', type: 'partnership' },
    ],
  },
  'food-services': {
    id: 'food-services', name: 'Food Services Guild', company: 'QSR Brands', icon: UtensilsCrossed, color: '#F97316', phase: null,
    description: 'Demand forecasting, operational efficiency, and consumer intelligence across 900+ QSR outlets in the region.',
    longDescription: 'The Food Services Guild, anchored by QSR Brands (KFC, Pizza Hut), leverages AI and data analytics to transform quick-service restaurant operations. With 900+ outlets generating millions of daily transactions, the guild focuses on demand forecasting, dynamic pricing, supply chain optimisation, and consumer behaviour analytics. The data-rich environment enables rapid iteration and measurable ROI.',
    metrics: [
      { label: 'Active Projects', value: '4', icon: FolderKanban },
      { label: 'Guild Members', value: '22', icon: Users },
      { label: 'Data Assets', value: '7', icon: Database },
      { label: 'Pipeline Throughput', value: '68%', icon: TrendingUp },
    ],
    pipeline: [
      { stage: 'Ideate', count: 1 },
      { stage: 'Prototype', count: 1 },
      { stage: 'Validate', count: 0 },
      { stage: 'Deploy', count: 1 },
      { stage: 'Scale', count: 1 },
    ],
    useCases: [
      { title: 'QSR Demand Forecasting Engine', description: 'ML-powered demand prediction reducing food waste by 25% and stockouts by 40%.', priority: 'Critical' },
      { title: 'Dynamic Menu Pricing', description: 'Real-time price optimisation based on demand patterns, inventory, and competition.', priority: 'High' },
      { title: 'Kitchen Automation AI', description: 'Computer vision for quality control and cooking time optimisation.', priority: 'Medium' },
    ],
    activity: [
      { time: '1 hour ago', event: 'Demand forecasting model reduced waste by 23% in pilot outlets', type: 'milestone' },
      { time: '2 days ago', event: 'Menu pricing A/B test results: 8% revenue uplift in test group', type: 'progress' },
      { time: '1 week ago', event: 'Data pipeline connected 450 outlets to real-time analytics', type: 'progress' },
    ],
  },
  'life-sciences': {
    id: 'life-sciences', name: 'Life Sciences Guild', company: 'KPJ + Biotech Corp', icon: Dna, color: '#EC4899', phase: 1,
    description: 'Biomarker discovery, clinical trial acceleration, and tropical disease research leveraging Malaysia\'s biodiversity.',
    longDescription: 'The Life Sciences Guild, a Phase 1 guild co-anchored by KPJ Healthcare and Malaysia Biotech Corporation, explores the intersection of biotechnology, genomics, and AI. Leveraging Malaysia\'s unique tropical biodiversity and multi-ethnic population genetics, the guild focuses on biomarker discovery for tropical diseases, clinical trial acceleration using synthetic data, and precision medicine initiatives.',
    metrics: [
      { label: 'Active Projects', value: '3', icon: FolderKanban },
      { label: 'Guild Members', value: '18', icon: Users },
      { label: 'Data Assets', value: '6', icon: Database },
      { label: 'Pipeline Throughput', value: '45%', icon: TrendingUp },
    ],
    pipeline: [
      { stage: 'Ideate', count: 1 },
      { stage: 'Prototype', count: 1 },
      { stage: 'Validate', count: 1 },
      { stage: 'Deploy', count: 0 },
      { stage: 'Scale', count: 0 },
    ],
    useCases: [
      { title: 'Tropical Disease Biomarker Panel', description: 'AI-driven biomarker discovery for dengue, malaria, and leptospirosis using multi-omics data.', priority: 'Critical' },
      { title: 'Synthetic Clinical Trial Data', description: 'Privacy-preserving synthetic data generation for accelerating clinical trial design.', priority: 'High' },
      { title: 'Precision Medicine Pilot', description: 'Pharmacogenomics-guided treatment selection for Malaysia\'s diverse population.', priority: 'Medium' },
    ],
    activity: [
      { time: '6 hours ago', event: 'Biomarker panel identified 3 novel dengue severity predictors', type: 'milestone' },
      { time: '3 days ago', event: 'Ethics board approved synthetic data generation protocol', type: 'progress' },
      { time: '1 week ago', event: 'Collaboration MoU signed with Universiti Malaya genomics lab', type: 'partnership' },
    ],
  },
  semiconductor: {
    id: 'semiconductor', name: 'Semiconductor Guild', company: 'Global Semiconductor Corp', icon: Cpu, color: '#6366F1', phase: 1,
    description: 'Advanced packaging, workforce development, and supply chain resilience for Malaysia\'s semiconductor ecosystem.',
    longDescription: 'The Semiconductor Guild, a Phase 1 guild anchored by Global Semiconductor Corp, addresses the strategic needs of Malaysia\'s semiconductor industry — the country\'s largest export sector. Focus areas include advanced packaging innovation, AI-driven quality inspection, workforce development academies, and supply chain resilience platforms. The guild connects Malaysia\'s position as a global back-end semiconductor hub with frontier AI capabilities.',
    metrics: [
      { label: 'Active Projects', value: '3', icon: FolderKanban },
      { label: 'Guild Members', value: '15', icon: Users },
      { label: 'Data Assets', value: '5', icon: Database },
      { label: 'Pipeline Throughput', value: '38%', icon: TrendingUp },
    ],
    pipeline: [
      { stage: 'Ideate', count: 1 },
      { stage: 'Prototype', count: 1 },
      { stage: 'Validate', count: 1 },
      { stage: 'Deploy', count: 0 },
      { stage: 'Scale', count: 0 },
    ],
    useCases: [
      { title: 'Semiconductor Workforce Academy', description: 'AI-curated training platform for semiconductor technicians and engineers.', priority: 'Critical' },
      { title: 'AI Visual Inspection', description: 'Defect detection in advanced packaging using computer vision with 99.5% accuracy.', priority: 'High' },
      { title: 'Supply Chain Resilience Dashboard', description: 'Real-time monitoring of global semiconductor supply chain risks and bottlenecks.', priority: 'High' },
    ],
    activity: [
      { time: '4 hours ago', event: 'Workforce Academy onboarded 120 trainees in first cohort', type: 'milestone' },
      { time: '2 days ago', event: 'Visual inspection model deployed on test line — 99.2% accuracy', type: 'progress' },
      { time: '5 days ago', event: 'Supply chain data feed connected from 8 tier-1 suppliers', type: 'progress' },
    ],
  },
}

const stageIcons: Record<string, any> = {
  Ideate: Lightbulb,
  Prototype: Beaker,
  Validate: ShieldCheck,
  Deploy: Rocket,
  Scale: BarChart3,
}

const stageColors: Record<string, string> = {
  Ideate: '#3B82F6',
  Prototype: '#8B5CF6',
  Validate: '#F59E0B',
  Deploy: '#22C55E',
  Scale: '#06B6D4',
}

export default function GuildDetailPage({ params }: { params: Promise<{ guildId: string }> }) {
  const { guildId } = use(params)
  const [activeTab, setActiveTab] = useState('overview')

  const guild = guildData[guildId]

  if (!guild) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-xl font-bold text-text-primary mb-2">Guild Not Found</h2>
          <p className="text-text-secondary text-sm mb-4">The guild &quot;{guildId}&quot; does not exist.</p>
          <Link href="/engage/guilds" className="text-primary hover:underline text-sm">
            Back to Guilds
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = guild.icon
  const tabs = ['Overview', 'Challenges', 'Projects', 'Data Assets', 'Members']
  const maxPipeline = Math.max(...guild.pipeline.map(s => s.count), 1)

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Link href="/engage/guilds" className="text-text-secondary hover:text-primary transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          Guilds
        </Link>
        <ChevronRight className="w-3 h-3 text-text-secondary" />
        <span className="text-text-primary">{guild.name}</span>
      </div>

      {/* Guild Header */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <div className="h-2 w-full" style={{ backgroundColor: guild.color }} />
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${guild.color}15` }}>
                <IconComponent className="w-7 h-7" style={{ color: guild.color }} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-text-primary">{guild.name}</h1>
                  {guild.phase !== null && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                      Phase {guild.phase}
                    </span>
                  )}
                </div>
                <p className="text-text-secondary text-sm mt-1">Anchored by {guild.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 bg-surface border border-border rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.toLowerCase().replace(' ', '-')
                ? 'bg-primary/10 text-primary'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Description */}
          <div className="bg-surface border border-border rounded-lg p-5">
            <p className="text-sm text-text-secondary leading-relaxed">{guild.longDescription}</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {guild.metrics.map((metric) => {
              const MetricIcon = metric.icon
              return (
                <div key={metric.label} className="bg-surface border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MetricIcon className="w-4 h-4 text-primary" />
                    <span className="text-[10px] text-text-secondary uppercase tracking-wide">{metric.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-text-primary">{metric.value}</div>
                </div>
              )
            })}
          </div>

          {/* Pipeline Funnel */}
          <div className="bg-surface border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-4">Innovation Pipeline</h3>
            <div className="space-y-3">
              {guild.pipeline.map((stage) => {
                const StageIcon = stageIcons[stage.stage]
                const barWidth = Math.max((stage.count / maxPipeline) * 100, 8)
                return (
                  <div key={stage.stage} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 w-28 shrink-0">
                      <StageIcon className="w-4 h-4" style={{ color: stageColors[stage.stage] }} />
                      <span className="text-xs text-text-secondary">{stage.stage}</span>
                    </div>
                    <div className="flex-1 h-7 bg-background rounded-md overflow-hidden">
                      <div
                        className="h-full rounded-md flex items-center justify-end pr-2 transition-all"
                        style={{ width: `${barWidth}%`, backgroundColor: `${stageColors[stage.stage]}30` }}
                      >
                        <span className="text-xs font-semibold" style={{ color: stageColors[stage.stage] }}>
                          {stage.count}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Priority Use Cases */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3">Priority Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guild.useCases.map((uc) => (
                <div key={uc.title} className="bg-surface border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-medium text-text-primary">{uc.title}</h4>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      uc.priority === 'Critical' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                      uc.priority === 'High' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {uc.priority}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-surface border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-4">Recent Guild Activity</h3>
            <div className="space-y-3">
              {guild.activity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1">
                    {item.type === 'milestone' ? (
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    ) : item.type === 'partnership' ? (
                      <Users className="w-4 h-4 text-blue-400" />
                    ) : item.type === 'team' ? (
                      <Users className="w-4 h-4 text-purple-400" />
                    ) : (
                      <Zap className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-text-primary">{item.event}</p>
                    <p className="text-[10px] text-text-secondary mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'challenges' && (
        <div className="bg-surface border border-border rounded-lg p-8 text-center">
          <Target className="w-8 h-8 text-text-secondary mx-auto mb-3" />
          <h3 className="text-sm font-semibold text-text-primary mb-1">Guild Challenges</h3>
          <p className="text-xs text-text-secondary">Active challenges and submissions for the {guild.name}.</p>
          <Link href="/engage/challenges" className="inline-block mt-4 text-xs text-primary hover:underline">
            View All Challenges
          </Link>
        </div>
      )}

      {activeTab === 'projects' && (
        <div className="bg-surface border border-border rounded-lg p-8 text-center">
          <FolderKanban className="w-8 h-8 text-text-secondary mx-auto mb-3" />
          <h3 className="text-sm font-semibold text-text-primary mb-1">Guild Projects</h3>
          <p className="text-xs text-text-secondary">{guild.metrics[0].value} active projects in the innovation pipeline.</p>
          <Link href="/engage/pipeline" className="inline-block mt-4 text-xs text-primary hover:underline">
            View Pipeline
          </Link>
        </div>
      )}

      {activeTab === 'data-assets' && (
        <div className="bg-surface border border-border rounded-lg p-8 text-center">
          <Database className="w-8 h-8 text-text-secondary mx-auto mb-3" />
          <h3 className="text-sm font-semibold text-text-primary mb-1">Data Assets</h3>
          <p className="text-xs text-text-secondary">{guild.metrics[2].value} data assets available for guild projects.</p>
        </div>
      )}

      {activeTab === 'members' && (
        <div className="bg-surface border border-border rounded-lg p-8 text-center">
          <Users className="w-8 h-8 text-text-secondary mx-auto mb-3" />
          <h3 className="text-sm font-semibold text-text-primary mb-1">Guild Members</h3>
          <p className="text-xs text-text-secondary">{guild.metrics[1].value} members across anchor, partner, and resident tiers.</p>
        </div>
      )}
    </div>
  )
}
