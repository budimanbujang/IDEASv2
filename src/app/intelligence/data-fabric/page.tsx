'use client'

import React from 'react'
import {
  Database, Activity, Link2, Clock, Shield, Lock,
  CheckCircle2, AlertCircle, Eye, Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'

const topStats = [
  { label: 'Connected Sources', value: '47', icon: Database, color: '#3B82F6' },
  { label: 'Active APIs', value: '23', icon: Link2, color: '#22C55E' },
  { label: 'Cross-Vertical Queries', value: '1,240/mo', icon: Activity, color: '#A855F7' },
  { label: 'Pending Requests', value: '8', icon: Clock, color: '#F59E0B' },
]

const guildCircles = [
  { id: 'healthcare', label: 'Healthcare', color: '#E11D48', angle: 0 },
  { id: 'agrifood', label: 'Agrifood', color: '#22C55E', angle: 60 },
  { id: 'proptech', label: 'Proptech', color: '#3B82F6', angle: 120 },
  { id: 'foodservices', label: 'Food Services', color: '#F97316', angle: 180 },
  { id: 'lifesciences', label: 'Life Sciences', color: '#EC4899', angle: 240 },
  { id: 'semiconductor', label: 'Semiconductor', color: '#6366F1', angle: 300 },
]

const dataCatalogue = [
  { name: 'Patient Outcomes Registry', guild: 'Healthcare', guildColor: '#E11D48', classification: 'Restricted', records: '2.4M', status: 'Active' },
  { name: 'Tropical Crop Yield Dataset', guild: 'Agrifood', guildColor: '#22C55E', classification: 'Public', records: '890K', status: 'Active' },
  { name: 'Building Energy Telemetry', guild: 'Proptech', guildColor: '#3B82F6', classification: 'Internal', records: '5.1M', status: 'Active' },
  { name: 'Halal Supply Chain Logs', guild: 'Food Services', guildColor: '#F97316', classification: 'Internal', records: '1.2M', status: 'Active' },
  { name: 'Biobank Sample Catalogue', guild: 'Life Sciences', guildColor: '#EC4899', classification: 'Confidential', records: '120K', status: 'Active' },
  { name: 'Wafer Defect Imagery', guild: 'Semiconductor', guildColor: '#6366F1', classification: 'Restricted', records: '3.7M', status: 'Active' },
  { name: 'Environmental Sensor Feeds', guild: 'Cross-Vertical', guildColor: '#A855F7', classification: 'Public', records: '18.2M', status: 'Active' },
  { name: 'Carbon Emissions Registry', guild: 'Cross-Vertical', guildColor: '#A855F7', classification: 'Public', records: '450K', status: 'Active' },
  { name: 'Clinical Trial Protocols', guild: 'Healthcare', guildColor: '#E11D48', classification: 'Confidential', records: '8.4K', status: 'Pending' },
  { name: 'Plantation IoT Streams', guild: 'Agrifood', guildColor: '#22C55E', classification: 'Internal', records: '42M', status: 'Active' },
]

const classificationColors: Record<string, { bg: string; text: string; border: string }> = {
  Public: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  Internal: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  Restricted: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  Confidential: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
}

const privacyBadges = [
  { label: 'Federated Learning Enabled', icon: Shield, color: '#22C55E' },
  { label: 'Differential Privacy Active', icon: Lock, color: '#3B82F6' },
  { label: 'AI Verify Compliant', icon: CheckCircle2, color: '#A855F7' },
]

export default function DataFabricPage() {
  const centerX = 200
  const centerY = 200
  const radius = 130
  const nodeRadius = 32

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Database className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-bold text-text-primary">Data Fabric Console</h1>
        </div>
        <p className="text-text-secondary text-sm max-w-2xl">
          Cross-vertical data mesh connecting guild datasets through federated learning,
          differential privacy, and AI Verify-compliant governance.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topStats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-surface border border-border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-[10px] text-text-secondary">{stat.label}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Data Flow + Privacy Sidebar */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Data Flow Diagram */}
        <div className="xl:col-span-2 bg-surface border border-border rounded-lg p-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Data Flow — Guild Interconnections</h3>
          <div className="flex justify-center">
            <svg viewBox="0 0 400 400" className="w-full max-w-[480px]">
              <defs>
                <style>{`
                  @keyframes dashFlow {
                    to { stroke-dashoffset: -20; }
                  }
                  .flow-line {
                    animation: dashFlow 1.5s linear infinite;
                  }
                `}</style>
              </defs>

              {/* Connection lines from each guild to center */}
              {guildCircles.map((guild) => {
                const angleRad = (guild.angle * Math.PI) / 180
                const gx = centerX + radius * Math.cos(angleRad)
                const gy = centerY + radius * Math.sin(angleRad)
                return (
                  <line
                    key={guild.id}
                    x1={centerX}
                    y1={centerY}
                    x2={gx}
                    y2={gy}
                    stroke={guild.color}
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity={0.6}
                    className="flow-line"
                  />
                )
              })}

              {/* Cross-guild connections */}
              {guildCircles.map((guild, i) => {
                const next = guildCircles[(i + 1) % guildCircles.length]
                const a1 = (guild.angle * Math.PI) / 180
                const a2 = (next.angle * Math.PI) / 180
                return (
                  <line
                    key={`cross-${guild.id}`}
                    x1={centerX + radius * Math.cos(a1)}
                    y1={centerY + radius * Math.sin(a1)}
                    x2={centerX + radius * Math.cos(a2)}
                    y2={centerY + radius * Math.sin(a2)}
                    stroke="#1E3A5F"
                    strokeWidth="0.8"
                    strokeDasharray="3 3"
                    opacity={0.4}
                    className="flow-line"
                  />
                )
              })}

              {/* Central hub */}
              <circle cx={centerX} cy={centerY} r="40" fill="#007B7F15" stroke="#007B7F" strokeWidth="2" />
              <text x={centerX} y={centerY - 6} textAnchor="middle" dominantBaseline="middle" fill="#007B7F" fontSize="9" fontWeight="700">
                JCorp Data
              </text>
              <text x={centerX} y={centerY + 6} textAnchor="middle" dominantBaseline="middle" fill="#007B7F" fontSize="9" fontWeight="700">
                Fabric
              </text>

              {/* Guild nodes */}
              {guildCircles.map((guild) => {
                const angleRad = (guild.angle * Math.PI) / 180
                const gx = centerX + radius * Math.cos(angleRad)
                const gy = centerY + radius * Math.sin(angleRad)
                return (
                  <g key={guild.id}>
                    <circle cx={gx} cy={gy} r={nodeRadius} fill={`${guild.color}15`} stroke={guild.color} strokeWidth="1.5" />
                    <text x={gx} y={gy + 1} textAnchor="middle" dominantBaseline="middle" fill={guild.color} fontSize="8" fontWeight="600">
                      {guild.label}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* Privacy Sidebar */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Privacy & Governance</h3>
          <div className="space-y-4">
            {privacyBadges.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: `${badge.color}08`, border: `1px solid ${badge.color}25` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${badge.color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: badge.color }} />
                  </div>
                  <span className="text-xs font-medium text-text-primary">{badge.label}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 ml-auto shrink-0" style={{ color: badge.color }} />
                </div>
              )
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <h4 className="text-xs font-semibold text-text-primary mb-3">Data Classification</h4>
            <div className="space-y-2">
              {Object.entries(classificationColors).map(([label, colors]) => (
                <div key={label} className="flex items-center gap-2">
                  <div className={cn('w-2.5 h-2.5 rounded-full', colors.bg)} style={{ backgroundColor: label === 'Public' ? '#22C55E' : label === 'Internal' ? '#3B82F6' : label === 'Restricted' ? '#F59E0B' : '#EF4444' }} />
                  <span className={cn('text-xs', colors.text)}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
              <p className="text-[11px] text-text-secondary leading-relaxed">
                All cross-vertical queries use federated learning — raw data never leaves the guild boundary.
                Differential privacy guarantees epsilon &le; 1.0 for all public-facing aggregations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Catalogue Table */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-text-primary">Data Catalogue</h3>
            <span className="text-[10px] text-text-secondary ml-2">10 data assets</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-elevated">
                <th className="text-left text-[10px] font-semibold text-text-secondary uppercase tracking-wider px-5 py-3">Name</th>
                <th className="text-left text-[10px] font-semibold text-text-secondary uppercase tracking-wider px-5 py-3">Guild</th>
                <th className="text-left text-[10px] font-semibold text-text-secondary uppercase tracking-wider px-5 py-3">Classification</th>
                <th className="text-right text-[10px] font-semibold text-text-secondary uppercase tracking-wider px-5 py-3">Records</th>
                <th className="text-center text-[10px] font-semibold text-text-secondary uppercase tracking-wider px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {dataCatalogue.map((asset, i) => {
                const cls = classificationColors[asset.classification]
                return (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-surface-elevated/50 transition-colors">
                    <td className="px-5 py-3">
                      <span className="text-xs font-medium text-text-primary">{asset.name}</span>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                        style={{
                          color: asset.guildColor,
                          borderColor: `${asset.guildColor}30`,
                          backgroundColor: `${asset.guildColor}10`,
                        }}
                      >
                        {asset.guild}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span className={cn('text-[10px] font-mono font-bold px-2 py-0.5 rounded border', cls.bg, cls.text, cls.border)}>
                        {asset.classification}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="text-xs font-mono text-text-primary">{asset.records}</span>
                    </td>
                    <td className="px-5 py-3 text-center">
                      {asset.status === 'Active' ? (
                        <span className="inline-flex items-center gap-1 text-[10px] text-green-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] text-amber-400">
                          <AlertCircle className="w-3 h-3" />
                          Pending
                        </span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
