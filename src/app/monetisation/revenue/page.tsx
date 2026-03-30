'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, DollarSign, TrendingUp, Users, Building2,
  BarChart3, PieChart, ArrowUpRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type RevenueProduct = {
  name: string
  year1: number
  year2: number
  year3: number
  year4: number
  year5: number
  color: string
}

const revenueByProduct: RevenueProduct[] = [
  { name: 'SaaS Subscriptions', year1: 2.5, year2: 8.0, year3: 18.0, year4: 32.0, year5: 50.0, color: '#007B7F' },
  { name: 'Data Marketplace', year1: 0.5, year2: 3.0, year3: 10.0, year4: 22.0, year5: 40.0, color: '#3B82F6' },
  { name: 'API & Platform Fees', year1: 1.0, year2: 4.0, year3: 12.0, year4: 25.0, year5: 42.0, color: '#A855F7' },
  { name: 'IaaP Licensing', year1: 0, year2: 0, year3: 5.0, year4: 15.0, year5: 35.0, color: '#D4A847' },
  { name: 'Venture Returns', year1: 0, year2: 0, year3: 2.0, year4: 8.0, year5: 18.0, color: '#22C55E' },
  { name: 'Events & Sponsorship', year1: 1.0, year2: 2.0, year3: 3.5, year4: 5.0, year5: 7.0, color: '#F59E0B' },
]

const customerSegments = [
  { segment: 'Anchor Tenants', share: 35, color: '#007B7F', description: 'Enterprise-grade subscriptions, premium data access, bespoke digital twin modules' },
  { segment: 'Resident Companies', share: 25, color: '#3B82F6', description: 'Standard platform access, guild membership, co-working digital tools' },
  { segment: 'Explorer / Startups', share: 15, color: '#A855F7', description: 'Freemium to paid conversion, accelerator programme fees, sandbox access' },
  { segment: 'Federation Partners', share: 15, color: '#D4A847', description: 'IaaP licensing fees, cross-platform data exchange, federated service commissions' },
  { segment: 'Government & Institutional', share: 10, color: '#22C55E', description: 'Dashboard licensing, regulatory sandbox fees, smart city analytics' },
]

const projections = [
  { label: 'Year 1', revenue: 5.0, arr: 3.5, tenants: 45, nrr: '-' },
  { label: 'Year 2', revenue: 17.0, arr: 12.0, tenants: 120, nrr: '108%' },
  { label: 'Year 3', revenue: 50.5, arr: 38.0, tenants: 280, nrr: '115%' },
  { label: 'Year 4', revenue: 107.0, arr: 82.0, tenants: 450, nrr: '122%' },
  { label: 'Year 5', revenue: 192.0, arr: 155.0, tenants: 650, nrr: '128%' },
]

const maxRevenue = 192

/* ------------------------------------------------------------------ */
/*  SVG Charts                                                         */
/* ------------------------------------------------------------------ */

