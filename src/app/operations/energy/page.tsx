'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, Zap, Sun, Battery, ArrowUpDown, Leaf, Building,
  TrendingDown, TrendingUp, BarChart3, Flame
} from 'lucide-react'

const zones = [
  { name: 'Innovation District', solar: 680, consumption: 520, storage: 180, storageMax: 250, carbonSaved: 42 },
  { name: 'Sandbox Zone', solar: 420, consumption: 310, storage: 120, storageMax: 150, carbonSaved: 28 },
  { name: 'Living Lab', solar: 380, consumption: 280, storage: 95, storageMax: 120, carbonSaved: 24 },
  { name: 'Co-Working Hub', solar: 280, consumption: 240, storage: 65, storageMax: 80, carbonSaved: 16 },
  { name: 'Residential', solar: 420, consumption: 320, storage: 90, storageMax: 120, carbonSaved: 31 },
  { name: 'Commercial', solar: 220, consumption: 330, storage: 50, storageMax: 80, carbonSaved: 12 },
]

const hourlyData = [
  { hour: '00', solar: 0, consumption: 180 },
  { hour: '02', solar: 0, consumption: 140 },
  { hour: '04', solar: 0, consumption: 120 },
  { hour: '06', solar: 80, consumption: 200 },
  { hour: '08', solar: 420, consumption: 480 },
  { hour: '10', solar: 780, consumption: 620 },
  { hour: '12', solar: 960, consumption: 700 },
  { hour: '14', solar: 880, consumption: 680 },
  { hour: '16', solar: 640, consumption: 720 },
  { hour: '18', solar: 280, consumption: 800 },
  { hour: '20', solar: 20, consumption: 540 },
  { hour: '22', solar: 0, consumption: 320 },
]

const trades = [
  { from: 'Innovation District', to: 'Commercial', amount: 120, price: 'RM 480', time: '09:42', status: 'completed' },
  { from: 'Sandbox Zone', to: 'Co-Working Hub', amount: 85, price: 'RM 340', time: '09:28', status: 'completed' },
  { from: 'Living Lab', to: 'Residential', amount: 60, price: 'RM 240', time: '09:15', status: 'pending' },
  { from: 'Residential', to: 'Commercial', amount: 45, price: 'RM 180', time: '08:55', status: 'completed' },
]

