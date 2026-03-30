'use client'

import React, { use, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, ChevronRight, Target, Clock, Users, FileText,
  CheckCircle2, Circle, Database, Building2, MessageSquare,
  ThumbsUp, Reply, AlertCircle, Lightbulb, Beaker, ShieldCheck,
  Rocket, BarChart3, ExternalLink
} from 'lucide-react'

type ChallengeData = {
  id: string
  title: string
  guilds: { name: string; color: string }[]
  status: string
  priority: string
  stage: string
  submissions: number
  deadline: string
  problemStatement: string
  successCriteria: string[]
  dataAssets: { name: string; type: string; access: string }[]
  matchedProviders: { name: string; capability: string; tier: string }[]
  stageProgress: { stage: string; status: 'completed' | 'active' | 'pending'; date: string }[]
  team: { name: string; role: string; org: string }[]
  comments: {
    id: string; author: string; role: string; org: string; time: string; content: string;
    replies: { id: string; author: string; role: string; org: string; time: string; content: string }[]
  }[]
}

const challengeDataMap: Record<string, ChallengeData> = {
  'ch-001': {
    id: 'ch-001',
    title: 'Wellness Township Challenge',
    guilds: [{ name: 'Healthcare', color: '#E11D48' }, { name: 'Proptech', color: '#3B82F6' }],
    status: 'Open', priority: 'Critical', stage: 'Prototype',
    submissions: 12, deadline: 'Jul 2026',
    problemStatement: 'Johor\'s wellness township developments require an integrated data model that connects health outcomes, environmental quality, mobility patterns, and community wellbeing. Current systems operate in silos — hospital data stays in hospitals, building management data stays in BMS, and transport data stays in traffic systems. The challenge is to design and prototype a unified data architecture that enables cross-domain insights while preserving privacy and data sovereignty.\n\nThe winning solution must demonstrate: (1) a scalable data model connecting at least 3 domains, (2) privacy-preserving data sharing protocols, (3) actionable insights derived from cross-domain analysis, and (4) a viable path to deployment across JLG township developments.',
    successCriteria: [
      'Unified data model connecting health, environment, and mobility data domains',
      'Privacy-preserving data sharing protocol with differential privacy guarantees',
      'At least 3 cross-domain insight dashboards with actionable recommendations',
      'Scalable architecture supporting 50,000+ residents per township',
      'Compliance with PDPA Malaysia and health data regulations',
      'Demonstrated integration with at least 2 existing KPJ and JLG data systems',
    ],
    dataAssets: [
      { name: 'KPJ Patient Flow Dataset', type: 'Health Records', access: 'Anonymised' },
      { name: 'JLG Building Sensor Data', type: 'IoT Telemetry', access: 'Sandbox' },
      { name: 'Iskandar Traffic Patterns', type: 'Mobility Data', access: 'Public' },
      { name: 'Air Quality Monitoring Network', type: 'Environmental', access: 'Real-time API' },
    ],
    matchedProviders: [
      { name: 'DataForge Analytics', capability: 'Data integration & ETL', tier: 'Partner' },
      { name: 'SenseIoT Pte Ltd', capability: 'IoT sensor networks', tier: 'Resident' },
      { name: 'PrivacyGuard AI', capability: 'Differential privacy', tier: 'Explorer' },
      { name: 'UrbanMind Solutions', capability: 'Smart city analytics', tier: 'Resident' },
    ],
    stageProgress: [
      { stage: 'Ideate', status: 'completed', date: 'Jan 2026' },
      { stage: 'Prototype', status: 'active', date: 'Mar 2026' },
      { stage: 'Validate', status: 'pending', date: 'Est. Jun 2026' },
      { stage: 'Deploy', status: 'pending', date: 'Est. Sep 2026' },
      { stage: 'Scale', status: 'pending', date: 'Est. Jan 2027' },
    ],
    team: [
      { name: 'Dr. Sarah Tan', role: 'Challenge Lead', org: 'KPJ Healthcare' },
      { name: 'Ahmad Razak', role: 'Data Architect', org: 'IDEAS' },
      { name: 'Lisa Chen', role: 'Privacy Engineer', org: 'PrivacyGuard AI' },
      { name: 'Mark Fernandez', role: 'IoT Lead', org: 'SenseIoT' },
      { name: 'Priya Nair', role: 'Township PM', org: 'Johor Land Group' },
    ],
    comments: [
      {
        id: 'c1', author: 'Dr. Sarah Tan', role: 'Challenge Lead', org: 'KPJ Healthcare', time: '2 days ago',
        content: 'We have received 12 submissions so far. The top 3 approaches are: (1) federated data mesh, (2) event-driven architecture with CQRS, and (3) knowledge graph-based model. I think we should shortlist all three for the prototype phase and run parallel tracks.',
        replies: [
          {
            id: 'r1', author: 'Ahmad Razak', role: 'Data Architect', org: 'IDEAS', time: '1 day ago',
            content: 'Agreed on parallel tracks. The knowledge graph approach is particularly interesting for cross-domain discovery. I can set up sandbox environments for all three teams by next week.',
          },
          {
            id: 'r2', author: 'Priya Nair', role: 'Township PM', org: 'Johor Land Group', time: '1 day ago',
            content: 'From the JLG side, we need to ensure the BMS data integration doesn\'t require any changes to our existing Honeywell systems. Can we confirm this with the shortlisted teams?',
          },
        ],
      },
      {
        id: 'c2', author: 'Lisa Chen', role: 'Privacy Engineer', org: 'PrivacyGuard AI', time: '4 days ago',
        content: 'I have completed the privacy impact assessment for the health data component. We can achieve epsilon=1.0 differential privacy while maintaining 92% utility on the key analytics queries. Report is attached to the data requirements tab.',
        replies: [],
      },
      {
        id: 'c3', author: 'Mark Fernandez', role: 'IoT Lead', org: 'SenseIoT', time: '1 week ago',
        content: 'The building sensor data feed is now live in the sandbox. We are streaming temperature, humidity, occupancy, and energy consumption from 24 sensors across the JLG pilot building. Data dictionary and API docs are in the shared workspace.',
        replies: [
          {
            id: 'r3', author: 'Dr. Sarah Tan', role: 'Challenge Lead', org: 'KPJ Healthcare', time: '6 days ago',
            content: 'Excellent work. I have shared this with the shortlisted teams. Can we also get the air quality data feed connected by end of month?',
          },
        ],
      },
    ],
  },
}

