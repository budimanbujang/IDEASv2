'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, Wifi, Radio, Activity, Clock, Server, Shield,
  TrendingUp, Zap, Eye, BarChart3
} from 'lucide-react'

const networkSlices = [
  {
    name: 'URLLC',
    fullName: 'Ultra-Reliable Low Latency',
    color: '#22C55E',
    bandwidth: '100 Mbps',
    latency: '1 ms',
    devices: 1240,
    utilization: 72,
    useCases: ['Autonomous Vehicles', 'Industrial Robotics', 'Emergency Systems'],
    sla: '99.999%',
    jitter: '0.1 ms',
    packetLoss: '0.001%',
  },
  {
    name: 'eMBB',
    fullName: 'Enhanced Mobile Broadband',
    color: '#06B6D4',
    bandwidth: '1 Gbps',
    latency: '10 ms',
    devices: 8420,
    utilization: 87,
    useCases: ['Digital Twin Streaming', '4K Surveillance', 'AR/VR Labs'],
    sla: '99.9%',
    jitter: '2 ms',
    packetLoss: '0.01%',
  },
  {
    name: 'mMTC',
    fullName: 'Massive Machine-Type Comms',
    color: '#F59E0B',
    bandwidth: '10 Mbps',
    latency: '50 ms',
    devices: 48247,
    utilization: 96,
    useCases: ['IoT Sensors', 'Smart Meters', 'Environmental Monitoring'],
    sla: '99.5%',
    jitter: '10 ms',
    packetLoss: '0.1%',
  },
]

const coverageZones = [
  { name: 'Innovation District', signal: 98, color: '#06B6D4' },
  { name: 'Sandbox Zone', signal: 96, color: '#22C55E' },
  { name: 'Living Lab', signal: 94, color: '#A855F7' },
  { name: 'Co-Working Hub', signal: 97, color: '#F59E0B' },
  { name: 'Residential', signal: 91, color: '#3B82F6' },
  { name: 'Commercial', signal: 95, color: '#EC4899' },
]

// Sparkline data for each slice (12 data points representing last 12 hours)
const sparklineData: Record<string, number[]> = {
  URLLC: [68, 72, 70, 75, 71, 73, 69, 74, 72, 76, 71, 72],
  eMBB: [82, 85, 88, 84, 90, 87, 86, 91, 88, 85, 89, 87],
  mMTC: [91, 93, 94, 92, 95, 96, 94, 97, 95, 93, 96, 96],
}

function MiniSparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const h = 32
  const w = 120
  const step = w / (data.length - 1)
  const points = data.map((v, i) => `${i * step},${h - ((v - min) / range) * (h - 4) - 2}`).join(' ')
  const areaPoints = `0,${h} ${points} ${w},${h}`
  return (
    <svg width={w} height={h} className="flex-shrink-0">
      <polygon points={areaPoints} fill={`${color}15`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Current value dot */}
      <circle cx={w} cy={h - ((data[data.length - 1] - min) / range) * (h - 4) - 2} r="2.5" fill={color} />
    </svg>
  )
}