export default function EnergyManagement() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  const totalSolar = zones.reduce((s, z) => s + z.solar, 0)
  const totalConsumption = zones.reduce((s, z) => s + z.consumption, 0)
  const totalStorage = zones.reduce((s, z) => s + z.storage, 0)
  const totalStorageMax = zones.reduce((s, z) => s + z.storageMax, 0)
  const totalCarbonSaved = zones.reduce((s, z) => s + z.carbonSaved, 0)
  const maxSolar = Math.max(...hourlyData.map(d => d.solar))
  const maxConsumption = Math.max(...hourlyData.map(d => d.consumption))
  const chartMax = Math.max(maxSolar, maxConsumption)

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
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-cyan-400 tracking-wide uppercase">Energy Management System</h1>
              <p className="text-[10px] text-text-secondary">Zone-by-Zone Monitoring — Peer-to-Peer Trading</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 bg-[#060D18] border border-cyan-900/30 rounded px-4 py-2">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-400" />
              <div>
                <div className="text-sm font-mono font-bold text-amber-400">{(totalSolar / 1000).toFixed(1)} MW</div>
                <div className="text-[9px] text-text-secondary">solar gen</div>
              </div>
            </div>
            <div className="w-px h-6 bg-cyan-900/40" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="text-sm font-mono font-bold text-cyan-400">{(totalConsumption / 1000).toFixed(1)} MW</div>
                <div className="text-[9px] text-text-secondary">consumption</div>
              </div>
            </div>
            <div className="w-px h-6 bg-cyan-900/40" />
            <div className="flex items-center gap-2">
              <Battery className="w-4 h-4 text-green-400" />
              <div>
                <div className="text-sm font-mono font-bold text-green-400">{totalStorage} kW</div>
                <div className="text-[9px] text-text-secondary">stored</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* Zone Energy Dashboard */}
        <div className="col-span-8 space-y-4">
          {/* Zone Cards */}
          <div className="grid grid-cols-3 gap-3">
            {zones.map((zone) => {
              const surplus = zone.solar - zone.consumption
              const storagePct = (zone.storage / zone.storageMax) * 100
              return (
                <div
                  key={zone.name}
                  className={`bg-[#0A1220] border rounded-lg p-3 cursor-pointer transition-all ${
                    selectedZone === zone.name
                      ? 'border-cyan-500/50 ring-1 ring-cyan-500/20'
                      : 'border-cyan-900/40 hover:border-cyan-900/60'
                  }`}
                  onClick={() => setSelectedZone(selectedZone === zone.name ? null : zone.name)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-text-primary">{zone.name}</span>
                    <div className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                      surplus >= 0
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {surplus >= 0 ? '+' : ''}{surplus} kW
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] mb-2">
                    <div>
                      <Sun className="w-3 h-3 text-amber-400 inline mr-1" />
                      <span className="font-mono text-text-primary">{zone.solar} kW</span>
                    </div>
                    <div>
                      <Zap className="w-3 h-3 text-cyan-400 inline mr-1" />
                      <span className="font-mono text-text-primary">{zone.consumption} kW</span>
                    </div>
                  </div>
                  {/* Battery bar */}
                  <div className="flex items-center gap-2">
                    <Battery className="w-3 h-3 text-green-400" />
                    <div className="flex-1 h-2 bg-[#0D1A2A] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${storagePct > 60 ? 'bg-green-500' : storagePct > 30 ? 'bg-amber-500' : 'bg-red-500'}`}
                        style={{ width: `${storagePct}%` }}
                      />
                    </div>
                    <span className="text-[9px] font-mono text-text-secondary">{storagePct.toFixed(0)}%</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Solar Output Chart */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Generation vs Consumption — Today</h2>
              </div>
              <div className="flex items-center gap-4 text-[10px]">
                <div className="flex items-center gap-1"><div className="w-3 h-2 rounded-sm bg-amber-500/60" /><span className="text-text-secondary">Solar</span></div>
                <div className="flex items-center gap-1"><div className="w-3 h-2 rounded-sm bg-cyan-500/60" /><span className="text-text-secondary">Consumption</span></div>
              </div>
            </div>
            {/* Bar chart using divs */}
            <div className="flex items-end gap-2 h-40">
              {hourlyData.map((d) => (
                <div key={d.hour} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end gap-0.5" style={{ height: '130px' }}>
                    <div
                      className="flex-1 rounded-t bg-amber-500/50 border border-amber-500/30 transition-all hover:bg-amber-500/70"
                      style={{ height: `${chartMax > 0 ? (d.solar / chartMax) * 100 : 0}%`, minHeight: d.solar > 0 ? '2px' : 0 }}
                    />
                    <div
                      className="flex-1 rounded-t bg-cyan-500/50 border border-cyan-500/30 transition-all hover:bg-cyan-500/70"
                      style={{ height: `${chartMax > 0 ? (d.consumption / chartMax) * 100 : 0}%`, minHeight: '2px' }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-text-secondary">{d.hour}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-4 space-y-3">
          {/* P2P Energy Trading */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <ArrowUpDown className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">P2P Energy Trading</h3>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            </div>
            <div className="space-y-2">
              {trades.map((trade, i) => (
                <div key={i} className="bg-[#060D18] border border-cyan-900/20 rounded p-2.5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[10px]">
                      <span className="text-green-400 font-semibold">{trade.from}</span>
                      <span className="text-text-secondary mx-1.5">&rarr;</span>
                      <span className="text-cyan-400 font-semibold">{trade.to}</span>
                    </div>
                    <span className="text-[9px] font-mono text-text-secondary">{trade.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono text-text-primary">{trade.amount} kWh</span>
                    <span className="font-mono text-amber-400">{trade.price}</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                      trade.status === 'completed'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {trade.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-cyan-900/20 text-[10px] text-text-secondary">
              <span className="font-mono text-cyan-400">RM 14,200</span> total traded today | <span className="font-mono text-green-400">24 trades</span> completed
            </div>
          </div>

          {/* Carbon Footprint */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-4 h-4 text-green-400" />
              <h3 className="text-xs font-bold text-green-400 uppercase">Carbon Footprint</h3>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl font-mono font-bold text-green-400">{totalCarbonSaved}</div>
              <div>
                <div className="text-[10px] text-text-primary">tonnes CO2 saved</div>
                <div className="text-[9px] text-text-secondary">this month vs grid baseline</div>
              </div>
              <TrendingDown className="w-5 h-5 text-green-400 ml-auto" />
            </div>
            {/* Zone breakdown */}
            <div className="space-y-1.5">
              {zones.map((zone) => (
                <div key={zone.name} className="flex items-center gap-2">
                  <span className="text-[9px] text-text-secondary w-28 truncate">{zone.name}</span>
                  <div className="flex-1 h-1.5 bg-[#0D1A2A] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400"
                      style={{ width: `${(zone.carbonSaved / totalCarbonSaved) * 100}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-green-400 w-8 text-right">{zone.carbonSaved}t</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Status */}
          <div className="bg-[#0A1220] border border-cyan-900/40 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-bold text-cyan-400 uppercase">Grid Summary</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Solar Efficiency', value: '94.2%', color: 'text-green-400' },
                { label: 'Grid Dependency', value: '24%', color: 'text-amber-400' },
                { label: 'Peak Shaving', value: '18%', color: 'text-cyan-400' },
                { label: 'Self-Sufficiency', value: '76%', color: 'text-green-400' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#060D18] border border-cyan-900/20 rounded p-2 text-center">
                  <div className={`text-sm font-mono font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[9px] text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