// Default fallback for unknown challenge IDs
const defaultChallenge = challengeDataMap['ch-001']

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

export default function ChallengeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [activeTab, setActiveTab] = useState('overview')

  const challenge = challengeDataMap[id] || defaultChallenge

  const tabs = ['Overview', 'Stage Progress', 'Data Requirements', 'Team', 'Discussion']

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Link href="/engage/challenges" className="text-text-secondary hover:text-primary transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          Challenges
        </Link>
        <ChevronRight className="w-3 h-3 text-text-secondary" />
        <span className="text-text-primary">{challenge.title}</span>
      </div>

      {/* Challenge Header */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            {/* Guild Badges */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {challenge.guilds.map((guild) => (
                <span
                  key={guild.name}
                  className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                  style={{ backgroundColor: `${guild.color}15`, color: guild.color, border: `1px solid ${guild.color}25` }}
                >
                  {guild.name}
                </span>
              ))}
            </div>

            <h1 className="text-2xl font-bold text-text-primary mb-2">{challenge.title}</h1>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs text-green-400">{challenge.status}</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                challenge.priority === 'Critical' ? 'bg-red-500/10 text-red-400' :
                challenge.priority === 'High' ? 'bg-amber-500/10 text-amber-400' :
                'bg-blue-500/10 text-blue-400'
              }`}>
                {challenge.priority}
              </span>
              <div className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-text-secondary" />
                <span className="text-xs text-text-secondary">{challenge.submissions} submissions</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-text-secondary" />
                <span className="text-xs text-text-secondary">Deadline: {challenge.deadline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 bg-surface border border-border rounded-lg p-1 flex-wrap">
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

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Problem Statement */}
          <div className="bg-surface border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-3">Problem Statement</h3>
            <div className="text-xs text-text-secondary leading-relaxed whitespace-pre-line">{challenge.problemStatement}</div>
          </div>

          {/* Success Criteria */}
          <div className="bg-surface border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-3">Success Criteria</h3>
            <div className="space-y-2">
              {challenge.successCriteria.map((criterion, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-xs text-text-secondary">{criterion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Data Assets */}
          <div className="bg-surface border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-3">Related Data Assets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {challenge.dataAssets.map((asset) => (
                <div key={asset.name} className="bg-background border border-border rounded-lg p-3 flex items-start gap-3">
                  <Database className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-medium text-text-primary">{asset.name}</h4>
                    <p className="text-[10px] text-text-secondary mt-0.5">{asset.type} &middot; {asset.access}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Matched Providers */}
          <div className="bg-surface border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-3">Matched Providers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {challenge.matchedProviders.map((provider) => (
                <div key={provider.name} className="bg-background border border-border rounded-lg p-3 flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-medium text-text-primary">{provider.name}</h4>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {provider.tier}
                      </span>
                    </div>
                    <p className="text-[10px] text-text-secondary mt-0.5">{provider.capability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Stage Progress Tab */}
      {activeTab === 'stage-progress' && (
        <div className="bg-surface border border-border rounded-lg p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-6">Pipeline Progress</h3>
          <div className="space-y-0">
            {challenge.stageProgress.map((step, i) => {
              const StageIcon = stageIcons[step.stage]
              const color = stageColors[step.stage]
              return (
                <div key={step.stage} className="flex items-start gap-4">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                        step.status === 'completed' ? 'border-green-400 bg-green-400/10' :
                        step.status === 'active' ? 'border-primary bg-primary/10' :
                        'border-border bg-surface-elevated'
                      }`}
                    >
                      {step.status === 'completed' ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      ) : (
                        <StageIcon className="w-4 h-4" style={{ color: step.status === 'active' ? color : '#64748B' }} />
                      )}
                    </div>
                    {i < challenge.stageProgress.length - 1 && (
                      <div className={`w-0.5 h-12 ${
                        step.status === 'completed' ? 'bg-green-400/30' : 'bg-border'
                      }`} />
                    )}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${
                        step.status === 'active' ? 'text-primary' :
                        step.status === 'completed' ? 'text-green-400' :
                        'text-text-secondary'
                      }`}>
                        {step.stage}
                      </span>
                      {step.status === 'active' && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-text-secondary">{step.date}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Data Requirements Tab */}
      {activeTab === 'data-requirements' && (
        <div className="space-y-4">
          <div className="bg-surface border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold text-text-primary mb-3">Required Data Assets</h3>
            <div className="space-y-3">
              {challenge.dataAssets.map((asset) => (
                <div key={asset.name} className="bg-background border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-text-primary">{asset.name}</h4>
                        <p className="text-xs text-text-secondary mt-1">Type: {asset.type}</p>
                        <p className="text-xs text-text-secondary">Access Level: {asset.access}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      asset.access === 'Public' || asset.access === 'Real-time API' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      asset.access === 'Sandbox' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {asset.access}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Team Tab */}
      {activeTab === 'team' && (
        <div className="bg-surface border border-border rounded-lg p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Challenge Team</h3>
          <div className="space-y-3">
            {challenge.team.map((member) => (
              <div key={member.name} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                <div className="w-9 h-9 rounded-full bg-surface-elevated flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-text-primary">{member.name}</div>
                  <div className="text-[10px] text-text-secondary">{member.role} &middot; {member.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Discussion Tab */}
      {activeTab === 'discussion' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-text-primary">Discussion ({challenge.comments.length} threads)</h3>
          </div>
          {challenge.comments.map((comment) => (
            <div key={comment.id} className="bg-surface border border-border rounded-lg overflow-hidden">
              {/* Main Comment */}
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-text-primary">{comment.author}</span>
                      <span className="text-[10px] text-text-secondary">{comment.role} &middot; {comment.org}</span>
                      <span className="text-[10px] text-text-secondary ml-auto shrink-0">{comment.time}</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">{comment.content}</p>
                  </div>
                </div>
              </div>

              {/* Replies */}
              {comment.replies.length > 0 && (
                <div className="border-t border-border bg-background">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="p-4 pl-12 border-b border-border last:border-0">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-surface-elevated flex items-center justify-center shrink-0">
                          <Reply className="w-3 h-3 text-text-secondary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-text-primary">{reply.author}</span>
                            <span className="text-[10px] text-text-secondary">{reply.role} &middot; {reply.org}</span>
                            <span className="text-[10px] text-text-secondary ml-auto shrink-0">{reply.time}</span>
                          </div>
                          <p className="text-xs text-text-secondary leading-relaxed">{reply.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
