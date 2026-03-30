'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, Cpu, Car, Thermometer, Lightbulb, Wrench, Zap, Trash2,
  ShieldAlert, Lock, CheckCircle, Clock, AlertTriangle, Eye, BarChart3,
  TrendingUp, Users
} from 'lucide-react'

const level1Agents = [
  {
    name: 'TrafficFlow AI',
    icon: Car,
    decisionsDay: 2400,
    decisionsHour: 100,
    metric: '18% travel time reduction',
    uptime: 99.9,
    sparkline: [40, 55, 48, 62, 58, 72, 68, 75, 80, 72, 85, 78],
    energySaved: '—',
    extra: '847 signal cycles optimised today',
  },
  {
    name: 'ClimateControl AI',
    icon: Thermometer,
    decisionsDay: 1800,
    decisionsHour: 75,
    metric: '22% energy savings',
    uptime: 99.7,
    sparkline: [30, 45, 52, 48, 60, 55, 65, 70, 62, 74, 68, 72],
    energySaved: '340 kWh',
    extra: '45 buildings managed',
  },
  {
    name: 'LightingGrid AI',
    icon: Lightbulb,
    decisionsDay: 4800,
    decisionsHour: 200,
    metric: '3,200 lights managed',
    uptime: 99.8,
    sparkline: [60, 55, 70, 65, 80, 75, 85, 78, 90, 82, 88, 85],
    energySaved: '520 kWh',
    extra: 'Adapts to ambient + pedestrian density',
  },
]

const level2Agents = [
  {
    name: 'PredictMaint AI',
    icon: Wrench,
    monitored: '50K sensors',
    autoApproved: 87,
    humanReview: 13,
    pending: 4,
    overrides: 2,
    detail: '12 maintenance orders auto-dispatched',
  },
  {
    name: 'EnergyTrade AI',
    icon: Zap,
    monitored: 'P2P trading',
    autoApproved: 82,
    humanReview: 18,
    pending: 12,
    overrides: 1,
    detail: 'Approval required > RM 10K',
  },
  {
    name: 'WasteRoute AI',
    icon: Trash2,
    monitored: '34% cost reduction',
    autoApproved: 91,
    humanReview: 9,
    pending: 2,
    overrides: 0,
    detail: '8 routes optimised, 2 pending re-routes',
  },
]