export default function NetworkPage() {
  const [selectedSlice, setSelectedSlice] = useState<string | null>(null)

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
              <Wifi className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-cyan-400 tracking-wide uppercase">5G Private Campus Network</h1>
              <p className="text-[10px] text-text-secondary">3 Network Slices — Full Precinct Coverage</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#060D18] border border-cyan-900/30 rounded px-3 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            <span className="text-[10px] font-mono text-green-400">All slices operational</span>
          </div>
          <div className="bg-[#060D18] border border-cyan-900/30 rounded px-3 py-1.5">
            <span className="text-[10px] font-mono text-text-secondary">Total: <span className="text-cyan-400">{(networkSlices.reduce((s, n) => s + n.devices, 0)).toLocaleString()}</span> devices</span>
          </div>
        </div>
      </div>

      {/* Network Slice Cards */}
      <div className="grid grid-cols-3 gap-4">
        {networkSlices.map((slice) => (
          <div
            key={slice.name}
            className={`bg-[#0A1220] border rounded-lg overflow-hidden cursor-pointer transition-all ${
              selectedSlice === slice.name
                ? 'ring-1 ring-white/20 border-white/20'
                : 'border-cyan-900/40 hover:border-cyan-900/60'
            }`}
            onClick={() => setSelectedSlice(selectedSlice === slice.name ? null : slice.name)}
          >
            {/* Slice header */}
            <div className="px-4 py-2.5" style={{ backgroundColor: `${slice.color}10`, borderBottom: `1px solid ${slice.color}30` }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse-glow" style={{ backgroundColor: slice.color }} />
                  <span className="text-xs font-bold uppercase" style={{ color: slice.color }}>{slice.name}</span>
                </div>
                <span className="text-[9px] text-text-secondary">{slice.fullName}</span>
              </div>
            </div>

            <div className="p-4">
              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#060D18] border border-cyan-900/20 rounded p-2.5 text-center">
                  <div className="text-lg font-mono font-bold text-text-primary">{slice.bandwidth}</div>
                  <div className="text-[9px] text-text-secondary">Bandwidth</div>
                </div>
                <div className="bg-[#060D18] border border-cyan-900/20 rounded p-2.5 text-center">
                  <div className="text-lg font-mono font-bold" style={{ color: slice.color }}>{slice.latency}</div>
                  <div className="text-[9px] text-text-secondary">Latency</div>
                </div>
              </div>

              {/* Devices */}
              <div className="flex items-center justify-between mb-2 text-[10px]">
                <span className="text-text-secondary">Connected Devices</span>
                <span className="font-mono font-bold text-text-primary">{slice.devices.toLocaleString()}</span>
              </div>

              {/* Utilization bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="text-text-secondary">Utilization</span>
                  <span className="font-mono" style={{ color: slice.color }}>{slice.utilization}%</span>
                </div>
                <div className="h-2.5 bg-[#0D1A2A] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${slice.utilization}%`,
                      backgroundColor: slice.utilization > 90 ? '#F59E0B' : slice.color,
                    }}
                  />
                </div>
              </div>

              {/* Sparkline */}
              <div className="mb-3">
                <div className="text-[9px] text-text-secondary mb-1">Utilization — last 12h</div>
                <MiniSparkline data={sparklineData[slice.name]} color={slice.color} />
              </div>

              {/* Additional metrics */}
              <div className="grid grid-cols-3 gap-2 text-[10px] mb-3">
                <div className="text-center">
                  <div className="font-mono font-bold text-text-primary">{slice.sla}</div>
                  <div className="text-[8px] text-text-secondary">SLA</div>
                </div>
                <div className="text-center">
                  <div className="font-mono font-bold text-text-primary">{slice.jitter}</div>
                  <div className="text-[8px] text-text-secondary">Jitter</div>
                </div>
                <div className="text-center">
                  <div className="font-mono font-bold text-text-primary">{slice.packetLoss}</div>
                  <div className="text-[8px] text-text-secondary">Pkt Loss</div>
                </div>
              </div>

              {/* Use cases */}
              <div className="flex flex-wrap gap-1">
                {slice.useCases.map(uc => (
                  <span
                    key={uc}
                    className="text-[8px] px-1.5 py-0.5 rounded border"
                    style={{
                      backgroundColor: `${slice.color}08`,
                      borderColor: `${slice.color}30`,
                      color: slice.color,
                    }}
                  >
                    {uc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Coverage + Performance */}
      <div className="grid grid-cols-12 gap-4">
        {/* Coverage Visualization */}
        <div className="col-span-7 bg-[#0A1220] border border-cyan-900/40 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-cyan-400" />
              <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Coverage by Zone</h2>
            </div>
            <span className="text-[10px] text-text-secondary">Avg signal strength: <span className="font-mono text-green-400">95.2%</span></span>
          </div>
          {/* Zone grid with signal strength */}
          <div className="bg-[#060D18] border border-cyan-900/20 rounded p-4">
            <div className="grid grid-cols-3 gap-3">
              {coverageZones.map((zone) => (
                <div
                  key={zone.name}
                  className="rounded border p-3 relative overflow-hidden"
                  style={{
                    backgroundColor: `${zone.color}08`,
                    borderColor: `${zone.color}30`,
                  }}
                >
                  {/* Signal overlay gradient */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `radial-gradient(circle at center, ${zone.color} 0%, transparent 70%)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold text-text-primary">{zone.name}</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((bar) => (
                          <div
                            key={bar}
                            className="w-1 rounded-sm"
                            style={{
                              height: `${bar * 3 + 2}px`,
                              backgroundColor: bar <= Math.round(zone.signal / 20) ? zone.color : '#1E3A5F',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-mono font-bold" style={{ color: zone.color }}>{zone.signal}%</span>
                      <span className="text-text-secondary">signal strength</span>
                    </div>
                    {/* Mini bar for each slice */}
                    <div className="mt-2 space-y-1">
                      {networkSlices.map((slice) => (
                        <div key={slice.name} className="flex items-center gap-1.5">
                          <span className="text-[8px] font-mono text-text-secondary w-10">{slice.name}</span>
                          <div className="flex-1 h-1 bg-[#0D1A2A] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${zone.signal - Math.random() * 8}%`,
                                backgroundColor: slice.color,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="col-span-5 space-y-3">
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">Network Performance</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Total Throughput', value: '14.2 Gbps', pct: 71, color: '#06B6D4' },
                { label: 'Avg Latency', value: '4.2 ms', pct: 92, color: '#22C55E' },
                { label: 'Packet Delivery', value: '99.97%', pct: 99, color: '#22C55E' },
                { label: 'Handover Success', value: '99.8%', pct: 99, color: '#22C55E' },
                { label: 'Spectrum Efficiency', value: '8.4 b/s/Hz', pct: 84, color: '#06B6D4' },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="text-text-secondary">{m.label}</span>
                    <span className="font-mono text-text-primary">{m.value}</span>
                  </div>
                  <div className="h-1.5 bg-[#0D1A2A] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${m.pct}%`, backgroundColor: m.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <Server className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">Infrastructure</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Base Stations', value: '24', icon: Radio },
                { label: 'Small Cells', value: '148', icon: Wifi },
                { label: 'MEC Servers', value: '6', icon: Server },
                { label: 'Core Uplinks', value: '4x 100G', icon: Zap },
              ].map((item) => (
                <div key={item.label} className="bg-[#060D18] border border-cyan-900/20 rounded p-2.5 flex items-center gap-2">
                  <item.icon className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-mono font-bold text-text-primary">{item.value}</div>
                    <div className="text-[9px] text-text-secondary">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-green-400" />
              <h3 className="text-xs font-bold text-green-400 uppercase">Security</h3>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="text-center">
                <div className="font-mono font-bold text-green-400">256-bit</div>
                <div className="text-[9px] text-text-secondary">Encryption</div>
              </div>
              <div className="text-center">
                <div className="font-mono font-bold text-green-400">0</div>
                <div className="text-[9px] text-text-secondary">Intrusions</div>
              </div>
              <div className="text-center">
                <div className="font-mono font-bold text-text-primary">SIM-based</div>
                <div className="text-[9px] text-text-secondary">Auth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