function RevenueBarChart() {
  const years = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5']
  const barWidth = 50
  const gap = 30
  const chartH = 220
  const chartW = years.length * (barWidth + gap) + gap

  return (
    <svg viewBox={`0 0 ${chartW + 60} ${chartH + 50}`} className="w-full h-auto" style={{ maxWidth: 500 }}>
      {/* Y axis labels */}
      {[0, 50, 100, 150, 200].map((v) => {
        const y = chartH - (v / 200) * chartH + 10
        return (
          <g key={v}>
            <text x="36" y={y + 4} textAnchor="end" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">{v}M</text>
            <line x1="42" y1={y} x2={chartW + 50} y2={y} stroke="#334155" strokeWidth="0.5" strokeDasharray="4" />
          </g>
        )
      })}

      {/* Bars */}
      {years.map((yr, yi) => {
        let cumY = 0
        const x = 50 + yi * (barWidth + gap)
        const yearKey = `year${yi + 1}` as keyof RevenueProduct

        return (
          <g key={yr}>
            {revenueByProduct.map((p) => {
              const val = p[yearKey] as number
              const h = (val / 200) * chartH
              const y = chartH - cumY - h + 10
              cumY += h
              return (
                <rect key={p.name} x={x} y={y} width={barWidth} height={Math.max(h, 0)} rx="3" fill={p.color} opacity={0.85} />
              )
            })}
            {/* Total label */}
            <text
              x={x + barWidth / 2}
              y={chartH - cumY + 10 - 5}
              textAnchor="middle"
              fill="#F1F5F9"
              fontSize="11"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
            >
              RM{projections[yi].revenue}M
            </text>
            {/* Year label */}
            <text
              x={x + barWidth / 2}
              y={chartH + 28}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="11"
              fontFamily="Inter, sans-serif"
            >
              {yr}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function DonutChart() {
  const radius = 65
  const strokeWidth = 22
  const circumference = 2 * Math.PI * radius
  const total = customerSegments.reduce((s, d) => s + d.share, 0)
  let cumulativeOffset = 0

  return (
    <svg viewBox="0 0 200 200" className="w-full h-auto" style={{ maxWidth: 200 }}>
      {customerSegments.map((seg) => {
        const pct = seg.share / total
        const dashLength = pct * circumference
        const dashGap = circumference - dashLength
        const rotation = (cumulativeOffset / total) * 360 - 90
        cumulativeOffset += seg.share
        return (
          <circle
            key={seg.segment}
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dashLength} ${dashGap}`}
            strokeDashoffset={0}
            strokeLinecap="butt"
            transform={`rotate(${rotation} 100 100)`}
          />
        )
      })}
      <text x="100" y="95" textAnchor="middle" fill="#F1F5F9" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">
        Revenue
      </text>
      <text x="100" y="112" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">
        by Segment
      </text>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function RevenuePage() {
  const [selectedYear, setSelectedYear] = useState(4) // Year 5

  return (
    <div className="min-h-screen bg-surface text-text-primary p-6 lg:p-10 space-y-10">
      {/* Breadcrumb */}
      <Link href="/monetisation" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-primary">
        <ArrowLeft size={14} /> Back to Monetisation
      </Link>

      {/* Header */}
      <header>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight flex items-center gap-3">
          <DollarSign size={32} className="text-primary" />
          Revenue Analytics
        </h1>
        <p className="mt-2 text-text-secondary max-w-3xl">
          Five-year revenue projections across product lines, customer segments and key SaaS metrics.
        </p>
      </header>

      {/* ---- Top-line KPIs ---- */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Year 5 Revenue', value: 'RM192M', icon: TrendingUp, color: '#007B7F' },
          { label: 'Year 5 ARR', value: 'RM155M', icon: BarChart3, color: '#3B82F6' },
          { label: 'Active Tenants (Y5)', value: '650', icon: Building2, color: '#A855F7' },
          { label: 'Net Revenue Retention', value: '128%', icon: ArrowUpRight, color: '#22C55E' },
        ].map((kpi) => {
          const Icon = kpi.icon
          return (
            <div
              key={kpi.label}
              className="rounded-2xl border border-border bg-surface p-5 space-y-2"
              style={{ borderTopColor: kpi.color, borderTopWidth: 3 }}
            >
              <Icon size={22} style={{ color: kpi.color }} />
              <span className="text-2xl font-extrabold" style={{ color: kpi.color }}>{kpi.value}</span>
              <span className="text-xs text-text-secondary block">{kpi.label}</span>
            </div>
          )
        })}
      </section>

      {/* ---- Revenue by Product ---- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Revenue by Product (5-Year Stacked)</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-border bg-surface p-6">
            <RevenueBarChart />
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 space-y-3">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Product Lines</h3>
            {revenueByProduct.map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: p.color }} />
                <span className="text-sm flex-1">{p.name}</span>
                <span className="text-xs text-text-secondary">RM{p.year5}M (Y5)</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Customer Segments ---- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Customer Segment Breakdown</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex items-center justify-center rounded-2xl border border-border bg-surface p-6">
            <DonutChart />
          </div>
          <div className="lg:col-span-2 space-y-3">
            {customerSegments.map((seg) => (
              <div key={seg.segment} className="rounded-xl border border-border bg-surface p-4 flex gap-4 items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: seg.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{seg.segment}</span>
                    <span className="text-sm font-bold" style={{ color: seg.color }}>{seg.share}%</span>
                  </div>
                  <p className="text-xs text-text-secondary mt-1">{seg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Projections Table ---- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Five-Year Projections</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-white/[.02]">
                <th className="p-4 text-left text-text-secondary font-medium">Metric</th>
                {projections.map((p) => (
                  <th key={p.label} className="p-4 text-right text-text-secondary font-medium">{p.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-semibold">Total Revenue (RM M)</td>
                {projections.map((p) => (
                  <td key={p.label} className="p-4 text-right font-bold text-primary">{p.revenue}</td>
                ))}
              </tr>
              <tr className="border-b border-border bg-white/[.02]">
                <td className="p-4 font-semibold">ARR (RM M)</td>
                {projections.map((p) => (
                  <td key={p.label} className="p-4 text-right">{p.arr}</td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-semibold">Active Tenants</td>
                {projections.map((p) => (
                  <td key={p.label} className="p-4 text-right">{p.tenants}</td>
                ))}
              </tr>
              <tr className="border-b border-border bg-white/[.02]">
                <td className="p-4 font-semibold">Net Revenue Retention</td>
                {projections.map((p) => (
                  <td key={p.label} className="p-4 text-right" style={{ color: p.nrr !== '-' ? '#22C55E' : '#94A3B8' }}>
                    {p.nrr}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Revenue Growth Bar ---- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Year-over-Year Growth</h2>
        <div className="space-y-3">
          {projections.map((p, i) => {
            const pct = (p.revenue / maxRevenue) * 100
            const growth = i > 0 ? Math.round(((p.revenue - projections[i - 1].revenue) / projections[i - 1].revenue) * 100) : 0
            return (
              <div key={p.label} className="flex items-center gap-4">
                <span className="w-12 text-sm font-medium text-text-secondary">{p.label}</span>
                <div className="flex-1 bg-white/5 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full rounded-full flex items-center justify-end pr-2 transition-all"
                    style={{ width: `${pct}%`, backgroundColor: '#007B7F' }}
                  >
                    <span className="text-[10px] font-bold text-white">RM{p.revenue}M</span>
                  </div>
                </div>
                {i > 0 && (
                  <span className="text-xs font-semibold text-green-400 w-16 text-right">+{growth}%</span>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