const level3Agents = [
  {
    name: 'EmergencyCoord AI',
    icon: ShieldAlert,
    activeCases: 2,
    decisionQueue: 1,
    escalations: 3,
    detail: 'Provides recommendations — humans decide',
  },
  {
    name: 'PrivacyGuard AI',
    icon: Lock,
    activeCases: 5,
    decisionQueue: 3,
    escalations: 2,
    detail: '5 data access requests pending review',
  },
]

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const h = 28
  const w = 96
  const step = w / (data.length - 1)
  const points = data.map((v, i) => `${i * step},${h - ((v - min) / range) * h}`).join(' ')
  return (
    <svg width={w} height={h} className="flex-shrink-0">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export default function AgenticAIDashboard() {
  const [expandedLevel] = useState<number | null>(null)

  return (
    <div className="space-y-4 max-w-[1800px] mx-auto -m-6 p-4 bg-[#070E1A] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#0A1220] border border-cyan-900/40 rounded-lg px-5 py-3">
        <div className="flex items-center gap-4">
          <Link href="/operations" className="p-1.5 rounded hover:bg-cyan-500/10 transition-colors">
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-cyan-400 tracking-wide uppercase">Agentic AI Operations</h1>
              <p className="text-[10px] text-text-secondary">3-Level Autonomy Framework — TAMM 4.0 Aligned</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#060D18] border border-cyan-900/30 rounded px-3 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            <span className="text-[10px] font-mono text-green-400">8 agents active</span>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded px-3 py-1.5">
            <span className="text-[10px] font-semibold text-purple-400">TAMM 4.0</span>
          </div>
        </div>
      </div>

      {/* Three-Column Autonomy Levels */}
      <div className="grid grid-cols-3 gap-4" style={{ minHeight: '540px' }}>
        {/* Level 1 — Full Autonomy */}
        <div className="bg-[#0A1220] border border-green-900/40 rounded-lg flex flex-col">
          <div className="bg-green-500/10 border-b border-green-900/40 px-4 py-2.5 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-glow" />
                <h2 className="text-xs font-bold text-green-400 uppercase tracking-wide">Level 1 — Full Autonomy</h2>
              </div>
              <span className="text-[10px] font-mono text-green-400/60">No human intervention</span>
            </div>
          </div>
          <div className="p-3 space-y-3 flex-1 overflow-y-auto">
            {level1Agents.map((agent) => (
              <div key={agent.name} className="bg-[#060D18] border border-green-900/20 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <agent.icon className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-semibold text-text-primary">{agent.name}</span>
                  </div>
                  <span className="text-[8px] font-mono bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded border border-green-500/20">AUTONOMOUS</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-lg font-mono font-bold text-text-primary">{agent.decisionsDay.toLocaleString()}</div>
                    <div className="text-[9px] text-text-secondary">decisions/day</div>
                  </div>
                  <Sparkline data={agent.sparkline} color="#22C55E" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div>
                    <span className="text-text-secondary">Impact: </span>
                    <span className="text-green-400 font-mono">{agent.metric}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Uptime: </span>
                    <span className="text-green-400 font-mono">{agent.uptime}%</span>
                  </div>
                </div>
                {agent.energySaved !== '—' && (
                  <div className="text-[10px] mt-1">
                    <span className="text-text-secondary">Energy saved: </span>
                    <span className="text-green-400 font-mono">{agent.energySaved}</span>
                  </div>
                )}
                <div className="text-[9px] text-text-secondary mt-1.5 italic">{agent.extra}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Level 2 — Supervised Autonomy */}
        <div className="bg-[#0A1220] border border-amber-900/40 rounded-lg flex flex-col">
          <div className="bg-amber-500/10 border-b border-amber-900/40 px-4 py-2.5 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse-glow" />
                <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wide">Level 2 — Supervised Autonomy</h2>
              </div>
              <span className="text-[10px] font-mono text-amber-400/60">Human review for edge cases</span>
            </div>
          </div>
          <div className="p-3 space-y-3 flex-1 overflow-y-auto">
            {level2Agents.map((agent) => (
              <div key={agent.name} className="bg-[#060D18] border border-amber-900/20 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <agent.icon className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-text-primary">{agent.name}</span>
                  </div>
                  <span className="text-[8px] font-mono bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/20">SUPERVISED</span>
                </div>
                <div className="text-[10px] text-text-secondary mb-2">{agent.monitored}</div>
                {/* Approval bar */}
                <div className="mb-2">
                  <div className="flex items-center justify-between text-[9px] mb-1">
                    <span className="text-green-400">Auto-approved {agent.autoApproved}%</span>
                    <span className="text-amber-400">Human review {agent.humanReview}%</span>
                  </div>
                  <div className="h-2 bg-[#0D1A2A] rounded-full overflow-hidden flex">
                    <div className="h-full bg-green-500/60 rounded-l-full" style={{ width: `${agent.autoApproved}%` }} />
                    <div className="h-full bg-amber-500/60 rounded-r-full" style={{ width: `${agent.humanReview}%` }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded p-2 text-center">
                    <div className="text-base font-mono font-bold text-amber-400">{agent.pending}</div>
                    <div className="text-[9px] text-text-secondary">pending</div>
                  </div>
                  <div className="bg-[#0A1220] border border-cyan-900/20 rounded p-2 text-center">
                    <div className="text-base font-mono font-bold text-text-primary">{agent.overrides}</div>
                    <div className="text-[9px] text-text-secondary">overrides</div>
                  </div>
                </div>
                <div className="text-[9px] text-text-secondary mt-2 italic">{agent.detail}</div>
                <button className="mt-2 w-full text-[10px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded py-1.5 hover:bg-amber-500/20 transition-colors cursor-pointer">
                  Review Pending
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Level 3 — Human-in-the-Loop */}
        <div className="bg-[#0A1220] border border-blue-900/40 rounded-lg flex flex-col">
          <div className="bg-blue-500/10 border-b border-blue-900/40 px-4 py-2.5 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse-glow" />
                <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wide">Level 3 — Human-in-the-Loop</h2>
              </div>
              <span className="text-[10px] font-mono text-blue-400/60">Human decides</span>
            </div>
          </div>
          <div className="p-3 space-y-3 flex-1 overflow-y-auto">
            {level3Agents.map((agent) => (
              <div key={agent.name} className="bg-[#060D18] border border-blue-900/20 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <agent.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-text-primary">{agent.name}</span>
                  </div>
                  <span className="text-[8px] font-mono bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20">HUMAN-IN-LOOP</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded p-2 text-center">
                    <div className="text-lg font-mono font-bold text-blue-400">{agent.activeCases}</div>
                    <div className="text-[9px] text-text-secondary">active cases</div>
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded p-2 text-center">
                    <div className="text-lg font-mono font-bold text-amber-400">{agent.decisionQueue}</div>
                    <div className="text-[9px] text-text-secondary">in queue</div>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/20 rounded p-2 text-center">
                    <div className="text-lg font-mono font-bold text-red-400">{agent.escalations}</div>
                    <div className="text-[9px] text-text-secondary">escalations</div>
                  </div>
                </div>
                <div className="text-[9px] text-text-secondary mb-2 italic">{agent.detail}</div>
                <button className="w-full text-[10px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded py-1.5 hover:bg-blue-500/20 transition-colors cursor-pointer">
                  Decide Now
                </button>
              </div>
            ))}

            {/* Agent Activity Log */}
            <div className="bg-[#060D18] border border-blue-900/20 rounded-lg p-3 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-bold text-blue-400 uppercase">Recent Escalations</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { time: '09:42', msg: 'Emergency: fire alarm Zone 3 — 2 units dispatched', color: 'text-red-400' },
                  { time: '09:38', msg: 'Privacy: facial recognition data request — flagged', color: 'text-amber-400' },
                  { time: '09:21', msg: 'Emergency: medical incident parking B — resolved', color: 'text-green-400' },
                  { time: '09:14', msg: 'Privacy: cross-tenant data share — pending review', color: 'text-amber-400' },
                ].map((log, i) => (
                  <div key={i} className="flex items-start gap-2 text-[10px]">
                    <span className="font-mono text-text-secondary flex-shrink-0">{log.time}</span>
                    <span className={log.color}>{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg px-5 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="text-lg font-mono font-bold text-cyan-400">12,400</div>
                <div className="text-[10px] text-text-secondary">total decisions today</div>
              </div>
            </div>
            <div className="h-8 w-px bg-cyan-900/40" />
            <div>
              <div className="text-lg font-mono font-bold text-green-400">3.2%</div>
              <div className="text-[10px] text-text-secondary">human override rate</div>
            </div>
            <div className="h-8 w-px bg-cyan-900/40" />
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs font-mono font-bold text-text-primary">0.8s</span>
                </div>
                <div className="text-[9px] text-text-secondary">L1 avg response</div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-mono font-bold text-text-primary">12 min</span>
                </div>
                <div className="text-[9px] text-text-secondary">L2 avg response</div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs font-mono font-bold text-text-primary">4 hr</span>
                </div>
                <div className="text-[9px] text-text-secondary">L3 avg response</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <div className="text-right">
              <div className="text-xs font-semibold text-green-400">Efficiency +14%</div>
              <div className="text-[9px] text-text-secondary">vs last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
